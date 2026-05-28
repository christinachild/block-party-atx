import Link from "next/link";

const orderOfOps = [
  {
    n: "01",
    title: "Build your crew",
    body: "Poll the block, recruit a 3–5 person committee, pick a date + rain date, and choose who holds the money.",
  },
  {
    n: "02",
    title: "Lock the street",
    body: "Collect 60% of households' support, notify everyone, and file your City of Austin block-party permit.",
  },
  {
    n: "03",
    title: "Fund & book it",
    body: "Send donation asks to local businesses early, line up sponsors, and book entertainment and rentals.",
  },
  {
    n: "04",
    title: "Promote & staff it",
    body: "Flyers + online invite everywhere, get into the newsletter, and turn RSVPs into volunteers.",
  },
  {
    n: "05",
    title: "Host & wrap up",
    body: "Run the day, keep monitors at each end — then break down, return gear, and write thank-yous.",
  },
];

const sections = [
  {
    href: "/timeline",
    emoji: "🗓️",
    title: "3-Month Timeline",
    body: "A week-by-week order of operations with checklists for every phase, from first text to final thank-you.",
  },
  {
    href: "/austin-permit",
    emoji: "🏛️",
    title: "Austin Permit Guide",
    body: "Exactly how to close your street with the City: steps, signatures, fees, and what's allowed vs. not.",
  },
  {
    href: "/themes",
    emoji: "🎨",
    title: "Theme Idea Generator",
    body: "Type your theme and get curated decoration, activity, food, and vendor ideas — Austin-flavored.",
  },
  {
    href: "/templates",
    emoji: "📋",
    title: "Templates & Scripts",
    body: "A donation email that actually works, a sample budget, day-of schedule, and a cleanup checklist.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">🦇 Keep Austin Weird</span>
            <h1>
              Close your street. <span className="hl">Keep it weird.</span>{" "}
              Throw a block party.
            </h1>
            <p className="lede">
              Shutting down your block is easier than you think — the hard part
              is the people, the timing, and the money. This is the playbook:
              the City of Austin permit steps, a real 3-month timeline, donation
              scripts that work, and a theme generator to make it gloriously
              your own.
            </p>
            <div className="hero-cta">
              <Link href="/timeline" className="btn">
                Start the timeline →
              </Link>
              <Link href="/austin-permit" className="btn btn-ghost">
                See the permit steps
              </Link>
            </div>
          </div>
          <aside className="hero-card">
            <h3>The whole thing, at a glance</h3>
            {[
              { when: "3+ mo", what: "Recruit a committee, pick a date, start asking sponsors" },
              { when: "8 wk", what: "Collect signatures + file the permit" },
              { when: "6 wk", what: "Source donations, book entertainment & rentals" },
              { when: "4 wk", what: "Flyers up, invite everywhere, open volunteer sign-up" },
              { when: "2 wk", what: "Confirm everything; assign day-of roles" },
              { when: "Day of", what: "Set up, host, monitor both ends, then clean up" },
            ].map((r) => (
              <div className="mini-time" key={r.when}>
                <span className="when">{r.when}</span>
                <span className="what">{r.what}</span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stats">
            <div className="stat">
              <div className="num">60%</div>
              <div className="lbl">of households must support the closure</div>
            </div>
            <div className="stat">
              <div className="num">15 days</div>
              <div className="lbl">minimum to file before your party</div>
            </div>
            <div className="stat">
              <div className="num">$50</div>
              <div className="lbl">permit fee (+4%)</div>
            </div>
            <div className="stat">
              <div className="num">75 dB</div>
              <div className="lbl">amplified-sound cap, 10a–10p</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="eyebrow">The order of operations</span>
          <h2>Five moves, in order</h2>
          <p className="lede">
            Do them roughly in this sequence. The timeline page breaks each one
            into dated checklists.
          </p>
          <div className="grid grid-3 mt-2">
            {orderOfOps.map((s) => (
              <div className="card" key={s.n}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "1.6rem",
                    color: "var(--gold)",
                  }}
                >
                  {s.n}
                </div>
                <h3>{s.title}</h3>
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
          <span className="eyebrow">What's inside</span>
          <h2>Everything you need, in four places</h2>
          <div className="grid grid-2 mt-2">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="card"
                style={{ display: "block", color: "inherit" }}
              >
                <div style={{ fontSize: "2rem" }}>{s.emoji}</div>
                <h3 style={{ marginTop: "0.5rem" }}>{s.title}</h3>
                <p className="muted" style={{ marginBottom: 0 }}>
                  {s.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="callout austin">
            <strong>New to this? Start here.</strong> Read the{" "}
            <Link href="/timeline">timeline</Link> to see the whole arc, skim
            the <Link href="/austin-permit">Austin permit steps</Link> so you
            know what the City needs, then grab the{" "}
            <Link href="/templates">donation email and budget</Link> to get
            fundraising going early. Your future self will thank you.
          </div>
        </div>
      </section>
    </>
  );
}
