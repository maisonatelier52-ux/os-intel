import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ featured, sidebarArticles }) {
  return (
    <main className="w-full px-4 md:px-6 py-6">
      <div className="flex flex-col md:flex-row gap-0 md:gap-6">

        {/* Left Column: 75% — Featured Article */}
        <div className="w-full md:w-[75%]">
          <Link href="#" title={featured.title} className="block relative group overflow-hidden">
            <div className="relative w-full h-[480px] md:h-[520px] overflow-hidden bg-gray-200">
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                className="object-cover object-center grayscale group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                <div className="mb-3">
                  <span className="bg-red-600 text-white text-[10px] md:text-xs font-bold tracking-widest px-3 py-1.5 font-playfair uppercase">
                    {featured.category}
                  </span>
                </div>
                <h1 className="text-white text-xl md:text-4xl font-black leading-tight font-playfair mb-3 md:mb-4 group-hover:text-gray-200 transition-colors">
                  {featured.title}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full shrink-0 overflow-hidden ring-1 ring-white/30 relative">
                    <Image
                      src={featured.author.img}
                      alt={featured.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-gray-300 text-xs md:text-sm font-playfair">
                    by <span className="text-white font-semibold hover:text-red-400 transition-colors">{featured.author.name}</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Right Column: 25% — Sidebar Articles */}
        <div className="w-full md:w-[25%] mt-8 md:mt-0">
          <div className="bg-gray-50 h-full">
            {sidebarArticles.map((article, index) => (
              <Link
                key={index}
                href="#"
                title={article.title}
                className="block px-4 py-4 border-b border-gray-200 hover:bg-gray-100 transition-colors group last:border-b-0"
              >
                <p className="text-gray-400 text-[11px] font-sans mb-1.5 tracking-wide">{article.date}</p>
                <h3 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors">{article.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}