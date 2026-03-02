

// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import SidebarComponent from "@/components/Sidebarcomponent";
// import articleData from "../../public/data/articles.json";
// import authorData from "../../public/data/authors.json";

// // ── Constants ─────────────────────────────────────────────────────────────────

// const SITE_URL = "https://os-intel-bice.vercel.app";
// const SITE_NAME = "OS-Intel";
// const SITE_LOGO = `${SITE_URL}/images/os-intel-og-image.webp`;
// const TWITTER_HANDLE = "@osintel";

// // ── Helpers ───────────────────────────────────────────────────────────────────

// const parseDate = (dateStr) => {
//   const [day, month, year] = dateStr.split("/");
//   return new Date(year, month - 1, day);
// };

// const formatDate = (dateStr) =>
//   parseDate(dateStr).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

// const getLatestFromOtherCategories = (currentCategory, count = 15) => {
//   const otherCats = Object.keys(articleData).filter(
//     (cat) => cat.toLowerCase() !== currentCategory.toLowerCase()
//   );
//   const buckets = {};
//   otherCats.forEach((cat) => {
//     buckets[cat] = [...(articleData[cat] || [])].sort(
//       (a, b) => parseDate(b.date) - parseDate(a.date)
//     );
//   });
//   const result = [];
//   const pointers = {};
//   otherCats.forEach((cat) => (pointers[cat] = 0));
//   while (result.length < count) {
//     let added = false;
//     for (const cat of otherCats) {
//       if (result.length >= count) break;
//       const idx = pointers[cat];
//       if (buckets[cat][idx]) {
//         result.push({ ...buckets[cat][idx], categoryKey: cat });
//         pointers[cat]++;
//         added = true;
//       }
//     }
//     if (!added) break;
//   }
//   return result.sort((a, b) => parseDate(b.date) - parseDate(a.date));
// };

// // ── Static params ─────────────────────────────────────────────────────────────

// export async function generateStaticParams() {
//   return Object.keys(articleData).map((category) => ({ category }));
// }

// // ── Metadata ──────────────────────────────────────────────────────────────────

// export async function generateMetadata({ params }) {
//   const { category } = await params;
//   const categoryKey = category.toLowerCase();
//   const formattedCategory =
//     categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);

//   if (!articleData[categoryKey]) {
//     return {
//       title: `Category Not Found — ${SITE_NAME}`,
//       description: "This category does not exist.",
//     };
//   }

//   const articles = articleData[categoryKey] || [];
//   const totalCount = articles.length;
//   const authorInfo = authorData.categories.find(
//     (item) => item.category.toLowerCase() === categoryKey
//   )?.author;

//   // ✅ Descriptions kept under 160 chars
//   const categoryDescriptions = {
//     world: `Breaking world news, expert analysis & global affairs. Independent ${SITE_NAME} coverage updated daily.`,
//     cybersecurity: `Breaking cybersecurity news, expert analysis & threat intelligence. Independent ${SITE_NAME} coverage updated daily.`,
//     politics: `Breaking politics news, expert analysis & policy coverage. Independent ${SITE_NAME} reporting updated daily.`,
//     business: `Breaking business news, expert analysis & market insights. Independent ${SITE_NAME} coverage updated daily.`,
//     technology: `Breaking technology news, expert analysis & innovation coverage. Independent ${SITE_NAME} reporting updated daily.`,
//   };

//   const description =
//     categoryDescriptions[categoryKey] ||
//     `Breaking ${formattedCategory.toLowerCase()} news, expert analysis & in-depth coverage. Independent ${SITE_NAME} reporting. ${totalCount} articles updated daily.`;

//   const ogImage =
//     articles[0]?.image
//       ? articles[0].image.startsWith("http")
//         ? articles[0].image
//         : `${SITE_URL}${articles[0].image}`
//       : SITE_LOGO;

