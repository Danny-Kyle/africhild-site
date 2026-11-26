# AfriChild Website
 
Public website for **The AfriChild Education and Development Initiative**: *Equipping Children. Empowering Schools. Shaping Futures.*
 
AfriChild runs in-person, school-based programmes (career orientation, entrepreneurship, sexual purity, mental wellness) for Grade 1 to Grade 10. This site explains the programmes and gives schools, sponsors and volunteers a way to get in touch. It is **not** an online school: there are no accounts, dashboards, payments or online classes.
 
## Contents
 
- [Tech stack](#tech-stack)
- [Quick start](#quick-start)
- [Project structure](#project-structure)
- [Configuration](#configuration)
- [Editing content](#editing-content)
- [Scripts](#scripts)
- [Launch checklist](#launch-checklist)
- [Deployment](#deployment)
- [Content and safety rules](#content-and-safety-rules)
- [Troubleshooting](#troubleshooting)
## Tech stack
 
| Area | Choice |
|---|---|
| Framework | Next.js 14 (App Router) with TypeScript (strict) |
| Styling | Tailwind CSS 3 |
| Output | Static export (`out/`), no server and no database |
| Fonts | Self-hosted through `@fontsource-variable` packages (no Google Fonts requests) |
| Contact | `mailto:` and WhatsApp links only (no forms, no third-party services) |
| Hosting | Netlify free tier, domain DNS at Namecheap |
 
The site loads no analytics, cookies, ads or external scripts.
 
## Quick start
 
Requires Node.js 20 or newer.
 
```bash
npm install
npm run dev
```
 
Open http://localhost:3000. Success looks like the home page with the green hero section. Until you set contact details, the Contact page shows a red "Contact details are not set yet" message. That is expected.
 
## Project structure
 
```
app/                     Pages (one folder per route, each with page.tsx)
  layout.tsx             Header, footer, fonts, site-wide metadata
  page.tsx               Home
  about/ programmes/ for-schools/ get-involved/
  updates/ resources/ contact/ privacy/ safeguarding/
components/
  ui.tsx                 Shared layout pieces (Wrap, Sec, PageHead, Btn, Draft)
  ContactLinks.tsx       Email and WhatsApp buttons with prefilled messages
lib/content.ts           Site settings and most page content
scripts/check-launch.mjs Pre-launch check run against the built site
public/
  resources/             Public downloads (approved PDFs only)
  _headers               Security headers (applied by Netlify)
declarations.d.ts        Lets TypeScript accept CSS and font imports
netlify.toml             Netlify build settings
```
