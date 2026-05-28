const phrases = [
  "Keep Austin Weird",
  "Throw a Block Party",
  "Close the Street",
  "Bats at Dusk",
  "Breakfast Tacos for All",
  "Live Music Capital",
  "Be a Good Neighbor",
  "Hi, How Are You?",
];

export function Marquee() {
  // Rendered twice back-to-back so the -50% translate loops seamlessly.
  const loop = [...phrases, ...phrases];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((p, i) => (
          <span key={i}>
            <span className="item">{p}</span>
            <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
