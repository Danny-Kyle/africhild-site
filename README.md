# AfriChild MVP site (free tier, no third-party services)
1. Set email(s) and WhatsApp number in `lib/content.ts` (SITE).
2. `npm install && npm run dev`
3. `npm run build:prod` builds `out/` and fails if drafts, placeholders or missing contact details remain.
4. Deploy `out/` free (Cloudflare Pages or Netlify apply `public/_headers`; Vercel and GitHub Pages need their own header config).
Updates: edit `UPDATES` in `lib/content.ts`.
