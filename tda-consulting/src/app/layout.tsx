// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TDA Consulting | AI Automation & Digital Modernisation Sydney",
  description: "Stop paying for manual work. Save 15+ hours weekly with AI automation. Lead qualification, document processing, and workflow automation for Australian businesses.",
  keywords: "AI automation Sydney, business automation Australia, workflow automation, document processing AI, lead qualification automation",
  authors: [{ name: "TDA Consulting" }],
  openGraph: {
    title: "TDA Consulting - AI Automation Solutions",
    description: "Eliminate manual admin waste with AI automation. $499 audit identifies your biggest time-wasters.",
    url: "https://tdaconsulting.services",
    siteName: "TDA Consulting",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TDA Consulting - AI Automation Solutions",
    description: "Save 15+ hours weekly with AI automation for Australian businesses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider>
          <Navigation />
          {children}
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}