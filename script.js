// =========================================
// CONFIGURATION — fill these in after
// creating your free Supabase project.
// See README.md for setup instructions.
// =========================================
const SUPABASE_URL = 'https://fvvrzmhvicneblvjsfbg.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_1Nyhx70gOCsBsMWnmrGecw_95wJWZt-';

// Password required to claim bride status when entering "Shannon" as a name.
// Change this to whatever you want to share with Shannon privately.
const BRIDE_PASSWORD = 'alex';

// =========================================
// EVENTS DATA
// Fields:
//   id        unique short string, no spaces
//   emoji     fun icon
//   name      display name
//   type      'drinking' or 'non-drinking'
//   location  neighborhood (used as section heading + badge)
//   desc      short description shown on card
//   price     estimated cost per person
//   address   physical address (shown in detail modal)
//   tips      array of bullet points for detail modal
//   website   display text for finding more info
// =========================================

// Location sort order
const LOCATION_DESCRIPTIONS = {
  'South Congress':       'Austin\'s most iconic strip — indie shops, murals, great restaurants, and the best people-watching in the city. About 2 miles south of downtown. This is the vibe.',
  'South Lamar':          'Chill residential street just west of SoCo. Locally loved — less touristy, great food, and the Alamo Drafthouse. More of a "where Austinites actually eat" situation.',
  'East 6th':             'Austin\'s artsy east side. Eclectic mix of tacos, dive bars, vintage shops, and late-night spots. Way cooler than it sounds — this is where the locals go.',
  'Dirty 6th / Red River': 'Dirty 6th = the chaotic neon bar crawl strip, great for group bar-hopping. Red River is right next to it and has the best live music venues in the city — different vibe, way better bands.',
  'West 6th':             'More polished bar and restaurant district west of downtown. Better cocktails, nicer patios, less rowdy than 6th Street. Good spot to start a night out.',
  'Downtown':             'The city center. Lady Bird Lake waterfront, the Capitol, and Rainey Street — Austin\'s bar strip (see the Rainey Street card for the honest take).',
  'Zilker / Town Lake':   'Where Austinites spend their weekends. Barton Springs Pool, Zilker Park, and Lady Bird Lake all in one spot. Kayaking, hiking the trail, and the iconic keep-Austin-weird outdoor life.',
  'Lake Austin':          'The scenic stretch of the Colorado River west of the city. Quiet coves, boat rentals, and waterfront restaurants. This is where the boat day happens.',
  'Hill Country':         'Rolling cedar hills and Texas sky west of Austin. Wineries, wildflowers, swimming holes, and small towns. Options range from 30 min away (Driftwood winery) to 1.5 hrs away (Fredericksburg) — great if the group wants a full day out of the city.',
};

const LOCATION_ORDER = [
  'South Congress',
  'South Lamar',
  'East 6th',
  'Dirty 6th / Red River',
  'West 6th',
  'Downtown',
  'Zilker / Town Lake',
  'Lake Austin',
  'Hill Country',
];

