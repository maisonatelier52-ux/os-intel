"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const flashNewsItems = [
  "Cities Prepare for Major Infrastructure Overhaul",
  "Experiment Shows the Dangers of Hacking Robots",
  "Breakfast with 'Friends': A Cultural Deep Dive",
  "Expulsion is the New Norm in Modern Politics",
  "Scientists Discover New Deep-Sea Species",
  "Global Markets React to Central Bank Decisions",
];

const navLinks = ["CONTACT US", "ABOUT US", "WIDGETS", "TYPOGRAPHY"];

const categories = [
  "Home",
  "World",
  "War-conflict",
  "Geo-politics",
  "Cybersecurity",
  "Dark-Web",
  "Investigation",
];

export default function Header() {
  const [topMenuOpen, setTopMenuOpen] = useState(false);
  const [bottomMenuOpen, setBottomMenuOpen] = useState(false);

  return (
    <header className="w-full px-4">
      <div className="border-b border-gray-300">

        
      {/* ════════════════════════════════════════
          ROW 1 — Flash News + Nav Links
      ════════════════════════════════════════ */}
      <div className="flex items-center justify-between px-4 md:px-6 py-2 border-b border-gray-200 text-sm overflow-hidden">

        {/* Left: FLASHNEWS + marquee */}
        <div className="flex items-center gap-2 md:gap-3 overflow-hidden max-w-[70%] md:max-w-[55%] min-w-0">
          <span className="text-red-600 font-bold whitespace-nowrap tracking-wide shrink-0 font-playfair text-xs md:text-sm">
            FlashNews:
          </span>
          <div className="overflow-hidden whitespace-nowrap flex-1 min-w-0">
            <div className="marquee-track">
              {[...flashNewsItems, ...flashNewsItems].map((item, index) => (
                <span key={index} className="inline-flex items-center whitespace-nowrap">
                  <span className="text-gray-700 cursor-pointer hover:text-red-600 transition-colors duration-200 text-xs md:text-sm px-2 md:px-3 font-playfair">
                    {item}
                  </span>
                  <span className="text-gray-300 select-none">|</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: nav links */}
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
          onClick={() => { setTopMenuOpen(!topMenuOpen); setBottomMenuOpen(false); }}
          aria-label="Toggle navigation menu"
        >
          {topMenuOpen ? <RiCloseLine size={22} /> : <RiMenu3Line size={22} />}
        </button>
      </div>

      {/* Mobile: Top drawer — nav links */}
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

      {/* ════════════════════════════════════════
          ROW 2 — Logo + Ad Banner Image
      ════════════════════════════════════════ */}
      <div className="flex flex-col md:flex-row md:items-center px-4 md:px-6 py-4 border-b border-gray-200 gap-4 md:gap-0">

        {/* Logo */}
        <div className="w-full md:w-[30%] flex items-center justify-center md:justify-start">
          <a href="#" className="flex items-baseline">
            <span className="text-5xl md:text-4xl font-black text-black tracking-tight font-playfair">
              Paper
            </span>
            <span className="text-5xl md:text-4xl font-black text-black tracking-tight italic font-playfair">
              Z
            </span>
            <span className="text-5xl md:text-4xl text-black tracking-tight font-macondo">
              illa
            </span>
          </a>
        </div>

        {/* Ad Banner — replaced with image */}
       <div className="w-full md:w-[70%] flex items-center justify-center">
          <Link
            href="https://www.read-more-about.com/"
            title="visit read more about website"
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

      {/* ════════════════════════════════════════
          ROW 3 — Categories + Search
      ════════════════════════════════════════ */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3">

        {/* Desktop: category links */}
        <nav className="hidden md:flex items-center gap-7">
          {categories.map((cat, index) => (
            <a
              key={cat}
              href={`/${cat.toLowerCase()}`}
              className={`text-sm font-bold tracking-wide transition-colors hover:text-gray-500 relative group font-playfair ${
                index === 0 ? "text-black" : "text-gray-800"
              }`}
            >
              {cat}
              {index === 0 && (
                <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-red-600" />
              )}
              {index !== 0 && (
                <span className="absolute -bottom-3 left-0 h-0.5 bg-red-600 w-0 group-hover:w-full transition-all duration-300 ease-out" />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile: "Home" label */}
        <span className="md:hidden text-sm font-bold text-black font-playfair relative">
          Home
          <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-red-600" />
        </span>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="text-red-600 hover:text-red-700 transition-colors">
            <FaSearch size={18} />
          </button>

          <button
            className="md:hidden text-gray-800 hover:text-red-600 transition-colors"
            onClick={() => { setBottomMenuOpen(!bottomMenuOpen); setTopMenuOpen(false); }}
            aria-label="Toggle categories menu"
          >
            {bottomMenuOpen ? <RiCloseLine size={22} /> : <RiMenu3Line size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile: Bottom drawer — categories */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          bottomMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#1a1a1a]">
          {categories.map((cat, index) => (
            <a
              key={cat}
              href="#"
              className="flex items-center justify-between px-6 py-4 border-b border-gray-700 text-white hover:text-red-400 transition-colors font-playfair font-bold text-sm tracking-wide"
              onClick={() => setBottomMenuOpen(false)}
            >
              <span className={index === 0 ? "text-white" : "text-gray-200"}>
                {cat}
              </span>
              {(cat === "Home" || cat === "Features" || cat === "Categories" || cat === "Theme Functionality") && (
                <span className="text-gray-400 text-xs">›</span>
              )}
            </a>
          ))}
        </div>
      </div>

      </div>


    </header>
  );
}





