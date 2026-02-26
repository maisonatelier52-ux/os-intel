

import SidebarComponent from "@/components/Sidebarcomponent";
import Image from "next/image";
import Link from "next/link";
import articleData from "../../public/data/articles.json";
import authorData from "../../public/data/authors.json";

// ── Helper: parse DD/MM/YYYY → Date ──
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split("/");
  return new Date(year, month - 1, day);
};

// ── Helper: format DD/MM/YYYY → "January 1, 2026" ──
const formatDate = (dateStr) => {
  const date = parseDate(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// ── Get all articles from every category, sorted newest-first ──
const getAllArticlesSorted = () => {
  const all = [];
  Object.keys(articleData).forEach((cat) => {
    (articleData[cat] || []).forEach((article) => {
      all.push({ ...article, categoryKey: cat });
    });
  });
  return all.sort((a, b) => parseDate(b.date) - parseDate(a.date));
};

// ── Get latest N articles from categories OTHER than currentCategory ──
// Round-robins across categories so the list stays varied.
const getLatestFromOtherCategories = (currentCategory, count = 15) => {
  const otherCats = Object.keys(articleData).filter(
    (cat) => cat.toLowerCase() !== currentCategory.toLowerCase()
  );

  // Per-category buckets sorted newest-first
  const buckets = {};
  otherCats.forEach((cat) => {
    buckets[cat] = [...(articleData[cat] || [])].sort(
      (a, b) => parseDate(b.date) - parseDate(a.date)
    );
  });

  const result = [];
  const pointers = {};
  otherCats.forEach((cat) => (pointers[cat] = 0));

  while (result.length < count) {
    let added = false;
    for (const cat of otherCats) {
      if (result.length >= count) break;
      const idx = pointers[cat];
      if (buckets[cat][idx]) {
        result.push({ ...buckets[cat][idx], categoryKey: cat });
        pointers[cat]++;
        added = true;
      }
    }
    if (!added) break;
  }

  // Re-sort the blended list newest-first
  return result.sort((a, b) => parseDate(b.date) - parseDate(a.date));
};

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categoryKey = category.toLowerCase();
  const categoryName = categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);

  // ── Articles for this category, sorted newest-first ──
  const sortedArticles = [...(articleData[categoryKey] || [])].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  // ── Author for this category ──
  const authorInfo = authorData.categories.find(
    (item) => item.category.toLowerCase() === categoryKey
  )?.author;

  // ── Cross-category pool (15 articles from other categories) ──
  const pool = getLatestFromOtherCategories(categoryKey, 15);

  // Latest News sidebar: first 6 from pool
  const latestNews = pool.slice(0, 6).map((article) => ({
    date: formatDate(article.date),
    title: article.title,
    href: `/${article.categoryKey}/${article.slug}`,
  }));

  // Tab — Latest: next 4 (slots 6-9)
  const tabLatest = pool.slice(6, 10).map((article) => ({
    img: article.image,
    date: formatDate(article.date).toUpperCase(),
    title: article.title,
    href: `/${article.categoryKey}/${article.slug}`,
  }));

  // Tab — Popular: next 4 (slots 10-13)
  const tabPopular = pool.slice(10, 14).map((article) => ({
    img: article.image,
    date: formatDate(article.date).toUpperCase(),
    title: article.title,
    href: `/${article.categoryKey}/${article.slug}`,
  }));

  const tabData = {
    Latest: tabLatest,
    Popular: tabPopular,
  };

  // Most Popular: top 5 from pool (img used for hero image in sidebar)
  const mostPopular = pool.slice(0, 5).map((article) => ({
    title: article.title,
    href: `/${article.categoryKey}/${article.slug}`,
    img: article.image,
  }));

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-4 md:px-6 py-8">

        {/* ── Breadcrumb ── */}
        <div className="flex items-center gap-1.5 text-xs font-sans text-gray-400 mb-3">
          <Link href="/" title="Home" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <span>›</span>
          <span className="text-gray-600">{categoryName}</span>
        </div>

        {/* ── Category heading ── */}
        <h1 className="text-3xl font-black font-serif text-gray-900 mb-8 pb-4">
          Category: {categoryName}
        </h1>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col md:flex-row md:items-start gap-8">

          {/* ══ LEFT 75% — Article list ══ */}
          <div className="w-full md:w-[75%] md:sticky md:top-6 md:self-start flex flex-col gap-0">
            {sortedArticles.map((article, index) => (
              <div key={article.slug || index}>

                <div className="flex flex-col md:flex-row gap-0 py-6">

                  <div className="relative">
                    {/* Image */}
                    <div className="w-full md:w-[280px] shrink-0 h-[220px] overflow-hidden group">
                      <Image
                        src={article.image}
                        alt={article.imageAlt || article.title}
                        fill
                        className="object-cover grayscale transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-6 -right-2">
                      <span className="bg-red-500 text-white text-[13px] font-bold px-4 py-2.5 font-serif block">
                        {categoryName}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:pl-5 mt-7 pt-4 md:pt-0 flex flex-col justify-start">
                    {/* Meta row */}
                    <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-gray-400 text-xs md:text-sm font-sans mb-2">
                      <span>{formatDate(article.date)}</span>
                      <span className="text-gray-400 text-base leading-none">•</span>
                      {authorInfo ? (
                        <span>
                          by{" "}
                          <Link
                            href={authorInfo.websiteLink || "#"}
                            title={authorInfo.name}
                            className="hover:text-red-600 transition-colors"
                          >
                            {authorInfo.name}
                          </Link>
                        </span>
                      ) : (
                        <span>by Editorial Team</span>
                      )}
                      {article.readTime && (
                        <>
                          <span className="text-gray-400 text-base leading-none">•</span>
                          <span>{article.readTime}</span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <Link href={`/${categoryKey}/${article.slug}`} title={article.title}>
                      <h2 className="text-gray-900 text-2xl md:text-3xl font-black font-serif leading-snug hover:text-red-600 transition-colors mb-2">
                        {article.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-gray-500 text-sm font-sans leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Separator */}
                {index < sortedArticles.length - 1 && (
                  <div className="border-t border-gray-200" />
                )}
              </div>
            ))}

            {sortedArticles.length === 0 && (
              <p className="text-gray-400 py-8 text-center">
                No articles found in this category.
              </p>
            )}
          </div>

          {/* ══ RIGHT 25% — Sidebar ══ */}
          <div className="w-full md:w-[25%]">
            <SidebarComponent
              latestNews={latestNews}
              tabData={tabData}
              mostPopular={mostPopular}
            />
          </div>

        </div>
      </div>
    </div>
  );
}