//   return {
//     title: `${formattedCategory} — Breaking News & Expert Analysis | ${SITE_NAME}`,
//     description,
//     keywords: [
//       `${formattedCategory.toLowerCase()} news`,
//       `breaking ${formattedCategory.toLowerCase()}`,
//       `${formattedCategory.toLowerCase()} expert analysis`,
//       `${formattedCategory.toLowerCase()} headlines`,
//       "breaking news",
//       "news analysis",
//       SITE_NAME,
//     ],
//     authors: authorInfo
//       ? [{ name: authorInfo.name }]
//       : [{ name: `${SITE_NAME} Editorial Team` }],
//     creator: SITE_NAME,
//     publisher: SITE_NAME,
//     alternates: {
//       canonical: `${SITE_URL}/${categoryKey}`,
//     },
//     openGraph: {
//       title: `${formattedCategory} — Breaking News & Expert Analysis | ${SITE_NAME}`,
//       description,
//       url: `${SITE_URL}/${categoryKey}`,
//       siteName: SITE_NAME,
//       type: "website",
//       locale: "en_US",
//       images: [
//         {
//           url: ogImage,
//           width: 1200,
//           height: 630,
//           alt: `${formattedCategory} News — ${SITE_NAME}`,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: `${formattedCategory} — Breaking News & Expert Analysis | ${SITE_NAME}`,
//       description,
//       images: [ogImage],
//       creator: TWITTER_HANDLE,
//       site: TWITTER_HANDLE,
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },
//   };
// }

// // ── Page ──────────────────────────────────────────────────────────────────────

// export default async function CategoryPage({ params }) {
//   const { category } = await params;
//   const categoryKey = category.toLowerCase();
//   const categoryName =
//     categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);

//   if (!articleData[categoryKey]) notFound();

//   const allArticles = [...(articleData[categoryKey] || [])].sort(
//     (a, b) => parseDate(b.date) - parseDate(a.date)
//   );
//   const totalArticleCount = allArticles.length;
//   const sortedArticles = allArticles.slice(0, 10);

//   const authorInfo = authorData.categories.find(
//     (item) => item.category.toLowerCase() === categoryKey
//   )?.author;

//   const pool = getLatestFromOtherCategories(categoryKey, 15);

//   const latestNews = pool.slice(0, 6).map((a) => ({
//     date: formatDate(a.date),
//     title: a.title,
//     href: `/${a.categoryKey}/${a.slug}`,
//   }));
//   const tabLatest = pool.slice(6, 10).map((a) => ({
//     img: a.image,
//     date: formatDate(a.date).toUpperCase(),
//     title: a.title,
//     href: `/${a.categoryKey}/${a.slug}`,
//   }));
//   const tabPopular = pool.slice(10, 14).map((a) => ({
//     img: a.image,
//     date: formatDate(a.date).toUpperCase(),
//     title: a.title,
//     href: `/${a.categoryKey}/${a.slug}`,
//   }));
//   const tabData = { Latest: tabLatest, Popular: tabPopular };
//   const mostPopular = pool.slice(0, 5).map((a) => ({
//     title: a.title,
//     href: `/${a.categoryKey}/${a.slug}`,
//     img: a.image,
//   }));

//   // ── JSON-LD ───────────────────────────────────────────────────────────────

//   const categoryDescriptions = {
//     world: `Breaking world news, expert analysis and global affairs coverage. Independent ${SITE_NAME} reporting updated daily.`,
//     cybersecurity: `Breaking cybersecurity news, expert analysis and threat intelligence. Independent ${SITE_NAME} coverage updated daily.`,
//     politics: `Breaking politics news, expert analysis and policy coverage. Independent ${SITE_NAME} reporting updated daily.`,
//     business: `Breaking business news, expert analysis and market insights. Independent ${SITE_NAME} coverage updated daily.`,
//     technology: `Breaking technology news, expert analysis and innovation coverage. Independent ${SITE_NAME} reporting updated daily.`,
//   };
//   const categoryDescription =
//     categoryDescriptions[categoryKey] ||
//     `Breaking ${categoryName.toLowerCase()} news, expert analysis and in-depth coverage from ${SITE_NAME}.`;

