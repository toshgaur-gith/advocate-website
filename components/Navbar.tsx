"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/data/site";
import { BrandLogo } from "@/components/BrandLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "glass-nav" : "bg-transparent"}`}>
      <nav className="luxury-container flex h-20 items-center justify-between">
        <BrandLogo compact />

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="group relative text-sm font-medium text-white/82 transition hover:text-white">
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={siteConfig.whatsapp}
            className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gold hover:text-black hover:shadow-[0_0_28px_rgba(200,155,60,0.28)]"
          >
            <MessageCircle size={17} />
            Chat on WhatsApp
          </Link>
        </div>

        <button
          className="grid size-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="border-t border-white/10 bg-black/95 px-4 pb-6 lg:hidden"
          >
            <div className="mx-auto flex max-w-md flex-col gap-2 pt-4">
              <div className="mb-2 border-b border-white/10 pb-5">
                <BrandLogo compact onClick={() => setOpen(false)} />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-3 py-4 text-base font-medium text-white transition hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={siteConfig.whatsapp}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-4 text-sm font-bold text-black"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
