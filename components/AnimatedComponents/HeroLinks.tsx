"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";

export default function HeroLinks({
  whatsApp,
}: {
  whatsApp?: string | undefined;
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-center" dir="rtl">
      {whatsApp && (
        <motion.a
          href={`https://wa.me/${whatsApp.replace(/\+/g, "")}?text=`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-sm bg-[#2A6250] text-white px-8 py-4 rounded-full font-bold md:text-lg shadow-[0_10px_20px_rgba(42,98,80,0.2)] transition-all duration-300 hover:bg-[#012437] hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(1,36,55,0.25)]"
          whileTap={{ scale: 0.98 }}>
          <FaWhatsapp className="w-5 h-5" />
          احجز قهوجي لمناسبتك
        </motion.a>
      )}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
        <Link
          href="#packages"
          className="flex items-center gap-3 border-2 border-[#2A6250] text-[#2A6250] px-8 py-4 rounded-full font-bold md:text-lg text-sm transition-all duration-300 hover:bg-[#2A6250] hover:text-white active:scale-[0.98]">
          شاهد الباقات
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
}
