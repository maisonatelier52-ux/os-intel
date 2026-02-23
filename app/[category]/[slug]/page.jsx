// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import SidebarComponent from "@/components/Sidebarcomponent";
// import { FaClock, FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaTumblr, FaShareAlt } from "react-icons/fa";
// import { FaInstagram, FaYoutube } from 'react-icons/fa';
// import articleData from "../../../public/data/articles.json"
// import authorData from "../../../public/data/authors.json"

// // ── Static data ──
// const article = {
//   category: "sports",
//   title: "Paul Taylor Chooses a Successor",
//   author: {
//     name: "cmsmasters",
//     img: "https://i.pravatar.cc/56?img=12",
//     bio: "Cmsmasters Studio is a union of 27 people who are completely into innovative website design and progressive website development. Yes, we believe we can make the world be more beautiful. And as we specialize on WordPress themes and HTML templates we try to do our job the best way it can be done.",
//   },
//   date: "MARCH 13, 2018",
//   img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
//   shares: 1,
//   views: 51,
//   content: [
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt cursus gravida ut, sodales ut magna. Sed sodales libero sapien, et rutrum mi placerat eget. Nulla vestibulum lacus vel eros eleifend molestie.",
//     "Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec vehicula nibh risus ac leo. Mauris volutpat aliquam tellus nec rhoncus. Aliquam et nibh pulvinar, sodales nibh et, pretium urna. Vivamus quam augue, maximus in consequat imperdiet, iaculis non nibh. Aliquam erat volutpat. Curabitur venenatis massa sed lacus lacus tristique, non auctor nisi sodales. Sed ultrices lacus ut libero faucibus fringilla. Ut nisi tellus, posuere vel mattis nec, convallis a metus. Nullam elementum molestie felis nec lobortis. Cras at justo eu elit semper tempor sed quis orci. In risus magna, malesuada vel elementum ut, finibus et nunc.",
//     "Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer nun lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt cursus gravida ut, sodales ut magna. Sed sodales libero sapien, et rutrum mi placerat eget. Nulla vestibulum lacus vel eros eleifend molestie.",
//     "Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec vehicula nibh risus ac leo. Mauris volutpat aliquam tellus nec rhoncus. Aliquam et nibh pulvinar, sodales nibh et, pretium urna. Vivamus quam augue, maximus in consequat imperdiet, iaculis non nibh. Aliquam erat volutpat. Curabitur venenatis massa sed lacus lacus tristique, non auctor nisi sodales. Sed ultrices lacus ut libero faucibus fringilla. Ut nisi tellus, posuere vel mattis nec, convallis a metus. Nullam elementum molestie felis nec lobortis. Cras at justo eu elit semper tempor sed quis orci. In risus magna, malesuada vel elementum ut, finibus et nunc.",
//     "Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer nun lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.",
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt cursus gravida ut, sodales ut magna. Sed sodales libero sapien, et rutrum mi placerat eget. Nulla vestibulum lacus vel eros eleifend molestie.",
//     "Sed rutrum, libero non pretium tristique, arcu mi sollicitudin ex, quis venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor facilisis, enim dolor pellentesque lectus, nec vehicula nibh risus ac leo. Mauris volutpat aliquam tellus nec rhoncus. Aliquam et nibh pulvinar, sodales nibh et, pretium urna. Vivamus quam augue, maximus in consequat imperdiet, iaculis non nibh. Aliquam erat volutpat. Curabitur venenatis massa sed lacus lacus tristique, non auctor nisi sodales. Sed ultrices lacus ut libero faucibus fringilla. Ut nisi tellus, posuere vel mattis nec, convallis a metus. Nullam elementum molestie felis nec lobortis. Cras at justo eu elit semper tempor sed quis orci. In risus magna, malesuada vel elementum ut, finibus et nunc.",
//     "Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus eleifend. Integer nun lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.",
//   ],
// };

