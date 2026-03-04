import { AboutSectionData, WhyUsFeatureData } from "@/lib/responseType";
import Image from "next/image";

export default function AboutSection({
  description1,
  label,
  title,
  features,
  whyUsDescription,
  image,
}: AboutSectionData & {
  features?: WhyUsFeatureData[];
  whyUsDescription: string;
}) {
  return (
    <section id="about" className="py-20 md:py-28 bg-white" dir="rtl">
      <div className="w-full max-w-7xl mx-auto md:px-6 px-2">
        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E5F3DD] text-[#2A6250] text-sm font-bold mb-4 border border-[#97CEAD]/40">
            {label}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A6250] mb-4">
            {title}
          </h2>
          {description1 && (
            <p className="text-[#012437]/70 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
              {description1}
            </p>
          )}
        </div>
        {/* ── Bottom Banner ── */}
        {(image || whyUsDescription) && (
          <div className="bg-[#E5F3DD] rounded-[48px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-[0_20px_40px_-10px_rgba(42,98,80,0.15)]">
            {/* Image side */}
            {image && (
              <div className="relative min-h-72 lg:min-h-105 overflow-hidden">
                <Image
                  src={image}
                  alt={title ?? ""}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#012437]/40 to-transparent" />
              </div>
            )}

            {/* Text side */}
            {whyUsDescription && (
              <div className="flex flex-col justify-center p-10 md:p-14 relative overflow-hidden">
                {/* Decorative glow blob */}
                <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#97CEAD]/30 rounded-full blur-3xl pointer-events-none" />

                <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[#2A6250] text-sm font-bold mb-5 w-fit border border-[#97CEAD]/50 shadow-sm">
                  لماذا نحن؟
                </span>

                <p className="text-[#012437] text-lg leading-relaxed font-medium relative z-10">
                  {whyUsDescription}
                </p>

                {/* Stat pills */}
                <div className="flex flex-wrap gap-3 mt-8 relative z-10">
                  <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-[0_8px_24px_-6px_rgba(42,98,80,0.12)] border border-[#97CEAD]/30">
                    <span className="font-black text-[#2A6250] text-lg">
                      ٥٠٠+
                    </span>
                    <span className="text-sm text-[#012437]/70">عميل سعيد</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-[0_8px_24px_-6px_rgba(42,98,80,0.12)] border border-[#97CEAD]/30">
                    <span className="font-black text-[#2A6250] text-lg">
                      ١٠٠٪
                    </span>
                    <span className="text-sm text-[#012437]/70">رضا تام</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {/* ── Features Grid ── */}
        {features && features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] p-8 border border-[#97CEAD]/40 shadow-[0_20px_40px_-10px_rgba(42,98,80,0.08)] hover:shadow-[0_30px_60px_-12px_rgba(1,36,55,0.12)] hover:-translate-y-1 transition-all duration-300 group">
                {/* Icon badge */}
                <div className="w-16 h-16 bg-[#E5F3DD] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black text-[#2A6250]">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#012437] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#012437]/65 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
