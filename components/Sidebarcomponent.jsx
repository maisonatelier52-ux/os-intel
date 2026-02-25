"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SmallCard from "@/components/homecomponents/Smallcard";

export default function SidebarComponent({ latestNews, tabData, mostPopular }) {
  const [activeTab, setActiveTab] = useState("Popular");

  return (
    <div className="flex flex-col gap-8">

      {/* ── The Latest News ── */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg font-black font-serif text-gray-900 inline-block border-b-2 border-red-600 pb-1">
            The Latest News
          </h2>
        </div>
        <div className="bg-gray-50 border border-gray-100">
          {latestNews.map((item, i) => (
            <div key={i}>
              <Link href="#" title={item.title} className="block px-4 py-3 group hover:bg-gray-100 transition-colors">
                <p className="text-gray-400 text-[11px] font-sans tracking-wide mb-1">{item.date}</p>
                <h4 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors">
                  {item.title}
                </h4>
              </Link>
              {i < latestNews.length - 1 && <div className="border-t border-gray-200" />}
            </div>
          ))}
        </div>
      </div>

      {/* ── Follow Us ── */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg font-black font-serif text-gray-900 inline-block border-b-2 border-red-600 pb-1">
            Follow Us
          </h2>
        </div>

        {/* Grid layout: 2 columns on mobile, stacked on desktop sidebar */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">

          {/* Facebook */}
          <Link href="#" title="Follow us on Facebook" className="flex items-center bg-[#3b5998] hover:bg-[#344e86] transition-colors group">
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="pl-4">
              <p className="text-white text-sm font-bold font-sans leading-none">12.3K</p>
              <p className="text-white/80 text-xs font-sans mt-0.5">Fans</p>
            </div>
          </Link>

          {/* Twitter / X */}
          <Link href="#" title="Follow us on Twitter" className="flex items-center bg-[#1da1f2] hover:bg-[#1a90d9] transition-colors group">
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="pl-4">
              <p className="text-white text-sm font-bold font-sans leading-none">0</p>
              <p className="text-white/80 text-xs font-sans mt-0.5">Followers</p>
            </div>
          </Link>

          {/* Instagram */}
          <Link href="#" title="Follow us on Instagram" className="flex items-center bg-[#00aadb] hover:bg-[#0099c5] transition-colors group">
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="pl-4">
              <p className="text-white text-sm font-bold font-sans leading-none">0</p>
              <p className="text-white/80 text-xs font-sans mt-0.5">Followers</p>
            </div>
          </Link>

        </div>
      </div>

      {/* ── Tabbed Latest / Popular / Comments ── */}
      <div>
        <div className="flex items-center gap-6 border-b border-gray-200 mb-4">
          {["Latest", "Popular", "Comments"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-bold font-playfair tracking-wide transition-colors ${
                activeTab === tab
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400 hover:text-gray-700"
              }`}
              style={{ marginBottom: "-1px" }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {tabData[activeTab].map((item, i) => (
            <div key={i}>
              <SmallCard {...item} />
              {i < tabData[activeTab].length - 1 && (
                <div className="border-b border-gray-200 mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Most Popular ── */}
      <div>
        <div className="mb-4">
          <h2 className="text-xl font-black font-playfair tracking-wide inline-block border-b-2 border-red-600 pb-1">
            Most Popular
          </h2>
        </div>
        <div className="border border-gray-300">
          {/* <div className="w-full h-[170px] overflow-hidden relative">
            <Image
              src={mostPopular[0].img}
              alt="Most Popular"
              fill
              className="object-cover grayscale"
            />
          </div> */}
          {mostPopular.map((item, i) => (
            <div key={i}>
              {
                i === 0 && (
                   <div className="w-full h-[170px] overflow-hidden relative">
                    <Image
                      src={item.img}
                      alt="Most Popular"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                )
              }
              <Link
                href="#"
                title={item.title}
                className="flex items-start gap-3 px-4 py-7 group hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-300 text-3xl font-black font-playfair leading-none shrink-0 w-5 text-center">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-800 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors mb-1">
                    {item.title}
                  </h4>
                </div>
              </Link>
              {i < mostPopular.length - 1 && <div className="border-t border-gray-300" />}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import SmallCard from "@/components/homecomponents/Smallcard";
// export default function SidebarComponent({ latestNews = [], tabData = {}, mostPopular = [] }) {
//   // Only Latest and Popular tabs
//   const TABS = ["Latest", "Popular"];
//   const [activeTab, setActiveTab] = useState("Latest");

//   const activeItems = tabData[activeTab] || [];

//   return (
//     <div className="flex flex-col gap-8">

//       {/* ── The Latest News ── */}
//       <div>
//         <div className="mb-4">
//           <h2 className="text-lg font-black font-serif text-gray-900 inline-block border-b-2 border-red-600 pb-1">
//             The Latest News
//           </h2>
//         </div>

//         <div className="bg-gray-50 border border-gray-100">
//           {latestNews.length === 0 ? (
//             <p className="px-4 py-3 text-sm text-gray-400">No recent news available.</p>
//           ) : (
//             latestNews.map((item, i) => (
//               <div key={i}>
//                 <Link
//                   href={item.href || "#"}
//                   title={item.title}
//                   className="block px-4 py-3 group hover:bg-gray-100 transition-colors"
//                 >
//                   <p className="text-gray-400 text-[11px] font-sans tracking-wide mb-1">
//                     {item.date}
//                   </p>
//                   <h4 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors">
//                     {item.title}
//                   </h4>
//                 </Link>
//                 {i < latestNews.length - 1 && (
//                   <div className="border-t border-gray-200" />
//                 )}
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* ── Follow Us ── */}
//       <div>
//         <div className="mb-4">
//           <h2 className="text-lg font-black font-serif text-gray-900 inline-block border-b-2 border-red-600 pb-1">
//             Follow Us
//           </h2>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-1 gap-2">

//           {/* Facebook */}
//           <Link
//             href="#"
//             title="Follow us on Facebook"
//             className="flex items-center bg-[#3b5998] hover:bg-[#344e86] transition-colors"
//           >
//             <div className="w-12 h-12 flex items-center justify-center shrink-0">
//               <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
//                 <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//               </svg>
//             </div>
//             <div className="h-12 w-px bg-white/20" />
//             <div className="pl-4">
//               <p className="text-white text-sm font-bold font-sans leading-none">12.3K</p>
//               <p className="text-white/80 text-xs font-sans mt-0.5">Fans</p>
//             </div>
//           </Link>

//           {/* Twitter / X */}
//           <Link
//             href="#"
//             title="Follow us on Twitter"
//             className="flex items-center bg-[#1da1f2] hover:bg-[#1a90d9] transition-colors"
//           >
//             <div className="w-12 h-12 flex items-center justify-center shrink-0">
//               <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
//                 <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
//               </svg>
//             </div>
//             <div className="h-12 w-px bg-white/20" />
//             <div className="pl-4">
//               <p className="text-white text-sm font-bold font-sans leading-none">0</p>
//               <p className="text-white/80 text-xs font-sans mt-0.5">Followers</p>
//             </div>
//           </Link>

//           {/* Instagram */}
//           <Link
//             href="#"
//             title="Follow us on Instagram"
//             className="flex items-center bg-[#00aadb] hover:bg-[#0099c5] transition-colors"
//           >
//             <div className="w-12 h-12 flex items-center justify-center shrink-0">
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="white"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="w-5 h-5"
//               >
//                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//               </svg>
//             </div>
//             <div className="h-12 w-px bg-white/20" />
//             <div className="pl-4">
//               <p className="text-white text-sm font-bold font-sans leading-none">0</p>
//               <p className="text-white/80 text-xs font-sans mt-0.5">Followers</p>
//             </div>
//           </Link>

//         </div>
//       </div>

//       {/* ── Latest / Popular Tabs ── */}
//       <div>
//         <div className="flex items-center gap-6 border-b border-gray-200 mb-4">
//           {TABS.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-2 text-sm font-bold font-playfair tracking-wide transition-colors ${
//                 activeTab === tab
//                   ? "text-black border-b-2 border-black"
//                   : "text-gray-400 hover:text-gray-700"
//               }`}
//               style={{ marginBottom: "-1px" }}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         <div className="flex flex-col gap-4">
//           {activeItems.length === 0 ? (
//             <p className="text-sm text-gray-400">No articles available.</p>
//           ) : (
//             activeItems.map((item, i) => (
//               <div key={i}>
//                 <SmallCard {...item} />
//                 {i < activeItems.length - 1 && (
//                   <div className="border-b border-gray-200 mt-4" />
//                 )}
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* ── Most Popular ── */}
//       <div>
//         <div className="mb-4">
//           <h2 className="text-xl font-black font-playfair tracking-wide inline-block border-b-2 border-red-600 pb-1">
//             Most Popular
//           </h2>
//         </div>

//         <div className="border border-gray-300">
//           {/* Hero image — taken from the first mostPopular article */}
//           {mostPopular[0] && (
//             <div className="w-full h-[170px] overflow-hidden relative">
//               <Image
//                 src={mostPopular[0].img}
//                 alt={mostPopular[0].title}
//                 fill
//                 className="object-cover grayscale"
//               />
//             </div>
//           )}

//           {mostPopular.length === 0 ? (
//             <p className="px-4 py-3 text-sm text-gray-400">No articles available.</p>
//           ) : (
//             mostPopular.map((item, i) => (
//               <div key={i}>
//                 <Link
//                   href={item.href || "#"}
//                   title={item.title}
//                   className="flex items-start gap-3 px-4 py-7 group hover:bg-gray-50 transition-colors"
//                 >
//                   <span className="text-gray-300 text-3xl font-black font-playfair leading-none shrink-0 w-5 text-center">
//                     {i + 1}
//                   </span>
//                   <div className="flex-1 min-w-0">
//                     <h4 className="text-gray-800 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors mb-1">
//                       {item.title}
//                     </h4>
//                   </div>
//                 </Link>
//                 {i < mostPopular.length - 1 && (
//                   <div className="border-t border-gray-300" />
//                 )}
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//     </div>
//   )
// }