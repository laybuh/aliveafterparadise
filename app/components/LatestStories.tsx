"use client";

import Link from "next/link";

const stories = [
    {
        title: "Lorem Ipsum Title",
        date: "January 4, 2026",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        slug: "/story-list/lorem-ipsum",
    },
    {
        title: "Lorem Ipsum Title",
        date: "September 22, 2025",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        slug: "/story-list/lorem-ipsum-2",
    },
    {
        title: "Lorem Ipsum Title",
        date: "May 24, 2025",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        slug: "/story-list/lorem-ipsum-3",
    },
];

export default function LatestStories() {
    return (
        <section className="w-full px-10 py-20 max-w-7xl mx-auto">

            {/* section header */}
            <div className="flex items-center justify-between mb-12">
                <h2 className="font-typewriter text-xl tracking-[0.2em] uppercase text-white">
                    ✦ Latest Stories
                </h2>
                <Link
                    href="/story-list"
                    className="font-roboto text-xs text-zinc-300 hover:text-white tracking-widest uppercase transition-colors duration-300"
                >
                    View All →
                </Link>
            </div>

            {/* stories grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stories.map((story, index) => (
                    <Link
                        key={index}
                        href={story.slug}
                        className="group flex flex-col p-8 transition-colors duration-300"
                        style={{ border: "1px solid #ffffff11" }}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = "#8E488D44")}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = "#ffffff11")}
                    >
                        <p className="font-roboto text-xs text-zinc-500 tracking-widest uppercase mb-3">
                            {story.date}
                        </p>
                        <h3 className="font-typewriter text-sm tracking-[0.15em] uppercase text-zinc-300 group-hover:text-white transition-colors duration-300 mb-4">
                            {story.title}
                        </h3>
                        <p className="font-roboto text-xs text-zinc-500 leading-6 mb-6">
                            {story.excerpt}
                        </p>
                        <p className="font-roboto text-xs text-zinc-300 group-hover:text-white transition-colors duration-300 mt-auto tracking-widest uppercase">
                            Read More →
                        </p>
                    </Link>
                ))}
            </div>

        </section>
    );
}