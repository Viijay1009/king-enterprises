# King Enterprises websites

Marketing site for King Enterprises, an industrial scrap collection and recycling company in Sriperumbudur, Tamil Nadu. Built with Next.js (App Router) and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

- Company facts, contacts, customers, materials and process steps: `src/content/site.ts`
- Photos and their generation prompts: `src/content/images.ts` (also listed in `IMAGE_PROMPTS.md`)

## Adding photos

Each photo slot shows a placeholder with its prompt and target size. Save the finished image as `public/images/<id>.jpg` (or `.webp` / `.png`) and rebuild; it replaces the placeholder automatically.

## SEO and the site URL

Set `NEXT_PUBLIC_SITE_URL` to the live domain (for example `https://www.example.in`, no trailing slash) in the hosting environment. It is used for the canonical URL, Open Graph image links, `robots.txt`, `sitemap.xml` and the structured data. On Vercel the project's production URL is used automatically until it is set.

- Page title, description and share text: `seo` in `src/content/site.ts`
- Structured data (schema.org `RecyclingCenter`): `src/components/StructuredData.tsx`
- Social share image (1200 × 630): `src/app/opengraph-image.jpg`
