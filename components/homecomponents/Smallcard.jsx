import Image from "next/image";
import Link from "next/link";

export default function SmallCard({ img, date, title }) {
  return (
    <Link href="#" title={title} className="flex gap-3 group items-start">
      <div className="w-[90px] h-[70px] shrink-0 overflow-hidden bg-gray-200 relative">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover grayscale group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-gray-400 text-[10px] font-sans tracking-wide uppercase mb-1">{date}</p>
        <h4 className="text-gray-900 text-sm font-bold font-serif leading-snug group-hover:text-red-600 transition-colors">
          {title}
        </h4>
      </div>
    </Link>
  );
}