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
                    className="w-full flex items-center justify-between px-2 py-1 -mt-4 mb-2"
                    style={{
                        background: "linear-gradient(to right, #BC2205, #8E488D, #26C2F8)",
                    }}
                >
                    <span className="font-pixel text-white text-[8px]">real gods require blood</span>
                    <span className="font-pixel text-white text-[8px] px-1" style={{ background: "#1a1a1a", border: "1px solid #555" }}>✕</span>
                </div>

                {!declined ? (
                    <>
                        <p className="font-pixel text-white text-[8px] tracking-wide uppercase">
                            ✦ age verification
                        </p>
                        <p className="font-roboto text-zinc-400 text-xs leading-6">
                            this site contains mature content intended for adults.
                        </p>
                        <p className="font-pixel text-white text-[9px] leading-6">
                            are you 18 or older?
                        </p>
                        <div className="flex gap-4 w-full">
                            <button
                                onClick={() => setVisible(false)}
                                className="flex-1 py-3 font-pixel text-[8px] uppercase text-white transition-colors duration-300"
                                style={{
                                    borderTop: "2px solid #3a3a3a",
                                    borderLeft: "2px solid #3a3a3a",
                                    borderBottom: "2px solid #000000",
                                    borderRight: "2px solid #000000",
                                    boxShadow: "inset 1px 1px 0px #555555",
                                    background: "#1a1a1a",
                                }}
                            >
                                yes, enter
                            </button>
                            <button
                                onClick={() => setDeclined(true)}
                                className="flex-1 py-3 font-pixel text-[8px] uppercase text-zinc-500 transition-colors duration-300"
                                style={{
                                    borderTop: "2px solid #3a3a3a",
                                    borderLeft: "2px solid #3a3a3a",
                                    borderBottom: "2px solid #000000",
                                    borderRight: "2px solid #000000",
                                    boxShadow: "inset 1px 1px 0px #555555",
                                    background: "#1a1a1a",
                                }}
                            >
                                no, leave
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <p className="font-pixel text-white text-[8px] tracking-wide uppercase">
                            ✦ access denied
                        </p>
                        <p className="font-pixel text-[8px] uppercase text-zinc-400 leading-6">
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