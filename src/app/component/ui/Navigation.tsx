'use client';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { User } from "lucide-react"; 
import { Search } from "lucide-react";





export default function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/search", label: "Rent" },
        { href: "/pagetwo", label: "Up Comming" },
        { href: "/pagethree", label: "Favorites" },
        { href: "/pagefour", label: "Favorites" },
    ];

    const handleToggleMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    

    return (
        <header className="w-full bg-white shadow-md mb-20px "> 
            <nav className="w-full flex justify-between p-4">
                <div className="text-xl">
                    <span className="font-pacifico text-black">Brad</span>
                    <span className="font-fredoka text-pink-400 ">Places</span>
                </div>
                
                <div className="flex bg-gray-50 rounded-full p-1 w-fit mx-auto border border-gray-200">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`px-4 py-2 rounded-full font-semibold transition-colors
                                ${pathname === link.href
                                    ? "bg-white text-black border border-gray-200 shadow-sm"
                                    : "hover:text-blue-600"
                                }`
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 px-2 py-1 w-full max-w-xs mx-auto">
                    <Search className="w-5 h-5 text-gray-500" />
                    <input type="text" placeholder="search" className="bg-transparent outline-none px-4 py-2 w-full rounded-full" />
                </div>
                <div className="flex items-center bg-gray-50 rounded-full p-1 w-fit mx-auto border border-gray-200">
                    <User className="w-6 h-6 text-gray-700" />
                    <button type="button" className="ml-2 font-bold">
                        <Link href={"/Inscription"} >Se connecter </Link>
                    </button>
                    
                </div>
                    
                <button
                    className="md:hidden"onClick={handleToggleMenu} aria-label="Ouvrir le menu">
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>
            {/* Menu "mobile" */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <Link href="/Rent" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Rent</Link>
                        <Link href="/Up comming" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Up Comming</Link>
                        <Link href="/Favorites" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Favorites</Link>
                        <Link href="/Favorites" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Favorites</Link>
                    </div>
                </div>
            )}
        </header>
    );
}