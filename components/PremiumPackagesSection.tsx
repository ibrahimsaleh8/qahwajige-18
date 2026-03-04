"use client";

import { PackageData } from "@/lib/responseType";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function PremiumPackagesSection({
  whatsapp,
  packages,
}: {
  whatsapp: string;
  packages: PackageData[];
}) {
  const whatsappNumber = whatsapp.replace("+", "");

  if (!packages?.length) return null;

  return (
    <section id="packages" dir="rtl" className="py-28 bg-[#F8FBF7]">
      <div className="max-w-7xl mx-auto md:px-6 px-2">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="px-6 py-2 rounded-full bg-white border border-[#E5F3DD] text-[#2A6250] text-sm font-semibold">
            باقاتنا
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#012437]">
            اختر الباقة المناسبة لفعاليتك
          </h2>

          <p className="mt-6 text-[#012437]/70 max-w-2xl mx-auto">
            باقات مصممة بعناية لتقديم تجربة ضيافة عربية فاخرة.
          </p>
        </div>

        {/* Packages */}
        <div className="space-y-16">
          {packages.map((pkg, index) => {
            const isFeatured = index === 1;

            const message = encodeURIComponent(
              `مرحباً 👋 أود طلب باقة "${pkg.title}" من فضلكم.`,
            );

            const waLink = `https://wa.me/${whatsappNumber}?text=${message}`;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row overflow-hidden rounded-[40px] transition-all duration-500 ${
                  isFeatured
                    ? "bg-[#2A6250] text-white shadow-2xl"
                    : "bg-white border border-[#E5F3DD]"
                }`}>
                {/* Image Side */}
                {pkg.image && (
                  <div className="relative lg:w-1/2 h-80 lg:h-auto">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Content Side */}
                <div className="flex flex-col justify-center p-10 lg:w-1/2">
                  {isFeatured && (
                    <span className="mb-4 text-xs font-bold bg-white/20 px-4 py-1.5 rounded-full w-fit">
                      الأكثر طلباً
                    </span>
                  )}

                  <h3 className="text-2xl font-bold mb-6">{pkg.title}</h3>

                  <ul className="space-y-3 mb-10">
                    {pkg.features?.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 text-sm ${
                          isFeatured ? "text-white/90" : "text-[#012437]/70"
                        }`}>
                        <Check
                          className={`size-4 mt-1 ${
                            isFeatured ? "text-white" : "text-[#2A6250]"
                          }`}
                          strokeWidth={2.5}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
                      isFeatured
                        ? "bg-white text-[#2A6250] hover:bg-[#E5F3DD]"
                        : "bg-[#2A6250] text-white hover:bg-[#012437]"
                    }`}>
                    <FaWhatsapp className="size-4" />
                    اطلب الباقة الآن
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
