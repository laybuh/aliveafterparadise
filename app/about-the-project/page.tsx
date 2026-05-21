export default function AboutTheProject() {
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
                    <span className="font-pixel text-zinc-600 text-[8px]">✦ the project</span>
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
                        About The Project
                    </h1>
                </div>
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