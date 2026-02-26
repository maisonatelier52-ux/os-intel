

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiChevronUp } from "react-icons/fi";
import articlesData from "../public/data/articles.json";

// ── Parse DD/MM/YYYY → Date for sorting ──
function parseDate(str) {
  const [d, m, y] = str.split("/");
  return new Date(Number(y), Number(m) - 1, Number(d));
}

// ── Flatten all articles from all categories, sorted newest first ──
const ALL_ARTICLES = Object.entries(articlesData)
  .flatMap(([category, articles]) =>
    Array.isArray(articles)
      ? articles.map((a) => ({ ...a, category }))
      : []
  )
  .sort((a, b) => parseDate(b.date) - parseDate(a.date));

// ── Latest 3 → Featured, next 3 → Popular ──
const featuredArticles = ALL_ARTICLES.slice(0, 3);
const popularArticles = ALL_ARTICLES.slice(3, 6);

// ── All categories from the JSON ──
const CATEGORIES = Object.keys(articlesData).map(
  (cat) => cat.charAt(0).toUpperCase() + cat.slice(1)
);

// ── Format date nicely ──
function formatDate(str) {
  const date = parseDate(str);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).toUpperCase();
}

// ── Article card used in Featured & Popular columns ──
function ArticleCard({ article }) {
  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      className="flex gap-3 group items-start"
    >
      {/* Thumbnail */}
      <div className="w-[80px] h-[62px] shrink-0 overflow-hidden bg-gray-200">
        <img
          src={article.image}
          alt={article.imageAlt || article.title}
          className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-gray-400 text-[11px] font-sans tracking-wide uppercase mb-1">
          {formatDate(article.date)}
        </p>
        <h4 className="text-gray-900 text-xs font-black font-serif leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
           {article.title.length > 50 ? `${article.title.slice(0, 50)}...` : article.title}
        </h4>
      </div>
    </Link>
  );
}

// ── Main Footer Component ──
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
        <div className="flex flex-col mt-10 md:flex-row gap-10 md:gap-8">

          {/* ── Column 1 — OS-Intel Logo + Ad + About (25%) ── */}
          <div className="w-full md:w-[25%]">

            {/* Logo — matches Header style exactly */}
            <Link href="/" className="inline-flex items-baseline mb-5">
              <span className="text-3xl font-black text-black tracking-tight font-playfair">
                OS
              </span>
              <span className="text-3xl font-black text-black tracking-tight italic font-playfair">
                -
              </span>
              <span
                className="text-3xl text-black tracking-tight"
                style={{ fontFamily: "var(--font-macondo, serif)" }}
              >
                Intel
              </span>
            </Link>

            

            {/* About OS-Intel */}
            <p className="text-gray-600 text-sm font-serif leading-relaxed">
              OS-Intel delivers sharp, independent coverage across world affairs, conflict zones, geo-politics, cybersecurity, dark web investigations, and more. We cut through the noise to bring you news that matters — accurate, in-depth, and always timely.
            </p>
          </div>

          {/* ── Column 2 — Featured (25%) ── */}
          <div className="w-full md:w-[25%]">
            <h3 className="text-xl font-black font-serif text-gray-900 mb-6 pb-2 border-b-2 border-red-600 inline-block">
              Featured
            </h3>
            <div className="flex flex-col gap-5">
              {featuredArticles.map((article) => (
                <ArticleCard key={`${article.category}-${article.slug}`} article={article} />
              ))}
            </div>
          </div>

          {/* ── Column 3 — Popular (25%) ── */}
          <div className="w-full md:w-[25%]">
            <h3 className="text-xl font-black font-serif text-gray-900 mb-6 pb-2 border-b-2 border-red-600 inline-block">
              Popular
            </h3>
            <div className="flex flex-col gap-5">
              {popularArticles.map((article) => (
                <ArticleCard key={`${article.category}-${article.slug}`} article={article} />
              ))}
            </div>
          </div>

          {/* ── Column 4 — Categories (25%) ── */}
          <div className="w-full md:w-[25%]">
            <h3 className="text-xl font-black font-serif text-gray-900 mb-6 pb-2 border-b-2 border-red-600 inline-block">
              Categories
            </h3>
            <ul className="flex flex-col divide-y divide-gray-100">
              {CATEGORIES.map((cat, i) => (
                <li key={i}>
                  <Link
                    href={`/${cat.toLowerCase()}`}
                    className="flex items-center justify-between py-2.5 text-gray-700 text-sm font-serif hover:text-red-600 transition-colors group"
                  >
                    <span>{cat}</span>
                    <span className="text-gray-300 group-hover:text-red-400 transition-colors text-xs">›</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-400 font-sans">
          © {new Date().getFullYear()} OS-Intel. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {["Privacy Policy", "Terms of Use", "Contact Us"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-gray-400 hover:text-red-600 transition-colors font-sans"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* ── Back to top button ── */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <FiChevronUp className="text-lg font-bold" />
        </button>
      )}

    </footer>
  );
}