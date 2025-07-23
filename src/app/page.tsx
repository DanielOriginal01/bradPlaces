'use client';
import Navigation from "./component/ui/Navigation";
import React, {useState} from "react";
import Reservation from "./component/ui/Reservation";
import { Search  } from "lucide-react";
import Image from "next/image";


export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <>
      <Navigation />
      <div className="flex  w-screen h-[606px] bg-gray-100">
        <img src="/Projet de Places/blue-arm-chairs-cinema 1.png" alt="Background" fill className="object-cover" /> 
        <div className="absolute inset-0  w-full h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-[56px] font-bold text-white">Trouvez l’espace idéal. Réservez en quelques clics. </h1> 
              <div className="flex flex-col items-left gap-0 bg-gray-100 rounded-xl px-4 py-2   z-1 w-full relative">
              <Reservation activeTab={activeTab} setActiveTab={setActiveTab}/>
              {activeTab === 0 && (
                
                <div className="flex w-full justify-between gap-2">
                  <div className="flex flex-col items-left">
                  <span className="text-[#3A4C69] text-[14px] font-semibold">Où?</span>
                  <input type="text"  className="bg-gray-200 w-[270px] p-2 m-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e35d4d] " />
                  </div>
                  <div className="flex flex-col items-left">
                  <span className="text-[#3A4C69] text-[14px] font-semibold">Quelle date?</span>
                  <input type="text"  className="bg-gray-200 w-[270px] p-2 m-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e35d4d] " />
                  </div>
                  <div className="flex flex-col items-left">
                  <span className="text-[#3A4C69] text-[14px] font-semibold">Nombre de place</span>
                  <input type="text"  className="bg-gray-200 w-[270px] p-2 m-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e35d4d] " />
                  </div>
                  <div className="bg-[#e35d4d] text-white px-4 py-2 rounded-full mt-2 hover:bg-[#c34a3f] transition-colors">
                    <search className="h-5 w-5 "/>
                    <button>
                       Rechercher
                    </button>
                  </div>
                </div>

              )}
              {activeTab === 1 && (
                <div className="flex items-left gap-2">
                  <div className="flex flex-col items-left">
                  <span className="text-[#3A4C69] text-[14px] font-semibold">Où?</span>
                  <input type="text"  className="bg-gray-200 w-[270px] p-2 m-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e35d4d] " />
                  </div>
                  <div className="flex flex-col items-left">
                  <span className="text-[#3A4C69] text-[14px] font-semibold">Quelle date?</span>
                  <input type="text"  className="bg-gray-200 w-[270px] p-2 m-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e35d4d] " />
                  </div>
                  <div className="flex flex-col items-left">
                  <span className="text-[#3A4C69] text-[14px] font-semibold">Nombre de place</span>
                  <input type="text"  className="bg-gray-200 w-[270px] p-2 m-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e35d4d] " />
                  </div>
                </div>
              )}{activeTab === 2 && (
                <div className="flex items-left gap-2">
                  <div className="flex flex-col items-left">
                  <span className="text-[#3A4C69] text-[14px] font-semibold">Où?</span>
                  <input type="text"  className="bg-gray-200 w-[270px] p-2 m-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e35d4d] " />
                  </div>
                  <div className="flex flex-col items-left">
                  <span className="text-[#3A4C69] text-[14px] font-semibold">Quelle date?</span>
                  <input type="text"  className="bg-gray-200 w-[270px] p-2 m-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e35d4d] " />
                  </div>
                  <div className="flex flex-col items-left">
                  <span className="text-[#3A4C69] text-[14px] font-semibold">Nombre de place</span>
                  <input type="text"  className="bg-gray-200 w-[270px] p-2 m-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e35d4d] " />
                  </div>
                </div>
              )}
              </div>
             
        </div>
        
      </div>
       <div>
                <span>
                  <h2 className="text-[40px]">Nos espaces les plus réservés</h2>
                  <p className="text-[19px]">Les lieux préférés de nos clients pour leurs réunions, conférences et événements spéciaux.</p>
                </span>
              </div>
    </>
  );
}
