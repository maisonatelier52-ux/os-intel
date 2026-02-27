

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SidebarComponent from "@/components/Sidebarcomponent";
import articleData from "../../public/data/articles.json";
import authorData from "../../public/data/authors.json";

// ── Constants ─────────────────────────────────────────────────────────────────

const SITE_URL = "https://os-intel-bice.vercel.app";
const SITE_NAME = "OL-Intel";
const SITE_LOGO = `${SITE_URL}/images/ol-intel-logo.webp`;
const TWITTER_HANDLE = "@olintel";

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

const getLatestFromOtherCategories = (currentCategory, count = 15) => {
  const otherCats = Object.keys(articleData).filter(
    (cat) => cat.toLowerCase() !== currentCategory.toLowerCase()
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
  return Object.keys(articleData).map((category) => ({ category }));
}

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }) {
  const { category } = await params;
  const categoryKey = category.toLowerCase();
  const formattedCategory =
    categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);

  // Return 404 metadata if category doesn't exist
  if (!articleData[categoryKey]) {
    return {
      title: `Category Not Found — ${SITE_NAME}`,
      description: "This category does not exist.",
    };
  }

  const articles = articleData[categoryKey] || [];
  const totalCount = articles.length;
  const authorInfo = authorData.categories.find(
    (item) => item.category.toLowerCase() === categoryKey
  )?.author;

  // Category-specific descriptions
  const categoryDescriptions = {
    world: `Discover the latest world news, international affairs & global events. Expert coverage from every corner of the globe. Updated daily on ${SITE_NAME}.`,
    cybersecurity: `Get breaking cybersecurity news, threat analysis & digital security insights. Expert coverage of hacks, vulnerabilities & data breaches. Updated daily on ${SITE_NAME}.`,
    politics: `Discover the latest politics news, analysis & insights. Expert coverage of elections, policy & government affairs. Updated daily on ${SITE_NAME}.`,
    business: `Get breaking business news, market analysis & financial insights. Corporate developments, economy & industry trends. Updated daily on ${SITE_NAME}.`,
    technology: `Explore technology news, innovations & digital trends. AI, cybersecurity, startups & tech industry coverage. Updated daily on ${SITE_NAME}.`,
  };

  const description =
    categoryDescriptions[categoryKey] ||
    `Discover breaking ${formattedCategory.toLowerCase()} news, expert analysis & in-depth coverage on ${SITE_NAME}. ${totalCount} articles available. Updated daily.`;

  const ogImage =
    articles[0]?.image
      ? articles[0].image.startsWith("http")
        ? articles[0].image
        : `${SITE_URL}${articles[0].image}`
      : SITE_LOGO;

  return {
    title: `${formattedCategory} — Breaking News & Expert Analysis | ${SITE_NAME}`,
    description,
    keywords: [
      `${formattedCategory.toLowerCase()} news`,
      `latest ${formattedCategory.toLowerCase()}`,
      `${formattedCategory.toLowerCase()} headlines`,
      `${formattedCategory.toLowerCase()} updates`,
      "breaking news",
      "news analysis",
      SITE_NAME,
    ],
    authors: authorInfo
      ? [{ name: authorInfo.name }]
      : [{ name: `${SITE_NAME} Editorial Team` }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical: `${SITE_URL}/${categoryKey}`,
    },
    openGraph: {
      title: `${formattedCategory} — Breaking News & Expert Analysis | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/${categoryKey}`,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${formattedCategory} News — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedCategory} — Breaking News & Expert Analysis | ${SITE_NAME}`,
      description,
      images: [ogImage],
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categoryKey = category.toLowerCase();
  const categoryName =
    categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);

  // 404 if category doesn't exist in articles.json
  if (!articleData[categoryKey]) notFound();

  // Latest 7 articles sorted newest-first
  const allArticles = [...(articleData[categoryKey] || [])].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );
  const totalArticleCount = allArticles.length;
  const sortedArticles = allArticles.slice(0, 10);

  // Author for this category
  const authorInfo = authorData.categories.find(
    (item) => item.category.toLowerCase() === categoryKey
  )?.author;

  // Sidebar pool
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

  // ── JSON-LD ───────────────────────────────────────────────────────────────

  const categoryDescriptions = {
    world: "Comprehensive world news coverage including international affairs, global events, diplomacy, and analysis from expert journalists.",
    cybersecurity: "Breaking cybersecurity news featuring threat analysis, data breaches, vulnerabilities, digital security, and expert commentary.",
    politics: "Comprehensive politics news coverage including elections, policy debates, government affairs, and political analysis.",
    business: "Breaking business news featuring market analysis, corporate developments, financial insights and economic trends.",
    technology: "Technology news and analysis covering AI, cybersecurity, startups, digital innovation, and the latest tech developments.",
  };
  const categoryDescription =
    categoryDescriptions[categoryKey] ||
    `Latest ${categoryName.toLowerCase()} news, analysis, and expert coverage from trusted journalists at ${SITE_NAME}.`;

  const ogImage =
    sortedArticles[0]?.image
      ? sortedArticles[0].image.startsWith("http")
        ? sortedArticles[0].image
        : `${SITE_URL}${sortedArticles[0].image}`
      : SITE_LOGO;

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/${categoryKey}#webpage`,
    name: `${categoryName} News`,
    description: categoryDescription,
    url: `${SITE_URL}/${categoryKey}`,
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: SITE_NAME },
    primaryImageOfPage: { "@type": "ImageObject", url: ogImage },
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: sortedArticles.length,
      itemListElement: sortedArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/${categoryKey}/${article.slug}`,
        item: {
          "@type": "NewsArticle",
          headline: article.title,
          description: article.excerpt,
          datePublished: parseDate(article.date).toISOString(),
          dateModified: parseDate(article.date).toISOString(),
          image: article.image?.startsWith("http")
            ? article.image
            : `${SITE_URL}${article.image}`,
          author: authorInfo
            ? { "@type": "Person", name: authorInfo.name, url: `${SITE_URL}/author/${authorInfo.name.toLowerCase().replace(/\s+/g, "-")}` }
            : { "@type": "Organization", name: SITE_NAME },
          publisher: {
            "@type": "NewsMediaOrganization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: { "@type": "ImageObject", url: SITE_LOGO },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/${categoryKey}/${article.slug}`,
          },
        },
      })),
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: SITE_LOGO },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/${categoryKey}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: `${categoryName} News`,
        item: `${SITE_URL}/${categoryKey}`,
      },
    ],
  };

  return (
    <>
      {/* ── JSON-LD Scripts ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="min-h-screen bg-white">
        <div className="w-full px-4 md:px-6 py-8">

          {/* ── Breadcrumb ── */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs font-sans text-gray-400 mb-3">
              <li>
                <Link href="/" title="Home" className="hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li><span>›</span></li>
              <li><span className="text-gray-600">{categoryName}</span></li>
            </ol>
          </nav>

          {/* ── Category heading ── */}
          <h1 className="text-3xl font-black font-serif text-gray-900 mb-8 pb-4 border-b border-gray-200">
            Category: <span className="text-red-600">{categoryName}</span>
          </h1>

          {/* ── Two-column layout ── */}
          <div className="flex flex-col md:flex-row md:items-start gap-8">

            {/* ══ LEFT 75% ══ */}
            <div className="w-full md:w-[75%] flex flex-col gap-0">

              {sortedArticles.length === 0 ? (
                <p className="text-gray-400 py-8 text-center font-sans">
                  No articles found in this category.
                </p>
              ) : (
                sortedArticles.map((article, index) => (
                  <div key={article.slug || index}>
                    <div className="flex flex-col md:flex-row gap-0 py-6">

                      {/* Image + badge */}
                      <div className="relative">
                        <Link
                          href={`/${categoryKey}/${article.slug}`}
                          title={article.title}
                          className="block w-full md:w-[280px] shrink-0 h-[220px] overflow-hidden group"
                        >
                          <Image
                            src={article.image}
                            alt={article.imageAlt || article.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 280px"
                            className="object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-105"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </Link>
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
                          <time dateTime={parseDate(article.date).toISOString()}>
                            {formatDate(article.date)}
                          </time>
                          <span className="text-gray-400 text-base leading-none">•</span>
                          {authorInfo ? (
                            <span>
                              by{" "}
                              <Link
                                href={`/author/${authorInfo.name.toLowerCase().replace(/\s+/g, "-")}`}
                                title={`View all posts by ${authorInfo.name}`}
                                className="hover:text-red-600 transition-colors font-medium text-gray-600"
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

                        {/* Read More */}
                        <Link
                          href={`/${categoryKey}/${article.slug}`}
                          title={`Read more about ${article.title}`}
                          className="self-start mt-3 bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold tracking-widest px-4 py-2 font-sans uppercase transition-colors"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>

                    {index < sortedArticles.length - 1 && (
                      <div className="border-t border-gray-200" />
                    )}
                  </div>
                ))
              )}

              {/* View all link when more than 7 exist */}
              {totalArticleCount > 7 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-400 font-sans">
                    Showing 7 of {totalArticleCount} articles in{" "}
                    <span className="font-semibold text-gray-700">{categoryName}</span>
                  </p>
                </div>
              )}
            </div>

            {/* ══ RIGHT 25% — Sidebar ══ */}
            <div className="w-full md:w-[25%] md:sticky md:top-6 md:self-start">
              <SidebarComponent
                latestNews={latestNews}
                tabData={tabData}
                mostPopular={mostPopular}
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}