'use client';
import React from "react";

import Navigation from "../component/ui/Navigation";
import { User } from "lucide-react";

export default function pageone() {
    return (
        <>
            <Navigation/>
            <div className="flex center bg-gray-50 rounded-full p-1 w-fit mx-auto border border-gray-200">
                <User className="w-6 h-6 text-gray-700" />
                <span className="ml-2 font-bold">Se connecter</span>
            </div>
        </>
    );
}