# Hrithik N L — Portfolio

Personal portfolio for Hrithik N L, a full-stack and AI/ML engineer based in Bengaluru. The site showcases selected projects, skills, experience, education, and a downloadable resume.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router
- Motion
- Lucide React

## Run Locally

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run lint     # Run the TypeScript check
npm run build    # Create a production build
npm run preview  # Preview the production build locally
```

## Contact Form

The Home page contact form is prepared for Web3Forms. Replace `REPLACE_WITH_WEB3FORMS_ACCESS_KEY` in `src/pages/Home.tsx` with the access key from your Web3Forms account before deploying.

## Resume

The navigation Resume button serves `public/Resume_portoflio.pdf` and downloads it as `Hrithik-N-L-Resume.pdf`.

## Deploy With Vercel

1. Import this repository into Vercel.
2. Use `npm run build` as the build command.
3. Use `dist` as the output directory.
4. Add your custom domain in Vercel project settings.

Vercel detects the Vite setup automatically, so no additional server configuration is required.
