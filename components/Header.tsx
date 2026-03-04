"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Coffee, ArrowLeft } from "lucide-react";
import { HeaderData } from "@/lib/responseType";
import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "من نحن" },
  { href: "/#services", label: "خدماتنا المميزة" },
  { href: "/#events", label: "فعالياتنا" },
  { href: "/blog", label: "خدمات الضيافة" },
  { href: "/#packages", label: "عروضنا وباقاتنا" },
  { href: "/#gallery", label: "معرض الصور" },
  { href: "/#contact", label: "اتصل بنا" },
];

type HeaderProps = HeaderData & {
  whatsapp: string;
};

export function Header({ brandName, whatsapp }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const waHref = `https://wa.me/${
    whatsapp.includes("+") ? whatsapp.split("+").join("") : whatsapp
  }?text=`;

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#E5F3DD] border-b border-[#97CEAD]/40 shadow-[0_2px_20px_rgba(1,36,55,0.06)] transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-[#2A6250] rounded-full flex items-center justify-center text-white shadow-[0_4px_15px_rgba(42,98,80,0.3)]">
              <Coffee className="w-5 h-5" />
            </div>
            <p className="font-black text-lg md:text-2xl tracking-tight text-[#012437] leading-none">
              {brandName}
            </p>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" dir="rtl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-bold text-[#2A6250] transition-colors duration-200 after:absolute after:-bottom-1 after:right-0 after:h-0.5 after:w-0 after:bg-[#97CEAD] after:transition-all after:duration-300 hover:after:w-full">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Mobile menu toggle */}
            <button
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMenu}
              className="lg:hidden cursor-pointer p-2 text-[#012437]">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* CTA Button */}
            <a
              target="_blank"
              href={waHref}
              className="hidden md:flex items-center gap-2 bg-[#2A6250] text-white rounded-full px-6 py-2.5 font-bold text-sm shadow-[0_10px_20px_rgba(42,98,80,0.2)] hover:bg-[#012437] hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(1,36,55,0.25)] transition-all duration-300">
              <span>احجز الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[#97CEAD]/40 bg-white">
            <nav
              className="container mx-auto px-6 py-6 flex flex-col gap-1"
              dir="rtl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="py-3 border-b border-[#97CEAD]/30 text-[#012437] font-medium hover:text-[#2A6250] transition-colors duration-200">
                  {link.label}
                </Link>
              ))}

              <a
                target="_blank"
                href={waHref}
                className="flex items-center justify-center gap-2 bg-[#2A6250] text-white rounded-full py-3 mt-5 font-bold shadow-[0_10px_20px_rgba(42,98,80,0.2)] hover:bg-[#012437] transition-colors duration-200">
                <span>احجز الآن</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