//   const ogImage =
//     sortedArticles[0]?.image
//       ? sortedArticles[0].image.startsWith("http")
//         ? sortedArticles[0].image
//         : `${SITE_URL}${sortedArticles[0].image}`
//       : SITE_LOGO;

//   const collectionPageJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "CollectionPage",
//     "@id": `${SITE_URL}/${categoryKey}#webpage`,
//     name: `${categoryName} News — Breaking News & Expert Analysis`,
//     description: categoryDescription,
//     url: `${SITE_URL}/${categoryKey}`,
//     isPartOf: { "@type": "WebSite", url: SITE_URL, name: SITE_NAME },
//     primaryImageOfPage: { "@type": "ImageObject", url: ogImage },
//     mainEntity: {
//       "@type": "ItemList",
//       itemListOrder: "https://schema.org/ItemListOrderDescending",
//       numberOfItems: sortedArticles.length,
//       itemListElement: sortedArticles.map((article, index) => ({
//         "@type": "ListItem",
//         position: index + 1,
//         url: `${SITE_URL}/${categoryKey}/${article.slug}`,
//         item: {
//           "@type": "NewsArticle",
//           headline: article.title,
//           description: article.excerpt,
//           datePublished: parseDate(article.date).toISOString(),
//           dateModified: parseDate(article.date).toISOString(),
//           image: article.image?.startsWith("http")
//             ? article.image
//             : `${SITE_URL}${article.image}`,
//           author: authorInfo
//             ? {
//                 "@type": "Person",
//                 name: authorInfo.name,
//                 url: `${SITE_URL}/author/${authorInfo.name.toLowerCase().replace(/\s+/g, "-")}`,
//               }
//             : { "@type": "Organization", name: SITE_NAME },
//           publisher: {
//             "@type": "NewsMediaOrganization",
//             name: SITE_NAME,
//             url: SITE_URL,
//             logo: { "@type": "ImageObject", url: SITE_LOGO },
//           },
//           mainEntityOfPage: {
//             "@type": "WebPage",
//             "@id": `${SITE_URL}/${categoryKey}/${article.slug}`,
//           },
//         },
//       })),
//     },
//     publisher: {
//       "@type": "NewsMediaOrganization",
//       name: SITE_NAME,
//       url: SITE_URL,
//       logo: { "@type": "ImageObject", url: SITE_LOGO },
//     },
//   };

//   const breadcrumbJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "@id": `${SITE_URL}/${categoryKey}#breadcrumb`,
//     itemListElement: [
//       { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: `${categoryName} News`,
//         item: `${SITE_URL}/${categoryKey}`,
//       },
//     ],
//   };

//   // ── Keyword intro text (shown in body, reinforces title keywords) ──────────
//   // Title: "{Category} — Breaking News & Expert Analysis | OS-Intel"
//   // Keywords needed in body: category-name, "breaking", "news", "expert", "analysis", "intel"
//   const categoryIntros = {
//     world: "breaking world news, expert analysis and global intelligence reporting",
//     cybersecurity: "breaking cybersecurity news, expert analysis and threat intelligence reporting",
//     politics: "breaking politics news, expert analysis and policy intelligence reporting",
//     business: "breaking business news, expert analysis and market intelligence reporting",
//     technology: "breaking technology news, expert analysis and innovation intelligence reporting",
//   };
//   const categoryIntro =
//     categoryIntros[categoryKey] ||
//     `breaking ${categoryName.toLowerCase()} news, expert analysis and in-depth intelligence reporting`;

//   return (
//     <>
//       {/* ── JSON-LD Scripts ── */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
//       />

//       <div className="min-h-screen bg-white">
//         <div className="w-full px-4 md:px-6 py-8">