const EVENTS_RAW = [
  {
    id: 'continental-club',
    emoji: '🎸',
    name: 'Continental Club',
    category: 'bar',
    type: 'drinking',
    location: 'South Congress',
    desc: 'Austin\'s most beloved live music bar. Always great acts, legendary atmosphere — no bad nights here.',
    price: '$10–15 cover',
    address: '1315 S Congress Ave, Austin, TX 78704',
    tips: [
      '🎸 Fri July 17 — The Blues Specialists at 6:30 PM',
      '🎸 Sat July 18 — The Peterson Brothers at 8:00 PM',
      '🎸 Sun July 19 — Marshall Hood at 2:30 PM · Heybale! at 6:00 PM',
      '🎸 Mon July 20 — Eve Monsees & Mike Buck 6:30 PM · Dale Watson 10:15 PM',
      'Two stages — main room downstairs and Gallery upstairs (sometimes free)',
      'Standing room only mostly, gets packed after 10pm',
      'Right on South Congress — easy walk from dinner',
    ],
    website: 'continentalclub.com/austin',
  },
  {
    id: 'aba',
    emoji: '🫒',
    name: 'Aba',
    category: 'restaurant',
    type: 'drinking',
    location: 'South Congress',
    desc: 'Upscale Mediterranean with a stunning rooftop terrace on SoCo. Great cocktails, shareable plates, and a beautiful space — perfect for a group dinner or drinks.',
    price: '$40–70/person',
    address: '1011 S Congress Ave, Austin, TX 78704',
    tips: [
      'Make a reservation — it books out fast, especially on weekends',
      'The rooftop is the move — ask specifically for rooftop seating',
      'Great for a nicer Friday night dinner or pre-drinks before going out',
      'Sharable plates — hummus, lamb, flatbreads are standouts',
      'Dress is upscale casual',
    ],
  },
  {
    id: 'loro',
    emoji: '🔥',
    name: 'Loro',
    category: 'restaurant',
    type: 'drinking',
    location: 'South Lamar',
    desc: 'Asian smokehouse from the teams behind Uchi and Franklin BBQ. Outdoor patio, craft cocktails, smoked meats — one of Austin\'s best vibes.',
    price: '$30–50/person',
    address: '2115 S Lamar Blvd, Austin, TX 78704',
    tips: [
      'Walk-in only — no reservations, but the wait is worth it',
      'Order the brisket fried rice and oak-smoked brisket',
      'Great outdoor patio — perfect for a warm July evening',
      'Get there right at opening (11am or 4pm) to avoid a long wait on weekends',
      'Cocktails are excellent — try the Thai basil smash',
    ],
  },
  {
    id: 'gueros',
    emoji: '🌵',
    name: 'Güero\'s Taco Bar',
    category: 'restaurant',
    type: 'drinking',
    location: 'South Congress',
    desc: 'Honestly the food is mid, but the Oak Garden patio is the move — live music, frozen margaritas, string lights, big group energy. Great for day drinking.',
    price: '$20–35/person',
    address: '1412 S Congress Ave, Austin, TX 78704',
    tips: [
      'The Oak Garden patio out back is huge — great for a group',
      'Live music on the patio most weekends',
      'Try the Oak Garden margarita — their signature frozen marg',
      'Gets busy on weekends — go for late lunch or early dinner to avoid the wait',
      'Right in the heart of SoCo, easy to walk to from everywhere',
    ],
  },
  {
    id: 'perlas',
    emoji: '🦞',
    name: 'Perla\'s Seafood',
    category: 'restaurant',
    type: 'drinking',
    location: 'South Congress',
    desc: 'Upscale seafood with a gorgeous SoCo patio. Oysters, cocktails, and great people-watching — feels special without being stuffy.',
    price: '$40–65/person',
    address: '1400 S Congress Ave, Austin, TX 78704',
    tips: [
      'Reservation strongly recommended on weekends',
      'Oyster happy hour on weekdays (3–6pm) if the timing works',
      'The patio is beautiful — one of the best outdoor dining spots on SoCo',
      'Great for a Friday lunch or early dinner before heading out',
      'Seafood towers are perfect for sharing as a group',
    ],
  },
  {
    id: 'spa-day',
    emoji: '💆',
    name: 'Spa Day — Milk + Honey',
    category: 'other',
    type: 'non-drinking',
    location: 'South Congress',
    desc: 'Austin\'s favorite local spa. Massages, facials, and full relaxation. Book the group package for a private experience.',
    price: '$100–150/person',
    address: 'Multiple locations — South Congress and Downtown',
    tips: [
      'Book 2–3 weeks in advance for a group — Saturday slots go fast',
      'Ask about the group package — can get a private area for parties',
      'Robes and slippers provided, arrive 15 min early',
      'South Congress location is closest to the rest of your itinerary',
      'Great morning activity before Matt\'s El Rancho',
    ],
    website: 'milkandhoneyspa.com',
  },
  {
    id: 'broken-spoke',
    emoji: '🤠',
    name: 'Broken Spoke',
    category: 'bar',
    type: 'drinking',
    location: 'South Lamar',
    desc: 'The real deal — oldest honky tonk in Austin since 1964. Live country music, two-stepping, cold Lone Stars.',
    price: '$10–15 cover',
    address: '3201 S Lamar Blvd, Austin, TX 78704',
    tips: [
      '🤠 Fri July 17 — All Hat No Cadillac at 9 PM',
      '🤠 Sat July 18 — check brokenspokeaustintx.net/events-calendar for confirmed act',
      'Two-step lessons before the live band starts (~8pm Thu–Sat)',
      'Best spot to practice moves after Sagebrush lessons earlier that day',
      'Dinner available — the chicken fried steak is a classic',
      'Cash preferred at the door, get there early to grab a table',
      'Open Thu–Sat nights only',
    ],
    website: 'brokenspokenightclub.com',
  },
  {
    id: 'driftwood-winery',
    emoji: '🍷',
    name: 'Driftwood Estate Winery',
    category: 'other',
    type: 'drinking',
    location: 'Hill Country',
    desc: 'Wine tasting at a beautiful Hill Country winery about 35 minutes southwest of Austin. Scenic drive, great wine, very laid back.',
    price: '$30–50/person',
    address: '1700 Elder Hill Rd, Driftwood, TX 78619',
    tips: [
      'About 35 minutes southwest of downtown — scenic Hill Country drive',
      'Tasting room open daily, no reservation needed usually',
      'Outdoor patio with Hill Country views — perfect for a summer afternoon',
      'Pair with a stop in Driftwood or continue out toward Fredericksburg if the group wants more',
    ],
    website: 'driftwoodestatewinery.com',
  },
  {
    id: 'horseback-riding',
    emoji: '🐴',
    name: 'Horseback Riding',
    category: 'other',
    type: 'non-drinking',
    location: 'Hill Country',
    desc: 'Trail ride through the Hill Country outside Austin. Beginner-friendly, all experience levels welcome.',
    price: '$60–80/person',
    address: 'Hill Country area, ~30–45 min from Austin',
    tips: [
      'Book in advance — group slots fill up quickly in summer',
      'Wear closed-toe shoes and long pants if possible',
      'Usually 1–2 hour trail rides available',
      'Great photo opportunity — beautiful Hill Country scenery',
      'Search "Bar S Stables Austin" or similar Hill Country ranches',
    ],
    website: 'Search "horseback riding Austin Hill Country" to compare ranches',
  },
  {
    id: 'fredericksburg',
    emoji: '🍷',
    name: 'Fredericksburg Day Trip',
    category: 'other',
    type: 'drinking',
    location: 'Hill Country',
    desc: 'Charming Texas Hill Country town known for wineries, peach stands, and Main Street shops. A full day out — plan for the whole afternoon. Note: it\'s about 1.5 hrs from Austin each way, so this is a commit.',
    price: '$60–100/person (wine tastings + food)',
    address: 'Fredericksburg, TX 78624 — ~90 miles west of Austin via US-290',
    tips: [
      '~1.5 hour drive each way — plan to leave by 10am and return by dinner',
      'US-290 Wine Road has 50+ wineries between Austin and Fredericksburg',
      'Main Street is great for boutique shopping and food — very walkable',
      'August-E\'s and Vaudeville are great dinner spots in town if you want to make a full day',
      'Designated driver or book a wine tour bus — many Austin companies run group tours',
      'July is peak peach season — stop at a roadside stand on the way back',
    ],
    website: 'visitfredericksburgtx.com',
  },
  {
    id: 'jewboy-burgers',
    emoji: '🍔',
    name: 'JewBoy Burgers',
    category: 'restaurant',
    type: 'non-drinking',
    location: 'East 6th',
    desc: 'A well-known Austin spot — creative, loaded burgers with local ingredients. Unpretentious, good, and genuinely Austin.',
    price: '$12–18/person',
    address: 'East Austin area (check current location)',
    tips: [
      'A legit Austin institution — not a chain, not a gimmick, just a great burger',
      'Creative toppings and daily specials — check the menu before you go',
      'Great for lunch or a casual dinner before a night out',
      'Cash friendly, small operation — part of what makes it worth going',
    ],
    website: 'Search "JewBoy Burgers Austin" for current location and hours',
  },
  {
    id: 'de-nada-margs',
    emoji: '🍹',
    name: 'De Nada Cantina — Frozen Margs',
    category: 'bar',
    type: 'drinking',
    location: 'East 6th',
    desc: 'Best frozen margaritas in Austin and it\'s not close. Famously strong. Great stop before or after anything.',
    price: '$10–15/drink',
    address: 'Multiple Austin locations (East 6th area)',
    tips: [
      'These are NOT normal margaritas — they are strong, be warned',
      'Perfect pre-game stop or afternoon pitstop',
      'Usually a line but it moves fast',
      'Get the classic frozen margarita — don\'t overthink it',
      'Cash friendly, outdoor seating available',
    ],
    website: 'Search "De Nada Cantina Austin" for nearest location',
  },
  {
    id: 'taco-speakeasy',
    emoji: '🌮',
    name: 'Taco Speakeasy',
    category: 'restaurant',
    type: 'drinking',
    location: 'East 6th',
    desc: 'Hidden bar behind a taco shop — find the secret entrance. Craft cocktails, tacos, and serious late-night energy.',
    price: '$20–35/person',
    address: 'East 6th St area, Austin, TX',
    tips: [
      'The entrance is hidden — look for the bookshelf or ask the host',
      'Reservation recommended on weekends',
      'Known for strong, well-crafted cocktails and excellent tacos',
      'Late-night vibes, usually stays busy until close',
    ],
    website: 'Search "taco speakeasy Austin" for current location & reservations',
  },
  {
    id: 'comedy-mothership',
    emoji: '🎤',
    name: 'Comedy Mothership',
    category: 'other',
    type: 'drinking',
    location: 'Dirty 6th / Red River',
    desc: 'Joe Rogan\'s comedy club on Red River. World-class stand-up in a sick venue — tickets sell out fast.',
    price: '$25–40/person',
    address: '715 Red River St, Austin, TX 78701',
    tips: [
      '🎤 July 2026 lineup not posted yet — check comedymothership.com/shows closer to the date',
      'Book tickets in advance — they sell out, especially on Saturdays',
      '21+ only, full bar inside, 2-drink minimum',
      'Doors open ~1 hour before showtime, arrive early for good seats',
      'Parking on Red River or garage on 7th St',
    ],
    website: 'comedymothership.com',
  },
  {
    id: 'rooftop-bars',
    emoji: '🥂',
    name: 'Rooftop Bar Hop',
    category: 'bar',
    type: 'drinking',
    location: 'Dirty 6th / Red River',
    desc: 'Hit Austin\'s best rooftops back to back — skyline views, great cocktails, bachelorette-party energy.',
    price: '$50–80/person (drinks)',
    address: 'Downtown Austin — 2nd St / Congress Ave area',
    tips: [
      'Top picks: Aba Austin, Cedar Door, Summit Rooftop, and Péché',
      'Walk between most of them — all in the downtown core',
      'Go earlier (7–9pm) to beat the wait lists',
      'Dress code at some venues — check ahead',
      'Great Friday night option before the bigger Saturday',
    ],
    website: 'Search each by name for reservations',
  },
  {
    id: 'donns-depot',
    emoji: '🚂',
    name: 'Donn\'s Depot',
    category: 'bar',
    type: 'drinking',
    location: 'West 6th',
    desc: 'Funky bar built inside old train cars on 5th Street. Donn\'s house band plays classics every weekend.',
    price: '$5–10 cover',
    address: '1600 W 5th St, Austin, TX 78703',
    tips: [
      '🚂 Sat July 18 — The Station Masters (house band) plays every Saturday night',
      '⚠️ Closed Sundays — plan for Friday or Saturday only',
      'Hours: Mon–Fri 2pm–2am · Sat 6pm–2am',
      'Totally unique atmosphere — actual vintage railroad cars as the bar',
      'Smaller and more intimate than Broken Spoke, great for a group',
      'Cash only — bring bills',
      'Get there before 10pm to get a good spot',
    ],
    website: 'donnsdepot.com',
  },
  {
    id: 'cocktail-class',
    emoji: '🍸',
    name: 'Cocktail Making Class',
    category: 'other',
    type: 'drinking',
    location: 'Downtown',
    desc: 'A private mixologist teaches the group 2–3 signature cocktails. Hands-on, fun, and you drink what you make.',
    price: '$70–90/person',
    address: 'Various venues — downtown Austin',
    tips: [
      'Many Austin bars offer private cocktail classes for groups — search Airbnb Experiences',
      'Usually 2 hours, includes 2–3 drinks per person',
      'Great Friday night activity — loosens up the group for the weekend',
      'Book 1–2 weeks in advance for a group of 10',
    ],
    website: 'Search "private cocktail class Austin" or Airbnb Experiences',
  },
  {
    id: 'town-lake-cruise',
    emoji: '🚢',
    name: 'Town Lake Evening Cruise',
    category: 'other',
    type: 'non-drinking',
    location: 'Downtown',
    desc: 'Sunset boat cruise on Lady Bird Lake. Relaxed, cheap, and a great way to see the city from the water.',
    price: '$25–35/person',
    address: 'Various departure docks — Congress Ave Bridge area, Downtown',
    tips: [
      'Evening cruises often include the Congress Ave bat colony (1.5M bats emerge at dusk — insane)',
      'Book a private charter for the group or join a public cruise',
      'BYOB sometimes allowed on private charters — check when booking',
      'Best in the evening: cooler temps and sunset over the skyline',
    ],
    website: 'Search "Lady Bird Lake boat cruise Austin" to compare operators',
  },
  {
    id: 'austin-city-limits',
    emoji: '📺',
    name: 'Austin City Limits Taping',
    category: 'other',
    type: 'non-drinking',
    location: 'Downtown',
    desc: 'Free tickets to a live taping of the longest-running music TV show in America. If there\'s a taping that weekend — legendary.',
    price: 'Free (if tickets available)',
    address: 'KLRU Studio 6A — 2504 Whitis Ave, Austin, TX 78712',
    tips: [
      'Tickets are free but extremely limited — check klru.org well in advance',
      'Tapings aren\'t every weekend — verify the schedule first',
      'Doors open ~1 hour before taping, arrive early',
      'No professional cameras, standing room only',
      'If the lineup is good — this is a bucket list Austin experience',
    ],
    website: 'klru.org/austincitylimits/tickets',
  },
  {
    id: 'escape-room',
    emoji: '🔐',
    name: 'Escape Room',
    category: 'other',
    type: 'non-drinking',
    location: 'Downtown',
    desc: 'Work as a team to solve the puzzle before time runs out. Always a good time for a group.',
    price: '$28–35/person',
    address: 'Mission Escape Games — 501 N I-35, Austin, TX 78702',
    tips: [
      'Book in advance online — private room for your group of ~10',
      'Most rooms are 60 minutes',
      'Enchanted Escapes and Escape the Rock are other good Austin options',
      'Best earlier in the weekend when everyone has energy',
    ],
    website: 'missionescapegames.com',
  },
  {
    id: 'barton-springs',
    emoji: '🏊',
    name: 'Barton Springs Pool',
    category: 'other',
    type: 'non-drinking',
    location: 'Zilker / Town Lake',
    desc: 'Natural spring-fed pool in Zilker Park. Crystal clear 68°F water — perfect escape from July heat.',
    price: '$5/person',
    address: '2201 Barton Springs Rd, Austin, TX 78746',
    tips: [
      'Open daily, usually 5am–10pm (hours vary by season)',
      'Stays 68°F year-round — incredibly refreshing in July heat',
      'Bring towels, sunscreen, and snacks — no food vendors inside',
      'Parking fills fast on weekends — arrive before noon',
      'Free before the pool opens for lap swim in the early morning',
    ],
    website: 'austintexas.gov — search "Barton Springs Pool"',
  },
  {
    id: 'kayak-paddleboard',
    emoji: '🛶',
    name: 'Kayak / Paddleboard Town Lake',
    category: 'other',
    type: 'non-drinking',
    location: 'Zilker / Town Lake',
    desc: 'Rent a kayak or paddleboard on Lady Bird Lake. Austin skyline views, easy paddling, great for a group.',
    price: '$20–25/person/hr',
    address: 'Rowing Dock — 2418 Stratford Dr, Austin, TX 78746',
    tips: [
      'Rowing Dock is the most popular rental spot — book ahead on weekends',
      'No experience needed, paddleboards are beginner friendly',
      'Go in the morning or evening to avoid peak July heat',
      'Life jackets provided, leave valuables in the car',
      'Zilker Boat Rentals is a nearby alternative',
    ],
    website: 'rowingdock.com',
  },
  {
    id: 'cooking-class',
    emoji: '👩‍🍳',
    name: 'Cheese & Wine Pairing Class',
    category: 'other',
    type: 'non-drinking',
    location: 'Zilker / Town Lake',
    desc: 'Antonelli\'s Cheese Shop does amazing pairing classes — hands-on, educational, and delicious.',
    price: '$65–95/person',
    address: 'Antonelli\'s Cheese Shop — 4220 Duval St, Austin, TX 78751',
    tips: [
      'Antonelli\'s cheese & wine classes are legendary in Austin',
      'Book through their website well in advance — small class sizes',
      'Great option for a Friday or Saturday afternoon activity',
      'Works great for non-drinkers too — can sub sparkling water for wine',
    ],
    website: 'antonellischeese.com',
  },
  {
    id: 'ski-shores',
    emoji: '⛵',
    name: 'Ski Shores Cafe',
    category: 'restaurant',
    type: 'non-drinking',
    location: 'Lake Austin',
    desc: 'Waterfront spot on Lake Austin. Great food, cold drinks, beautiful hill views — worth the 30 min drive.',
    price: '$30–50/person (food + drinks)',
    address: '2905 Pearce Rd, Austin, TX 78730',
    tips: [
      'Outdoor seating right on the water — get there early for lakefront tables',
      '30 min drive through the hills west of downtown',
      'Known for burgers, cold beer, and the lake views',
      'Can get very busy on summer weekends — go mid-afternoon',
      'Cash and card accepted',
    ],
    website: 'Search "Ski Shores Cafe Austin" for hours',
  },
  {
    id: 'rainey-street',
    emoji: '🍺',
    name: 'Rainey Street Bar Hop',
    category: 'bar',
    type: 'drinking',
    location: 'Downtown',
    desc: 'Austin\'s bar street. It\'s not what it used to be — way more tourist-heavy and corporate now — but the right spots are still fun and it\'s easy for a group.',
    price: '$40–70/person',
    address: 'Rainey St, Austin, TX 78701',
    tips: [
      '⚠️ Rainey was Austin\'s hidden gem years ago — single-family homes turned into bars. Those days are mostly gone; it\'s busier and more touristy now.',
      'Still solid for a group — the energy is there even if the vibe shifted',
      '🍺 Banger\'s (79 Rainey) — 200+ beers on tap, massive patio, great for a group',
      '🍔 NADC Burger — legit late-night burgers right on the strip, hit it after a few drinks',
      '🃏 Electric Shuffle (59 Rainey) — competitive shuffleboard bar, multiple courts, great group activity',
      '🍹 Lustre Pearl Rainey (94 Rainey) — the original Rainey bar, lawn games, most laid back spot',
      '🍸 Half Step (75½ Rainey) — best cocktails on the street, no gimmicks',
      'Go early (before 9pm) to beat the crowd and snag a patio table',
    ],
    website: 'bangers-austin.com | electricshuffle.com/austin',
  },
];

