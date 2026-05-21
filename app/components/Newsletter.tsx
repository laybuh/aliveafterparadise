"use client";

import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setEmail("");
    };

    const gradient = "linear-gradient(to right, #BC2205, #AD3200, #D00034, #8E488D, #9A659F, #3BB7EE, #26C2F8)";

    return (
        <section className="w-full px-10 py-20">

            <div
                className="max-w-7xl mx-auto py-16 px-10"
                style={{ border: "1px solid #ffffff11" }}
            >
                <div className="flex flex-col items-center text-center gap-6 max-w-xl mx-auto">

                    <p className="font-roboto text-xs text-zinc-500 tracking-[0.2em] uppercase">
                        ✦ Stay Updated
                    </p>

                    <h2 className="font-typewriter text-2xl md:text-3xl tracking-[0.2em] uppercase text-white">
                        Join the End.
                    </h2>

                    <p className="font-roboto text-zinc-500 text-sm leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Be the first to know about new stories, art, and updates.
                    </p>

                    {submitted ? (
                        <p className="font-roboto text-xs text-zinc-400 tracking-widest uppercase">
                            ✦ Thank you for subscribing!
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full mt-4">
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="flex-1 bg-transparent px-4 py-3 font-roboto text-xs text-white placeholder-zinc-600 tracking-widest outline-none"
                                style={{ border: "1px solid #ffffff22" }}
                            />
                            <button
                                type="submit"
                                className="font-roboto text-xs text-white tracking-[0.2em] uppercase px-8 py-3 transition-colors duration-300 hover:text-white"
                                style={{
                                    border: "1px solid transparent",
                                    backgroundImage: "linear-gradient(#0a0a0a, #0a0a0a), linear-gradient(to right, #BC2205, #AD3200, #D00034, #8E488D, #9A659F, #3BB7EE, #26C2F8)",
                                    backgroundOrigin: "border-box",
                                    backgroundClip: "padding-box, border-box",
                                }}
                            >
                                Subscribe
                            </button>
                        </form>
                    )}

                </div>
            </div>

        </section>
    );
}