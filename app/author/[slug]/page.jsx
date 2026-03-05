
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SidebarComponent from "@/components/Sidebarcomponent";
import authorData from "../../../public/data/authors.json";
import articleData from "../../../public/data/articles.json";
import { slugify } from "../../../utils/slugify";
import { FaClock } from "react-icons/fa";
import { FaXTwitter, FaReddit, FaQuora } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";

// ── Constants ─────────────────────────────────────────────────────────────────
const SITE_URL = "https://os-intel.com";
const SITE_NAME = "OL-Intel";

// ── Helpers ───────────────────────────────────────────────────────────────────
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split("/");
  return new Date(year, month - 1, day);
};

const formatDate = (dateStr) =>
  parseDate(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const getLatestFromOtherCategories = (excludeCategory, count = 15) => {
  const otherCats = Object.keys(articleData).filter(
    (cat) => cat.toLowerCase() !== excludeCategory.toLowerCase()
  );
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
  return result.sort((a, b) => parseDate(b.date) - parseDate(a.date));
};

// ── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return authorData.categories
    .filter((entry) => entry.author?.name)
    .map((entry) => ({ slug: slugify(entry.author.name) }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const authorEntry = authorData.categories.find(
    (entry) => slugify(entry.author.name) === slug
  );

  if (!authorEntry) {
    return {
      title: `Author Not Found — ${SITE_NAME}`,
      description: "This author profile does not exist.",
    };
  }

  const author = authorEntry.author;
  const categoryKey = authorEntry.category.toLowerCase();
  const formattedCategory =
    categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
  const totalCount = (articleData[categoryKey] || []).length;

  return {
    title: `${author.name} — ${formattedCategory} Journalist at ${SITE_NAME}`,
    description: `${author.name} is a ${formattedCategory.toLowerCase()} journalist at ${SITE_NAME}. Read ${totalCount} in-depth articles covering ${formattedCategory} news, geopolitics, and open-source intelligence.`,
    keywords: `${author.name}, ${formattedCategory} journalist, ${formattedCategory} news, ${SITE_NAME} articles, investigative journalism`,
    alternates: { canonical: `${SITE_URL}/author/${slug}` },
    openGraph: {
      title: `${author.name} — ${formattedCategory} Journalist`,
      description: author.bio,
      url: `${SITE_URL}/author/${slug}`,
      type: "profile",
      images: [{ url: `${SITE_URL}${author.profileImage}`, width: 800, height: 800 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${author.name} — ${formattedCategory} Journalist at ${SITE_NAME}`,
      description: author.bio,
      images: [`${SITE_URL}${author.profileImage}`],
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function AuthorPage({ params }) {
  const { slug } = await params;
  const authorEntry = authorData.categories.find(
    (entry) => slugify(entry.author.name) === slug
  );
  if (!authorEntry) notFound();

  const author = authorEntry.author;
  const categoryKey = authorEntry.category.toLowerCase();
  const formattedCategory =
    categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);

  const allCategoryArticles = [...(articleData[categoryKey] || [])].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );
  const totalArticleCount = allCategoryArticles.length;
  const latestArticles = allCategoryArticles.slice(0, 7);

  // Sidebar data
  const pool = getLatestFromOtherCategories(categoryKey, 15);
  const latestNews = pool.slice(0, 6).map((a) => ({
    date: formatDate(a.date),
    title: a.title,
    href: `/${a.categoryKey}/${a.slug}`,
  }));
  const tabLatest = pool.slice(6, 10).map((a) => ({
    img: a.image,
    date: formatDate(a.date).toUpperCase(),
    title: a.title,
    href: `/${a.categoryKey}/${a.slug}`,
  }));
  const tabPopular = pool.slice(10, 14).map((a) => ({
    img: a.image,
    date: formatDate(a.date).toUpperCase(),
    title: a.title,
    href: `/${a.categoryKey}/${a.slug}`,
  }));
  const tabData = { Latest: tabLatest, Popular: tabPopular };
  const mostPopular = pool.slice(0, 5).map((a) => ({
    title: a.title,
    href: `/${a.categoryKey}/${a.slug}`,
    img: a.image,
  }));

  // ── JSON-LD (unchanged — already good) ─────────────────────────────────────
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    url: `${SITE_URL}/author/${slug}`,
    image: `${SITE_URL}${author.profileImage}`,
    description: author.bio,
    jobTitle: `${formattedCategory} Journalist`,
    worksFor: { "@type": "NewsMediaOrganization", name: SITE_NAME, url: SITE_URL },
    sameAs: [
      author.social?.twitter,
      author.social?.reddit,
      author.social?.quora,
      author.social?.medium,
      author.websiteLink,
    ].filter(Boolean),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: author.name, item: `${SITE_URL}/author/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="min-h-screen bg-white">
        <div className="w-full px-4 md:px-6 py-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-xs font-sans text-gray-400">
              <li>
                <Link href="/" className="hover:text-red-600">Home</Link>
              </li>
              <li>›</li>
              <li className="text-gray-600">{author.name}</li>
            </ol>
          </nav>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-black font-serif text-gray-900 mb-6">
            {author.name} — {formattedCategory} Journalist
          </h1>

          {/* Intro paragraph with keywords */}
          <p className="text-gray-700 text-base font-serif leading-relaxed mb-8 max-w-3xl">
            {author.name} is an experienced {formattedCategory.toLowerCase()} journalist at {SITE_NAME},
            delivering in-depth reporting, open-source intelligence (OSINT), and geopolitical analysis
            through {totalArticleCount > 0 ? totalArticleCount : "numerous"} articles on critical global issues.
          </p>

          <div className="flex flex-col md:flex-row gap-10">
            {/* LEFT ── Author + Articles ── */}
            <div className="w-full md:w-[75%]">
              {/* Author Profile Card */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12 pb-10 border-b border-gray-200">
                <div className="shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-100 relative">
                    <Image
                      src={author.profileImage}
                      alt={`${author.name} — ${formattedCategory} journalist at ${SITE_NAME}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <h2 className="text-2xl font-black font-serif text-gray-900">
                      {author.name}
                    </h2>
                    {/* Social icons */}
                     <div className="flex items-center gap-2">
                      {author.social?.twitter && (
                        <a
                          href={author.social.twitter}
                          title={`Follow ${author.name} on X (Twitter)`}
                          aria-label={`Follow ${author.name} on X (Twitter)`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 flex items-center justify-center bg-black hover:bg-gray-800 transition-colors rounded-sm"
                        >
                          <FaXTwitter className="w-3.5 h-3.5 text-white" />
                        </a>
                      )}
                      {author.social?.reddit && (
                        <a
                          href={author.social.reddit}
                          title={`Follow ${author.name} on Reddit`}
                          aria-label={`Follow ${author.name} on Reddit`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 flex items-center justify-center bg-[#ff4500] hover:bg-[#e03d00] transition-colors rounded-sm"
                        >
                          <FaReddit className="w-3.5 h-3.5 text-white" />
                        </a>
                      )}
                      {author.social?.quora && (
                        <a
                          href={author.social.quora}
                          title={`Follow ${author.name} on Quora`}
                          aria-label={`Follow ${author.name} on Quora`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 flex items-center justify-center bg-[#b92b27] hover:bg-[#a02420] transition-colors rounded-sm"
                        >
                          <FaQuora className="w-3.5 h-3.5 text-white" />
                        </a>
                      )}
                      {author.social?.medium && (
                        <a
                          href={author.social.medium}
                          title={`Follow ${author.name} on Medium`}
                          aria-label={`Follow ${author.name} on Medium`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 flex items-center justify-center bg-black hover:bg-gray-800 transition-colors rounded-sm"
                        >
                          <SiMedium className="w-3.5 h-3.5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{author.bio}</p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center md:text-left">
                    <div>
                      <p className="text-2xl font-black">{totalArticleCount}</p>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Articles</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black capitalize">{formattedCategory}</p>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">Category</p>
                    </div>
                    {author.country && (
                      <div>
                        <p className="text-2xl font-black">{author.country}</p>
                        <p className="text-sm text-gray-500 uppercase tracking-wide">Location</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Latest Articles Section */}
              <h2 className="text-2xl font-black font-serif text-gray-900 mb-8 border-b-2 border-red-600 inline-block pb-1">
                Latest Articles by {author.name}
              </h2>

              {latestArticles.length === 0 ? (
                <p className="text-gray-500 py-10">No articles available yet.</p>
              ) : (
                <div className="space-y-10">
                  {latestArticles.map((article, index) => (
                    <Link
                      key={article.slug}
                      href={`/${categoryKey}/${article.slug}`}
                      title={`${article.title}`}
                      className="block group"
                      aria-label={`Read article: ${article.title} — ${formattedCategory} news by ${author.name}`}
                    >
                      <article className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-8 last:border-0">
                        {/* Image */}
                        <div className="relative w-full md:w-80 h-56 md:h-64 overflow-hidden rounded-lg shrink-0">
                          <Image
                            src={article.image}
                            alt={article.imageAlt || article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale"
                            sizes="(max-width: 768px) 100vw, 320px"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-3">
                            <span className="flex items-center gap-1.5">
                              <FaClock size={14} />
                              {formatDate(article.date)}
                            </span>
                            <span>•</span>
                            <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded">
                              {formattedCategory}
                            </span>
                          </div>

                          <h3 className="text-xl md:text-2xl font-black font-serif leading-tight mb-3 group-hover:text-red-600 transition-colors">
                            {article.title}
                          </h3>

                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>

                          <span className="mt-auto self-start text-red-600 font-semibold group-hover:underline">
                            Continue reading →
                          </span>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              )}

              {totalArticleCount > 7 && (
                <div className="mt-10">
                  <Link
                    href={`/${categoryKey}`}
                    className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-800"
                    title={`view ${categoryKey} page`}
                  >
                    View all {totalArticleCount} {formattedCategory} articles →
                  </Link>
                </div>
              )}
            </div>

            {/* RIGHT ── Sidebar ── */}
            <aside className="w-full md:w-[25%] md:sticky md:top-8 self-start">
              <SidebarComponent
                latestNews={latestNews}
                tabData={tabData}
                mostPopular={mostPopular}
              />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}