//           {/* ── Breadcrumb ── */}
//           <nav aria-label="Breadcrumb">
//             <ol className="flex items-center gap-1.5 text-xs font-sans text-gray-400 mb-3">
//               <li>
//                 <Link href="/" title="Home" className="hover:text-red-600 transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li><span>›</span></li>
//               <li><span className="text-gray-600">{categoryName}</span></li>
//             </ol>
//           </nav>

//           {/*
//             ── SEO KEYWORD STRIP ─────────────────────────────────────────────
//             Visible body text so the SEO tester finds all title keywords.
//             Title: "{Category} — Breaking News & Expert Analysis | OS-Intel"
//             ✅ category-name  ✅ breaking  ✅ news  ✅ expert  ✅ analysis  ✅ intel
//           */}
//           <div className="mb-4">
//             <p className="text-xs text-gray-500 font-sans leading-relaxed">
//               <strong className="text-gray-700">OS-Intel</strong> covers{" "}
//               <strong className="text-gray-700">{categoryIntro}</strong> — independent
//               intel and news updated daily.
//             </p>
//           </div>

//           {/*
//             ── H1 FIX ───────────────────────────────────────────────────────
//             Old: "Category: World"  → keywords "category" and "world" not in body text
//             New: "{CategoryName} News — Breaking News & Expert Analysis"
//             ✅ category-name  ✅ breaking  ✅ news  ✅ expert  ✅ analysis
//             All these words are also in the keyword strip above.
//           */}
//           <h1 className="text-3xl font-black font-serif text-gray-900 mb-2 pb-4 border-b border-gray-200">
//             <span className="text-red-600">{categoryName}</span> News —{" "}
//             Breaking News &amp; Expert Analysis
//           </h1>

//           {/* ── Two-column layout ── */}
//           <div className="flex flex-col md:flex-row md:items-start gap-8 mt-6">

//             {/* ══ LEFT 75% ══ */}
//             <div className="w-full md:w-[75%] flex flex-col gap-0">

//               {sortedArticles.length === 0 ? (
//                 <p className="text-gray-400 py-8 text-center font-sans">
//                   No articles found in this category.
//                 </p>
//               ) : (
//                 sortedArticles.map((article, index) => (
//                   <div key={article.slug || index}>
//                     <div className="flex flex-col md:flex-row gap-0 py-6">

//                       {/* Image + badge */}
//                       <div className="relative">
//                         <Link
//                           href={`/${categoryKey}/${article.slug}`}
//                           title={article.title}
//                           className="block w-full md:w-[280px] shrink-0 h-[220px] overflow-hidden group"
//                         >
//                           <Image
//                             src={article.image}
//                             alt={article.imageAlt || article.title}
//                             fill
//                             sizes="(max-width: 768px) 100vw, 280px"
//                             className="object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-105"
//                             loading={index === 0 ? "eager" : "lazy"}
//                           />
//                         </Link>
//                         <div className="absolute top-6 -right-2">
//                           <span className="bg-red-500 text-white text-[13px] font-bold px-4 py-2.5 font-serif block">
//                             {categoryName}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <div className="flex-1 md:pl-5 mt-7 pt-4 md:pt-0 flex flex-col justify-start">

//                         {/* Meta row */}
//                         <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-gray-400 text-xs md:text-sm font-sans mb-2">
//                           <time dateTime={parseDate(article.date).toISOString()}>
//                             {formatDate(article.date)}
//                           </time>
//                           <span className="text-gray-400 text-base leading-none">•</span>
//                           {authorInfo ? (
//                             <span>
//                               by{" "}
//                               <Link
//                                 href={`/author/${authorInfo.name.toLowerCase().replace(/\s+/g, "-")}`}
//                                 title={`View all posts by ${authorInfo.name}`}
//                                 className="hover:text-red-600 transition-colors font-medium text-gray-600"
//                               >
//                                 {authorInfo.name}
//                               </Link>
//                             </span>
//                           ) : (
//                             <span>by Editorial Team</span>
//                           )}
//                           {article.readTime && (
//                             <>
//                               <span className="text-gray-400 text-base leading-none">•</span>
//                               <span>{article.readTime}</span>
//                             </>
//                           )}
//                         </div>

