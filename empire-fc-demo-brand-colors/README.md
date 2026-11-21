# Empire FC Demo Website

A simple responsive football-club website built with Next.js 14. It is a visual demo inspired by the structure of a modern club website; it uses a black-and-yellow color direction inspired by the public NY Empire FC website; it does not copy the club logo or proprietary assets.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Visit http://localhost:3000.

## Deploy with GitHub + Vercel

1. Create a new repository on GitHub.
2. Upload all files in this folder to the repository (keep the `app` folder).
3. Open https://vercel.com and sign in with GitHub.
4. Select **Add New → Project**, then import your repository.
5. Leave the framework preset as **Next.js** and click **Deploy**.

No environment variables are required.

## Customize

- Edit the text and demo match/news data in `app/page.jsx`.
- Change colors, layout and typography in `app/globals.css`.
- Replace the sample Unsplash image URLs with your own licensed images.
- The contact form is front-end only. Connect Formspree, a backend API, or another form service to receive submissions.