// const prevPost = {
//   title: "There was a New Youth Center in the Museum of American Indians",
// };
// const nextPost = {
//   title: "11 Musicals to Go to in N.Y.C. This Weekend",
// };

// const morePosts = [
//   {
//     img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&q=80",
//     category: "ENTERTAINMENT",
//     date: "MARCH 12, 2018",
//     title: "The Parade of Aircraft will take Place in New York",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
//     category: "WORLD",
//     date: "JANUARY 20, 2018",
//     title: "Justice Dept. Restricts a Common Tactic of Judges",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&q=80",
//     category: "N.Y.",
//     date: "MAY 22, 2018",
//     title: "Who is James Mattis? 5 Things to Know about the Secretary",
//   },
// ];

// // ── Sidebar props ──
// const latestNews = [
//   { date: "May 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
//   { date: "May 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
//   { date: "May 22, 2018", title: "The Supreme Court considers the Question of the State" },
//   { date: "March 14, 2018", title: "SEC Debates Whether Cryptocurrencies Are Securities" },
//   { date: "March 14, 2018", title: "Experiment Shows the Dangers of Hacking Robots" },
//   { date: "March 14, 2018", title: "Breakfast with 'Friends'" },
// ];

// const tabData = {
//   Latest: [
//     { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=80", date: "MAY 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
//     { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80", date: "MAY 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
//     { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80", date: "MAY 22, 2018", title: "The Supreme Court considers the Question of the State" },
//   ],
//   Popular: [
//     { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=80", date: "MAY 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
//     { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80", date: "MAY 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
//     { img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=200&q=80", date: "MARCH 12, 2018", title: "The Parade of Aircraft will take Place in New York" },
//   ],
//   Comments: [
//     { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80", date: "MAY 22, 2018", title: "The Privacy of the Census is Absolute" },
//     { img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=200&q=80", date: "MARCH 12, 2018", title: "Aircraft Parade draws Massive Crowds in New York" },
//     { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=80", date: "MAY 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
//   ],
// };

// const mostPopular = [
//   { title: "There was a New Youth Center in the Museum of American Indians", shares: 41 },
//   { title: "Trump about the Risks of Meeting with North Korea", shares: 7 },
//   { title: "FBI Informant Opens up About Russia uranium Controversy", shares: 5 },
//   { title: "Justice Dept. Restricts a Common Tactic of Judges", shares: 4 },
//   { title: "The Parade of Aircraft will take Place in New York", shares: 2 },
// ];

// // ── Social share links config ──
// const socialLinks = [
//   { icon: FaFacebookF,   bg: "bg-[#3b5998]", hover: "hover:bg-[#344e86]", label: "Share on Facebook" },
//   { icon: FaTwitter,     bg: "bg-[#1da1f2]", hover: "hover:bg-[#1a91da]", label: "Share on Twitter" },
//   { icon: FaGooglePlusG, bg: "bg-[#dd4b39]", hover: "hover:bg-[#c43d2e]", label: "Share on Google+" },
//   { icon: FaPinterestP,  bg: "bg-[#bd081c]", hover: "hover:bg-[#a30719]", label: "Share on Pinterest" },
//   { icon: FaTumblr,      bg: "bg-[#35465c]", hover: "hover:bg-[#2a3849]", label: "Share on Tumblr" },
// ];

// export default function ArticleDetailPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="w-full px-4 md:px-6 py-8">

//          {/* ── Breadcrumb ── */}
//         <div className="flex items-center gap-1.5 text-xs font-sans text-gray-400 mb-3">
//           <Link href="/" title="Home" className="hover:text-red-600 transition-colors">Home</Link>
//           <span>›</span>
//           <Link href={`/${article.category}`} title="category page" className="hover:text-red-600 transition-colors"><span>category</span></Link>
//            <span>›</span>
//           <span className="text-gray-600">{article.title}</span>
//         </div>

