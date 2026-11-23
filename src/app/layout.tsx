import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Big_Shoulders, Big_Shoulders_Stencil, Public_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company, seo, siteUrl } from "@/content/site";
import "./globals.css";

const display = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  axes: ["opsz"],
  // Next.js has no metrics for Big Shoulders, so skip the generated fallback and use a narrow system face
  adjustFontFallback: false,
  fallback: ["Arial Narrow", "sans-serif"],
});

const stencil = Big_Shoulders_Stencil({
  variable: "--font-big-shoulders-stencil",
  subsets: ["latin"],
  axes: ["opsz"],
  // Next.js has no metrics for Big Shoulders, so skip the generated fallback and use a narrow system face
  adjustFontFallback: false,
  fallback: ["Arial Narrow", "sans-serif"],
});

const body = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  applicationName: company.name,
  category: "Recycling",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: company.name,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#0a2148",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${display.variable} ${stencil.variable} ${body.variable} antialiased`}
    >
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-semibold"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <SpeedInsights />
      </body>
    </html>
  );
}
