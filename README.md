# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Vercel Deployment

This app uses React Router SSR (`ssr: true`), so deploy it as a Node.js server app on Vercel.

1. Push your repository to GitHub/GitLab/Bitbucket.
2. In Vercel, click **Add New Project** and import this repository.
3. In project settings, keep these defaults (or set them explicitly):
   - Framework Preset: **Other** (or the auto-detected React Router preset if shown)
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: leave empty
4. Add environment variable in Vercel:
   - `VITE_GOOGLE_CLIENT_ID` = your Google OAuth Web Client ID
5. Deploy.

After deployment, add your Vercel domain in Google Cloud Console OAuth settings:

- Authorized JavaScript origins: `https://your-project.vercel.app`
- Authorized redirect URIs: if your flow requires them

For local development, create `.env` from `.env.example`:

```bash
cp .env.example .env
```

Windows PowerShell alternative:

```powershell
Copy-Item .env.example .env
```

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
