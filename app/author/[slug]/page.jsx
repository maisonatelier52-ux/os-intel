"use client";

import SidebarComponent from "@/components/Sidebarcomponent";
import Image from "next/image";
import Link from "next/link";


// ── Author info ──
const author = {
  name: "cmsmasters",
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s",
  bio: "Cmsmasters Studio is a union of 27 people who are completely into innovative website design and progressive website development. Yes, we believe we can make the world be more beautiful. And as we specialize on WordPress themes and HTML templates we try to do our job the best way it can be done.",
  social: {
    twitter: "#",
    facebook: "#",
    instagram: "#",
  },
  stats: {
    posts: 142,
    followers: "12.3K",
    following: 84,
  },
};

// ── Author's articles ──
const articles = [
  {
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80",
    date: "May 22, 2018",
    category: "Politics",
    title: "FBI Informant Opens up About Russia uranium Controversy",
    description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration.",
  },
  {
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&q=80",
    date: "May 22, 2018",
    category: "Politics",
    title: "Who is James Mattis? 5 Things to Know about the Secretary",
    description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital. Quickly coordinate e-business applications.",
  },
  {
    img: "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?w=400&q=80",
    date: "March 13, 2018",
    category: "Culture",
    title: "There was a New Youth Center in the Museum of American Indians",
    description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital. Quickly coordinate e-business applications.",
  },
  {
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&q=80",
    date: "March 12, 2018",
    category: "Culture",
    title: "Cambridge Analytica Shuts Down in Wake of Facebook Data Scandal",
    description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital. Quickly coordinate e-business applications.",
  },
  {
    img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&q=80",
    date: "March 12, 2018",
    category: "Travel",
    title: "The Parade of Aircraft will take Place in New York",
    description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital. Quickly coordinate e-business applications.",
  },
];

