"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "٥٠٠+", label: "مناسبة نُفذت" },
  { value: "١٠+", label: "سنوات خبرة" },
  { value: "١٠٠٪", label: "رضا العملاء" },
];

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20 bg-white" dir="rtl">
      <div className="w-full max-w-[95%] mx-auto">
        <div className="bg-[#012437] rounded-[64px] py-16 md:py-24 px-6 relative overflow-hidden shadow-lg">
          {/* Top-left glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#97CEAD]/30 rounded-full blur-[100px] pointer-events-none" />
          {/* Bottom-right glow */}
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#2A6250]/25 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="text-center hover:scale-105 transition-transform duration-300">
                <span className="block text-5xl md:text-6xl font-extrabold mb-2 text-[#97CEAD] drop-shadow-lg">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base font-medium text-[#E5F3DD]/80">
                  {stat.label}
                </span>
                {/* subtle underline accent */}
                <div className="mt-2 w-12 h-1 bg-[#97CEAD]/50 rounded-full mx-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
