export type ThemeIdeas = {
  id: string;
  name: string;
  emoji: string;
  vibe: string;
  keywords: string[]; // words a user might type that should match this theme
  decorations: string[];
  activities: string[];
  food: string[];
  vendors: string[]; // vendors & entertainment to hire or invite
  austinTip: string;
};

// Curated, Austin-aware idea bank. Edit freely — add a theme by copying the
// shape below. The matcher checks `name` and `keywords` against what the user types.
export const themes: ThemeIdeas[] = [
  {
    id: "fiesta",
    name: "Fiesta / Cinco de Mayo",
    emoji: "🌶️",
    vibe: "Vibrant colors, Latin music, and a celebration of Mexican-American culture and neighborhood history.",
    keywords: ["fiesta", "cinco de mayo", "mexican", "latin", "taco", "mariachi", "papel picado"],
    decorations: [
      "Papel picado banners strung across the street",
      "Paper marigolds and bright tissue-paper flowers",
      "Serape-stripe table runners and terracotta pots",
      "String lights and colorful balloon clusters",
    ],
    activities: [
      "Piñatas for the kids (with a candy-catch crew)",
      "Ballet folklórico or a dance troupe performance",
      "Lotería (Mexican bingo) at shaded tables",
      "A community history table — celebrate the block's roots and culture",
    ],
    food: [
      "Potluck mains plus an anchor: tacos, queso & chips, or tamales",
      "Elote (street corn), raspas (shaved ice), and churros",
      "Agua frescas and a BYOB cooler",
      "A local bakery cake or tres leches",
    ],
    vendors: [
      "Mariachi band or a Latin band for a 1–1.5 hr set",
      "Elote / raspa / churro carts",
      "Lowrider car & bike showcase to draw people down the block",
      "A cultural arts org to table about the holiday's history",
    ],
    austinTip:
      "Austin has deep roots here — reach out to groups like Mexic-Arte Museum or the Emma S. Barrientos MACC for history materials, and ask East Side taquerias and bakeries about donations.",
  },
  {
    id: "luau",
    name: "Tropical Luau",
    emoji: "🌺",
    vibe: "Island colors, leis, and a laid-back beachy backyard feel.",
    keywords: ["luau", "tropical", "hawaiian", "island", "tiki", "aloha", "beach"],
    decorations: [
      "Grass-skirt table fringe and tiki torches (battery LED for safety)",
      "Paper pineapples, flamingos, and hibiscus flowers",
      "Blue and teal streamers to mimic water",
      "A balloon arch in sunset oranges and pinks",
    ],
    activities: [
      "Limbo contest and hula-hoop station",
      "Lei-making craft table for kids",
      "Beach-ball volleyball over a rope 'net'",
      "Best-Hawaiian-shirt contest",
    ],
    food: [
      "Grilled pineapple, fruit skewers, and Hawaiian sliders",
      "Shave ice / snow cones",
      "Tropical mocktails and a fruit-punch fountain",
      "A pulled-pork potluck anchor",
    ],
    vendors: [
      "Steel-drum or ukulele player",
      "Shave-ice cart",
      "Face painter doing flowers and tropical fish",
      "A local lei / flower vendor",
    ],
    austinTip:
      "Beat the Texas heat with a misting fan or a small kiddie-pool splash zone, and lean on Austin's many snow-cone trailers for an easy anchor.",
  },
  {
    id: "decades",
    name: "Retro Throwback (80s/90s)",
    emoji: "📼",
    vibe: "Neon, nostalgia, and a soundtrack everyone already knows the words to.",
    keywords: ["80s", "90s", "retro", "throwback", "decades", "disco", "vintage", "neon"],
    decorations: [
      "Neon streamers, cassette-tape cutouts, and inflatable boomboxes",
      "Mirror-ball / disco-ball hanging from a tent pole",
      "Vinyl records as table centerpieces",
      "A 'rad' photo backdrop with neon shapes",
    ],
    activities: [
      "Best-decade-costume contest",
      "Roller-skate / scooter lane down the closed street",
      "Trivia: name-that-tune and pop-culture rounds",
      "Sidewalk-chalk mixtape mural",
    ],
    food: [
      "Walking tacos, pizza, and a candy bar of retro sweets",
      "Root-beer floats and slushies",
      "A potluck with everyone's 'famous' recipe",
      "Throwback sodas in glass bottles",
    ],
    vendors: [
      "A DJ spinning the decade or a cover band",
      "Caricature artist",
      "A retro arcade / pinball trailer",
      "Photo-booth rental with era props",
    ],
    austinTip:
      "Austin has several mobile arcade and photo-booth trailers — a great splurge if a sponsor will cover it.",
  },
  {
    id: "carnival",
    name: "Block Carnival / County Fair",
    emoji: "🎪",
    vibe: "Games, prizes, and a midway feel right on your street.",
    keywords: ["carnival", "fair", "circus", "midway", "games", "fete", "festival"],
    decorations: [
      "Red-and-white striped bunting and pennant flags",
      "Hand-painted game-booth signs on folding tables",
      "Balloon arches at each entrance",
      "A 'ticket booth' as the welcome/name-tag table",
    ],
    activities: [
      "Classic booth games: ring toss, bean-bag toss, duck pond, knockdown cans",
      "Cake walk and a prize-ticket redemption table",
      "Three-legged and sack races down the street",
      "Dunk-the-neighbor tank (if a sponsor donates one)",
    ],
    food: [
      "Popcorn, cotton candy, and corn dogs",
      "Snow cones and lemonade",
      "Potluck mains plus a grill master on burgers/dogs",
      "Funnel cakes or churros",
    ],
    vendors: [
      "Cotton-candy and popcorn cart vendors",
      "Balloon-twister and face painter",
      "A magician or juggler for a short show",
      "Pony rides or a petting zoo (check street-surface rules)",
    ],
    austinTip:
      "Mini-horses, a fire-truck visit, and face painters are local favorites — line them up early, they book out in spring.",
  },
  {
    id: "western",
    name: "Texas / Honky-Tonk",
    emoji: "🤠",
    vibe: "Boots, two-steppin', and big Texas hospitality.",
    keywords: ["western", "texas", "honky tonk", "cowboy", "rodeo", "country", "hoedown", "bbq cookout"],
    decorations: [
      "Bandana table runners, hay bales for seating, and mason-jar centerpieces",
      "Lone Star flags and string lights",
      "Wagon-wheel and lasso accents",
      "A 'saloon' entrance sign",
    ],
    activities: [
      "Line-dancing / two-step lesson",
      "Stick-horse races for kids",
      "Boot toss and horseshoes",
      "Best-boots and best-hat contests",
    ],
    food: [
      "Texas BBQ potluck: brisket, sausage, ribs, and all the sides",
      "Chili cook-off between neighbors",
      "Sweet tea and lemonade",
      "Peach cobbler and Blue Bell",
    ],
    vendors: [
      "A country band or a fiddle player",
      "Local BBQ joint catering or donating a tray",
      "Mechanical bull rental (private property / sturdy surface)",
      "A boot-shine or hat-bar pop-up",
    ],
    austinTip:
      "Ask an Austin BBQ spot for a donated tray, and check whether a neighbor with a smoker wants to anchor the meat.",
  },
  {
    id: "garden",
    name: "Garden Party / Bluebonnet Spring",
    emoji: "🌸",
    vibe: "Florals, pastels, and a relaxed afternoon-in-the-garden feel.",
    keywords: ["garden", "floral", "spring", "bluebonnet", "tea party", "wildflower", "botanical", "brunch"],
    decorations: [
      "Wildflower and bluebonnet arrangements in jars",
      "Pastel bunting and floral tablecloths",
      "Potted plants lining the street edge",
      "A flower-crown / floral-arch photo spot",
    ],
    activities: [
      "Flower-crown and seed-bomb making stations",
      "Plant / cutting / seed swap among neighbors",
      "Garden scavenger hunt for kids",
      "Lawn games: croquet, bocce, badminton",
    ],
    food: [
      "Brunch potluck: quiche, pastries, fruit, finger sandwiches",
      "Iced tea, lemonade, and a mimosa/BYOB corner",
      "A honey / jam tasting from local makers",
      "Floral-decorated cake or cupcakes",
    ],
    vendors: [
      "Acoustic guitar or string duo",
      "A local nursery to table with plants/cuttings",
      "Face painter doing flowers and butterflies",
      "A florist for a make-and-take bar",
    ],
    austinTip:
      "Tie in Austin's wildflower season — a Lady Bird Johnson Wildflower Center vibe — and ask a neighborhood gardener to lead the swap.",
  },
  {
    id: "music-fest",
    name: "Mini Music Festival",
    emoji: "🎸",
    vibe: "Live music, food trucks, and an 'ACL on your block' energy.",
    keywords: ["music", "festival", "concert", "acl", "band", "live music", "jam", "sxsw"],
    decorations: [
      "A small stage area with a backdrop banner",
      "String lights and festival pennant flags",
      "Hay bales and blankets for a 'lawn' seating area",
      "A hand-painted 'lineup' poster of the day's acts",
    ],
    activities: [
      "Rotating sets from neighbors who play",
      "Collaborative playlist for set breaks",
      "Open-mic or kids' talent slot",
      "Glow sticks / silent-disco headphones after dark",
    ],
    food: [
      "Festival fare: tacos, smashburgers, kettle corn",
      "Food-truck on a driveway (private property only)",
      "Cold brew / agua fresca stand",
      "Potluck snacks for grazing between sets",
    ],
    vendors: [
      "A local band or DJ (confirm a 1–1.5 hr set time)",
      "A solid PA / sound system rental with a good mic",
      "Food truck parked on private property",
      "Merch / local-maker tables along the curb",
    ],
    austinTip:
      "Austin is the Live Music Capital — there's likely a musician on your block. Borrow or rent a strong PA so the mic carries over crowd noise.",
  },
  {
    id: "movie-night",
    name: "Outdoor Movie / Drive-In",
    emoji: "🎬",
    vibe: "An evening party that ends with everyone watching a film under the stars.",
    keywords: ["movie", "cinema", "drive-in", "film", "outdoor movie", "screening", "stars"],
    decorations: [
      "An inflatable or sheet screen and a projector",
      "String lights and a 'now showing' marquee sign",
      "Blankets, bean bags, and lawn chairs",
      "A concession-stand table",
    ],
    activities: [
      "Audience-vote on the feature film",
      "Pre-show lawn games while it's still light",
      "Kids' craft: decorate popcorn boxes",
      "A short neighbor-made video / slideshow before the movie",
    ],
    food: [
      "Popcorn bar with toppings",
      "Movie candy and nachos",
      "Root-beer floats and hot cocoa (cooler nights)",
      "Potluck dinner before the show",
    ],
    vendors: [
      "Projector + screen + audio rental (or a neighbor's setup)",
      "Popcorn cart vendor",
      "A pre-show acoustic musician",
      "Ice-cream truck for intermission",
    ],
    austinTip:
      "Keep amplified sound under 75 dB and wrap by the 10 p.m. sound cutoff — an early-evening start keeps you within the window.",
  },
  {
    id: "patriotic",
    name: "Red, White & Blue",
    emoji: "🎆",
    vibe: "Classic summer-holiday cookout in stars and stripes.",
    keywords: ["patriotic", "4th of july", "fourth of july", "memorial day", "red white blue", "usa", "america", "stars and stripes"],
    decorations: [
      "Red/white/blue bunting, flags, and pinwheels",
      "Star garlands and balloon clusters",
      "Patriotic table runners and mason-jar centerpieces",
      "A flag-themed photo backdrop",
    ],
    activities: [
      "Bike-and-wagon decorating parade down the block",
      "Water-balloon toss and relay races",
      "Pie-eating or watermelon-seed-spitting contest",
      "Cornhole tournament",
    ],
    food: [
      "Cookout potluck: burgers, dogs, and all the sides",
      "Watermelon and a berry flag fruit tray",
      "Lemonade and a snow-cone stand",
      "Red/white/blue popsicles and ice cream",
    ],
    vendors: [
      "Grill master / BBQ caterer",
      "Snow-cone or ice-cream truck",
      "A brass or cover band",
      "Face painter with flag/star designs",
    ],
    austinTip:
      "Skip personal fireworks (illegal in Austin city limits) — glow sticks and a sparkler-free 'glow parade' keep it safe and legal.",
  },
  {
    id: "spooky",
    name: "Halloween / Spooky",
    emoji: "🎃",
    vibe: "Costumes, pumpkins, and a not-too-scary block-wide trick-or-treat.",
    keywords: ["halloween", "spooky", "costume", "pumpkin", "trick or treat", "fall", "harvest", "monster"],
    decorations: [
      "Pumpkins, hay bales, cornstalks, and string lights",
      "Spiderwebs and tombstone yard props (kid-friendly)",
      "Carved/decorated pumpkin row down the curb",
      "A 'haunted' tent or garage for older kids",
    ],
    activities: [
      "Block-wide trick-or-treat route with a map",
      "Pumpkin-decorating and costume contest",
      "Mummy-wrap relay and donut-on-a-string",
      "Trunk-or-treat with decorated cars/driveways",
    ],
    food: [
      "Chili and cornbread potluck",
      "Caramel apples and a candy bar",
      "Apple cider (hot and cold) and donuts",
      "'Mystery' snack table for the kids",
    ],
    vendors: [
      "A spooky DJ or playlist + fog machine",
      "Face painter / special-effects makeup artist",
      "Balloon twister doing pumpkins and bats",
      "A small pumpkin-patch / hay-ride vendor",
    ],
    austinTip:
      "An afternoon-into-dusk timeline suits families best and keeps you ahead of the 10 p.m. sound cutoff.",
  },
  {
    id: "winter-holiday",
    name: "Winter Holiday",
    emoji: "❄️",
    vibe: "Cozy lights, hot drinks, and a season's-greetings gathering.",
    keywords: ["winter", "holiday", "christmas", "hanukkah", "lights", "cocoa", "snow", "december"],
    decorations: [
      "Warm string lights, lanterns, and luminaries down the street",
      "Greenery, wreaths, and bows on tables",
      "A photo spot with a sleigh or giant ornament",
      "Paper-snowflake garlands",
    ],
    activities: [
      "Cookie swap and gingerbread decorating",
      "Caroling or a holiday-music sing-along",
      "Ornament / card-making craft table",
      "A coat / toy drive table for a local charity",
    ],
    food: [
      "Hot cocoa and cider bar with toppings",
      "Soup and chili potluck to stay warm",
      "Cookie and dessert table",
      "Mulled-cider BYOB corner for adults",
    ],
    vendors: [
      "A choir or acoustic holiday musicians",
      "Hot-cocoa / coffee cart",
      "Photographer for family holiday photos",
      "A balloon or craft vendor for kids",
    ],
    austinTip:
      "Mild Austin winters are perfect for an evening block walk to see lights — add patio heaters or fire pits (off the asphalt) for warmth.",
  },
  {
    id: "art-market",
    name: "Art & Maker Market",
    emoji: "🎨",
    vibe: "A creative, gallery-on-the-street feel celebrating local makers and history.",
    keywords: ["art", "market", "maker", "craft", "artist", "creative", "gallery", "handmade", "history"],
    decorations: [
      "White or kraft-paper-covered tables as gallery booths",
      "String lights and easels displaying neighbor art",
      "A community mural / collaborative canvas",
      "Plants and simple signage for each table",
    ],
    activities: [
      "Live painting / mural and a kids' make-and-take craft",
      "Neighborhood-history and photo displays",
      "Hands-on demos (pottery, printmaking, jewelry)",
      "A 'meet the maker' walk down the block",
    ],
    food: [
      "Coffee / espresso cart and pastries",
      "Grazing-style potluck and a cheese/charcuterie table",
      "Local bakery donations",
      "Agua frescas or a mocktail bar",
    ],
    vendors: [
      "Local artists and makers tabling their work",
      "A caricature or live portrait artist",
      "An acoustic musician for ambiance",
      "A neighborhood-history org or studio to table",
    ],
    austinTip:
      "Invite local studios, the alley-art crowd, and neighborhood historians — center these tables where foot traffic is highest so people actually engage.",
  },
];

