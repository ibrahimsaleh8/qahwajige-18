"use client";

import { FooterData } from "@/lib/responseType";
import { Mail, MapPin, Phone, Coffee, Sparkles } from "lucide-react";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer({
  address,
  phone,
  brandName,
  email,
  description,
}: FooterData & { description?: string }) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "الرئيسية", href: "/#home" },
    { name: "عن الشركة", href: "/#about" },
    { name: "خدماتنا", href: "/#services" },
    { name: "باقاتنا", href: "/#packages" },
  ];

  return (
    <footer dir="rtl" className="relative mt-24">
      <div className="bg-[#012437] relative overflow-hidden rounded-t-[72px]">
        {/* Soft gradient glow */}
        <div className="absolute -top-40 right-1/2 w-125 h-125 bg-[#2A6250]/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 container mx-auto md:px-6 px-3 py-24">
          {/* ───── CTA Section ───── */}
          <div className="bg-linear-to-br from-[#2A6250] to-[#1F4F42] rounded-[48px] p-12 md:p-16 text-center shadow-[0_40px_100px_-20px_rgba(42,98,80,0.5)] mb-20">
            <span className="inline-block text-sm font-bold bg-white/20 text-[#E5F3DD] px-4 py-1 rounded-full mb-6 border border-white/20">
              احجز الآن
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-snug">
              جاهز لمناسبة لا تُنسى؟
            </h2>

            {description && (
              <p className="text-[#E5F3DD]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                {description}
              </p>
            )}

            <div className="flex flex-col md:flex-row justify-center gap-5">
              <Link
                href="/#contact"
                className="flex items-center justify-center gap-2 bg-white text-[#012437] px-10 py-4 rounded-full font-bold hover:-translate-y-1 hover:shadow-lg transition">
                احجز الآن
                <Sparkles className="w-5 h-5" />
              </Link>

              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 border border-white/40 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition">
                  تواصل عبر الهاتف
                </a>
              )}
            </div>
          </div>

          {/* ───── Main Footer Grid ───── */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#2A6250] rounded-2xl flex items-center justify-center shadow-lg">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black text-white">
                  {brandName}
                </span>
              </div>

              {description && (
                <p className="text-[#E5F3DD]/60 leading-relaxed text-sm">
                  {description}
                </p>
              )}
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white font-bold mb-6">روابط سريعة</h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#E5F3DD]/60 hover:text-[#97CEAD] transition">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/80">
            © {currentYear} {brandName}. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
}
