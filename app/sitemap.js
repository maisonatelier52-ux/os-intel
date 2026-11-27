import articleData from "../public/data/articles.json";
import authorData from "../public/data/authors.json";
import { slugify } from "../utils/slugify.js";
import { SITE_URL, getPublishedArticles, latestModification } from "../utils/sitemapData.js";

export const dynamic = "force-static";

export default function sitemap() {
  const articles = getPublishedArticles();

  // Homepage: derive the most recent content date from articles.json.
  const homepage = {
    url: `${SITE_URL}/`,
    lastModified: latestModification(articles),
    changeFrequency: "daily",
    priority: 1,
  };

  // Static pages: no invented lastmod dates. Add an actual editorial date
  // if you track changes to these pages separately.
  const staticPages = [
    "about", "privacy-policy", "terms-and-condition", "contact",
    "editorial-policy", "corrections-policy", "source-methodology",
    "ownership-funding", "advertising-policy", "right-of-reply", "legal",
  ].map(slug => ({
    url: `${SITE_URL}/${slug}/`,
    changeFrequency: slug === "about" ? "monthly" : "yearly",
    priority: slug === "about" ? 0.6 : 0.3,
  }));

  // Category pages: use their latest article date.
  const categoryPages = Object.keys(articleData).map(category => ({
    url: `${SITE_URL}/${category}/`,
    lastModified: latestModification(articles.filter(a => a.category === category)),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  // All published articles, grouped in the JSON category order.
  const articlePages = articles.map(article => ({
    url: article.url,
    lastModified: article.modified,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  // Author archives: derive dates from their category's articles.
  const authorPages = authorData.categories
    .filter(entry => entry.author?.name)
    .map(({ category, author }) => ({
      url: `${SITE_URL}/author/${slugify(author.name)}/`,
      lastModified: latestModification(articles.filter(a => a.category === category.toLowerCase())),
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const entries = [homepage, ...staticPages, ...categoryPages, ...articlePages, ...authorPages];
  if (new Set(entries.map(entry => entry.url)).size !== entries.length) {
    throw new Error("Duplicate URL in sitemap");
  }
  return entries;
}
