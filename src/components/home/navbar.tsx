"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LOGO, NAV_ITEMS } from "@/src/lib/constant";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060612]/80 backdrop-blur border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="shrink-0 cursor-pointer">
          <Link href="/">
            <div className="relative aspect-video w-20 md:w-28">
              <Image src={LOGO} alt="logo" fill className="object-contain" />
            </div>
          </Link>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((link) => (
            <li key={link}>
              <Link
                href={`#${link.toLowerCase()}`}
                className="text-sm text-white tracking-widest font-medium"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            style={{
              background: "linear-gradient(135deg, #7B61FF, #5B3FDE)",
              boxShadow: "0 0 40px rgba(123,97,255,0.3)",
            }}
            className="text-sm px-5 py-2 rounded-xl transition-all duration-300 hover:opacity-90 active:scale-95 font-medium"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white/70 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-64 border-b border-white/5" : "max-h-0"
        }`}
      >
        <div className=" backdrop-blur-xl px-6 pb-6 pt-2 flex flex-col gap-4">
          {NAV_ITEMS.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white py-1 text-sm tracking-wide"
            >
              {link}
            </Link>
          ))}
          <Link
            href="#contact"
            style={{
              background: "linear-gradient(135deg, #7B61FF, #5B3FDE)",
              boxShadow: "0 0 40px rgba(123,97,255,0.3)",
            }}
            className="mt-2 text-sm px-5 py-2.5 rounded-xl text-center"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