// Vibe quick-picks — maps each vibe chip to a list of event IDs
const VIBES = {
  'honky-tonk': ['broken-spoke', 'donns-depot', 'continental-club'],
  'bbq':        ['driftwood-winery', 'loro', 'jewboy-burgers'],
  'tex-mex':    ['gueros', 'taco-speakeasy'],
  'live-music': ['continental-club', 'broken-spoke', 'donns-depot', 'austin-city-limits'],
  'outdoor':    ['barton-springs', 'kayak-paddleboard', 'ski-shores', 'horseback-riding', 'town-lake-cruise'],
  'upscale':    ['aba', 'perlas', 'rooftop-bars', 'cocktail-class'],
  'wine':       ['driftwood-winery', 'fredericksburg', 'cooking-class'],
  'party':      ['de-nada-margs', 'rooftop-bars', 'comedy-mothership', 'rainey-street'],
  'chill':      ['barton-springs', 'town-lake-cruise', 'spa-day', 'escape-room', 'cooking-class'],
};

// Sort events by location, then by category (restaurant → bar → other)
const CATEGORY_ORDER = ['restaurant', 'bar', 'other'];
const EVENTS = [...EVENTS_RAW].sort((a, b) => {
  const ai = LOCATION_ORDER.indexOf(a.location);
  const bi = LOCATION_ORDER.indexOf(b.location);
  const locDiff = (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  if (locDiff !== 0) return locDiff;
  const ac = CATEGORY_ORDER.indexOf(a.category || 'other');
  const bc = CATEGORY_ORDER.indexOf(b.category || 'other');
  return ac - bc;
});

// Slot assignments — which agenda slot each event competes for
const SLOT_MAP = {
  'aba':                'day-activity',
  'loro':               'day-activity',
  'gueros':             'day-activity',
  'perlas':             'day-activity',
  'comedy-mothership':  'saturday-night',
  'taco-speakeasy':     'saturday-night',
  'broken-spoke':       'honky-tonk',
  'donns-depot':        'honky-tonk',
  'continental-club':   'honky-tonk',
  'barton-springs':     'day-activity',
  'kayak-paddleboard':  'day-activity',
  'ski-shores':         'day-activity',
  'horseback-riding':   'day-activity',
  'austin-city-limits': 'day-activity',
  'town-lake-cruise':   'day-activity',
  'de-nada-margs':      'day-activity',
  'spa-day':            'day-activity',
  'escape-room':        'day-activity',
  'cooking-class':      'day-activity',
  'rooftop-bars':       'day-activity',
  'driftwood-winery':   'day-activity',
  'cocktail-class':     'day-activity',
  'rainey-street':      'day-activity',
  'jewboy-burgers':     'day-activity',
};
EVENTS.forEach(e => { e.slot = SLOT_MAP[e.id] || null; });

// Links for each event.
// Specific venues get a Maps link + website.
// Ideas get multiple option links so people can compare.
const EVENT_LINKS = {
  'aba': [
    { label: '📍 Maps', url: 'https://maps.apple.com/?q=Aba+Austin+TX' },
    { label: '🗓️ Reserve on OpenTable', url: 'https://www.opentable.com/r/aba-austin-reservations-austin?restref=1280941' },
  ],
  'loro': [
    { label: '📍 Maps', url: 'https://maps.apple.com/?q=Loro+Austin+TX' },
    { label: '🌐 loroeats.com', url: 'https://www.loroeats.com/locations/austin/south-lamar' },
  ],
  'gueros': [
    { label: '📍 Maps',    url: 'https://maps.apple.com/?q=Guero%27s+Taco+Bar+Austin+TX' },
    { label: '🗓️ Reserve on OpenTable', url: 'https://www.opentable.com/gueros-taco-bar' },
  ],
  'perlas': [
    { label: '📍 Maps',         url: 'https://maps.apple.com/?q=Perla%27s+Seafood+Austin+TX' },
    { label: '🗓️ Reserve on OpenTable', url: 'https://www.opentable.com/r/perlas-seafood-and-oyster-bar-austin' },
  ],
  'continental-club': [
    { label: '📍 Maps',   url: 'https://maps.apple.com/?q=Continental+Club+Austin+TX' },
    { label: '🎸 Show Schedule', url: 'https://continentalclub.com/austin' },
  ],
  'spa-day': [
    { label: '🗓️ Book Online', url: 'https://book.milkandhoneyspa.com' },
    { label: '📍 Maps', url: 'https://maps.apple.com/?q=Milk+and+Honey+Spa+Austin+TX' },
  ],
  'broken-spoke': [
    { label: '📍 Maps',   url: 'https://maps.apple.com/?q=Broken+Spoke+Austin+TX' },
    { label: '🤠 Show Schedule', url: 'https://www.brokenspokeaustintx.net/events-calendar' },
  ],
  'driftwood-winery': [
    { label: '📍 Maps', url: 'https://maps.apple.com/?q=Driftwood+Estate+Winery+Driftwood+TX' },
    { label: '🌐 driftwoodestatewinery.com', url: 'https://www.driftwoodestatewinery.com' },
  ],
  'horseback-riding': [
    { label: 'Bar S Stables',            url: 'https://maps.apple.com/?q=Bar+S+Stables+Austin+TX' },
    { label: 'Search horseback Austin',  url: 'https://www.google.com/search?q=horseback+riding+Austin+Hill+Country' },
  ],
  'de-nada-margs': [
    { label: '📍 Maps', url: 'https://maps.apple.com/?q=De+Nada+Cantina+Austin+TX' },
  ],
  'taco-speakeasy': [
    { label: 'Search options', url: 'https://www.google.com/search?q=taco+speakeasy+Austin+TX' },
    { label: '📍 Maps',    url: 'https://maps.apple.com/?q=taco+speakeasy+Austin+TX' },
  ],
  'comedy-mothership': [
    { label: '📍 Maps',  url: 'https://maps.apple.com/?q=Comedy+Mothership+Austin+TX' },
    { label: '🎟️ Buy Tickets', url: 'https://comedymothership.com/shows' },
  ],
  'rooftop-bars': [
    { label: 'Aba Austin',    url: 'https://maps.apple.com/?q=Aba+Austin+TX' },
    { label: 'Summit Rooftop', url: 'https://maps.apple.com/?q=Summit+Rooftop+Austin+TX' },
    { label: 'Péché',         url: 'https://maps.apple.com/?q=Peche+Austin+TX' },
    { label: 'Cedar Door',    url: 'https://maps.apple.com/?q=Cedar+Door+Austin+TX' },
  ],
  'donns-depot': [
    { label: '📍 Maps',   url: 'https://maps.apple.com/?q=Donn%27s+Depot+Austin+TX' },
    { label: '🚂 Show Schedule', url: 'https://donnsdepot.com/event-schedule' },
  ],
  'cocktail-class': [
    { label: 'Airbnb Experiences', url: 'https://www.airbnb.com/s/Austin--TX/experiences?refinement_paths%5B%5D=%2Fexperiences&query=cocktail+class' },
    { label: 'Search options',     url: 'https://www.google.com/search?q=private+cocktail+class+Austin+TX' },
  ],
  'town-lake-cruise': [
    { label: 'Austin Duck Adventures', url: 'https://maps.apple.com/?q=Austin+Duck+Adventures+TX' },
    { label: 'Search cruise options',  url: 'https://www.google.com/search?q=Lady+Bird+Lake+boat+cruise+Austin' },
  ],
  'austin-city-limits': [
    { label: 'Get tickets (klru.org)', url: 'https://www.klru.org/austincitylimits/tickets/' },
    { label: 'Google Maps — KLRU',     url: 'https://maps.apple.com/?q=KLRU+Studio+Austin+TX' },
  ],
  'escape-room': [
    { label: 'Mission Escape Games', url: 'https://maps.apple.com/?q=Mission+Escape+Games+Austin+TX' },
    { label: 'Enchanted Escapes',    url: 'https://maps.apple.com/?q=Enchanted+Escapes+Austin+TX' },
    { label: 'Escape the Rock',      url: 'https://maps.apple.com/?q=Escape+the+Rock+Austin+TX' },
  ],
  'barton-springs': [
    { label: '📍 Maps', url: 'https://maps.apple.com/?q=Barton+Springs+Pool+Austin+TX' },
  ],
  'kayak-paddleboard': [
    { label: 'Rowing Dock',        url: 'https://maps.apple.com/?q=Rowing+Dock+Austin+TX' },
    { label: 'Zilker Boat Rentals', url: 'https://maps.apple.com/?q=Zilker+Boat+Rentals+Austin+TX' },
  ],
  'cooking-class': [
    { label: '🗓️ Book a Class', url: 'https://www.antonellischeese.com/apps/bookthatapp/calendar' },
    { label: '📍 Maps',  url: 'https://maps.apple.com/?q=Antonelli%27s+Cheese+Shop+Austin+TX' },
  ],
  'ski-shores': [
    { label: '📍 Maps', url: 'https://maps.apple.com/?q=Ski+Shores+Cafe+Austin+TX' },
  ],
  'jewboy-burgers': [
    { label: '📍 Maps', url: 'https://maps.apple.com/?q=JewBoy+Burgers+Austin+TX' },
  ],
  'rainey-street': [
    { label: "🍺 Banger's",        url: 'https://maps.apple.com/?q=Banger%27s+Sausage+House+Beer+Garden+Austin+TX' },
    { label: '🍔 NADC Burger',     url: 'https://maps.apple.com/?q=NADC+Burger+Austin+TX' },
    { label: '🃏 Electric Shuffle', url: 'https://maps.apple.com/?q=Electric+Shuffle+Austin+TX' },
    { label: '🍹 Lustre Pearl',    url: 'https://maps.apple.com/?q=Lustre+Pearl+Rainey+Austin+TX' },
    { label: '🍸 Half Step',       url: 'https://maps.apple.com/?q=Half+Step+Bar+Austin+TX' },
  ],
};
EVENTS.forEach(e => { e.links = EVENT_LINKS[e.id] || []; });

// =========================================
// SCHEDULE — locked items are fixed,
// dynamic items pull from vote tallies.
// rank: 0 = top voted, 1 = second top, etc.
// =========================================
const SCHEDULE = [
  {
    day: 'Friday', date: 'July 17', highlight: false,
    items: [
      { type: 'locked', time: 'Afternoon', name: 'Arrivals & Check In',  note: 'Get settled, freshen up' },
      { type: 'locked', time: 'Afternoon', name: '🛍️ South Congress',     note: 'Boutiques, vintage shops, people watching', mapUrl: 'https://maps.apple.com/?q=South+Congress+Avenue+Austin+TX' },
      { type: 'locked', time: 'Lunch',     name: '🍕 Home Slice Pizza',   note: 'Austin institution on SoCo', mapUrl: 'https://maps.apple.com/?q=Home+Slice+Pizza+Austin+TX' },
      { type: 'locked', time: 'Dinner',    name: '🍺 Kelly\'s Irish Pub', note: 'Live music, great group spot', badge: '⚠️ Needs Reservation', mapUrl: 'https://maps.apple.com/?q=Kelly%27s+Irish+Pub+Austin+TX', reserveUrl: 'tel:+15127404300', reserveLabel: '📞 Call to Reserve' },
    ],
  },
  {
    day: 'Saturday', date: 'July 18', highlight: true,
    items: [
      { type: 'locked',  time: 'Morning',   name: '💅 Nails',             note: 'Group mani/pedi', mapUrl: 'https://maps.apple.com/?q=nail+salon+Austin+TX' },
      { type: 'locked',  time: 'Lunch',     name: '🌮 Matt\'s El Rancho', note: 'Austin Tex-Mex legend since 1952 — walk-in only, join the waitlist below', mapUrl: 'https://maps.apple.com/?q=Matt%27s+El+Rancho+Austin+TX', reserveUrl: 'https://www.opentable.com/booking/restref/details?restRef=278602', reserveLabel: '📋 Join Waitlist' },
      { type: 'dynamic', time: 'Afternoon', slot: 'day-activity',   rank: 0, label: 'Add-On Activity' },
      { type: 'locked',  time: 'Afternoon', name: '🛥️ Lake Austin Boat Day', note: 'Private boat rental — sun, swimming, cold drinks, Texas summer at its best', mapUrl: 'https://maps.apple.com/?q=boat+rental+Lake+Austin+TX' },
      { type: 'locked',  time: 'Dinner',    name: '🍽️ Eberly',           note: 'Nice dinner — Shannon\'s main night out', mapUrl: 'https://maps.apple.com/?q=Eberly+Austin+TX', reserveUrl: 'https://eberlyaustin.com/reservations', reserveLabel: '🗓️ Make Reservation' },
      { type: 'dynamic', time: 'Evening',   slot: 'saturday-night', rank: 0, label: 'After Eberly' },
    ],
  },
  {
    day: 'Sunday', date: 'July 19', highlight: false,
    items: [
      { type: 'locked',  time: 'Lunch',     name: '🥩 Terry Black\'s BBQ', note: 'Shannon specifically wants this', mapUrl: 'https://maps.apple.com/?q=Terry+Black%27s+BBQ+Austin+TX' },
      { type: 'dynamic', time: 'Afternoon', slot: 'day-activity',   rank: 1, label: 'Day Activity' },
      { type: 'locked',  time: 'Afternoon', name: '🤠 Sagebrush Lessons',  note: 'Two-step lessons before the honky tonk', mapUrl: 'https://maps.apple.com/?q=Sagebrush+Austin+TX' },
      { type: 'dynamic', time: 'Night',     slot: 'honky-tonk',    rank: 0, label: 'Honky Tonk' },
    ],
  },
  {
    day: 'Monday', date: 'July 20', highlight: false,
    items: [
      { type: 'locked', time: 'Morning', name: '☕ Farewell Brunch', note: 'Last meal together before everyone heads out', mapUrl: 'https://maps.apple.com/?q=brunch+Austin+TX' },
    ],
  },
];

// =========================================
// STATE
// =========================================
let supabaseClient = null;
let voterId = null;
let voterName = null;
let voterData = {};   // { eventId: [ { voter_id, voter_name } ] }
let myVotes = new Set();
let usingFallback = false;

// =========================================
// VOTER IDENTITY
// =========================================
function getVoterId() {
  let id = localStorage.getItem('bach_voter_id');
  if (!id) {
    id = 'voter_' + Math.random().toString(36).substr(2, 9) + Date.now();
    localStorage.setItem('bach_voter_id', id);
  }
  return id;
}

function getVoterName() {
  return localStorage.getItem('bach_voter_name') || null;
}

function saveVoterName(name) {
  localStorage.setItem('bach_voter_name', name.trim());
}

// Toast notification
function showToast(msg, duration = 2800) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.add('hidden'), duration);
}

