"use client";

export default function Shop() {
    const products = [
        {
            title: "Lorem Ipsum Product",
            price: "$00.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            id: "1",
        },
        {
            title: "Lorem Ipsum Product",
            price: "$00.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            id: "2",
        },
        {
            title: "Lorem Ipsum Product",
            price: "$00.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            id: "3",
        },
        {
            title: "Lorem Ipsum Product",
            price: "$00.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            id: "4",
        },
        {
            title: "Lorem Ipsum Product",
            price: "$00.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            id: "5",
        },
        {
            title: "Lorem Ipsum Product",
            price: "$00.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            id: "6",
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
                    <span className="font-pixel text-zinc-600 text-[8px]">✦ shop</span>
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
                        The Shop
                    </h1>
                </div>
            </div>

            {/* products grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group flex flex-col cursor-pointer transition-colors duration-300"
                        style={{ border: "1px solid #ffffff11" }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = "#BC220544")}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = "#ffffff11")}
                    >
                        {/* product image */}
                        <div
                            className="w-full h-[280px]"
                            style={{
                                background: "linear-gradient(135deg, #1a0505, #120818, #0a0a14)",
                            }}
                        />

                        {/* product info */}
                        <div className="p-6 flex flex-col gap-3">
                            <h2 className="font-typewriter text-sm tracking-[0.15em] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300">
                                {product.title}
                            </h2>
                            <p className="font-roboto text-xs text-zinc-500 leading-6">
                                {product.description}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                                <p className="font-typewriter text-sm text-white tracking-widest">
                                    {product.price}
                                </p>
                                <button
                                    className="font-pixel text-[8px] text-zinc-400 hover:text-white uppercase transition-all duration-150 px-4 py-2"
                                    style={{
                                        background: "#0a0a0a",
                                        borderTop: "1px solid #3a3a3a",
                                        borderLeft: "1px solid #3a3a3a",
                                        borderBottom: "1px solid #000000",
                                        borderRight: "1px solid #000000",
                                        boxShadow: "inset 1px 1px 0px #555555",
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderTop = "1px solid #000000";
                                        e.currentTarget.style.borderLeft = "1px solid #000000";
                                        e.currentTarget.style.borderBottom = "1px solid #3a3a3a";
                                        e.currentTarget.style.borderRight = "1px solid #3a3a3a";
                                        e.currentTarget.style.boxShadow = "inset -1px -1px 0px #555555";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderTop = "1px solid #3a3a3a";
                                        e.currentTarget.style.borderLeft = "1px solid #3a3a3a";
                                        e.currentTarget.style.borderBottom = "1px solid #000000";
                                        e.currentTarget.style.borderRight = "1px solid #000000";
                                        e.currentTarget.style.boxShadow = "inset 1px 1px 0px #555555";
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </main>
    );
}