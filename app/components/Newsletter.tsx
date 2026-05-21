"use client";

import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        setEmail("");
    };

    const gradient = "linear-gradient(to right, #BC2205, #AD3200, #D00034, #8E488D, #9A659F, #3BB7EE, #26C2F8)";

    return (
        <section className="w-full px-6 md:px-10 py-20">

            <div
                className="max-w-7xl mx-auto py-16 px-6 md:px-10"
                style={{
                    background: "#0a0a0a",
                    borderTop: "2px solid #3a3a3a",
                    borderLeft: "2px solid #3a3a3a",
                    borderBottom: "2px solid #000000",
                    borderRight: "2px solid #000000",
                    boxShadow: "inset 1px 1px 0px #555555, inset -1px -1px 0px #000000",
                }}
            >

                {/* win98 title bar */}
                <div
                    className="w-full flex items-center justify-between px-3 py-1 mb-10"
                    style={{
                        background: "#0a0a0a",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "transparent",
                        borderImage: gradient + " 1",
                    }}
                >
                    <span className="font-pixel text-white text-[8px]">stay updated</span>
                    <span
                        className="font-pixel text-white text-[8px] px-2 py-[2px]"
                        style={{
                            background: "#1a1a1a",
                            borderTop: "1px solid #555",
                            borderLeft: "1px solid #555",
                            borderBottom: "1px solid #000",
                            borderRight: "1px solid #000",
                        }}
                    >✕</span>
                </div>

                <div className="flex flex-col items-center text-center gap-6 max-w-xl mx-auto">

                    <h2 className="font-pixel text-lg md:text-xl uppercase text-white leading-loose">
                        Join the End.
                    </h2>

                    <p className="font-roboto text-zinc-400 text-sm leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Be the first to know about new stories, art, and updates.
                    </p>

                    {submitted ? (
                        <p className="font-pixel text-[9px] text-zinc-400 uppercase leading-loose">
                            ✦ subscribed!
                        </p>
                    ) : (
                        <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="flex-1 bg-transparent px-4 py-3 font-roboto text-xs text-white placeholder-zinc-600 tracking-widest outline-none"
                                style={{
                                    borderTop: "2px solid #000000",
                                    borderLeft: "2px solid #000000",
                                    borderBottom: "2px solid #3a3a3a",
                                    borderRight: "2px solid #3a3a3a",
                                    boxShadow: "inset -1px -1px 0px #555555",
                                }}
                            />
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="font-pixel text-[9px] text-white uppercase px-8 py-3 transition-all duration-150"
                                style={{
                                    background: "#0a0a0a",
                                    borderTop: "2px solid #3a3a3a",
                                    borderLeft: "2px solid #3a3a3a",
                                    borderBottom: "2px solid #000000",
                                    borderRight: "2px solid #000000",
                                    boxShadow: "inset 1px 1px 0px #555555",
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
                                subscribe
                            </button>
                        </div>
                    )}

                </div>
            </div>

        </section>
    );
}