// A safe default used when nothing matches — broadly useful for any block party.
export const universalTheme: ThemeIdeas = {
  id: "classic",
  name: "Classic Neighborhood Block Party",
  emoji: "🎉",
  vibe: "A welcoming, all-ages street party built around food, music, and games.",
  keywords: [],
  decorations: [
    "String lights and colorful bunting across the street",
    "Balloon clusters at each entrance",
    "Themed tablecloths and simple jar centerpieces",
    "A welcome / name-tag table at both ends of the block",
  ],
  activities: [
    "Oversized yard games (Jenga, Connect Four, cornhole)",
    "Sidewalk-chalk zone and a kids' craft table",
    "Three-legged and sack races",
    "A collaborative playlist plus a short live set",
  ],
  food: [
    "Potluck by category (mains, sides, desserts, drinks) with one paid anchor",
    "A grill master on burgers and dogs",
    "Coolers of water, soda, and juice boxes; BYOB for adults",
    "An ice-cream or snow-cone treat",
  ],
  vendors: [
    "A DJ or local band for a short set",
    "Face painter and balloon twister",
    "An ice-cream or snow-cone truck",
    "A photo booth or a roaming photographer",
  ],
  austinTip:
    "Plan shade and water for Austin heat, keep amplified sound under 75 dB and before 10 p.m., and station an adult monitor at each closure.",
};

