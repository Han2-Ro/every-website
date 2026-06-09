import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Cloud,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Glossy by default",
    text: "Purple gradients, glass cards, and the kind of polish every AI homepage seems to have.",
  },
  {
    icon: Bot,
    title: "AI everywhere",
    text: "A chatbot, bold claims, and plenty of buzzwords without any of the hard parts.",
  },
  {
    icon: ShieldCheck,
    title: "Feels complete",
    text: "Login, onboarding, pricing, and trust signals that look real enough to sell the vibe.",
  },
];

const stack = [
  "Next.js App Router",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "lucide-react",
  "Coolify-ready deployment",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_35%),linear-gradient(180deg,#020617_0%,#0f172a_55%,#020617_100%)] text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-6 lg:px-8">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <div className="flex items-center gap-2 font-semibold tracking-wide">
            <LayoutDashboard className="h-5 w-5 text-violet-300" />
            every-website
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#stack" className="transition hover:text-white">
              Stack
            </a>
            <a href="#deploy" className="transition hover:text-white">
              Deploy
            </a>
          </nav>
        </header>

        <section className="grid flex-1 items-center gap-16 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
              <Sparkles className="h-4 w-4" />
              AI SaaS, but make it more AI
            </span>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                The most convincing generic startup on the internet.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                A polished foundation for a parody product site: shiny enough
                to feel real, simple enough to build on quickly, and ready for
                all the usual AI-era marketing tropes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#features"
                className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-white shadow-glow transition hover:bg-violet-400"
              >
                Explore the vibe
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#stack"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-slate-100 transition hover:bg-white/10"
              >
                See the stack
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["99.9%", "marketing confidence"],
                ["24/7", "AI-powered readiness"],
                ["∞", "purple gradients"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="text-2xl font-semibold">{value}</div>
                  <div className="mt-1 text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-violet-950/20 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-sm text-slate-400">Launch status</div>
                  <div className="text-xl font-semibold">Ready to pretend</div>
                </div>
                <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm text-emerald-300">
                  Online
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {highlights.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">{title}</div>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 text-violet-200">
                <Cloud className="h-5 w-5" />
                <span className="font-medium">Deploying to Coolify</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                The foundation is ready for a container-based deployment flow,
                with the rest of the site planned as modular marketing slices.
              </p>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="grid gap-6 border-t border-white/10 py-16 md:grid-cols-3"
        >
          {highlights.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </section>

        <section
          id="stack"
          className="grid gap-6 border-t border-white/10 py-16 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200">
              Foundation
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Tech stack baseline</h2>
            <p className="mt-4 max-w-md text-slate-300">
              The repo starts with the core framework and styling setup needed
              to build the rest of the parody site cleanly.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stack.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Built to look like every AI startup you have seen this year.</p>
          <p>Fake it beautifully.</p>
        </footer>
      </div>
    </main>
  );
}
