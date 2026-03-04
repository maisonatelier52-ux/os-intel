


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronUp } from "react-icons/fi";
import articlesData from "../public/data/articles.json";

function parseDate(str) {
  const [d, m, y] = str.split("/");
  return new Date(Number(y), Number(m) - 1, Number(d));
}

const ALL_ARTICLES = Object.entries(articlesData)
  .flatMap(([category, articles]) =>
    Array.isArray(articles)
      ? articles.map((a) => ({ ...a, category }))
      : []
  )
  .sort((a, b) => parseDate(b.date) - parseDate(a.date));

const featuredArticles = ALL_ARTICLES.slice(0, 3);
const popularArticles = ALL_ARTICLES.slice(3, 6);

const CATEGORIES = Object.keys(articlesData).map(
  (cat) => cat.charAt(0).toUpperCase() + cat.slice(1)
);

function formatDate(str) {
  const date = parseDate(str);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).toUpperCase();
}

function ArticleCard({ article }) {
  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      title={`Read: ${article.title}`}
      className="flex gap-3 group items-start"
    >
      <div className="w-[80px] h-[62px] shrink-0 overflow-hidden bg-gray-200 relative">
        <img
          src={article.image}
          alt={article.imageAlt || article.title}
          width={80}
          height={62}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-gray-400 text-[11px] font-sans tracking-wide uppercase mb-1">
          {formatDate(article.date)}
        </p>
        <h3 className="text-gray-900 text-xs font-black font-serif leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
          {article.title.length > 50 ? `${article.title.slice(0, 50)}...` : article.title}
        </h3>
      </div>
    </Link>
  );
}

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

      <div className="border-t border-gray-200">
        <div className="flex flex-col mt-10 md:flex-row gap-10 md:gap-8">

          {/* Column 1 — Logo + About (25%) */}
          <div className="w-full md:w-[25%]">
            <Link
              href="/"
              title="OS-Intel — Home: World News, Conflict & Cybersecurity"
              className="inline-flex items-baseline mb-5"
            >
              <span className="text-3xl font-black text-black tracking-tight font-playfair">OS</span>
              <span className="text-3xl font-black text-black tracking-tight italic font-playfair">-</span>
              <span className="text-3xl text-black tracking-tight" style={{ fontFamily: "var(--font-macondo, serif)" }}>
                Intel
              </span>
            </Link>
            <p className="text-gray-600 text-sm font-serif leading-relaxed">
              OS-Intel delivers sharp, independent coverage of breaking world news, conflict zones,
              cybersecurity, geo-politics, dark web investigations, and more — updated daily.
            </p>
          </div>

          {/* Column 2 — Featured (25%) */}
          <div className="w-full md:w-[25%]">
            <h2 className="text-xl font-black font-serif text-gray-900 mb-6 pb-2 border-b-2 border-red-600 inline-block">
              Featured
            </h2>
            <div className="flex flex-col gap-5">
              {featuredArticles.map((article) => (
                <ArticleCard key={`${article.category}-${article.slug}`} article={article} />
              ))}
            </div>
          </div>

          {/* Column 3 — Popular (25%) */}
          <div className="w-full md:w-[25%]">
            <h2 className="text-xl font-black font-serif text-gray-900 mb-6 pb-2 border-b-2 border-red-600 inline-block">
              Popular
            </h2>
            <div className="flex flex-col gap-5">
              {popularArticles.map((article) => (
                <ArticleCard key={`${article.category}-${article.slug}`} article={article} />
              ))}
            </div>
          </div>

          {/* Column 4 — Categories (25%) */}
          <div className="w-full md:w-[25%]">
            <h2 className="text-xl font-black font-serif text-gray-900 mb-6 pb-2 border-b-2 border-red-600 inline-block">
              Categories
            </h2>
            <ul className="flex flex-col divide-y divide-gray-100">
              {CATEGORIES.map((cat, i) => (
                <li key={i}>
                  <Link
                    href={`/${cat.toLowerCase()}`}
                    title={`${cat} news — Latest ${cat.replace(/-/g, " ")} stories | OS-Intel`}
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

      {/* Bottom bar */}
      <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-400 font-sans">
          © {new Date().getFullYear()} OS-Intel. All rights reserved.
        </p>
        <div className="flex items-center gap-5">

           <Link
            href="/about"
            title="OS-Intel About Us"
            className="text-xs text-gray-400 hover:text-red-600 transition-colors font-sans"
          >
            About Us
          </Link>
          <Link
            href="/privacy-policy"
            title="OS-Intel Privacy Policy"
            className="text-xs text-gray-400 hover:text-red-600 transition-colors font-sans"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-condition"
            title="OS-Intel Terms of Use"
            className="text-xs text-gray-400 hover:text-red-600 transition-colors font-sans"
          >
            Terms of Use
          </Link>
          <a
            href="/contact"
            title="Contact OS-Intel"
            className="text-xs text-gray-400 hover:text-red-600 transition-colors font-sans"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Back to top */}
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
