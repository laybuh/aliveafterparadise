"use client";
export default function Blog() {
    const posts = [
        {
            title: "Lorem Ipsum Title",
            date: "January 4, 2026",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            slug: "lorem-ipsum",
        },
        {
            title: "Lorem Ipsum Title",
            date: "September 22, 2025",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            slug: "lorem-ipsum-2",
        },
        {
            title: "Lorem Ipsum Title",
            date: "May 24, 2025",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            slug: "lorem-ipsum-3",
        },
        {
            title: "Lorem Ipsum Title",
            date: "April 12, 2025",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            slug: "lorem-ipsum-4",
        },
        {
            title: "Lorem Ipsum Title",
            date: "March 12, 2025",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            slug: "lorem-ipsum-5",
        },
        {
            title: "Lorem Ipsum Title",
            date: "February 23, 2025",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            slug: "lorem-ipsum-6",
        },
    ];

    return (
        <main className="min-h-screen px-10 pt-32 pb-20 max-w-4xl mx-auto">

            {/* page header */}
            <div className="mb-16">
                <p className="font-roboto text-xs text-zinc-400 tracking-[0.2em] uppercase mb-4">
                    ✦ Blog
                </p>
                <h1 className="font-typewriter text-4xl md:text-5xl tracking-wide uppercase text-white mb-6">
                    Latest Posts
                </h1>
                <div
                    className="h-[1px] w-full opacity-30"
                    style={{
                        background: "linear-gradient(to right, #BC2205, #AD3200, #D00034, #8E488D, #9A659F, #3BB7EE, #26C2F8)",
                    }}
                />
            </div>

            {/* posts list */}
            <div className="flex flex-col gap-6">
                {posts.map((post) => (
                    <div
                        key={post.slug}
                        className="group flex flex-col p-8 cursor-pointer transition-colors duration-300"
                        style={{ border: "1px solid #ffffff11" }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = "#8E488D44")}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = "#ffffff11")}
                    >
                        <p className="font-roboto text-xs text-zinc-400 tracking-widest uppercase mb-3">
                            {post.date}
                        </p>
                        <h2 className="font-typewriter text-xl tracking-[0.15em] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300 mb-4">
                            {post.title}
                        </h2>
                        <p className="font-roboto text-xs text-zinc-400 leading-6 mb-6">
                            {post.excerpt}
                        </p>
                        <p className="font-roboto text-xs text-zinc-300 group-hover:text-white transition-colors duration-300 tracking-widest uppercase mt-auto">
                            Read More →
                        </p>
                    </div>
                ))}
            </div>

        </main>
    );
}