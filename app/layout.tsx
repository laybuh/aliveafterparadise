import type { Metadata } from "next";
import { Courier_Prime, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-typewriter",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Real Gods Require Blood",
  description: "Multi-verse Bible Project + Portfolio for Working Artist Jasmine Plaskon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${courierPrime.variable} ${roboto.variable}`}>
        <Navbar />
        {children}
        <Footer />
        {/* Ko-fi floating button */}

        <a href="https://ko-fi.com/alifeafterparadise"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-black border border-zinc-700 hover:border-white text-white text-xs font-typewriter tracking-[0.15em] uppercase px-4 py-3 transition-all duration-300 hover:bg-zinc-900"
          style={{ boxShadow: "0 0 20px rgba(0,0,0,0.5)" }}
        >
          ✦ tip jar
        </a>
      </body>
    </html>
  );
}