

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { FaClock, FaEye, FaHeart, FaShareAlt, FaPlayCircle } from "react-icons/fa";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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

// // ── Three Column Section Data ─────────────────────────────────────────────────

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


// // ── Carousel data ──
// const carouselItems = [
//   { img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80", category: "N.Y.", date: "MARCH 15, 2018", title: "Goodlatte on FBI's slow-walking of Congressional" },
//   { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s", category: "POLITICS", date: "MARCH 15, 2018", title: "The Privacy of the Census is Absolute" },
//   { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80", category: "N.Y.", date: "MARCH 15, 2018", title: "Senator Lindsey Graham talks Diplomacy and North Korea" },
//   { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80", category: "POLITICS", date: "MARCH 14, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
//   { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80", category: "BUSINESS", date: "MARCH 14, 2018", title: "Justice Dept. Restricts a Common Tactic of Judges" },
//   { img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80", category: "WORLD", date: "MARCH 12, 2018", title: "The Parade of Aircraft will take Place in New York" },
// ];

// // ── Shared Sub-components ──────────────────────────────────────────────────────

// function SmallCard({ img, date, title }) {
//   return (
//     <a href="#" className="flex gap-3 group items-start">
//       <div className="w-[90px] h-[70px] shrink-0 overflow-hidden bg-gray-200">
//         <img
//           src={img}
//           alt={title}
//           className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
//         />
//       </div>
//       <div className="flex-1 min-w-0">
//         <p className="text-gray-400 text-[10px] font-sans tracking-wide uppercase mb-1">{date}</p>
//         <h4 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors">
//           {title}
//         </h4>
//       </div>
//     </a>
//   );
// }

// // ── Main Page ─────────────────────────────────────────────────────────────────

// export default function Home() {
//   const [activeTab, setActiveTab] = useState("Popular");
//   const [email, setEmail] = useState("");
//  const [carouselIndex, setCarouselIndex] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(3);
//   const VISIBLE = visibleCount;
//   const visibleWidth = 100 / VISIBLE;
//   const maxIndex = carouselItems.length - VISIBLE;
//   const autoRef = useRef(null);

