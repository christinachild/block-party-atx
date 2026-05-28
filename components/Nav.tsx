import Link from "next/link";

const links = [
  { href: "/timeline", label: "Timeline" },
  { href: "/austin-permit", label: "Austin Permit" },
  { href: "/themes", label: "Theme Ideas" },
  { href: "/templates", label: "Templates & Scripts" },
];

export function Nav() {
  return (
    <header className="nav">
      <nav className="nav-inner" aria-label="Primary">
        <Link href="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            🪩
          </span>
          Block Party ATX
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
