"use client";

import { motion } from "framer-motion";
import { Calendar, Coffee, CheckCircle, Users } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "اختر موعدك",
    description: "حدد اليوم والوقت الذي يناسب مناسبتك بسهولة.",
  },
  {
    icon: Coffee,
    title: "اختيار الباقة",
    description: "اختر الباقة المناسبة من عروضنا المميزة.",
  },
  {
    icon: Users,
    title: "تأكيد الحجز",
    description: "فريقنا سيتواصل معك لتأكيد جميع التفاصيل.",
  },
  {
    icon: CheckCircle,
    title: "استمتع بالمناسبة",
    description: "نقدم خدمة الضيافة المثالية لضيوفك.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-white" dir="rtl">
      <div className="w-full max-w-7xl mx-auto md:px-6 px-2">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E5F3DD] text-[#2A6250] text-sm font-bold mb-4 border border-[#97CEAD]/40">
            خطوات الحجز
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A6250] mb-4">
            كيف تحجز خدمتنا؟
          </h2>
          <p className="text-[#012437]/65 max-w-xl mx-auto leading-relaxed">
            اتبع هذه الخطوات البسيطة لتضمن تجربة ضيافة سلسة ومميزة في مناسبتك.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-[#F3F9F2] rounded-[32px] shadow-[0_8px_24px_-6px_rgba(42,98,80,0.08)] hover:shadow-[0_12px_36px_-8px_rgba(42,98,80,0.15)] transition-all duration-300">
                <div className="w-14 h-14 mb-4 flex items-center justify-center bg-[#97CEAD]/20 rounded-xl text-[#2A6250]">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#2A6250]">
                  {step.title}
                </h3>
                <p className="text-[#012437]/70 text-sm">{step.description}</p>
                <div className="mt-3 text-[#97CEAD] font-bold text-xl">
                  {index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