// ── Sidebar data ──
const latestNews = [
  { date: "May 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
  { date: "May 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
  { date: "May 22, 2018", title: "The Supreme Court considers the Question of the State" },
  { date: "March 14, 2018", title: "SEC Debates Whether Cryptocurrencies Are Securities" },
  { date: "March 14, 2018", title: "Experiment Shows the Dangers of Hacking Robots" },
  { date: "March 14, 2018", title: "Breakfast with 'Friends'" },
];

const tabData = {
  Latest: [
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s", date: "MARCH 12, 2018", title: "The Parade of Aircraft will take Place in New York" },
    { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80", date: "JANUARY 20, 2018", title: "Justice Dept. Restricts a Common Tactic of Judges" },
    { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80", date: "MAY 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
    { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=80", date: "MAY 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
  ],
  Popular: [
    { img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=200&q=80", date: "MARCH 12, 2018", title: "The Parade of Aircraft will take Place in New York" },
    { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80", date: "JANUARY 20, 2018", title: "Justice Dept. Restricts a Common Tactic of Judges" },
    { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80", date: "MAY 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
    { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=80", date: "MAY 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
  ],
  Comments: [
    { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80", date: "MAY 22, 2018", title: "The Privacy of the Census is Absolute" },
    { img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=200&q=80", date: "MARCH 12, 2018", title: "Aircraft Parade draws Massive Crowds in New York" },
    { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=80", date: "MAY 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
    { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80", date: "JANUARY 20, 2018", title: "Justice Dept. Restricts a Common Tactic of Judges" },
  ],
};

const mostPopular = [
  { title: "There was a New Youth Center in the Museum of American Indians", shares: 41 },
  { title: "Trump about the Risks of Meeting with North Korea", shares: 7 },
  { title: "FBI Informant Opens up About Russia uranium Controversy", shares: 5 },
  { title: "Justice Dept. Restricts a Common Tactic of Judges", shares: 4 },
  { title: "The Parade of Aircraft will take Place in New York", shares: 2 },
];

export default function AuthorPage() {
  return (
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

        {/* ── Author heading ── */}
        <h1 className="text-3xl font-black font-serif text-gray-900 mb-8 pb-4">
          Author: {author.name}
        </h1>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* ══ LEFT 75% ══ */}
          <div className="w-full md:w-[75%] flex flex-col gap-0">
            {/* ── Author intro section (kept + enhanced) ── */}
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-5 mb-10 pb-10 border-b border-gray-200">
              <div className="w-22 h-22 rounded-full overflow-hidden shrink-0 mt-0 md:mt-7 bg-gray-900 relative">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-black font-serif text-gray-900 mb-2">
                  {author.name}
                </h3>

                <p className="text-gray-700 text-sm font-serif leading-relaxed mb-4">
                  {author.bio}
                </p>

                {/* Social icons */}
                <div className="flex items-center gap-3 mb-4">
                  <Link
                    href={author.social.twitter}
                    title="Twitter"
                    className="w-8 h-8 flex items-center justify-center bg-[#1da1f2] hover:bg-[#1a90d9] transition-colors rounded-full"
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </Link>

                  <Link
                    href={author.social.facebook}
                    title="Facebook"
                    className="w-8 h-8 flex items-center justify-center bg-[#3b5998] hover:bg-[#344e86] transition-colors rounded-full"
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>

                  <Link
                    href={author.social.instagram}
                    title="Instagram"
                    className="w-8 h-8 flex items-center justify-center bg-[#e1306c] hover:bg-[#c82257] transition-colors rounded-full"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </Link>
                </div>

                {/* Total posts */}
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-gray-900 text-xl font-black font-serif leading-none">
                      {author.stats.posts}
                    </p>
                    <p className="text-gray-500 text-xs font-sans mt-1 uppercase tracking-wide">
                      Articles
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Articles List ── */}
            {articles.map((article, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row gap-0 py-6">
                  {/* ... rest of article card remains unchanged ... */}
                  <div className="relative">
                    <div className="w-full md:w-[280px] shrink-0 h-[220px] overflow-hidden group">
                      <Image
                        src={article.img}
                        alt={article.title}
                        fill
                        className="object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-6 -right-2">
                      <span className="bg-gray-800 text-white text-[11px] font-bold px-3 py-2 font-sans tracking-wide block">
                        Post
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 md:pl-5 mt-7 pt-4 md:pt-0 flex flex-col justify-start">
                    <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-gray-400 text-xs md:text-sm font-sans mb-3">
                      <span>{article.date}</span>
                      <span className="text-gray-400 text-base leading-none">•</span>
                      <span>
                        by{" "}
                        <Link href="#" title={author.name} className="hover:text-red-600 transition-colors">
                          {author.name}
                        </Link>
                      </span>
                      <span className="text-gray-400 text-base leading-none">•</span>
                      <span>In</span>
                      <Link href="#" title={article.category}>
                        <span className="bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 font-sans">
                          {article.category}
                        </span>
                      </Link>
                    </div>

                    <Link href="#" title={article.title}>
                      <h2 className="text-gray-900 text-2xl md:text-3xl font-black font-serif leading-snug hover:text-red-600 transition-colors mb-2">
                        {article.title}
                      </h2>
                    </Link>

                    <p className="text-gray-500 text-sm font-sans leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                </div>

                {index < articles.length - 1 && <div className="border-t border-gray-200" />}
              </div>
            ))}
          </div>

          {/* ══ RIGHT 25% — Sidebar ══ */}
          <div className="w-full md:w-[25%]">
            <SidebarComponent latestNews={latestNews} tabData={tabData} mostPopular={mostPopular} />
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import SidebarComponent from "@/components/Sidebarcomponent";
// import Image from "next/image";
// import Link from "next/link";
// import authorsData from "../../../public/data/authors.json";
// import articleData from "../../../public/data/articles.json";

// // ── Helpers ──
// const parseDate = (dateStr) => {
//   const [day, month, year] = dateStr.split("/");
//   return new Date(year, month - 1, day);
// };

// const formatDate = (dateStr) => {
//   return parseDate(dateStr).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// };

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

// export default function AuthorPage({ params }) {
//   // Match author by category slug — e.g. /author/politics
//   // If you route by author name instead, adjust the match below
//   const categoryKey = params?.category || Object.keys(articleData)[0];

//   const authorEntry = authorsData.categories.find(
//     (item) => item.category.toLowerCase() === categoryKey.toLowerCase()
//   );
//   const author = authorEntry?.author;

//   // All articles for this author's category, sorted newest-first
//   const categoryArticles = [...(articleData[categoryKey] || [])].sort(
//     (a, b) => parseDate(b.date) - parseDate(a.date)
//   );

//   // Sidebar pool
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

//   const formattedCategory =
//     categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);

//   if (!author) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <p className="text-gray-400">Author not found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="w-full px-4 md:px-6 py-8">

//         {/* ── Breadcrumb ── */}
//         <div className="flex items-center gap-1.5 text-xs font-sans text-gray-400 mb-3">
//           <Link href="/" title="Home" className="hover:text-red-600 transition-colors">
//             Home
//           </Link>
//           <span>›</span>
//           <span className="text-gray-600">{author.name}</span>
//         </div>

//         {/* ── Author heading ── */}
//         <h1 className="text-3xl font-black font-serif text-gray-900 mb-8 pb-4">
//           Author: {author.name}
//         </h1>

//         {/* ── Two-column layout ── */}
//         <div className="flex flex-col md:flex-row md:items-start gap-8">

//           {/* ══ LEFT 75% ══ */}
//           <div className="w-full md:w-[75%] flex flex-col gap-0">

//             {/* ── Author Profile Card ── */}
//             <div className="flex flex-col sm:flex-row items-start gap-6 mb-10 pb-10 border-b border-gray-200">

//               {/* Avatar — from authors.json profileImage */}
//               <div className="shrink-0">
//                 <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-gray-100 relative">
//                   <Image
//                     src={author.profileImage}
//                     alt={author.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Info */}
//               <div className="flex-1">

//                 {/* Name + social icons */}
//                 <div className="flex items-center gap-3 mb-2">
//                   <h2 className="text-xl font-black font-serif text-gray-900">
//                     {author.name}
//                   </h2>
//                   <div className="flex items-center gap-2 ml-1">
//                     {author.social?.twitter && (
//                       <Link
//                         href={author.social.twitter}
//                         title="Twitter"
//                         className="w-7 h-7 flex items-center justify-center bg-[#1da1f2] hover:bg-[#1a90d9] transition-colors rounded-sm"
//                       >
//                         <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
//                           <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
//                         </svg>
//                       </Link>
//                     )}
//                     {author.social?.reddit && (
//                       <Link
//                         href={author.social.reddit}
//                         title="Facebook"
//                         className="w-7 h-7 flex items-center justify-center bg-[#3b5998] hover:bg-[#344e86] transition-colors rounded-sm"
//                       >
//                         <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
//                           <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//                         </svg>
//                       </Link>
//                     )}
//                     {author.social?.quora && (
//                       <Link
//                         href={author.social.quora}
//                         title="Instagram"
//                         className="w-7 h-7 flex items-center justify-center bg-[#e1306c] hover:bg-[#c82257] transition-colors rounded-sm"
//                       >
//                         <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
//                           <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//                           <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                           <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//                         </svg>
//                       </Link>
//                     )}
//                   </div>
//                 </div>

//                 {/* Bio */}
//                 <p className="text-gray-500 text-sm font-sans leading-relaxed mb-4">
//                   {author.bio}
//                 </p>

//                 {/* Stats — only Posts count */}
//                 <div className="flex items-center gap-6">
//                   <div className="text-center">
//                     <p className="text-gray-900 text-lg font-black font-serif leading-none">
//                       {categoryArticles.length}
//                     </p>
//                     <p className="text-gray-400 text-xs font-sans mt-0.5 uppercase tracking-wide">
//                       Posts
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ── Articles List ── */}
//             {categoryArticles.map((article, index) => (
//               <div key={article.slug || index}>
//                 <div className="flex flex-col md:flex-row gap-0 py-6">

//                   <div className="relative">
//                     <div className="w-full md:w-[280px] shrink-0 h-[220px] overflow-hidden group">
//                       <Image
//                         src={article.image}
//                         alt={article.imageAlt || article.title}
//                         fill
//                         sizes="(max-width: 768px) 100vw, 280px"
//                         className="object-cover grayscale transition-transform duration-500 ease-out group-hover:scale-105"
//                       />
//                     </div>
//                     <div className="absolute top-6 -right-2">
//                       <span className="bg-gray-800 text-white text-[11px] font-bold px-3 py-2 font-sans tracking-wide block">
//                         Post
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1 md:pl-5 mt-7 pt-4 md:pt-0 flex flex-col justify-start">
//                     <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-gray-400 text-xs md:text-sm font-sans mb-3">
//                       <span>{formatDate(article.date)}</span>
//                       <span className="text-gray-400 text-base leading-none">•</span>
//                       <span>
//                         by{" "}
//                         <Link
//                           href={author.websiteLink || "#"}
//                           title={author.name}
//                           className="hover:text-red-600 transition-colors"
//                         >
//                           {author.name}
//                         </Link>
//                       </span>
//                       <span className="text-gray-400 text-base leading-none">•</span>
//                       <span>In</span>
//                       <Link href={`/${categoryKey}`} title={formattedCategory}>
//                         <span className="bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 font-sans">
//                           {formattedCategory}
//                         </span>
//                       </Link>
//                     </div>

//                     <Link href={`/${categoryKey}/${article.slug}`} title={article.title}>
//                       <h2 className="text-gray-900 text-2xl md:text-3xl font-black font-serif leading-snug hover:text-red-600 transition-colors mb-2">
//                         {article.title}
//                       </h2>
//                     </Link>

//                     <p className="text-gray-500 text-sm font-sans leading-relaxed line-clamp-3">
//                       {article.excerpt}
//                     </p>
//                   </div>
//                 </div>

//                 {index < categoryArticles.length - 1 && (
//                   <div className="border-t border-gray-200" />
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* ══ RIGHT 25% — Sidebar ══ */}
//           <div className="w-full md:w-[25%]">
//             <SidebarComponent
//               latestNews={latestNews}
//               tabData={tabData}
//               mostPopular={mostPopular}
//             />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }