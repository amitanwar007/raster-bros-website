# Raster Bros — Next.js (CSR)

This folder contains a Next.js version of the original Vite React website, configured to run in CSR mode (SPA behavior preserved).

Key files:
- `pages/[[...slug]].tsx`: catch-all route so every path loads the SPA
- `src/NextApp.tsx`: providers previously wired in Vite `main.tsx`
- `pages/_app.tsx`: imports global Tailwind CSS
