import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";

export const metadata: Metadata = {
  title: "Block Party ATX — How to throw a great block party in Austin",
  description:
    "A step-by-step guide to planning a neighborhood block party in Austin, TX: the City permit process, a 3-month timeline, donation scripts, budgets, and a theme idea generator.",
  keywords: [
    "Austin block party",
    "block party permit Austin",
    "neighborhood block party",
    "Living Streets Austin",
    "how to throw a block party",
  ],
  openGraph: {
    title: "Block Party ATX",
    description:
      "Everything you need to throw a great neighborhood block party in Austin, TX — permits, timeline, donations, and themes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Marquee />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
