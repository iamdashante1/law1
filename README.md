# Legal — Next.js Lawyer Site

Elegant, animated landing page for a law firm built with Next.js (App Router), Tailwind CSS, Framer Motion, and Lucide icons.

## Quickstart

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Open http://localhost:3000

## Contact Form (Formspree)

Set your Formspree form ID in an environment variable so submissions go to your inbox:

```bash
echo NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here > .env.local
```

You can find the ID in your Formspree dashboard; it looks like `xyzzabcd` and the endpoint becomes `https://formspree.io/f/xyzzabcd`.

The contact form shows success/error messages and includes a basic honeypot.

## SEO & Sitemap

- Set your site URL for correct sitemap and Open Graph links:

```bash
echo NEXT_PUBLIC_SITE_URL=https://your-domain.com >> .env.local
```

- Generated files:
  - `app/sitemap.ts` — includes blog posts
  - `app/robots.ts` — references your sitemap
  - `app/icon.svg` — site icon

## Tech

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- Lucide React

## Customize

- Edit copy, sections, and colors in:
  - `app/page.tsx`
  - `sections/*`
  - `tailwind.config.ts`
  - `app/layout.tsx`

## Blog

- Posts live in `content/posts.ts` and are rendered by:
  - `app/blog/page.tsx` (index)
  - `app/blog/[slug]/page.tsx` (detail)
- Add or edit posts by updating the array (title, slug, date, summary, content).
