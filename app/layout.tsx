import type { Metadata } from "next";
import type { ReactNode } from "react";
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
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