//   useEffect(() => {
//     const update = () => {
//       if (window.innerWidth < 640) setVisibleCount(1);
//       else if (window.innerWidth < 1024) setVisibleCount(2);
//       else setVisibleCount(3);
//     };
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   const startAuto = () => {
//     clearInterval(autoRef.current);
//     autoRef.current = setInterval(() => {
//       setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
//     }, 4000);
//   };

//   useEffect(() => {
//     startAuto();
//     return () => clearInterval(autoRef.current);
//   }, []);

//   const goLeft = () => { setCarouselIndex((p) => Math.max(0, p - 1)); startAuto(); };
//   const goRight = () => { setCarouselIndex((p) => Math.min(maxIndex, p + 1)); startAuto(); };

//   return (
//     <div className="min-h-screen bg-white">

//       {/* ════════════════════════════════════════
//           HERO SECTION — Featured Article + Sidebar
//       ════════════════════════════════════════ */}
//       <main className="w-full px-4 md:px-6 py-6">
//         <div className="flex flex-col md:flex-row gap-0 md:gap-6">

//           {/* Left Column: 75% — Featured Article */}
//           <div className="w-full md:w-[75%]">
//             <a href="#" className="block relative group overflow-hidden">
//               <div className="relative w-full h-[480px] md:h-[520px] overflow-hidden bg-gray-200">
//                 <img
//                   src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80"
//                   alt="FBI Informant Opens up About Russia uranium Controversy"
//                   className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
//                 <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
//                   <div className="mb-3">
//                     <span className="bg-red-600 text-white text-[10px] md:text-xs font-bold tracking-widest px-3 py-1.5 font-playfair uppercase">
//                       POLITICS, IMAGE
//                     </span>
//                   </div>
//                   <h1 className="text-white text-xl md:text-4xl font-black leading-tight font-playfair mb-3 md:mb-4 group-hover:text-gray-200 transition-colors">
//                     FBI Informant Opens up About Russia uranium Controversy
//                   </h1>
//                   <div className="flex items-center gap-2">
//                     <div className="w-6 h-6 md:w-7 md:h-7 rounded-full shrink-0 overflow-hidden ring-1 ring-white/30">
//                       <img src="https://i.pravatar.cc/56?img=12" alt="cmsmasters" className="w-full h-full object-cover" />
//                     </div>
//                     <span className="text-gray-300 text-xs md:text-sm font-playfair">
//                       by <span className="text-white font-semibold hover:text-red-400 transition-colors">cmsmasters</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </a>
//           </div>

//           {/* Right Column: 25% — Sidebar Articles */}
//           <div className="w-full md:w-[25%] mt-8 md:mt-0">
//             <div className="bg-gray-50 h-full">
//               {sidebarArticles.map((article, index) => (
//                 <a key={index} href="#" className="block px-4 py-4 border-b border-gray-200 hover:bg-gray-100 transition-colors group last:border-b-0">
//                   <p className="text-gray-400 text-[11px] font-sans mb-1.5 tracking-wide">{article.date}</p>
//                   <h3 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors">{article.title}</h3>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* ════════════════════════════════════════
//           GRID SECTION — 3 Article Columns + Tabbed Sidebar
//       ════════════════════════════════════════ */}
//       <section className="w-full px-4 py-10 md:py-4 md:px-6 pb-10">
//         <div className="flex flex-col md:flex-row gap-6">

//           {/* ── 75% left: 3 article columns ── */}
//           <div className="w-full md:w-[75%] grid grid-cols-1 sm:grid-cols-3 gap-6">

//             {/* Column 1 */}
//             <div className="flex flex-col gap-4">
//               <a href="#" className="block relative group overflow-hidden">
//                 <div className="relative w-full h-[270px] md:h-[200px] overflow-hidden bg-gray-300">
//                   <img src={col1.featured.img} alt={col1.featured.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
//                   <div className="absolute top-3 left-3">
//                     <span className="bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-1 font-playfair uppercase">{col1.featured.category}</span>
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 p-3">
//                     <h3 className="text-white text-sm font-black font-playfair leading-snug group-hover:text-gray-200 transition-colors">{col1.featured.title}</h3>
//                   </div>
//                 </div>
//               </a>
//               <div className="flex flex-col gap-4 pt-1 mt-5">
//                 {col1.small.map((item, i) => <SmallCard key={i} {...item} />)}
//               </div>
//             </div>

//             {/* Column 2 */}
//             <div className="flex flex-col gap-4 mt-8 md:mt-0">
//               <a href="#" className="block relative group overflow-hidden">
//                 <div className="relative w-full h-[270px] md:h-[200px] overflow-hidden bg-gray-300">
//                   <img src={col2.featured.img} alt={col2.featured.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
//                   <div className="absolute top-3 left-3">
//                     <span className="bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-1 font-playfair uppercase">{col2.featured.category}</span>
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 p-3">
//                     <h3 className="text-white text-sm font-black font-playfair leading-snug group-hover:text-gray-200 transition-colors">{col2.featured.title}</h3>
//                   </div>
//                 </div>
//               </a>
//               <div className="flex flex-col gap-4 pt-1 mt-5">
//                 {col2.small.map((item, i) => <SmallCard key={i} {...item} />)}
//               </div>
//             </div>

//             {/* Column 3 */}
//             <div className="flex flex-col gap-4 mt-8 md:mt-0">
//               <a href="#" className="block relative group overflow-hidden">
//                 <div className="relative w-full h-[270px] md:h-[200px] overflow-hidden bg-gray-300">
//                   <img src={col3.featured.img} alt={col3.featured.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
//                   <div className="absolute top-3 left-3">
//                     <span className="bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-1 font-playfair uppercase">{col3.featured.category}</span>
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 p-3">
//                     <h3 className="text-white text-sm font-black font-playfair leading-snug group-hover:text-gray-200 transition-colors">{col3.featured.title}</h3>
//                   </div>
//                 </div>
//               </a>
//               <div className="flex flex-col gap-4 pt-1 mt-5">
//                 {col3.small.map((item, i) => <SmallCard key={i} {...item} />)}
//               </div>
//             </div>

//           </div>

//           {/* ── 25% right: Tabbed sidebar ── */}
//           <div className="w-full md:w-[25%] mt-8 md:mt-0">
//             <div className="flex items-center gap-6 border-b border-gray-200 mb-4">
//               {["Latest", "Popular", "Comments"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`pb-2 text-sm font-bold font-playfair tracking-wide transition-colors ${activeTab === tab ? "text-black border-b-2 border-black" : "text-gray-400 hover:text-gray-700"}`}
//                   style={{ marginBottom: "-1px" }}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//             <div className="flex flex-col gap-4">
//               {tabData[activeTab].map((item, i) => (
//                 <div key={i}>
//                   <SmallCard {...item} />
//                   {i < tabData[activeTab].length - 1 && <div className="border-b border-gray-200 mt-4" />}
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* ════════════════════════════════════════
//           ARTICLE LIST SECTION — 75% list + 25% sidebar
//       ════════════════════════════════════════ */}
//       <section className="w-full px-4 md:px-6 pb-10">
//         <div className="flex flex-col md:flex-row gap-8">

//           {/* ── Left 75%: Article list + Ad banner ── */}
//           <div className="w-full md:w-[75%] flex flex-col gap-0">
//             {listArticles.map((article, index) => (
//               <div key={index}>
//                 <div className="flex flex-col sm:flex-row py-6">
//                   <div className="relative w-full sm:w-1/2 h-[270px] shrink-0 overflow-hidden group">
//                     <img src={article.img} alt={article.title} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out" />
//                     <div className="absolute top-2 left-2">
//                       <span className="bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-1 font-serif uppercase">{article.category}</span>
//                     </div>
//                   </div>
//                   <div className="w-full sm:w-1/2 flex flex-col justify-between pl-0 sm:pl-5 pt-4 sm:pt-0">
//                     <div>
//                       <div className="flex items-center gap-1.5 text-gray-400 text-[11px] font-sans mb-2">
//                         <FaClock size={10} />
//                         <span className="uppercase tracking-wide">{article.date}</span>
//                       </div>
//                       <a href="#">
//                         <h2 className="text-gray-900 text-3xl font-black font-serif leading-tight hover:text-red-600 transition-colors mb-2">{article.title}</h2>
//                       </a>
//                       <p className="text-gray-500 text-sm font-serif leading-relaxed mb-4 line-clamp-3">{article.description}</p>
//                     </div>
//                     <div className="flex flex-col gap-3">
//                       <div className="flex items-center gap-2">
//                         <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
//                           <img src={article.author.img} alt={article.author.name} className="w-full h-full object-cover" />
//                         </div>
//                         <span className="text-gray-500 text-sm font-sans">
//                           by <span className="text-gray-800 font-semibold hover:text-red-600 transition-colors cursor-pointer">{article.author.name}</span>
//                         </span>
//                       </div>
//                       <a href="#" className="self-start bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold tracking-widest px-4 py-2 font-sans uppercase transition-colors">
//                         Read More
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Ad Banner */}
//             <div className="mt-6">
//               <div className="relative w-full h-[110px] overflow-hidden flex items-center bg-[#1a1a1a]">
//                 <div className="absolute inset-0 opacity-40" style={{ background: "repeating-linear-gradient(45deg, #333 0px, #333 1px, transparent 1px, transparent 10px), repeating-linear-gradient(-45deg, #444 0px, #444 1px, transparent 1px, transparent 10px)" }} />
//                 <div className="absolute right-0 top-0 bottom-0 w-48 opacity-60" style={{ background: "repeating-linear-gradient(90deg, #555 0px, #555 1px, #333 1px, #333 8px)" }} />
//                 <div className="relative z-10 px-8 flex items-center">
//                   <div>
//                     <p className="text-gray-400 text-xs font-playfair tracking-widest uppercase mb-1">Advertisement</p>
//                     <h3 className="text-white text-xl font-black font-playfair tracking-wide">Place for your Advertisement</h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── Right 25%: Most Popular + Latest News ── */}
//           <div className="w-full md:w-[25%] flex flex-col gap-8">

