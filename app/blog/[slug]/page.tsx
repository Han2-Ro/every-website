import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock3, Sparkles } from "lucide-react";
import { blogPosts, getBlogPost } from "../posts";
import { SiteLogo } from "../../components/site-logo";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | every-website`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_35%),linear-gradient(180deg,#020617_0%,#0f172a_55%,#020617_100%)] text-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-6 lg:px-8">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <Link href="/blog" className="inline-flex items-center gap-3 font-semibold tracking-wide">
            <SiteLogo className="h-8 w-8 shrink-0" />
            <span>Back to blog</span>
          </Link>
          <div className="inline-flex items-center gap-2 text-sm text-violet-200">
            <Sparkles className="h-4 w-4" />
            Article detail
          </div>
        </header>

        <article className="py-16 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200">
              {post.category}
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              {post.title}
            </h1>
            <p className="text-lg leading-8 text-slate-300">{post.intro}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-violet-200" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-violet-200" />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="mt-12 space-y-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-3xl text-base leading-8 text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <aside className="rounded-[1.5rem] border border-violet-400/30 bg-violet-500/10 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-violet-200">
                Takeaway
              </p>
              <p className="mt-3 text-lg leading-8 text-slate-100">{post.takeaway}</p>
            </aside>
          </div>
        </article>

        <section className="border-t border-white/10 py-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200">
              More reading
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Similar posts from the same nonsense engine
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {relatedPosts.map((item) => (
              <article
                key={item.slug}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.25em] text-violet-200">
                  <span>{item.category}</span>
                  <span>{item.readTime}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.excerpt}</p>
                <Link
                  href={`/blog/${item.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-200 transition hover:text-white"
                >
                  Read next
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
