

// import ArticleListSection from "@/components/homecomponents/Articlelistsection";
// import CarouselSection from "@/components/homecomponents/Carouselsection";
// import GridSection from "@/components/homecomponents/Gridsection";
// import HeroSection from "@/components/homecomponents/Herosection";
// import ThreeColumnSection from "@/components/homecomponents/Threecolumnsection";
// // ── Data ──────────────────────────────────────────────────────────────────────

// const heroFeatured = {
//   img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80",
//   title: "FBI Informant Opens up About Russia uranium Controversy",
//   category: "POLITICS, IMAGE",
//   author: {
//     img: "https://i.pravatar.cc/56?img=12",
//     name: "cmsmasters",
//   },
// };

// const sidebarArticles = [
//   { date: "May 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
//   { date: "May 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
//   { date: "May 22, 2018", title: "The Supreme Court considers the Question of the State" },
//   { date: "March 14, 2018", title: "SEC Debates Whether Cryptocurrencies Are Securities" },
//   { date: "March 14, 2018", title: "Experiment Shows the Dangers of Hacking Robots" },
//   { date: "March 14, 2018", title: "Breakfast with 'Friends'" },
// ];

// const col1 = {
//   featured: {
//     img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
//     category: "N.Y.",
//     title: "Goodlatte on FBI's slow-walking of Congressional",
//   },
//   small: [
//     { img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=200&q=80", date: "MARCH 12, 2018", title: "The Parade of Aircraft will take Place in New York" },
//     { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80", date: "JANUARY 20, 2018", title: "Justice Dept. Restricts a Common Tactic of Judges" },
//   ],
// };

// const col2 = {
//   featured: {
//     img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
//     category: "N.Y.",
//     title: "Tucker: What has Happened to Democratic Party under Trump?",
//   },
//   small: [
//     { img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=200&q=80", date: "MARCH 12, 2018", title: "The Parade of Aircraft will take Place in New York" },
//     { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80", date: "JANUARY 20, 2018", title: "Justice Dept. Restricts a Common Tactic of Judges" },
//   ],
// };

// const col3 = {
//   featured: {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s",
//     category: "POLITICS",
//     title: "The Privacy of the Census is Absolute",
//   },
//   small: [
//     { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=80", date: "MAY 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
//     { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80", date: "MAY 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
//   ],
// };

// const tabData = {
//   Latest: [
//     { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s", date: "MARCH 12, 2018", title: "The Parade of Aircraft will take Place in New York" },
//     { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80", date: "JANUARY 20, 2018", title: "Justice Dept. Restricts a Common Tactic of Judges" },
//     { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80", date: "MAY 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
//     { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=80", date: "MAY 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
//   ],
//   Popular: [
//     { img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=200&q=80", date: "MARCH 12, 2018", title: "The Parade of Aircraft will take Place in New York" },
//     { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80", date: "JANUARY 20, 2018", title: "Justice Dept. Restricts a Common Tactic of Judges" },
//     { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80", date: "MAY 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
//     { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=80", date: "MAY 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
//   ],
//   Comments: [
//     { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80", date: "MAY 22, 2018", title: "The Privacy of the Census is Absolute" },
//     { img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=200&q=80", date: "MARCH 12, 2018", title: "Aircraft Parade draws Massive Crowds in New York" },
//     { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=80", date: "MAY 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
//     { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80", date: "JANUARY 20, 2018", title: "Justice Dept. Restricts a Common Tactic of Judges" },
//   ],
// };

// const listArticles = [
//   {
//     img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=80",
//     category: "ENTERTAINMENT",
//     date: "MARCH 13, 2018",
//     title: "Trump about the Risks of Meeting with North Korea",
//     description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital. Quickly coordinate e-business application.",
//     author: { img: "https://i.pravatar.cc/56?img=12", name: "cmsmasters" },
//     views: 625,
//     likes: 12,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&q=80",
//     category: "ENTERTAINMENT",
//     date: "MARCH 12, 2018",
//     title: "The Parade of Aircraft will take Place in New York",
//     description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital. Quickly coordinate e-business application.",
//     author: { img: "https://i.pravatar.cc/56?img=15", name: "cmsmasters" },
//     views: 491,
//     likes: 18,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&q=80",
//     category: "ENTERTAINMENT",
//     date: "MARCH 12, 2018",
//     title: "Life on Wall Street. What Is It",
//     description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital. Quickly coordinate e-business application.",
//     author: { img: "https://i.pravatar.cc/56?img=8", name: "cmsmasters" },
//     views: 435,
//     likes: 11,
//   },
// ];

// const mostPopular = [
//   { title: "There was a New Youth Center in the Museum of American Indians", shares: 41 },
//   { title: "Trump about the Risks of Meeting with North Korea", shares: 7 },
//   { title: "FBI Informant Opens up About Russia uranium Controversy", shares: 5 },
//   { title: "Justice Dept. Restricts a Common Tactic of Judges", shares: 4 },
//   { title: "The Parade of Aircraft will take Place in New York", shares: 2 },
// ];

// const latestNews = {
//   img: "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?w=400&q=80",
//   category: "CULTURE",
//   date: "MARCH 13, 2018",
//   title: "There was a New Youth Center in the Museum of American Indians",
// };

// const featuredNewsCard = {
//   img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80",
//   category: "N.Y.",
//   date: "MARCH 13, 2018",
//   title: "Goodlatte on FBI's slow-walking of Congressional",
// };

