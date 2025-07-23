'use client';
import React from "react";

import Navigation from "../component/ui/Navigation";
//import { User } from "lucide-react";

export default function page() {
   return (
        <>
            <Navigation/>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="bg-gray-50 rounded-full p-1 w-fit mx-auto border border-gray-200">
                    <h1 className="ml-2 font-bold text-center">Se connecter</h1>
                </div>
            </div>
        </>
    );
}