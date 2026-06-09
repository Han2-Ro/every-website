"use client";

import { useMemo, useState } from "react";
import { Bot, ChevronDown, Send, Sparkles } from "lucide-react";

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
};

const cannedReplies = [
  "Hello, how can I help you today?",
  "Sorry, out of tokens — try again later.",
  "Here’s a 3 step plan to maximize your AI momentum: 1. Ship. 2. Scale. 3. Tell everyone it’s powered by agents.",
  "Absolutely. Let me sync the strategic alignment layer.",
  "That’s a great question. Have you considered adding more purple gradients?",
  "I can help with that, but first let’s optimize the vibe.",
  "The roadmap is clear: launch, iterate, and add one more testimonial.",
  "Please hold while I pretend to reason about this.",
];

const starterMessages: ChatMessage[] = [
  {
    role: "assistant",
    text: "Hello, how can I help you today?",
  },
];

export function AiChatbot() {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(starterMessages);

  const statusLabel = useMemo(
    () => (open ? "Ready to hallucinate" : "Chat minimized"),
    [open],
  );

  const sendMessage = () => {
    const message = input.trim();
    if (!message) {
      return;
    }

    const reply =
      cannedReplies[Math.floor(Math.random() * cannedReplies.length)];

    setMessages((current) => [
      ...current,
      { role: "user", text: message },
      { role: "assistant", text: reply },
    ]);
    setInput("");
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/95 px-4 py-3 text-sm font-medium text-slate-100 shadow-2xl shadow-black/40 backdrop-blur transition hover:bg-slate-900"
      >
        <Bot className="h-4 w-4 text-violet-300" />
        Open AI chat
      </button>
    );
  }

  return (
    <aside className="fixed bottom-4 left-4 z-50 w-[min(92vw,24rem)] rounded-3xl border border-white/10 bg-slate-950/95 shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-50">AI chat</div>
            <div className="text-xs text-slate-400">{statusLabel}</div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
          aria-label="Minimize chat"
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      <div className="max-h-[24rem] space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}-${message.text}`}
            className={[
              "flex",
              message.role === "user" ? "justify-end" : "justify-start",
            ].join(" ")}
          >
            <div
              className={[
                "max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6",
                message.role === "user"
                  ? "bg-violet-500 text-white"
                  : "bg-white/5 text-slate-100",
              ].join(" ")}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
          <Sparkles className="h-4 w-4 shrink-0 text-violet-300" />
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Ask the AI something..."
            className="min-w-0 flex-1 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
          />
          <button
            type="button"
            onClick={sendMessage}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 text-white transition hover:bg-violet-400"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
