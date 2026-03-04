import HeroLinks from "./AnimatedComponents/HeroLinks";
import { HeroSectionData } from "@/lib/responseType";

export default function HeroSection({
  headline,
  subheadline,
  whatsApp,
}: HeroSectionData) {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#E5F3DD]">
      {/* Radial glow blobs */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_20%,rgba(151,206,173,0.35)_0%,transparent_45%),radial-gradient(circle_at_88%_75%,rgba(42,98,80,0.12)_0%,transparent_45%)]" />

      {/* Large morphing blob — right side */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-130 h-130 rounded-[62%_38%_46%_54%/60%_44%_56%_40%] bg-linear-to-br from-[#97CEAD]/45 to-[#2A6250]/18 blur-sm pointer-events-none" />

      {/* Floating accent blob */}
      <div className="absolute right-20 top-[15%] w-40 h-40 rounded-[50%_50%_38%_62%/44%_56%_44%_56%] bg-[#97CEAD]/50 pointer-events-none animate-[float_6s_ease-in-out_infinite]" />

      {/* 100% Saudi badge blob */}
      <div className="absolute right-64 bottom-[18%] w-28 h-28 rounded-full bg-[#2A6250] flex items-center justify-center pointer-events-none shadow-[0_20px_40px_-10px_rgba(42,98,80,0.4)] animate-[float_8s_ease-in-out_infinite_reverse] text-white text-sm font-extrabold text-center leading-snug">
        ١٠٠٪
        <br />
        سعودية
      </div>

      {/* Main content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full text-center flex flex-col items-center"
        dir="rtl">
        <div className="max-w-2xl space-y-7">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#2A6250]">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl leading-relaxed text-[#012437]/85">
            {subheadline}
          </p>

          {/* CTA buttons */}
          <HeroLinks whatsApp={whatsApp} />

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <Stat label="عميل سعيد" value="+500" />
            <Stat label="مناسبات ناجحة" value="+120" />
            <Stat label="قهوجيين محترفين" value="+40" />
            <Stat label="سنوات خبرة" value="+10" />
          </div>
        </div>
      </div>

      {/* Float animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-18px); }
        }
      `}</style>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl text-center px-4 py-4 bg-white/75 backdrop-blur-sm border border-[#97CEAD]/60 shadow-[0_8px_24px_-6px_rgba(42,98,80,0.12)]">
      <p className="text-2xl font-extrabold text-[#2A6250]">{value}</p>
      <p className="mt-1 text-sm text-[#012437]/75">{label}</p>
    </div>
  );
}
