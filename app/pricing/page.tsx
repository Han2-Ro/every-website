"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { SiteLogo } from "../components/site-logo";

const plans = [
  {
    name: "Starter",
    monthly: "$19",
    yearly: "$190",
    description: "A tiny taste of the full glossy treatment.",
    features: ["One landing page", "Basic AI widget", "Cookie banner"],
  },
  {
    name: "Growth",
    monthly: "$49",
    yearly: "$490",
    description: "The obvious choice for teams that want to look legit.",
    features: ["Everything in Starter", "Pricing section", "Trust badges"],
    featured: true,
  },
  {
    name: "Enterprise",
    monthly: "Custom",
    yearly: "Custom",
    description: "For organizations that need maximum polish at scale.",
    features: ["Custom onboarding", "Priority support", "Extra buzzwords"],
  },
];

const comparisonRows = [
  ["Hero section", "Starter", "Growth", "Enterprise"],
  ["Pricing page", "—", "✓", "✓"],
  ["AI chat mock", "✓", "✓", "✓"],
  ["Custom claims", "—", "—", "✓"],
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const savingsCopy = useMemo(
    () => (billing === "yearly" ? "Two months free, obviously." : "Switch to yearly for the fake discount."),
    [billing],
  );

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
            Pricing that performs
          </div>
        </header>

        <section className="py-16 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200">
              Pricing page
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Pick a plan that matches your level of confidence.
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              This page makes the site feel a little more real: switch billing
              modes, compare plans, and click through like you mean it.
            </p>
          </div>

          <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 p-1">
            {(["monthly", "yearly"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setBilling(option)}
                className={[
                  "rounded-full px-5 py-2 text-sm font-medium transition",
                  billing === option
                    ? "bg-violet-500 text-white shadow-glow"
                    : "text-slate-300 hover:text-white",
                ].join(" ")}
              >
                {option === "monthly" ? "Monthly" : "Yearly"}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-400">{savingsCopy}</p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
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
                    <h2 className="text-2xl font-semibold">{plan.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {plan.description}
                    </p>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full bg-violet-400/15 px-3 py-1 text-xs font-medium text-violet-200">
                      Best value
                    </span>
                  ) : null}
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <div className="text-4xl font-semibold">
                    {billing === "monthly" ? plan.monthly : plan.yearly}
                  </div>
                  {plan.monthly.startsWith("$") ? (
                    <span className="pb-1 text-sm text-slate-400">
                      {billing === "monthly" ? "/mo" : "/yr"}
                    </span>
                  ) : null}
                </div>

                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-violet-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/register?plan=${encodeURIComponent(plan.name)}`}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 font-medium text-slate-950 transition hover:bg-violet-100"
                >
                  Choose {plan.name}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-200">
              Compare
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              One table, many promises
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/10 text-slate-300">
                <tr>
                  <th className="px-6 py-4 font-medium">Feature</th>
                  <th className="px-6 py-4 font-medium">Starter</th>
                  <th className="px-6 py-4 font-medium">Growth</th>
                  <th className="px-6 py-4 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]} className="border-b border-white/10 last:border-0">
                    {row.map((cell, index) => (
                      <td key={cell} className="px-6 py-4 text-slate-200">
                        {index === 0 ? cell : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
