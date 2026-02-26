

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaClock } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function CarouselSection({ carouselItems }) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleWidth = 100 / visibleCount;
  const maxIndex = carouselItems.length - visibleCount;
  const autoRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const startAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex]);

  const goLeft = () => {
    setCarouselIndex((p) => Math.max(0, p - 1));
    startAuto();
  };
  const goRight = () => {
    setCarouselIndex((p) => Math.min(maxIndex, p + 1));
    startAuto();
  };

  return (
    <section className="w-full relative px-4 py-4">
      {/* Left arrow */}
      <button
        onClick={goLeft}
        disabled={carouselIndex === 0}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center transition-all ${
          carouselIndex === 0
            ? "bg-black/20 text-white/20 cursor-not-allowed"
            : "bg-black/50 text-white hover:bg-red-500 cursor-pointer"
        }`}
      >
        <FiChevronLeft size={22} />
      </button>

      {/* Right arrow */}
      <button
        onClick={goRight}
        disabled={carouselIndex >= maxIndex}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center transition-all ${
          carouselIndex >= maxIndex
            ? "bg-black/20 text-white/20 cursor-not-allowed"
            : "bg-black/50 text-white hover:bg-red-500 cursor-pointer"
        }`}
      >
        <FiChevronRight size={22} />
      </button>

      {/* Track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${carouselIndex * visibleWidth}%)` }}
        >
          {carouselItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              title={item.title}
              className="group relative shrink-0 overflow-hidden w-full sm:w-1/2 lg:w-1/3"
            >
              <div className="relative w-full h-[250px] overflow-hidden bg-gray-800">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="bg-red-600 text-white text-[11px] font-bold tracking-widest px-3 py-1 font-sans uppercase">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-1.5 text-gray-300 text-[12px] font-sans mb-2">
                    <FaClock size={10} />
                    <span className="uppercase tracking-wide">{item.date}</span>
                  </div>
                  <h3 className="text-white text-xl font-black font-serif leading-tight group-hover:text-gray-200 transition-colors">
                    {item.title.length > 80 ? `${item.title.slice(0, 80)}...` : item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}