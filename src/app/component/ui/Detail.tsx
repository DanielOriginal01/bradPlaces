'use client';
import { useState } from "react";
import { Heart } from "lucide-react";
import DetailTabs from "./DetailTabs";


export default function Detail({ place }) {
  if (!place) return null;
  const images = place.images || [place.image, place.image, place.image];
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <nav className="bg-white w-full lg:w-[400px] h-full shadow-md">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto mt-10">

        {/* Flex horizontal : grande image + miniatures en colonne */}
        <div className="flex gap-2 mb-4">
          <img
            src={place.image}
            alt={place.name}
            className="w-2/3 h-50 object-cover rounded-lg"
          />

          <div className="flex flex-col gap-2">
            {images.slice(0,2).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${place.name} miniature ${idx + 1}`}
                className="w-24 h-24 object-cover rounded-md border-none"
              />

            ))}
          </div>
          
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-[18px]">{place.name}</span>
        <span className="text-[20px] font-bold"> {place.price}</span>
         <button
            onClick={() => setLiked((prev) => !prev)}
            className="ml-2"
            aria-label={liked ? "Retirer des favoris" : "Ajouter aux favoris"}
          >
            <Heart
              size={28}
              className={liked ? "text-pink-500 fill-pink-500" : "text-gray-400"}
              fill={liked ? "currentColor" : "none"}
            />
          </button>
      </div>
        <DetailTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 0 && (
          <div>
            
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {/* Review content */}
          </div>
        )}
        {activeTab === 2 && (
          <div>
            {/* About content */}
          </div>
        )}
        </div>
    </nav>
  );
}