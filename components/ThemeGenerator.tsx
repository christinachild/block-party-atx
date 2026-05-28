"use client";

import { useState } from "react";
import { themes, findTheme, type MatchResult } from "@/lib/themes";

const quickPicks = themes.slice(0, 10);

export function ThemeGenerator() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<MatchResult | null>(null);

  function run(value: string) {
    const q = value.trim();
    if (!q) return;
    setQuery(q);
    setResult(findTheme(q));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    run(query);
  }

  const theme = result?.theme;

  return (
    <div className="theme-tool">
      <form onSubmit={handleSubmit}>
        <label htmlFor="theme-q" style={{ fontWeight: 700, display: "block", marginBottom: "0.5rem" }}>
          What's your theme?
        </label>
        <div className="theme-input-row">
          <input
            id="theme-q"
            className="theme-input"
            type="text"
            placeholder="e.g. fiesta, luau, 90s, carnival, garden party…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          <button type="submit" className="btn">
            Get ideas →
          </button>
        </div>
      </form>

      <div className="chips" aria-label="Popular themes">
        {quickPicks.map((t) => (
          <button
            key={t.id}
            type="button"
            className="chip"
            onClick={() => run(t.name)}
          >
            {t.emoji} {t.name}
          </button>
        ))}
      </div>

      {result && theme && (
        <div aria-live="polite">
          {!result.matched && (
            <div className="callout tip" style={{ marginTop: "1.5rem" }}>
              We didn't find an exact match for <strong>“{query}”</strong>, so
              here are universal ideas that work for any block party. Try one of
              these themes for something more specific:
              <div className="chips" style={{ marginTop: "0.6rem" }}>
                {result.suggestions.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className="chip"
                    onClick={() => run(t.name)}
                  >
                    {t.emoji} {t.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="result-head">
            <span className="result-emoji" aria-hidden="true">
              {theme.emoji}
            </span>
            <div>
              <h3 style={{ margin: 0 }}>{theme.name}</h3>
              <p className="muted" style={{ margin: 0 }}>
                {theme.vibe}
              </p>
            </div>
          </div>

          <div className="idea-grid">
            <div className="idea-card decor">
              <h4>🎀 Decorations</h4>
              <ul>
                {theme.decorations.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="idea-card activities">
              <h4>🎯 Activities</h4>
              <ul>
                {theme.activities.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="idea-card food">
              <h4>🍽️ Food &amp; drink</h4>
              <ul>
                {theme.food.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="idea-card vendors">
              <h4>🎪 Vendors &amp; entertainment</h4>
              <ul>
                {theme.vendors.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="callout austin" style={{ marginTop: "1.25rem" }}>
            <strong>Austin tip:</strong> {theme.austinTip}
          </div>
        </div>
      )}
    </div>
  );
}
