# The Natural Health Guide — Landing Page (Next.js)

A sales landing page for "The Natural Health Guide" ebook, built with Next.js
(App Router) so it deploys to Vercel with zero configuration.

## Project structure

```
app/
  layout.js       → root layout, loads fonts (Lora + Poppins) and global CSS
  page.js          → assembles all sections
  globals.css      → all styling (colors, layout, responsive rules)
components/
  Nav.js, Hero.js, Pain.js, GuideFacts.js, WhatsInside.js,
  WhoItsFor.js, Pricing.js, FAQ.js, FinalCTA.js, Footer.js, Icons.js
public/
  cover.jpg        → ebook cover image used in the hero mockup
```

Copy, chapter list, FAQ items, and pricing all live as plain data arrays at
the top of their component files — edit those instead of hunting through
JSX.

## Run locally

You'll need [Node.js 18+](https://nodejs.org) installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy to Vercel

**Option A — via GitHub (recommended)**
1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Next.js — just click **Deploy**. No config needed.

**Option B — via Vercel CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts (first time it'll ask you to link/create a project).
Run `vercel --prod` when you're ready to go live.

## Before you go live — things to update

- **Checkout link**: the "Get Instant Access" buttons currently point to
  `href="#"`. Connect them to your real checkout (Stripe Payment Link,
  Gumroad, Lemon Squeezy, etc.) in `components/Hero.js`, `Pricing.js`, and
  `FinalCTA.js`.
- **Price**: `$19` is a placeholder — update it in `Hero.js` and
  `Pricing.js`.
- **Guarantee terms**: the 30-day money-back guarantee copy in
  `Pricing.js` is a placeholder — make sure it matches what you'll actually
  honor.
- **Footer links**: "Contact · Privacy Policy · Terms" in `Footer.js` are
  plain text — link them to real pages once you have them.
- **Metadata**: update the site title/description and add an Open Graph
  image in `app/layout.js` for nicer link previews when shared.

## Notes

- Fonts (Lora, Poppins) are loaded via `next/font/google`, which
  self-hosts them at build time — no external requests, no layout shift.
- The FAQ accordion uses native `<details>`/`<summary>` — no JavaScript
  library needed.
- All icons are inline SVG React components in `components/Icons.js`.
