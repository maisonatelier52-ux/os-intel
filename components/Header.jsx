// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

// const flashNewsItems = [
//   "Cities Prepare for Major Infrastructure Overhaul",
//   "Experiment Shows the Dangers of Hacking Robots",
//   "Breakfast with 'Friends': A Cultural Deep Dive",
//   "Expulsion is the New Norm in Modern Politics",
//   "Scientists Discover New Deep-Sea Species",
//   "Global Markets React to Central Bank Decisions",
// ];

// const navLinks = ["CONTACT US", "ABOUT US", "WIDGETS", "TYPOGRAPHY"];

// const categories = [
//   "Home",
//   "World",
//   "War-conflict",
//   "Geo-politics",
//   "Cybersecurity",
//   "Dark-Web",
//   "Investigation",
// ];

// export default function Header() {
//   const [topMenuOpen, setTopMenuOpen] = useState(false);
//   const [bottomMenuOpen, setBottomMenuOpen] = useState(false);

//   return (
//     <header className="w-full px-4">
//       <div className="border-b border-gray-300">

        
//       {/* ════════════════════════════════════════
//           ROW 1 — Flash News + Nav Links
//       ════════════════════════════════════════ */}
//       <div className="flex items-center justify-between px-4 md:px-6 py-2 border-b border-gray-200 text-sm overflow-hidden">

//         {/* Left: FLASHNEWS + marquee */}
//         <div className="flex items-center gap-2 md:gap-3 overflow-hidden max-w-[70%] md:max-w-[55%] min-w-0">
//           <span className="text-red-600 font-bold whitespace-nowrap tracking-wide shrink-0 font-playfair text-xs md:text-sm">
//             FlashNews:
//           </span>
//           <div className="overflow-hidden whitespace-nowrap flex-1 min-w-0">
//             <div className="marquee-track">
//               {[...flashNewsItems, ...flashNewsItems].map((item, index) => (
//                 <span key={index} className="inline-flex items-center whitespace-nowrap">
//                   <span className="text-gray-700 cursor-pointer hover:text-red-600 transition-colors duration-200 text-xs md:text-sm px-2 md:px-3 font-playfair">
//                     {item}
//                   </span>
//                   <span className="text-gray-300 select-none">|</span>
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Desktop: nav links */}
//         <div className="hidden md:flex items-center gap-6 shrink-0 ml-6">
//           {navLinks.map((link) => (
//             <a
//               key={link}
//               href="#"
//               className="font-semibold text-xs tracking-widest hover:text-gray-500 transition-colors whitespace-nowrap font-playfair"
//             >
//               {link}
//             </a>
//           ))}
//         </div>

//         {/* Mobile: hamburger for top nav */}
//         <button
//           className="md:hidden shrink-0 ml-3 text-gray-800 hover:text-gray-500 transition-colors"
//           onClick={() => { setTopMenuOpen(!topMenuOpen); setBottomMenuOpen(false); }}
//           aria-label="Toggle navigation menu"
//         >
//           {topMenuOpen ? <RiCloseLine size={22} /> : <RiMenu3Line size={22} />}
//         </button>
//       </div>

//       {/* Mobile: Top drawer — nav links */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           topMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="flex flex-col items-center py-4 gap-5 border-b border-gray-200 bg-white">
//           {navLinks.map((link) => (
//             <a
//               key={link}
//               href="#"
//               className="text-gray-800 font-semibold text-sm tracking-widest hover:text-red-600 transition-colors font-playfair"
//               onClick={() => setTopMenuOpen(false)}
//             >
//               {link}
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* ════════════════════════════════════════
//           ROW 2 — Logo + Ad Banner Image
//       ════════════════════════════════════════ */}
//       <div className="flex flex-col md:flex-row md:items-center px-4 md:px-6 py-4 border-b border-gray-200 gap-4 md:gap-0">

//         {/* Logo */}
//         <div className="w-full md:w-[30%] flex items-center justify-center md:justify-start">
//           <a href="#" className="flex items-baseline">
//             <span className="text-5xl md:text-4xl font-black text-black tracking-tight font-playfair">
//               Paper
//             </span>
//             <span className="text-5xl md:text-4xl font-black text-black tracking-tight italic font-playfair">
//               Z
//             </span>
//             <span className="text-5xl md:text-4xl text-black tracking-tight font-macondo">
//               illa
//             </span>
//           </a>
//         </div>

