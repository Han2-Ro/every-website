import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, Sparkles } from "lucide-react";
import { blogPosts } from "./posts";
import { SiteLogo } from "../components/site-logo";

export const metadata: Metadata = {
  title: "Blog | every-website",
  description: "A glossy blog filled with AI product tropes and polished nonsense.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_35%),linear-gradient(180deg,#020617_0%,#0f172a_55%,#020617_100%)] text-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-6 lg:px-8">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <Link href="/" className="inline-flex items-center gap-3 font-semibold tracking-wide">
            <SiteLogo className="h-8 w-8 shrink-0" />
            <span>Back home</span>
          </Link>
          <div className="inline-flex items-center gap-2 text-sm text-violet-200">
            <Sparkles className="h-4 w-4" />
            Blog index
          </div>
        </header>

        <section className="py-16 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200">
              Blog
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Notes on AI marketing, glossy UI, and the art of sounding inevitable.
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              A tiny content hub for the fake startup universe: launch advice,
              compliance theater, and copywriting lessons wrapped in purple blur.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <article className="rounded-[2rem] border border-violet-400/30 bg-violet-500/10 p-6 shadow-glow backdrop-blur">
              <div className="flex items-center gap-2 text-sm text-violet-200">
                <Sparkles className="h-4 w-4" />
                Featured article
              </div>
              <h2 className="mt-4 text-3xl font-semibold">{featured.title}</h2>
              <p className="mt-4 max-w-2xl text-slate-300">{featured.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-violet-200" />
                  {featured.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-violet-200" />
                  {featured.readTime}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-violet-200">
                  {featured.category}
                </span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-950 transition hover:bg-violet-100"
              >
                Read featured post
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-200">
                Topics
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Launches", "Copy", "Compliance", "Vibes", "Messaging"].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-sm text-slate-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/55 p-5">
                <p className="text-sm text-slate-400">Newsletter</p>
                <p className="mt-2 text-lg font-medium text-slate-50">
                  Get the next fake insight in your inbox.
                </p>
                <button className="mt-4 rounded-full bg-violet-500 px-5 py-3 font-medium text-white transition hover:bg-violet-400">
                  Subscribe now
                </button>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200">
              Latest posts
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Small essays for big software confidence
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.25em] text-violet-200">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{post.excerpt}</p>
                <p className="mt-4 text-sm text-slate-400">{post.date}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-200 transition hover:text-white"
                >
                  Read article
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