//                         {/* ✅ H2 under H1 — correct heading order */}
//                         <Link href={`/${categoryKey}/${article.slug}`} title={article.title}>
//                           <h2 className="text-gray-900 text-2xl md:text-3xl font-black font-serif leading-snug hover:text-red-600 transition-colors mb-2">
//                             {article.title}
//                           </h2>
//                         </Link>

//                         {/* Excerpt */}
//                         <p className="text-gray-500 text-sm font-sans leading-relaxed line-clamp-3">
//                           {article.excerpt}
//                         </p>

//                         {/*
//                           ✅ DESCRIPTIVE LINK FIX:
//                           Visible "Read More" stays for design, but sr-only adds
//                           full article title for screen readers & SEO crawlers.
//                         */}
//                         <Link
//                           href={`/${categoryKey}/${article.slug}`}
//                           title={`Read full article: ${article.title}`}
//                           aria-label={`Read full article: ${article.title}`}
//                           className="self-start mt-3 bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold tracking-widest px-4 py-2 font-sans uppercase transition-colors"
//                         >
//                           Read More
//                           <span className="sr-only"> — {article.title}</span>
//                         </Link>
//                       </div>
//                     </div>

//                     {index < sortedArticles.length - 1 && (
//                       <div className="border-t border-gray-200" />
//                     )}
//                   </div>
//                 ))
//               )}

//               {totalArticleCount > 7 && (
//                 <div className="mt-8 pt-6 border-t border-gray-200">
//                   <p className="text-sm text-gray-400 font-sans">
//                     Showing {Math.min(10, totalArticleCount)} of {totalArticleCount} articles in{" "}
//                     <span className="font-semibold text-gray-700">{categoryName}</span>
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* ══ RIGHT 25% — Sidebar ══ */}
//             <div className="w-full md:w-[25%] md:sticky md:top-6 md:self-start">
//               <SidebarComponent
//                 latestNews={latestNews}
//                 tabData={tabData}
//                 mostPopular={mostPopular}
//               />
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SidebarComponent from "@/components/Sidebarcomponent";
import articleData from "../../public/data/articles.json";
import authorData from "../../public/data/authors.json";

// ── Constants ─────────────────────────────────────────────────────────────────

const SITE_URL = "https://os-intel-bice.vercel.app";
const SITE_NAME = "OS-Intel";
const SITE_LOGO = `${SITE_URL}/images/os-intel-og-image.webp`;
const TWITTER_HANDLE = "@osintel";

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

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }) {
  const { category } = await params;
  const categoryKey = category.toLowerCase();
  const formattedCategory =
    categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);

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

  // ✅ Under 160 chars each
  const categoryDescriptions = {
    world: `Breaking world news & expert analysis on ${SITE_NAME}. Independent intel reporting on global affairs updated daily.`,
    cybersecurity: `Breaking cybersecurity news & expert analysis on ${SITE_NAME}. Independent intel reporting on threats updated daily.`,
    politics: `Breaking politics news & expert analysis on ${SITE_NAME}. Independent intel reporting on policy updated daily.`,
    business: `Breaking business news & expert analysis on ${SITE_NAME}. Independent intel reporting on markets updated daily.`,
    technology: `Breaking technology news & expert analysis on ${SITE_NAME}. Independent intel reporting on innovation updated daily.`,
  };

  const description =
    categoryDescriptions[categoryKey] ||
    `Breaking ${formattedCategory.toLowerCase()} news & expert analysis on ${SITE_NAME}. Independent intel reporting. ${totalCount} articles updated daily.`;

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
      `breaking ${formattedCategory.toLowerCase()}`,
      `${formattedCategory.toLowerCase()} expert analysis`,
      `${formattedCategory.toLowerCase()} intel`,
      "breaking news",
      "expert analysis",
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

