import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AiChatbot } from "./components/ai-chatbot";
import { EventBanner } from "./components/event-banner";
import { CookieBanner } from "./components/cookie-banner";
import "./globals.css";

export const metadata: Metadata = {
  title: "every-website",
  description: "A glossy AI SaaS parody with the usual suspects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <EventBanner />
        <div aria-hidden="true" className="h-12" />
        {children}
        <AiChatbot />
        <CookieBanner />
      </body>
    </html>
  );
}
