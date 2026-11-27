// Shared sitemap data helpers. Article dates use DD/MM/YYYY in articles.json.
import articles from "../public/data/articles.json";

export const SITE_URL = "https://www.os-intel.com";
export const SITE_NAME = "OS-Intel";

export function parseArticleDate(value) {
  if (typeof value !== "string" || !/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
    throw new Error(`Invalid article date: ${value}`);
  }
  const [day, month, year] = value.split("/");
  const iso = `${year}-${month}-${day}`;
  const date = new Date(`${iso}T00:00:00Z`);
  if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== iso) {
    throw new Error(`Invalid calendar date: ${value}`);
  }
  return iso;
}

export function getPublishedArticles() {
  const urls = new Set();
  return Object.entries(articles).flatMap(([category, posts]) =>
    posts.filter(article => article.isPublished === true || article.isPublished === "true")
      .map(article => {
        const published = parseArticleDate(article.date);
        const modified = parseArticleDate(article.lastModified || article.date);
        if (modified < published) {
          throw new Error(`Modification before publication: ${article.slug}`);
        }
        const url = `${SITE_URL}/${category}/${article.slug}/`;
        if (urls.has(url)) throw new Error(`Duplicate sitemap URL: ${url}`);
        urls.add(url);
        return { ...article, category, url, published, modified };
      })
  );
}

// The latest article-content date, not the date of the current build.
export function latestModification(posts) {
  return posts.reduce((latest, post) =>
    !latest || post.modified > latest ? post.modified : latest, undefined);
}

export function escapeXml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;"
  })[char]);
}
