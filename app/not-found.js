import Link from "next/link";
import Image from "next/image";
import articleData from "../public/data/articles.json";

// ── Helpers ───────────────────────────────────────────────────────────────────

const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split("/");
  return new Date(year, month - 1, day);
};

// Get 3 latest articles across all categories for suggestions
const getLatestArticles = (count = 3) => {
  const all = [];
  Object.keys(articleData).forEach((cat) => {
    (articleData[cat] || []).forEach((article) => {
      all.push({ ...article, categoryKey: cat });
    });
  });
  return all
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, count);
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function NotFound() {
  const suggestedArticles = getLatestArticles(3);
  const categories = Object.keys(articleData);

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Main 404 block ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">

        {/* Large 404 number */}
        <div className="relative mb-6 select-none">
          <span className="text-[140px] md:text-[200px] font-black font-serif text-gray-100 leading-none block">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-1 bg-red-600 rounded" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-2xl md:text-4xl font-black font-serif text-gray-900 mb-3 max-w-lg">
          This page has gone{" "}
          <span className="text-red-600">off the record.</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-sm md:text-base font-sans leading-relaxed mb-8 max-w-md">
          The article or category you were looking for doesn't exist, has been
          moved, or was never published. Try browsing a category below or head
          back to the homepage.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Link
            href="/"
            title="Go to homepage"
            className="bg-red-600 hover:bg-red-700 text-white text-[12px] font-bold tracking-widest px-6 py-3 font-sans uppercase transition-colors"
          >
            ← Back to Homepage
          </Link>
          <Link
            href={`/${categories[0]}`}
            title={`Browse ${categories[0]} news`}
            className="border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 text-[12px] font-bold tracking-widest px-6 py-3 font-sans uppercase transition-colors"
          >
            Browse Latest News
          </Link>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center gap-4 w-full max-w-2xl mb-10">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-gray-400 text-xs font-sans tracking-widest uppercase">
            You might like
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Suggested articles */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mb-12">
          {suggestedArticles.map((article) => {
            const formattedCategory =
              article.categoryKey.charAt(0).toUpperCase() +
              article.categoryKey.slice(1);
            return (
              <Link
                key={article.slug}
                href={`/${article.categoryKey}/${article.slug}`}
                title={article.title}
                className="group text-left block"
              >
                <div className="relative w-full h-[140px] overflow-hidden mb-3 bg-gray-100">
                  <Image
                    src={article.image}
                    alt={article.imageAlt || article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 font-sans uppercase">
                      {formattedCategory}
                    </span>
                  </div>
                </div>
                <h3 className="text-gray-900 text-sm font-black font-serif leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </Link>
            );
          })}
        </div> */}

        {/* Category browse pills */}
        <div className="flex flex-wrap justify-center gap-2 max-w-lg">
          <span className="text-gray-400 text-xs font-sans self-center mr-1 uppercase tracking-widest">
            Browse:
          </span>
          {categories.map((cat) => {
            const label = cat.charAt(0).toUpperCase() + cat.slice(1);
            return (
              <Link
                key={cat}
                href={`/${cat}`}
                title={`${label} news`}
                className="border border-gray-300 hover:border-red-600 hover:text-red-600 text-gray-500 text-[11px] font-bold font-sans px-3 py-1.5 uppercase tracking-wide transition-colors"
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div className="border-t border-gray-100 py-5 text-center">
        <p className="text-gray-400 text-xs font-sans">
          Lost?{" "}
          <Link href="/" className="text-red-600 hover:underline font-semibold">
            Return to OL-Intel homepage
          </Link>
        </p>
      </div>

    </div>
  );
}