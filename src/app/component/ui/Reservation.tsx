'use client';
import { useState } from "react";

const tabs = [

  { label: "Hotel" },
  { label: "Salle de conférence" },
  { label: "Place de fête" },
];

export default function Reservation({ activeTab, setActiveTab }) {
  return (

      <div className="flex gap-8 border-b-2 border-gray-400 ">
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
              <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#e35d4d] "></span>
            )}
          </button>
        ))}
      </div>
  );
}


