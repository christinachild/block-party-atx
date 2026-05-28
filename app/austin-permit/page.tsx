import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Austin Block Party Permit Steps | Block Party ATX",
  description:
    "How to get a neighborhood block party street-closure permit from the City of Austin: eligibility, signatures, fees, deadlines, and the rules for what's allowed.",
};

const steps = [
  {
    n: "1",
    title: "Confirm your street qualifies",
    body: "It must be a residential street (single-family / duplex) with a speed limit of 25 mph or less (a 'Level 1' street). Your closure can't include an intersection, a transit route, a traffic signal, or paid parking.",
  },
  {
    n: "2",
    title: "Win your neighbors over",
    body: "Get support from at least 60% of the households along the block, and notify 100% of the block. Keep a simple sign-in sheet with addresses — you may need to show it.",
  },
  {
    n: "3",
    title: "Plan your closure points",
    body: "Decide exactly where the street closes at each end and where an adult monitor will stand. A monitor must be at both ends for the entire event, and you must keep an emergency lane clear.",
  },
  {
    n: "4",
    title: "Apply on the City portal",
    body: "Submit the application at least 15 calendar days before your party (file earlier — it gives you breathing room). Use the City's online Block Party portal linked below.",
  },
  {
    n: "5",
    title: "Pay the fee",
    body: "The permit fee is $50 plus a 4% surcharge. Budget about $52 total.",
  },
  {
    n: "6",
    title: "Sort out barriers",
    body: "You need barricades at each closure. The City has run a barrier-loaning program so residents don't have to buy them (they can cost $400+) — ask whether it's available for your date. Otherwise, rent from a traffic-control company.",
  },
  {
    n: "7",
    title: "Get approved & run it by the rules",
    body: "Once approved, post no-parking notices ahead of time, keep amplified sound within 10 a.m.–10 p.m. and under 75 dB, and stick to the allowed/not-allowed list below.",
  },
];

const allowed = [
  "A one-time residential street closure lasting up to 24 hours",
  "Pop-up tents — 10×10 ft max each (up to 700 sq ft total, 400 with sidewalls)",
  "Amplified sound from 10 a.m. to 10 p.m., capped at 75 decibels",
  "Food trucks parked on private property (a driveway), not the street",
  "Potluck-style food and BYOB among neighbors",
  "Games, music, performances, and family activities",
];

const notAllowed = [
  "Vendor sales or alcohol sales on the closed street",
  "Bounce houses or inflatable structures on the street",
  "Closing an intersection, transit route, traffic signal, or paid parking",
  "Streets above 25 mph (non–Level 1 streets)",
  "Blocking emergency access — keep a clear lane at all times",
  "Leaving either closure point unmonitored during the event",
];

const links = [
  {
    href: "https://atd.knack.com/smart-mobility#block-party-getting-started/",
    label: "Block Party — Getting Started (ATD portal)",
  },
  {
    href: "https://atd.knack.com/smart-mobility#block-party-rules/",
    label: "Block Party Rules (ATD portal)",
  },
  {
    href: "https://atd.knack.com/smart-mobility#help--neighborhood-block-party-application/",
    label: "Application Help",
  },
  {
    href: "https://experience.arcgis.com/experience/99935e2f50ea421a885a8ae4d8d8b91f/page/Neighborhood-Block-Party-Viability",
    label: "Street Viability Map — check if your street qualifies",
  },
  {
    href: "https://www.austintexas.gov/transportation-public-works/living-streets",
    label: "Living Streets Program (overview)",
  },
];

export default function AustinPermitPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">🏛️ City of Austin</span>
          <h1>Getting your street-closure permit</h1>
          <p className="lede">
            Austin runs block-party permits through its{" "}
            <strong>Living Streets</strong> program, and in late 2025 the City
            made it noticeably easier — the support threshold dropped to 60% and
            the application got simpler. Here's the path.
          </p>
          <div className="callout warn">
            <strong>Heads up:</strong> fees, deadlines, and rules change. Always
            confirm the current requirements on the City portal before you file.
            This page was last reviewed in May 2026.
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="stats">
            <div className="stat">
              <div className="num">60%</div>
              <div className="lbl">household support required</div>
            </div>
            <div className="stat">
              <div className="num">100%</div>
              <div className="lbl">of the block must be notified</div>
            </div>
            <div className="stat">
              <div className="num">15 days</div>
              <div className="lbl">minimum advance filing</div>
            </div>
            <div className="stat">
              <div className="num">$50 +4%</div>
              <div className="lbl">permit fee</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>Step by step</h2>
          <div className="grid grid-2 mt-1">
            {steps.map((s) => (
              <div className="card" key={s.n}>
                <h3>
                  <span style={{ color: "var(--coral)" }}>Step {s.n}.</span>{" "}
                  {s.title}
                </h3>
                <p className="muted" style={{ marginBottom: 0 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>What's allowed vs. not</h2>
          <div className="grid grid-2 mt-1">
            <div className="card" style={{ borderTop: "4px solid var(--green)" }}>
              <h3>✅ Allowed</h3>
              <ul className="checklist">
                {allowed.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ borderTop: "4px solid var(--coral)" }}>
              <h3>🚫 Not allowed</h3>
              <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
                {notAllowed.map((a, i) => (
                  <li key={i} className="muted" style={{ marginBottom: "0.4rem" }}>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="callout tip">
            <strong>On alcohol:</strong> the rule prohibits alcohol{" "}
            <em>sales</em>. Neighbors commonly keep it potluck/BYOB-style for
            personal consumption — but confirm specifics for your event with the
            City.
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>Official links & contact</h2>
          <ul className="checklist mt-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-1">
            Questions? Email the City at{" "}
            <a href="mailto:LivingStreets@AustinTexas.gov">
              LivingStreets@AustinTexas.gov
            </a>{" "}
            or call the Office of Special Events at{" "}
            <a href="tel:+15129746501">512-974-6501</a>.
          </p>
          <div className="callout austin mt-1">
            Got your permit underway? Move on to{" "}
            <Link href="/templates">funding it</Link> and{" "}
            <Link href="/themes">picking a theme</Link>.
          </div>
        </div>
      </section>
    </>
  );
}
