
// import HeroSection from "@/components/homecomponents/Herosection";
// import GridSection from "@/components/homecomponents/Gridsection";
// import ArticleListSection from "@/components/homecomponents/Articlelistsection";
// import ThreeColumnSection from "@/components/homecomponents/Threecolumnsection";
// import CarouselSection from "@/components/homecomponents/Carouselsection";

// import articlesData from "../public/data/articles.json";
// import authorsData from "../public/data/authors.json";

// // ── Helpers ───────────────────────────────────────────────────────────────────

// /** Parse DD/MM/YYYY → Date */
// function parseDate(str) {
//   const [d, m, y] = str.split("/");
//   return new Date(Number(y), Number(m) - 1, Number(d));
// }

// /** Format DD/MM/YYYY → "Month DD, YYYY" e.g. "February 24, 2026" */
// function formatDate(str) {
//   const date = parseDate(str);
//   return date.toLocaleDateString("en-US", {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   });
// }

// /** Look up author by category */
// function getAuthor(category) {
//   const entry = authorsData.categories.find(
//     (c) => c.category.toLowerCase() === category.toLowerCase()
//   );
//   return entry ? entry.author : null;
// }

// /**
//  * Build a flat, sorted (newest-first) list of all articles,
//  * each enriched with its category and author.
//  */
// function buildSortedArticles() {
//   const all = [];
//   for (const [category, articles] of Object.entries(articlesData)) {
//     if (!Array.isArray(articles)) continue;
//     const author = getAuthor(category);
//     for (const article of articles) {
//       all.push({ ...article, category, author, _date: parseDate(article.date) });
//     }
//   }
//   return all.sort((a, b) => b._date - a._date);
// }

// /**
//  * Pick `n` articles from `pool` that have not been used yet.
//  * If `differentCategories` is true, each picked article must be from a new category.
//  * Mutates `usedIds` set in place.
//  */
// function pick(pool, n, usedIds, differentCategories = false) {
//   const result = [];
//   const seenCats = new Set();

//   for (const article of pool) {
//     if (result.length >= n) break;
//     const key = `${article.category}::${article.id}`;
//     if (usedIds.has(key)) continue;
//     if (differentCategories && seenCats.has(article.category)) continue;

//     result.push(article);
//     usedIds.add(key);
//     seenCats.add(article.category);
//   }

//   return result;
// }

// /** Build the href for an article */
// function href(article) {
//   return `/${article.category}/${article.slug}`;
// }

// // ── Data builder ──────────────────────────────────────────────────────────────

// function buildPageData() {
//   const sorted = buildSortedArticles();
//   const used = new Set();

//   /* ── HeroSection ─────────────────────────────────────────────────────────
//      • heroFeatured    : latest 1 article
//      • sidebarArticles : next 6 from different categories
//   */
//   const [heroFeaturedRaw] = pick(sorted, 1, used, false);
//   const sidebarRaw = pick(sorted, 5, used, true);

//   const heroFeatured = {
//     img: heroFeaturedRaw.image,
//     title: heroFeaturedRaw.title,
//     category: heroFeaturedRaw.category.replace(/-/g, " ").toUpperCase(),
//     href: href(heroFeaturedRaw),
//     author: {
//       img: heroFeaturedRaw.author?.profileImage || "",
//       name: heroFeaturedRaw.author?.name || "Editorial",
//     },
//   };

//   const sidebarArticles = sidebarRaw.map((a) => ({
//     date: formatDate(a.date),
//     title: a.title,
//     href: href(a),
//   }));

//   /* ── GridSection ─────────────────────────────────────────────────────────
//      • col1 : next 3 from different categories (featured + 2 small)
//      • col2 : next 3 from different categories
//      • col3 : next 3 from different categories
//      • tabData: next 6 → 4 Latest, 2 Popular
//   */
//   function makeCol(articles) {
//     const [feat, ...smalls] = articles;
//     return {
//       featured: {
//         img: feat.image,
//         category: feat.category.replace(/-/g, " ").toUpperCase(),
//         title: feat.title,
//         href: href(feat),
//       },
//       small: smalls.map((a) => ({
//         img: a.image,
//         date: formatDate(a.date).toUpperCase(),
//         title: a.title,
//         href: href(a),
//       })),
//     };
//   }

