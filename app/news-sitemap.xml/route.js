import { SITE_NAME, getPublishedArticles, escapeXml } from "../../utils/sitemapData.js";

// Required for Next.js output: "export". Evaluated during the build.
export const dynamic = "force-static";

export function GET() {
  const now = Date.now();
  const twoDays = 48 * 60 * 60 * 1000;

  // Date-only publication data is interpreted at UTC midnight for filtering.
  // Use original publication dates, never lastModified, for news eligibility.
  const recentArticles = getPublishedArticles()
    .filter(article => {
      const age = now - Date.parse(`${article.published}T00:00:00Z`);
      return article.newsType === "news" && age >= 0 && age < twoDays;
    })
    .sort((a, b) => b.published.localeCompare(a.published))
    .slice(0, 1000);

  const urls = recentArticles.map(article => `  <url>
    <loc>${escapeXml(article.url)}</loc>
    <news:news>
      <news:publication>
        <news:name>${escapeXml(SITE_NAME)}</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${article.published}</news:publication_date>
      <news:title>${escapeXml(article.title)}</news:title>
    </news:news>
  </url>`).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>
`;

  // An empty news sitemap is intentional when no recent articles qualify.
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
