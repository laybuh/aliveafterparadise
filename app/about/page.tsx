export default function About() {
    return (
        <main
            className="min-h-screen px-10 pt-32 pb-20 max-w-4xl mx-auto"
            style={{
                background: "radial-gradient(ellipse at 20% 20%, #1a050588 0%, transparent 40%), #0a0a0a",
            }}
        >
            {/* page header */}
            <div className="mb-16">
                <p className="font-roboto text-xs text-zinc-600 tracking-[0.2em] uppercase mb-4">
                    ✦ About
                </p>
                <h1 className="font-typewriter text-4xl md:text-5xl tracking-wide uppercase text-white mb-6">
                    About Me
                </h1>
                <div
                    className="h-[1px] w-full opacity-30"
                    style={{
                        background: "linear-gradient(to right, #BC2205, #AD3200, #D00034, #8E488D, #9A659F, #3BB7EE, #26C2F8)",
                    }}
                />
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
                        <p className="font-typewriter text-xs text-zinc-600 tracking-[0.2em] uppercase mb-2">
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