//             {/* Most Popular */}
//             <div>
//               <div className="mb-4">
//                 <h2 className="text-xl font-black font-playfair tracking-wide inline-block border-b-2 border-red-600 pb-1">Most Popular</h2>
//               </div>
//               <div className="border border-gray-300">
//                 <div className="w-full h-[170px] overflow-hidden">
//                   <img src="https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?w=400&q=80" alt="Most Popular" className="w-full h-full object-cover grayscale" />
//                 </div>
//                 {mostPopular.map((item, i) => (
//                   <div key={i}>
//                     <a href="#" className="flex items-start gap-3 px-4 py-7 group hover:bg-gray-50 transition-colors">
//                       <span className="text-gray-300 text-3xl font-black font-playfair leading-none shrink-0 w-5 text-center">{i + 1}</span>
//                       <div className="flex-1 min-w-0">
//                         <h4 className="text-gray-800 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors mb-1">{item.title}</h4>
//                       </div>
//                     </a>
//                     {i < mostPopular.length - 1 && <div className="border-t border-gray-300" />}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Latest News */}
//             <div>
//               <div className="mt-2 md:mt-8 mb-5">
//                 <h2 className="text-xl font-black font-playfair text-black tracking-wide inline-block border-b-2 border-red-600 pb-1">Latest News</h2>
//               </div>
//               <div>
//                 <a href="#" className="block relative group overflow-hidden">
//                   <div className="relative w-full h-[160px] overflow-hidden">
//                     <img src={latestNews.img} alt={latestNews.title} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out" />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//                     <div className="absolute top-2 left-2">
//                       <span className="bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-1 font-serif uppercase">{latestNews.category}</span>
//                     </div>
//                   </div>
//                 </a>
//                 <div className="pt-3">
//                   <div className="flex items-center gap-1.5 text-gray-400 text-[11px] font-playfair mb-2">
//                     <FaClock size={10} />
//                     <span className="uppercase tracking-wide">{latestNews.date}</span>
//                   </div>
//                   <a href="#">
//                     <h3 className="text-gray-900 text-sm font-black font-serif leading-snug hover:text-red-600 transition-colors">{latestNews.title}</h3>
//                   </a>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════════════
//           THREE COLUMN SECTION — 25% | 50% | 25%
//       ════════════════════════════════════════ */}
//       <section className="w-full px-4 md:px-6 py-10">
//         <div className="flex flex-col md:flex-row gap-6">

