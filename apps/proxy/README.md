![diagram](https://github.com/user-attachments/assets/2657ab89-e353-4c64-988d-9b84692fda90)

# Custom Cache and Revalidation Proxy Service

The custom cache and revalidation proxy service is designed to optimize content delivery for a website by managing caching and ensuring content freshness, particularly for production and preview environments. It sits between a Content API (backend) and the Website (frontend), using a Cache DB to store and retrieve content efficiently. The proxy handles three key behaviors:

1.  **Caching for Production (Website Production)**

    The proxy uses a caching strategy for the production website to improve performance. On the first request, it fetches data from the Content API (via `API_URL`) and stores it in the Cache DB (via `CACHE_URL`). Subsequent requests are served directly from the cache using the `[cache-any]` flow, reducing latency and API load.

2.  **No-Cache for Preview (Website Preview)**

    The website sets `RUNTIME_ENV = preview` for the preview environment, signaling the proxy to bypass the cache entirely using the `[no-cache]` flow.
    The proxy forwards requests directly to the Content API (via `API_URL`) to fetch the latest published data, which must already be published in the Content API for testing. The response is returned directly to the Website Preview, ensuring the editor sees the current published production data from the Content API. However, the cache in the Cache DB is not automatically revalidated until the revalidation process is triggered.

3.  **On-Demand Revalidation**

        The proxy supports an on-demand revalidation mechanism (via `[revalidation]`), triggered by specific actions from the Content API admin. This ensures content safety during publish actions or manual updates.

    Revalidation Process: When the Content API admin triggers a " Revalidate Content" button in the Content API admin interface, a revalidation request is sent to `REVALIDATE_URL`, which can point to any service (but in this case, it’s the proxy service). The revalidation endpoint (e.g., in the proxy service) communicates directly with the Content API (via `API_URL`) to fetch the updated published data for the specified routes, bypassing any prior cache validation. The proxy then saves the updated data to the Cache DB (via `CACHE_URL`), ensuring the cached content reflects the latest published data from the Content API.

The proxy service acts as a middleware, balancing performance (via caching in production) and freshness (via no-cache in preview and revalidation). It ensures safe content handling by allowing controlled updates (e.g., publishing actions) and providing immediate access to published content in preview mode or via revalidation.

## Key Variables and Their Roles

- **CACHE_URL**: Points to the Cache DB endpoint, used by the proxy to store and retrieve cached content for production requests.
- **API_URL**: Points to the Content API endpoint, used by the proxy to fetch fresh or published data when caching is bypassed or during initial caching/revalidation.
- **PROXY_URL**: Points to the proxy service endpoint, used by the website (production and preview) to send requests, which the proxy then routes appropriately.
- **RUNTIME_ENV**: A variable in the web project, set to preview to instruct the proxy to ignore the cache and fetch directly from the Content API, ensuring preview environments show published production data.
- **REVALIDATE_URL**: Points to the revalidation endpoint (which can be any service, but in this case, it’s the proxy service), used to trigger on-demand revalidation for specific routes or actions (e.g., publishing or manual revalidation by the Content API admin).

## Example Flows for Understanding

**Flow 1: Production Website Request (Cached Response)**
_Scenario: A user visits a page on the Website Production._

Steps:

1.  The Website Production sends a request to `PROXY_URL`.
2.  The Proxy API checks `RUNTIME_ENV` (not set to preview, so caching is enabled).
3.  If the content is cached in the Cache DB (via `CACHE_URL`), the proxy returns the cached data using `[cache-any]`.
4.  If it’s the first request, the proxy fetches data from the Content API (via `API_URL`), saves it to the Cache DB, and returns it to the website.

> Outcome: Fast response from cache, reducing load on the Content API.

**Flow 2: Preview Website Request (No Cache)**
_Scenario: A content editor previews published content on the Website Preview._

Steps:

1.  The Website Preview sends a request to `PROXY_URL` with `RUNTIME_ENV = preview`.
2.  The Proxy API detects `RUNTIME_ENV = preview` and bypasses the cache using `[no-cache]`.
3.  The proxy forwards the request to the Content API (via API_URL) to fetch the latest published data.
4.  The response is returned directly to the Website Preview, ensuring the editor sees the current published production data from the Content API.

> Outcome: Ensures preview environments show the latest published
> production data, without relying on cached content.

**Flow 3: On-Demand Revalidation (Manual Update by Content API Admin)**
_Scenario: A Content API admin clicks a "Publish and Revalidate Content" button to update a specific page after publishing new content._

Steps:

1.  The Content API admin triggers the "Revalidate Content" button in the Content API admin interface, sending a revalidation request to `REVALIDATE_URL` (pointing to the proxy service in this case).
2.  The revalidation endpoint in the proxy service communicates directly with the Content API (via `API_URL`) to fetch the updated published data for the specified routes, bypassing any prior cache validation.
3.  The proxy saves the updated data to the Cache DB (via `CACHE_URL`), ensuring the cached content reflects the latest published data from the Content API.

> Outcome: Ensures specific routes reflect the latest published content
> safely, updating the Cache DB without checking the existing cache.

## 🚀 Getting Started (@monorepo/proxy)

#### 1️⃣ Install Dependencies

```sh
pnpm install
```

#### 2️⃣ Run Development Mode

```sh
pnpm dev
```

#### 3️⃣ Build Application

```sh
pnpm build
```

### 🔧 Deployment

#### Deploying to Vercel

1. Install Vercel CLI:
   ```sh
   pnpm add -g vercel
   ```
2. Authenticate:
   ```sh
   vercel login
   ```
3. Deploy:
   ```sh
   vercel --prod
   ```
4. **Corepack Issue Fix:** Add the following environment variable in Vercel:

   - **Key**: `ENABLE_EXPERIMENTAL_COREPACK`
   - **Value**: `1`

   Also, ensure `packageManager` is set in `package.json`:

   ```json
   {
     "packageManager": "pnpm@9"
   }
   ```

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
