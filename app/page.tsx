import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Cloud,
  LayoutDashboard,
  MessageSquareQuote,
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

const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    description: "For founders who need something shiny, fast.",
    features: ["Hero section", "One AI widget", "Basic social proof"],
  },
  {
    name: "Growth",
    price: "$49",
    description: "For teams that want more gradients and more confidence.",
    features: ["Pricing tiers", "Cookie banner", "Better buzzwords"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Let's talk",
    description: "For companies that want the full glossy treatment.",
    features: ["Everything in Growth", "Custom claims", "Priority vibes"],
  },
];

const testimonials = [
  {
    quote:
      "It looked exactly like the AI product page we were hoping to ship.",
    name: "Ada, Product Lead",
  },
  {
    quote: "The gradients made our roadmap feel more real immediately.",
    name: "Noah, Startup Founder",
  },
  {
    quote: "We sold the demo before the backend was even a conversation.",
    name: "Mila, Growth",
  },
];

const trustBadges = [
  "SOC 2 Ready",
  "Used by innovators",
  "Trusted by agents",
  "95% vibes score",
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
            <Link href="/pricing" className="transition hover:text-white">
              Pricing
            </Link>
            <a href="#social" className="transition hover:text-white">
              Social proof
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
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-white shadow-glow transition hover:bg-violet-400"
              >
                View pricing page
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

        <section
          id="pricing"
          className="border-t border-white/10 py-16"
        >
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Subscription tiers for maximum confidence
            </h2>
            <p className="mt-4 text-slate-300">
              The pricing section keeps the parody honest: multiple plans,
              escalating promises, and one obvious best choice.
            </p>
            <Link
              href="/pricing"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-slate-100 transition hover:bg-white/10"
            >
              Open the pricing page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={[
                  "rounded-[2rem] border p-6 backdrop-blur",
                  plan.featured
                    ? "border-violet-400/40 bg-violet-500/10 shadow-glow"
                    : "border-white/10 bg-white/5",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{plan.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {plan.description}
                    </p>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full bg-violet-400/15 px-3 py-1 text-xs font-medium text-violet-200">
                      Popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <div className="text-4xl font-semibold">{plan.price}</div>
                  {plan.price.startsWith("$") ? (
                    <span className="pb-1 text-sm text-slate-400">/mo</span>
                  ) : null}
                </div>

                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-violet-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-8 w-full rounded-full bg-white px-4 py-3 font-medium text-slate-950 transition hover:bg-violet-100">
                  Choose {plan.name}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section
          id="social"
          className="grid gap-6 border-t border-white/10 py-16 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200">
              Social proof
            </p>
            <h2 className="text-3xl font-semibold">
              Testimonials that sound reassuring
            </h2>
            <p className="text-slate-300">
              Every good AI page needs a few glowing quotes and badges to make
              the whole thing feel inevitable.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <MessageSquareQuote className="h-5 w-5 text-violet-200" />
                <blockquote className="mt-4 text-lg leading-8 text-slate-100">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-slate-400">
                  — {testimonial.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="deploy"
          className="border-t border-white/10 py-16"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-violet-200">
                  Cookie banner
                </p>
                <h2 className="mt-3 text-3xl font-semibold">
                  We use cookies to optimize your AI destiny
                </h2>
                <p className="mt-4 text-slate-300">
                  This banner exists purely because modern product sites feel
                  incomplete without one.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-violet-500 px-5 py-3 font-medium text-white transition hover:bg-violet-400">
                  Accept all
                </button>
                <button className="rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-slate-100 transition hover:bg-white/10">
                  Manage preferences
                </button>
              </div>
            </div>
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
