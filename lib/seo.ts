import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tech.hidconsult.com";
const siteName = "HID Consulting — Technology Division";
const description = "Security-forward smart home, network, AI, surveillance, IoT, and digital systems.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};


