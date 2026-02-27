
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SidebarComponent from "@/components/Sidebarcomponent";
import articleData from "../../../public/data/articles.json";
import authorData from "../../../public/data/authors.json";
import { slugify } from "../../../utils/slugify";
import {
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaTumblr,
  FaShareAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter, FaReddit, FaQuora } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";

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

const absImage = (img) =>
  !img ? SITE_LOGO : img.startsWith("http") ? img : `${SITE_URL}${img}`;

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
  const params = [];
  Object.keys(articleData).forEach((category) => {
    (articleData[category] || []).forEach((article) => {
      params.push({ category, slug: article.slug });
    });
  });
  return params;
}

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const categoryKey = category.toLowerCase();

  const article = (articleData[categoryKey] || []).find(
    (item) => item.slug === slug
  );
  if (!article) {
    return { title: `Article Not Found — ${SITE_NAME}`, description: "This article does not exist." };
  }

  const author = authorData.categories.find(
    (item) => item.category.toLowerCase() === categoryKey
  )?.author;

  const formattedCategory = categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
  const imageUrl = absImage(article.image);
  const publishedIso = parseDate(article.date).toISOString();
  const metaTitle = article.metaTitle || `${article.title} | ${formattedCategory} — ${SITE_NAME}`;
  const metaDescription = article.metaDescription || article.excerpt?.slice(0, 160) || `Read ${article.title} on ${SITE_NAME}.`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: article.keywords?.join(", ") || `${categoryKey} news, ${SITE_NAME}`,
    authors: author ? [{ name: author.name }] : [{ name: `${SITE_NAME} Editorial Team` }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: { canonical: `${SITE_URL}/${categoryKey}/${slug}` },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${SITE_URL}/${categoryKey}/${slug}`,
      siteName: SITE_NAME,
      type: "article",
      locale: "en_US",
      publishedTime: publishedIso,
      modifiedTime: publishedIso,
      authors: author ? [author.name] : [`${SITE_NAME} Editorial Team`],
      section: formattedCategory,
      tags: article.keywords || [formattedCategory],
      images: [{ url: imageUrl, width: 1200, height: 630, alt: article.imageAlt || article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

// ── Content renderer ──────────────────────────────────────────────────────────

const renderContent = (item, index) => {
  switch (item.type) {
    case "paragraph":
      return (
        <p key={index} className="text-gray-700 text-sm font-serif leading-relaxed mb-4">
          {item.text}
        </p>
      );
    case "heading": {
      const Tag = `h${item.level}`;
      return (
        <Tag key={index} className={`font-black font-serif text-gray-900 mb-3 mt-6 ${item.level === 2 ? "text-2xl" : "text-xl"}`}>
          {item.text}
        </Tag>
      );
    }
    case "image":
      return (
        <div key={index} className="relative w-full h-[270px] md:h-[420px] overflow-hidden mb-6">
          <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover grayscale" loading="lazy" />
        </div>
      );
    default:
      return null;
  }
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ArticleDetailPage({ params }) {
  const { category, slug } = await params;
  const categoryKey = category.toLowerCase();

  if (!articleData[categoryKey]) notFound();
  const categoryPosts = articleData[categoryKey];
  const article = categoryPosts.find((item) => item.slug === slug);
  if (!article) notFound();

  const author = authorData.categories.find(
    (item) => item.category.toLowerCase() === categoryKey
  )?.author;
  if (!author) notFound();

  const authorSlug = slugify(author.name);
  const formattedCategory = categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
  const publishedIso = parseDate(article.date).toISOString();

  const sortedPosts = [...categoryPosts].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  const currentIndex = sortedPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const morePosts = sortedPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const pool = getLatestFromOtherCategories(categoryKey, 15);
  const latestNews = pool.slice(0, 6).map((a) => ({ date: formatDate(a.date), title: a.title, href: `/${a.categoryKey}/${a.slug}` }));
  const tabLatest = pool.slice(6, 10).map((a) => ({ img: a.image, date: formatDate(a.date).toUpperCase(), title: a.title, href: `/${a.categoryKey}/${a.slug}` }));
  const tabPopular = pool.slice(10, 14).map((a) => ({ img: a.image, date: formatDate(a.date).toUpperCase(), title: a.title, href: `/${a.categoryKey}/${a.slug}` }));
  const tabData = { Latest: tabLatest, Popular: tabPopular };
  const mostPopular = pool.slice(0, 5).map((a) => ({ title: a.title, href: `/${a.categoryKey}/${a.slug}`, img: a.image }));

  const encodedUrl = encodeURIComponent(`${SITE_URL}/${categoryKey}/${slug}`);
  const encodedTitle = encodeURIComponent(article.title);

  // ── JSON-LD ───────────────────────────────────────────────────────────────

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${SITE_URL}/${categoryKey}/${slug}#article`,
    headline: article.title,
    description: article.excerpt,
    image: [absImage(article.image)],
    datePublished: publishedIso,
    dateModified: publishedIso,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/author/${authorSlug}#person`,
      name: author.name,
      url: `${SITE_URL}/author/${authorSlug}`,
      image: absImage(author.profileImage),
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: SITE_LOGO },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/${categoryKey}/${slug}`,
    },
    articleSection: formattedCategory,
    keywords: article.keywords?.join(", ") || formattedCategory,
    url: `${SITE_URL}/${categoryKey}/${slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/${categoryKey}/${slug}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: `${formattedCategory} News`, item: `${SITE_URL}/${categoryKey}` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/${categoryKey}/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="min-h-screen bg-white">
        <div className="w-full px-4 md:px-6 py-8">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs font-sans text-gray-400 mb-3 flex-wrap">
              <li><Link href="/" title="Home" className="hover:text-red-600 transition-colors">Home</Link></li>
              <li><span>›</span></li>
              <li><Link href={`/${categoryKey}`} title={`${formattedCategory} page`} className="hover:text-red-600 transition-colors">{formattedCategory}</Link></li>
              <li><span>›</span></li>
              <li><span className="text-gray-600 line-clamp-1">{article.title}</span></li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-start gap-10">

            {/* LEFT 75% */}
            <article className="w-full md:w-[75%]">

              {/* Badges */}
              <div className="mb-3 flex items-center gap-2 flex-wrap">
                <Link href={`/${categoryKey}`} title={`${formattedCategory} news`}>
                  <span className="bg-red-600 text-white text-[12px] font-bold tracking-widest px-2 py-1 font-serif uppercase hover:bg-red-700 transition-colors">
                    {formattedCategory}
                  </span>
                </Link>
                {article.type && article.type !== "normal" && (
                  <span className="bg-gray-800 text-white text-[12px] font-bold tracking-widest px-2 py-1 font-serif uppercase">
                    {article.type}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-4xl font-black font-serif text-gray-900 leading-tight mb-4">
                {article.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center flex-wrap gap-3 text-gray-400 text-xs font-sans mb-5">
                <div className="flex items-center gap-2">
                  <Link href={`/author/${authorSlug}`} title={`View all posts by ${author.name}`}>
                    <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 relative hover:opacity-80 transition-opacity">
                      <Image src={author.profileImage} alt={author.name} fill sizes="24px" className="object-cover" />
                    </div>
                  </Link>
                  <span>
                    by{" "}
                    <Link href={`/author/${authorSlug}`} title={`View all posts by ${author.name}`} className="text-gray-700 font-semibold hover:text-red-600 transition-colors">
                      {author.name}
                    </Link>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <FaClock size={10} />
                  <time dateTime={publishedIso}>{formatDate(article.date).toUpperCase()}</time>
                </div>
                {article.readTime && <span>• {article.readTime}</span>}
              </div>

              {/* Featured image */}
              <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden mb-6">
                <Image src={article.image} alt={article.imageAlt || article.title} fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover grayscale" priority />
              </div>

              {/* Content + Share */}
              <div className="flex flex-col md:flex-row gap-6 mb-8">

                {/* Share sidebar */}
                <div className="md:w-[56px] md:shrink-0 md:self-start md:sticky md:top-6">
                  <div className="hidden md:flex items-center gap-1.5 text-gray-400 text-[10px] font-sans tracking-widest uppercase mb-3">
                    <FaShareAlt size={9} /><span>Share</span>
                  </div>
                  <div className="flex flex-row md:flex-col gap-2">
                    {[
                      { Icon: FaFacebookF,  bg: "bg-[#3b5998]", hover: "hover:bg-[#344e86]", label: "Facebook",  href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
                      { Icon: FaTwitter,    bg: "bg-[#1da1f2]", hover: "hover:bg-[#1a91da]", label: "Twitter",   href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}` },
                      { Icon: FaPinterestP, bg: "bg-[#bd081c]", hover: "hover:bg-[#a30719]", label: "Pinterest", href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}` },
                      { Icon: FaWhatsapp,   bg: "bg-[#25d366]", hover: "hover:bg-[#1ebe5d]", label: "WhatsApp",  href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}` },
                      { Icon: FaTumblr,     bg: "bg-[#35465c]", hover: "hover:bg-[#2a3849]", label: "Tumblr",    href: `https://www.tumblr.com/share/link?url=${encodedUrl}` },
                    ].map(({ Icon, bg, hover, label, href }) => (
                      <a key={label} href={href} title={`Share on ${label}`} aria-label={`Share on ${label}`} target="_blank" rel="noopener noreferrer"
                        className={`w-9 h-9 flex items-center justify-center ${bg} ${hover} transition-all duration-200 hover:scale-110`}>
                        <Icon size={14} className="text-white" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Article body */}
                <div className="flex-1 min-w-0">
                  {article.content.map((item, index) => renderContent(item, index))}
                </div>
              </div>

              <div className="border-t border-gray-200 mb-6" />

              {/* Prev / Next */}
              <div className="flex flex-col sm:flex-row gap-7 md:gap-4 mb-10">
                {prevPost ? (
                  <Link href={`/${categoryKey}/${prevPost.slug}`} title={prevPost.title} className="flex-1 group border-l-4 border-red-600 hover:border-gray-400 transition-colors">
                    <p className="text-gray-400 text-[12px] font-serif tracking-widest uppercase mb-1 ml-5">‹ PREV POST</p>
                    <h4 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors ml-5">{prevPost.title}</h4>
                  </Link>
                ) : <div className="flex-1" />}
                {nextPost ? (
                  <Link href={`/${categoryKey}/${nextPost.slug}`} title={nextPost.title} className="flex-1 text-right group border-r-4 border-red-600 hover:border-gray-400 transition-colors">
                    <p className="text-gray-400 text-[12px] font-serif tracking-widest uppercase mb-1 mr-5">NEXT POST ›</p>
                    <h4 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors mr-5">{nextPost.title}</h4>
                  </Link>
                ) : <div className="flex-1" />}
              </div>

              {/* More Posts */}
              {morePosts.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-lg font-black font-serif text-gray-900 inline-block border-b-2 border-red-600 pb-1 mb-6">More posts</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {morePosts.map((post) => (
                      <Link key={post.slug} href={`/${categoryKey}/${post.slug}`} title={post.title} className="block group">
                        <div className="relative w-full h-[160px] overflow-hidden mb-3">
                          <Image src={post.image} alt={post.imageAlt || post.title} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out" loading="lazy" />
                          <div className="absolute top-2 left-2">
                            <span className="bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 font-sans uppercase">{formattedCategory}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-[11px] font-sans mb-1">
                          <FaClock size={9} />
                          <span className="uppercase tracking-wide">{formatDate(post.date).toUpperCase()}</span>
                        </div>
                        <h4 className="text-gray-900 text-sm font-black font-serif leading-snug group-hover:text-red-600 transition-colors">{post.title}</h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* About Author */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-lg font-black font-serif text-gray-900 inline-block border-b-2 border-red-600 pb-1 mb-6">About author</h2>
                     <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-5">
                   <div className="w-22 h-22 rounded-full overflow-hidden shrink-0 mt-0 md:mt-7 bg-gray-900 relative hover:opacity-90 transition-opacity">
                     <Image
                      src={author.profileImage}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                <div className="flex-1 min-w-0">
                  {/* ── Author name → links to /author/[slug] ── */}
                  <Link href={`/author/${authorSlug}`} title={`View all posts by ${author.name}`}>
                    <h3 className="text-lg font-black font-serif text-gray-900 mb-2 hover:text-red-600 transition-colors inline-block">
                      {author.name}
                    </h3>
                  </Link>
                  <p className="text-gray-700 text-sm font-serif leading-relaxed">
                    {author.bio}
                  </p>
                    <div className="flex gap-3 mt-2 justify-center md:justify-start">
                      {author.social?.twitter && <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" title={`Follow ${author.name} on X`} aria-label="X" className="hover:text-red-500 transition-colors"><FaXTwitter size={15} /></a>}
                      {author.social?.reddit  && <a href={author.social.reddit}  target="_blank" rel="noopener noreferrer" title={`Follow ${author.name} on Reddit`} aria-label="Reddit" className="hover:text-red-500 transition-colors"><FaReddit size={15} /></a>}
                      {author.social?.quora   && <a href={author.social.quora}   target="_blank" rel="noopener noreferrer" title={`Follow ${author.name} on Quora`} aria-label="Quora" className="hover:text-red-500 transition-colors"><FaQuora size={15} /></a>}
                      {author.social?.medium  && <a href={author.social.medium}  target="_blank" rel="noopener noreferrer" title={`Follow ${author.name} on Medium`} aria-label="Medium" className="hover:text-red-500 transition-colors"><SiMedium size={15} /></a>}
                    </div>
                  </div>
                </div>
              </div>

            </article>

            {/* RIGHT 25% */}
            <div className="w-full md:w-[25%] md:sticky md:top-6 md:self-start">
              <SidebarComponent latestNews={latestNews} tabData={tabData} mostPopular={mostPopular} />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}