"use client";

import { FooterData } from "@/lib/responseType";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7247.733529263881!2d46.7653!3d24.731454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f013bec0d4b7b%3A0xeb4d9048d7b13647!2z2YLZh9mI2KzZiiDZiNi12KjYp9io2YrZhiDZgtmH2YjYqSDYp9mE2LHZitin2LY!5e0!3m2!1sar!2str!4v1728329118756!5m2!1sar!2str";

export default function ContactSection({
  address,
  phone,
  email,
  whatsapp,
}: FooterData & { whatsapp: string }) {
  const formattedWhatsapp = whatsapp?.replace("+", "");

  const contactItems = [
    {
      icon: Phone,
      label: "الهاتف",
      value: phone,
      href: phone ? `tel:${phone}` : null,
      dir: "ltr" as const,
    },
    {
      icon: MessageCircle,
      label: "واتساب",
      value: whatsapp,
      href: whatsapp ? `https://wa.me/${formattedWhatsapp}` : null,
      dir: "ltr" as const,
    },
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: email,
      href: email ? `mailto:${email}` : null,
      dir: "rtl" as const,
    },
    {
      icon: MapPin,
      label: "العنوان",
      value: address,
      href: null,
      dir: "rtl" as const,
    },
  ].filter((item) => item.value);

  return (
    <section id="contact" dir="rtl" className="py-20 md:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto md:px-6 px-2">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E5F3DD] text-[#2A6250] text-sm font-bold mb-4 border border-[#97CEAD]/40">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2A6250] mb-4">
            خل الكلام بيننا سهل
          </h2>
          <p className="text-[#012437]/70 max-w-xl mx-auto leading-relaxed text-base">
            نحن هنا لخدمتكم على مدار الساعة. اختر طريقة التواصل اللي تناسبك.
          </p>
        </div>

        {/* ── Main Contact Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#012437] rounded-[48px] overflow-hidden shadow-[0_40px_80px_-12px_rgba(1,36,55,0.3)] relative grid lg:grid-cols-12 gap-0">
          {/* Decorative Glows */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#97CEAD]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#2A6250]/20 rounded-full blur-[80px] pointer-events-none" />

          {/* ── Left Panel ── */}
          <div className="lg:col-span-5 p-10 md:p-14 flex flex-col justify-between gap-10">
            {/* Heading */}
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-snug">
                جاهزين
                <br />
                <span className="text-[#97CEAD]">لخدمتك</span>
              </h3>
              <p className="text-[#E5F3DD]/70 text-sm md:text-base leading-relaxed">
                تواصل معنا الآن لحجز موعدك وضمان أفضل خدمة ضيافة في الرياض.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              {whatsapp && (
                <a
                  href={`https://wa.me/${formattedWhatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#2A6250] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md hover:bg-[#97CEAD] hover:text-[#012437] hover:-translate-y-1 transition-all duration-300">
                  <FaWhatsapp className="w-5 h-5" />
                  تواصل الآن
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 border-2 border-[#2A6250] text-[#97CEAD] px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#2A6250] hover:text-white transition-all duration-300">
                  اتصل بنا
                </a>
              )}
            </div>

            {/* Contact Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-[#2A6250]/20 border border-[#2A6250]/40 rounded-3xl p-5 hover:bg-[#2A6250]/30 transition-colors duration-200">
                    <div className="w-10 h-10 bg-[#2A6250] rounded-xl flex items-center justify-center mb-3">
                      <Icon
                        className="w-4 h-4 text-[#E5F3DD]"
                        strokeWidth={1.8}
                      />
                    </div>
                    <span className="text-xs text-[#97CEAD]/70 block mb-1">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        dir={item.dir}
                        className="font-bold text-sm text-white break-all hover:text-[#97CEAD] transition-colors duration-200">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#E5F3DD]/75 leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Right Panel ── Map ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative min-h-96 lg:min-h-full overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-[#012437] to-transparent z-10 pointer-events-none" />
            <iframe
              src={mapEmbedSrc}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع الشركة على الخريطة"
              className="absolute inset-0 w-full h-full border-0 rounded-r-[48px] opacity-95"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
