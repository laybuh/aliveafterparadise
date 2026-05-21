export default function About() {
    return (
        <main className="min-h-screen px-10 pt-32 pb-20 max-w-4xl mx-auto">

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
                    <span className="font-pixel text-zinc-600 text-[8px]">✦ about</span>
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
                        About Me
                    </h1>
                </div>
            </div>

            {/* content */}
            <div className="flex flex-col md:flex-row gap-16">

                {/* image placeholder */}
                <div
                    className="w-full md:w-[250px] h-[300px] flex-shrink-0"
                    style={{
                        background: "linear-gradient(135deg, #1a0505, #120818, #0a0a14)",
                        border: "1px solid #8E488D44",
                    }}
                />

                {/* bio */}
                <div className="flex flex-col gap-6">
                    <p className="font-roboto text-zinc-400 text-sm leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    <p className="font-roboto text-zinc-400 text-sm leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    {/* links */}
                    <div className="flex flex-col gap-3 mt-4">
                        <p className="font-pixel text-[8px] text-zinc-600 uppercase mb-2">
                            Find Me
                        </p>

                        <a href="https://archiveofourown.org/users/themichiferqueen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-roboto text-xs text-zinc-500 hover:text-white tracking-widest uppercase transition-colors duration-300"
                        >
                            ✦ AO3
                        </a>

                        <a href="https://instagram.com/aliveafterparadise"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-roboto text-xs text-zinc-500 hover:text-white tracking-widest uppercase transition-colors duration-300"
                        >
                            ✦ Instagram
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}