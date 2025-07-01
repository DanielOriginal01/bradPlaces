import Image from "next/image";
import Navigation from "./component/ui/Navigation";
import React from "react";
import PlaceCard from "./component/ui/PlaceCard";


const places = [
  {
    name: "Venus Space",
    address: "Pleiades Lane, Events District, Cape Town",
    image: "/venus.jpg",
    price: "450 000 XOF",
    rating: "4,5",
  },
  {
    name: "Mars Retreat",
    address: "Andromeda Avenue, Space Colony, Mars",
    image: "/mars.jpg",
    price: "300 000 XOF",
    rating: "4,0",
  },
  {
    name: "Jupiter Haven",
    address: "Galileo Street, Jupiter City, Jupiter",
    image: "/jupiter.jpg",
    price: "600 000 XOF",
    rating: "4,8",
  },
];
export default function Home() {
  return (
    <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto] items-center justify-items-center gap-8 p-4">
        <Navigation/>
        <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {places.map((place, idx) => (
                  <PlaceCard key={idx} place={place} />
                ))}
              </div>
        </div>
     
    </div>
  );
}
