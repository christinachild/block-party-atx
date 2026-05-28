import type { Metadata } from "next";
import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";
import {
  donationEmail,
  donationScriptShort,
  budgetRows,
  daySchedule,
  breakdownChecklist,
  dontForget,
  volunteerRoles,
  meetingCadence,
} from "@/lib/templates";

export const metadata: Metadata = {
  title: "Templates & Scripts | Block Party ATX",
  description:
    "Copy-paste donation email and script, a sample block party budget, day-of schedule, meeting cadence, volunteer roles, cleanup checklist, and commonly-forgotten items.",
};

export default function TemplatesPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">📋 Steal these</span>
          <h1>Templates &amp; scripts</h1>
          <p className="lede">
            Battle-tested by real Austin blocks. Copy the donation email, adapt
            the budget, and put the meeting cadence on everyone's calendar.
          </p>
        </div>
      </section>

      {/* Downloadable planner */}
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="card" style={{ borderTop: "7px solid var(--green)" }}>
            <div
              style={{
                display: "flex",
                gap: "1.1rem",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <div style={{ fontSize: "2.6rem", lineHeight: 1 }} aria-hidden="true">
                📊
              </div>
              <div style={{ flex: "1 1 320px" }}>
                <h3 style={{ marginTop: 0 }}>Grab the planner spreadsheet</h3>
                <p className="muted">
                  A ready-to-use workbook with four tabs: a{" "}
                  <strong>Task Tracker</strong> (every timeline to-do with
                  checkboxes, assignees, and notes), a{" "}
                  <strong>Budget Tracker</strong> (estimated vs. actual costs,
                  who funded what, and a spot for receipts — totals calculate
                  automatically), and a{" "}
                  <strong>Donations &amp; Sponsors</strong> log with pickup
                  times and thank-you tracking.
                </p>
                <p className="muted" style={{ marginBottom: "1rem" }}>
                  Opens in Excel, Numbers, or Google Sheets (use{" "}
                  <em>File → Import</em> to bring it into Sheets).
                </p>
                <a
                  className="btn btn-teal"
                  href="/block-party-planner.xlsx"
                  download
                >
                  ⬇ Download the planner (.xlsx)
                </a>
              </div>
            </div>
            <div className="callout warn" style={{ marginBottom: 0 }}>
              <strong>It's just a template to get you started.</strong> Copy it
              and make it your own — every block is different, so add, delete,
              and rename anything.
            </div>
          </div>
        </div>
      </section>

      {/* Donation email */}
      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <h2>💌 Donation ask — email</h2>
          <p className="muted">
            Send 4–8 weeks out. Fill in the [brackets]. Keep it warm, specific,
            and easy to say yes to.
          </p>
          <div className="script">
            <CopyButton text={donationEmail} />
            {donationEmail}
          </div>

          <h3 className="mt-2">🗣️ Donation ask — in person / on a card</h3>
          <div className="script">
            <CopyButton text={donationScriptShort} />
            {donationScriptShort}
          </div>

          <div className="callout tip">
            <strong>Track every yes.</strong> Keep one list of vendor, what they
            pledged, and the exact pickup date &amp; time — that's what keeps
            donations from falling through on party day.
          </div>
        </div>
      </section>

      {/* Budget */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>💰 Sample budget</h2>
          <p className="muted">
            Rough ranges from an ~80-home Austin block (it cost them $2,000+).
            Yours will vary with block size and how much you fundraise. Aim to
            cover most of it with donations.
          </p>
          <div className="tbl-wrap mt-1">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Notes</th>
                  <th>Typical cost</th>
                </tr>
              </thead>
              <tbody>
                {budgetRows.map((r) => (
                  <tr key={r.item}>
                    <td>
                      <strong>{r.item}</strong>
                    </td>
                    <td className="muted">{r.notes}</td>
                    <td>{r.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="callout austin">
            <strong>Very Austin tip — skip the single-use plates.</strong> The{" "}
            <a
              href="https://www.rentheron.com/collections/austin-dish-lending-library"
              target="_blank"
              rel="noreferrer"
            >
              Austin Dish Lending Library
            </a>{" "}
            (run by Heron) lends real, reusable dishes, cups, and serving ware
            for events — for <strong>free</strong>. Better-looking tables, no
            plastic headed for the landfill, and it trims the supplies line of
            your budget.
          </div>
        </div>
      </section>

      {/* Meeting cadence */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>📅 Meeting cadence</h2>
          <p className="muted">
            Schedule these at your kickoff so they're already on everyone's
            calendar.
          </p>
          <ul className="checklist mt-1">
            {meetingCadence.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Day-of schedule */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>⏰ Sample day-of schedule</h2>
          <p className="muted">
            An afternoon-into-evening flow that wraps before the 10 p.m. sound
            cutoff.
          </p>
          <div className="tbl-wrap mt-1">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "180px" }}>Time</th>
                  <th>What's happening</th>
                </tr>
              </thead>
              <tbody>
                {daySchedule.map((r) => (
                  <tr key={r.time}>
                    <td>
                      <strong>{r.time}</strong>
                    </td>
                    <td className="muted">{r.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Volunteer roles */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>🙋 Volunteer roles to fill</h2>
          <p className="muted">
            Seed your sign-up sheet with these. Lesson from real blocks: people
            rarely self-assign — after each RSVP, ask them directly to take one
            30–60 minute slot.
          </p>
          <ul className="pill-list mt-1">
            {volunteerRoles.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cleanup checklist */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>🧹 After-party checklist</h2>
          <p className="muted">The part everyone forgets. Assign it in advance.</p>
          <ul className="checklist mt-1">
            {breakdownChecklist.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Don't forget */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>🧠 Don't forget (the commonly-missed stuff)</h2>
          <div className="grid grid-2 mt-1">
            {dontForget.map((d) => (
              <div className="card" key={d.title}>
                <h3>{d.title}</h3>
                <p className="muted" style={{ marginBottom: 0 }}>
                  {d.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="callout austin mt-2">
            Need inspiration for the fun parts? Head to the{" "}
            <Link href="/themes">Theme Idea Generator</Link>.
          </div>
        </div>
      </section>
    </>
  );
}