// Pending vibe — remembered if modal interrupts a vibe click
let _pendingVibe = null;
// Tracks which vibes the current user has selected (source of truth, not the DOM class)
const selectedVibes = new Set();

function syncVibeChips() {
  document.querySelectorAll('.vibe-chip').forEach(chip => {
    chip.classList.toggle('selected', selectedVibes.has(chip.dataset.vibe));
  });
}

// Cast or retract votes for all events matching a vibe
async function castVibeVotes(vibeId) {
  if (!voterName) {
    _pendingVibe = vibeId;
    showNameModal();
    return;
  }
  _pendingVibe = null;
  const eventIds = VIBES[vibeId];
  if (!eventIds) return;

  if (selectedVibes.has(vibeId)) {
    // Unselect — remove 'yes' votes for this vibe's events
    selectedVibes.delete(vibeId);
    syncVibeChips();
    const toRemove = eventIds.filter(eid => myVotes.get(eid) === 'yes');
    for (const eid of toRemove) {
      await castVote(eid, 'yes'); // same type → triggers delete inside castVote
    }
    if (toRemove.length > 0) showToast(`Removed ${toRemove.length} vote${toRemove.length === 1 ? '' : 's'}`);
  } else {
    // Select — vote 'yes' for any not already voted
    selectedVibes.add(vibeId);
    syncVibeChips();
    const unvoted = eventIds.filter(eid => myVotes.get(eid) !== 'yes');
    for (const eid of unvoted) {
      await castVote(eid, 'yes');
    }
    if (unvoted.length > 0) {
      showToast(`Voted for ${unvoted.length} activit${unvoted.length === 1 ? 'y' : 'ies'} 🙌`);
    } else {
      showToast('You\'re already in for all of those! 🎉');
    }
  }
}

