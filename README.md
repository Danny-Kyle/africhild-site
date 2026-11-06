# AfriChild MVP site
1. `cp .env.example .env.local` and fill in values (free Web3Forms key).
2. `npm install && npm run dev` (http://localhost:3000)
3. `npm run build` creates the static site in `out/`.
4. Deploy `out/` free on Cloudflare Pages, Netlify or Vercel (connect the Git repo; build command `npm run build`, output `out`).
Updates: edit `UPDATES` in `lib/content.ts`. Before launch: replace Draft text on Privacy and Safeguarding.
