'use client';
import Navigation from "../component/ui/Navigation";
import React, {useState} from "react";
import Detail from "../component/ui/Detail";
import PlaceCard from "../component/ui/PlaceCard";
import Filtre  from "../component/ui/filtre";

const places = [
  {
    name: "Venus Space",
    address: "Pleiades Lane, Events District, Cape Town",
    image: "/Projet de Places/4dc750b7-61c9-483c-9caa-e293fe476b0c.jpeg",
    price: "450 000 XOF",
    rating: "4,5",
  },
  {
    name: "Elegant Agora",
    address: "Andromeda Avenue, Space Colony, Mars",
    image: "/Projet de Places/5d2a4c0a-f050-4e35-9c23-8593581a679f.jpeg",
    price: "1 550 000 XOF",
    rating: "4,5",
  },
  {
    name: "Lumina Theater",
    address: "Galileo Street, Jupiter City, Jupiter",
    image: "/Projet de Places/93ab785c-3988-4376-8f81-0bb0d4f24577.jpeg",
    price: "600 000 XOF",
    rating: "4,8",
  },
  {
    name: "Harry Symphony",
    address: "Ringside Road, Saturn Resort, Saturn",
    image: "/Projet de Places/004634d3-b3db-4703-9594-3288589d4b1b.jpeg",
    price: "500 000 XOF",
    rating: "4,6",
  },
  {
    name: "Harmonia Amphitheater",
    address: "Oceanic Drive, Neptune Bay, Neptune",
    image: "/Projet de Places/7753f90b-8366-4044-b09b-adb5437862e5.jpeg",
    price: "400 000 XOF",
    rating: "4,3",
  },
  {
    name: "Odyssey Hall",
    address: "Frozen Path, Pluto Village, Pluto",
    image: "/Projet de Places/9130ef63-f177-4e0c-a2f0-99c291a455ff.jpeg",
    price: "2 000 000 XOF",
    rating: "4,1",
  },
  {
    name: "Earthly Paradise",
    address: "Terra Lane, Earth City, Earth",
    image: "/Projet de Places/90538332-623d-4d09-a315-2be4a914632b.jpeg",
    price: "550 000 XOF",
    rating: "4,7",
  },
  { 
    name: "Lunar Lodge",
    address: "Moonlight Avenue, Lunar Colony, Moon",
    image: "/Projet de Places/ATI Architects Offices - Dubai _ Office Snapshots.jpeg",  
    price: "300 000 XOF",
    rating: "4,2",
  },
];
export default function Home() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <>
      <Navigation />
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[250px_1fr_400px] gap-8 p-4">
        <Filtre/>
        {/* Colonne principale : cartes */}
        
        <div className={`${selectedPlace ? "" : "col-span-2"} p-4`}>
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${selectedPlace ? "lg:grid-cols-2" : "lg:grid-cols-3"} gap-6`}>
            {places.map((place, idx) => (
              <PlaceCard key={idx} place={place} onClick={() => setSelectedPlace(place)} />
            ))}
          </div>
        </div>
        {/* Colonne de droite : détail */}
        {selectedPlace && (
          <Detail place={selectedPlace} />
        )}
        
      </div>
    </>
  );
}
