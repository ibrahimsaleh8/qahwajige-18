"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Toast } from "@/app/(Dashboard)/_components/Toast";
import { APP_URL } from "@/lib/ProjectId";

const STORAGE_KEY = (projectId: string) => `rating_${projectId}`;

interface RatingSectionProps {
  projectId: string;
  averageRating: number;
  totalRatings: number;
}

export default function RatingSection({
  projectId,
  averageRating,
  totalRatings,
}: RatingSectionProps) {
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY(projectId));
      if (stored) {
        const value = parseInt(stored, 10);
        if (value >= 1 && value <= 5) setSubmitted(value);
      }
    } catch {}
    setMounted(true);
  }, [projectId]);

  const displayRating = hoverRating || selectedRating;

  const handleStarClick = async (value: number) => {
    if (submitted !== null) return;

    setSelectedRating(value);
    setIsLoading(true);

    try {
      const res = await fetch(`${APP_URL}/api/rating`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, stars: value }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(value);
        localStorage.setItem(STORAGE_KEY(projectId), String(value));
        Toast({ icon: "success", message: "شكراً لتقييمك 💚" });
      } else {
        setSelectedRating(0);
        Toast({
          icon: "error",
          message: data.message || "حدث خطأ في التقييم",
        });
      }
    } catch {
      setSelectedRating(0);
      Toast({ icon: "error", message: "حدث خطأ في التقييم" });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (value: number, interactive = false) => (
    <div className="flex justify-center gap-3" dir="rtl">
      {[1, 2, 3, 4, 5].map((star) => {
        const active = star <= value;

        return interactive ? (
          <motion.button
            key={star}
            type="button"
            aria-label="قيمنا"
            disabled={isLoading || !mounted}
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-2 rounded-full transition disabled:opacity-40">
            <Star
              className="w-8 h-8 transition-all duration-200"
              style={{
                fill: active ? "#2A6250" : "transparent",
                color: active ? "#2A6250" : "#97CEAD",
              }}
              strokeWidth={1.6}
            />
          </motion.button>
        ) : (
          <Star
            key={star}
            className="w-8 h-8"
            style={{
              fill: active ? "#2A6250" : "transparent",
              color: active ? "#2A6250" : "#97CEAD",
            }}
            strokeWidth={1.6}
          />
        );
      })}
    </div>
  );

  return (
    <section
      id="rating"
      className="relative py-24 bg-linear-to-b from-[#E5F3DD] to-white"
      dir="rtl">
      <div className="max-w-3xl mx-auto md:px-6 px-2">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-bold text-[#2A6250] bg-white px-4 py-1 rounded-full shadow border border-[#97CEAD]/40 mb-4">
            التقييمات
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-[#012437] mb-4">
            قيّم تجربتك معنا
          </h2>

          <p className="text-[#012437]/60 leading-relaxed">
            رأيك يساعدنا نطور خدماتنا ونقدم تجربة أفضل دائماً.
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative bg-white/80 backdrop-blur-xl border border-[#97CEAD]/30 rounded-[40px] p-10 md:p-14 shadow-[0_30px_80px_-20px_rgba(42,98,80,0.2)]">
          {/* Stats Row */}
          {(averageRating > 0 || totalRatings > 0) && (
            <div className="flex justify-center gap-12 mb-10 text-center">
              {averageRating > 0 && (
                <div>
                  <div className="text-5xl font-black text-[#2A6250]">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="text-xs text-[#012437]/60 mt-1">
                    متوسط التقييم
                  </div>
                </div>
              )}

              {totalRatings > 0 && (
                <div>
                  <div className="text-5xl font-black text-[#012437]">
                    {totalRatings}
                  </div>
                  <div className="text-xs text-[#012437]/60 mt-1">
                    {totalRatings === 1 ? "تقييم" : "تقييمات"}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Interaction */}
          <div className="flex flex-col items-center gap-6">
            {submitted !== null && mounted ? (
              <>
                {renderStars(submitted, false)}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[#E5F3DD] text-[#2A6250] px-8 py-4 rounded-2xl text-center font-bold">
                  شكراً لتقييمك 💚
                </motion.div>
              </>
            ) : (
              <>
                {renderStars(displayRating, true)}

                <div className="text-sm text-[#012437]/60">
                  {!isLoading && mounted && "اضغط على النجوم للتقييم"}
                  {isLoading && (
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ repeat: Infinity, duration: 1 }}>
                      جاري الإرسال...
                    </motion.span>
                  )}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
