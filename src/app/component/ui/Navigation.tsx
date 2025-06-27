'use client';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className="w-full bg-white shadow-md">
            <nav className="container flex justify-between p-4">
                <div className="text-xl">
                    <span className="font-pacifico text-black">Brad</span>
                    <span className="font-fredoka text-pink-400 ">Places</span>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link href="/about" className="hover:text-blue-600">À propos</Link>
                    <Link href="/services" className="hover:text-blue-600">Services</Link>
                    <Link href="/contact" className="hover:text-blue-600">Contact</Link>
                </div>
                <button
                    className="md:hidden"
                    onClick={handleToggleMenu}
                    aria-label="Ouvrir le menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>
            {/* Menu "mobile" */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <Link href="/about" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>À propos</Link>
                        <Link href="/services" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                        <Link href="/contact" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    </div>
                </div>
            )}
        </header>
    );
}