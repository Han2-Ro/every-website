"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "every-website-cookie-banner-dismissed";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(STORAGE_KEY) !== "true");
  }, []);

  const dismiss = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[min(92vw,22rem)] rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl shadow-black/40 backdrop-blur">
      <p className="text-xs uppercase tracking-[0.25em] text-violet-200">
        Cookie banner
      </p>
      <h2 className="mt-2 text-lg font-semibold text-slate-50">
        We use cookies to optimize your AI destiny.
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-300">
        This is the kind of glossy corner popup every product site seems to
        have.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={dismiss}
          className="rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-400"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={dismiss}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10"
        >
          Manage preferences
        </button>
      </div>
    </div>
  );
}
