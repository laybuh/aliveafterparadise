"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/story-list", label: "Story List" },
    { href: "/about", label: "About Me" },
    { href: "/about-the-project", label: "About The Project" },
    { href: "/shop", label: "Shop" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const gradient = "linear-gradient(to right, #BC2205, #AD3200, #D00034, #8E488D, #9A659F, #3BB7EE, #26C2F8)";

    const handleHomeClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md" style={{ background: "rgba(0,0,0,0.95)" }}>

            {/* top gradient line */}
            <div className="h-[1px] w-full opacity-30" style={{ background: gradient }} />

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 md:py-6 flex items-center justify-between">

                {/* site title */}
                <Link
                    href="/"
                    onClick={handleHomeClick}
                    className="font-typewriter text-white text-xs md:text-sm tracking-[0.15em] md:tracking-[0.25em] uppercase hover:text-crimson transition-colors duration-500">
                    ✦ Real Gods Require Blood
                </Link>

                {/* desktop links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => {
                                if (link.href === "/") handleHomeClick();
                            }}
                            className="text-xs text-zinc-300 hover:text-white tracking-[0.2em] uppercase font-typewriter transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* mobile menu button */}
                <button
                    className="md:hidden text-zinc-300 hover:text-white transition-colors font-typewriter text-xs tracking-[0.2em] uppercase flex-shrink-0"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* bottom gradient line */}
            <div className="h-[1px] w-full opacity-30" style={{ background: gradient }} />

            {/* mobile menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col px-6 py-6 gap-5 border-t border-white/5" style={{ background: "rgba(10,10,10,0.98)" }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => {
                                setMenuOpen(false);
                                if (link.href === "/") handleHomeClick();
                            }}
                            className="text-xs text-zinc-300 hover:text-white tracking-[0.2em] uppercase font-typewriter transition-colors duration-300 py-2 border-b border-white/5"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}