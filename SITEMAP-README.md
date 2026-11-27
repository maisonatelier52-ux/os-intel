# JavaScript sitemaps — OS-Intel

- `app/sitemap.js`: standard Next.js metadata sitemap. Includes homepage, policy pages, categories, published articles and authors.
- `app/news-sitemap.xml/route.js`: custom static GET route for Google News XML. The directory name defines the public XML URL; the actual source file is JavaScript.
- `utils/sitemapData.js`: shared date parsing, article filtering and XML escaping.
- `public/robots.txt`: declares both sitemap URLs.

The old `public/sitemap.xml`, `public/news-sitemap.xml`, `scripts/generate-sitemap.mjs`, and npm sitemap/prebuild scripts were removed. If merging into an existing local project, delete those old files and hooks yourself to avoid route collisions.

Dates come from the existing `DD/MM/YYYY` article date field. Optional `lastModified` is used for the main article sitemap only. Archive dates are inferred from the latest article content date; static policy pages omit unknown modification dates. News uses original publication dates with day precision and UTC midnight as the filter boundary. Priority/changefreq are retained as requested but Google ignores them.

Run `npm ci`, then `npm run dev` to inspect `/sitemap.xml` and `/news-sitemap.xml`. Run `npm run build` to generate both XML files in `out/`. Deploy `out/` to the static host, including `.htaccess` and robots.txt. Rebuild and redeploy daily if using the news sitemap, including on days without new articles. No live Node.js server is required; no automatic runtime refresh occurs. The news sitemap returns an empty urlset if no recent stories qualify. Verify both deployed URLs return HTTP 200 and XML; purge stale Cloudflare caches as needed.

Submit the unchanged public endpoints in Search Console. Keep the existing Gmail account and property.

Validation: direct JavaScript route logic tested against the actual article and author data with a fixed November 27, 2026 UTC clock, including exact URL-set matching, news date filtering and XML parsing; production Next.js build still requires dependencies and local verification.
