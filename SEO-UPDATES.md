# OS-Intel SEO update — deployment notes

## Preserved
- All 111 original article records, titles, article text, images and slugs.
- All seven author records and existing author details, including original social/website fields. No article source lists or external citations were added.
- Next.js static export, trailing slash URL convention, existing Google verification values/files, and general site design.

## Changes
- Sitemaps now use Next.js JavaScript routes: `app/sitemap.js`, `app/news-sitemap.xml/route.js`, and `utils/sitemapData.js`. Both XML files are generated in `out/` by `npm run build`; no manually maintained XML in `public/`, no old generator or npm prebuild hook. Main sitemap has 137 unique URLs for the supplied data. Article lastmod uses `lastModified` if supplied, otherwise `date`. Homepage/category/author dates use latest article content dates as a proxy; static policy dates are omitted unless independently tracked. Priority/changefreq remain for compatibility with the requested XML format, but Google ignores them.
- News sitemap contains only published news articles within 48 hours of UTC midnight on their original publication date (date-only precision). It uses the original publication date and escaped article title. The news URL remains available with an empty URL set if there are no eligible stories. Rebuild and redeploy daily to remove expired stories; static export cannot refresh itself on the server. If daily deployment is not possible, omit news sitemap use.
- `public/robots.txt` permits rendering resources, including `/_next/` and `/static/`. Cloudflare-managed rules may still be prepended by Cloudflare.
- Article, category, author and policy metadata, breadcrumb/schema URLs, share links, and navigation links consistently use HTTPS WWW and trailing slashes. Removed duplicate title branding and the unsupported SearchAction. Corrected homepage image URL double slash.
- Category and author archives show all articles, not just 10 and 7 respectively. Related articles use keyword overlap with a recency fallback. Existing article slugs unchanged.
- Missing/invalid heading levels default to H2; article excerpts use paragraphs. Optional article `lastModified` (DD/MM/YYYY) drives article metadata, schema, visible update date and sitemap; existing dates were not artificially refreshed. Static non-article lastmod values are omitted rather than guessed.
- `.htaccess` redirects legacy `/index` and `/index.html` requests to the canonical homepage. The rule matches external requests rather than Apache internal DirectoryIndex lookups. Test on the actual host.
- Replaced simulated contact success with direct email links already listed on the site. Removed nonfunctional newsletter signup and replaced it with a link to investigations. Verify the existing email addresses receive messages; no backend or mailing service was provided. No mail delivery or subscription functionality is claimed.
- Ownership page supports factual publisher disclosures through optional build-time settings. Set these to accurate values in `.env.local` before building; do not invent ownership or funding information:
  `NEXT_PUBLIC_PUBLISHER_NAME=...`
  `NEXT_PUBLIC_PUBLISHER_OWNERSHIP=...`
- Removed unused randomly generated engagement metrics. Existing article and author content was not fact-checked or changed.

## Validation performed
- Source parser check across app/components/utils/scripts (JavaScript and JSX).
- Route-level smoke test using a lightweight stub of React/Next.js: all 137 routes evaluated; canonical metadata and article NewsArticle URLs matched expected routes; every article appeared in its category and author archive; internal hrefs in evaluated page trees matched routes. This is not a Next.js production build or browser rendering test.
- Main sitemap URL data matched 137 expected unique routes; see SITEMAP-README.md for the latest JavaScript route tests. Original article and author JSON files preserved byte-for-byte.
- Dependency installation could not complete in this environment: npm offline cache lacks required packages. Full Next.js build and browser/Apache tests remain required on your machine. No node_modules, .next or out build files are included.

## Deploy
1. Back up existing deployed files and retain the current Search Console property.
2. Extract the archive. In the project folder run `npm ci`, then `npm run build` (Node 22 recommended). The build needs dependency downloads and Google Fonts access as the original project uses `next/font/google`.
3. Verify `out/` locally, including `.htaccess`, `robots.txt`, `sitemap.xml`, your Google verification file, category/author archives, homepage and sample articles. Deploy the *contents* of `out/` to the existing Apache document root. Preserve hidden files when uploading. Do not deploy the source tree as the public website.
4. Test WWW redirects, slash redirects, legacy homepage aliases, XML status and rendering resources. Check Cloudflare cache and Googlebot access. Purge relevant stale files if needed.
5. In Search Console, keep the same property, submit the updated main sitemap once, inspect a few previously excluded article URLs, run live tests and request indexing for important corrected URLs. Monitor weekly.

Google indexing is not guaranteed by these changes. Editorial accuracy, originality, author credibility and verified publisher disclosures still require owner review. No per-article sourcing or author-data changes were made, as requested.