//   const col1Raw = pick(sorted, 3, used, true);
//   const col2Raw = pick(sorted, 3, used, true);
//   const col3Raw = pick(sorted, 3, used, true);
//   const tabRaw = pick(sorted, 6, used, true);

//   const col1 = makeCol(col1Raw);
//   const col2 = makeCol(col2Raw);
//   const col3 = makeCol(col3Raw);

//   const tabData = {
//     Latest: tabRaw.slice(0, 4).map((a) => ({
//       img: a.image,
//       date: formatDate(a.date).toUpperCase(),
//       title: a.title,
//       href: href(a),
//     })),
//     Popular: tabRaw.slice(4, 6).map((a) => ({
//       img: a.image,
//       date: formatDate(a.date).toUpperCase(),
//       title: a.title,
//       href: href(a),
//     })),
//   };

//   /* ── ArticleListSection ──────────────────────────────────────────────────
//      • listArticles : next 3 from different categories
//      • mostPopular  : next 5 from different categories
//      • latestNews   : next 1
//   */
//   const listRaw = pick(sorted, 3, used, true);
//   const popularRaw = pick(sorted, 5, used, true);
//   const [latestNewsRaw] = pick(sorted, 1, used, false);

//   const listArticles = listRaw.map((a) => ({
//     img: a.image,
//     category: a.category.replace(/-/g, " ").toUpperCase(),
//     date: formatDate(a.date).toUpperCase(),
//     title: a.title,
//     description: a.excerpt,
//     href: href(a),
//     author: {
//       img: a.author?.profileImage || "",
//       name: a.author?.name || "Editorial",
//       href: a.author?.websiteLink || "#",
//     },
//     views: Math.floor(Math.random() * 600) + 100,
//     likes: Math.floor(Math.random() * 25) + 1,
//   }));

//   const mostPopular = popularRaw.map((a) => ({
//     title: a.title,
//     href: href(a),
//     shares: Math.floor(Math.random() * 40) + 2,
//     img: a.image
//   }));

//   const latestNews = {
//     img: latestNewsRaw.image,
//     category: latestNewsRaw.category.replace(/-/g, " ").toUpperCase(),
//     date: formatDate(latestNewsRaw.date).toUpperCase(),
//     title: latestNewsRaw.title,
//     href: href(latestNewsRaw),
//   };

//   /* ── ThreeColumnSection ──────────────────────────────────────────────────
//      • featuredNewsCard : next 1
//      • videoCard        : next 1
//      • moreFromNewsMag  : next 6 from different categories
//      • middleArticles   : next 2 from different categories
//      • rightTopArticles : next 2 from different categories
//      • rightVideoCard   : next 1
//   */
//   const [featuredNewsCardRaw] = pick(sorted, 1, used, false);
//   const [videoCardRaw] = pick(sorted, 1, used, false);
//   const moreRaw = pick(sorted, 6, used, true);
//   const middleRaw = pick(sorted, 2, used, true);
//   const rightTopRaw = pick(sorted, 2, used, true);
//   const [rightVideoRaw] = pick(sorted, 1, used, false);

//   const featuredNewsCard = {
//     img: featuredNewsCardRaw.image,
//     category: featuredNewsCardRaw.category.replace(/-/g, " ").toUpperCase(),
//     date: formatDate(featuredNewsCardRaw.date).toUpperCase(),
//     title: featuredNewsCardRaw.title,
//     href: href(featuredNewsCardRaw),
//   };

