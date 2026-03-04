import { APP_URL, CurrentProjectId } from "@/lib/ProjectId";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "./_components/ShareButtons";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type Article = {
  id: string;
  title: string;
  coverImage: string | null;
  createdAt: string;
  updatedAt: string;
  content: string | null;
};

type GetArticleResponse = {
  success: boolean;
  data: {
    article: Article;
  };
};

type Props = {
  params: Promise<{ title: string }>;
};

export async function generateStaticParams() {
  const res = await fetch(
    `${APP_URL}/api/project/${CurrentProjectId}/articles`,
    { cache: "force-cache" },
  );
  if (!res.ok) return [];
  const data = await res.json();
  const articles = data.data.articles as { title: string }[];
  return articles.map((article) => ({
    title: article.title.split(" ").join("-"),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const decodedTitle = (await params).title.split("-").join(" ");
  const res = await fetch(`${APP_URL}/api/article/title/${decodedTitle}`);
  if (!res.ok) {
    return {
      title: "مقال غير موجود",
      description: "هذا المقال غير متوفر حالياً",
    };
  }
  const data = await res.json();
  const article = data.data.article;
  const url = `${APP_URL}/articles/${(await params).title}`;
  return {
    title: article.title,
    openGraph: {
      title: article.title,
      url,
      type: "article",
      locale: "ar_SA",
      images: article.coverImage
        ? [
            {
              url: article.coverImage,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const res = await fetch(
    `${APP_URL}/api/article/title/${title.split("-").join(" ")}`,
  );
  if (!res.ok) notFound();

  const data: GetArticleResponse = await res.json();
  const article = data.data.article;

  return (
    <main className="min-h-screen bg-white" dir="rtl">
      <div className="w-full max-w-6xl mx-auto px-2 md:px-6 py-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#2A6250] hover:text-[#012437] transition-colors duration-200 mb-12">
          <ArrowLeft className="w-4 h-4" strokeWidth={2} />
          الرجوع إلى المقالات
        </Link>

        {/* ── Article card ── */}
        <article className="rounded-[48px] overflow-hidden border border-[#97CEAD]/40 shadow-[0_20px_40px_-10px_rgba(42,98,80,0.1)]">
          {/* Cover image */}
          {article.coverImage && (
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#012437]/40 to-transparent" />
            </div>
          )}

          {/* Content area */}
          <div className="p-8 md:p-14">
            {/* Badge + date */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E5F3DD] text-[#2A6250] text-sm font-bold border border-[#97CEAD]/40">
                مقال
              </span>
              <span className="text-sm text-[#012437]">
                {new Date(article.createdAt).toLocaleDateString("ar-SA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#2A6250] leading-[1.2] mb-10">
              {article.title}
            </h1>

            {/* Accent divider — seagrass replaces pink */}
            <div className="w-16 h-1 rounded-full bg-[#2A6250] mb-10" />

            {/* Body content */}
            {article.content && (
              <div
                className="
                  article-content prose max-w-none
                  prose-headings:text-[#012437] prose-headings:font-bold
                  prose-p:text-[#012437]/70 prose-p:leading-relaxed
                  prose-a:text-[#2A6250] prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-[#012437]
                  prose-li:text-[#012437]/70
                  prose-blockquote:border-[#2A6250] prose-blockquote:text-[#012437]/65
                  prose-img:rounded-[24px]
                  prose-hr:border-[#97CEAD]/40
                "
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            )}

            {/* Share buttons */}
            <div className="mt-12 pt-8 border-t border-[#97CEAD]/30">
              <ShareButtons title={article.title} />
            </div>
          </div>
        </article>

        {/* Back to blog CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#2A6250] font-bold hover:text-[#012437] hover:gap-3 transition-all duration-300">
            عرض جميع المقالات
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
