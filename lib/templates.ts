// Reusable templates and sample data for the Templates & Scripts page.

// Donation ask — generalized from a real Austin block (fill the [brackets]).
export const donationEmail = `Subject: Donation request — [Neighborhood] block party on [date]

Hi [business name] team,

I'm a resident on the [1900 block of Street Name] in the [Neighborhood] neighborhood, and I'm helping organize our annual block party on [date]. We close down the street and bring together neighbors, families, and members of the [Neighborhood Association] for an afternoon of food, music, and community — and the crowd is largely made up of the people who support businesses like yours year-round.

We run the event potluck-style, but we reach out to a handful of local favorites to see if they'd be open to contributing something small. Totally flexible — it could be a tray of food, baked goods, drinks, a gift card, or whatever feels easy and on-brand for you.

To be transparent, it costs our block about $[2,000]+ to host once you factor in street-closure supplies, tables, chairs, and rentals, and a portion of that comes out of neighbors' pockets. We do our best to fundraise, but it's tough to cover everything — which is part of why we reach out to the local businesses we love.

In return, we'll highlight and promote participating businesses on our event flyers, in the [Neighborhood Association] newsletter, and with shout-outs during the event itself.

No pressure at all if it's not feasible — we know how busy things get. But we'd love to include your team if you're open to it.

Thanks so much for being part of what makes this neighborhood so great.

[Your name]
[Phone / email]
[Link to the event invite]`;

// Shorter in-person / counter ask you can say out loud or leave on a card.
export const donationScriptShort = `Hi! I live a few blocks over and I'm helping put on our neighborhood block party on [date]. We're asking a few local favorites if they'd donate something small — food, drinks, a gift card, anything that's easy for you. We'll feature you on our flyers, in the neighborhood newsletter, and at the event. Totally fine if not! Could I leave a flyer with the details?`;

export type BudgetRow = {
  item: string;
  notes: string;
  typical: string;
};

// Sample budget — real numbers from an ~80-home Austin block. Yours will vary.
export const budgetRows: BudgetRow[] = [
  { item: "City permit", notes: "Application fee", typical: "$50 + 4%" },
  { item: "Tables & chairs", notes: "~20 tables / 100 chairs (scale to your block)", typical: "$400–900" },
  { item: "Barriers / barricades", notes: "Rental, or check the City's loaner program first", typical: "$0–400" },
  { item: "Tent", notes: "10×10 pop-ups; buying can beat repeat rentals", typical: "$0–300" },
  { item: "Port-a-potty", notes: "One standard unit, weekend rental", typical: "$120–200" },
  { item: "Entertainment", notes: "Band, DJ, or dance troupe (1–1.5 hr)", typical: "$0–600" },
  { item: "Yard games & rentals", notes: "Giant games, delivery included", typical: "$80–150" },
  { item: "Food anchor", notes: "Beyond potluck — tacos, BBQ, pizza", typical: "$0–500" },
  { item: "Supplies", notes: "Ice, cups, plates, utensils, trash bags, tape, name tags", typical: "$100–200" },
  { item: "Decorations", notes: "Banners, flowers, balloons, tablecloths", typical: "$50–150" },
  { item: "Printing", notes: "Flyers — ask a local printer to donate", typical: "$0–80" },
];

export type ScheduleRow = { time: string; what: string };

// Sample day-of run of show for an afternoon-into-evening party.
export const daySchedule: ScheduleRow[] = [
  { time: "12:00–2:00", what: "Setup crew: barriers, monitors posted, tables, decorations, signage" },
  { time: "2:00–3:00", what: "Food donations picked up; coolers iced; welcome/name-tag tables staffed" },
  { time: "3:00", what: "Doors open — greet neighbors at both ends, hand out name tags" },
  { time: "4:00", what: "Potluck opens; everyone sits down to eat together" },
  { time: "5:00", what: "Headline entertainment (band, dance troupe, performance)" },
  { time: "6:00", what: "Kids' moment — piñata, games, or craft wrap-up" },
  { time: "7:00", what: "Open music, hanging out, dessert" },
  { time: "8:00–9:00", what: "Wind down before the 10 p.m. sound cutoff; cleanup crew starts" },
  { time: "Next morning / Monday", what: "Rental pickups, returns, laundry, final street sweep" },
];