//           {/* ════════ LEFT COLUMN — 25% ════════ */}
//           <div className="w-full md:w-[25%] flex flex-col gap-6">

//             {/* Featured News heading with arrows */}
//             <div className="flex items-center justify-between pb-2">
//               <h2 className="text-xl font-black font-serif tracking-wide border-b-2 border-red-600 pb-2 -mb-[9px]">
//                 Featured News
//               </h2>
//               {/* <div className="flex gap-1">
//                 <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors">
//                   <FiChevronLeft size={12} />
//                 </button>
//                 <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-500 transition-colors">
//                   <FiChevronRight size={12} />
//                 </button>
//               </div> */}
//             </div>

//             {/* Featured card with overlay */}
//             <a href="#" className="block relative group overflow-hidden">
//               <div className="relative w-full h-[180px] overflow-hidden bg-gray-200">
//                 <img src={featuredNewsCard.img} alt={featuredNewsCard.title} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-red-600 text-white text-[12px] font-bold tracking-widest px-2 py-0.5 uppercase font-sans">{featuredNewsCard.category}</span>
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 p-3">
//                   <p className="text-gray-300 text-[12px] font-sans mb-1 flex items-center gap-1">
//                     <FaClock size={8} /> {featuredNewsCard.date}
//                   </p>
//                   <h3 className="text-white text-sm font-black font-serif leading-snug group-hover:text-gray-200 transition-colors">{featuredNewsCard.title}</h3>
//                 </div>
//               </div>
//             </a>