//   const videoCard = {
//     img: videoCardRaw.image,
//     category: videoCardRaw.category,
//     date: formatDate(videoCardRaw.date).toUpperCase(),
//     title: videoCardRaw.title,
//     href: href(videoCardRaw),
//   };

//   const moreFromNewsMag = moreRaw.map((a) => ({
//     img: a.image,
//     date: formatDate(a.date).toUpperCase(),
//     title: a.title,
//     href: href(a),
//   }));

//   const middleArticles = middleRaw.map((a) => ({
//     img: a.image,
//     category: a.category.replace(/-/g, " ").toUpperCase(),
//     date: formatDate(a.date).toUpperCase(),
//     title: a.title,
//     description: a.excerpt,
//     href: href(a),
//     author: {
//       img: a.author?.profileImage || "",
//       name: a.author?.name || "Editorial",
//       href: a.author?.websiteLink || "#",
//     },
//     views: Math.floor(Math.random() * 600) + 100,
//     likes: Math.floor(Math.random() * 25) + 1,
//   }));

//   const rightTopArticles = rightTopRaw.map((a) => ({
//     img: a.image,
//     date: formatDate(a.date).toUpperCase(),
//     title: a.title,
//     href: href(a),
//   }));

//   const rightVideoCard = {
//     img: rightVideoRaw.image,
//     category: rightVideoRaw.category,
//     date: formatDate(rightVideoRaw.date).toUpperCase(),
//     title: rightVideoRaw.title,
//     href: href(rightVideoRaw),
//   };

//   /* ── CarouselSection ─────────────────────────────────────────────────────
//      • carouselItems: next 6 from different categories
//   */
//   const carouselRaw = pick(sorted, 6, used, true);

//   const carouselItems = carouselRaw.map((a) => ({
//     img: a.image,
//     category: a.category.replace(/-/g, " ").toUpperCase(),
//     date: formatDate(a.date).toUpperCase(),
//     title: a.title,
//     href: href(a),
//   }));

//   return {
//     heroFeatured,
//     sidebarArticles,
//     col1,
//     col2,
//     col3,
//     tabData,
//     listArticles,
//     mostPopular,
//     latestNews,
//     featuredNewsCard,
//     videoCard,
//     moreFromNewsMag,
//     middleArticles,
//     rightTopArticles,
//     rightVideoCard,
//     carouselItems,
//   };
// }

// // ── Page ──────────────────────────────────────────────────────────────────────

// export default function Home() {
//   const {
//     heroFeatured,
//     sidebarArticles,
//     col1,
//     col2,
//     col3,
//     tabData,
//     listArticles,
//     mostPopular,
//     latestNews,
//     featuredNewsCard,
//     videoCard,
//     moreFromNewsMag,
//     middleArticles,
//     rightTopArticles,
//     rightVideoCard,
//     carouselItems,
//   } = buildPageData();

//   return (
//     <div className="min-h-screen bg-white">

//       {/* 1. Hero Section */}
//       <HeroSection
//         featured={heroFeatured}
//         sidebarArticles={sidebarArticles}
//       />

//       {/* 2. Grid Section */}
//       <GridSection
//         col1={col1}
//         col2={col2}
//         col3={col3}
//         tabData={tabData}
//       />

//       {/* 3. Article List Section */}
//       <ArticleListSection
//         listArticles={listArticles}
//         mostPopular={mostPopular}
//         latestNews={latestNews}
//       />

//       {/* 4. Three Column Section */}
//       <ThreeColumnSection
//         featuredNewsCard={featuredNewsCard}
//         videoCard={videoCard}
//         moreFromNewsMag={moreFromNewsMag}
//         middleArticles={middleArticles}
//         rightTopArticles={rightTopArticles}
//         rightVideoCard={rightVideoCard}
//       />

//       {/* 5. Carousel Section */}
//       <CarouselSection carouselItems={carouselItems} />

//     </div>
//   );
// }

