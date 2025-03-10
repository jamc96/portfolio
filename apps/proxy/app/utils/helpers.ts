const API_URL = process.env.API_URL!;
export async function fetchFromApi(path: string, state?: 'MISS' | 'PREVIEW' | 'FALLBACK' | 'REVALIDATE'): Promise<Response> {
    console.log(`GET ${path.replace(API_URL, '')} [${state || 'MISS'}]`);

    return fetch(path, {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
        cache: 'no-store'
    });
}