//             {/* Video card */}
//             <a href="#" className="block relative group overflow-hidden">
//               <div className="relative w-full h-[370px] overflow-hidden bg-gray-200">
//                 <img src={videoCard.img} alt={videoCard.title} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
//                 <div className="absolute top-5 left-5">
//                   <span className="bg-red-600 text-white text-[12px] font-bold tracking-widest px-2 py-0.5 uppercase font-sans">{videoCard.category}</span>
//                 </div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-12 h-12 rounded-full border-2 border-white/70 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
//                     <FaPlayCircle size={28} className="text-white/90" />
//                   </div>
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 p-3">
//                   <p className="text-gray-300 text-[13px] font-sans mb-1 flex items-center gap-1">
//                     <FaClock size={8} /> {videoCard.date}
//                   </p>
//                   <h3 className="text-white text-lg font-black font-serif leading-snug group-hover:text-gray-200 transition-colors">{videoCard.title}</h3>
//                 </div>
//               </div>
//             </a>

//             {/* More from NewsMag */}
//             <div>
//               <h2 className="text-base font-black font-serif tracking-wide border-b-2 border-red-600 pb-2 mb-4 mt-5 inline-block">
//                 More from NewsMag
//               </h2>
//               <div className="flex flex-col gap-0">
//                 {moreFromNewsMag.map((item, i) => (
//                   <a key={i} href="#" className="flex gap-3 items-start py-3 border-b border-gray-100 group last:border-b-0">
//                     <div className="w-[70px] h-[55px] shrink-0 overflow-hidden bg-gray-200">
//                       <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out" />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <p className="text-gray-400 text-[10px] font-sans tracking-wide uppercase mb-0.5">{item.date}</p>
//                       <h4 className="text-gray-900 text-xs font-bold font-serif leading-snug group-hover:text-red-600 transition-colors">{item.title}</h4>
//                     </div>
//                   </a>
//                 ))}
//               </div>
//             </div>

//           </div>

//           {/* ════════ MIDDLE COLUMN — 50% ════════ */}
//           <div className="w-full md:w-[50%] flex flex-col gap-0 md:px-6">
//             {middleArticles.map((article, index) => (
//               <div key={index} className={index > 0 ? "border-t border-gray-200 pt-6" : ""}>

//                 {/* Large image */}
//                 <a href="#" className="block relative group overflow-hidden mb-4">
//                   <div className="relative w-full h-[240px] md:h-[300px] overflow-hidden bg-gray-200">
//                     <img src={article.img} alt={article.title} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out" />
//                     <div className="absolute top-6 left-6">
//                       <span className="bg-red-600 text-white text-[12px] font-bold tracking-widest px-4 py-2 uppercase font-serif">{article.category}</span>
//                     </div>
//                   </div>
//                 </a>

//                 {/* Date */}
//                 <div className="flex items-center gap-1.5 text-gray-400 text-[12px] font-sans mb-2">
//                   <FaClock size={10} />
//                   <span className="uppercase tracking-wide">{article.date}</span>
//                 </div>

//                 {/* Title */}
//                 <a href="#">
//                   <h2 className="text-gray-900 text-2xl font-black font-serif leading-tight hover:text-red-600 transition-colors mb-3">{article.title}</h2>
//                 </a>

//                 {/* Description */}
//                 <p className="text-gray-500 text-sm font-sans leading-relaxed mb-4 line-clamp-3">{article.description}</p>

//                 {/* Author + stats */}
//                 <div className="flex items-center gap-2 mb-4">
//                   <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
//                     <img src={article.author.img} alt={article.author.name} className="w-full h-full object-cover" />
//                   </div>
//                   <span className="text-gray-400 text-sm font-sans">
//                     by <span className="text-gray-700 font-semibold hover:text-red-600 transition-colors cursor-pointer">{article.author.name}</span>
//                   </span>
//                 </div>

