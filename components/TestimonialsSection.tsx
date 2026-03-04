"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "بيضوا وجهي قدام ضيوفي. القهوة كانت موزونة والجلسات نظيفة ومرتبة — تعامل راقي جداً والصبابين محترفين.",
    author: "أبو فيصل",
    role: "مناسبة عائلية",
    stars: 5,
    featured: false,
  },
  {
    quote:
      "أفضل خدمة قهوجي في الرياض بلا منازع. التزام بالوقت، لبس موحد، ونظافة ملفتة. ضيوفنا أثنوا على الخدمة كثيراً.",
    author: "أم سارة",
    role: "حفل استقبال",
    stars: 5,
    featured: true,
  },
  {
    quote:
      "من أفضل خدمات القهوة العربية في الرياض. الباقات مناسبة والأسعار معقولة. نتعامل معهم في كل فعاليات الشركة.",
    author: "محمد العتيبي",
    role: "فعالية شركات",
    stars: 5,
    featured: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-linear-to-b from-[#F8FBF6] to-white overflow-hidden"
      dir="rtl">
      <div className="max-w-7xl mx-auto md:px-6 px-2">
        {/* ───── Header ───── */}
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-bold text-[#2A6250] bg-[#E5F3DD] px-4 py-1 rounded-full border border-[#97CEAD]/40 mb-4">
            آراء العملاء
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-[#012437] mb-4">
            تجارب نفتخر بها
          </h2>

          <p className="text-[#012437]/60 max-w-xl mx-auto leading-relaxed">
            أكثر من ٥٠٠ مناسبة ناجحة وثقة مستمرة من عملائنا في الرياض.
          </p>
        </div>

        {/* ───── Testimonials Grid ───── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((item, index) => {
            const isFeatured = item.featured;

            return (
              <motion.div
                key={item.author}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className={`relative rounded-[36px] p-10 flex flex-col transition-all duration-500 ${
                  isFeatured
                    ? "bg-[#012437] text-white shadow-[0_40px_100px_-20px_rgba(1,36,55,0.45)] md:-translate-y-6"
                    : "bg-white border border-[#97CEAD]/30 shadow-[0_20px_50px_-15px_rgba(42,98,80,0.12)] hover:-translate-y-2"
                }`}>
                {/* Big decorative quote */}
                <Quote
                  className={`absolute top-8 left-8 w-16 h-16 opacity-10 ${
                    isFeatured ? "text-[#97CEAD]" : "text-[#2A6250]"
                  }`}
                  strokeWidth={1}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      fill={isFeatured ? "#97CEAD" : "#2A6250"}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p
                  className={`leading-relaxed flex-1 mb-10 text-base relative z-10 ${
                    isFeatured ? "text-white/85" : "text-[#012437]/70"
                  }`}>
                  {item.quote}
                </p>

                {/* Divider */}
                <div
                  className={`h-px mb-6 ${
                    isFeatured ? "bg-[#2A6250]/50" : "bg-[#97CEAD]/30"
                  }`}
                />

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-black ${
                      isFeatured
                        ? "bg-[#2A6250] text-[#E5F3DD]"
                        : "bg-[#E5F3DD] text-[#2A6250]"
                    }`}>
                    {item.author.charAt(0)}
                  </div>

                  <div>
                    <p
                      className={`font-bold text-sm ${
                        isFeatured ? "text-white" : "text-[#012437]"
                      }`}>
                      {item.author}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        isFeatured ? "text-[#97CEAD]/80" : "text-[#2A6250]/70"
                      }`}>
                      {item.role}
                    </p>
                  </div>

                  {isFeatured && (
                    <span className="mr-auto text-xs font-bold px-3 py-1 rounded-full bg-[#2A6250]/40 text-[#97CEAD] border border-[#2A6250]/50">
                      التقييم الأعلى
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
