"use client";

export default function StoryList() {
    const stories = [
        {
            title: "Lorem Ipsum Title",
            date: "January 4, 2026",
            series: "Lorem Series",
            tags: ["Lorem", "Ipsum", "Dolor"],
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            slug: "lorem-ipsum",
        },
        {
            title: "Lorem Ipsum Title",
            date: "September 22, 2025",
            series: "Lorem Series",
            tags: ["Lorem", "Ipsum"],
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            slug: "lorem-ipsum-2",
        },
        {
            title: "Lorem Ipsum Title",
            date: "May 24, 2025",
            series: "Lorem Series 2",
            tags: ["Lorem", "Dolor"],
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            slug: "lorem-ipsum-3",
        },
        {
            title: "Lorem Ipsum Title",
            date: "April 12, 2025",
            series: "Lorem Series 2",
            tags: ["Ipsum", "Dolor"],
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            slug: "lorem-ipsum-4",
        },
        {
            title: "Lorem Ipsum Title",
            date: "March 12, 2025",
            series: "Lorem Series",
            tags: ["Lorem", "Ipsum", "Dolor"],
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            slug: "lorem-ipsum-5",
        },
    ];

    return (
        <main className="min-h-screen px-10 pt-32 pb-20 max-w-4xl mx-auto">

            {/* page header */}
            <div className="mb-16">
                <p className="font-roboto text-xs text-zinc-600 tracking-[0.2em] uppercase mb-4">
                    ✦ Writing
                </p>
                <h1 className="font-typewriter text-4xl md:text-5xl tracking-wide uppercase text-white mb-6">
                    Story List
                </h1>
                <div
                    className="h-[1px] w-full opacity-30"
                    style={{
                        background: "linear-gradient(to right, #BC2205, #AD3200, #D00034, #8E488D, #9A659F, #3BB7EE, #26C2F8)",
                    }}
                />
            </div>

            {/* stories */}
            <div className="flex flex-col gap-6">
                {stories.map((story) => (
                    <div
                        key={story.slug}
                        className="group flex flex-col p-8 cursor-pointer transition-colors duration-300"
                        style={{ border: "1px solid #ffffff11" }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = "#8E488D44")}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = "#ffffff11")}
                    >
                        {/* meta */}
                        <div className="flex items-center gap-4 mb-3">
                            <p className="font-roboto text-xs text-zinc-600 tracking-widest uppercase">
                                {story.date}
                            </p>
                            <span className="text-zinc-800">·</span>
                            <p className="font-roboto text-xs text-zinc-600 tracking-widest uppercase">
                                {story.series}
                            </p>
                        </div>

                        {/* title */}
                        <h2 className="font-typewriter text-xl tracking-[0.15em] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300 mb-4">
                            {story.title}
                        </h2>

                        {/* excerpt */}
                        <p className="font-roboto text-xs text-zinc-600 leading-6 mb-6">
                            {story.excerpt}
                        </p>

                        {/* tags */}
                        <div className="flex items-center gap-3 mb-6">
                            {story.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="font-roboto text-xs text-zinc-600 tracking-widest uppercase px-3 py-1"
                                    style={{ border: "1px solid #ffffff11" }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="font-roboto text-xs text-zinc-500 group-hover:text-white transition-colors duration-300 tracking-widest uppercase mt-auto">
                            Read More →
                        </p>
                    </div>
                ))}
            </div>

        </main>
    );
}