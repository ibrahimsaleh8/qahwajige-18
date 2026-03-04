import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "قهوجى حفلات",
    short_name: "قهوجى حفلات",
    description:
      "خدمات قهوجى حفلات للمناسبات والأفراح والفعاليات مع تقديم القهوة العربية والضيافة الراقية بأسلوب احترافي وتنظيم متكامل.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#e5f3dd",
    theme_color: "#2a6250",
    lang: "ar",
    dir: "rtl",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