//         {/* ── Outer two-column wrapper ──
//             items-start is REQUIRED so sticky works on the right sidebar.
//             Without it, flex stretches both columns to equal height and
//             sticky has nothing to scroll against. */}
//         <div className="flex flex-col md:flex-row md:items-start gap-10">

//           {/* ══════════════════════════════════
//               LEFT COLUMN — 75%
//           ══════════════════════════════════ */}
//           <div className="w-full md:w-[75%]">

//             {/* Category badge */}
//             <div className="mb-3">
//               <span className="bg-red-600 text-white text-[12px] font-bold tracking-widest px-2 py-1 font-serif uppercase">
//                 {article.category}
//               </span>
//             </div>

//             {/* Title */}
//             <h1 className="text-4xl font-black font-serif text-gray-900 leading-tight mb-4">
//               {article.title}
//             </h1>

//             {/* Meta row */}
//             <div className="flex items-center flex-wrap gap-3 text-gray-400 text-xs font-sans mb-5">
//               <div className="flex items-center gap-2">
//                 <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 relative">
//                   <Image
//                     src={article.author.img}
//                     alt={article.author.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <span>
//                   by{" "}
//                   <Link href="#" title={article.author.name} className="text-gray-700 font-semibold hover:text-red-600 transition-colors">
//                     {article.author.name}
//                   </Link>
//                 </span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <FaClock size={10} />
//                 <span>{article.date}</span>
//               </div>
//             </div>

//             {/* Featured image */}
//             <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden mb-6">
//               <Image
//                 src={article.img}
//                 alt={article.title}
//                 fill
//                 className="object-cover grayscale"
//               />
//             </div>

//             {/* ── Content + Social share wrapper ──
//                 MOBILE:  flex-col  → social icons row on top, content below
//                 DESKTOP: flex-row  → social icons column left (sticky), content right  */}
//             <div className="flex flex-col md:flex-row gap-6 mb-8">

//               {/* ── SOCIAL SHARE COLUMN ──
//                   Mobile:  horizontal row of icons across the top
//                   Desktop: narrow sticky column on the left, sticks while article
//                            content scrolls, releases when content ends            */}
//               <div className="md:w-[56px] md:shrink-0 md:self-start md:sticky md:top-6">

//                 {/* Share label — desktop only */}
//                 <div className="hidden md:flex items-center gap-1.5 text-gray-400 text-[10px] font-sans tracking-widest uppercase mb-3">
//                   <FaShareAlt size={9} />
//                   <span>Share</span>
//                 </div>

//                 {/* Icons — row on mobile, column on desktop */}
//                 <div className="flex flex-row md:flex-col gap-2">
//                   {socialLinks.map(({ icon: Icon, bg, hover, label }) => (
//                     <Link
//                       key={label}
//                       href="#"
//                       title={label}
//                       className={`w-9 h-9 flex items-center justify-center ${bg} ${hover} transition-all duration-200 hover:scale-110 group`}
//                     >
//                       <Icon size={14} className="text-white" />
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               {/* ── ARTICLE CONTENT ── */}
//               <div className="flex-1 min-w-0">
//                 {article.content.map((para, i) => (
//                   <p key={i} className="text-gray-700 text-sm font-serif leading-relaxed mb-4">
//                     {para}
//                   </p>
//                 ))}
//               </div>
//             </div>

//             {/* Divider */}
//             <div className="border-t border-gray-200 mb-6" />

//             {/* ── Prev / Next post ── */}
//             <div className="flex flex-col sm:flex-row gap-7 md:gap-4 mb-10">
//               <Link href="#" title={prevPost.title} className="flex-1 group border-l-4 border-red-600 hover:border-gray-400 transition-colors">
//                 <p className="text-gray-400 text-[12px] font-serif tracking-widest uppercase mb-1 ml-5">
//                   ‹ PREV POST
//                 </p>
//                 <h4 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors ml-5">
//                   {prevPost.title}
//                 </h4>
//               </Link>

