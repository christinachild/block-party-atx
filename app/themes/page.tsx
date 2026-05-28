import type { Metadata } from "next";
import { ThemeGenerator } from "@/components/ThemeGenerator";
import { themes } from "@/lib/themes";

export const metadata: Metadata = {
  title: "Block Party Theme Idea Generator | Block Party ATX",
  description:
    "Type your block party theme and get curated decoration, activity, food, and vendor ideas — with an Austin-local tip for each.",
};

export default function ThemesPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">🎨 Theme idea generator</span>
          <h1>Pick a theme, get a plan</h1>
          <p className="lede">
            Type your theme (or tap a popular one) and we'll suggest
            decorations, activities, food, and vendors to match — plus an
            Austin-specific tip for each. {themes.length} themes built in, with
            a universal fallback for anything else.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "0.5rem" }}>
        <div className="container">
          <ThemeGenerator />
          <div className="callout tip mt-2">
            <strong>Mix and match.</strong> The best block parties borrow from a
            few themes — a fiesta with a kids' carnival corner, or a music
            festival that ends with an outdoor movie. Use these as a starting
            point, then make it yours.
          </div>
        </div>
      </section>
    </>
  );
}
