import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { defaultMetadata } from "@/lib/seo";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {plausibleDomain ? (
          // Plausible script (deferred; no blocking)
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


