import { NextRequest, NextResponse } from 'next/server';
import cacheHandler from '../utils/cache-handler';
import { fetchFromApi } from '../utils/helpers';

const API_URL = process.env.API_URL!;

export async function GET(req: NextRequest) {
    const { url } = req;
    const { searchParams } = new URL(url);
    const route = searchParams.get("route");

    if (!route) {
        return NextResponse.json({ success: false, error: "Missing route parameter" }, { status: 400 });
    }

    // 1. find existing keys with format like 'api:/api/home'
    const keysFound = await cacheHandler.findKeys(`api:${route}*`);
    console.log('keysFound', keysFound);
    try {
        // 2. create Promise array with for new data all keys found
        const fetchPromises = keysFound.map(async (key) => {
            try {
                // #2.1 fetching API data for each key
                const pathKey = key.replace(/^api:/, '');
                const path = `${API_URL}${pathKey}`;

                const response = await fetchFromApi(path);

                if (!response.ok) {
                    throw new Error(`REVALIDATION_RESPONSE_ERROR: ${response.status} for path ${path}`);
                }

                const data = await response.json();
                // #2.2 save data on cache for each key
                await cacheHandler.set(key, JSON.stringify(data));

                return { key, success: true };
            } catch (error) {
                console.error(`REVALIDATION_KEY_ERROR: ${key}:`, error);
                return { key, success: false };
            }
        });

        // 3. fetch all keys data(parallel)
        const results = await Promise.all(fetchPromises);

        // 4. return errors if there is failures
        const failures = results.filter(result => !result.success);
        if (failures.length > 0) {
            return NextResponse.json({
                success: false,
                message: "Some keys failed to revalidate",
                failures: failures.map(f => ({ key: f.key }))
            }, { status: 207 }); // 207(Multi-Status) for partial success
        }
        // 5. end of the revalidation
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("REVALIDATION_ERROR: ", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}