//                 <a href="#" className="inline-block bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold tracking-widest px-5 py-2 font-sans uppercase transition-colors mb-6">
//                   Read More
//                 </a>

//               </div>
//             ))}
//           </div>

//           {/* ════════ RIGHT COLUMN — 25% ════════ */}
//           <div className="w-full md:w-[25%] flex flex-col gap-6">

//             {/* Two stacked article cards */}
//             <div className="flex flex-col gap-5">
//               {rightTopArticles.map((article, i) => (
//                 <a key={i} href="#" className="block group">
//                   <div className="relative w-full h-[170px] overflow-hidden bg-gray-200 mb-2">
//                     <img src={article.img} alt={article.title} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out" />
//                   </div>
//                   <p className="text-gray-400 text-[12px] font-sans tracking-wide uppercase mb-1 flex items-center gap-1">
//                     <FaClock size={8} /> {article.date}
//                   </p>
//                   <h4 className="text-gray-900 text-lg font-bold font-serif leading-snug group-hover:text-red-600 transition-colors">{article.title}</h4>
//                 </a>
//               ))}
//             </div>

//             {/* Subscribe to Newsletter */}
//             <div className="border border-gray-200 bg-gray-50 p-4 py-10">
//               <h3 className="text-sm font-black font-serif text-gray-900 mb-3 text-center">Subscribe to Our Newsletter</h3>
//               <input
//                 type="email"
//                 placeholder="Enter Your Email... *"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full border border-gray-300 text-sm px-3 py-2 mb-2 font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
//               />
//               <button className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest py-2 font-sans uppercase transition-colors">
//                 Subscribe
//               </button>
//               <p className="text-gray-400 text-[10px] font-sans text-center mt-2">*we hate spam as much as you do</p>
//             </div>

//             {/* Video card at bottom */}
//             <a href="#" className="block relative group overflow-hidden">
//               <div className="relative w-full h-[370px] overflow-hidden bg-gray-200">
//                 <img src={rightVideoCard.img} alt={rightVideoCard.title} className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
//                 <div className="absolute top-5 left-5">
//                   <span className="bg-red-600 text-white text-[12px] font-bold tracking-widest px-2 py-0.5 uppercase font-sans">{rightVideoCard.category}</span>
//                 </div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="w-12 h-12 rounded-full border-2 border-white/70 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
//                     <FaPlayCircle size={28} className="text-white/90" />
//                   </div>
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 p-3">
//                   <p className="text-gray-300 text-[13px] font-sans mb-1 flex items-center gap-1">
//                     <FaClock size={8} /> {rightVideoCard.date}
//                   </p>
//                   <h3 className="text-white text-lg font-black font-serif leading-snug group-hover:text-gray-200 transition-colors">{rightVideoCard.title}</h3>
//                 </div>
//               </div>
//             </a>

//           </div>

//         </div>
//       </section>

     
//         {/* ════════════════════════════════════════
//           CAROUSEL SECTION — full width, 3/2/1 visible
//       ════════════════════════════════════════ */}
//       <section className="w-full relative px-4 py-4">
//         {/* Left arrow — square, black/50 bg, red on hover */}
//         <button
//           onClick={goLeft}
//           disabled={carouselIndex === 0}
//           className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center transition-all ${
//             carouselIndex === 0
//               ? "bg-black/20 text-white/20 cursor-not-allowed"
//               : "bg-black/50 text-white hover:bg-red-500 cursor-pointer"
//           }`}
//         >
//           <FiChevronLeft size={22} />
//         </button>

//         {/* Right arrow — square, black/50 bg, red on hover */}
//         <button
//           onClick={goRight}
//           disabled={carouselIndex >= maxIndex}
//           className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center transition-all ${
//             carouselIndex >= maxIndex
//               ? "bg-black/20 text-white/20 cursor-not-allowed"
//               : "bg-black/50 text-white hover:bg-red-500 cursor-pointer"
//           }`}
//         >
//           <FiChevronRight size={22} />
//         </button>