import HeroSection from "@/components/homecomponents/Herosection";
import GridSection from "@/components/homecomponents/Gridsection";
import ArticleListSection from "@/components/homecomponents/Articlelistsection";
import ThreeColumnSection from "@/components/homecomponents/Threecolumnsection";
import CarouselSection from "@/components/homecomponents/Carouselsection";

import articlesData from "../public/data/articles.json";
import authorsData from "../public/data/authors.json";

const SITE_URL = "https://os-intel-bice.vercel.app";

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Parse DD/MM/YYYY → Date */
function parseDate(str) {
  const [d, m, y] = str.split("/");
  return new Date(Number(y), Number(m) - 1, Number(d));
}

/** Format DD/MM/YYYY → "Month DD, YYYY" */
function formatDate(str) {
  const date = parseDate(str);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** Look up author by category */
function getAuthor(category) {
  const entry = authorsData.categories.find(
    (c) => c.category.toLowerCase() === category.toLowerCase()
  );
  return entry ? entry.author : null;
}

/**
 * Build a flat, sorted (newest-first) list of all articles,
 * each enriched with its category and author.
 */
function buildSortedArticles() {
  const all = [];
  for (const [category, articles] of Object.entries(articlesData)) {
    if (!Array.isArray(articles)) continue;
    const author = getAuthor(category);
    for (const article of articles) {
      all.push({ ...article, category, author, _date: parseDate(article.date) });
    }
  }
  return all.sort((a, b) => b._date - a._date);
}

/**
 * Pick `n` articles from `pool` that have not been used yet.
 */
function pick(pool, n, usedIds, differentCategories = false) {
  const result = [];
  const seenCats = new Set();
  for (const article of pool) {
    if (result.length >= n) break;
    const key = `${article.category}::${article.id}`;
    if (usedIds.has(key)) continue;
    if (differentCategories && seenCats.has(article.category)) continue;
    result.push(article);
    usedIds.add(key);
    seenCats.add(article.category);
  }
  return result;
}

/** Build the href for an article */
function href(article) {
  return `/${article.category}/${article.slug}`;
}

// ── Homepage SEO metadata ─────────────────────────────────────────────────────
export async function generateMetadata() {
  // Get the 5 most recent articles for dynamic description
  const sorted = buildSortedArticles();
  const latest = sorted.slice(0, 3);
  const categories = [...new Set(latest.map((a) => a.category.replace(/-/g, " ")))].join(", ");

  return {
    title: "OS-Intel — Breaking World News, Conflict & Cybersecurity Today",
    description: `Stay ahead with OS-Intel: today's top stories in ${categories}, dark web investigations, geo-politics, and more. Independent reporting, updated daily.`,
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      title: "OS-Intel — Breaking World News, Conflict & Cybersecurity Today",
      description: `Stay ahead with OS-Intel: today's top stories in ${categories}, dark web investigations, geo-politics, and more.`,
      url: SITE_URL,
      siteName: "OS-Intel",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/images/os-intel-og-image.webp`,
          width: 1200,
          height: 630,
          alt: "OS-Intel — Independent News & Investigation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "OS-Intel — Breaking World News, Conflict & Cybersecurity Today",
      description: `Today's top stories in ${categories}, dark web investigations, geo-politics, and more.`,
      images: [`${SITE_URL}/images/os-intel-og-image.webp`],
    },
  };
}

// ── Data builder ──────────────────────────────────────────────────────────────

