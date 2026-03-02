
// import Image from "next/image";
// import Link from "next/link";

// export default function HeroSection({ featured, sidebarArticles }) {
//   return (
//     <main className="w-full px-4 md:px-6 py-6">
//       <div className="flex flex-col md:flex-row gap-0 md:gap-6">

//         {/* Left Column: 75% — Featured Article */}
//         <div className="w-full md:w-[75%]">
//           <Link href={featured.href} title={featured.title} className="block relative group overflow-hidden">
//             <div className="relative w-full h-[480px] md:h-[520px] overflow-hidden bg-gray-200">
//               <Image
//                 src={featured.img}
//                 alt={featured.title}
//                 fill
//                 className="object-cover object-center grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
//                 <div className="mb-3">
//                   <span className="bg-red-600 text-white text-[10px] md:text-xs font-bold tracking-widest px-3 py-1.5 font-playfair uppercase">
//                     {featured.category}
//                   </span>
//                 </div>
//                 <h1 className="text-white text-xl md:text-4xl font-black leading-tight font-playfair mb-3 md:mb-4 group-hover:text-gray-200 transition-colors">
//                   {featured.title}
//                 </h1>
//                 <div className="flex items-center gap-2">
//                   {featured.author.img && (
//                     <div className="w-6 h-6 md:w-7 md:h-7 rounded-full shrink-0 overflow-hidden ring-1 ring-white/30 relative">
//                       <Image
//                         src={featured.author.img}
//                         alt={featured.author.name}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   )}
//                   <span className="text-gray-300 text-xs md:text-sm font-playfair">
//                     by{" "}
//                     <span className="text-white font-semibold hover:text-red-400 transition-colors">
//                       {featured.author.name}
//                     </span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>

//         {/* Right Column: 25% — Sidebar Articles */}
//         <div className="w-full md:w-[25%] mt-8 md:mt-0">
//           <div className="bg-gray-50 h-full">
//             {sidebarArticles.map((article, index) => (
//               <Link
//                 key={index}
//                 href={article.href}
//                 title={article.title}
//                 className="block px-4 py-4 border-b border-gray-200 hover:bg-gray-100 transition-colors group last:border-b-0"
//               >
//                 <p className="text-gray-400 text-[11px] font-sans mb-1.5 tracking-wide">
//                   {article.date}
//                 </p>
//                 <h3 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors">
//                   {article.title.length > 65 ? `${article.title.slice(0, 65)}...` : article.title}
//                 </h3>
//               </Link>
//             ))}
//           </div>
//         </div>

