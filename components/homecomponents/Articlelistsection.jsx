import Image from "next/image";
import Link from "next/link";
import { FaClock } from "react-icons/fa";

export default function ArticleListSection({ listArticles, mostPopular, latestNews }) {
  return (
    <section className="w-full px-4 md:px-6 pb-10">
      <div className="flex flex-col md:flex-row gap-8">

        {/* Left 75%: Article list + Ad banner */}
        <div className="w-full md:w-[75%] flex flex-col gap-0">
          {listArticles.map((article, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row py-6">
                <div className="relative w-full sm:w-1/2 h-[270px] shrink-0 overflow-hidden group">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-1 font-serif uppercase">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-between pl-0 sm:pl-5 pt-4 sm:pt-0">
                  <div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-[11px] font-sans mb-2">
                      <FaClock size={10} />
                      <span className="uppercase tracking-wide">{article.date}</span>
                    </div>
                    <Link href="#" title={article.title}>
                      <h2 className="text-gray-900 text-3xl font-black font-serif leading-tight hover:text-red-600 transition-colors mb-2">
                        {article.title}
                      </h2>
                    </Link>
                    <p className="text-gray-500 text-sm font-serif leading-relaxed mb-4 line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 relative">
                        <Image
                          src={article.author.img}
                          alt={article.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-gray-500 text-sm font-sans">
                        by{" "}
                        <span className="text-gray-800 font-semibold hover:text-red-600 transition-colors cursor-pointer">
                          {article.author.name}
                        </span>
                      </span>
                    </div>
                    <Link
                      href="#"
                      title={`Read more about ${article.title}`}
                      className="self-start bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold tracking-widest px-4 py-2 font-sans uppercase transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Ad Banner */}
          <div className="mt-6">
            <div className="relative w-full h-[110px] overflow-hidden flex items-center bg-[#1a1a1a]">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, #333 0px, #333 1px, transparent 1px, transparent 10px), repeating-linear-gradient(-45deg, #444 0px, #444 1px, transparent 1px, transparent 10px)",
                }}
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-48 opacity-60"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, #555 0px, #555 1px, #333 1px, #333 8px)",
                }}
              />
              <div className="relative z-10 px-8 flex items-center">
                <div>
                  <p className="text-gray-400 text-xs font-playfair tracking-widest uppercase mb-1">
                    Advertisement
                  </p>
                  <h3 className="text-white text-xl font-black font-playfair tracking-wide">
                    Place for your Advertisement
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right 25%: Most Popular + Latest News */}
        <div className="w-full md:w-[25%] flex flex-col gap-8">

          {/* Most Popular */}
          <div>
            <div className="mb-4">
              <h2 className="text-xl font-black font-playfair tracking-wide inline-block border-b-2 border-red-600 pb-1">
                Most Popular
              </h2>
            </div>
            <div className="border border-gray-300">
              <div className="w-full h-[170px] overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?w=400&q=80"
                  alt="Most Popular"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              {mostPopular.map((item, i) => (
                <div key={i}>
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

          {/* Latest News */}
          <div>
            <div className="mt-2 md:mt-8 mb-5">
              <h2 className="text-xl font-black font-playfair text-black tracking-wide inline-block border-b-2 border-red-600 pb-1">
                Latest News
              </h2>
            </div>
            <div>
              <Link href="#" title={latestNews.title} className="block relative group overflow-hidden">
                <div className="relative w-full h-[160px] overflow-hidden">
                  <Image
                    src={latestNews.img}
                    alt={latestNews.title}
                    fill
                    className="object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-1 font-serif uppercase">
                      {latestNews.category}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="pt-3">
                <div className="flex items-center gap-1.5 text-gray-400 text-[11px] font-playfair mb-2">
                  <FaClock size={10} />
                  <span className="uppercase tracking-wide">{latestNews.date}</span>
                </div>
                <Link href="#" title={latestNews.title}>
                  <h3 className="text-gray-900 text-sm font-black font-serif leading-snug hover:text-red-600 transition-colors">
                    {latestNews.title}
                  </h3>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}