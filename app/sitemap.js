import articlesData from "../public/data/articles.json";
import authorData from "../public/data/authors.json";
import { slugify } from "../utils/slugify";

const SITE_URL = "https://os-intel-bice.vercel.app";

// Helper to parse DD/MM/YYYY dates from your articles.json
const parseArticleDate = (dateStr) => {
  if (!dateStr) return new Date();
  const [day, month, year] = dateStr.split("/");
  const parsed = new Date(year, month - 1, day);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
};

export default function sitemap() {
  const now = new Date();

  /* ---------------- STATIC PAGES ---------------- */
  const staticPages = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-and-condition/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  /* ---------------- CATEGORY PAGES ---------------- */
  // Reads all category keys from articles.json e.g. /politics, /business, /sports
  const categoryPages = Object.keys(articlesData).map((category) => ({
    url: `${SITE_URL}/${category}/`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  /* ---------------- ARTICLE DETAIL PAGES ---------------- */
  // All articles at /[category]/[slug]
  // client news and pillar news route to /julio-herrera-velutini/[slug] instead
  const articlePages = Object.entries(articlesData).flatMap(
    ([category, articles]) =>
      articles
        .filter(
          (article) =>
            article.newsType !== "client news" &&
            article.newsType !== "pillar news"
        )
        .map((article) => ({
          url: `${SITE_URL}/${category}/${article.slug}/`,
          lastModified: parseArticleDate(article.date),
          changeFrequency: "weekly",
          priority: 0.9,
        }))
  );



  /* ---------------- AUTHOR PAGES ---------------- */
  // Author detail pages at /author/[slug]
  const authorPages = authorData.categories.map((cat) => {
    const author = cat.author;
    return {
      url: `${SITE_URL}/author/${slugify(author.name)}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    };
  });

  return [
    ...staticPages,
    ...categoryPages,
    ...articlePages,
    ...authorPages,
  ];
}