// The action items people forget until it's too late.
export const breakdownChecklist: string[] = [
  "Break down and stack tables and chairs by rental group",
  "Bag trash and recycling; do a full street sweep",
  "Wash and return linens, serving utensils, and coolers",
  "Return borrowed items (banner, games, sound gear) to their owners",
  "Confirm rental pickup window (often the Monday after)",
  "Collect the lost & found and post it to the block thread",
  "Send thank-you notes to every donor and business",
  "Ask the neighborhood association to highlight business donors",
  "Hold a 20-minute debrief and start the 'next year' list",
];

export type ForgotItem = { title: string; detail: string };

// Commonly-missed planning items — the 'what's often missing' additions.
export const dontForget: ForgotItem[] = [
  {
    title: "Heat & shade plan",
    detail:
      "Austin spring/summer is hot. Provide shade tents, a water station, sunscreen, and misting fans. Heat is the #1 day-of problem.",
  },
  {
    title: "Trash, recycling & dumpster",
    detail:
      "Plan clearly-labeled bins, extra bags, and who hauls it. A small dumpster or extra curbside pickup may be worth it.",
  },
  {
    title: "Restrooms",
    detail:
      "Decide on a port-a-potty early and confirm placement (a driveway works). One unit per ~75–100 guests is a good rule of thumb.",
  },
  {
    title: "Emergency access lane",
    detail:
      "Keep a clear lane down the street so fire/EMS can pass. Monitors at each end manage the barriers.",
  },
  {
    title: "Power for sound & vendors",
    detail:
      "Confirm where the PA, lights, and any displays plug in. Run cords safely or plan a quiet generator.",
  },
  {
    title: "Accessibility & inclusion",
    detail:
      "Keep paths clear for strollers and wheelchairs, offer seating in shade, and translate the invite if your block is bilingual.",
  },
  {
    title: "Weather backup",
    detail:
      "Set a rain/backup date when you pick the date, and decide your call-it-off threshold in advance.",
  },
  {
    title: "Kid safety",
    detail:
      "Name tags with a parent's phone number, a clearly marked kids' zone, and a known meet-up spot if someone gets separated.",
  },
  {
    title: "Pets & parking",
    detail:
      "Set a leashed-pets norm and tell neighbors where to park once the street closes (no-parking notices help).",
  },
  {
    title: "Capture the day",
    detail:
      "Assign someone to photos and a group shot — great for next year's flyer and the association newsletter.",
  },
];

// Volunteer roles to seed your sign-up sheet.
export const volunteerRoles: string[] = [
  "Setup crew (morning) — barriers, tables, decorations",
  "Welcome / name-tag table — one at each end",
  "Food & drink station — restock, ice, keep it tidy",
  "Kids' zone lead — games, craft, piñata",
  "Entertainment wrangler — greet & cue the band/performers",
  "Street monitors — stationed at each closure point",
  "Cleanup crew (evening) — trash, recycling, sweep",
  "Returns & laundry (next day) — rentals, linens, borrowed gear",
];

// Meeting cadence to put on everyone's calendar up front.
export const meetingCadence: string[] = [
  "10 weeks out — Kickoff: assign roles, set theme & budget",
  "8 weeks out — Permit & signatures status; flyer/invite review",
  "6 weeks out — Donations & entertainment check-in",
  "4 weeks out — Promotion push; volunteer sign-up opens (weekly meetings start)",
  "3 weeks out — Logistics & rentals confirmed",
  "2 weeks out — Day-of plan, run of show, direct volunteer asks",
  "1 week out — Final headcount, supplies, reminders",
];
