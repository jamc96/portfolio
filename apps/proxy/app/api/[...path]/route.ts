import cacheHandler from '@/app/utils/cache-handler';
import { NextRequest, NextResponse } from "next/server";
const API_URL = process.env.API_URL!;

async function fetchFromApi(path: string, state?: 'MISS' | 'PREVIEW' | 'FALLBACK'): Promise<Response> {
    console.log(`GET ${path.replace(API_URL, '')} [${state}]`);

    return fetch(path, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
    });
}

async function getCachedData(path: string): Promise<any> {
    const pathKey = path.replace(API_URL, '')
    const cacheKey = `api:${pathKey}`;

    try {
        //cache[HIT]: data exist in cache database
        const cached = await cacheHandler.get(cacheKey);
        if (cached) {
            console.log(`GET ${pathKey} [HIT]`)
            return JSON.parse(cached);
        }
        //cache[MISS]: get the data from the API if
        const response = await fetchFromApi(path);

        if (!response.ok) throw new Error(`CACHE_HANDLER_API_ERROR:  ${response.status}`);
        const data = await response.json();

        // save data on cache after fetching in API
        await cacheHandler.set(cacheKey, JSON.stringify(data));
        return data;

    } catch (error) {
        console.error("CACHE_HANDLER_FALLBACK_ERROR: ", error);
        // fallback: retry getting the data from the API
        const response = await fetchFromApi(path, 'FALLBACK');
        const data = await response.json();
        return data;
    }
}

export async function GET(req: NextRequest, res: NextResponse) {
    const { url, nextUrl: { search } } = req;
    const { pathname, searchParams } = new URL(url);
    const targetUrl = `${API_URL}${pathname}${search}`;
    const isPreview = searchParams.get("preview") === "true";

    try {
        if (isPreview) {
            // preview mode: Always fetch from API
            const response = await fetchFromApi(targetUrl, 'PREVIEW');
            const data = await response.json();
            return NextResponse.json(data);
        } else {
            // use cache data[HIT] or fetch data from API if [MISS | FALLBACK]
            const cachedData = await getCachedData(targetUrl);
            return NextResponse.json(cachedData);
        }
    } catch (error) {
        console.error("GET_ROUTE_HANDLER_ERROR: ", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}