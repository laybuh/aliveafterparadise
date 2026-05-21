"use client";

import { useState } from "react";

export default function AgeGate() {
    const [declined, setDeclined] = useState(false);
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(6px)" }}
        >
            <div
                className="flex flex-col items-center gap-6 px-10 py-12 max-w-sm w-full mx-4 text-center"
                style={{ border: "1px solid #ffffff11", background: "#0a0a0a" }}
            >
                {!declined ? (
                    <>
                        <p className="font-typewriter text-white text-xs tracking-[0.3em] uppercase">
                            ✦ Real Gods Require Blood
                        </p>
                        <p className="font-roboto text-zinc-400 text-xs leading-6">
                            this site contains mature content intended for adults.
                        </p>
                        <p className="font-typewriter text-white text-sm tracking-[0.2em] uppercase">
                            are you 18 or older?
                        </p>
                        <div className="flex gap-4 w-full">
                            <button
                                onClick={() => setVisible(false)}
                                className="flex-1 py-3 font-typewriter text-xs tracking-[0.2em] uppercase text-white border border-white/20 hover:border-white transition-colors duration-300"
                            >
                                yes, enter
                            </button>
                            <button
                                onClick={() => setDeclined(true)}
                                className="flex-1 py-3 font-typewriter text-xs tracking-[0.2em] uppercase text-zinc-600 border border-white/10 hover:border-white/20 transition-colors duration-300"
                            >
                                no, leave
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <p className="font-typewriter text-white text-xs tracking-[0.3em] uppercase">
                            ✦ Real Gods Require Blood
                        </p>
                        <p className="font-typewriter text-sm tracking-[0.2em] uppercase text-zinc-400">
                            adults only.
                        </p>
                        <p className="font-roboto text-zinc-500 text-xs leading-6">
                            this site contains mature content and is not suitable for those under 18. we appreciate your honesty.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}