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

const SITE_URL = "https://os-intel-bice.vercel.app";
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

// ── Metadata (OpenGraph + Twitter Card) ──────────────────────────────────────

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
  const imageUrl = `${SITE_URL}${author.profileImage}`;

  return {
    title: `${author.name} — ${formattedCategory} Journalist at ${SITE_NAME} | ${totalCount} Articles`,
    description: `Explore ${totalCount} articles by ${author.name}, covering ${formattedCategory} news and in-depth analysis on ${SITE_NAME}.`,
    keywords: `${author.name}, ${categoryKey} journalist, ${categoryKey} news, investigative journalism, ${SITE_NAME}`,
    alternates: {
      canonical: `${SITE_URL}/author/${slug}`,
    },
    openGraph: {
      title: `${author.name} — ${formattedCategory} Journalist at ${SITE_NAME}`,
      description: `${author.bio} Read ${totalCount} articles by ${author.name}.`,
      url: `${SITE_URL}/author/${slug}`,
      type: "profile",
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: `${author.name} — profile picture`,
        },
      ],
      profile: {
        firstName: author.name.split(" ")[0],
        lastName: author.name.split(" ").slice(1).join(" "),
      },
    },
    twitter: {
      card: "summary_large_image",
      title: `${author.name} — Journalist at ${SITE_NAME}`,
      description: author.bio,
      images: [imageUrl],
      creator: author.social?.twitter
        ? "@" + author.social.twitter.split("/").pop()
        : undefined,
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

  // Sort all articles newest-first; show only latest 7
  const allCategoryArticles = [...(articleData[categoryKey] || [])].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );
  const totalArticleCount = allCategoryArticles.length;
  const categoryArticles = allCategoryArticles.slice(0, 7);

  // ── Sidebar ───────────────────────────────────────────────────────────────
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

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/author/${slug}#person`,
    name: author.name,
    url: `${SITE_URL}/author/${slug}`,
    image: `${SITE_URL}${author.profileImage}`,
    description: author.bio,
    jobTitle: `${formattedCategory} Journalist`,
    worksFor: {
      "@type": "NewsMediaOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    sameAs: [
      author.social?.twitter,
      author.social?.reddit,
      author.social?.quora,
      author.social?.medium,
      author.websiteLink,
    ].filter(Boolean),
    nationality: { "@type": "Country", name: author.country },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/author/${slug}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: author.name,
        item: `${SITE_URL}/author/${slug}`,
      },
    ],
  };

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/author/${slug}#profile`,
    url: `${SITE_URL}/author/${slug}`,
    mainEntity: { "@id": `${SITE_URL}/author/${slug}#person` },
    breadcrumb: { "@id": `${SITE_URL}/author/${slug}#breadcrumb` },
  };

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── JSON-LD Scripts ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />

      <div className="min-h-screen bg-white">
        <div className="w-full px-4 md:px-6 py-8">

          {/* ── Breadcrumb ── */}
          <div className="flex items-center gap-1.5 text-xs font-sans text-gray-400 mb-3">
            <Link href="/" title="Home" className="hover:text-red-600 transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-gray-600">{author.name}</span>
          </div>

          {/* ── Page heading ── */}
          <h1 className="text-3xl font-black font-serif text-gray-900 mb-8 pb-4 border-b border-gray-200">
            Author: <span className="text-red-600">{author.name}</span>
          </h1>

          {/* ── Two-column layout ── */}
          <div className="flex flex-col md:flex-row md:items-start gap-8">

            {/* ══ LEFT 75% ══ */}
            <div className="w-full md:w-[75%] flex flex-col gap-0">

              {/* ── Author Profile Card ── */}
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-6 mb-10 pb-10 border-b border-gray-200">

                {/* Avatar */}
                <div className="shrink-0 ml-4 mt-5 sm:ml-8">
                  <div className="w-22 h-22 rounded-full overflow-hidden border-2 border-gray-100 relative bg-gray-200">
                    <Image
                      src={author.profileImage}
                      alt={`${author.name} — ${formattedCategory} journalist at ${SITE_NAME}`}
                      fill
                      sizes="140px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">

                  {/* Name + react-icons social buttons */}
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <h2 className="text-xl font-black font-serif text-gray-900">
                      {author.name}
                    </h2>

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

                  {/* Bio */}
                  <p className="text-gray-500 text-sm font-sans leading-relaxed mb-4">
                    {author.bio}
                  </p>

                  {/* Extra details */}
                  <div className="flex flex-col gap-1 mb-5 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold">Job Title:</span>{" "}
                      {formattedCategory} Journalist at {SITE_NAME}
                    </p>
                    {author.country && (
                      <p>
                        <span className="font-semibold">Country:</span>{" "}
                        {author.country}
                      </p>
                    )}
                    {author.websiteLink && (
                      <p>
                        <span className="font-semibold">Website:</span>{" "}
                        <a
                          href={author.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Visit ${author.name}'s website`}
                          className="text-red-600 hover:underline"
                        >
                          {author.websiteLink}
                        </a>
                      </p>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-gray-900 text-lg font-black font-serif leading-none">
                        {totalArticleCount}
                      </p>
                      <p className="text-gray-400 text-xs font-sans mt-0.5 uppercase tracking-wide">
                        Posts
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-900 text-lg font-black font-serif leading-none capitalize">
                        {formattedCategory}
                      </p>
                      <p className="text-gray-400 text-xs font-sans mt-0.5 uppercase tracking-wide">
                        Category
                      </p>
                    </div>
                    {author.country && (
                      <div className="text-center">
                        <p className="text-gray-900 text-lg font-black font-serif leading-none">
                          {author.country}
                        </p>
                        <p className="text-gray-400 text-xs font-sans mt-0.5 uppercase tracking-wide">
                          Country
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* ── Articles heading ── */}
              <h2 className="text-lg font-black font-serif text-gray-900 inline-block border-b-2 border-red-600 pb-1 mb-8">
                Latest Posts by {author.name}
              </h2>

              {/* ── Articles list — latest 7, sorted newest-first ── */}
              {categoryArticles.length === 0 ? (
                <p className="text-gray-400 text-sm font-sans py-10">
                  No articles found for this author.
                </p>
              ) : (
                categoryArticles.map((article, index) => (
                  <div key={article.slug || index}>
                    <div className="flex flex-col md:flex-row gap-0 py-6">

                      {/* Thumbnail */}
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
                          <span className="bg-gray-800 text-white text-[11px] font-bold px-3 py-2 font-sans tracking-wide block">
                            Post
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 md:pl-5 mt-7 pt-4 md:pt-0 flex flex-col justify-start">

                        {/* Meta */}
                        <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-gray-400 text-xs md:text-sm font-sans mb-3">
                          <span className="flex items-center gap-1">
                            <FaClock size={10} />
                            {formatDate(article.date)}
                          </span>
                          <span className="text-gray-300">•</span>
                          <span>
                            by{" "}
                            <span className="text-gray-700 font-semibold">
                              {author.name}
                            </span>
                          </span>
                          <span className="text-gray-300">•</span>
                          <span>In</span>
                          <Link href={`/${categoryKey}`} title={formattedCategory}>
                            <span className="bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 font-sans">
                              {formattedCategory}
                            </span>
                          </Link>
                          {article.readTime && (
                            <>
                              <span className="text-gray-300">•</span>
                              <span>{article.readTime}</span>
                            </>
                          )}
                        </div>

                        {/* Title */}
                        <Link
                          href={`/${categoryKey}/${article.slug}`}
                          title={article.title}
                        >
                          <h2 className="text-gray-900 text-2xl md:text-3xl font-black font-serif leading-snug hover:text-red-600 transition-colors mb-3">
                            {article.title}
                          </h2>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-gray-500 text-sm font-sans leading-relaxed line-clamp-3 mb-4">
                          {article.excerpt}
                        </p>

                        {/* Read More */}
                        <Link
                          href={`/${categoryKey}/${article.slug}`}
                          title={`Read more about ${article.title}`}
                          className="self-start bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold tracking-widest px-4 py-2 font-sans uppercase transition-colors"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>

                    {index < categoryArticles.length - 1 && (
                      <div className="border-t border-gray-200" />
                    )}
                  </div>
                ))
              )}

              {/* ── "View all" link when there are more than 7 articles ── */}
              {totalArticleCount > 7 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href={`/${categoryKey}`}
                    title={`All ${formattedCategory} articles`}
                    className="inline-flex items-center gap-2 text-sm font-bold font-sans text-red-600 hover:text-red-700 transition-colors"
                  >
                    View all {totalArticleCount} articles in {formattedCategory} →
                  </Link>
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