//         {/* Track */}
//         <div className="overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${carouselIndex * visibleWidth}%)` }}
//           >
//             {carouselItems.map((item, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="group relative shrink-0 overflow-hidden w-full sm:w-1/2 lg:w-1/3"
//               >
//                 <div className="relative w-full h-[250px] overflow-hidden bg-gray-800">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
//                   <div className="absolute top-5 left-5">
//                     <span className="bg-red-600 text-white text-[11px] font-bold tracking-widest px-3 py-1 font-sans uppercase">
//                       {item.category}
//                     </span>
//                   </div>
//                   <div className="absolute bottom-0 left-0 right-0 p-6">
//                     <div className="flex items-center gap-1.5 text-gray-300 text-[12px] font-sans mb-2">
//                       <FaClock size={10} />
//                       <span className="uppercase tracking-wide">{item.date}</span>
//                     </div>
//                     <h3 className="text-white text-xl font-black font-serif leading-tight group-hover:text-gray-200 transition-colors">
//                       {item.title}
//                     </h3>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }



// // // Server Component — no "use client"

import ArticleListSection from "@/components/homecomponents/Articlelistsection";
import CarouselSection from "@/components/homecomponents/Carouselsection";
import GridSection from "@/components/homecomponents/Gridsection";
import HeroSection from "@/components/homecomponents/Herosection";
import ThreeColumnSection from "@/components/homecomponents/Threecolumnsection";
// ── Data ──────────────────────────────────────────────────────────────────────

const heroFeatured = {
  img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80",
  title: "FBI Informant Opens up About Russia uranium Controversy",
  category: "POLITICS, IMAGE",
  author: {
    img: "https://i.pravatar.cc/56?img=12",
    name: "cmsmasters",
  },
};

