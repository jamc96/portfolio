import Redis from "ioredis";

const CACHE_TTL = 365 * 24 * 60 * 60; // 1 year

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
};

export default cacheHandler;