//               <Link href="#" title={nextPost.title} className="flex-1 text-right group border-r-4 border-red-600 hover:border-gray-400 transition-colors">
//                 <p className="text-gray-400 text-[12px] font-serif tracking-widest uppercase mb-1 mr-5">
//                   NEXT POST ›
//                 </p>
//                 <h4 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors mr-5">
//                   {nextPost.title}
//                 </h4>
//               </Link>
//             </div>

//             {/* ── More Posts ── */}
//             <div className="mb-10">
//               <h2 className="text-lg font-black font-serif text-gray-900 inline-block border-b-2 border-red-600 pb-1 mb-6">
//                 More posts
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
//                 {morePosts.map((post, i) => (
//                   <Link key={i} href="#" title={post.title} className="block group">
//                     <div className="relative w-full h-[160px] overflow-hidden mb-3">
//                       <Image
//                         src={post.img}
//                         alt={post.title}
//                         fill
//                         className="object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
//                       />
//                       <div className="absolute top-2 left-2">
//                         <span className="bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 font-sans uppercase">
//                           {post.category}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-1 text-gray-400 text-[11px] font-sans mb-1">
//                       <FaClock size={9} />
//                       <span className="uppercase tracking-wide">{post.date}</span>
//                     </div>
//                     <h4 className="text-gray-900 text-sm font-black font-serif leading-snug group-hover:text-red-600 transition-colors">
//                       {post.title}
//                     </h4>
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* ── About Author ── */}
//             <div className="border-t border-gray-200 pt-8">
//               <h2 className="text-lg font-black font-serif text-gray-900 inline-block border-b-2 border-red-600 pb-1 mb-6">
//                 About author
//               </h2>

//               {/* MOBILE: centered column — avatar top, details below, centered
//                   DESKTOP: row — avatar left, details right                     */}
//               <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-5">
//                 <div className="w-22 h-22 rounded-full overflow-hidden shrink-0 mt-0 md:mt-7 bg-gray-900 relative">
//                   <Image
//                     src={article.author.img}
//                     alt={article.author.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h3 className="text-lg font-black font-serif text-gray-900 mb-2">
//                     {article.author.name}
//                   </h3>
//                   <p className="text-gray-700 text-sm font-serif leading-relaxed">
//                     {article.author.bio}
//                   </p>
//                    <div className="flex gap-3 mt-5 lg:gap-6 justify-center lg:justify-start">
                   
//                       <a 
//                         href="" 
//                         className="hover:text-red-500 transition" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         title={`Follow on Twitter`}
//                         aria-label={`Follow on Twitter`}
//                       >
//                         <FaTwitter size={15} />
//                       </a>
//                       <a 
//                         href=""
//                         className="hover:text-red-500 transition" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         title={`Follow on Quora`}
//                         aria-label={`Follow on Quora`}
//                       >
//                         <FaInstagram size={15} />
//                       </a>
//                       <a 
//                         href=""
//                         className="hover:text-red-500 transition" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         title={`Follow on Reddit`}
//                         aria-label={`Follow  on Reddit`}
//                       >
//                         <FaFacebookF size={15} />
//                       </a>
//                       <a 
//                         href=""
//                         className="hover:text-red-500 transition" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         title={`Follow  on Medium`}
//                         aria-label={`Follow on Medium`}
//                       >
//                         <FaYoutube size={15} />
//                       </a>
//                   </div>
//                 </div>
                
//               </div>
//             </div>

//           </div>

//           {/* ══════════════════════════════════
//               RIGHT COLUMN — 25% Sidebar
//               sticky: locks in place at top-6 while the longer left
//               column (article + more posts + author) scrolls past it.
//               self-start + items-start on parent are both required.
//           ══════════════════════════════════ */}
//           <div className="w-full md:w-[25%] md:sticky md:top-6 md:self-start">
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
            <h1 className="text-4xl font-black font-serif text-gray-900 leading-tight mb-4">
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