"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
    <div className="border border-gray-200 bg-gray-50 p-4 py-10">
      <h3 className="text-sm font-black font-serif text-gray-900 mb-3 text-center">
        Subscribe to Our Newsletter
      </h3>
      <input
        type="email"
        placeholder="Enter Your Email... *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 text-sm px-3 py-2 mb-2 font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
      />
      <button className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest py-2 font-sans uppercase transition-colors">
        Subscribe
      </button>
      <p className="text-gray-400 text-[10px] font-sans text-center mt-2">
        *we hate spam as much as you do
      </p>
    </div>
  );
}