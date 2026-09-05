# Nissan Silvia S15 / Automotive Experience

A Vite and React automotive portfolio experience built around a cursor-controlled Nissan Silvia S15 video.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

Import the repository in Vercel. The project is detected as Vite automatically. Build command: `npm run build`. Output directory: `dist`. The included `vercel.json` rewrites routes to the Vite entry point.

## Continuous integration

GitHub Actions runs 
pm ci and 
pm run build for pushes and pull requests targeting main. No deployment credentials are committed. If you later automate Vercel deployment from GitHub Actions, keep VERCEL_TOKEN, VERCEL_ORG_ID, and VERCEL_PROJECT_ID in GitHub Secrets.

## Interaction model

The hero video is preloaded without autoplay. Once metadata is available, the component sets `video.currentTime` to `video.duration`, so the rear frame is the initial state. Desktop pointer position maps across the viewport to a target timestamp. A `requestAnimationFrame` loop interpolates toward that target for smooth movement without React re-rendering on every pointer event. Touch and stylus users drag horizontally across the hero to shift the target timestamp. The loop, listeners, and animation frame are all cleaned up on unmount.