// Show name modal if name not yet set
function showNameModal() {
  const existing = document.getElementById('voter-name-input');
  if (voterName) existing.value = voterName;
  document.getElementById('bride-password-input').value = '';
  document.getElementById('bride-password-error').classList.add('hidden');
  // Show password wrap if current name is already Shannon
  const isBrideName = (voterName || '').toLowerCase() === 'shannon';
  document.getElementById('bride-password-wrap').classList.toggle('hidden', !isBrideName);
  document.getElementById('name-modal').classList.add('visible');
  setTimeout(() => existing.focus(), 300);
}

function hideNameModal() {
  document.getElementById('name-modal').classList.remove('visible');
}

function updateNavUser(name) {
  const avatarEl = document.getElementById('nav-user-avatar');
  const nameEl   = document.getElementById('nav-user-name');
  if (!name) {
    avatarEl.textContent = '';
    avatarEl.style.display = 'none';
    nameEl.textContent = 'Sign In';
    return;
  }
  const isBride = localStorage.getItem('isBride') === 'true';
  const initials = isBride ? '💍' : name.trim().split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  avatarEl.textContent = initials;
  avatarEl.style.display = 'flex';
  avatarEl.classList.toggle('bride', isBride);
  nameEl.textContent = name.split(' ')[0]; // first name only
}

// Clicking the nav user chip reopens the name modal so they can change it
document.getElementById('nav-user').addEventListener('click', () => {
  const modal = document.getElementById('name-modal');
  modal.querySelector('h2').textContent = voterName ? 'Change your name' : 'What\'s your name?';
  modal.querySelector('p').textContent = voterName
    ? 'Your votes will be updated to your new name.'
    : 'So everyone can see who\'s in for what.';
  showNameModal();
});

document.getElementById('name-submit-btn').addEventListener('click', submitName);
document.getElementById('voter-name-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') submitName();
});
document.getElementById('bride-password-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') submitName();
});

// Show/hide bride password field when name looks like Shannon
document.getElementById('voter-name-input').addEventListener('input', e => {
  const isBrideName = e.target.value.trim().toLowerCase() === 'shannon';
  const wrap = document.getElementById('bride-password-wrap');
  wrap.classList.toggle('hidden', !isBrideName);
  if (!isBrideName) {
    document.getElementById('bride-password-input').value = '';
    document.getElementById('bride-password-error').classList.add('hidden');
  }
});

async function submitName() {
  const input = document.getElementById('voter-name-input').value.trim();
  if (!input) return;

  // Bride password gate
  if (input.toLowerCase() === 'shannon') {
    const pw = document.getElementById('bride-password-input').value.trim();
    if (pw.toLowerCase() !== BRIDE_PASSWORD.toLowerCase()) {
      document.getElementById('bride-password-error').classList.remove('hidden');
      document.getElementById('bride-password-input').focus();
      return;
    }
    localStorage.setItem('isBride', 'true');
  } else {
    localStorage.removeItem('isBride');
  }

  const previousName = voterName;
  saveVoterName(input);
  voterName = input;
  hideNameModal();
  updateNavUser(voterName);

  // If name changed and they have existing votes, update them in Supabase
  // so their votes don't still show under the old name
  if (supabaseClient && previousName && previousName !== input && myVotes.size > 0) {
    await supabaseClient
      .from('votes')
      .update({ voter_name: input })
      .eq('voter_id', voterId);

    // Update local voterData to reflect the new name immediately
    Object.keys(voterData).forEach(eventId => {
      voterData[eventId] = voterData[eventId].map(v =>
        v.voter_id === voterId ? { ...v, voter_name: input } : v
      );
    });
    renderEvents();
    renderAgenda();
  }

  // If a vibe chip triggered the name modal, cast those votes now
  if (_pendingVibe) {
    const pending = _pendingVibe;
    _pendingVibe = null;
    castVibeVotes(pending);
  }
}

// =========================================
// LOAD VOTES FROM SUPABASE
// =========================================
async function loadVotes() {
  if (!supabaseClient) return;

  const { data, error } = await supabaseClient
    .from('votes')
    .select('event_id, voter_id, voter_name, vote_type');

  if (error) { console.error('Error loading votes:', error); return; }

  voterData = {};
  myVotes = new Map(); // eventId → 'yes' | 'maybe'

  data.forEach(row => {
    if (!voterData[row.event_id]) voterData[row.event_id] = [];
    voterData[row.event_id].push({ voter_id: row.voter_id, voter_name: row.voter_name, vote_type: row.vote_type || 'yes' });
    if (row.voter_id === voterId) myVotes.set(row.event_id, row.vote_type || 'yes');
  });
}

// =========================================
// VOTE / UNVOTE
// =========================================
async function castVote(eventId, type = 'yes') {
  if (!voterName) {
    showNameModal();
    document.getElementById('name-submit-btn').dataset.pendingVote = eventId;
    document.getElementById('name-submit-btn').dataset.pendingVoteType = type;
    return;
  }

  const current = myVotes.get(eventId); // undefined | 'yes' | 'maybe'

  // Clicking the same type again = remove vote
  if (current === type) {
    if (!supabaseClient) {
      myVotes.delete(eventId);
      voterData[eventId] = (voterData[eventId] || []).filter(v => v.voter_id !== voterId);
      updateCardUI(eventId);
      return;
    }
    const { error } = await supabaseClient.from('votes').delete()
      .eq('event_id', eventId).eq('voter_id', voterId);
    if (!error) {
      myVotes.delete(eventId);
      voterData[eventId] = (voterData[eventId] || []).filter(v => v.voter_id !== voterId);
      updateCardUI(eventId);
    }
    return;
  }

  // Switching type or new vote — upsert
  if (!supabaseClient) {
    myVotes.set(eventId, type);
    voterData[eventId] = (voterData[eventId] || []).filter(v => v.voter_id !== voterId);
    voterData[eventId].push({ voter_id: voterId, voter_name: voterName, vote_type: type });
    updateCardUI(eventId);
    return;
  }

  const { error } = await supabaseClient.from('votes')
    .upsert({ event_id: eventId, voter_id: voterId, voter_name: voterName, vote_type: type }, { onConflict: 'event_id,voter_id' });
  if (!error) {
    myVotes.set(eventId, type);
    voterData[eventId] = (voterData[eventId] || []).filter(v => v.voter_id !== voterId);
    voterData[eventId].push({ voter_id: voterId, voter_name: voterName, vote_type: type });
    updateCardUI(eventId);
  }
}

// Handle pending vote after name is submitted
document.getElementById('name-submit-btn').addEventListener('click', () => {
  const pending = document.getElementById('name-submit-btn').dataset.pendingVote;
  const pendingType = document.getElementById('name-submit-btn').dataset.pendingVoteType || 'yes';
  if (pending && voterName) {
    delete document.getElementById('name-submit-btn').dataset.pendingVote;
    delete document.getElementById('name-submit-btn').dataset.pendingVoteType;
    castVote(pending, pendingType);
  }
}, true);

// Weighted vote score: yes=1, maybe=0.5
function voteScore(eventId) {
  return (voterData[eventId] || []).reduce((sum, v) => sum + (v.vote_type === 'maybe' ? 0.5 : 1), 0);
}

// =========================================
// VOTER CHIP HTML
// =========================================
function voterChipsHTML(eventId) {
  const voters = voterData[eventId] || [];
  if (voters.length === 0) return '<span class="no-voters">No votes yet — be first!</span>';

  const MAX_SHOW = 5;
  const shown = voters.slice(0, MAX_SHOW);
  const extra = voters.length - MAX_SHOW;

  const chips = shown.map(v => {
    const isBride = v.voter_name.trim().toLowerCase() === 'shannon';
    const isMe = v.voter_id === voterId;
    const isMaybe = v.vote_type === 'maybe';
    const initials = isBride ? '💍' : v.voter_name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    const classes = ['voter-chip', isMe ? 'me' : '', isBride ? 'bride' : '', isMaybe ? 'maybe' : ''].filter(Boolean).join(' ');
    return `<span class="${classes}" title="${v.voter_name}${isMaybe ? ' (interested)' : ''}">${initials}</span>`;
  }).join('');

  const extraChip = extra > 0 ? `<span class="voter-chip extra">+${extra}</span>` : '';
  const yesVoters = voters.filter(v => v.vote_type !== 'maybe');
  const maybeVoters = voters.filter(v => v.vote_type === 'maybe');
  const parts = [];
  if (yesVoters.length) parts.push(yesVoters.map(v => v.voter_name).join(', '));
  if (maybeVoters.length) parts.push(`interested: ${maybeVoters.map(v => v.voter_name).join(', ')}`);
  const countLabel = `<span class="voter-names-label">${parts.join(' · ')}</span>`;

  return chips + extraChip + countLabel;
}

