"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong py-3 shadow-lg shadow-midnight/50"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Wordmark */}
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

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center justify-end flex-1 ml-10 gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-2.5 py-2 text-[13px] font-medium tracking-wide whitespace-nowrap transition-colors duration-300 rounded-lg ${
                    isActive
                      ? "text-pure-white"
                      : "text-slate-light hover:text-pure-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-azure rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Donate Button */}
            <Link
              href="/donate"
              className="ml-4 px-4 py-2 text-[13px] font-bold tracking-widest text-pure-white bg-gradient-to-r from-azure to-sky border border-azure/30 hover:from-sky hover:to-azure shadow-[0_4px_15px_rgba(37,99,235,0.2)] hover:scale-105 duration-300 rounded-lg uppercase whitespace-nowrap"
            >
              DONATE
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center xl:hidden ml-auto">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors hover:bg-white/5"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-pure-white rounded-full transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-pure-white rounded-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-pure-white rounded-full transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-500 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-midnight/95 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col justify-center px-8">
          <div className="space-y-2">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-2xl font-display font-semibold py-2 transition-all duration-500 ${
                    mobileOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  } ${isActive ? "text-azure" : "text-silver hover:text-pure-white"}`}
                  style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms" }}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Donate Button */}
            <Link
              href="/donate"
              className={`block text-center text-xl font-bold py-3 mt-6 text-pure-white bg-gradient-to-r from-azure to-sky rounded-xl shadow-lg uppercase transition-all duration-500 ${
                mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: mobileOpen ? `${navLinks.length * 50}ms` : "0ms" }}
            >
              DONATE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
