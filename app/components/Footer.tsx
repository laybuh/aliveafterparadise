import Link from "next/link";

const socialLinks = [
    { href: "https://instagram.com/themichiferqueen", label: "Instagram" },
    { href: "https://tumblr.com", label: "Tumblr" },
    { href: "https://youtube.com", label: "YouTube" },
    { href: "https://archiveofourown.org/users/themichiferqueen", label: "AO3" },
];

export default function Footer() {
    const gradient = "linear-gradient(to right, #BC2205, #AD3200, #D00034, #8E488D, #9A659F, #3BB7EE, #26C2F8)";

    return (
        <footer className="w-full mt-20">

            {/* top gradient line */}
            <div className="h-[1px] w-full opacity-50" style={{ background: gradient }} />

            <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* left - site info */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-typewriter text-white text-sm tracking-[0.2em] uppercase">
                        ✦ Real Gods Require Blood
                    </h3>
                    <p className="font-roboto text-zinc-400 text-xs leading-6">
                        Your #1 Source for Biblical Erotica
                    </p>
                    <p className="font-roboto text-zinc-700 text-xs">
                        © 2026 All rights reserved.
                    </p>
                </div>

                {/* right - socials */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-typewriter text-zinc-400 text-xs tracking-[0.2em] uppercase mb-2">
                        Find Me
                    </h4>
                    {socialLinks.map((link) => (

                        <a key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-roboto text-xs text-zinc-400 hover:text-white tracking-widest uppercase transition-colors duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

            </div>

            {/* bottom gradient line */}
            <div className="h-[1px] w-full opacity-50" style={{ background: gradient }} />

        </footer>
    );
}