//         {/* Ad Banner — replaced with image */}
//        <div className="w-full md:w-[70%] flex items-center justify-center">
//           <Link
//             href="https://www.read-more-about.com/"
//             title="visit read more about website"
//             target="_blank"
//             className="block w-full md:max-w-2xl h-[70px] md:h-[90px] overflow-hidden"
//           >
//             <Image
//               src="/images/read-more-about-ad-banner.webp"
//               alt="Advertisement 728x90"
//               width={1200}
//               height={90}
//               className="w-full h-full object-cover object-center"
//             />
//           </Link>
//         </div>
//       </div>

//       {/* ════════════════════════════════════════
//           ROW 3 — Categories + Search
//       ════════════════════════════════════════ */}
//       <div className="flex items-center justify-between px-4 md:px-6 py-3">

//         {/* Desktop: category links */}
//         <nav className="hidden md:flex items-center gap-7">
//           {categories.map((cat, index) => (
//             <a
//               key={cat}
//               href={`/${cat.toLowerCase()}`}
//               className={`text-sm font-bold tracking-wide transition-colors hover:text-gray-500 relative group font-playfair ${
//                 index === 0 ? "text-black" : "text-gray-800"
//               }`}
//             >
//               {cat}
//               {index === 0 && (
//                 <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-red-600" />
//               )}
//               {index !== 0 && (
//                 <span className="absolute -bottom-3 left-0 h-0.5 bg-red-600 w-0 group-hover:w-full transition-all duration-300 ease-out" />
//               )}
//             </a>
//           ))}
//         </nav>

//         {/* Mobile: "Home" label */}
//         <span className="md:hidden text-sm font-bold text-black font-playfair relative">
//           Home
//           <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-red-600" />
//         </span>

//         {/* Right icons */}
//         <div className="flex items-center gap-4">
//           <button className="text-red-600 hover:text-red-700 transition-colors">
//             <FaSearch size={18} />
//           </button>

//           <button
//             className="md:hidden text-gray-800 hover:text-red-600 transition-colors"
//             onClick={() => { setBottomMenuOpen(!bottomMenuOpen); setTopMenuOpen(false); }}
//             aria-label="Toggle categories menu"
//           >
//             {bottomMenuOpen ? <RiCloseLine size={22} /> : <RiMenu3Line size={22} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile: Bottom drawer — categories */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           bottomMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="bg-[#1a1a1a]">
//           {categories.map((cat, index) => (
//             <a
//               key={cat}
//               href="#"
//               className="flex items-center justify-between px-6 py-4 border-b border-gray-700 text-white hover:text-red-400 transition-colors font-playfair font-bold text-sm tracking-wide"
//               onClick={() => setBottomMenuOpen(false)}
//             >
//               <span className={index === 0 ? "text-white" : "text-gray-200"}>
//                 {cat}
//               </span>
//               {(cat === "Home" || cat === "Features" || cat === "Categories" || cat === "Theme Functionality") && (
//                 <span className="text-gray-400 text-xs">›</span>
//               )}
//             </a>
//           ))}
//         </div>
//       </div>

//       </div>


//     </header>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";
import articlesData from "../public/data/articles.json";

// ── Static data derived from articles.json ────────────────────────────────────

/** Parse DD/MM/YYYY → Date */
function parseDate(str) {
  const [d, m, y] = str.split("/");
  return new Date(Number(y), Number(m) - 1, Number(d));
}

/** Flat sorted list of all articles (newest first) */
const ALL_ARTICLES = Object.entries(articlesData)
  .flatMap(([category, articles]) =>
    Array.isArray(articles)
      ? articles.map((a) => ({ ...a, category }))
      : []
  )
  .sort((a, b) => parseDate(b.date) - parseDate(a.date));

