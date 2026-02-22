---
description: How to deploy to Cloudflare Pages
---

Deploying your Vite project to Cloudflare Pages is the best way to ensure maximum performance and zero downtime.

### 1. Initial Setup
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left sidebar, click on **Workers & Pages**.
3. Click the **Create** button and select the **Pages** tab.
4. Click **Connect to Git**.

### 2. Connect Repository
1. Select either **GitHub** or **Bitbucket** (both are now synced with your latest code).
2. Authorize Cloudflare to access your account if you haven't already.
3. Search for the repository `selva-website` and click **Begin setup**.

### 3. Build Settings
Cloudflare should automatically detect the project type, but verify these settings:
- **Project Name**: `selva-website` (or your preferred name)
- **Production Branch**: `master` (for GitHub) or `main` (for Bitbucket)
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`

### 4. Deploy
1. Click **Save and Deploy**. 
2. Cloudflare will now start the build process. You can watch the logs in real-time.
3. Once finished, you will receive a unique `*.pages.dev` URL.

### 5. Custom Domain (Optional)
If you have a custom domain:
1. Go to the **Custom domains** tab in your Pages project.
2. Click **Set up a custom domain** and follow the instructions to link your domain.
