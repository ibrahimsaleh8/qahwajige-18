"use client";

import { GalleryImageData } from "@/lib/responseType";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export function GallerySection({ gallery }: { gallery: GalleryImageData[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="py-10 bg-linear-to-b from-white to-[#F8FBF6]"
      dir="rtl">
      <div className="max-w-7xl mx-auto md:px-6 px-2">
        {/* ───── Gallery Grid ───── */}
        {gallery.length === 0 ? (
          <div className="flex items-center justify-center min-h-80 rounded-[40px] bg-[#E5F3DD]/40 border border-[#97CEAD]/30">
            <p className="text-[#2A6250]/60 text-sm">المعرض قيد التحديث</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[220px]">
            {gallery.slice(0, 8).map((image, index) => {
              const isLarge = index === 0 || index === 3;

              return (
                <motion.div
                  key={image.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className={`relative rounded-[28px] overflow-hidden group cursor-pointer ${
                    isLarge
                      ? "md:col-span-2 md:row-span-2"
                      : "col-span-1 row-span-1"
                  }`}>
                  <Image
                    src={image.url}
                    alt={image.alt ?? `صورة-${index + 1}`}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[1px]"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-linear-to-t from-[#012437]/70 via-[#012437]/30 to-transparent transition-opacity duration-300 ${
                      hovered === index ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  {/* Caption Centered */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hovered === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <p className="font-bold text-sm md:text-base mb-3">
                      {image.alt ?? `صورة-${index + 1}`}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
