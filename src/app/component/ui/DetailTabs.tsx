'use client';
import { useState } from "react";

const tabs = [
  { label: "Overview" },
  { label: "Review" },
  { label: "About" },
];

export default function DetailTabs({ activeTab, setActiveTab }) {
  return (

      <div className="flex gap-8 border-b border-gray-400 ">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(idx)}
            className={`py-2 text-lg font-semibold text-[14px] flex-1 relative
              ${activeTab === idx ? "text-black" : "text-gray-400"}
            `}
          >
            {tab.label}
            {activeTab === idx && (
              <span className="absolute left-0 right-0 -bottom-1 h-2 bg-[#e35d4d] rounded"></span>
            )}
          </button>
        ))}
      </div>
  );
}