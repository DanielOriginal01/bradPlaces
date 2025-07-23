import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "@heroicons/react/24/outline";
import {MapPinIcon} from "@heroicons/react/24/outline";
import FilterBlock from "./FilterBlock";

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button
    className="flex items-center justify-between w-full px-4 py-2 rounded-full bg-gray-100 text-[12px] text-gray-400 outline-none"
    onClick={onClick}
    ref={ref}
    type="button"
  >
    <span>{value} <span className="text-gray-400">(24 hours)</span></span>
    <CalendarIcon className="w-5 h-5 text-gray-400 ml-2" />
  </button>
));

export default function Filtre() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <nav className="top-0 right-0 bg-white lg:w-[250px] h-full p-4 m-2 shadow-md">
      <div>
        <div className="flex justify-between">
          <span className="font-semibold text-[15px]">Filter</span>
          <span className="text-[#c41f45] text-[13px] font-semibold">Clear All</span>
        </div>
        <div className="border-t border-gray-300 my-2"></div>
        <span className="font-semibold text-[12px]">Booking Date</span>
        <div className="mt-2">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd MMM, h:mm aa"
            showTimeSelect
            customInput={<CustomInput />}
          />
        </div>
        <div className="border-t border-gray-300 my-2"></div>
            <FilterBlock
                icon={<MapPinIcon className="w-5 h-5 text-gray-400" />}
                title="Location"
                onClear={() => {/* reset location */}}
            />
            <div className="flex flex-col text-gray-400 gap-2 mb-4 ml-2">
                <label className="flex items-center gap-2">
                <input type="checkbox"  className="accent-[#c41f45]" />
                <span className="text-[12px]">Location 1</span>
                </label>
                <label className="flex items-center gap-2">
                <input type="checkbox"  className="accent-[#c41f45]" />
                <span className="text-[12px] ">Location 2</span>
                </label>
            </div>
      <div className="border-t border-gray-300 my-2"></div>

      {/* Price Range Block */}
      <FilterBlock
        icon={<MapPinIcon className="w-5 h-5 text-gray-400" />}
        title="Price Range"
        onClear={() => {/* reset price */}}
      />
      <div className="flex flex-col text-gray-400 gap-2 mb-4 ml-2">
            <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#c41f45]" />
            <span className="text-[12px] ">Moins de 25000 Fcfa</span>
            </label>
            <label className="flex items-center gap-2">
            <input type="checkbox"  className="accent-[#c41f45]" />
            <span className="text-[12px] ">25000 Fcfa - 550 000 Fcfa</span>
            </label>
            <label className="flex items-center gap-2">
            <input type="checkbox"  className="accent-[#c41f45]" />
            <span className="text-[12px] ">Plus de 1 000 000 Fcfa</span>
            </label>
            <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#c41f45]" />
            <span className="text-[12px]">Custom</span>
            </label>
        {/* Slider */}
        <input
          type="range"
          min={0}
          max={100000000}
          
          className="w-full accent-[#c41f45] mt-2"
        />
      
            <div className="border-t border-gray-300 my-2"></div>
         <FilterBlock
            icon={<MapPinIcon className="w-5 h-5 text-gray-400" />}
            title="Place number"
            onClear={() => {/* reset price */}}
         />
          <div className="flex gap-2 mt-2">
                <div className="bg-white rounded-full font-semibold px-4 py-2 flex items-center gap-1">
                    <span className="text-gray-400 text-[10px]">Min</span>
                    <input type="nmuber" defaultValue={50} className="text-[14px] text-gray-900 font-semibold w-6 h-8 text-sm p-1"/>
                    <span className="text-gray-400 text-[10px]">Plcs</span>
                </div>
                <div className="bg-white rounded-full font-semibold px-4 py-2 flex items-center gap-1">
                    <span className="text-gray-400 text-[10px]">Max</span>
                    <input type="nmuber" defaultValue={500} className="text-[14px] text-gray-900 font-semibold w-6 h-8 text-sm p-1" />
                    <span className="text-gray-400 text-[10px]">Plcs</span>
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
}