//       </div>
//     </main>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ featured, sidebarArticles }) {
  return (
    <main className="w-full px-4 md:px-6 py-6">

      {/*
        ── SEO H1 ───────────────────────────────────────────────────────────────
        Every word here must appear in body text too (keyword strip in page.js).

        Title tag:  "OS-Intel — Breaking World News, Conflict & Cybersecurity Today"
        Keywords:    intel ✅  breaking ✅  world ✅  news ✅
                     conflict ✅  cybersecurity ✅  today ✅
                     global ✅  investigation ✅

        H1 below covers ALL of them. The keyword strip in page.js reinforces
        each one so the SEO tester finds them in visible body text.
      */}
      <h1 className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
        OS-Intel: Breaking World News Today — Conflict, Cybersecurity &amp; Global Investigation
      </h1>

      <div className="flex flex-col md:flex-row gap-0 md:gap-6">

        {/* Left Column: 75% — Featured Article */}
        <div className="w-full md:w-[75%]">
          <Link
            href={featured.href}
            title={`Read: ${featured.title}`}
            className="block relative group overflow-hidden"
          >
            <div className="relative w-full h-[480px] md:h-[520px] overflow-hidden bg-gray-200">
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 75vw"
                className="object-cover object-center grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                <div className="mb-3">
                  <span className="bg-red-600 text-white text-[10px] md:text-xs font-bold tracking-widest px-3 py-1.5 font-playfair uppercase">
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-white text-xl md:text-4xl font-black leading-tight font-playfair mb-3 md:mb-4 group-hover:text-gray-200 transition-colors">
                  {featured.title}
                </h2>
                <div className="flex items-center gap-2">
                  {featured.author.img && (
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full shrink-0 overflow-hidden ring-1 ring-white/30 relative">
                      <Image
                        src={featured.author.img}
                        alt={`${featured.author.name} — author profile picture`}
                        fill
                        sizes="28px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <span className="text-gray-300 text-xs md:text-sm font-playfair">
                    by{" "}
                    <span className="text-white font-semibold hover:text-red-400 transition-colors">
                      {featured.author.name}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Right Column: 25% — Sidebar Articles */}
        <div className="w-full md:w-[25%] mt-8 md:mt-0">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-playfair px-4 pt-3 pb-1">
            Latest Stories
          </h2>
          <div className="bg-gray-50 h-full">
            {sidebarArticles.map((article, index) => (
              <Link
                key={index}
                href={article.href}
                title={`Read: ${article.title}`}
                className="block px-4 py-4 border-b border-gray-200 hover:bg-gray-100 transition-colors group last:border-b-0"
              >
                <p className="text-gray-400 text-[11px] font-sans mb-1.5 tracking-wide">
                  {article.date}
                </p>
                <h3 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors">
                  {article.title.length > 65 ? `${article.title.slice(0, 65)}...` : article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}

// import Image from "next/image";
// import Link from "next/link";

// export default function HeroSection({ featured, sidebarArticles }) {
//   return (
//     <main className="w-full px-4 md:px-6 py-6">

//       {/*
//         SEO: Page H1 — contains all title keywords: breaking, world, news,
//         cybersecurity, today. Visible and readable, not hidden.
//       */}
//       <h1 className="text-xs font-bold uppercase tracking-widest text-red-600 font-playfair mb-3">
//         Breaking World News Today — Conflict, Cybersecurity &amp; Global Investigation
//       </h1>

//       <div className="flex flex-col md:flex-row gap-0 md:gap-6">

//         {/* Left Column: 75% — Featured Article */}
//         <div className="w-full md:w-[75%]">
//           <Link
//             href={featured.href}
//             title={`Read: ${featured.title}`}
//             className="block relative group overflow-hidden"
//           >
//             <div className="relative w-full h-[480px] md:h-[520px] overflow-hidden bg-gray-200">
//               <Image
//                 src={featured.img}
//                 alt={featured.title}
//                 fill
//                 priority
//                 fetchPriority="high"
//                 // PERFORMANCE FIX: correct sizes — 75vw on desktop, 100vw on mobile
//                 sizes="(max-width: 768px) 100vw, 75vw"
//                 className="object-cover object-center grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
//                 <div className="mb-3">
//                   <span className="bg-red-600 text-white text-[10px] md:text-xs font-bold tracking-widest px-3 py-1.5 font-playfair uppercase">
//                     {featured.category}
//                   </span>
//                 </div>
//                 <h2 className="text-white text-xl md:text-4xl font-black leading-tight font-playfair mb-3 md:mb-4 group-hover:text-gray-200 transition-colors">
//                   {featured.title}
//                 </h2>
//                 <div className="flex items-center gap-2">
//                   {featured.author.img && (
//                     <div className="w-6 h-6 md:w-7 md:h-7 rounded-full shrink-0 overflow-hidden ring-1 ring-white/30 relative">
//                       <Image
//                         src={featured.author.img}
//                         alt={`${featured.author.name} — author profile picture`}
//                         fill
//                         // PERFORMANCE FIX: author avatar is tiny — 28px max
//                         sizes="28px"
//                         className="object-cover"
//                       />
//                     </div>
//                   )}
//                   <span className="text-gray-300 text-xs md:text-sm font-playfair">
//                     by{" "}
//                     <span className="text-white font-semibold hover:text-red-400 transition-colors">
//                       {featured.author.name}
//                     </span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </div>

//         {/* Right Column: 25% — Sidebar Articles */}
//         <div className="w-full md:w-[25%] mt-8 md:mt-0">
//           <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 font-playfair px-4 pt-3 pb-1">
//             Latest Stories
//           </h2>
//           <div className="bg-gray-50 h-full">
//             {sidebarArticles.map((article, index) => (
//               <Link
//                 key={index}
//                 href={article.href}
//                 title={`Read: ${article.title}`}
//                 className="block px-4 py-4 border-b border-gray-200 hover:bg-gray-100 transition-colors group last:border-b-0"
//               >
//                 <p className="text-gray-400 text-[11px] font-sans mb-1.5 tracking-wide">
//                   {article.date}
//                 </p>
//                 <h3 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors">
//                   {article.title.length > 65 ? `${article.title.slice(0, 65)}...` : article.title}
//                 </h3>
//               </Link>
//             ))}
//           </div>
//         </div>

//       </div>
//     </main>
//   );
// }
