"use client";

import Link from "next/link";
import { useState } from "react";

export default function Hero() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-32 pb-20"
            style={{
                background: "radial-gradient(ellipse at 20% 50%, #1a050588 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, #05051488 0%, transparent 50%), #0a0a0a",
            }}
        >

            {/* title */}
            <h1
                className="font-typewriter text-2xl md:text-4xl lg:text-5xl tracking-wide uppercase mb-4 leading-tight"
                style={{
                    background: "linear-gradient(to right, #BC2205, #D00034, #8E488D, #9A659F, #26C2F8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Welcome to the<br />End of the World.
            </h1>

            {/* tagline */}
            <p className="font-roboto text-zinc-300 text-xs tracking-wide mb-8 md:mb-12">
                Your #1 Source for Biblical Erotica
            </p>

            {/* image placeholder */}
            <div
                className="w-full max-w-[280px] md:max-w-[500px] h-[170px] md:h-[300px] mb-10 md:mb-16 flex items-center justify-center"
                style={{
                    background: "linear-gradient(135deg, #1a0505, #120818, #0a0a14)",
                    border: "1px solid #8E488D44",
                }}
            />

            {/* lorem text */}
            <p className="max-w-[280px] md:max-w-xl text-zinc-400 text-xs md:text-sm leading-8 mb-10 md:mb-16 font-roboto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* section highlight cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl">

                <Link
                    href="/gallery"
                    className="group p-6 md:p-8 text-center transition-colors duration-300"
                    style={{ border: "1px solid #ffffff11" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "#BC2205")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "#ffffff11")}
                >
                    <p className="font-typewriter text-xs tracking-[0.2em] uppercase text-zinc-500 group-hover:text-white transition-colors duration-300 mb-3">✦</p>
                    <p className="font-typewriter text-sm tracking-[0.15em] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300">The Visuals</p>
                    <p className="text-xs text-zinc-500 mt-2 font-roboto">Lorem ipsum dolor sit amet</p>
                </Link>

                <Link
                    href="/story-list"
                    className="group p-6 md:p-8 text-center transition-colors duration-300"
                    style={{ border: "1px solid #ffffff11" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "#8E488D")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "#ffffff11")}
                >
                    <p className="font-typewriter text-xs tracking-[0.2em] uppercase text-zinc-500 group-hover:text-white transition-colors duration-300 mb-3">✦</p>
                    <p className="font-typewriter text-sm tracking-[0.15em] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300">The Stories</p>
                    <p className="text-xs text-zinc-500 mt-2 font-roboto">Lorem ipsum dolor sit amet</p>
                </Link>

                <Link
                    href="/about-the-project"
                    className="group p-6 md:p-8 text-center transition-colors duration-300"
                    style={{ border: "1px solid #ffffff11" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "#26C2F8")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "#ffffff11")}
                >
                    <p className="font-typewriter text-xs tracking-[0.2em] uppercase text-zinc-500 group-hover:text-white transition-colors duration-300 mb-3">✦</p>
                    <p className="font-typewriter text-sm tracking-[0.15em] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300">About</p>
                    <p className="text-xs text-zinc-500 mt-2 font-roboto">Lorem ipsum dolor sit amet</p>
                </Link>

                {/* search card */}
                <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="group p-6 md:p-8 text-center transition-colors duration-300 w-full"
                    style={{ border: `1px solid ${searchOpen ? "#9A659F" : "#ffffff11"}` }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "#9A659F")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = searchOpen ? "#9A659F" : "#ffffff11")}
                >
                    <p className="font-typewriter text-xs tracking-[0.2em] uppercase text-zinc-500 group-hover:text-white transition-colors duration-300 mb-3">✦</p>
                    <p className="font-typewriter text-sm tracking-[0.15em] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300">Search</p>
                    <p className="text-xs text-zinc-500 mt-2 font-roboto">looking for something?</p>
                </button>

            </div>

            {/* search input — appears below cards */}
            {searchOpen && (
                <div
                    className="w-full max-w-6xl mt-4 flex items-center gap-4 px-4 py-4"
                    style={{
                        border: "1px solid transparent",
                        borderImage: "linear-gradient(to right, #BC2205, #AD3200, #D00034, #8E488D, #9A659F, #3BB7EE, #26C2F8) 1",
                    }}
                >
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="search..."
                        autoFocus
                        className="w-full bg-transparent outline-none text-white text-xs font-roboto tracking-wide placeholder:text-zinc-600 px-2"
                    />
                    <button
                        onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                        className="text-zinc-600 hover:text-white font-roboto text-xs transition-colors duration-300 flex-shrink-0 pr-2"
                    >
                        ✕
                    </button>
                </div>
            )}

        </section>
    );
}