// const videoCard = {
//   img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
//   category: "VIDEO",
//   date: "MARCH 12, 2018",
//   title: "This is the Best Music for Any Age (and Attitude)",
// };

// const moreFromNewsMag = [
//   { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=100&q=80", date: "MAY 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
//   { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=100&q=80", date: "MAY 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
//   { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=100&q=80", date: "MAY 22, 2018", title: "The Supreme Court considers the Question of the State" },
//   { img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&q=80", date: "MARCH 14, 2018", title: "SEC Debates Whether Cryptocurrencies Are Securities" },
//   { img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&q=80", date: "MARCH 14, 2018", title: "Experiment Shows the Dangers of Hacking Robots" },
//   { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&q=80", date: "MARCH 14, 2018", title: "Breakfast with 'Friends'" },
// ];

// const middleArticles = [
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s",
//     category: "POLITICS",
//     date: "MARCH 13, 2018",
//     title: "Director of the Bureau of Prisons Steps Down made a Statement",
//     description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital. Quickly coordinate e-business applications through revolutionary catalysts for change.",
//     author: { img: "https://i.pravatar.cc/56?img=12", name: "cmsmasters" },
//     views: 374,
//     likes: 7,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
//     category: "N.Y.",
//     date: "MAY 22, 2018",
//     title: "Who is James Mattis? 5 Things to Know about the Secretary",
//     description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital. Quickly coordinate e-business applications through revolutionary catalysts for change.",
//     author: { img: "https://i.pravatar.cc/56?img=15", name: "cmsmasters" },
//     views: 591,
//     likes: 15,
//   },
// ];

// const rightTopArticles = [
//   {
//     img: "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?w=400&q=80",
//     date: "MARCH 13, 2018",
//     title: "There was a New Youth Center in the Museum of American Indians",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&q=80",
//     date: "MARCH 12, 2018",
//     title: "Cambridge Analytica Shuts Down in Wake of Facebook Data Scandal",
//   },
// ];

// const rightVideoCard = {
//   img: "https://images.unsplash.com/photo-1559548331-f9cb98001426?w=400&q=80",
//   category: "VIDEO",
//   date: "MARCH 12, 2018",
//   title: "California County Rescinds Homeless",
// };

// const carouselItems = [
//   { img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80", category: "N.Y.", date: "MARCH 15, 2018", title: "Goodlatte on FBI's slow-walking of Congressional" },
//   { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s", category: "POLITICS", date: "MARCH 15, 2018", title: "The Privacy of the Census is Absolute" },
//   { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80", category: "N.Y.", date: "MARCH 15, 2018", title: "Senator Lindsey Graham talks Diplomacy and North Korea" },
//   { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80", category: "POLITICS", date: "MARCH 14, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
//   { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80", category: "BUSINESS", date: "MARCH 14, 2018", title: "Justice Dept. Restricts a Common Tactic of Judges" },
//   { img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80", category: "WORLD", date: "MARCH 12, 2018", title: "The Parade of Aircraft will take Place in New York" },
// ];

// // ── Page ──────────────────────────────────────────────────────────────────────

// export default function Home() {
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

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Parse DD/MM/YYYY → Date */
function parseDate(str) {
  const [d, m, y] = str.split("/");
  return new Date(Number(y), Number(m) - 1, Number(d));
}

/** Format DD/MM/YYYY → "Month DD, YYYY" e.g. "February 24, 2026" */
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
 * If `differentCategories` is true, each picked article must be from a new category.
 * Mutates `usedIds` set in place.
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

// ── Data builder ──────────────────────────────────────────────────────────────

function buildPageData() {
  const sorted = buildSortedArticles();
  const used = new Set();

  /* ── HeroSection ─────────────────────────────────────────────────────────
     • heroFeatured    : latest 1 article
     • sidebarArticles : next 6 from different categories
  */
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

  /* ── GridSection ─────────────────────────────────────────────────────────
     • col1 : next 3 from different categories (featured + 2 small)
     • col2 : next 3 from different categories
     • col3 : next 3 from different categories
     • tabData: next 6 → 4 Latest, 2 Popular
  */
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

  /* ── ArticleListSection ──────────────────────────────────────────────────
     • listArticles : next 3 from different categories
     • mostPopular  : next 5 from different categories
     • latestNews   : next 1
  */
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
    img: a.image
  }));

  const latestNews = {
    img: latestNewsRaw.image,
    category: latestNewsRaw.category.replace(/-/g, " ").toUpperCase(),
    date: formatDate(latestNewsRaw.date).toUpperCase(),
    title: latestNewsRaw.title,
    href: href(latestNewsRaw),
  };

  /* ── ThreeColumnSection ──────────────────────────────────────────────────
     • featuredNewsCard : next 1
     • videoCard        : next 1
     • moreFromNewsMag  : next 6 from different categories
     • middleArticles   : next 2 from different categories
     • rightTopArticles : next 2 from different categories
     • rightVideoCard   : next 1
  */
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
    href: href(rightVideoRaw),
  };

  /* ── CarouselSection ─────────────────────────────────────────────────────
     • carouselItems: next 6 from different categories
  */
  const carouselRaw = pick(sorted, 6, used, true);

  const carouselItems = carouselRaw.map((a) => ({
    img: a.image,
    category: a.category.replace(/-/g, " ").toUpperCase(),
    date: formatDate(a.date).toUpperCase(),
    title: a.title,
    href: href(a),
  }));

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
  } = buildPageData();

  return (
    <div className="min-h-screen bg-white">

      {/* 1. Hero Section */}
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
  );
}