function buildPageData() {
  const sorted = buildSortedArticles();
  const used = new Set();

  const [heroFeaturedRaw] = pick(sorted, 1, used, false);
  const sidebarRaw = pick(sorted, 5, used, true);

  const heroFeatured = {
    img: heroFeaturedRaw.image,
    title: heroFeaturedRaw.title,
    category: heroFeaturedRaw.category.replace(/-/g, " ").toUpperCase(),
    href: href(heroFeaturedRaw),
    author: {
      img: heroFeaturedRaw.author?.profileImage || "",
      name: heroFeaturedRaw.author?.name || "Editorial",
    },
  };

  const sidebarArticles = sidebarRaw.map((a) => ({
    date: formatDate(a.date),
    title: a.title,
    href: href(a),
  }));

  function makeCol(articles) {
    const [feat, ...smalls] = articles;
    return {
      featured: {
        img: feat.image,
        category: feat.category.replace(/-/g, " ").toUpperCase(),
        title: feat.title,
        href: href(feat),
      },
      small: smalls.map((a) => ({
        img: a.image,
        date: formatDate(a.date).toUpperCase(),
        title: a.title,
        href: href(a),
      })),
    };
  }

  const col1Raw = pick(sorted, 3, used, true);
  const col2Raw = pick(sorted, 3, used, true);
  const col3Raw = pick(sorted, 3, used, true);
  const tabRaw = pick(sorted, 6, used, true);

  const col1 = makeCol(col1Raw);
  const col2 = makeCol(col2Raw);
  const col3 = makeCol(col3Raw);

  const tabData = {
    Latest: tabRaw.slice(0, 4).map((a) => ({
      img: a.image,
      date: formatDate(a.date).toUpperCase(),
      title: a.title,
      href: href(a),
    })),
    Popular: tabRaw.slice(4, 6).map((a) => ({
      img: a.image,
      date: formatDate(a.date).toUpperCase(),
      title: a.title,
      href: href(a),
    })),
  };

  const listRaw = pick(sorted, 3, used, true);
  const popularRaw = pick(sorted, 5, used, true);
  const [latestNewsRaw] = pick(sorted, 1, used, false);

  const listArticles = listRaw.map((a) => ({
    img: a.image,
    category: a.category.replace(/-/g, " ").toUpperCase(),
    date: formatDate(a.date).toUpperCase(),
    title: a.title,
    description: a.excerpt,
    href: href(a),
    author: {
      img: a.author?.profileImage || "",
      name: a.author?.name || "Editorial",
      href: a.author?.websiteLink || "#",
    },
    views: Math.floor(Math.random() * 600) + 100,
    likes: Math.floor(Math.random() * 25) + 1,
  }));

  const mostPopular = popularRaw.map((a) => ({
    title: a.title,
    href: href(a),
    shares: Math.floor(Math.random() * 40) + 2,
    img: a.image,
  }));

  const latestNews = {
    img: latestNewsRaw.image,
    category: latestNewsRaw.category.replace(/-/g, " ").toUpperCase(),
    date: formatDate(latestNewsRaw.date).toUpperCase(),
    title: latestNewsRaw.title,
    href: href(latestNewsRaw),
  };

  const [featuredNewsCardRaw] = pick(sorted, 1, used, false);
  const [videoCardRaw] = pick(sorted, 1, used, false);
  const moreRaw = pick(sorted, 6, used, true);
  const middleRaw = pick(sorted, 2, used, true);
  const rightTopRaw = pick(sorted, 2, used, true);
  const [rightVideoRaw] = pick(sorted, 1, used, false);

  const featuredNewsCard = {
    img: featuredNewsCardRaw.image,
    category: featuredNewsCardRaw.category.replace(/-/g, " ").toUpperCase(),
    date: formatDate(featuredNewsCardRaw.date).toUpperCase(),
    title: featuredNewsCardRaw.title,
    href: href(featuredNewsCardRaw),
  };

  const videoCard = {
    img: videoCardRaw.image,
    category: videoCardRaw.category,
    date: formatDate(videoCardRaw.date).toUpperCase(),
    title: videoCardRaw.title,
    href: href(videoCardRaw),
  };

  const moreFromNewsMag = moreRaw.map((a) => ({
    img: a.image,
    date: formatDate(a.date).toUpperCase(),
    title: a.title,
    href: href(a),
  }));

  const middleArticles = middleRaw.map((a) => ({
    img: a.image,
    category: a.category.replace(/-/g, " ").toUpperCase(),
    date: formatDate(a.date).toUpperCase(),
    title: a.title,
    description: a.excerpt,
    href: href(a),
    author: {
      img: a.author?.profileImage || "",
      name: a.author?.name || "Editorial",
      href: a.author?.websiteLink || "#",
    },
    views: Math.floor(Math.random() * 600) + 100,
    likes: Math.floor(Math.random() * 25) + 1,
  }));

  const rightTopArticles = rightTopRaw.map((a) => ({
    img: a.image,
    date: formatDate(a.date).toUpperCase(),
    title: a.title,
    href: href(a),
  }));

  const rightVideoCard = {
    img: rightVideoRaw.image,
    category: rightVideoRaw.category,
    date: formatDate(rightVideoRaw.date).toUpperCase(),
    title: rightVideoRaw.title,
    href: rightVideoRaw ? href(rightVideoRaw) : "#",
  };

  const carouselRaw = pick(sorted, 6, used, true);
  const carouselItems = carouselRaw.map((a) => ({
    img: a.image,
    category: a.category.replace(/-/g, " ").toUpperCase(),
    date: formatDate(a.date).toUpperCase(),
    title: a.title,
    href: href(a),
  }));

  // ── JSON-LD: ItemList of top articles for Google News ──────────────────────
  const topArticles = sorted.slice(0, 10);
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Latest News from OS-Intel",
    url: SITE_URL,
    itemListElement: topArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/${article.category}/${article.slug}`,
      name: article.title,
    })),
  };

  return {
    heroFeatured,
    sidebarArticles,
    col1,
    col2,
    col3,
    tabData,
    listArticles,
    mostPopular,
    latestNews,
    featuredNewsCard,
    videoCard,
    moreFromNewsMag,
    middleArticles,
    rightTopArticles,
    rightVideoCard,
    carouselItems,
    itemListJsonLd,
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const {
    heroFeatured,
    sidebarArticles,
    col1,
    col2,
    col3,
    tabData,
    listArticles,
    mostPopular,
    latestNews,
    featuredNewsCard,
    videoCard,
    moreFromNewsMag,
    middleArticles,
    rightTopArticles,
    rightVideoCard,
    carouselItems,
    itemListJsonLd,
  } = buildPageData();

  // ── JSON-LD: WebSite + Organization (homepage only) ──────────────────────
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OS-Intel",
    url: SITE_URL,
    description:
      "Sharp, independent reporting on world affairs, war & conflict, geo-politics, cybersecurity, dark web investigations, and breaking global news.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "OS-Intel",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/os-intel-og-image.webp`,
      width: 1200,
      height: 630,
    },
    sameAs: [
      // "https://twitter.com/osintel",
    ],
  };

  return (
    <>
      {/* ── JSON-LD: WebSite (enables Google Sitelinks search box) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* ── JSON-LD: NewsMediaOrganization (establishes publisher identity) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* ── JSON-LD: ItemList (helps Google index top stories) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* 1. Hero Section — contains the page H1 (featured article title) */}
        <HeroSection
          featured={heroFeatured}
          sidebarArticles={sidebarArticles}
        />

        {/* 2. Grid Section */}
        <GridSection
          col1={col1}
          col2={col2}
          col3={col3}
          tabData={tabData}
        />

        {/* 3. Article List Section */}
        <ArticleListSection
          listArticles={listArticles}
          mostPopular={mostPopular}
          latestNews={latestNews}
        />

        {/* 4. Three Column Section */}
        <ThreeColumnSection
          featuredNewsCard={featuredNewsCard}
          videoCard={videoCard}
          moreFromNewsMag={moreFromNewsMag}
          middleArticles={middleArticles}
          rightTopArticles={rightTopArticles}
          rightVideoCard={rightVideoCard}
        />

        {/* 5. Carousel Section */}
        <CarouselSection carouselItems={carouselItems} />
      </div>
    </>
  );
}