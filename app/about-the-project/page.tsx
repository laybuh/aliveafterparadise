export default function AboutTheProject() {
    return (
        <main className="min-h-screen px-10 pt-32 pb-20 max-w-4xl mx-auto">

            {/* page header */}
            <div className="mb-16">
                <p className="font-roboto text-xs text-zinc-500 tracking-[0.2em] uppercase mb-4">
                    ✦ The Project
                </p>
                <h1 className="font-typewriter text-4xl md:text-5xl tracking-wide uppercase text-white mb-6">
                    About The Project
                </h1>
                <div
                    className="h-[1px] w-full opacity-30"
                    style={{
                        background: "linear-gradient(to right, #BC2205, #AD3200, #D00034, #8E488D, #9A659F, #3BB7EE, #26C2F8)",
                    }}
                />
            </div>

            {/* intro */}
            <div className="flex flex-col gap-8 mb-20">
                <p className="font-roboto text-zinc-400 text-sm leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p className="font-roboto text-zinc-400 text-sm leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            {/* characters section */}
            <div className="mb-20">
                <h2 className="font-typewriter text-2xl tracking-[0.2em] uppercase text-white mb-8">
                    ✦ The Characters
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {["Lorem Character", "Lorem Character", "Lorem Character", "Lorem Character"].map((char, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4 p-8"
                            style={{ border: "1px solid #ffffff11" }}
                        >
                            {/* character image */}
                            <div
                                className="w-full h-[200px]"
                                style={{
                                    background: "linear-gradient(135deg, #1a0505, #120818, #0a0a14)",
                                    border: "1px solid #8E488D44",
                                }}
                            />
                            <h3 className="font-typewriter text-sm tracking-[0.15em] uppercase text-white">
                                {char}
                            </h3>
                            <p className="font-roboto text-xs text-zinc-500 leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* lore section */}
            <div>
                <h2 className="font-typewriter text-2xl tracking-[0.2em] uppercase text-white mb-8">
                    ✦ The Lore
                </h2>
                <div className="flex flex-col gap-6">
                    <p className="font-roboto text-zinc-400 text-sm leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="font-roboto text-zinc-400 text-sm leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

        </main>
    );
}