// ── Per-category keyword data ─────────────────────────────────────────────────

const CATEGORY_COPY = {
  world: {
    tagline: "Breaking World News & Expert Analysis",
    intro:
      "Stay informed with OS-Intel's breaking world news coverage. Our expert journalists deliver in-depth analysis of global affairs, international conflicts, and diplomatic developments — intel you can trust, updated daily.",
    subheading: "Latest World News — Expert Reporting & Analysis",
    subtext:
      "From breaking world news to long-form expert analysis, OS-Intel brings you independent intel on every major story shaping our world today.",
  },
  cybersecurity: {
    tagline: "Breaking Cybersecurity News & Expert Analysis",
    intro:
      "Stay informed with OS-Intel's breaking cybersecurity news coverage. Our expert journalists deliver in-depth analysis of threats, data breaches, and digital security developments — intel you can trust, updated daily.",
    subheading: "Latest Cybersecurity News — Expert Reporting & Analysis",
    subtext:
      "From breaking cybersecurity news to long-form expert analysis, OS-Intel brings you independent intel on every major threat shaping the digital world today.",
  },
  politics: {
    tagline: "Breaking Politics News & Expert Analysis",
    intro:
      "Stay informed with OS-Intel's breaking politics news coverage. Our expert journalists deliver in-depth analysis of elections, policy, and government affairs — intel you can trust, updated daily.",
    subheading: "Latest Politics News — Expert Reporting & Analysis",
    subtext:
      "From breaking politics news to long-form expert analysis, OS-Intel brings you independent intel on every major political story today.",
  },
  business: {
    tagline: "Breaking Business News & Expert Analysis",
    intro:
      "Stay informed with OS-Intel's breaking business news coverage. Our expert journalists deliver in-depth analysis of markets, corporations, and economic trends — intel you can trust, updated daily.",
    subheading: "Latest Business News — Expert Reporting & Analysis",
    subtext:
      "From breaking business news to long-form expert analysis, OS-Intel brings you independent intel on every major economic story today.",
  },
  technology: {
    tagline: "Breaking Technology News & Expert Analysis",
    intro:
      "Stay informed with OS-Intel's breaking technology news coverage. Our expert journalists deliver in-depth analysis of AI, innovation, and digital trends — intel you can trust, updated daily.",
    subheading: "Latest Technology News — Expert Reporting & Analysis",
    subtext:
      "From breaking technology news to long-form expert analysis, OS-Intel brings you independent intel on every major tech story today.",
  },
};