export type MatchResult = {
  theme: ThemeIdeas;
  matched: boolean;
  suggestions: ThemeIdeas[];
};

// Match what the user types against theme names and keywords.
export function findTheme(query: string): MatchResult {
  const q = query.trim().toLowerCase();
  if (!q) {
    return { theme: universalTheme, matched: false, suggestions: themes.slice(0, 4) };
  }

  // 1) Exact-ish match on name or keyword.
  const exact = themes.find(
    (t) =>
      t.name.toLowerCase() === q ||
      t.id === q ||
      t.keywords.some((k) => k === q)
  );
  if (exact) return { theme: exact, matched: true, suggestions: [] };

  // 2) Substring match: query contains a keyword, or a keyword contains the query.
  const partial = themes.find(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.keywords.some((k) => q.includes(k) || k.includes(q))
  );
  if (partial) return { theme: partial, matched: true, suggestions: [] };

  // 3) Token overlap — score by shared words.
  const tokens = q.split(/\s+/).filter(Boolean);
  let best: ThemeIdeas | null = null;
  let bestScore = 0;
  for (const t of themes) {
    const hay = (t.name + " " + t.keywords.join(" ")).toLowerCase();
    const score = tokens.reduce((s, tok) => (tok.length > 2 && hay.includes(tok) ? s + 1 : s), 0);
    if (score > bestScore) {
      bestScore = score;
      best = t;
    }
  }
  if (best && bestScore > 0) return { theme: best, matched: true, suggestions: [] };

  // 4) No match — return universal ideas plus a few themes to try.
  return { theme: universalTheme, matched: false, suggestions: themes.slice(0, 6) };
}
