"use client";

import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

// ── Footer data ──
const featuredArticles = [
  { img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&q=80", date: "MAY 22, 2018", title: "FBI Informant Opens up About Russia uranium Controversy" },
  { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80", date: "MAY 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
  { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", date: "MAY 22, 2018", title: "The Supreme Court considers the Question of the State" },
];

const popularArticles = [
  { img: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=200&q=80", date: "MARCH 12, 2018", title: "The Parade of Aircraft will take Place in New York" },
  { img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80", date: "JANUARY 20, 2018", title: "Justice Dept. Restricts a Common Tactic of Judges" },
  { img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80", date: "MAY 22, 2018", title: "Who is James Mattis? 5 Things to Know about the Secretary" },
];

const categories = ["Arts", "Culture", "Opinion", "Stories", "Tech", "World", "Politics", "Business"];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full bg-white pt-12 pb-6 px-4 md:px-6">

      {/* ── Main footer grid ── */}
     <div className="border-t border-gray-200">
         <div className="flex flex-col mt-15 md:flex-row gap-10 md:gap-10">

        {/* Column 1 — Logo + description (25%) */}
        <div className="w-full md:w-[25%]">
          {/* Logo — matches PaperZilla header style */}
          <a href="#" className="inline-block mb-6">
            <span className="font-playfair text-3xl font-black text-black tracking-tight">
              Paper<span className="italic font-playfair">Z</span>
            </span>
            <span
              className="text-3xl font-black tracking-tight"
              style={{ fontFamily: "var(--font-macondo, serif)" }}
            >
              illa
            </span>
          </a>
          <p className="text-gray-700 text-sm font-serif leading-relaxed">
            Paperzilla is the most advanced highly customizable drag and drop magazine WordPress theme. Speed, security, SEO, social integration and much more – all in one theme. Start writing, publishing, advertising and sharing in minutes.
          </p>
        </div>

        {/* Column 2 — Featured (25%) */}
        <div className="w-full md:w-[25%]">
          <h3 className="text-xl font-black font-serif text-gray-900 mb-6">Featured</h3>
          <div className="flex flex-col gap-5">
            {featuredArticles.map((article, i) => (
              <a key={i} href="#" className="flex gap-3 group items-start">
                {/* Thumbnail */}
                <div className="w-[80px] h-[62px] shrink-0 overflow-hidden bg-gray-200">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-gray-400 text-[11px] font-sans tracking-wide uppercase mb-1">{article.date}</p>
                  <h4 className="text-gray-900 text-sm font-black font-serif leading-snug group-hover:text-red-600 transition-colors">
                    {article.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Column 3 — Popular (25%) */}
        <div className="w-full md:w-[25%]">
          <h3 className="text-xl font-black font-serif text-gray-900 mb-6">Popular</h3>
          <div className="flex flex-col gap-5">
            {popularArticles.map((article, i) => (
              <a key={i} href="#" className="flex gap-3 group items-start">
                {/* Thumbnail */}
                <div className="w-[80px] h-[62px] shrink-0 overflow-hidden bg-gray-200">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-gray-400 text-[11px] font-sans tracking-wide uppercase mb-1">{article.date}</p>
                  <h4 className="text-gray-900 text-sm font-black font-serif leading-snug group-hover:text-red-600 transition-colors">
                    {article.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Column 4 — Categories (25%) */}
        <div className="w-full md:w-[25%]">
          <h3 className="text-xl font-black font-serif text-gray-900 mb-6">Categories</h3>
          <ul className="flex flex-col">
            {categories.map((cat, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="block text-gray-700 text-base font-serif py-2 hover:text-red-600 transition-colors"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
     </div>

      {/* ── Back to top button — fixed bottom right, red square ── */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <span className="text-lg font-bold leading-none"><FiChevronUp /></span>
        </button>
      )}

    </footer>
  );
}