import Image from "next/image";
import Link from "next/link";
import SmallCard from "./Smallcard";
import TabbedSidebar from "./Tabbedsidebar";


function GridColumn({ col, className = "" }) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <Link href="#" title={col.featured.title} className="block relative group overflow-hidden">
        <div className="relative w-full h-[270px] md:h-[200px] overflow-hidden bg-gray-300">
          <Image
            src={col.featured.img}
            alt={col.featured.title}
            fill
            className="object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute top-3 left-3">
            <span className="bg-red-600 text-white text-[9px] font-bold tracking-widest px-2 py-1 font-playfair uppercase">
              {col.featured.category}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-white text-sm font-black font-playfair leading-snug group-hover:text-gray-200 transition-colors">
              {col.featured.title}
            </h3>
          </div>
        </div>
      </Link>
      <div className="flex flex-col gap-4 pt-1 mt-5">
        {col.small.map((item, i) => (
          <SmallCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function GridSection({ col1, col2, col3, tabData }) {
  return (
    <section className="w-full px-4 py-10 md:py-4 md:px-6 pb-10">
      <div className="flex flex-col md:flex-row gap-6">

        {/* 75% left: 3 article columns */}
        <div className="w-full md:w-[75%] grid grid-cols-1 sm:grid-cols-3 gap-6">
          <GridColumn col={col1} />
          <GridColumn col={col2} className="mt-8 md:mt-0" />
          <GridColumn col={col3} className="mt-8 md:mt-0" />
        </div>

        {/* 25% right: Tabbed sidebar (client component) */}
        <div className="w-full md:w-[25%] mt-8 md:mt-0">
          <TabbedSidebar tabData={tabData} />
        </div>

      </div>
    </section>
  );
}