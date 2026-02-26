

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SidebarComponent from "@/components/Sidebarcomponent";
import articleData from "../../../public/data/articles.json";
import authorData from "../../../public/data/authors.json";
import {
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaTumblr,
  FaShareAlt,
} from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa";

// ── Helpers ──
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split("/");
  return new Date(year, month - 1, day);
};

const formatDate = (dateStr) => {
  return parseDate(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// ── Get latest N articles from categories OTHER than currentCategory ──
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

// ── Static params for build ──
export async function generateStaticParams() {
  const params = [];
  Object.keys(articleData).forEach((category) => {
    (articleData[category] || []).forEach((article) => {
      params.push({ category, slug: article.slug });
    });
  });
  return params;
}

// ── Social share links ──
const socialLinks = [
  { icon: FaFacebookF,   bg: "bg-[#3b5998]", hover: "hover:bg-[#344e86]", label: "Share on Facebook" },
  { icon: FaTwitter,     bg: "bg-[#1da1f2]", hover: "hover:bg-[#1a91da]", label: "Share on Twitter" },
  { icon: FaGooglePlusG, bg: "bg-[#dd4b39]", hover: "hover:bg-[#c43d2e]", label: "Share on Google+" },
  { icon: FaPinterestP,  bg: "bg-[#bd081c]", hover: "hover:bg-[#a30719]", label: "Share on Pinterest" },
  { icon: FaTumblr,      bg: "bg-[#35465c]", hover: "hover:bg-[#2a3849]", label: "Share on Tumblr" },
];

// ── Render article content blocks ──
const renderContent = (item, index) => {
  switch (item.type) {
    case "paragraph":
      return (
        <p key={index} className="text-gray-700 text-sm font-serif leading-relaxed mb-4">
          {item.text}
        </p>
      );

    case "heading": {
      const HeadingTag = `h${item.level}`;
      return (
        <HeadingTag
          key={index}
          className={`font-black font-serif text-gray-900 mb-3 mt-6 ${
            item.level === 2 ? "text-2xl" : "text-xl"
          }`}
        >
          {item.text}
        </HeadingTag>
      );
    }

    case "image":
      return (
        <div key={index} className="relative w-full h-[270px] md:h-[420px] overflow-hidden mb-6">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 100vw, 75vw"
            className="object-cover grayscale"
            loading="lazy"
          />
        </div>
      );

    default:
      return null;
  }
};

export default async function ArticleDetailPage({ params }) {
  const { category, slug } = await params;
  const categoryKey = category.toLowerCase();

  // ── Find the article ──
  const categoryPosts = articleData[categoryKey] || [];
  const article = categoryPosts.find((item) => item.slug === slug);
  if (!article) notFound();

  // ── Find the author ──
  const author = authorData.categories.find(
    (item) => item.category.toLowerCase() === categoryKey
  )?.author;
  if (!author) notFound();

  // ── Prev / Next in same category (sorted by date) ──
  const sortedPosts = [...categoryPosts].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );
  const currentIndex = sortedPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;

  // ── More posts: 3 other articles from same category ──
  const morePosts = sortedPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // ── Sidebar data ──
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

  const formattedCategory = categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-4 md:px-6 py-8">

        {/* ── Breadcrumb ── */}
        <div className="flex items-center gap-1.5 text-xs font-sans text-gray-400 mb-3">
          <Link href="/" title="Home" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <span>›</span>
          <Link
            href={`/${categoryKey}`}
            title={`${formattedCategory} page`}
            className="hover:text-red-600 transition-colors"
          >
            {formattedCategory}
          </Link>
          <span>›</span>
          <span className="text-gray-600 line-clamp-1">{article.title}</span>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col md:flex-row md:items-start gap-10">

          {/* ══ LEFT 75% ══ */}
          <div className="w-full md:w-[75%]">

            {/* Category badge */}
            <div className="mb-3">
              <span className="bg-red-600 text-white text-[12px] font-bold tracking-widest px-2 py-1 font-serif uppercase">
                {formattedCategory}
              </span>
              {article.type && article.type !== "normal" && (
                <span className="ml-2 bg-gray-800 text-white text-[12px] font-bold tracking-widest px-2 py-1 font-serif uppercase">
                  {article.type}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-black font-serif text-gray-900 leading-tight mb-4">
              {article.title}
            </h1>

            {/* Meta row */}
            <div className="flex items-center flex-wrap gap-3 text-gray-400 text-xs font-sans mb-5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 relative">
                  <Image
                    src={author.profileImage}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span>
                  by{" "}
                  <Link
                    href={author.websiteLink || "#"}
                    title={author.name}
                    className="text-gray-700 font-semibold hover:text-red-600 transition-colors"
                  >
                    {author.name}
                  </Link>
                </span>
              </div>
              <div className="flex items-center gap-1">
                <FaClock size={10} />
                <time dateTime={parseDate(article.date).toISOString()}>
                  {formatDate(article.date).toUpperCase()}
                </time>
              </div>
              {article.readTime && (
                <span className="flex items-center gap-1">
                  <span>•</span>
                  <span>{article.readTime}</span>
                </span>
              )}
            </div>

            {/* Featured image */}
            <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden mb-6">
              <Image
                src={article.image}
                alt={article.imageAlt || article.title}
                fill
                sizes="(max-width: 768px) 100vw, 75vw"
                className="object-cover grayscale"
                priority
              />
            </div>

            {/* ── Content + Social share wrapper ── */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">

              {/* Social share column */}
              <div className="md:w-[56px] md:shrink-0 md:self-start md:sticky md:top-6">
                <div className="hidden md:flex items-center gap-1.5 text-gray-400 text-[10px] font-sans tracking-widest uppercase mb-3">
                  <FaShareAlt size={9} />
                  <span>Share</span>
                </div>
                <div className="flex flex-row md:flex-col gap-2">
                  {socialLinks.map(({ icon: Icon, bg, hover, label }) => (
                    <Link
                      key={label}
                      href="#"
                      title={label}
                      className={`w-9 h-9 flex items-center justify-center ${bg} ${hover} transition-all duration-200 hover:scale-110`}
                    >
                      <Icon size={14} className="text-white" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Article content */}
              <div className="flex-1 min-w-0">
                {article.content.map((item, index) => renderContent(item, index))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-6" />

            {/* ── Prev / Next post ── */}
            <div className="flex flex-col sm:flex-row gap-7 md:gap-4 mb-10">
              {prevPost ? (
                <Link
                  href={`/${categoryKey}/${prevPost.slug}`}
                  title={prevPost.title}
                  className="flex-1 group border-l-4 border-red-600 hover:border-gray-400 transition-colors"
                >
                  <p className="text-gray-400 text-[12px] font-serif tracking-widest uppercase mb-1 ml-5">
                    ‹ PREV POST
                  </p>
                  <h4 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors ml-5">
                    {prevPost.title}
                  </h4>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {nextPost ? (
                <Link
                  href={`/${categoryKey}/${nextPost.slug}`}
                  title={nextPost.title}
                  className="flex-1 text-right group border-r-4 border-red-600 hover:border-gray-400 transition-colors"
                >
                  <p className="text-gray-400 text-[12px] font-serif tracking-widest uppercase mb-1 mr-5">
                    NEXT POST ›
                  </p>
                  <h4 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors mr-5">
                    {nextPost.title}
                  </h4>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>

            {/* ── More Posts ── */}
            {morePosts.length > 0 && (
              <div className="mb-10">
                <h2 className="text-lg font-black font-serif text-gray-900 inline-block border-b-2 border-red-600 pb-1 mb-6">
                  More posts
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {morePosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/${categoryKey}/${post.slug}`}
                      title={post.title}
                      className="block group"
                    >
                      <div className="relative w-full h-[160px] overflow-hidden mb-3">
                        <Image
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 font-sans uppercase">
                            {formattedCategory}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-[11px] font-sans mb-1">
                        <FaClock size={9} />
                        <span className="uppercase tracking-wide">
                          {formatDate(post.date).toUpperCase()}
                        </span>
                      </div>
                      <h4 className="text-gray-900 text-sm font-black font-serif leading-snug group-hover:text-red-600 transition-colors">
                        {post.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ── About Author ── */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-lg font-black font-serif text-gray-900 inline-block border-b-2 border-red-600 pb-1 mb-6">
                About author
              </h2>

              <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-5">
                <div className="w-22 h-22 rounded-full overflow-hidden shrink-0 mt-0 md:mt-7 bg-gray-900 relative">
                  <Image
                    src={author.profileImage}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-black font-serif text-gray-900 mb-2">
                    {author.name}
                  </h3>
                  <p className="text-gray-700 text-sm font-serif leading-relaxed">
                    {author.bio}
                  </p>

                  {/* Social icons */}
                  <div className="flex gap-3 mt-5 lg:gap-6 justify-center lg:justify-start">
                    {author.social?.twitter && (
                      <a
                        href={author.social.twitter}
                        className="hover:text-red-500 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Follow ${author.name} on Twitter`}
                        aria-label={`Follow ${author.name} on Twitter`}
                      >
                        <FaTwitter size={15} />
                      </a>
                    )}
                    {author.social?.quora && (
                      <a
                        href={author.social.quora}
                        className="hover:text-red-500 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Follow ${author.name} on Quora`}
                        aria-label={`Follow ${author.name} on Quora`}
                      >
                        <FaInstagram size={15} />
                      </a>
                    )}
                    {author.social?.reddit && (
                      <a
                        href={author.social.reddit}
                        className="hover:text-red-500 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Follow ${author.name} on Reddit`}
                        aria-label={`Follow ${author.name} on Reddit`}
                      >
                        <FaFacebookF size={15} />
                      </a>
                    )}
                    {author.social?.medium && (
                      <a
                        href={author.social.medium}
                        className="hover:text-red-500 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Follow ${author.name} on Medium`}
                        aria-label={`Follow ${author.name} on Medium`}
                      >
                        <FaYoutube size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

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
  );
}