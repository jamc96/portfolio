## Web Application (@monorepo/web)

### Overview
This is the Next.js application in the monorepo, serving as the front-end for the project.

### 🚀 Getting Started

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
