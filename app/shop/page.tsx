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
            <div className="mb-16">
                <p className="font-roboto text-xs text-zinc-500 tracking-[0.2em] uppercase mb-4">
                    ✦ Shop
                </p>
                <h1 className="font-typewriter text-4xl md:text-5xl tracking-wide uppercase text-white mb-6">
                    The Shop
                </h1>
                <div
                    className="h-[1px] w-full opacity-30"
                    style={{
                        background: "linear-gradient(to right, #BC2205, #AD3200, #D00034, #8E488D, #9A659F, #3BB7EE, #26C2F8)",
                    }}
                />
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
                                    className="font-roboto text-xs text-zinc-500 hover:text-white tracking-widest uppercase transition-colors duration-300 px-4 py-2"
                                    style={{ border: "1px solid #ffffff11" }}
                                    onMouseEnter={e => (e.currentTarget.style.borderColor = "#BC2205")}
                                    onMouseLeave={e => (e.currentTarget.style.borderColor = "#ffffff11")}
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