const sidebarArticles = [
  { date: "May 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
  { date: "May 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
  { date: "May 22, 2018", title: "The Supreme Court considers the Question of the State" },
  { date: "March 14, 2018", title: "SEC Debates Whether Cryptocurrencies Are Securities" },
  { date: "March 14, 2018", title: "Experiment Shows the Dangers of Hacking Robots" },
  { date: "March 14, 2018", title: "Breakfast with 'Friends'" },
];

const col1 = {
  featured: {
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    category: "N.Y.",
    title: "Goodlatte on FBI's slow-walking of Congressional",
  },
  small: [
    { img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=200&q=80", date: "MARCH 12, 2018", title: "The Parade of Aircraft will take Place in New York" },
    { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80", date: "JANUARY 20, 2018", title: "Justice Dept. Restricts a Common Tactic of Judges" },
  ],
};

const col2 = {
  featured: {
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
    category: "N.Y.",
    title: "Tucker: What has Happened to Democratic Party under Trump?",
  },
  small: [
    { img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=200&q=80", date: "MARCH 12, 2018", title: "The Parade of Aircraft will take Place in New York" },
    { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80", date: "JANUARY 20, 2018", title: "Justice Dept. Restricts a Common Tactic of Judges" },
  ],
};

const col3 = {
  featured: {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s",
    category: "POLITICS",
    title: "The Privacy of the Census is Absolute",
  },
  small: [
    { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=80", date: "MAY 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
    { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80", date: "MAY 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
  ],
};

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

const listArticles = [
  {
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=80",
    category: "ENTERTAINMENT",
    date: "MARCH 13, 2018",
    title: "Trump about the Risks of Meeting with North Korea",
    description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital. Quickly coordinate e-business application.",
    author: { img: "https://i.pravatar.cc/56?img=12", name: "cmsmasters" },
    views: 625,
    likes: 12,
  },
  {
    img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&q=80",
    category: "ENTERTAINMENT",
    date: "MARCH 12, 2018",
    title: "The Parade of Aircraft will take Place in New York",
    description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital. Quickly coordinate e-business application.",
    author: { img: "https://i.pravatar.cc/56?img=15", name: "cmsmasters" },
    views: 491,
    likes: 18,
  },
  {
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&q=80",
    category: "ENTERTAINMENT",
    date: "MARCH 12, 2018",
    title: "Life on Wall Street. What Is It",
    description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital. Quickly coordinate e-business application.",
    author: { img: "https://i.pravatar.cc/56?img=8", name: "cmsmasters" },
    views: 435,
    likes: 11,
  },
];

const mostPopular = [
  { title: "There was a New Youth Center in the Museum of American Indians", shares: 41 },
  { title: "Trump about the Risks of Meeting with North Korea", shares: 7 },
  { title: "FBI Informant Opens up About Russia uranium Controversy", shares: 5 },
  { title: "Justice Dept. Restricts a Common Tactic of Judges", shares: 4 },
  { title: "The Parade of Aircraft will take Place in New York", shares: 2 },
];

const latestNews = {
  img: "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?w=400&q=80",
  category: "CULTURE",
  date: "MARCH 13, 2018",
  title: "There was a New Youth Center in the Museum of American Indians",
};

const featuredNewsCard = {
  img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80",
  category: "N.Y.",
  date: "MARCH 13, 2018",
  title: "Goodlatte on FBI's slow-walking of Congressional",
};

const videoCard = {
  img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  category: "VIDEO",
  date: "MARCH 12, 2018",
  title: "This is the Best Music for Any Age (and Attitude)",
};

const moreFromNewsMag = [
  { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=100&q=80", date: "MAY 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
  { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=100&q=80", date: "MAY 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
  { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=100&q=80", date: "MAY 22, 2018", title: "The Supreme Court considers the Question of the State" },
  { img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&q=80", date: "MARCH 14, 2018", title: "SEC Debates Whether Cryptocurrencies Are Securities" },
  { img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&q=80", date: "MARCH 14, 2018", title: "Experiment Shows the Dangers of Hacking Robots" },
  { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&q=80", date: "MARCH 14, 2018", title: "Breakfast with 'Friends'" },
];

const middleArticles = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s",
    category: "POLITICS",
    date: "MARCH 13, 2018",
    title: "Director of the Bureau of Prisons Steps Down made a Statement",
    description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital. Quickly coordinate e-business applications through revolutionary catalysts for change.",
    author: { img: "https://i.pravatar.cc/56?img=12", name: "cmsmasters" },
    views: 374,
    likes: 7,
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    category: "N.Y.",
    date: "MAY 22, 2018",
    title: "Who is James Mattis? 5 Things to Know about the Secretary",
    description: "Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital. Quickly coordinate e-business applications through revolutionary catalysts for change.",
    author: { img: "https://i.pravatar.cc/56?img=15", name: "cmsmasters" },
    views: 591,
    likes: 15,
  },
];

const rightTopArticles = [
  {
    img: "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?w=400&q=80",
    date: "MARCH 13, 2018",
    title: "There was a New Youth Center in the Museum of American Indians",
  },
  {
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&q=80",
    date: "MARCH 12, 2018",
    title: "Cambridge Analytica Shuts Down in Wake of Facebook Data Scandal",
  },
];

const rightVideoCard = {
  img: "https://images.unsplash.com/photo-1559548331-f9cb98001426?w=400&q=80",
  category: "VIDEO",
  date: "MARCH 12, 2018",
  title: "California County Rescinds Homeless",
};

const carouselItems = [
  { img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80", category: "N.Y.", date: "MARCH 15, 2018", title: "Goodlatte on FBI's slow-walking of Congressional" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s", category: "POLITICS", date: "MARCH 15, 2018", title: "The Privacy of the Census is Absolute" },
  { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80", category: "N.Y.", date: "MARCH 15, 2018", title: "Senator Lindsey Graham talks Diplomacy and North Korea" },
  { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80", category: "POLITICS", date: "MARCH 14, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
  { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80", category: "BUSINESS", date: "MARCH 14, 2018", title: "Justice Dept. Restricts a Common Tactic of Judges" },
  { img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80", category: "WORLD", date: "MARCH 12, 2018", title: "The Parade of Aircraft will take Place in New York" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
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