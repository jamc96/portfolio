import Redis from "ioredis";

const CACHE_TTL = 7 * 24 * 60 * 60; // one week

let redis: Redis;

try {
    redis = new Redis(process.env.CACHE_URL || "", {
        tls: process.env.CACHE_TLS === "true" ? {} : undefined,
        retryStrategy(times) {
            const delay = Math.min(times * 50, 2000); // backoff(2s)
            return delay;
        },
        maxRetriesPerRequest: 3,
    });
} catch (error) {
    console.error("CACHE_HANDLER_CONNECTION_ERROR: ", error);
    throw error;
}

const cacheHandler = {

    async get(key: string): Promise<string | null> {
        try {
            const value = await redis.get(key);
            return value;
        } catch (error) {
            console.error(`CACHE_HANDLER_GET_ERROR ${key}:`, error);
            throw error;
        }
    },

    async set(key: string, value: string): Promise<void> {
        try {
            await redis.set(key, value, "EX", CACHE_TTL);
        } catch (error) {
            console.error(`CACHE_HANDLER_SET_ERROR ${key}:`, error);
            throw error;
        }
    },
    async findKeys(pattern: string): Promise<string[]> {
        const keys: string[] = [];
        let cursor = "0";

        try {
            do {
                const [nextCursor, foundKeys] = await redis.scan(cursor, "MATCH", pattern, "COUNT", 100);
                cursor = nextCursor;
                keys.push(...foundKeys);
            } while (cursor !== "0");

            return keys;
        } catch (error) {
            console.error(`CACHE_HANDLER_SCAN_ERROR ${pattern}:`, error);
            throw error;
        }
    },
};

export default cacheHandler;