'use client';
import Image from "next/image";
import { useState } from "react";
import { Heart } from "lucide-react";
import { MapPinIcon, CheckIcon } from "@heroicons/react/24/solid";


export default function PlaceCard({ place, onClick }) {
    const [liked, setLiked] = useState(false);

  return (
    <div className="relative bg-white rounded-[18px] aspect-square min-w-[285px] h-[261] p-4 justify-end overflow-hidden border border-gray-100 flex flex-col transition-transform duration-200 group-hover:bg-gray-300 cursor-pointer"  onClick={onClick}  >
    
        {/* Étiquette flottante */}
        
      {/*<div className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
          Populaire
        </div>*/ } 
        <Image
          src={place.image}
          alt={place.name}
          fill
          className="absolute top-0 left-0 w-full origin-center object-cover"
        />
      
      {/* Detail under the placecard*/}
       
          <div className="flex flex-col items-left gap-0 bg-gray-100 rounded-xl px-4 py-2   z-1 w-full relative">
            <div className="flex items-center w-full">
              <span className="font-bold text-[14px] text-black w-full ">{place.name}</span>
                <button
                    onClick={() => setLiked((prev) => !prev)}
                    className="ml-2"
                    aria-label={liked ? "Retirer des favoris" : "Ajouter aux favoris"}
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#f8e6e7]">
                        <Heart
                          size={16}
                          className={liked ? "text-[#c41f45]" : "text-[#c41f45]"}
                          fill={liked ? "currentColor" : "none"}
                        />
                      </span>
                </button>
            </div>
   
            <span className="flex items-center text-xs text-gray-500 w-full">
              <MapPinIcon className="w-4 h-4 text-[#c41f45]" />
              <CheckIcon className="absolute w-3 h-3 text-white" />
              {place.address}
            </span>
              <div className="border-t border-gray-300 my-2"></div>
            <div className="flex items-center justify-between w-full">
                <span className="font-bold text-black text-[14px] text-xs">{place.price} <span className="text-gray-400 font-normal">/Day</span></span>
                <span className="flex items-center text-xs font-semibold text-[#c41f45]">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"/></svg>
                {place.rating}
              </span>
            </div>
            
          </div>
        
      
    </div>
  );
}