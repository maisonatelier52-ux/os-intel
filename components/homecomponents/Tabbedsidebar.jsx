
"use client";

import { useState } from "react";
import SmallCard from "./Smallcard";

export default function TabbedSidebar({ tabData }) {
  const [activeTab, setActiveTab] = useState("Latest");

  return (
    <>
      <div className="flex items-center gap-6 border-b border-gray-200 mb-4">
        {["Latest", "Popular"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-bold font-playfair tracking-wide transition-colors ${
              activeTab === tab
                ? "text-black border-b-2 border-black"
                : "text-gray-400 hover:text-gray-700"
            }`}
            style={{ marginBottom: "-1px" }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {(tabData[activeTab] || []).map((item, i) => (
          <div key={i}>
            <SmallCard {...item} />
            {i < tabData[activeTab].length - 1 && (
              <div className="border-b border-gray-200 mt-4" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}