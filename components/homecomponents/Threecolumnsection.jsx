import Image from "next/image";
import Link from "next/link";
import { FaClock, FaPlayCircle } from "react-icons/fa";
import NewsletterForm from "./Newsletterform";


export default function ThreeColumnSection({
  featuredNewsCard,
  videoCard,
  moreFromNewsMag,
  middleArticles,
  rightTopArticles,
  rightVideoCard,
}) {
  return (
    <section className="w-full px-4 md:px-6 py-10">
      <div className="flex flex-col md:flex-row gap-6">

        {/* ════════ LEFT COLUMN — 25% ════════ */}
        <div className="w-full md:w-[25%] flex flex-col gap-6">

          {/* Featured News heading */}
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-xl font-black font-serif tracking-wide border-b-2 border-red-600 pb-2 -mb-[9px]">
              Featured News
            </h2>
          </div>

          {/* Featured card with overlay */}
          <Link href="#" title={featuredNewsCard.title} className="block relative group overflow-hidden">
            <div className="relative w-full h-[180px] overflow-hidden bg-gray-200">
              <Image
                src={featuredNewsCard.img}
                alt={featuredNewsCard.title}
                fill
                className="object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white text-[12px] font-bold tracking-widest px-2 py-0.5 uppercase font-sans">
                  {featuredNewsCard.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-gray-300 text-[12px] font-sans mb-1 flex items-center gap-1">
                  <FaClock size={8} /> {featuredNewsCard.date}
                </p>
                <h3 className="text-white text-sm font-black font-serif leading-snug group-hover:text-gray-200 transition-colors">
                  {featuredNewsCard.title}
                </h3>
              </div>
            </div>
          </Link>

          {/* Video card */}
          <Link href="#" title={videoCard.title} className="block relative group overflow-hidden">
            <div className="relative w-full h-[370px] overflow-hidden bg-gray-200">
              <Image
                src={videoCard.img}
                alt={videoCard.title}
                fill
                className="object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="bg-red-600 text-white text-[12px] font-bold tracking-widest px-2 py-0.5 uppercase font-sans">
                  {videoCard.category}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-2 border-white/70 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                  <FaPlayCircle size={28} className="text-white/90" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-gray-300 text-[13px] font-sans mb-1 flex items-center gap-1">
                  <FaClock size={8} /> {videoCard.date}
                </p>
                <h3 className="text-white text-lg font-black font-serif leading-snug group-hover:text-gray-200 transition-colors">
                  {videoCard.title}
                </h3>
              </div>
            </div>
          </Link>

          {/* More from NewsMag */}
          <div>
            <h2 className="text-base font-black font-serif tracking-wide border-b-2 border-red-600 pb-2 mb-4 mt-5 inline-block">
              More from NewsMag
            </h2>
            <div className="flex flex-col gap-0">
              {moreFromNewsMag.map((item, i) => (
                <Link
                  key={i}
                  href="#"
                  title={item.title}
                  className="flex gap-3 items-start py-3 border-b border-gray-100 group last:border-b-0"
                >
                  <div className="w-[70px] h-[55px] shrink-0 overflow-hidden bg-gray-200 relative">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-400 text-[10px] font-sans tracking-wide uppercase mb-0.5">
                      {item.date}
                    </p>
                    <h4 className="text-gray-900 text-xs font-bold font-serif leading-snug group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ════════ MIDDLE COLUMN — 50% ════════ */}
        <div className="w-full md:w-[50%] flex flex-col gap-0 md:px-6">
          {middleArticles.map((article, index) => (
            <div key={index} className={index > 0 ? "border-t border-gray-200 pt-6" : ""}>

              {/* Large image */}
              <Link href="#" title={article.title} className="block relative group overflow-hidden mb-4">
                <div className="relative w-full h-[240px] md:h-[300px] overflow-hidden bg-gray-200">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-red-600 text-white text-[12px] font-bold tracking-widest px-4 py-2 uppercase font-serif">
                      {article.category}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Date */}
              <div className="flex items-center gap-1.5 text-gray-400 text-[12px] font-sans mb-2">
                <FaClock size={10} />
                <span className="uppercase tracking-wide">{article.date}</span>
              </div>

              {/* Title */}
              <Link href="#" title={article.title}>
                <h2 className="text-gray-900 text-2xl font-black font-serif leading-tight hover:text-red-600 transition-colors mb-3">
                  {article.title}
                </h2>
              </Link>

              {/* Description */}
              <p className="text-gray-500 text-sm font-sans leading-relaxed mb-4 line-clamp-3">
                {article.description}
              </p>

              {/* Author */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 relative">
                  <Image
                    src={article.author.img}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-gray-400 text-sm font-sans">
                  by{" "}
                  <span className="text-gray-700 font-semibold hover:text-red-600 transition-colors cursor-pointer">
                    {article.author.name}
                  </span>
                </span>
              </div>

              <Link
                href="#"
                title={`Read more about ${article.title}`}
                className="inline-block bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold tracking-widest px-5 py-2 font-sans uppercase transition-colors mb-6"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* ════════ RIGHT COLUMN — 25% ════════ */}
        <div className="w-full md:w-[25%] flex flex-col gap-6">

          {/* Two stacked article cards */}
          <div className="flex flex-col gap-5">
            {rightTopArticles.map((article, i) => (
              <Link key={i} href="#" title={article.title} className="block group">
                <div className="relative w-full h-[170px] overflow-hidden bg-gray-200 mb-2">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <p className="text-gray-400 text-[12px] font-sans tracking-wide uppercase mb-1 flex items-center gap-1">
                  <FaClock size={8} /> {article.date}
                </p>
                <h4 className="text-gray-900 text-lg font-bold font-serif leading-snug group-hover:text-red-600 transition-colors">
                  {article.title}
                </h4>
              </Link>
            ))}
          </div>

          {/* Subscribe to Newsletter — client component */}
          <NewsletterForm />

          {/* Right Video card */}
          <Link href="#" title={rightVideoCard.title} className="block relative group overflow-hidden">
            <div className="relative w-full h-[370px] overflow-hidden bg-gray-200">
              <Image
                src={rightVideoCard.img}
                alt={rightVideoCard.title}
                fill
                className="object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="bg-red-600 text-white text-[12px] font-bold tracking-widest px-2 py-0.5 uppercase font-sans">
                  {rightVideoCard.category}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-2 border-white/70 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                  <FaPlayCircle size={28} className="text-white/90" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-gray-300 text-[13px] font-sans mb-1 flex items-center gap-1">
                  <FaClock size={8} /> {rightVideoCard.date}
                </p>
                <h3 className="text-white text-lg font-black font-serif leading-snug group-hover:text-gray-200 transition-colors">
                  {rightVideoCard.title}
                </h3>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}