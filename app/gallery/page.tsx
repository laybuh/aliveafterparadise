"use client";

export default function Gallery() {
    const pieces = [
        {
            title: "Lorem Ipsum Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
            artist: "Lorem Artist",
        },
        {
            title: "Lorem Ipsum Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
            artist: "Lorem Artist",
        },
        {
            title: "Lorem Ipsum Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
            artist: "Lorem Artist",
        },
        {
            title: "Lorem Ipsum Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
            artist: "Lorem Artist",
        },
        {
            title: "Lorem Ipsum Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
            artist: "Lorem Artist",
        },
        {
            title: "Lorem Ipsum Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
            artist: "Lorem Artist",
        },
    ];

    return (
        <main className="min-h-screen px-10 pt-32 pb-20 max-w-7xl mx-auto">
            {/* page header */}
            <div
                className="mb-16"
                style={{
                    background: "transparent",
                    borderTop: "1px solid #2a2a2a",
                    borderLeft: "1px solid #2a2a2a",
                    borderBottom: "1px solid #111111",
                    borderRight: "1px solid #111111",
                    boxShadow: "inset 1px 1px 0px #333333, inset -1px -1px 0px #000000",
                }}
            >
                {/* title bar */}
                <div
                    className="w-full flex items-center px-3 py-1"
                    style={{
                        background: "transparent",
                        borderBottomWidth: "1px",
                        borderBottomStyle: "solid",
                        borderBottomColor: "transparent",
                        borderImage: "linear-gradient(to right, #BC2205, #AD3200, #D00034, #8E488D, #9A659F, #3BB7EE, #26C2F8) 1",
                    }}
                >
                    <span className="font-pixel text-zinc-600 text-[8px]">✦ gallery</span>
                </div>

                {/* window content */}
                <div className="px-8 py-8">
                    <h1
                        className="font-pixel text-2xl md:text-3xl uppercase leading-loose"
                        style={{
                            background: "linear-gradient(to right, #BC2205, #D00034, #8E488D, #9A659F, #26C2F8)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        The Visuals
                    </h1>
                </div>
            </div>
            {/* gallery grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pieces.map((piece, index) => (
                    <div key={index} className="flex flex-col gap-4">

                        {/* image placeholder */}
                        <div
                            className="w-full h-[350px]"
                            style={{
                                background: "linear-gradient(135deg, #1a0505, #120818, #0a0a14)",
                                border: "1px solid #8E488D44",
                            }}
                        />

                        {/* piece info */}
                        <p className="font-roboto text-xs text-zinc-400 tracking-[0.2em] uppercase">
                            ✦ {piece.artist}
                        </p>
                        <h2 className="font-typewriter text-sm tracking-[0.15em] uppercase text-white">
                            {piece.title}
                        </h2>
                        <p className="font-roboto text-zinc-500 text-xs leading-6">
                            {piece.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* animation section */}
            <div className="mt-32">
                <div className="mb-12">
                    <p className="font-roboto text-xs text-zinc-400 tracking-[0.2em] uppercase mb-4">
                        ✦ Animation
                    </p>
                    <h2 className="font-typewriter text-3xl tracking-wide uppercase text-white mb-6">
                        In Motion
                    </h2>
                    <div
                        className="h-[1px] w-full opacity-30"
                        style={{
                            background: "linear-gradient(to right, #BC2205, #AD3200, #D00034, #8E488D, #9A659F, #3BB7EE, #26C2F8)",
                        }}
                    />
                </div>

                <div
                    className="w-full h-[400px] flex items-center justify-center text-zinc-500 text-xs tracking-widest uppercase font-roboto"
                    style={{
                        background: "linear-gradient(135deg, #1a0505, #120818, #0a0a14)",
                        border: "1px solid #8E488D44",
                    }}
                >
                    [ animation placeholder ]
                </div>

                <p className="font-roboto text-zinc-500 text-sm leading-8 mt-8 max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

        </main>
    );
}