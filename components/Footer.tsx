import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cols">
          <div>
            <h4>Block Party ATX</h4>
            <p className="muted">
              A community-made guide to throwing a gloriously weird
              neighborhood block party in Austin, Texas. Made with love (and a
              little weirdness). Not affiliated with the City of Austin.
            </p>
          </div>
          <div>
            <h4>The Guide</h4>
            <ul>
              <li>
                <Link href="/timeline">3-Month Timeline</Link>
              </li>
              <li>
                <Link href="/austin-permit">Austin Permit Steps</Link>
              </li>
              <li>
                <Link href="/themes">Theme Idea Generator</Link>
              </li>
              <li>
                <Link href="/templates">Templates &amp; Scripts</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Official City Resources</h4>
            <ul>
              <li>
                <a
                  href="https://atd.knack.com/smart-mobility#block-party-getting-started/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Getting Started (ATD)
                </a>
              </li>
              <li>
                <a
                  href="https://atd.knack.com/smart-mobility#block-party-rules/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Block Party Rules
                </a>
              </li>
              <li>
                <a
                  href="https://www.austintexas.gov/transportation-public-works/living-streets"
                  target="_blank"
                  rel="noreferrer"
                >
                  Living Streets Program
                </a>
              </li>
              <li>
                <a href="mailto:LivingStreets@AustinTexas.gov">
                  LivingStreets@AustinTexas.gov
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p
          style={{
            marginTop: "1.75rem",
            fontFamily: "var(--font-head)",
            fontWeight: 700,
            color: "var(--ink)",
          }}
        >
          Created by{" "}
          <a href="https://christinachild.com" target="_blank" rel="noreferrer">
            Christina Child
          </a>
        </p>
        <p className="disclaimer">
          Permit rules, fees, and deadlines change. Always confirm current
          requirements with the City of Austin before you file. Last reviewed:
          May 2026.
        </p>
      </div>
    </footer>
  );
}