// =========================================
// UPDATE A SINGLE CARD IN-PLACE
// =========================================
function updateCardUI(eventId) {
  const card = document.querySelector(`.event-card[data-event-id="${eventId}"]`);
  if (!card) return;

  const voters = voterData[eventId] || [];
  const myType = myVotes.get(eventId); // 'yes' | 'maybe' | undefined
  const voted = myType === 'yes';
  const maybed = myType === 'maybe';
  const score = voteScore(eventId);
  const maxScore = Math.max(...Object.keys(voterData).map(id => voteScore(id)), 1);
  const pct = Math.round((score / maxScore) * 100);
  const yesCount = voters.filter(v => v.vote_type !== 'maybe').length;
  const maybeCount = voters.filter(v => v.vote_type === 'maybe').length;

  const brideVoted = voters.some(v => v.voter_name.trim().toLowerCase() === 'shannon');
  card.classList.toggle('voted', voted || maybed);
  card.classList.toggle('bride-pick', brideVoted);
  const existingBrideBadge = card.querySelector('.bride-pick-badge');
  if (brideVoted && !existingBrideBadge) {
    const tags = card.querySelector('.card-tags');
    const badge = document.createElement('span');
    badge.className = 'bride-pick-badge';
    badge.textContent = "💍 Bride's Pick";
    tags.insertBefore(badge, tags.firstChild);
  } else if (!brideVoted && existingBrideBadge) {
    existingBrideBadge.remove();
  }
  card.querySelector('.vote-btn').classList.toggle('voted', voted);
  card.querySelector('.vote-btn').textContent = voted ? "✓ I'm in!" : "I'm in for this!";
  card.querySelector('.maybe-btn').classList.toggle('maybed', maybed);
  card.querySelector('.maybe-btn').textContent = maybed ? "~ Interested!" : "Interested";
  card.querySelector('.vote-fill').style.width = pct + '%';
  const labelParts = [];
  if (yesCount) labelParts.push(`${yesCount} in`);
  if (maybeCount) labelParts.push(`${maybeCount} maybe`);
  card.querySelector('.vote-count-label').textContent = labelParts.join(' · ') || '0 votes';
  card.querySelector('.voters-row').innerHTML = voterChipsHTML(eventId);

  refreshAllBars();
  renderAgenda();
}

function refreshAllBars() {
  const maxScore = Math.max(...Object.keys(voterData).map(id => voteScore(id)), 1);
  document.querySelectorAll('.event-card').forEach(card => {
    const eventId = card.dataset.eventId;
    const voters = voterData[eventId] || [];
    const score = voteScore(eventId);
    const pct = Math.round((score / maxScore) * 100);
    const yesCount = voters.filter(v => v.vote_type !== 'maybe').length;
    const maybeCount = voters.filter(v => v.vote_type === 'maybe').length;
    const labelParts = [];
    if (yesCount) labelParts.push(`${yesCount} in`);
    if (maybeCount) labelParts.push(`${maybeCount} maybe`);
    card.querySelector('.vote-fill').style.width = pct + '%';
    card.querySelector('.vote-count-label').textContent = labelParts.join(' · ') || '0 votes';
  });
}