/** Category nav — "Home" first, then each category from the JSON */
const CATEGORIES = [
  "Home",
  ...Object.keys(articlesData).map(
    (cat) => cat.charAt(0).toUpperCase() + cat.slice(1)
  ),
];

const navLinks = ["CONTACT US", "ABOUT US", "WIDGETS", "TYPOGRAPHY"];

const getCategoryHref = (cat) =>
  cat === "Home" ? "/" : `/${cat.toLowerCase()}`;

// ── Component ─────────────────────────────────────────────────────────────────

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [topMenuOpen, setTopMenuOpen] = useState(false);
  const [bottomMenuOpen, setBottomMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchInputRef = useRef(null);
  const searchWrapperRef = useRef(null);

  // Close mobile menus / search on route change
  useEffect(() => {
    setTopMenuOpen(false);
    setBottomMenuOpen(false);
    closeSearch();
  }, [pathname]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(e.target)
      ) {
        closeSearch();
      }
    };
    if (searchOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [searchOpen]);

  // ── Search helpers ──────────────────────────────────────────────────────────

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleSearchChange = (e) => {
    const q = e.target.value;
    setSearchQuery(q);
    if (q.trim().length < 2) {
      setSearchResults([]);
      return;
    }
    const lower = q.toLowerCase();
    setSearchResults(
      ALL_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(lower) ||
          (a.excerpt || "").toLowerCase().includes(lower)
      ).slice(0, 5)
    );
  };

  const handleResultClick = (category, slug) => {
    closeSearch();
    setTimeout(() => router.push(`/${category}/${slug}`), 10);
  };

  const highlightMatch = (text, query) => {
    if (!query.trim()) return text;
    const regex = new RegExp(
      `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi"
    );
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <mark
          key={i}
          className="bg-red-100 text-red-700 rounded px-0.5 font-semibold not-italic"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const isActive = (cat) =>
    cat === "Home"
      ? pathname === "/"
      : pathname === `/${cat.toLowerCase()}` ||
        pathname.startsWith(`/${cat.toLowerCase()}/`);

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <header className="w-full px-4">
      <div className="border-b border-gray-300 relative">

        {/* ══════════════════════════════════════════
            ROW 1 — Flash News + Nav Links
        ══════════════════════════════════════════ */}
        <div className="flex items-center justify-between px-4 md:px-6 py-2 border-b border-gray-200 text-sm overflow-hidden">

          {/* Flash news marquee */}
          <div className="flex items-center gap-2 md:gap-3 overflow-hidden max-w-[70%] md:max-w-[55%] min-w-0">
            <span className="text-red-600 font-bold whitespace-nowrap tracking-wide shrink-0 font-playfair text-xs md:text-sm">
              FlashNews:
            </span>
            <div className="overflow-hidden whitespace-nowrap flex-1 min-w-0">
              <div className="marquee-track">
                {[...ALL_ARTICLES.slice(0, 5), ...ALL_ARTICLES.slice(0, 5)].map((article, i) => (
                  <span key={i} className="inline-flex items-center whitespace-nowrap">
                    <Link
                      href={`/${article.category}/${article.slug}`}
                      title={article.title}
                      className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-xs md:text-sm px-2 md:px-3 font-playfair"
                    >
                      {article.title}
                    </Link>
                    <span className="text-gray-300 select-none">|</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 shrink-0 ml-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-semibold text-xs tracking-widest hover:text-gray-500 transition-colors whitespace-nowrap font-playfair"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile: hamburger for top nav */}
          <button
            className="md:hidden shrink-0 ml-3 text-gray-800 hover:text-gray-500 transition-colors"
            onClick={() => {
              setTopMenuOpen(!topMenuOpen);
              setBottomMenuOpen(false);
            }}
            aria-label="Toggle navigation menu"
          >
            {topMenuOpen ? <RiCloseLine size={22} /> : <RiMenu3Line size={22} />}
          </button>
        </div>

        {/* Mobile: top drawer — nav links */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            topMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center py-4 gap-5 border-b border-gray-200 bg-white">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-800 font-semibold text-sm tracking-widest hover:text-red-600 transition-colors font-playfair"
                onClick={() => setTopMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            ROW 2 — Logo + Ad Banner
        ══════════════════════════════════════════ */}
        <div className="flex flex-col md:flex-row md:items-center px-4 md:px-6 py-4 border-b border-gray-200 gap-4 md:gap-0">

          {/* Logo — OL-Intel */}
          <div className="w-full md:w-[30%] flex items-center justify-center md:justify-start">
            <Link href="/" className="flex items-baseline" title="OL-Intel — Home">
              <span className="text-5xl md:text-4xl font-black text-black tracking-tight font-playfair">
                OL
              </span>
              <span className="text-5xl md:text-4xl font-black text-black tracking-tight italic font-playfair">
                -
              </span>
              <span className="text-5xl md:text-4xl text-black tracking-tight font-macondo">
                Intel
              </span>
            </Link>
          </div>

          {/* Ad Banner */}
          <div className="w-full md:w-[70%] flex items-center justify-center">
            <Link
              href="https://www.read-more-about.com/"
              title="Visit Read More About"
              target="_blank"
              className="block w-full md:max-w-2xl h-[70px] md:h-[90px] overflow-hidden"
            >
              <Image
                src="/images/read-more-about-ad-banner.webp"
                alt="Advertisement 728x90"
                width={1200}
                height={90}
                className="w-full h-full object-cover object-center"
              />
            </Link>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            ROW 3 — Categories + Search
        ══════════════════════════════════════════ */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3 overflow-visible">

          {/* LEFT — Desktop category nav */}
          <nav className="hidden md:flex items-center gap-7">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={getCategoryHref(cat)}
                title={`${cat} news`}
                className={`text-sm font-bold tracking-wide transition-colors hover:text-gray-500 relative group font-playfair ${
                  isActive(cat) ? "text-red-600" : "text-gray-800"
                }`}
              >
                {cat}
                {isActive(cat) ? (
                  <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-red-600" />
                ) : (
                  <span className="absolute -bottom-3 left-0 h-0.5 bg-red-600 w-0 group-hover:w-full transition-all duration-300 ease-out" />
                )}
              </Link>
            ))}
          </nav>

          {/* LEFT — Mobile: active category label */}
          <span className="md:hidden text-sm font-bold text-black font-playfair relative">
            {CATEGORIES.find((c) => isActive(c)) || "Home"}
            <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-red-600" />
          </span>

          {/* RIGHT — Search */}
          <div className="flex items-center gap-4">

            {/* ── DESKTOP SEARCH — dropdown anchored below icon ── */}
            <div className="relative hidden md:flex items-center" ref={searchWrapperRef}>

              {/* Search icon button */}
              <button
                type="button"
                onClick={() => setSearchOpen((prev) => !prev)}
                className="flex items-center justify-center text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                aria-label="Toggle search"
              >
                <FaSearch size={18} />
              </button>

              {/* Dropdown box — anchored to right, appears below icon */}
              {searchOpen && (
                <div className="absolute top-full right-0 mt-3 w-[380px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">

                  {/* Input row */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
                    <FaSearch className="text-red-600 flex-shrink-0" size={14} />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onKeyDown={(e) => e.key === "Escape" && closeSearch()}
                      placeholder="Search articles..."
                      className="flex-1 text-sm outline-none bg-transparent text-black placeholder-gray-400 font-playfair"
                      aria-label="Search articles"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => { setSearchQuery(""); setSearchResults([]); searchInputRef.current?.focus(); }}
                        className="text-gray-400 hover:text-red-600 transition-colors flex-shrink-0"
                        aria-label="Clear search"
                      >
                        <IoClose size={18} />
                      </button>
                    )}
                  </div>

                  {/* Results — max 5 */}
                  {searchResults.length > 0 && (
                    <ul className="max-h-[320px] overflow-y-auto">
                      {searchResults.map((article) => (
                        <li
                          key={`${article.category}-${article.slug}`}
                          className="border-b border-gray-50 last:border-0"
                        >
                          <button
                            type="button"
                            onClick={() => handleResultClick(article.category, article.slug)}
                            className="w-full text-left px-4 py-3 hover:bg-red-50 transition-colors group flex items-center gap-3"
                          >
                            {/* Title */}
                            <span className="flex-1 text-sm font-medium text-gray-800 group-hover:text-red-600 transition-colors leading-snug line-clamp-2 font-playfair">
                              {highlightMatch(article.title, searchQuery)}
                            </span>
                            {/* Category badge at end */}
                            <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded">
                              {article.category}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* No results */}
                  {searchQuery.trim().length >= 2 && searchResults.length === 0 && (
                    <div className="px-4 py-6 text-center">
                      <p className="text-sm text-gray-500 font-playfair">
                        No articles found for{" "}
                        <span className="font-semibold text-gray-700">"{searchQuery}"</span>
                      </p>
                    </div>
                  )}

                  {/* Initial hint */}
                  {searchQuery.trim().length < 2 && (
                    <div className="px-4 py-5 text-center">
                      <p className="text-xs text-gray-400 font-playfair">
                        Type to search articles…
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* ── MOBILE: search icon ── */}
            <button
              className="md:hidden text-red-600 hover:text-red-700 transition-colors"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
            >
              <FaSearch size={18} />
            </button>

            {/* ── MOBILE: categories hamburger ── */}
            <button
              className="md:hidden text-gray-800 hover:text-red-600 transition-colors"
              onClick={() => {
                setBottomMenuOpen(!bottomMenuOpen);
                setTopMenuOpen(false);
              }}
              aria-label="Toggle categories menu"
            >
              {bottomMenuOpen ? <RiCloseLine size={22} /> : <RiMenu3Line size={22} />}
            </button>

          </div>
        </div>

        {/* Mobile: categories drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            bottomMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#1a1a1a]">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={getCategoryHref(cat)}
                title={`${cat} news`}
                className={`flex items-center justify-between px-6 py-4 border-b border-gray-700 transition-colors font-playfair font-bold text-sm tracking-wide ${
                  isActive(cat)
                    ? "text-red-400"
                    : "text-gray-200 hover:text-red-400"
                }`}
                onClick={() => setBottomMenuOpen(false)}
              >
                <span>{cat}</span>
                {isActive(cat) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                )}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* ── Mobile full-screen search overlay ──────────────────────────────── */}
      {searchOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60 flex flex-col">
          <div className="bg-white px-4 pt-4 pb-3 shadow-lg">
            <div className="flex items-center gap-3 border-b-2 border-red-600 pb-2">
              <FaSearch className="h-4 w-4 text-red-600 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={(e) => e.key === "Escape" && closeSearch()}
                placeholder="Search articles..."
                autoFocus
                className="flex-1 text-base outline-none bg-transparent text-black placeholder-gray-400"
                aria-label="Search articles"
              />
              <button
                type="button"
                onClick={closeSearch}
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label="Close search"
              >
                <IoClose className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="bg-white overflow-y-auto flex-1">
            {searchResults.length > 0 && (
              <>
                {searchResults.map((article) => (
                  <button
                    key={`${article.category}-${article.slug}`}
                    type="button"
                    onClick={() => handleResultClick(article.category, article.slug)}
                    onTouchStart={() => handleResultClick(article.category, article.slug)}
                    className="w-full text-left px-4 py-4 active:bg-red-50 border-b border-gray-100 group flex items-center gap-3"
                  >
                    <span className="flex-1 text-sm font-semibold text-gray-800 group-hover:text-red-600 leading-snug line-clamp-2">
                      {highlightMatch(article.title, searchQuery)}
                    </span>
                    <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded">
                      {article.category}
                    </span>
                  </button>
                ))}
                <p className="px-4 py-3 text-xs text-gray-400 bg-gray-50">
                  {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} found
                </p>
              </>
            )}

            {searchQuery.trim().length >= 2 && searchResults.length === 0 && (
              <div className="px-4 py-10 text-center">
                <p className="text-sm text-gray-500">
                  No articles found for{" "}
                  <span className="font-semibold text-gray-700">"{searchQuery}"</span>
                </p>
              </div>
            )}

            {searchQuery.trim().length < 2 && (
              <div className="px-4 py-10 text-center">
                <p className="text-sm text-gray-400">
                  Type at least 2 characters to search…
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}