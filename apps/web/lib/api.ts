import qs from 'qs';
const WEB_URL = process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000';
const production = process.env.NODE_ENV !== 'development';

interface FetchAPIProps {
    path: string;
    isCollection?: boolean;
    options?: RequestInit;
    query?: QueryStringQuery;
}
interface APIResponse<T> {
    data: T;
    meta?: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}
export async function fetchAPI<T>({ path, options, query }: FetchAPIProps) {
    const parsedQuery = qs.stringify(query, { encodeValuesOnly: true })
    const url = new URL(`${path}?${parsedQuery}`, WEB_URL)

    const response = await fetch(url, options);

    if (!response.ok) {
        const contentType = response.headers.get('Content-Type');
        const requestUrl = !production ? ` Request url: ${url}` : ''
        let errorMessage = `Request failed with status ${response.status} ${requestUrl}`;

        if (contentType && contentType.includes('application/json')) {
            const errorData = await response.json();
            errorMessage = `Request failed: ${JSON.stringify({ error: errorData }, null, 2)} ${requestUrl}`;
        } else {
            const errorText = await response.text();
            errorMessage += ` (Non-JSON response: ${errorText.slice(0, 100)}) ${requestUrl}`;
        }

        throw new Error(errorMessage);
    }

    const { data } = await response.json() as APIResponse<T>;
    if (!data) throw new Error('No data found while fetching')

    return data;
}
