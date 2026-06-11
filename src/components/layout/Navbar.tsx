"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "The Issue", href: "/the-issue" },
  { label: "News", href: "/news" },
  { label: "Stories", href: "/stories" },
  { label: "Wall of Remembrance", href: "/remembrance" },
  { label: "Research and Evidence", href: "/research" },
  { label: "Recover and Support", href: "/recovery" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-[#0a0f1e]/95 backdrop-blur-md py-3 shadow-lg shadow-midnight/30"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT SIDE: Brand Logo */}
          <div className="flex items-center justify-start xl:w-48">
            <Link href="/" className="flex-shrink-0 transition-transform hover:scale-105 duration-300">
              <Image
                src="/images/ISN-Logo.svg"
                alt="It Stops Now Logo"
                width={160}
                height={36}
                priority
                className="h-9 w-auto"
              />
            </Link>
          </div>

          {/* CENTRE NAVIGATION LINKS */}
          <div className="hidden xl:flex items-center justify-center flex-1 gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 text-[15px] font-normal tracking-wide whitespace-nowrap transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-[-8px] left-0 right-0 h-[2px] bg-blue-600 rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE: One CTA button: "TAKE ACTION" */}
          <div className="hidden xl:flex items-center justify-end w-48">
            <Link
              href="/take-action"
              className="px-6 py-2.5 text-xs font-bold tracking-wider text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors duration-300 rounded-full uppercase whitespace-nowrap"
            >
              TAKE ACTION
            </Link>
          </div>

          {/* Mobile Toggle / Hamburger Menu */}
          <div className="flex items-center xl:hidden ml-auto">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors hover:bg-white/5"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown Overlay */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-500 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[#0a0f1e]" />

        <div className="relative h-full flex flex-col justify-center px-8">
          <div className="space-y-5 max-w-xs mx-auto w-full text-center">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-xl font-medium py-2 transition-all duration-500 ${
                    mobileOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  } ${isActive ? "text-blue-500 font-bold" : "text-white/70 hover:text-white"}`}
                  style={{ transitionDelay: mobileOpen ? `${i * 40}ms` : "0ms" }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile TAKE ACTION Button */}
            <div
              className={`pt-6 transition-all duration-500 ${
                mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: mobileOpen ? `${navLinks.length * 40}ms` : "0ms" }}
            >
              <Link
                href="/take-action"
                className="block w-full text-center text-sm font-bold py-3 text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-full uppercase tracking-wider transition-colors duration-300"
              >
                TAKE ACTION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
