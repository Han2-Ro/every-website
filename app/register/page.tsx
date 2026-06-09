"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { SiteLogo } from "../components/site-logo";

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [plan, setPlan] = useState("Growth");

  const copy = useMemo(
    () =>
      submitted
        ? `Your ${plan} plan is ready. Pretend account created successfully.`
        : "Create an account and immediately look like you belong in the AI era.",
    [plan, submitted],
  );

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_35%),linear-gradient(180deg,#020617_0%,#0f172a_55%,#020617_100%)] text-slate-50">
      <div className="mx-auto max-w-3xl px-6 py-6 lg:px-8">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <Link href="/" className="inline-flex items-center gap-3 font-semibold tracking-wide">
            <SiteLogo className="h-8 w-8 shrink-0" />
            <span>Back home</span>
          </Link>
          <div className="inline-flex items-center gap-2 text-sm text-violet-200">
            <Sparkles className="h-4 w-4" />
            Mock register
          </div>
        </header>

        <section className="py-16 lg:py-20">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200">
              Get started
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Create your account and ship the vibe.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              This is a fake register flow that always works, because the
              product is all about the illusion of momentum.
            </p>
          </div>

          <form
            className="mt-12 space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Email</span>
              <input
                type="email"
                required
                placeholder="founder@company.com"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-violet-400"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Password</span>
              <input
                type="password"
                required
                placeholder="Any password works"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-violet-400"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">
                Selected plan
              </span>
              <select
                value={plan}
                onChange={(event) => setPlan(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-50 outline-none transition focus:border-violet-400"
              >
                <option>Starter</option>
                <option>Growth</option>
                <option>Enterprise</option>
              </select>
            </label>

            <button className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-white transition hover:bg-violet-400">
              Create account
              <CheckCircle2 className="h-4 w-4" />
            </button>

            <p className="text-sm text-slate-300">{copy}</p>
          </form>
        </section>
      </div>
    </main>
  );
}