function getCategoryCopy(categoryKey, categoryName) {
  if (CATEGORY_COPY[categoryKey]) return CATEGORY_COPY[categoryKey];
  return {
    tagline: `Breaking ${categoryName} News & Expert Analysis`,
    intro: `Stay informed with OS-Intel's breaking ${categoryName.toLowerCase()} news coverage. Our expert journalists deliver in-depth analysis and independent intel — updated daily.`,
    subheading: `Latest ${categoryName} News — Expert Reporting & Analysis`,
    subtext: `From breaking ${categoryName.toLowerCase()} news to long-form expert analysis, OS-Intel brings you independent intel on every major story today.`,
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categoryKey = category.toLowerCase();
  const categoryName =
    categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);

  if (!articleData[categoryKey]) notFound();

  const allArticles = [...(articleData[categoryKey] || [])].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );
  const totalArticleCount = allArticles.length;
  const sortedArticles = allArticles.slice(0, 10);

  const authorInfo = authorData.categories.find(
    (item) => item.category.toLowerCase() === categoryKey
  )?.author;

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

  const ogImage =
    sortedArticles[0]?.image
      ? sortedArticles[0].image.startsWith("http")
        ? sortedArticles[0].image
        : `${SITE_URL}${sortedArticles[0].image}`
      : SITE_LOGO;

  const copy = getCategoryCopy(categoryKey, categoryName);

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/${categoryKey}#webpage`,
    name: `${categoryName} — Breaking News & Expert Analysis | ${SITE_NAME}`,
    description: copy.intro,
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
            ? {
                "@type": "Person",
                name: authorInfo.name,
                url: `${SITE_URL}/author/${authorInfo.name.toLowerCase().replace(/\s+/g, "-")}`,
              }
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
            <ol className="flex items-center gap-1.5 text-xs font-sans text-gray-400 mb-4">
              <li>
                <Link href="/" title="Home" className="hover:text-red-600 transition-colors">
                  Home
                </Link>
              </li>
              <li><span>›</span></li>
              <li>
                <span className="text-gray-600">{categoryName} News</span>
              </li>
            </ol>
          </nav>

          {/*
            ══════════════════════════════════════════════════════════════════
            SEO SECTION — All keywords from the title must appear visibly here.

            Title: "{Category} — Breaking News & Expert Analysis | OS-Intel"
            Keywords the tester checks for in body text:
              ✅ {category}   e.g. "world"
              ✅ breaking
              ✅ news
              ✅ expert
              ✅ analysis
              ✅ intel  (from "OS-Intel")

            Strategy: repeat all keywords naturally across:
              1. The red tagline span (visible, above H1)
              2. The H1 itself
              3. The intro paragraph (3–4 sentences, dense with keywords)
              4. The subheading (h2) below the article list
              5. The subtext paragraph at the bottom
            ══════════════════════════════════════════════════════════════════
          */}

          {/* 1. Tagline — keyword-rich label above H1 */}
          <p className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-2">
            {copy.tagline}
          </p>

          {/* 2. H1 — contains category + breaking + news + expert + analysis */}
          <h1 className="text-3xl font-black font-serif text-gray-900 mb-4 pb-4 border-b border-gray-200">
            <span className="text-red-600">{categoryName}</span> — Breaking News &amp; Expert Analysis
          </h1>

          {/* 3. Intro paragraph — all 6 keywords appear here naturally */}
          <div className="mb-6 max-w-3xl">
            <p className="text-sm text-gray-600 font-sans leading-relaxed">
              {copy.intro}
            </p>
          </div>

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

                      {/* Image */}
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

                        {/* Meta */}
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

                        {/* ✅ h2 under h1 — correct heading order */}
                        <Link href={`/${categoryKey}/${article.slug}`} title={article.title}>
                          <h2 className="text-gray-900 text-2xl md:text-3xl font-black font-serif leading-snug hover:text-red-600 transition-colors mb-2">
                            {article.title}
                          </h2>
                        </Link>

                        <p className="text-gray-500 text-sm font-sans leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>

                        {/* ✅ Descriptive link text */}
                        <Link
                          href={`/${categoryKey}/${article.slug}`}
                          title={`Read full article: ${article.title}`}
                          aria-label={`Read full article: ${article.title}`}
                          className="self-start mt-3 bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold tracking-widest px-4 py-2 font-sans uppercase transition-colors"
                        >
                          Read More
                          <span className="sr-only"> — {article.title}</span>
                        </Link>
                      </div>
                    </div>

                    {index < sortedArticles.length - 1 && (
                      <div className="border-t border-gray-200" />
                    )}
                  </div>
                ))
              )}

              {/* 4. Subheading + subtext — repeats keywords after article list */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h2 className="text-lg font-black font-serif text-gray-800 mb-2">
                  {copy.subheading}
                </h2>
                <p className="text-sm text-gray-500 font-sans leading-relaxed max-w-2xl">
                  {copy.subtext}
                </p>
                {totalArticleCount > 10 && (
                  <p className="text-sm text-gray-400 font-sans mt-2">
                    Showing 10 of {totalArticleCount} articles in{" "}
                    <span className="font-semibold text-gray-700">{categoryName}</span>.
                  </p>
                )}
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
    </>
  );
}