import type { Metadata } from "next";
import { Courier_Prime, Roboto, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AgeGate from "./components/AgeGate";

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

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "themichiferqueen",
  description: "Multi-verse Bible Project + Portfolio for Working Artist Jasmine Plaskon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${courierPrime.variable} ${roboto.variable} ${pressStart.variable}`}>

        {/* background image left */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "30%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
            backgroundImage: "url('/michifer.png')",
            backgroundSize: "contain",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
            opacity: 0.06,
          }}
        />

        {/* background image right */}
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "30%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
            backgroundImage: "url('/michifer.png')",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            opacity: 0.06,
          }}
        />

        <AgeGate />
        <Navbar />
        {children}
        <Footer />

        {/* Ko-fi floating button */}

        <a href="https://ko-fi.com/alifeafterparadise"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2 text-white font-pixel text-[8px] md:text-[9px] px-3 py-2 md:px-4 md:py-3 transition-all duration-150"
          style={{
            background: "#0a0a0a",
            borderTop: "1px solid #3a3a3a",
            borderLeft: "1px solid #3a3a3a",
            borderBottom: "1px solid #000000",
            borderRight: "1px solid #000000",
            boxShadow: "inset 1px 1px 0px #555555",
          }}
        >
          ✦ ko-fi
        </a>
      </body>
    </html>
  );
}