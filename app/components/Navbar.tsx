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
        <nav
            className="fixed top-0 left-0 w-full z-50"
            style={{
                background: "#0a0a0a",
                borderBottom: "2px solid #000000",
                borderTop: "1px solid #3a3a3a",
                boxShadow: "0 2px 0px #000000, inset 0 1px 0px #444444",
            }}
        >
            {/* top gradient line */}
            <div className="h-[2px] w-full" style={{ background: gradient, opacity: 0.6 }} />

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 md:py-5 flex items-center justify-between">

                {/* site title */}
                <Link
                    href="/"
                    onClick={handleHomeClick}
                    className="font-pixel text-[9px] md:text-[10px] uppercase hover:opacity-80 transition-opacity duration-500 flex items-center gap-2">
                    <span className="relative bottom-[3px] text-white">✦</span>
                    <span style={{
                        background: "linear-gradient(to right, #BC2205, #D00034, #8E488D, #9A659F, #26C2F8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>
                        Real Gods Require Blood
                    </span>
                </Link>

                {/* desktop links */}
                <div className="hidden md:flex items-center gap-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => {
                                if (link.href === "/") handleHomeClick();
                            }}
                            className="text-[8px] text-zinc-300 hover:text-white uppercase font-pixel transition-all duration-150 px-3 py-2"
                            style={{
                                borderTop: "1px solid #3a3a3a",
                                borderLeft: "1px solid #3a3a3a",
                                borderBottom: "1px solid #000000",
                                borderRight: "1px solid #000000",
                                boxShadow: "inset 1px 1px 0px #555555",
                                background: "#0a0a0a",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderTop = "1px solid #000000";
                                e.currentTarget.style.borderLeft = "1px solid #000000";
                                e.currentTarget.style.borderBottom = "1px solid #3a3a3a";
                                e.currentTarget.style.borderRight = "1px solid #3a3a3a";
                                e.currentTarget.style.boxShadow = "inset -1px -1px 0px #555555";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderTop = "1px solid #3a3a3a";
                                e.currentTarget.style.borderLeft = "1px solid #3a3a3a";
                                e.currentTarget.style.borderBottom = "1px solid #000000";
                                e.currentTarget.style.borderRight = "1px solid #000000";
                                e.currentTarget.style.boxShadow = "inset 1px 1px 0px #555555";
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* mobile menu button */}
                <button
                    className="md:hidden text-zinc-300 hover:text-white transition-colors font-pixel text-[9px] uppercase flex-shrink-0 px-3 py-2"
                    style={{
                        borderTop: "1px solid #3a3a3a",
                        borderLeft: "1px solid #3a3a3a",
                        borderBottom: "1px solid #000000",
                        borderRight: "1px solid #000000",
                        boxShadow: "inset 1px 1px 0px #555555",
                        background: "#0a0a0a",
                    }}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* mobile menu */}
            {menuOpen && (
                <div
                    className="md:hidden flex flex-col px-6 py-6 gap-3"
                    style={{
                        background: "#0a0a0a",
                        borderTop: "1px solid #000000",
                        boxShadow: "inset 0 1px 0px #444444",
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => {
                                setMenuOpen(false);
                                if (link.href === "/") handleHomeClick();
                            }}
                            className="text-[9px] text-zinc-300 hover:text-white uppercase font-pixel transition-colors duration-300 py-3 px-4"
                            style={{
                                borderTop: "1px solid #3a3a3a",
                                borderLeft: "1px solid #3a3a3a",
                                borderBottom: "1px solid #000000",
                                borderRight: "1px solid #000000",
                                boxShadow: "inset 1px 1px 0px #555555",
                                background: "#0a0a0a",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}