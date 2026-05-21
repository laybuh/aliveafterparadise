"use client";

import Link from "next/link";

const products = [
    {
        title: "Lorem Ipsum Product",
        price: "$00.00",
        slug: "/shop/lorem-ipsum",
    },
    {
        title: "Lorem Ipsum Product",
        price: "$00.00",
        slug: "/shop/lorem-ipsum-2",
    },
    {
        title: "Lorem Ipsum Product",
        price: "$00.00",
        slug: "/shop/lorem-ipsum-3",
    },
];

export default function ShopPreview() {
    return (
        <section className="w-full px-10 py-20 max-w-7xl mx-auto">

            {/* section header */}
            <div className="flex items-center justify-between mb-12">
                <h2 className="font-typewriter text-xl tracking-[0.2em] uppercase text-white">
                    ✦ Shop
                </h2>
                <Link
                    href="/shop"
                    className="font-roboto text-xs text-zinc-300 hover:text-white tracking-widest uppercase transition-colors duration-300"
                >
                    View All →
                </Link>
            </div>

            {/* products grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <Link
                        key={index}
                        href={product.slug}
                        className="group flex flex-col transition-colors duration-300"
                        style={{ border: "1px solid #ffffff11" }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = "#BC220544")}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = "#ffffff11")}
                    >
                        {/* product image placeholder */}
                        <div
                            className="w-full h-[250px]"
                            style={{
                                background: "linear-gradient(135deg, #1a0505, #120818, #0a0a14)",
                            }}
                        />

                        {/* product info */}
                        <div className="p-6">
                            <h3 className="font-typewriter text-sm tracking-[0.15em] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300 mb-2">
                                {product.title}
                            </h3>
                            <p className="font-roboto text-xs text-zinc-300">
                                {product.price}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

        </section>
    );
}