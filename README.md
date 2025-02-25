![Portfolio Banner](https://raw.githubusercontent.com/jamc96/portfolio/refs/heads/main/assets/Project-Banner.png)

# Portfolio - Monorepo

This is the **monorepo** for my personal portfolio, built using **Next.js** and managed with **pnpm** and **Turbo** for efficient development. It includes multiple applications and shared packages to streamline the development process.

## 📁 Structure

```
portfolio/
│── apps/
│   ├── web/       # Next.js Portfolio Website
│   ├── cms/       # Strapi CMS
│
│── packages/
│   ├── typescript-config/  # Shared TypeScript configurations
│   ├── types/              # Shared TypeScript types
│
│── package.json          # Root package configuration
│── turbo.json            # Turbo build configurations
│── pnpm-workspace.yaml   # pnpm workspace settings
```

## 🚀 Getting Started

### 1️⃣ Install Dependencies

Ensure you have **Node.js >=18** and **pnpm 9** installed.

```sh
pnpm install
```

### 2️⃣ Run Development Mode

```sh
pnpm dev
```

This runs the portfolio application in development mode using **Turbo**.

### 3️⃣ Build Application

```sh
pnpm build
```

This compiles all apps and packages using `turbo build`.

### 4️⃣ Lint Code

```sh
pnpm lint
```

### 5️⃣ Clean Workspace

```sh
pnpm clean
```

## 📦 Applications & Packages

### 🎨 Portfolio (@portfolio/web)

- **Framework**: Next.js (React 19)
- **Commands**:
  ```sh
  pnpm --filter @portfolio/web dev   # Run Next.js in dev mode
  pnpm --filter @portfolio/web build # Build Next.js project
  ```

### 📊 CMS (@portfolio/cms)

- **Framework**: Strapi 5
- **Commands**:
  ```sh
  pnpm --filter @portfolio/cms dev   # Run Strapi in dev mode
  pnpm --filter @portfolio/cms build # Build Strapi project
  ```

### 📜 Shared TypeScript Config (@portfolio/typescript-config)

- Stores TypeScript configurations for all projects.

### 🔗 Shared Types (@portfolio/types)

- Syncs TypeScript types between **projects**.
- **Command**:
  ```sh
  pnpm --filter @portfolio/types sync # Sync shared types
  ```

## ⚡ Turbo Configuration

This monorepo uses **Turbo** for task caching and parallel execution.

- **turbo.json** defines how build, dev, lint, and other tasks run efficiently.

## 🚀 Deployment

### 📤 Deploy Portfolio on Vercel

1. Install Vercel CLI:
   ```sh
   pnpm add -g vercel
   ```
2. Authenticate with Vercel:
   ```sh
   vercel login
   ```
3. Deploy:
   ```sh
   vercel --prod
   ```
4. **Fixing Corepack Issue:** If you encounter a deployment issue related to Corepack, enable it by adding the following environment variable in your Vercel project settings:

   - **Key**: `ENABLE_EXPERIMENTAL_COREPACK`
   - **Value**: `1`

   Also, ensure `packageManager` is set in `package.json`:

   ```json
   {
     "packageManager": "pnpm@9"
   }
   ```

### 🌍 Deploy CMS (Strapi) on Render Cloud

1. Build the Strapi project:
   ```sh
   pnpm --filter @portfolio/cms build
   ```
2. Deploy to **Render Cloud** by creating a new **Web Service** and linking your repository.
3. Set the required environment variables in Render for production.
4. Start the service and verify deployment.

## 📜 Individual READMEs

Each application and shared package contains its own README:

- `apps/web/README.md` → Details specific to the Next.js portfolio.
- `apps/cms/README.md` → Documentation for the Strapi CMS setup and usage.
- `packages/typescript-config/README.md` → Explanation of TypeScript configurations.
- `packages/types/README.md` → Documentation on shared types and how to use them.

## 🔗 Monorepo Starter Template

This project is based on my **[Monorepo Starter Template](https://github.com/jamc96/monorepo-starter)**. You can check the latest changes and updates there.

## 📜 License

This project is licensed under the **MIT License**.