// =========================================
// DETAIL MODAL
// =========================================
function openDetailModal(eventId) {
  const event = EVENTS.find(e => e.id === eventId);
  if (!event) return;

  const tipsHTML = event.tips
    ? event.tips.map(t => `<li>${t}</li>`).join('')
    : '<li>No additional details yet.</li>';

  const voters = voterData[eventId] || [];
  const voterListHTML = voters.length
    ? voters.map(v => {
        const isBride = v.voter_name.trim().toLowerCase() === 'shannon';
        return `<span class="detail-voter-chip${isBride ? ' bride' : ''}">${isBride ? '💍 ' : ''}${v.voter_name}</span>`;
      }).join('')
    : '<em style="color:var(--gray);font-size:0.85rem;">No votes yet</em>';

  document.getElementById('detail-modal-body').innerHTML = `
    <div class="detail-emoji">${event.emoji}</div>
    <span class="location-tag" style="margin-bottom:8px">${event.location}</span>
    <h2 class="detail-title">${event.name}</h2>
    <p class="detail-price">~${event.price}</p>

    ${event.address ? `
    <div class="detail-section">
      <h4>📍 Address</h4>
      <p>${event.address}</p>
    </div>` : ''}

    <div class="detail-section">
      <h4>💡 Tips & Details</h4>
      <ul class="detail-tips">${tipsHTML}</ul>
    </div>

    ${event.links && event.links.length ? `
    <div class="detail-section">
      <h4>🔗 Links</h4>
      <div class="detail-links">
        ${event.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="detail-link-btn">${l.label} ↗</a>`).join('')}
      </div>
    </div>` : ''}

    <div class="detail-section">
      <h4>Who's in for this (${voters.length})</h4>
      <div class="detail-voters">${voterListHTML}</div>
    </div>
  `;

  document.getElementById('detail-modal').classList.add('visible');
}

document.getElementById('detail-modal-close').addEventListener('click', () => {
  document.getElementById('detail-modal').classList.remove('visible');
});
document.getElementById('detail-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('detail-modal')) {
    document.getElementById('detail-modal').classList.remove('visible');
  }
});

// =========================================
// AGENDA — builds from vote tallies
// =========================================
function topVotedBySlot(slot, rank = 0) {
  const candidates = EVENTS.filter(e => e.slot === slot);
  const sorted = [...candidates].sort((a, b) => voteScore(b.id) - voteScore(a.id));
  return sorted[rank] || null;
}

function renderAgenda() {
  const container = document.getElementById('agenda-container');
  if (!container) return;

  container.innerHTML = SCHEDULE.map(day => {
    const itemsHTML = day.items.map(item => {
      if (item.type === 'locked') {
        return `
          <div class="day-item">
            <span class="item-time">${item.time}</span>
            <div class="item-body">
              <span class="item-name">${item.name}</span>
              ${item.note ? `<span class="item-note">${item.note}</span>` : ''}
              ${item.badge ? `<span class="item-badge reservation-badge">${item.badge}</span>` : ''}
              <div class="agenda-item-links">
                ${item.mapUrl ? `<a href="${item.mapUrl}" target="_blank" rel="noopener" class="agenda-map-link">📍 Maps</a>` : ''}
                ${item.reserveUrl ? `<a href="${item.reserveUrl}" target="_blank" rel="noopener" class="agenda-reserve-link">${item.reserveLabel}</a>` : ''}
              </div>
            </div>
          </div>`;
      }

      // Dynamic slot
      const winner = topVotedBySlot(item.slot, item.rank);
      const votes = winner ? voteScore(winner.id) : 0;
      const winnerVoters = winner ? (voterData[winner.id] || []) : [];
      const yesNames = winnerVoters.filter(v => v.vote_type !== 'maybe').map(v => v.voter_name).join(', ');
      const maybeNames = winnerVoters.filter(v => v.vote_type === 'maybe').map(v => v.voter_name).join(', ');
      const voters = [yesNames, maybeNames ? `maybe: ${maybeNames}` : ''].filter(Boolean).join(' · ');

      // Check for a tie (rank > 0 may equal rank 0 count)
      if (item.rank === 1) {
        const top = topVotedBySlot(item.slot, 0);
        const topVotes = top ? (voterData[top.id] || []).length : 0;
        if (votes === topVotes && top && winner && top.id === winner.id) {
          // Only one unique top pick — skip this slot
          return `
            <div class="day-item tbd">
              <span class="item-time">${item.time}</span>
              <div class="item-body">
                <span class="item-name agenda-tbd">${item.label} — vote above to add another</span>
              </div>
            </div>`;
        }
      }

      if (!winner || votes === 0) {
        return `
          <div class="day-item tbd">
            <span class="item-time">${item.time}</span>
            <div class="item-body">
              <span class="item-name agenda-tbd">${item.label} — vote above to decide</span>
            </div>
          </div>`;
      }

      // Check for a tie at this rank
      const candidates = EVENTS.filter(e => e.slot === item.slot);
      const tiedWith = candidates.filter(e =>
        e.id !== winner.id && voteScore(e.id) === votes
      );

      const tieNote = tiedWith.length
        ? ` · tied with ${tiedWith.map(e => e.name).join(', ')}`
        : '';

      const bridePicksWinner = (voterData[winner.id] || []).some(v => v.voter_name.trim().toLowerCase() === 'shannon');

      return `
        <div class="day-item agenda-dynamic${bridePicksWinner ? ' bride-pick' : ''}">
          <span class="item-time">${item.time}</span>
          <div class="item-body">
            ${bridePicksWinner ? '<span class="item-badge agenda-bride-badge">💍 Bride\'s Pick</span>' : '<span class="item-badge agenda-leading-badge">🗳️ Leading</span>'}
            <span class="item-name">${winner.emoji} ${winner.name}</span>
            <span class="item-note">${winner.location} · ${votes} vote${votes !== 1 ? 's' : ''} (${voters})${tieNote}</span>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="schedule-day-block${day.highlight ? ' highlight-block' : ''}">
        <div class="day-heading">
          <div class="day-pill${day.highlight ? ' highlight-pill' : ''}">${day.day}${day.highlight ? ' ✨' : ''}</div>
          <span class="day-full-date">${day.date}</span>
        </div>
        <div class="day-items">${itemsHTML}</div>
      </div>`;
  }).join('');
}

// =========================================
// RENDER EVENTS
// =========================================
function renderEvents() {
  const grid = document.getElementById('events-grid');
  grid.innerHTML = '';

  let lastGroup = null;

  EVENTS.forEach(event => {

    // Location section heading
    if (event.location && event.location !== lastGroup) {
      lastGroup = event.location;
      const desc = LOCATION_DESCRIPTIONS[event.location] || '';
      const heading = document.createElement('div');
      heading.className = 'group-heading';
      heading.innerHTML = `
        <div class="group-heading-left">
          <h3>📍 ${event.location}${desc ? `<button class="location-info-btn" title="What is this?" aria-label="About ${event.location}">?</button>` : ''}</h3>
          ${desc ? `<p class="location-desc hidden">${desc}</p>` : ''}
        </div>
        <a href="#agenda" class="group-agenda-link">View Agenda ↓</a>
      `;
      if (desc) {
        const btn = heading.querySelector('.location-info-btn');
        const p = heading.querySelector('.location-desc');
        btn.addEventListener('click', () => {
          const open = !p.classList.contains('hidden');
          p.classList.toggle('hidden', open);
          btn.classList.toggle('active', !open);
        });
      }
      grid.appendChild(heading);
    }

    const brideVoted = (voterData[event.id] || []).some(v => v.voter_name.trim().toLowerCase() === 'shannon');
    const myType = myVotes.get(event.id);
    const voted = myType === 'yes';
    const maybed = myType === 'maybe';
    const score = voteScore(event.id);
    const maxScore = Math.max(...Object.keys(voterData).map(id => voteScore(id)), 1);
    const pct = score > 0 ? Math.round((score / maxScore) * 100) : 0;
    const yesCount = (voterData[event.id] || []).filter(v => v.vote_type !== 'maybe').length;
    const maybeCount = (voterData[event.id] || []).filter(v => v.vote_type === 'maybe').length;
    const labelParts = [];
    if (yesCount) labelParts.push(`${yesCount} in`);
    if (maybeCount) labelParts.push(`${maybeCount} maybe`);
    const countLabel = labelParts.join(' · ') || '0 votes';

    const card = document.createElement('div');
    card.className = 'event-card' + (voted || maybed ? ' voted' : '') + (event.confirmed ? ' confirmed' : '') + (brideVoted ? ' bride-pick' : '');
    card.dataset.eventId = event.id;
    card.dataset.type = event.type;
    card.dataset.group = event.location || '';

    card.innerHTML = `
      <div class="card-top">
        <span class="event-emoji">${event.emoji}</span>
        <div class="card-tags">
          ${brideVoted ? '<span class="bride-pick-badge">💍 Bride\'s Pick</span>' : ''}
          ${event.confirmed ? '<span class="confirmed-badge">✓ Happening</span>' : ''}
          <span class="location-tag">${event.location}</span>
        </div>
      </div>
      <h3>${event.name}</h3>
      <p class="event-desc">${event.desc}</p>
      <p class="event-price">~${event.price}</p>
      <div class="voters-row">${voterChipsHTML(event.id)}</div>
      <div class="vote-area">
        <div class="vote-bar-wrap">
          <div class="vote-bar"><div class="vote-fill" style="width: ${pct}%"></div></div>
          <span class="vote-count-label">${countLabel}</span>
        </div>
        <div class="vote-btns">
          <button class="vote-btn ${voted ? 'voted' : ''}" data-event-id="${event.id}">
            ${voted ? "✓ I'm in!" : "I'm in for this!"}
          </button>
          <button class="maybe-btn ${maybed ? 'maybed' : ''}" data-event-id="${event.id}">
            ${maybed ? "~ Interested!" : "Interested"}
          </button>
        </div>
      </div>
      <button class="details-btn">See details →</button>
    `;

    card.querySelector('.vote-btn').addEventListener('click', e => {
      e.stopPropagation();
      castVote(event.id, 'yes');
    });
    card.querySelector('.maybe-btn').addEventListener('click', e => {
      e.stopPropagation();
      castVote(event.id, 'maybe');
    });
    card.querySelector('.details-btn').addEventListener('click', e => {
      e.stopPropagation();
      openDetailModal(event.id);
    });
    card.addEventListener('click', () => openDetailModal(event.id));

    grid.appendChild(card);
  });

  if (usingFallback) {
    const notice = document.createElement('p');
    notice.style.cssText = 'grid-column:1/-1;text-align:center;color:#8A7A7A;font-size:0.85rem;margin-top:8px;';
    notice.textContent = '⚠️ Demo mode — votes won\'t save across devices. Add your Supabase keys to script.js to enable live voting.';
    grid.appendChild(notice);
  }
}

// =========================================
// FILTERS
// =========================================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.event-card').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.type !== filter);
    });
    document.querySelectorAll('.group-heading').forEach(heading => {
      const rawText = heading.querySelector('h3').textContent.replace('📍 ', '');
      const anyVisible = [...document.querySelectorAll(`.event-card[data-group="${rawText}"]`)]
        .some(c => !c.classList.contains('hidden'));
      heading.classList.toggle('hidden', !anyVisible);
    });
  });
});

// =========================================
// INIT
// =========================================
async function init() {
  voterId = getVoterId();
  voterName = getVoterName();
  updateNavUser(voterName);

  if (!voterName) showNameModal();

  if (SUPABASE_URL !== 'YOUR_SUPABASE_URL' && SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY') {
    try {
      const { createClient } = window.supabase;
      supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      await loadVotes();

      supabaseClient
        .channel('votes-channel')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'votes' }, async () => {
          await loadVotes();
          renderEvents();
          renderAgenda();
        })
        .subscribe();

      await loadArrivals();
      supabaseClient
        .channel('arrivals-channel')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'arrivals' }, payload => {
          arrivals = arrivals.filter(a => a.voter_id !== payload.new.voter_id);
          arrivals.push(payload.new);
          renderArrivals();
        })
        .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'arrivals' }, payload => {
          arrivals = arrivals.map(a => a.voter_id === payload.new.voter_id ? payload.new : a);
          renderArrivals();
        })
        .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'arrivals' }, payload => {
          arrivals = arrivals.filter(a => a.id !== payload.old.id);
          renderArrivals();
        })
        .subscribe();

      await loadSuggestions();
      supabaseClient
        .channel('suggestions-channel')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'suggestions' }, payload => {
          if (!suggestions.find(s => s.id === payload.new.id)) {
            suggestions.push(payload.new);
            renderSuggestions();
          }
        })
        .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'suggestions' }, payload => {
          suggestions = suggestions.filter(s => s.id !== payload.old.id);
          renderSuggestions();
        })
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'suggestion_votes' }, payload => {
          const sid = payload.new.suggestion_id;
          if (!suggestionVotes[sid]) suggestionVotes[sid] = new Set();
          suggestionVotes[sid].add(payload.new.voter_id);
          renderSuggestions();
        })
        .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'suggestion_votes' }, payload => {
          const sid = payload.old.suggestion_id;
          if (suggestionVotes[sid]) suggestionVotes[sid].delete(payload.old.voter_id);
          renderSuggestions();
        })
        .subscribe();

    } catch (e) {
      console.warn('Supabase connection failed, running in demo mode.', e);
      usingFallback = true;
    }
  } else {
    usingFallback = true;
  }

  renderEvents();
  renderAgenda();
}

init();

// =========================================
// ARRIVALS
// =========================================
let arrivals = [];
let selectedTransport = 'flying';

async function loadArrivals() {
  if (!supabaseClient) return;
  const { data, error } = await supabaseClient
    .from('arrivals')
    .select('*')
    .order('arrival_date')
    .order('arrival_time');
  if (!error) {
    arrivals = data || [];
    renderArrivals();
  }
}

async function submitArrival() {
  const date = document.getElementById('arrival-date-input').value;
  const time = document.getElementById('arrival-time-input').value;
  const isFlying = selectedTransport === 'flying';
  const flight = isFlying ? document.getElementById('arrival-flight-input').value.trim() : null;
  const needsRide = isFlying ? document.getElementById('arrival-ride-input').checked : false;

  if (!date || !time) {
    if (!date) document.getElementById('arrival-date-input').focus();
    else document.getElementById('arrival-time-input').focus();
    return;
  }
  if (!voterName) { showNameModal(); return; }

  // Format time for display (12hr)
  const [h, m] = time.split(':');
  const hr = parseInt(h);
  const displayTime = `${hr % 12 || 12}:${m} ${hr < 12 ? 'AM' : 'PM'}`;

  const entry = {
    voter_id: voterId,
    voter_name: voterName,
    arrival_date: date,
    arrival_time: displayTime,
    flight_info: flight || null,
    needs_ride: needsRide,
    transport_type: selectedTransport,
  };

  // Upsert — update if same voter_id already exists
  const existing = arrivals.find(a => a.voter_id === voterId);
  if (existing) {
    arrivals = arrivals.map(a => a.voter_id === voterId ? { ...a, ...entry, id: a.id } : a);
  } else {
    arrivals.push({ ...entry, id: Date.now() });
  }
  renderArrivals();

  if (supabaseClient) {
    const { error } = await supabaseClient.from('arrivals').upsert(entry, { onConflict: 'voter_id' });
    if (error) console.error('Arrival save error:', error);
  }
}

async function deleteArrival(voterId_) {
  arrivals = arrivals.filter(a => a.voter_id !== voterId_);
  renderArrivals();
  // Clear the form
  document.getElementById('arrival-date-input').value = '';
  document.getElementById('arrival-time-input').value = '';
  document.getElementById('arrival-flight-input').value = '';
  document.getElementById('arrival-ride-input').checked = false;
  // Reset transport toggle to flying
  selectedTransport = 'flying';
  const card = document.getElementById('arrival-form-card');
  if (card) card.classList.remove('driving-mode');
  document.querySelectorAll('.transport-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === 'flying'));
  if (supabaseClient) {
    await supabaseClient.from('arrivals').delete().eq('voter_id', voterId_);
  }
}

function renderArrivals() {
  const list = document.getElementById('arrivals-list');
  if (!list) return;

  if (arrivals.length === 0) {
    list.innerHTML = '<p class="no-arrivals">No arrivals logged yet — add yours above!</p>';
    // Pre-fill form if user has a name
    prefillArrivalForm();
    return;
  }

  // Group by date
  const DATE_ORDER = ['Thursday, July 16', 'Friday, July 17', 'Saturday, July 18', 'Sunday, July 19'];
  const groups = {};
  arrivals.forEach(a => {
    if (!groups[a.arrival_date]) groups[a.arrival_date] = [];
    groups[a.arrival_date].push(a);
  });

  let html = '';
  DATE_ORDER.forEach(date => {
    if (!groups[date]) return;
    const dayArrivals = groups[date].sort((a, b) => {
      // Sort by time (convert 12hr to comparable)
      const toMins = t => {
        const [time, ampm] = t.split(' ');
        const [h, m] = time.split(':').map(Number);
        return (ampm === 'PM' && h !== 12 ? h + 12 : ampm === 'AM' && h === 12 ? 0 : h) * 60 + m;
      };
      return toMins(a.arrival_time) - toMins(b.arrival_time);
    });

    html += `<div class="arrival-day-group">
      <h4 class="arrival-day-label">${date}</h4>
      ${dayArrivals.map(a => {
        const isMe = a.voter_id === voterId;
        const isBride = a.voter_name.trim().toLowerCase() === 'shannon';
        return `<div class="arrival-row${isMe ? ' mine' : ''}">
          <div class="arrival-who">
            <span class="arrival-name-chip${isBride ? ' bride' : ''}">${isBride ? '💍 ' : ''}${a.voter_name.split(' ')[0]}</span>
            ${a.needs_ride ? '<span class="arrival-ride-tag">🚗 Needs ride</span>' : ''}
          </div>
          <div class="arrival-info">
            <span class="arrival-time-display">${a.transport_type === 'driving' ? '🚗' : '🛬'} ${a.arrival_time}</span>
            ${a.flight_info ? `<a class="arrival-flight" href="https://www.google.com/search?q=${encodeURIComponent(a.flight_info + ' flight status')}" target="_blank" rel="noopener">${a.flight_info} ↗</a>` : ''}
          </div>
          ${isMe ? `<button class="arrival-delete-btn" data-voter-id="${a.voter_id}" title="Remove your arrival">✕</button>` : ''}
        </div>`;
      }).join('')}
    </div>`;
  });

  list.innerHTML = html;
  list.querySelectorAll('.arrival-delete-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteArrival(btn.dataset.voterId));
  });

  prefillArrivalForm();
}

function prefillArrivalForm() {
  // If the current user already has an entry, pre-fill the form so they can update it
  const mine = arrivals.find(a => a.voter_id === voterId);
  if (!mine) return;
  const dateEl = document.getElementById('arrival-date-input');
  const flightEl = document.getElementById('arrival-flight-input');
  const rideEl = document.getElementById('arrival-ride-input');
  if (dateEl) dateEl.value = mine.arrival_date;
  if (flightEl) flightEl.value = mine.flight_info || '';
  if (rideEl) rideEl.checked = mine.needs_ride;
  // Restore transport toggle
  const mode = mine.transport_type || 'flying';
  selectedTransport = mode;
  const card = document.getElementById('arrival-form-card');
  if (card) card.classList.toggle('driving-mode', mode === 'driving');
  document.querySelectorAll('.transport-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
}

document.getElementById('arrival-submit-btn').addEventListener('click', submitArrival);

// Transport mode toggle
document.querySelectorAll('.transport-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedTransport = btn.dataset.mode;
    document.querySelectorAll('.transport-btn').forEach(b => b.classList.toggle('active', b === btn));
    const card = document.getElementById('arrival-form-card');
    if (card) card.classList.toggle('driving-mode', selectedTransport === 'driving');
  });
});

// Vibe chip listeners (works for chips in both locations)
document.querySelectorAll('.vibe-chip').forEach(chip => {
  chip.addEventListener('click', () => castVibeVotes(chip.dataset.vibe));
});

// =========================================
// SUGGESTIONS
// =========================================
let suggestions = [];
let suggestionVotes = {}; // { suggestion_id: Set of voter_ids }

async function loadSuggestions() {
  if (!supabaseClient) return;
  const [{ data: sData }, { data: vData }] = await Promise.all([
    supabaseClient.from('suggestions').select('*').order('created_at', { ascending: true }),
    supabaseClient.from('suggestion_votes').select('suggestion_id, voter_id'),
  ]);
  suggestions = sData || [];
  suggestionVotes = {};
  (vData || []).forEach(v => {
    if (!suggestionVotes[v.suggestion_id]) suggestionVotes[v.suggestion_id] = new Set();
    suggestionVotes[v.suggestion_id].add(v.voter_id);
  });
  renderSuggestions();
}

async function submitSuggestion() {
  const nameEl = document.getElementById('suggestion-name');
  const descEl = document.getElementById('suggestion-desc');
  const name = nameEl.value.trim();
  const desc = descEl.value.trim();

  if (!name) { nameEl.focus(); return; }

  if (!voterName) {
    showNameModal();
    return;
  }

  const suggestion = {
    name,
    description: desc || null,
    suggester_id: voterId,
    suggester_name: voterName,
  };

  if (supabaseClient) {
    const { data, error } = await supabaseClient.from('suggestions').insert(suggestion).select();
    if (!error && data) {
      suggestions.push(data[0]);
      renderSuggestions();
    }
  } else {
    suggestions.push({ ...suggestion, id: Date.now(), created_at: new Date().toISOString() });
    renderSuggestions();
  }

  nameEl.value = '';
  descEl.value = '';
}

function renderSuggestions() {
  const list = document.getElementById('suggestions-list');
  if (!list) return;

  if (suggestions.length === 0) {
    list.innerHTML = '<p class="no-suggestions">No ideas yet — be the first!</p>';
    return;
  }

  // Sort by vote count descending
  const sorted = [...suggestions].sort((a, b) => {
    const av = (suggestionVotes[a.id] || new Set()).size;
    const bv = (suggestionVotes[b.id] || new Set()).size;
    return bv - av;
  });

  list.innerHTML = sorted.map(s => {
    const votes = suggestionVotes[s.id] || new Set();
    const myVote = votes.has(voterId);
    const isOwner = s.suggester_id === voterId;
    return `
      <div class="suggestion-card" data-suggestion-id="${s.id}">
        <div class="suggestion-body">
          <span class="suggestion-name">${s.name}</span>
          ${s.description ? `<span class="suggestion-desc">${s.description}</span>` : ''}
        </div>
        <div class="suggestion-actions">
          <span class="suggestion-chip">${s.suggester_name.split(' ')[0]}</span>
          <button class="suggestion-vote-btn ${myVote ? 'voted' : ''}" data-id="${s.id}">
            👍 ${votes.size > 0 ? votes.size : ''}
          </button>
          ${isOwner ? `<button class="suggestion-delete-btn" data-id="${s.id}" title="Delete your idea">✕</button>` : ''}
        </div>
      </div>
    `;
  }).join('');

  list.querySelectorAll('.suggestion-vote-btn').forEach(btn => {
    btn.addEventListener('click', () => toggleSuggestionVote(btn.dataset.id));
  });
  list.querySelectorAll('.suggestion-delete-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteSuggestion(btn.dataset.id));
  });
}

async function toggleSuggestionVote(suggestionId) {
  if (!voterName) { showNameModal(); return; }

  const votes = suggestionVotes[suggestionId] || new Set();
  const hasVoted = votes.has(voterId);

  if (hasVoted) {
    votes.delete(voterId);
  } else {
    votes.add(voterId);
  }
  suggestionVotes[suggestionId] = votes;
  renderSuggestions();

  if (supabaseClient) {
    if (hasVoted) {
      await supabaseClient.from('suggestion_votes')
        .delete()
        .eq('suggestion_id', suggestionId)
        .eq('voter_id', voterId);
    } else {
      await supabaseClient.from('suggestion_votes')
        .insert({ suggestion_id: suggestionId, voter_id: voterId });
    }
  }
}

async function deleteSuggestion(suggestionId) {
  suggestions = suggestions.filter(s => s.id !== suggestionId);
  delete suggestionVotes[suggestionId];
  renderSuggestions();

  if (supabaseClient) {
    const { error } = await supabaseClient.from('suggestions').delete().eq('id', suggestionId);
    if (error) console.error('Delete suggestion error:', error);
  }
}

document.getElementById('suggestion-submit-btn').addEventListener('click', submitSuggestion);
document.getElementById('suggestion-name').addEventListener('keydown', e => {
  if (e.key === 'Enter') submitSuggestion();
});

