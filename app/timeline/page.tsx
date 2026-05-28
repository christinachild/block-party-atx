import type { Metadata } from "next";
import Link from "next/link";
import { timeline } from "@/lib/timeline";

export const metadata: Metadata = {
  title: "3-Month Block Party Timeline | Block Party ATX",
  description:
    "A week-by-week order of operations for planning a neighborhood block party in Austin, with checklists for every phase.",
};

export default function TimelinePage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">🗓️ Order of operations</span>
          <h1>The 3-month timeline</h1>
          <p className="lede">
            Start about three months out. The further ahead you ask businesses
            for donations, the more say yes — so don't save fundraising for the
            end. Tick through each phase below.
          </p>
          <div className="callout tip">
            <strong>Pro move:</strong> schedule every planning meeting at your
            kickoff and put them on everyone's calendar — every 2–3 weeks at
            first, then weekly the final month. See the cadence on the{" "}
            <Link href="/templates">Templates page</Link>.
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          {timeline.map((phase) => (
            <div className="phase" key={phase.id}>
              <div className="phase-when">{phase.when}</div>
              <h3>{phase.title}</h3>
              <p className="muted" style={{ marginBottom: "0.25rem" }}>
                {phase.focus}
              </p>
              <ul className="checklist">
                {phase.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {phase.tip && (
                <div className="callout tip" style={{ marginTop: "0.75rem" }}>
                  💡 {phase.tip}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-2">
            <Link href="/austin-permit" className="card" style={{ color: "inherit" }}>
              <h3>Next: the Austin permit →</h3>
              <p className="muted" style={{ marginBottom: 0 }}>
                The exact steps to close your street with the City, including
                signatures, fees, and the rules.
              </p>
            </Link>
            <Link href="/templates" className="card" style={{ color: "inherit" }}>
              <h3>Grab the templates →</h3>
              <p className="muted" style={{ marginBottom: 0 }}>
                Donation email, sample budget, day-of schedule, and the cleanup
                checklist.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
