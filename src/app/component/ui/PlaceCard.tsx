// PlaceCard.tsx
import Image from "next/image";

export default function PlaceCard({ place }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col">
      <div className="relative h-40 w-full">
        <Image
          src={place.image}
          alt={place.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="font-bold text-lg">{place.name}</div>
          <div className="text-xs text-gray-400 truncate">{place.address}</div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="font-bold text-base">{place.price}</span>
            <span className="text-xs text-gray-400">/Day</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100">
              <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z"/></svg>
            </button>
            <span className="flex items-center text-xs font-semibold text-gray-500">
              <svg className="w-4 h-4 text-orange-400 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"/></svg>
              {place.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}