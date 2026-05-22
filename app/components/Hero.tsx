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
                background: "radial-gradient(ellipse at 20% 50%, #1a050544 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, #05051444 0%, transparent 50%), transparent",
            }}
        >

            {/* title */}
            <h1
                className="font-pixel text-lg md:text-2xl lg:text-3xl uppercase mb-4 leading-loose"
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
                Your #1 Source for Lucifer/Michael ship content
            </p>

            {/* image placeholder */}
            <img
                src="https://plus.unsplash.com/premium_photo-1677785615002-c52ffab408a4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hero image"
                className="w-full max-w-[280px] md:max-w-[500px] h-[170px] md:h-[300px] object-cover mb-10 md:mb-16"
                style={{
                    opacity: 0.99,
                    borderTop: "2px solid #3a3a3a",
                    borderLeft: "2px solid #3a3a3a",
                    borderBottom: "2px solid #000000",
                    borderRight: "2px solid #000000",
                    boxShadow: "inset 1px 1px 0px #555555, inset -1px -1px 0px #000000",
                }}
            />

            {/* lorem text */}
            <p className="max-w-[280px] md:max-w-[500px] text-zinc-400 text-xs md:text-sm leading-8 mb-10 md:mb-16 font-roboto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* section highlight cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl">

                <Link
                    href="/gallery"
                    className="group p-6 md:p-8 text-center transition-all duration-150"
                    style={{
                        borderTop: "2px solid #3a3a3a",
                        borderLeft: "2px solid #3a3a3a",
                        borderBottom: "2px solid #000000",
                        borderRight: "2px solid #000000",
                        boxShadow: "inset 1px 1px 0px #555555",
                        background: "#0a0a0a",
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.borderTop = "2px solid #000000";
                        e.currentTarget.style.borderLeft = "2px solid #000000";
                        e.currentTarget.style.borderBottom = "2px solid #3a3a3a";
                        e.currentTarget.style.borderRight = "2px solid #3a3a3a";
                        e.currentTarget.style.boxShadow = "inset -1px -1px 0px #555555";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.borderTop = "2px solid #3a3a3a";
                        e.currentTarget.style.borderLeft = "2px solid #3a3a3a";
                        e.currentTarget.style.borderBottom = "2px solid #000000";
                        e.currentTarget.style.borderRight = "2px solid #000000";
                        e.currentTarget.style.boxShadow = "inset 1px 1px 0px #555555";
                    }}
                >
                    <p className="font-pixel text-[8px] uppercase text-zinc-500 group-hover:text-white transition-colors duration-300 mb-3">✦</p>
                    <p className="font-pixel text-[9px] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300 leading-loose">The Visuals</p>
                    <p className="text-xs text-zinc-500 mt-2 font-roboto">Lorem ipsum dolor sit amet</p>
                </Link>

                <Link
                    href="/story-list"
                    className="group p-6 md:p-8 text-center transition-all duration-150"
                    style={{
                        borderTop: "2px solid #3a3a3a",
                        borderLeft: "2px solid #3a3a3a",
                        borderBottom: "2px solid #000000",
                        borderRight: "2px solid #000000",
                        boxShadow: "inset 1px 1px 0px #555555",
                        background: "#0a0a0a",
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.borderTop = "2px solid #000000";
                        e.currentTarget.style.borderLeft = "2px solid #000000";
                        e.currentTarget.style.borderBottom = "2px solid #3a3a3a";
                        e.currentTarget.style.borderRight = "2px solid #3a3a3a";
                        e.currentTarget.style.boxShadow = "inset -1px -1px 0px #555555";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.borderTop = "2px solid #3a3a3a";
                        e.currentTarget.style.borderLeft = "2px solid #3a3a3a";
                        e.currentTarget.style.borderBottom = "2px solid #000000";
                        e.currentTarget.style.borderRight = "2px solid #000000";
                        e.currentTarget.style.boxShadow = "inset 1px 1px 0px #555555";
                    }}
                >
                    <p className="font-pixel text-[8px] uppercase text-zinc-500 group-hover:text-white transition-colors duration-300 mb-3">✦</p>
                    <p className="font-pixel text-[9px] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300 leading-loose">The Stories</p>
                    <p className="text-xs text-zinc-500 mt-2 font-roboto">Lorem ipsum dolor sit amet</p>
                </Link>

                <Link
                    href="/about-the-project"
                    className="group p-6 md:p-8 text-center transition-all duration-150"
                    style={{
                        borderTop: "2px solid #3a3a3a",
                        borderLeft: "2px solid #3a3a3a",
                        borderBottom: "2px solid #000000",
                        borderRight: "2px solid #000000",
                        boxShadow: "inset 1px 1px 0px #555555",
                        background: "#0a0a0a",
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.borderTop = "2px solid #000000";
                        e.currentTarget.style.borderLeft = "2px solid #000000";
                        e.currentTarget.style.borderBottom = "2px solid #3a3a3a";
                        e.currentTarget.style.borderRight = "2px solid #3a3a3a";
                        e.currentTarget.style.boxShadow = "inset -1px -1px 0px #555555";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.borderTop = "2px solid #3a3a3a";
                        e.currentTarget.style.borderLeft = "2px solid #3a3a3a";
                        e.currentTarget.style.borderBottom = "2px solid #000000";
                        e.currentTarget.style.borderRight = "2px solid #000000";
                        e.currentTarget.style.boxShadow = "inset 1px 1px 0px #555555";
                    }}
                >
                    <p className="font-pixel text-[8px] uppercase text-zinc-500 group-hover:text-white transition-colors duration-300 mb-3">✦</p>
                    <p className="font-pixel text-[9px] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300 leading-loose">About</p>
                    <p className="text-xs text-zinc-500 mt-2 font-roboto">Lorem ipsum dolor sit amet</p>
                </Link>

                {/* search card */}
                <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="group p-6 md:p-8 text-center transition-all duration-150 w-full"
                    style={{
                        borderTop: `2px solid ${searchOpen ? "#000000" : "#3a3a3a"}`,
                        borderLeft: `2px solid ${searchOpen ? "#000000" : "#3a3a3a"}`,
                        borderBottom: `2px solid ${searchOpen ? "#3a3a3a" : "#000000"}`,
                        borderRight: `2px solid ${searchOpen ? "#3a3a3a" : "#000000"}`,
                        boxShadow: searchOpen ? "inset -1px -1px 0px #555555" : "inset 1px 1px 0px #555555",
                        background: "#0a0a0a",
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.borderTop = "2px solid #000000";
                        e.currentTarget.style.borderLeft = "2px solid #000000";
                        e.currentTarget.style.borderBottom = "2px solid #3a3a3a";
                        e.currentTarget.style.borderRight = "2px solid #3a3a3a";
                        e.currentTarget.style.boxShadow = "inset -1px -1px 0px #555555";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.borderTop = searchOpen ? "2px solid #000000" : "2px solid #3a3a3a";
                        e.currentTarget.style.borderLeft = searchOpen ? "2px solid #000000" : "2px solid #3a3a3a";
                        e.currentTarget.style.borderBottom = searchOpen ? "2px solid #3a3a3a" : "2px solid #000000";
                        e.currentTarget.style.borderRight = searchOpen ? "2px solid #3a3a3a" : "2px solid #000000";
                        e.currentTarget.style.boxShadow = searchOpen ? "inset -1px -1px 0px #555555" : "inset 1px 1px 0px #555555";
                    }}
                >
                    <p className="font-pixel text-[8px] uppercase text-zinc-500 group-hover:text-white transition-colors duration-300 mb-3">✦</p>
                    <p className="font-pixel text-[9px] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300 leading-loose">Search</p>
                    <p className="text-xs text-zinc-500 mt-2 font-roboto">looking for something?</p>
                </button>

            </div>

            {/* search input — appears below cards */}
            {searchOpen && (
                <div
                    className="w-full max-w-6xl mt-4 flex items-center gap-4 px-4 py-4"
                    style={{
                        borderTop: "2px solid #000000",
                        borderLeft: "2px solid #000000",
                        borderBottom: "2px solid #3a3a3a",
                        borderRight: "2px solid #3a3a3a",
                        boxShadow: "inset -1px -1px 0px #555555",
                        background: "#0a0a0a",
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