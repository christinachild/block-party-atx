export type Phase = {
  id: string;
  when: string;
  title: string;
  focus: string;
  items: string[];
  tip?: string;
};

// The full order of operations, from first idea to post-party cleanup.
// Built around Austin's permit timing (file at least 15 days out) but padded
// for the real-world work of organizing neighbors and sourcing donations.
export const timeline: Phase[] = [
  {
    id: "kickoff",
    when: "3+ months out",
    title: "Float the idea & build your crew",
    focus: "Find out if there's appetite, then share the load from day one.",
    items: [
      "Poll the block informally (text thread, door knocks, NextDoor) to gauge interest.",
      "Recruit 3–5 neighbors for a party-planning committee — pick people who are already connected to others on the block.",
      "Pick a target date and a rain/backup date. Avoid holiday weekends and back-to-school.",
      "Pick a lead organizer and a money person (who holds funds / Venmo).",
      "Start a shared doc or spreadsheet for to-dos, owners, and deadlines (template on the Templates page).",
    ],
    tip: "Start sponsor and donation outreach NOW, not later. Every experienced organizer says the same thing: the earlier you ask local businesses, the more likely they say yes.",
  },
  {
    id: "kickoff-meeting",
    when: "~10 weeks out",
    title: "Host a kickoff meeting",
    focus: "Decide the vibe, set the budget, and assign owners to every task.",
    items: [
      "Walk the committee through the master to-do list and have people claim action items.",
      "Decide what kind of party: potluck, live entertainment, kid/family focus — or a mix.",
      "Pick a theme (use the Theme Ideas generator for inspiration).",
      "Draft a rough budget so you know your fundraising goal (sample budget on Templates).",
      "Schedule ALL your planning meetings now and put them on everyone's calendar — every 2–3 weeks at first, then weekly the final month.",
    ],
    tip: "Hosting meetings at rotating houses on the block keeps energy up and pulls in neighbors who'd never come to a formal meeting.",
  },
  {
    id: "permit",
    when: "8–10 weeks out",
    title: "Collect signatures & start the permit",
    focus: "Lock the street closure so everything else can be planned with confidence.",
    items: [
      "Confirm your street qualifies (residential, ≤25 mph, no intersection or transit/signal in the closure).",
      "Collect support from at least 60% of households on the block; notify 100% of the block.",
      "Map your closure points and where the adult monitors will stand at each end.",
      "Start the application at the City's Block Party portal (you can file as late as 15 days out, but don't wait).",
      "Design the flyer and build the online invite (Partiful, Evite, etc.) with a donation link and the volunteer sign-up.",
    ],
    tip: "See the Austin Permit page for the exact steps, fees, and what's allowed vs. not allowed.",
  },
  {
    id: "donations",
    when: "6–8 weeks out",
    title: "Source donations & book entertainment",
    focus: "Money and goods take the longest — give businesses time to say yes.",
    items: [
      "Email or visit local food & beverage spots with your donation ask (script on Templates).",
      "Ask a local printer to cover or discount flyer printing.",
      "Line up monetary donors: neighborhood association, nearby nonprofits/conservancies, generous neighbors.",
      "Book entertainment: band, DJ, dance troupe, face painter, etc. Confirm fees and arrival times in writing.",
      "Reserve rentals: tables, chairs, barriers/barricades, tent, yard games, port-a-potty.",
      "Reserve real, reusable dishes & serving ware instead of single-use — Austin's free Dish Lending Library is perfect for this (details on the Templates page).",
    ],
    tip: "Track every donation (who, what, pickup date/time) in one place so nothing gets dropped on party day.",
  },
  {
    id: "promote",
    when: "~4 weeks out (1 month)",
    title: "Promote everywhere & open volunteer sign-ups",
    focus: "Get the invite in front of every neighbor, every channel.",
    items: [
      "Post printed flyers around the neighborhood (parks, cafes, daycares, community boards).",
      "Get the invite into the neighborhood association newsletter and any listservs / Google groups.",
      "Post on neighborhood social media and NextDoor.",
      "Open the volunteer sign-up (SignUp Genius, Google Form, or similar) and link it inside the online invite.",
      "Begin weekly check-in meetings to keep every action item moving.",
    ],
    tip: "A QR code on the printed flyer that links to the invite + donation page bridges your paper and online outreach.",
  },
  {
    id: "confirm",
    when: "~2 weeks out",
    title: "Confirm logistics & recruit volunteers directly",
    focus: "Turn RSVPs into committed helpers and lock every rental.",
    items: [
      "Re-confirm all rentals, donations, and entertainment, including exact delivery/pickup windows.",
      "Decide on a port-a-potty and confirm where it can be placed (a driveway works well).",
      "After people RSVP, personally ask them to take a 30–60 min volunteer slot (setup, during, or cleanup).",
      "Finalize the day-of run of show and assign a lead to each segment.",
      "Plan welcome/name-tag tables at BOTH ends so you greet people coming from either direction.",
    ],
    tip: "Lesson from real blocks: people often don't self-assign on a sign-up sheet. Asking each RSVP directly for one specific slot works far better.",
  },
  {
    id: "week-of",
    when: "Week of the party",
    title: "Buy, prep & remind",
    focus: "Final headcount, supplies, and signage.",
    items: [
      "Buy or gather: ice, coolers, water/soda/juice, cups, plates, utensils, napkins, trash & recycling bags, tape, sharpies, name tags.",
      "Print donation QR codes and 'sponsored by' signs so neighbors know which business gave what.",
      "Make a map/signage of where everything is, posted at the entrances.",
      "Send a reminder through the invite and listserv with timing, BYOB/potluck note, and parking guidance.",
      "Remind EVERY household to move their cars off the street the morning of the party — before the barriers go up.",
      "Confirm who picks up each food donation and rental, and when.",
    ],
    tip: "Austin in spring/summer is hot — plan shade, water stations, and sunscreen. Heat is the most common day-of problem.",
  },
  {
    id: "day-before",
    when: "Day before",
    title: "Stage everything",
    focus: "Get supplies and rentals positioned so the morning is calm.",
    items: [
      "Have tables, chairs, and barriers delivered (often Friday for a weekend party).",
      "Move all party supplies to one staging spot (a front porch works).",
      "Fill coolers / pre-chill drinks.",
      "Do a final volunteer confirmation text for setup crew.",
      "Charge speakers, test the sound system and microphone.",
    ],
  },
  {
    id: "day-of",
    when: "Party day",
    title: "Set up, host, and keep it safe",
    focus: "Run the show and keep the closure monitored.",
    items: [
      "Place barriers and station an adult monitor at each closure point for the whole event.",
      "Set up tables, decorations, name-tag/welcome tables, kids' zone, and food area.",
      "Keep an emergency lane clear so fire/EMS can pass if needed.",
      "Run the schedule (sample on Templates) and keep water/shade available.",
      "Take photos and capture a group shot.",
    ],
    tip: "Amplified sound is allowed 10 a.m.–10 p.m. and capped at 75 dB — keep the band/DJ within the window and volume.",
  },
  {
    id: "after",
    when: "After the party",
    title: "Break down, return & say thank you",
    focus: "The part everyone forgets — finish strong.",
    items: [
      "Break down chairs/tables, bag trash & recycling, sweep the street.",
      "Wash and return linens, serving gear, coolers, and borrowed items.",
      "Schedule rental pickups (often the Monday after).",
      "Write thank-you notes to every business and donor — and ask the neighborhood association to highlight them.",
      "Hold a short debrief: what to keep, what to change, and start a list for next year.",
    ],
    tip: "Keep a running 'next year' note. Returning organizers say the debrief list is the single most valuable document they have.",
  },
];
