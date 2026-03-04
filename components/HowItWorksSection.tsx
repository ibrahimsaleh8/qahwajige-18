"use client";

import { MessageCircle, CalendarCheck, Coffee } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageCircle,
    title: "تواصل معنا",
    description:
      "راسلنا عبر واتساب أو الهاتف، واخبرنا بنوع مناسبتك وتاريخها وعدد الضيوف.",
  },
  {
    icon: CalendarCheck,
    title: "احجز الباقة",
    description:
      "نختار معك الباقة المناسبة، نحدد التفاصيل ونؤكد الحجز بدون تعقيد.",
  },
  {
    icon: Coffee,
    title: "استمتع بالضيافة",
    description:
      "نصل في الموعد، نجهز كل شيء ونقدم لضيوفك تجربة قهوة عربية أصيلة.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" dir="rtl" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto md:px-6 px-2">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 rounded-full bg-[#E5F3DD] text-[#2A6250] text-sm font-semibold">
            كيف نعمل
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#012437] leading-tight">
            خطوات بسيطة
            <br />
            لراحة بالك
          </h2>

          <p className="mt-6 text-[#012437]/70 max-w-2xl mx-auto">
            من أول تواصل حتى آخر فنجال — نرافقك في كل خطوة.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute right-6 md:right-1/2 md:translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#E5F3DD]" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}>
                  {/* Content */}
                  <div className="md:w-1/2 px-6">
                    <div className="bg-[#F9FBF8] p-8 rounded-3xl border border-[#E5F3DD] shadow-sm hover:shadow-xl transition duration-300">
                      <h3 className="text-xl font-bold text-[#012437] mb-3">
                        {step.title}
                      </h3>

                      <p className="text-[#012437]/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#2A6250] flex items-center justify-center shadow-lg my-6 md:my-0">
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
