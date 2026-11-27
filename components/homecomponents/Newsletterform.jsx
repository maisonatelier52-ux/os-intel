import Link from "next/link";

export default function NewsletterForm() {
  return (
    <div className="border border-gray-200 bg-gray-50 p-4 py-10">
      <h3 className="text-sm font-black font-serif text-gray-900 mb-3 text-center">Explore OS-Intel</h3>
      <p className="text-sm text-gray-600 text-center mb-4">Read our latest reporting on security, world affairs and investigations.</p>
      <Link href="/investigation/" className="block text-center bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest py-2 font-sans uppercase transition-colors">Browse investigations</Link>
    </div>
  );
}
