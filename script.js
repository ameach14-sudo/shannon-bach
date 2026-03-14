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
      '🎸 Fri July 24 — check continentalclub.com for that week\'s lineup',
      '🎸 Sat July 25 — check continentalclub.com for that week\'s lineup',
      '🎸 Sun July 26 — check continentalclub.com for that week\'s lineup',
      '🎸 Mon July 27 — check continentalclub.com for that week\'s lineup',
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
    desc: 'The food is mid, but the Oak Garden patio is genuinely great — huge, shaded, live music on weekends, and their frozen margs are legitimately strong. Come for the patio, stay for the margaritas.',
    price: '$20–35/person',
    address: '1412 S Congress Ave, Austin, TX 78704',
    tips: [
      'The Oak Garden patio out back is the real reason to come — huge, string lights, live music',
      'Full Tex-Mex menu but honestly nothing to write home about — the margs are the star',
      'Try the Oak Garden margarita — their signature frozen marg',
      'Open 11am daily — great for a patio lunch before exploring SoCo',
      'Right in the heart of SoCo, easy walk from everywhere on the strip',
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
      'Reservation strongly recommended on weekends — books out fast',
      'Dinner (5:30pm–close) is the prime experience — full menu, great cocktails',
      'Weekend brunch (10:30am–3pm) is also excellent if you want a late start',
      'The SoCo patio is one of the best outdoor dining spots in the city',
      'Gulf oysters, seafood towers, and cocktails are the move for a group',
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
      '🤠 Fri July 24 — check brokenspokeaustintx.net/events-calendar for confirmed act',
      '🤠 Sat July 25 — check brokenspokeaustintx.net/events-calendar for confirmed act',
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
    id: 'museums',
    emoji: '🏛️',
    name: 'Museum Day',
    category: 'other',
    type: 'non-drinking',
    location: 'Downtown',
    desc: 'A few options if the group wants something low-key and air-conditioned. Pick one.',
    price: 'Free–$20/person depending on choice',
    address: 'Various locations — all in or near downtown Austin',
    tips: [
      '🖼️ Blanton Museum of Art — UT campus, one of the largest university art museums in the US. Free on Thursdays. ($12)',
      '🎨 Contemporary Austin — modern art at the Jones Center + Laguna Gloria outdoor sculpture garden. ($10)',
      '🤠 Bullock Texas State History Museum — 3 floors of Texas history next to the Capitol. IMAX theater inside. ($13)',
      '🪖 Texas Military Forces Museum — free, Camp Mabry, tanks and aircraft outdoors. Bring ID.',
      '⚓ National Museum of the Pacific War — world-class WWII museum in Fredericksburg (~1.5 hrs away). Worth it if the group commits. ($20)',
      '🏛️ Free Capitol tour — the Texas State Capitol is genuinely impressive and tours are free',
    ],
  },
  {
    id: 'jewboy-burgers',
    emoji: '🍔',
    name: 'JewBoy Burgers',
    category: 'restaurant',
    type: 'non-drinking',
    location: 'East 6th',
    desc: 'Late-night food truck near the East 6th bar scene. This is drunk food — creative loaded burgers when the group needs something after the bars. Good call at 1am.',
    price: '$12–18/person',
    address: 'East Austin area (check current location — it\'s a food truck)',
    tips: [
      'Food truck setup near the East 6th bar corridor — late night is when it shines',
      'Creative loaded burgers with local ingredients — hits different after a few drinks',
      'Cash friendly, walk-up window',
      'Check hours before you go — it\'s a food truck so verify they\'re open',
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
    desc: 'Best frozen margaritas in Austin and it\'s not close. People don\'t go here for the food — they go for the margs. Famously strong, perfect afternoon pitstop.',
    price: '$10–15/drink',
    address: 'Multiple Austin locations — E Cesar Chavez (original) and South 1st',
    tips: [
      'These are NOT normal margaritas — they are strong, be warned',
      'Perfect afternoon pitstop before dinner or a pre-game stop before going out',
      'Happy hour Mon–Fri 3:30–6:30pm',
      'Usually a line but it moves fast',
      'Get the classic frozen margarita — don\'t overthink it',
    ],
    website: 'denadacantina.com',
  },
  {
    id: 'taco-speakeasy',
    emoji: '🌮',
    name: 'Taco Speakeasy',
    category: 'restaurant',
    type: 'drinking',
    location: 'East 6th',
    desc: 'A hidden taco restaurant (Taqueria de Diez) accessed through a secret entrance — handmade tortillas, carne asada, al pastor. The food is the actual draw, the hidden entrance is the experience.',
    price: '$20–35/person',
    address: '206 Trinity St, Austin, TX 78701 (look for the hidden alley entrance)',
    tips: [
      'The entrance is hidden — it\'s in an alley behind the building, look for the door',
      'Food-forward: handmade corn tortillas pressed to order, carne asada, al pastor, nopal',
      'Thu–Sat open until 1am — great late-night dinner option near 6th Street',
      'The "speakeasy" vibe is real — fun for a group to hunt down together',
      'Open 11:30am daily but best Thu–Sat night when the surrounding bar scene is active',
    ],
    website: 'Search "Taqueria de Diez Austin" for reservations',
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
      '🚂 Sat July 25 — The Station Masters (house band) plays every Saturday night',
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
    desc: 'Sunset bat colony cruise on Lady Bird Lake. 1.5 million Mexican free-tailed bats emerge from the Congress Ave Bridge at dusk — it\'s an insane natural spectacle and uniquely Austin.',
    price: '$25–35/person',
    address: 'Congress Ave Bridge area — Lone Star Riverboat or Capital Cruises',
    tips: [
      '🦇 1.5 million bats emerge from the Congress Ave Bridge every night at dusk (late March–October)',
      'Emergence is 20–30 min after sunset — July 2026 sunset is around 8:30pm, so bats at ~9pm',
      'Board 45 min before departure — cruises fill up in summer, book in advance',
      'Lone Star Riverboat and Capital Cruises are the main operators',
      'BYOB sometimes allowed on private charters — check when booking',
      'This is a strictly evening/sunset activity — don\'t plan it for afternoon',
    ],
    website: 'Search "Lady Bird Lake boat cruise Austin" to compare operators',
  },
  {
    id: 'austin-city-limits',
    emoji: '📺',
    name: 'ACL Live at Moody Center',
    category: 'other',
    type: 'drinking',
    location: 'Downtown',
    desc: 'Austin\'s legendary music venue on the UT campus. Check the July 25 weekend lineup — if there\'s a show, this is a top-tier night out.',
    price: '$30–100/person (depends on act)',
    address: '2001 Robert Dedman Dr, Austin, TX 78712 (Moody Center, UT Campus)',
    tips: [
      '🎤 Check acl-live.com for the July 24–27 weekend lineup — not every weekend has a show',
      'The ACL Live TV taping (KLRU Studio 6A) is a separate thing — free tickets but very limited',
      'ACL TV tapings: check klru.org/austincitylimits/tickets if you want to try for those',
      'Moody Center is UT\'s arena — big national acts play here when on tour',
      'Full bar inside, seating or GA depending on the show',
      'Parking on campus or Lyft recommended',
    ],
    website: 'acllive.com',
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
      '⏰ Get there before 10am on weekends — parking and pool get packed by midday in July',
      'Stays 68°F year-round — shockingly cold and refreshing in the summer heat',
      'Admission: $5–9/person depending on season (check austintexas.gov for current pricing)',
      'Bring towels, sunscreen, and snacks — no food vendors inside',
      'Pair it with lunch after at Terry Black\'s or Zilker Brewing — both nearby',
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
    id: 'franklin-bbq',
    emoji: '🔥',
    name: 'Franklin Barbecue',
    category: 'restaurant',
    type: 'non-drinking',
    location: 'East 6th',
    desc: 'The most famous BBQ in America. Brisket is life-changing — and they offer catering so you don\'t have to wait in the legendary 3-hour line.',
    price: '$25–40/person (catering priced separately)',
    address: '900 E 11th St, Austin, TX 78702',
    tips: [
      '📦 Franklin offers catering — you can order in advance and skip the line entirely',
      'Contact them directly at franklinbbq.com to set up a catering order for the group',
      'Walk-in line: people camp from 6am, doors open at 9am, sells out by noon — not worth it for a group',
      'Order the brisket, ribs, and pulled pork — turkey is underrated',
      'Catering minimum orders apply — check their site for current pricing',
    ],
    website: 'franklinbbq.com',
  },
  {
    id: 'la-barbecue',
    emoji: '🥩',
    name: 'La Barbecue',
    category: 'restaurant',
    type: 'non-drinking',
    location: 'East 6th',
    desc: 'East Austin BBQ institution — widely considered top-tier and far more accessible than Franklin. Brisket, ribs, and jalapeño cheese sausage from a trailer setup.',
    price: '$20–35/person',
    address: '2401 E Cesar Chavez St, Austin, TX 78702',
    tips: [
      'One of Austin\'s best BBQ spots without the Franklin-level wait',
      'Opens at 11am Wednesday–Sunday — get there by opening on weekends',
      'Must order: brisket, jalapeño cheese sausage, and the beef ribs (when available)',
      'Outdoor trailer setup with picnic tables — very Austin',
      'Sells out early — plan to arrive by noon at the latest',
    ],
    website: 'labarbecue.com',
  },
  {
    id: 'leroy-lewis',
    emoji: '🌿',
    name: 'Leroy and Lewis',
    category: 'restaurant',
    type: 'non-drinking',
    location: 'South Lamar',
    desc: 'Creative "new school" BBQ food truck that does things you won\'t find anywhere else — smoked beef cheeks, rotating specials, globally-inspired sides. Not your grandpa\'s BBQ.',
    price: '$18–30/person',
    address: '121 Pickle Rd, Austin, TX 78704',
    tips: [
      'Food truck setup with picnic seating — laid back and very Austin',
      'Menu rotates — check Instagram before you go for what\'s on that day',
      'The beef cheeks and smoked lamb are standouts when available',
      'Wednesday–Sunday, opens at 11am',
      'More adventurous than Terry Black\'s — good pick for a group that wants something different',
    ],
    website: 'leroyandlewis.com',
  },
  {
    id: 'interstellar-bbq',
    emoji: '🚀',
    name: 'Interstellar BBQ',
    category: 'restaurant',
    type: 'non-drinking',
    location: 'Hill Country',
    desc: 'Award-winning BBQ about 35 minutes north of Austin in Cedar Park. Consistently rated one of Texas\'s best — worth the drive if the group wants to escape the city for lunch.',
    price: '$20–35/person',
    address: '12233 Ranch Rd 620 N, Austin, TX 78750',
    tips: [
      '~35 min drive north of downtown — make it a mini road trip',
      'Named Texas Monthly\'s best new BBQ joint when it opened — now a staple',
      'Brisket, ribs, and sausage are all excellent',
      'Opens at 11am Wednesday–Sunday — arrive early, they sell out',
      'Good option if the group wants to get out of the city for lunch',
    ],
    website: 'interstellarbbq.com',
  },
  {
    id: 'distant-relatives',
    emoji: '🌍',
    name: 'Distant Relatives',
    category: 'restaurant',
    type: 'non-drinking',
    location: 'East 6th',
    desc: 'Well-known food truck blending Texas BBQ with African and African-American food traditions. Unique, celebrated, and genuinely unlike anything else in Austin.',
    price: '$18–30/person',
    address: 'East Austin (check website for current location and hours)',
    tips: [
      'Food truck — check @distantrelativesatx on Instagram for current schedule',
      'Menu mixes Texas BBQ technique with West African and African-American flavors',
      'Featured in national food media — a legitimately unique Austin experience',
      'Limited hours and sells out — check ahead before making it the plan',
      'Worth seeking out if the group wants something truly different',
    ],
    website: 'distantrelativesatx.com',
  },
  {
    id: 'blacks-bbq-austin',
    emoji: '🥩',
    name: "Black's BBQ — Austin",
    category: 'restaurant',
    type: 'non-drinking',
    location: 'Downtown',
    desc: 'The Austin outpost of the legendary Lockhart, TX institution — one of the oldest BBQ joints in Texas. Near campus, more accessible than Franklin, quality is consistently excellent.',
    price: '$20–35/person',
    address: '3110 Guadalupe St, Austin, TX 78705',
    tips: [
      'Not to be confused with Terry Black\'s — this is the original Black\'s family from Lockhart',
      'Near UT campus — easy to get to from central Austin',
      'Brisket, beef ribs, and jalapeño sausage are the must-orders',
      'Counter service, no reservations needed',
      'Opens at 11am daily — less of a wait than the Lockhart original',
    ],
    website: 'blacksbbq.com/austin',
  },
  {
    id: 'terry-blacks-bbq',
    emoji: '🥩',
    name: 'Terry Black\'s BBQ',
    category: 'restaurant',
    type: 'non-drinking',
    location: 'South Lamar',
    desc: 'Award-winning Texas BBQ on South Lamar. Brisket, ribs, sausage, jalapeño cheese bread — the full spread. One of the best BBQ joints in Austin.',
    price: '$20–35/person',
    address: '1003 Barton Springs Rd, Austin, TX 78704',
    tips: [
      'Opens at 11am daily — go early on weekends to beat the line',
      'Order the brisket and the jalapeño cheese bread — non-negotiable',
      'Get a family-style tray for the group — easiest way to share',
      'Cash and card accepted, counter service style',
      'Outdoor seating area — great for a laid-back group lunch',
      'Plan 30-45 min to get through the line on a Saturday',
    ],
    website: 'terryblacksbbq.com',
  },
  {
    id: 'fogo-de-chao',
    emoji: '🔥',
    name: 'Fogo de Chão',
    category: 'restaurant',
    type: 'drinking',
    location: 'Downtown',
    desc: 'Brazilian steakhouse churrascaria — premium cuts carved tableside, unlimited sides and salad bar. Upscale group dinner energy.',
    price: '$70–100/person',
    address: '309 E 2nd St, Austin, TX 78701',
    tips: [
      'All-you-can-eat format — the gaucho chefs carve directly at your table',
      'Reserve well in advance for a group — this is a popular spot',
      'The market table (salad bar) alone is worth it — Brazilian sides, charcuterie, cheese',
      'Meat highlights: picanha (top sirloin cap), lamb chops, and filet mignon',
      'Full bar with Brazilian cocktails — the caipirinha is the move',
      'Great for a splurge group dinner on Friday night',
    ],
    website: 'fogodechao.com',
  },
  {
    id: 'floating-tavern',
    emoji: '⛵',
    name: 'The Floating Tavern',
    recommended: true,
    category: 'bar',
    type: 'drinking',
    location: 'Lake Austin',
    desc: 'A floating bar on Lake Travis with live music and dinner. Tickets required per person — one of the more unique nights Austin has to offer.',
    price: 'Ticket price varies — check website',
    address: 'Lake Travis, Austin, TX (check website for boarding location)',
    tips: [
      'Tickets must be purchased in advance — limited capacity per cruise',
      'Live music on the water — check the schedule for the July 24–27 weekend',
      'Evening/dinner cruise format — typically runs through 11pm',
      'Bring layers — it gets cooler on the lake at night even in July',
      'Confirm boarding location when you buy tickets',
    ],
    website: 'Search "The Floating Tavern Lake Travis Austin" for tickets',
  },
  {
    id: 'pedal-cars',
    emoji: '🚗',
    name: 'Pedal Cars',
    category: 'other',
    type: 'drinking',
    location: 'Downtown',
    desc: 'Group pedal car tour through downtown Austin — you pedal, you drink, you look ridiculous. $30–35/person.',
    price: '$30–35/person',
    address: 'Downtown Austin (check specific operator for meetup point)',
    tips: [
      'Multiple operators run pedal car tours — search "Austin pedal car tour" for current options',
      'BYOB on most tours — stock up beforehand',
      'Best in the afternoon or early evening before dinner',
      'Groups of 10–15 fit on one car — perfect for the whole group',
      'Book in advance — popular with bachelorette groups and fills up fast',
    ],
    website: 'Search "Austin pedal car tour bachelorette"',
  },
  {
    id: 'axe-throwing',
    emoji: '🪓',
    name: 'Axe Throwing',
    category: 'other',
    type: 'non-drinking',
    location: 'East 6th',
    desc: 'Throw axes at wood targets. Way more satisfying than it has any right to be. Great group activity before a night out.',
    price: '$25–40/person for 1–2 hours',
    address: 'Multiple locations in Austin — see website for closest',
    tips: [
      '🪓 Stumpy\'s Hatchet House — popular East Austin spot, walk-ins welcome',
      '🪓 Bad Axe Throwing — another well-rated option, book ahead on weekends',
      'Coaches walk you through technique — no experience needed',
      'Book a private lane for your group so you\'re not mixing with randos',
      'Most places allow BYOB or have a bar on-site',
      'Closed-toe shoes required — plan accordingly',
    ],
    website: 'stumpyshatchethouse.com | badaxethrowing.com/austin',
  },
  {
    id: 'pitch-and-putt',
    emoji: '⛳',
    name: 'Pitch & Putt',
    category: 'other',
    type: 'non-drinking',
    location: 'Zilker / Town Lake',
    desc: 'Low-key outdoor golf in the heart of Austin. Butler Pitch & Putt is right next to Zilker — cute, cheap, and surprisingly fun even if you\'ve never golfed.',
    price: '$10–15/person',
    address: '1201 W Riverside Dr, Austin, TX 78704',
    tips: [
      'Butler Pitch & Putt — 9-hole course right next to Barton Springs and Zilker Park',
      'No prior golf experience needed — short holes, relaxed atmosphere',
      'Great in the morning or late afternoon when it\'s not blazing hot',
      'Can combine with Barton Springs for a full Zilker Park afternoon',
      'Cash or card accepted, no reservation needed usually',
      'Bring sunscreen — it\'s open air and July in Texas',
    ],
    website: 'Search "Butler Pitch and Putt Austin"',
  },
  {
    id: 'matts-el-rancho',
    emoji: '🫙',
    name: 'Matt\'s El Rancho',
    category: 'restaurant',
    type: 'drinking',
    location: 'South Lamar',
    desc: 'You\'re going for two things: the Bob Armstrong Dip and the Knockout Margarita. That\'s it. Don\'t overthink it.',
    price: '$25–40/person',
    address: '2613 S Lamar Blvd, Austin, TX 78704',
    tips: [
      '🫙 Bob Armstrong Dip — layers of queso, guac, and taco meat. They invented it. Mandatory.',
      '🍹 The Knockout Margarita — it\'s called that for a reason',
      'Austin institution since 1952 — a genuinely historic Tex-Mex spot',
      'Open Tue–Sun 11am, closed Mondays',
      '⚠️ They run everything on one tab per table — splitting a large group is a hassle. Plan to venmo one person or bring cash.',
      'Can get busy on weekends — either get there early or put your name in and grab a marg at the bar',
    ],
    website: 'mattselrancho.com',
  },
  {
    id: 'rainey-street',
    emoji: '🍺',
    name: 'Rainey Street Bar Hop',
    category: 'bar',
    type: 'drinking',
    location: 'Downtown',
    desc: 'Austin\'s bar street. It\'s not what it used to be — way more tourist-heavy and corporate now — but the right spots are still fun and it\'s easy for a group.',
    price: '$30–60/person (depends how much you drink)',
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

// Sort events by category first, then location within each category
const CATEGORY_ORDER = ['restaurant', 'bar', 'other'];
const CATEGORY_LABELS = {
  restaurant: '🍽️ Food & Drinks',
  bar:        '🍺 Bars & Nightlife',
  other:      '✨ Things To Do',
};
const EVENTS = [...EVENTS_RAW].sort((a, b) => {
  const ac = CATEGORY_ORDER.indexOf(a.category || 'other');
  const bc = CATEGORY_ORDER.indexOf(b.category || 'other');
  if (ac !== bc) return ac - bc;
  const ai = LOCATION_ORDER.indexOf(a.location);
  const bi = LOCATION_ORDER.indexOf(b.location);
  return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
});

// Slot assignments — which agenda slot each event competes for
// fri-lunch · fri-activity · fri-dinner · fri-night
// sat-lunch · sat-activity · sat-night
// sun-lunch · sun-activity · sun-night
const SLOT_MAP = {
  // Friday lunch — SoCo, first meal in Austin
  'gueros':             'fri-lunch',    // SoCo patio Tex-Mex — food is mid but patio and margs are great
  'matts-el-rancho':    'fri-lunch',    // Bob Armstrong Dip + Knockout Marg — come for those two things

  // Friday afternoon activity — chill after arriving, before dinner
  'spa-day':            'fri-activity', // relaxing first afternoon
  'cocktail-class':     'fri-activity', // fun group warm-up activity
  'escape-room':        'fri-activity', // afternoon puzzle challenge
  'de-nada-margs':      'fri-activity', // classic Austin marg pitstop
  'town-lake-cruise':   'fri-activity', // sunset bat cruise — 9pm bat emergence in July
  'austin-city-limits': 'fri-activity', // if there's a Friday taping, bucket list

  // Friday dinner — first night out, set the tone
  'aba':                'fri-dinner',   // upscale Mediterranean, rooftop, perfect opener
  'fogo-de-chao':       'fri-dinner',   // Brazilian churrascaria, upscale group splurge
  'perlas':             'fri-dinner',   // upscale SoCo seafood — dinner is the prime slot (5:30pm+)

  // Friday night — first night bar/music
  'rainey-street':      'fri-night',    // bar hop to kick off the weekend
  'donns-depot':        'fri-night',    // train car bar, open Fri from 2pm (Sat from 6pm only)
  'rooftop-bars':       'fri-night',    // skyline views, cocktails, bachelorette energy
  'continental-club':   'fri-night',    // live music, SoCo legend

  // Friday dinner/night — works as late dinner or late-night stop
  'taco-speakeasy':     'fri-dinner',   // hidden taco spot (Taqueria de Diez) — food-forward, best Thu-Sat night

  // Friday night — late night drunk food
  'jewboy-burgers':     'fri-night',    // late-night food truck near bars — drunk food, that's the move

  // Saturday lunch — after nails, before the big day
  'terry-blacks-bbq':   'sat-lunch',
  'franklin-bbq':       'sat-lunch',    // legendary — catering available, skip the line
  'la-barbecue':        'sat-lunch',    // top-tier, far more accessible than Franklin
  'leroy-lewis':        'sat-lunch',    // new school creative BBQ food truck
  'interstellar-bbq':   'sat-lunch',    // 35 min north, award-winning
  'distant-relatives':  'sat-lunch',    // BBQ meets African food traditions
  'blacks-bbq-austin':  'sat-lunch',    // original Black's family, near campus

  // Saturday activity — afternoon before Eberly
  'barton-springs':     'sat-activity', // 68°F natural pool, perfect in July heat
  'kayak-paddleboard':  'sat-activity', // Lady Bird Lake skyline views
  'horseback-riding':   'sat-activity', // Hill Country trail ride
  'cooking-class':      'sat-activity', // Antonelli's cheese & wine class
  'pedal-cars':         'sat-activity', // downtown pedal car tour, $30–35/person
  'axe-throwing':       'sat-activity', // throw axes, great group activity
  'pitch-and-putt':     'sat-activity', // Butler Pitch & Putt, Zilker Park

  // Saturday night — after Eberly dinner
  'broken-spoke':       'sat-night',    // real honky tonk (Thu–Sat only)
  'comedy-mothership':  'sat-night',    // Joe Rogan's club, shows after 8pm
  'floating-tavern':    'sat-night',    // floating bar on Lake Travis, live music, dinner cruise

  'museums':              'sun-activity',  // grouped museum day option

  // Saturday lunch — BBQ options (Loro fits here as Asian smokehouse)
  'loro':               'sat-lunch',    // Asian smokehouse — smoked meats, great patio, no long line

  // Sunday lunch
  'ski-shores':         'sun-lunch',    // waterfront cafe on Lake Austin, chill Sunday

  // Sunday activity
  'driftwood-winery':   'sun-activity', // Hill Country winery, 35 min away
  'fredericksburg':     'sun-activity', // full Hill Country day trip (commit)
  'town-lake-cruise':   'sun-activity', // if not done Friday

  // Sunday night — Sagebrush lessons → honky tonk
  // (Broken Spoke & Donn's closed Sundays — Continental Club has live music Sun)
  'continental-club':   'sun-night',
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
    { label: '🎤 Show Schedule', url: 'https://www.acl-live.com/events' },
    { label: '📍 Moody Center Maps', url: 'https://maps.apple.com/?q=Moody+Center+Austin+TX' },
    { label: '📺 ACL TV Taping Tickets', url: 'https://www.klru.org/austincitylimits/tickets/' },
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
  'terry-blacks-bbq': [
    { label: '📍 Maps', url: 'https://maps.apple.com/?q=Terry+Black%27s+BBQ+Austin+TX' },
    { label: '🌐 terryblacksbbq.com', url: 'https://www.terryblacksbbq.com' },
  ],
  'fogo-de-chao': [
    { label: '📍 Maps', url: 'https://maps.apple.com/?q=Fogo+de+Chao+Austin+TX' },
    { label: '🗓️ Reserve on OpenTable', url: 'https://www.opentable.com/r/fogo-de-chao-austin' },
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
    day: 'Friday', date: 'July 24', highlight: false,
    note: 'Check-in after 4pm — arrivals day',
    items: [
      { type: 'dynamic', time: 'Lunch',     slot: 'fri-lunch',    rank: 0, label: 'Lunch' },
      { type: 'dynamic', time: 'Afternoon', slot: 'fri-activity', rank: 0, label: 'Afternoon Activity' },
      { type: 'dynamic', time: 'Dinner',    slot: 'fri-dinner',   rank: 0, label: 'Dinner' },
      { type: 'dynamic', time: 'Night',     slot: 'fri-night',    rank: 0, label: 'Night Out' },
    ],
  },
  {
    day: 'Saturday', date: 'July 25', highlight: true,
    items: [
      { type: 'dynamic', time: 'Lunch',      slot: 'sat-lunch',    rank: 0, label: 'Lunch' },
      { type: 'locked',  time: 'Afternoon',  name: '💅 Nails', note: 'Group mani/pedi', mapUrl: 'https://maps.apple.com/?q=nail+salon+Austin+TX', calStart: '20260725T130000', calEnd: '20260725T150000', address: 'Austin, TX' },
      { type: 'dynamic', time: 'Afternoon',  slot: 'sat-activity', rank: 0, label: 'Afternoon Activity' },
      { type: 'locked',  time: 'Dinner',     name: '🍽️ Eberly', note: 'Upscale American on South Lamar — one of Austin\'s best', mapUrl: 'https://maps.apple.com/?q=Eberly+Austin+TX', reserveUrl: 'https://eberlyaustin.com/reservations', reserveLabel: '🗓️ Reserve Now', calStart: '20260725T190000', calEnd: '20260725T210000', address: '615 S Lamar Blvd, Austin, TX 78704' },
      { type: 'dynamic', time: 'Night',      slot: 'sat-night',    rank: 0, label: 'Night Out' },
    ],
  },
  {
    day: 'Sunday', date: 'July 26', highlight: false,
    items: [
      { type: 'dynamic', time: 'Lunch',     slot: 'sun-lunch',    rank: 0, label: 'Lunch' },
      { type: 'dynamic', time: 'Afternoon', slot: 'sun-activity', rank: 0, label: 'Afternoon Activity' },
      { type: 'locked',  time: 'Afternoon', name: '🤠 Sagebrush', note: 'Dinner + two-step lessons before the honky tonk', mapUrl: 'https://maps.apple.com/?q=Sagebrush+Austin+TX', calStart: '20260726T170000', calEnd: '20260726T200000', address: '5765 Airport Blvd, Austin, TX 78751' },
      { type: 'dynamic', time: 'Night',     slot: 'sun-night',    rank: 0, label: 'Honky Tonk Night' },
    ],
  },
  {
    day: 'Monday', date: 'July 27', highlight: false,
    items: [
      { type: 'locked', time: 'Morning', name: '☕ Farewell Brunch', note: 'Last meal together — check-out by 11am', mapUrl: 'https://maps.apple.com/?q=brunch+Austin+TX', calStart: '20260727T100000', calEnd: '20260727T120000', address: 'Austin, TX' },
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
let _pendingPersona = null; // persona key waiting for name to be set
let allComments = {};        // { eventId: [{ id, voter_id, voter_name, text, created_at }] }
let currentModalEventId = null;

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

// =========================================
// VIBE PICKER GAME
// =========================================
const QUICK_PICKS = [
  { emoji: '🤠', label: 'Honky Tonk',        sub: 'boots, beer & two-stepping',      vibes: ['honky-tonk', 'live-music'],  result: 'Certified Honky Tonk Queen 🤠' },
  { emoji: '🌮', label: 'Tacos & Margs',      sub: 'tex-mex, frozen margs, good times', vibes: ['tex-mex', 'party'],         result: 'Taco Tuesday Every Day 🌮' },
  { emoji: '🥂', label: 'Fancy Night Out',    sub: 'rooftops, wine & good vibes',     vibes: ['upscale', 'wine'],           result: 'We\'re going somewhere nice 🥂' },
  { emoji: '🌊', label: 'Outdoors & Chill',   sub: 'sun, water & lake vibes',         vibes: ['outdoor', 'chill'],          result: 'Sunshine & Lake Water 🌊' },
  { emoji: '🍖', label: 'BBQ & Drinks',       sub: 'smoke, cold beers & good eating', vibes: ['bbq'],                       result: 'BBQ Crew Reporting 🍖' },
  { emoji: '🎉', label: 'All of It',          sub: 'idc just let\'s go!!',            vibes: ['honky-tonk', 'tex-mex', 'bbq', 'outdoor', 'upscale', 'party'], result: 'Full Send Energy 🎉' },
];

let _pendingQuickPick = null;

// =========================================
// PERSONALITY QUIZ
// =========================================
const QUIZ_QUESTIONS = [
  {
    q: 'You just landed. Group chat has 74 unread messages. What do you actually do?',
    options: [
      { emoji: '🤠', text: 'Send "WHERE ARE YALL I\'M HERE 🤠" and start heading to baggage claim.',   type: 'cowgirl' },
      { emoji: '🥂', text: 'Scroll to the top and read every single one. Need the full picture.',       type: 'typea' },
      { emoji: '🎉', text: 'Send a voice memo because you can\'t type and pull your bag at the same time.', type: 'hotmess' },
      { emoji: '🫶', text: 'Text Shannon directly first — just her — before responding to anything.',   type: 'glue' },
      { emoji: '📸', text: 'Open the camera. Airport arrival content. It\'s begun.',                    type: 'influencer' },
      { emoji: '🎲', text: 'Put your phone away and walk. You\'ll figure it out when you get outside.', type: 'wildcard' },
    ],
  },
  {
    q: 'It\'s the first night and no one can decide where to go. You:',
    options: [
      { emoji: '🤠', text: 'Suggest the honky tonk. You\'ve been thinking about this since you booked the trip.', type: 'cowgirl' },
      { emoji: '🥂', text: 'Pull out the list you made before you got here. Already narrowed to three.', type: 'typea' },
      { emoji: '🎉', text: 'Say "I\'m fine with anything" while actively hoping it escalates.',          type: 'hotmess' },
      { emoji: '🫶', text: 'Make sure everyone\'s actually heard before anyone commits.',                 type: 'glue' },
      { emoji: '📸', text: 'Suggest the place with the patio you saw on Instagram. The lighting\'s perfect.', type: 'influencer' },
      { emoji: '🎲', text: 'Start walking toward whatever music you can hear from outside.',              type: 'wildcard' },
    ],
  },
  {
    q: 'It\'s 99°F and nobody packed for this. How are you handling July in Texas?',
    options: [
      { emoji: '🤠', text: 'Fine. Wearing jeans and new boots. Zero regrets. This is Texas.',            type: 'cowgirl' },
      { emoji: '🥂', text: 'Researched the forecast. Linen outfit, SPF 50, moving between air-conditioned spots.', type: 'typea' },
      { emoji: '🎉', text: 'It\'s HOW hot? Cool, another frozen marg fixes everything.',                 type: 'hotmess' },
      { emoji: '🫶', text: 'Already distributed Liquid IV. You bought extra before the trip.',           type: 'glue' },
      { emoji: '📸', text: 'Golden hour only. No outdoor activity between noon and 6pm. Non-negotiable.', type: 'influencer' },
      { emoji: '🎲', text: 'You kind of love it? You\'ve been cold for months. Let\'s sweat.',          type: 'wildcard' },
    ],
  },
  {
    q: 'Shannon says "honestly I\'m good with whatever." You:',
    options: [
      { emoji: '🤠', text: 'She said whatever. We\'re going to the honky tonk. Settled.',               type: 'cowgirl' },
      { emoji: '🥂', text: 'Pull up the pros and cons doc. She doesn\'t know what she wants. You do.',   type: 'typea' },
      { emoji: '🎉', text: 'Interpret this as a green light to escalate the original plan.',             type: 'hotmess' },
      { emoji: '🫶', text: '"No but what does Shannon ACTUALLY want. This is her weekend." And you mean it.', type: 'glue' },
      { emoji: '📸', text: 'Already have three venue options with photos pulled up. You\'ll show her the vibes.', type: 'influencer' },
      { emoji: '🎲', text: 'Propose something not on any list. Trust the instinct.',                     type: 'wildcard' },
    ],
  },
  {
    q: 'It\'s 1:30am Saturday. Where are you?',
    options: [
      { emoji: '🤠', text: 'Dance floor. I learned to two-step tonight and I am not leaving.',          type: 'cowgirl' },
      { emoji: '🥂', text: 'In bed. Moisturizer on. Excellent night.',                                   type: 'typea' },
      { emoji: '🎉', text: 'At a third location. I don\'t remember agreeing to come here. Having the best time.', type: 'hotmess' },
      { emoji: '🫶', text: 'Running a mental headcount. Everyone\'s tracked. Everything\'s fine.',       type: 'glue' },
      { emoji: '📸', text: 'Editing tonight\'s photos while the memory\'s fresh. The lighting was incredible.', type: 'influencer' },
      { emoji: '🎲', text: 'Somewhere unexpected. It\'s working out better than anything that was planned.', type: 'wildcard' },
    ],
  },
  {
    q: 'Sunday farewell brunch. How\'s the table?',
    options: [
      { emoji: '🤠', text: 'Bloody mary in hand, still wearing yesterday\'s hat, no notes whatsoever.',  type: 'cowgirl' },
      { emoji: '🥂', text: 'You\'re hydrated, rested, and mildly judging some of last night\'s decisions.', type: 'typea' },
      { emoji: '🎉', text: 'Cannot fully account for Saturday. Would not change a single thing.',         type: 'hotmess' },
      { emoji: '🫶', text: 'Already got everyone water and located the nearest pharmacy.',                type: 'glue' },
      { emoji: '📸', text: 'Recap reel is up. 200+ likes. Brunch can wait.',                             type: 'influencer' },
      { emoji: '🎲', text: 'At a completely different restaurant than planned. The food is incredible.',  type: 'wildcard' },
    ],
  },
];

// Map old persona keys to new ones so existing results don't break
const PERSONA_COMPAT = { texmex: 'hotmess', chaos: 'hotmess', sophisticate: 'typea', mom: 'glue', content: 'influencer' };
function resolvePersonaKey(key) { return PERSONA_COMPAT[key] || key; }

const PERSONAS = {
  cowgirl: {
    emoji: '🤠',
    title: 'The Cowgirl',
    desc: 'You are not from Texas. You have never owned cowboy boots. You bought a pair in the airport and you have worn them every hour since. You have learned to two-step, or at least you\'re committed enough that nobody has questioned it. This trip is your Super Bowl and you will never fully return to normal life.',
  },
  typea: {
    emoji: '🥂',
    title: 'The Type A',
    desc: 'You made a Google Doc. It has tabs. Color-coded. You found Aba three weeks before anyone else and you already have a reservation. You know the difference between a good rosé and a great one and you will not be ordering the rail tequila. Some people might call you a lot. Those people are drinking bad wine.',
  },
  hotmess: {
    emoji: '🎉',
    title: 'The Hot Mess',
    desc: 'Nobody planned for you but somehow you\'re the reason everyone has a good story. You suggested the third location. You made friends with the bartender. You were first on the dance floor in shoes that were not made for dancing. Shannon is slightly unhinged for inviting you and also incredibly lucky.',
  },
  glue: {
    emoji: '🫶',
    title: 'The Glue',
    desc: 'You have Advil, a portable charger, Liquid IV, a granola bar for Shannon, and the address of the nearest urgent care memorized. You will make sure everyone gets home. You will not sleep until the last person is accounted for. You will receive zero credit for any of this and that is genuinely fine.',
  },
  influencer: {
    emoji: '📸',
    title: 'The Influencer',
    desc: 'You found a mural in Austin that nobody else knew about. Your ring light is in your carry-on. The group photos are posted before anyone left the bar. You shot 400 photos on Saturday. You kept 12. The recap reel has 300 likes. Nobody asked for it. Everyone watched the whole thing twice.',
  },
  wildcard: {
    emoji: '🎲',
    title: 'The Wildcard',
    desc: 'Nobody can predict what you\'re going to do next — including you. You\'ve already eaten at a restaurant that wasn\'t on anyone\'s list, made friends with a stranger named Randy, and proposed three different activities in the last 20 minutes. The weekend is better because of you. It is also slightly more chaotic. These are related.',
  },
};

// Multiple title variants per persona — picked based on the individual's answer pattern.
// This ensures two people with the same winning type still get a different title.
const PERSONA_TITLES = {
  cowgirl: [
    'The Boot-Buying Rookie',
    'The Two-Step Convert',
    'The Honorary Texan',
    'The Jeans-in-July Enthusiast',
    'The Honky Tonk True Believer',
    'The Boots-Before-Bags Girl',
    'The Lone Star Newcomer',
    'The Accidental Texan',
  ],
  typea: [
    'The Google Doc With Tabs',
    'The One Who Already Has a Reservation',
    'The Linen Outfit in July',
    'The Color-Coded Itinerary',
    'The Yelp Rating Decider',
    'The Spreadsheet That Walks Around',
    'The Person Who Read the Reviews',
    'The Early Dinner Reservation Haver',
  ],
  hotmess: [
    'The Third Location Suggester',
    'The Bartender\'s New Best Friend',
    'The Can\'t-Account-For-Saturday',
    'The Escalation Specialist',
    'The Reason Everyone Has a Story',
    'The Unintentional Group Ringleader',
    'The One Who Suggested the Shots',
    'The Beautiful Disaster Everyone Loves',
  ],
  glue: [
    'The Liquid IV Distributor',
    'The Unpaid Air Traffic Controller',
    'The Group Chat Moderator',
    'The CVS Run Coordinator',
    'The Hydration Sergeant',
    'The One Who Got Everyone Home',
    'The Person Who Remembered the Address',
    'The Portable Charger Person',
  ],
  influencer: [
    'The Mural Finder',
    'The Golden Hour Only Policy',
    'The 400 Photos, Kept 12',
    'The Recap Reel Already Posted',
    'The Ring Light in the Carry-On',
    'The Content First, Brunch Second',
    'The One Who Found That Spot',
    'The Lighting Is Perfect Right Here',
  ],
  wildcard: [
    'The Accidental Adventure',
    'The Beautiful Chaos Generator',
    'The Unplanned Third Location',
    'The Just Start Walking Strategy',
    'The Randy Situation',
    'The Somehow Everything Worked Out',
    'The We\'re Going WHERE?',
    'The Plot Twist of the Group',
  ],
};

// Hybrid titles — when your top two types are different, you get a combined title.
// This gives 36 possible outcomes vs 6, nearly eliminating duplicate results.
// Only used when runner-up score >= 2 (a meaningful secondary type).
const PERSONA_HYBRID_TITLES = {
  cowgirl: {
    typea:      'The Cowgirl With a Spreadsheet',
    hotmess:    'The Boot-Wearing Instigator',
    glue:       'The Designated Driver in Full Western',
    influencer: 'The One With the Boot-Buying Reel',
    wildcard:   'The Spontaneous Country Girl',
  },
  typea: {
    cowgirl:    'The Planner Who Went Rogue for One Night',
    hotmess:    'The Color-Coded Plans, Deleted by 10pm',
    glue:       'The Itinerary AND the Advil',
    influencer: 'The Yelp Review Poster',
    wildcard:   'The Contingency Plan That Also Went Off Script',
  },
  hotmess: {
    cowgirl:    'The Dance Floor Occupation Specialist',
    typea:      'The Chaos With a Side of Google Maps',
    glue:       'The One Who Started It AND Got Everyone Home',
    influencer: 'The Beautiful Disaster, Documented',
    wildcard:   'The Escalation Enthusiast',
  },
  glue: {
    cowgirl:    'The Mom Friend in New Boots',
    typea:      'The Backup Plan With Advil',
    hotmess:    'The One Who Let Loose and Still Got Everyone Home',
    influencer: 'The Group Photo Wrangler',
    wildcard:   'The Safety Net in Unpredictable Conditions',
  },
  influencer: {
    cowgirl:    'The Mural Finder in New Boots',
    typea:      'The Pre-Scouted Content Calendar',
    hotmess:    'The One Who Made Last Night Look Intentional',
    glue:       'The Group Shot AND Got Everyone Home',
    wildcard:   'The Accidental Content Creator',
  },
  wildcard: {
    cowgirl:    'The Spontaneous Boot Buyer',
    typea:      'The Chaos That Somehow Made Reservations',
    hotmess:    'The Living Unpredictable Highlight Reel',
    glue:       'The Wild Card Who Got Everyone Home',
    influencer: 'The One Who Made the Story Nobody Planned',
  },
};

// Compute a unique title for a persona based on their answer pattern.
// Same persona type + different answers = different title.
// For people loaded from Supabase (no answer data), hash their voter_id.
function getPersonaTitle(personaKey, hashSource) {
  const titles = PERSONA_TITLES[resolvePersonaKey(personaKey)];
  if (!titles || !titles.length) return PERSONAS[resolvePersonaKey(personaKey)]?.title || personaKey;
  const hash = String(hashSource).split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  return titles[Math.abs(hash) % titles.length];
}

let quizAnswers = [];

function openQuizModal() {
  quizAnswers = [];
  document.getElementById('quiz-modal').classList.add('visible');
  renderQuizQuestion(0);
}

function closeQuizModal() {
  document.getElementById('quiz-modal').classList.remove('visible');
}

function renderQuizQuestion(idx) {
  const box = document.getElementById('quiz-modal-box');
  const q = QUIZ_QUESTIONS[idx];
  const total = QUIZ_QUESTIONS.length;
  box.innerHTML = `
    <div class="quiz-progress">
      ${Array.from({ length: total }, (_, i) =>
        `<div class="quiz-dot ${i <= idx ? 'active' : ''}"></div>`
      ).join('')}
    </div>
    <p class="quiz-question">${q.q}</p>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <button class="quiz-option" data-idx="${i}" data-type="${opt.type}">
          <span class="quiz-opt-emoji">${opt.emoji}</span>
          <span class="quiz-opt-text">${opt.text}</span>
        </button>
      `).join('')}
    </div>
  `;
  box.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      box.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      quizAnswers.push(btn.dataset.type);
      setTimeout(() => {
        if (idx + 1 < total) {
          renderQuizQuestion(idx + 1);
        } else {
          showPersonaResult();
        }
      }, 380);
    });
  });
}

function showPersonaResult() {
  // Tally answers
  const counts = {};
  quizAnswers.forEach(t => counts[t] = (counts[t] || 0) + 1);
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const topScore = sorted[0][1];
  const tied = sorted.filter(([, v]) => v === topScore).map(([k]) => k);

  let winner;
  if (tied.length === 1) {
    winner = tied[0];
  } else {
    winner = quizAnswers.find(t => tied.includes(t));
    if (!winner) winner = tied[tied.length - 1];
  }

  // Runner-up type — the second-most-answered type (must be different from winner and score >= 2)
  const runner = sorted.find(([k, v]) => k !== winner && v >= 2)?.[0] || null;

  const persona = PERSONAS[winner];

  // Pick title: hybrid if there's a meaningful runner-up, otherwise pure variant
  let uniqueTitle;
  if (runner && PERSONA_HYBRID_TITLES[winner]?.[runner]) {
    uniqueTitle = PERSONA_HYBRID_TITLES[winner][runner];
  } else {
    uniqueTitle = getPersonaTitle(winner, quizAnswers.join(''));
  }

  // Store persona and their unique title locally
  localStorage.setItem('bach_persona', winner);
  localStorage.setItem('bach_persona_title', uniqueTitle);
  updateNavWithPersona();
  updateQuizCta();

  // Save to Supabase if signed in
  savePersonaToSupabase(winner);

  const box = document.getElementById('quiz-modal-box');
  box.innerHTML = `
    <div class="quiz-result">
      <span class="quiz-result-emoji">${persona.emoji}</span>
      <p class="quiz-result-label">Your title for the weekend:</p>
      <h2 class="quiz-result-title">${uniqueTitle}</h2>
      <p class="quiz-result-desc">${persona.desc}</p>
      <button class="quiz-close-btn" id="quiz-close-final">Let's go! →</button>
      <button class="quiz-retake-btn" id="quiz-retake">Retake quiz</button>
    </div>
  `;
  document.getElementById('quiz-close-final').addEventListener('click', closeQuizModal);
  document.getElementById('quiz-retake').addEventListener('click', () => {
    quizAnswers = [];
    renderQuizQuestion(0);
  });
}

function updateNavWithPersona() {
  const personaKey = resolvePersonaKey(localStorage.getItem('bach_persona'));
  const persona = PERSONAS[personaKey];
  const badge = document.getElementById('nav-persona-badge');
  if (badge) {
    const title = localStorage.getItem('bach_persona_title') || persona?.title || '';
    badge.textContent = persona ? `${persona.emoji} ${title}` : '';
    badge.style.display = persona ? '' : 'none';
  }
}

// Tracks which tile indices are currently selected in the picker
const selectedPickIdxs = new Set();

function renderVibePicker() {
  const container = document.getElementById('quick-pick-container');
  if (!container) return;
  selectedPickIdxs.clear();

  container.innerHTML = `
    <p class="vote-path-label">Don't care, just excited?</p>
    <p class="quick-pick-prompt">Pick your vibes — tap as many as you want</p>
    <div class="quick-pick-grid">
      ${QUICK_PICKS.map((pick, i) => `
        <button class="quick-pick-tile" data-idx="${i}">
          <span class="quick-pick-emoji">${pick.emoji}</span>
          <span class="quick-pick-label">${pick.label}</span>
          <span class="quick-pick-sub">${pick.sub}</span>
        </button>
      `).join('')}
    </div>
    <button class="quick-pick-submit-btn" id="quick-pick-submit" disabled>Vote for my picks →</button>
  `;

  container.querySelectorAll('.quick-pick-tile').forEach(tile => {
    tile.addEventListener('click', () => {
      const idx = parseInt(tile.dataset.idx);
      if (selectedPickIdxs.has(idx)) {
        selectedPickIdxs.delete(idx);
        tile.classList.remove('selected');
      } else {
        selectedPickIdxs.add(idx);
        tile.classList.add('selected');
      }
      document.getElementById('quick-pick-submit').disabled = selectedPickIdxs.size === 0;
    });
  });

  document.getElementById('quick-pick-submit').addEventListener('click', submitPickSelections);
  updateQuizCta();
}

async function submitPickSelections() {
  if (!voterName) {
    _pendingQuickPick = -1; // signal: re-submit after name set
    showNameModal();
    return;
  }
  _pendingQuickPick = null;

  // Collect unique event IDs across all selected picks
  const picks = [...selectedPickIdxs].map(i => QUICK_PICKS[i]);
  const eventIds = [...new Set(picks.flatMap(p => p.vibes.flatMap(v => VIBES[v] || [])))];
  const toVote = eventIds.filter(eid => myVotes.get(eid) !== 'yes');

  showMultiPickResult(picks, toVote.length);

  for (const eid of toVote) {
    await castVote(eid, 'yes');
  }
}

function showMultiPickResult(picks, count) {
  const container = document.getElementById('quick-pick-container');
  if (!container) return;
  const emojis = picks.map(p => p.emoji).join(' ');
  const labels = picks.map(p => p.label).join(' · ');
  const msg = count > 0
    ? `Voted you in for ${count} activit${count === 1 ? 'y' : 'ies'} 🙌`
    : 'You\'re already in for all of those!';

  container.innerHTML = `
    <div class="quick-pick-result">
      <span class="quick-pick-result-emoji">${emojis}</span>
      <p class="quick-pick-result-title">${labels}</p>
      <p class="quick-pick-result-sub">${msg}</p>
      <div class="quick-pick-result-actions">
        <button class="quick-pick-reset-btn" id="quick-pick-reset">Change picks</button>
        <a href="#events" class="quick-pick-see-btn">See votes →</a>
      </div>
    </div>
  `;
  document.getElementById('quick-pick-reset').addEventListener('click', renderVibePicker);
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

  // If the vibe picker triggered the name modal, resume the submission now
  if (_pendingQuickPick !== null) {
    _pendingQuickPick = null;
    submitPickSelections();
  }

  // If a persona was taken before signing in, save it now
  if (_pendingPersona) {
    savePersonaToSupabase(_pendingPersona);
  } else {
    // Update name on existing persona entry if already saved
    const existing = allPersonas.find(p => p.voter_id === voterId);
    if (existing && existing.voter_name !== input) {
      existing.voter_name = input;
      renderPersonas();
      if (supabaseClient) {
        supabaseClient.from('personas').update({ voter_name: input }).eq('voter_id', voterId);
      }
    }
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
// VOTER DISPLAY HTML
// =========================================
function voterChipsHTML(eventId) {
  const voters = voterData[eventId] || [];
  if (voters.length === 0) return '<span class="no-voters">No votes yet — be first!</span>';

  const yesVoters = voters.filter(v => v.vote_type !== 'maybe');
  const maybeVoters = voters.filter(v => v.vote_type === 'maybe');

  const countParts = [];
  if (yesVoters.length) countParts.push(`<span class="voter-count-yes">✅ ${yesVoters.length} in</span>`);
  if (maybeVoters.length) countParts.push(`<span class="voter-count-maybe">🤔 ${maybeVoters.length} maybe</span>`);

  const nameParts = [];
  if (yesVoters.length) nameParts.push(yesVoters.map(v => v.voter_name.split(' ')[0]).join(', '));
  if (maybeVoters.length) nameParts.push(`🤔 ${maybeVoters.map(v => v.voter_name.split(' ')[0]).join(', ')}`);

  return `
    <div class="voter-count-row">${countParts.join('')}</div>
    <div class="voter-names-label">${nameParts.join(' · ')}</div>
  `;
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

  const brideVoted = voters.some(v => v.voter_name.trim().toLowerCase() === 'shannon' && v.vote_type !== 'maybe');
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
  currentModalEventId = eventId;

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
      <h4>Who's voting for this</h4>
      ${(() => {
        const yes = voters.filter(v => v.vote_type !== 'maybe');
        const maybe = voters.filter(v => v.vote_type === 'maybe');
        const chip = (v, eid) => {
          const isBride = v.voter_name.trim().toLowerCase() === 'shannon';
          return `<span class="detail-voter-chip${isBride ? ' bride' : ''}"
            data-admin-target="vote" data-admin-id="${v.voter_id}" data-admin-name="${v.voter_name}" data-admin-event-id="${eid}"
          >${isBride ? '💍 ' : ''}${v.voter_name}</span>`;
        };
        if (!voters.length) return '<em style="color:var(--gray);font-size:0.85rem;">No votes yet</em>';
        return `
          ${yes.length ? `<p class="voter-group-label">✅ I'm in (${yes.length})</p><div class="detail-voters">${yes.map(v => chip(v, eventId)).join('')}</div>` : ''}
          ${maybe.length ? `<p class="voter-group-label" style="margin-top:12px">🤔 Interested / Maybe (${maybe.length})</p><div class="detail-voters">${maybe.map(v => chip(v, eventId)).join('')}</div>` : ''}
        `;
      })()}
    </div>

    <div class="detail-section">
      <h4>💬 Comments</h4>
      <div id="detail-comments-list"></div>
      <div class="comment-form">
        <input type="text" id="comment-input" placeholder="Leave a comment…" maxlength="200" autocomplete="off" />
        <button id="comment-submit-btn">Post</button>
      </div>
    </div>
  `;

  renderModalComments(eventId);
  document.getElementById('comment-submit-btn').addEventListener('click', () => submitComment(eventId));
  document.getElementById('comment-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') submitComment(eventId);
  });

  document.getElementById('detail-modal').classList.add('visible');
}

document.getElementById('detail-modal-close').addEventListener('click', () => {
  document.getElementById('detail-modal').classList.remove('visible');
});

// Agenda: clicking a dynamic slot opens the detail modal for the winning event
document.getElementById('agenda-container').addEventListener('click', e => {
  const card = e.target.closest('[data-event-id]');
  if (card && !e.target.closest('[data-admin-target]')) {
    openDetailModal(card.dataset.eventId);
  }
});
document.getElementById('detail-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('detail-modal')) {
    document.getElementById('detail-modal').classList.remove('visible');
  }
});
document.getElementById('quiz-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('quiz-modal')) closeQuizModal();
});

// =========================================
// AGENDA — builds from vote tallies
// =========================================
function topVotedBySlot(slot, rank = 0) {
  const candidates = EVENTS.filter(e => e.slot === slot);
  const sorted = [...candidates].sort((a, b) => voteScore(b.id) - voteScore(a.id));
  return sorted[rank] || null;
}

// Approximate time windows per slot (Austin, July 2026)
const SLOT_TIMES = {
  'fri-lunch':    { start: '20260724T120000', end: '20260724T140000' },
  'fri-activity': { start: '20260724T150000', end: '20260724T180000' },
  'fri-dinner':   { start: '20260724T190000', end: '20260724T210000' },
  'fri-night':    { start: '20260724T210000', end: '20260725T010000' },
  'sat-lunch':    { start: '20260725T120000', end: '20260725T140000' },
  'sat-activity': { start: '20260725T150000', end: '20260725T180000' },
  'sat-night':    { start: '20260725T210000', end: '20260726T010000' },
  'sun-lunch':    { start: '20260726T120000', end: '20260726T140000' },
  'sun-activity': { start: '20260726T150000', end: '20260726T180000' },
  'sun-night':    { start: '20260726T200000', end: '20260727T000000' },
};

function gcalLink(name, start, end, desc, location) {
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: `Shannon\'s Bach — ${name}`,
    dates: `${start}/${end}`,
    details: desc || '',
    location: location || 'Austin, TX',
  });
  return `https://calendar.google.com/calendar/render?${p}`;
}

function renderAgenda() {
  const container = document.getElementById('agenda-container');
  if (!container) return;

  container.innerHTML = SCHEDULE.map(day => {
    const itemsHTML = day.items.map(item => {
      if (item.type === 'locked') {
        const calLink = item.calStart ? gcalLink(item.name.replace(/^\S+\s/, ''), item.calStart, item.calEnd, item.note, item.address) : null;
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
                ${calLink ? `<a href="${calLink}" target="_blank" rel="noopener" class="agenda-cal-link">📅 Add to Calendar</a>` : ''}
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
      const voters = [yesNames ? `✅ ${yesNames}` : '', maybeNames ? `🤔 ${maybeNames}` : ''].filter(Boolean).join('  ');

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

      const bridePicksWinner = (voterData[winner.id] || []).some(v => v.voter_name.trim().toLowerCase() === 'shannon' && v.vote_type !== 'maybe');

      const slotTime = SLOT_TIMES[item.slot];
      const calUrl = slotTime ? gcalLink(`${winner.emoji} ${winner.name}`, slotTime.start, slotTime.end, winner.desc, winner.address) : null;

      return `
        <div class="day-item agenda-dynamic${bridePicksWinner ? ' bride-pick' : ''} agenda-clickable"
             data-admin-target="agenda-slot" data-admin-slot="${item.slot}" data-admin-name="${item.time}"
             data-event-id="${winner.id}" role="button" tabindex="0">
          <span class="item-time">${item.time}</span>
          <div class="item-body">
            ${bridePicksWinner ? '<span class="item-badge agenda-bride-badge">💍 Bride\'s Pick</span>' : '<span class="item-badge agenda-leading-badge">🗳️ Leading</span>'}
            <span class="item-name">${winner.emoji} ${winner.name}</span>
            <span class="item-note">${winner.location} · ${votes} vote${votes !== 1 ? 's' : ''} (${voters})${tieNote}</span>
            <div class="agenda-item-links">
              <span class="agenda-details-hint">tap for details →</span>
              ${calUrl ? `<a href="${calUrl}" target="_blank" rel="noopener" class="agenda-cal-link" onclick="event.stopPropagation()">📅 Calendar</a>` : ''}
            </div>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="schedule-day-block${day.highlight ? ' highlight-block' : ''}">
        <div class="day-heading">
          <div class="day-pill${day.highlight ? ' highlight-pill' : ''}">${day.day}${day.highlight ? ' ✨' : ''}</div>
          <span class="day-full-date">${day.date}</span>
        </div>
        ${day.note ? `<p class="day-note">${day.note}</p>` : ''}
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

  let lastCategory = null;

  EVENTS.forEach(event => {
    const cat = event.category || 'other';

    // Category section heading
    if (cat !== lastCategory) {
      lastCategory = cat;
      const heading = document.createElement('div');
      heading.className = 'group-heading';
      heading.dataset.category = cat;
      heading.innerHTML = `
        <div class="group-heading-left">
          <h3>${CATEGORY_LABELS[cat] || cat}</h3>
        </div>
        <a href="#agenda" class="group-agenda-link">View Agenda ↓</a>
      `;
      grid.appendChild(heading);
    }

    const brideVoted = (voterData[event.id] || []).some(v => v.voter_name.trim().toLowerCase() === 'shannon' && v.vote_type !== 'maybe');
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

    // Location description for tooltip
    const locDesc = LOCATION_DESCRIPTIONS[event.location] || '';

    const card = document.createElement('div');
    card.className = 'event-card' + (voted || maybed ? ' voted' : '') + (event.confirmed ? ' confirmed' : '') + (brideVoted ? ' bride-pick' : '');
    card.dataset.eventId = event.id;
    card.dataset.type = event.type;
    card.dataset.category = cat;

    card.innerHTML = `
      <div class="card-top">
        <span class="event-emoji">${event.emoji}</span>
        <div class="card-tags">
          ${brideVoted ? '<span class="bride-pick-badge">💍 Bride\'s Pick</span>' : ''}
          ${event.recommended ? '<span class="recommended-badge">⭐ Recommended</span>' : ''}
          ${event.confirmed ? '<span class="confirmed-badge">✓ Happening</span>' : ''}
        </div>
      </div>
      <p class="card-location">📍 ${event.location}${locDesc ? `<button class="location-info-btn" aria-label="About ${event.location}">?</button>` : ''}</p>
      ${locDesc ? `<p class="location-desc hidden">${locDesc}</p>` : ''}
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

    // Location info toggle
    if (locDesc) {
      const btn = card.querySelector('.location-info-btn');
      const p = card.querySelector('.location-desc');
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const open = !p.classList.contains('hidden');
        p.classList.toggle('hidden', open);
        btn.classList.toggle('active', !open);
      });
    }

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
      const cat = heading.dataset.category;
      const anyVisible = [...document.querySelectorAll(`.event-card[data-category="${cat}"]`)]
        .some(c => !c.classList.contains('hidden'));
      heading.classList.toggle('hidden', !anyVisible);
    });
  });
});

// =========================================
// PERSONAS — save & display
// =========================================
let allPersonas = []; // [{ voter_id, voter_name, persona }]

async function savePersonaToSupabase(personaKey) {
  if (!voterName) {
    _pendingPersona = personaKey;
    renderPersonas(); // show local fallback immediately
    return;
  }
  _pendingPersona = null;

  // Always update local list immediately (works even without Supabase table)
  allPersonas = allPersonas.filter(p => p.voter_id !== voterId);
  allPersonas.push({ voter_id: voterId, voter_name: voterName, persona: personaKey });
  renderPersonas();

  if (!supabaseClient) return;
  const { error } = await supabaseClient.from('personas').upsert(
    { voter_id: voterId, voter_name: voterName, persona: personaKey },
    { onConflict: 'voter_id' }
  );
  if (error) console.warn('Persona save error (table may not exist yet):', error.message);
}

async function loadPersonas() {
  if (!supabaseClient) return;
  const { data, error } = await supabaseClient.from('personas').select('voter_id, voter_name, persona').order('voter_name');
  if (!error) {
    allPersonas = (data || []).map(p => ({ ...p, persona: resolvePersonaKey(p.persona) }));
    renderPersonas();
    // Migrate any stale persona keys in Supabase
    const stale = (data || []).filter(p => PERSONA_COMPAT[p.persona]);
    for (const p of stale) {
      supabaseClient.from('personas').update({ persona: resolvePersonaKey(p.persona) }).eq('voter_id', p.voter_id);
    }
  }
}

function renderPersonas() {
  const grid = document.getElementById('personas-grid');
  if (!grid) return;

  // Include current user from localStorage if not already in the list
  const localPersonaKey = resolvePersonaKey(localStorage.getItem('bach_persona'));
  let displayList = [...allPersonas];
  if (localPersonaKey && voterId && !displayList.find(p => p.voter_id === voterId)) {
    displayList.push({ voter_id: voterId, voter_name: voterName || 'You', persona: localPersonaKey });
  }

  if (displayList.length === 0) {
    grid.innerHTML = '<p class="no-personas">No one\'s taken the quiz yet — be first! 👆</p>';
    return;
  }

  grid.innerHTML = displayList.map(p => {
    const persona = PERSONAS[resolvePersonaKey(p.persona)];
    if (!persona) return '';
    const isMe = p.voter_id === voterId;
    const isBride = p.voter_name.trim().toLowerCase() === 'shannon';
    // Use the locally-stored unique title for the current user; hash voter_id for others
    const title = isMe && localStorage.getItem('bach_persona_title')
      ? localStorage.getItem('bach_persona_title')
      : getPersonaTitle(p.persona, p.voter_id);
    return `
      <div class="persona-card ${isMe ? 'persona-card-me' : ''} ${isBride ? 'persona-card-bride' : ''}"
           data-admin-target="persona" data-admin-id="${p.voter_id}" data-admin-name="${p.voter_name}">
        <span class="persona-card-emoji">${isBride ? '💍' : persona.emoji}</span>
        <span class="persona-card-name">${p.voter_name}${isMe ? ' (you)' : ''}</span>
        <span class="persona-card-title">${title}</span>
      </div>
    `;
  }).join('');
}

// =========================================
// COUNTDOWN
// =========================================
function renderCountdown() {
  const el = document.getElementById('hero-countdown');
  if (!el) return;

  const target = new Date('2026-07-24T00:00:00');
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    el.innerHTML = '<span class="countdown-done">It\'s time 🌸</span>';
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  el.innerHTML = [
    { num: days,    label: 'Days'    },
    { num: hours,   label: 'Hours'   },
    { num: minutes, label: 'Minutes' },
    { num: seconds, label: 'Seconds' },
  ].map(u => `
    <div class="countdown-unit">
      <span class="countdown-num">${String(u.num).padStart(2, '0')}</span>
      <span class="countdown-label">${u.label}</span>
    </div>
  `).join('');
}

renderCountdown();
setInterval(renderCountdown, 1000);

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

      await loadPersonas();
      supabaseClient
        .channel('personas-channel')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'personas' }, async () => {
          await loadPersonas();
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

      await loadComments();
      supabaseClient
        .channel('comments-channel')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'comments' }, payload => {
          const c = payload.new;
          if (!allComments[c.event_id]) allComments[c.event_id] = [];
          if (!allComments[c.event_id].find(x => x.id === c.id)) {
            allComments[c.event_id].push(c);
            if (currentModalEventId === c.event_id) renderModalComments(c.event_id);
          }
        })
        .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'comments' }, payload => {
          const c = payload.old;
          if (allComments[c.event_id]) {
            allComments[c.event_id] = allComments[c.event_id].filter(x => x.id !== c.id);
            if (currentModalEventId === c.event_id) renderModalComments(c.event_id);
          }
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
  renderPersonas();
}

init();

// =========================================
// COMMENTS
// =========================================
async function loadComments() {
  if (!supabaseClient) return;
  const { data, error } = await supabaseClient
    .from('comments')
    .select('*')
    .order('created_at', { ascending: true });
  if (error) return;
  allComments = {};
  (data || []).forEach(c => {
    if (!allComments[c.event_id]) allComments[c.event_id] = [];
    allComments[c.event_id].push(c);
  });
}

function renderModalComments(eventId) {
  const list = document.getElementById('detail-comments-list');
  if (!list) return;
  const comments = allComments[eventId] || [];
  if (comments.length === 0) {
    list.innerHTML = '<p class="no-comments">No comments yet — be first!</p>';
    return;
  }
  list.innerHTML = comments.map(c => {
    const isMe = c.voter_id === voterId;
    const canDelete = isMe || isAdmin;
    const d = new Date(c.created_at);
    const timeStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return `
      <div class="comment-item"
           data-admin-target="comment" data-admin-id="${c.id}" data-admin-event-id="${eventId}" data-admin-name="${c.voter_name}">
        <div class="comment-header">
          <span class="comment-author">${c.voter_name}</span>
          <span class="comment-time">${timeStr}</span>
          ${canDelete ? `<button class="comment-delete-btn" data-comment-id="${c.id}" data-event-id="${eventId}" title="Delete">✕</button>` : ''}
        </div>
        <p class="comment-text">${c.text}</p>
      </div>
    `;
  }).join('');
  list.querySelectorAll('.comment-delete-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteComment(btn.dataset.commentId, btn.dataset.eventId));
  });
}

async function submitComment(eventId) {
  const input = document.getElementById('comment-input');
  const text = input ? input.value.trim() : '';
  if (!text) return;
  if (!voterName) { showNameModal(); return; }

  const comment = { event_id: eventId, voter_id: voterId, voter_name: voterName, text };

  if (supabaseClient) {
    const { data, error } = await supabaseClient.from('comments').insert(comment).select();
    if (!error && data) {
      if (!allComments[eventId]) allComments[eventId] = [];
      allComments[eventId].push(data[0]);
      renderModalComments(eventId);
    }
  } else {
    if (!allComments[eventId]) allComments[eventId] = [];
    allComments[eventId].push({ ...comment, id: String(Date.now()), created_at: new Date().toISOString() });
    renderModalComments(eventId);
  }
  if (input) input.value = '';
}

async function deleteComment(commentId, eventId) {
  if (supabaseClient) {
    let q = supabaseClient.from('comments').delete().eq('id', commentId);
    if (!isAdmin) q = q.eq('voter_id', voterId);
    await q;
  }
  if (allComments[eventId]) {
    allComments[eventId] = allComments[eventId].filter(c => String(c.id) !== String(commentId));
  }
  renderModalComments(eventId);
}

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
  const DATE_ORDER = ['Thursday, July 23', 'Friday, July 24', 'Saturday, July 25', 'Sunday, July 26'];
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
        return `<div class="arrival-row${isMe ? ' mine' : ''}"
          data-admin-target="arrival" data-admin-id="${a.voter_id}" data-admin-name="${a.voter_name}">
          <div class="arrival-who">
            <span class="arrival-name-chip${isBride ? ' bride' : ''}">${isBride ? '💍 ' : ''}${a.voter_name.split(' ')[0]}</span>
            ${a.needs_ride ? '<span class="arrival-ride-tag">🚗 Needs ride</span>' : ''}
          </div>
          <div class="arrival-info">
            <span class="arrival-time-display">${a.transport_type === 'driving' ? '🚗' : '🛬'} ${a.arrival_time}</span>
            ${a.flight_info ? `<a class="arrival-flight" href="https://www.google.com/search?q=${encodeURIComponent(a.flight_info + ' flight status')}" target="_blank" rel="noopener">${a.flight_info} ↗</a>` : ''}
          </div>
          ${isMe || isAdmin ? `<button class="arrival-delete-btn" data-voter-id="${a.voter_id}" title="Remove arrival">✕</button>` : ''}
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

function updateQuizCta() {
  const btn = document.getElementById('quiz-open-main');
  if (!btn) return;
  const savedPersona = resolvePersonaKey(localStorage.getItem('bach_persona'));
  const persona = savedPersona && PERSONAS[savedPersona];
  const savedTitle = localStorage.getItem('bach_persona_title') || persona?.title || '';
  btn.textContent = persona
    ? `${persona.emoji} ${savedTitle} · Retake the quiz →`
    : '✨ What\'s your bachelorette persona? Take the quiz →';
  btn.classList.toggle('quiz-cta-taken', !!persona);
}

// Wire up the static quiz CTA button
document.getElementById('quiz-open-main').addEventListener('click', openQuizModal);

// Render vibe picker game and restore persona on load
renderVibePicker();
updateNavWithPersona();
updateQuizCta();

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
      <div class="suggestion-card" data-suggestion-id="${s.id}"
           data-admin-target="suggestion" data-admin-id="${s.id}" data-admin-name="${s.name.replace(/"/g, '&quot;')}">
        <div class="suggestion-body">
          <span class="suggestion-name">${s.name}</span>
          ${s.description ? `<span class="suggestion-desc">${s.description}</span>` : ''}
        </div>
        <div class="suggestion-actions">
          <span class="suggestion-chip">${s.suggester_name.split(' ')[0]}</span>
          <button class="suggestion-vote-btn ${myVote ? 'voted' : ''}" data-id="${s.id}">
            👍 ${votes.size > 0 ? votes.size : ''}
          </button>
          ${isOwner ? `<button class="suggestion-delete-btn" data-id="${s.id}" title="Delete idea">✕</button>` : ''}
          ${isAdmin ? `<button class="suggestion-delete-btn admin-delete" data-id="${s.id}" title="Admin: delete idea">🗑</button>` : ''}
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

// =========================================
// ADMIN MODE
// =========================================
let isAdmin = sessionStorage.getItem('bach_admin') === 'true';

// Inject context menu element
const ctxMenu = document.createElement('div');
ctxMenu.id = 'admin-ctx-menu';
document.body.appendChild(ctxMenu);

function hideCtxMenu() { ctxMenu.classList.remove('visible'); }
document.addEventListener('click', hideCtxMenu);
document.addEventListener('scroll', hideCtxMenu, { passive: true });

function showCtxMenu(x, y, items) {
  ctxMenu.innerHTML = items.map((item, i) =>
    `<button class="ctx-item${item.danger ? ' danger' : ''}" data-idx="${i}">${item.label}</button>`
  ).join('');
  ctxMenu.style.left = x + 'px';
  ctxMenu.style.top = y + 'px';
  ctxMenu.classList.add('visible');
  ctxMenu.querySelectorAll('.ctx-item').forEach((btn, i) => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      hideCtxMenu();
      items[i].fn();
    });
  });
  // Prevent overflow off-screen
  const rect = ctxMenu.getBoundingClientRect();
  if (rect.right > window.innerWidth) ctxMenu.style.left = (x - rect.width) + 'px';
  if (rect.bottom > window.innerHeight) ctxMenu.style.top = (y - rect.height) + 'px';
}

function promptAdminLogin(then) {
  const pw = prompt('Admin password:');
  if (pw !== null && pw.toLowerCase() === 'admin') {
    isAdmin = true;
    sessionStorage.setItem('bach_admin', 'true');
    showAdminBadge();
    // Re-render everything so admin controls appear
    renderPersonas();
    renderSuggestions();
    renderArrivals();
    if (currentModalEventId) renderModalComments(currentModalEventId);
    showToast('Admin mode on 🔐');
    if (then) then();
  }
}

function showAdminBadge() {
  let badge = document.getElementById('admin-badge');
  if (!badge) {
    badge = document.createElement('div');
    badge.id = 'admin-badge';
    badge.textContent = '🔐 Admin';
    document.body.appendChild(badge);
  }
  badge.onclick = openAdminPanel;
}

function openAdminPanel() {
  document.getElementById('admin-panel').classList.add('visible');
}

function closeAdminPanel() {
  document.getElementById('admin-panel').classList.remove('visible');
}

// Wire up admin panel buttons (runs once after DOM is ready)
document.getElementById('admin-panel').addEventListener('click', e => {
  if (e.target === document.getElementById('admin-panel')) closeAdminPanel();
});
document.getElementById('admin-panel-close').addEventListener('click', closeAdminPanel);

document.getElementById('admin-exit').addEventListener('click', () => {
  isAdmin = false;
  sessionStorage.removeItem('bach_admin');
  document.getElementById('admin-badge')?.remove();
  closeAdminPanel();
  showToast('Admin mode off');
});

document.getElementById('admin-nuke-votes').addEventListener('click', async () => {
  if (!confirm('Clear ALL votes for everyone? This cannot be undone.')) return;
  await adminClearAllVotes();
  closeAdminPanel();
  showToast('All votes cleared');
});

document.getElementById('admin-nuke-personas').addEventListener('click', async () => {
  if (!confirm('Remove everyone from Who\'s Coming? This cannot be undone.')) return;
  allPersonas = [];
  localStorage.removeItem('bach_persona');
  localStorage.removeItem('bach_persona_title');
  updateNavWithPersona();
  updateQuizCta();
  renderPersonas();
  if (supabaseClient) await supabaseClient.from('personas').delete().neq('voter_id', '___');
  closeAdminPanel();
  showToast('Who\'s Coming cleared');
});

document.getElementById('admin-nuke-suggestions').addEventListener('click', async () => {
  if (!confirm('Delete ALL suggestions? This cannot be undone.')) return;
  suggestions = [];
  suggestionVotes = {};
  renderSuggestions();
  if (supabaseClient) await supabaseClient.from('suggestions').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  closeAdminPanel();
  showToast('All suggestions cleared');
});

document.getElementById('admin-nuke-arrivals').addEventListener('click', async () => {
  if (!confirm('Remove ALL arrivals? This cannot be undone.')) return;
  arrivals = [];
  renderArrivals();
  if (supabaseClient) await supabaseClient.from('arrivals').delete().neq('voter_id', '___');
  closeAdminPanel();
  showToast('All arrivals cleared');
});

document.getElementById('admin-nuke-comments').addEventListener('click', async () => {
  if (!confirm('Delete ALL comments? This cannot be undone.')) return;
  await adminClearAllComments();
  closeAdminPanel();
  showToast('All comments cleared');
});

if (isAdmin) showAdminBadge();

async function adminDeletePersona(voterId_) {
  allPersonas = allPersonas.filter(p => p.voter_id !== voterId_);
  // If removing self, clear local storage so the fallback doesn't re-add them
  if (voterId_ === voterId) {
    localStorage.removeItem('bach_persona');
    localStorage.removeItem('bach_persona_title');
    updateNavWithPersona();
    updateQuizCta();
  }
  renderPersonas();
  if (supabaseClient) {
    await supabaseClient.from('personas').delete().eq('voter_id', voterId_);
  }
}

async function adminDeleteVote(eventId, voterId_) {
  voterData[eventId] = (voterData[eventId] || []).filter(v => v.voter_id !== voterId_);
  renderEvents();
  renderAgenda();
  if (supabaseClient) {
    await supabaseClient.from('votes').delete().eq('event_id', eventId).eq('voter_id', voterId_);
  }
}

async function adminDeleteSuggestion(suggestionId) {
  suggestions = suggestions.filter(s => String(s.id) !== String(suggestionId));
  delete suggestionVotes[suggestionId];
  renderSuggestions();
  if (supabaseClient) {
    await supabaseClient.from('suggestions').delete().eq('id', suggestionId);
  }
}

async function adminEditSuggestion(suggestionId) {
  const s = suggestions.find(s => String(s.id) === String(suggestionId));
  if (!s) return;
  const newName = prompt('Edit title:', s.name);
  if (newName === null || !newName.trim()) return;
  const newDesc = prompt('Edit description (leave blank to clear):', s.description || '');
  if (newDesc === null) return;
  s.name = newName.trim();
  s.description = newDesc.trim() || null;
  renderSuggestions();
  if (supabaseClient) {
    await supabaseClient.from('suggestions').update({ name: s.name, description: s.description }).eq('id', suggestionId);
  }
}

async function adminClearSlot(slot) {
  const eventIds = EVENTS.filter(e => e.slot === slot).map(e => e.id);
  eventIds.forEach(id => { delete voterData[id]; });
  renderEvents();
  renderAgenda();
  if (supabaseClient) {
    for (const id of eventIds) {
      await supabaseClient.from('votes').delete().eq('event_id', id);
    }
  }
}

async function adminClearEvent(eventId) {
  delete voterData[eventId];
  renderEvents();
  renderAgenda();
  if (supabaseClient) {
    await supabaseClient.from('votes').delete().eq('event_id', eventId);
  }
}

async function adminClearAllVotes() {
  voterData = {};
  myVotes = new Map();
  renderEvents();
  renderAgenda();
  if (supabaseClient) {
    await supabaseClient.from('votes').delete().neq('event_id', '___');
  }
}

async function adminClearAllComments() {
  allComments = {};
  if (currentModalEventId) renderModalComments(currentModalEventId);
  if (supabaseClient) {
    await supabaseClient.from('comments').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  }
}

function buildAdminMenuItems(adminTarget, eventCard) {
  let items = [];

  if (adminTarget) {
    const type = adminTarget.dataset.adminTarget;
    const id = adminTarget.dataset.adminId;
    const name = adminTarget.dataset.adminName || '';

    if (type === 'persona') {
      items = [{ label: `🗑 Remove ${name} from Who's Coming`, danger: true, fn: () => adminDeletePersona(id) }];
    } else if (type === 'vote') {
      const eventId = adminTarget.dataset.adminEventId;
      items = [{ label: `🗑 Remove ${name}'s vote`, danger: true, fn: () => adminDeleteVote(eventId, id) }];
    } else if (type === 'suggestion') {
      items = [
        { label: '✏️ Edit this idea', fn: () => adminEditSuggestion(id) },
        { label: `🗑 Remove "${name}"`, danger: true, fn: () => adminDeleteSuggestion(id) },
      ];
    } else if (type === 'agenda-slot') {
      const slot = adminTarget.dataset.adminSlot;
      items = [{ label: `🗑 Clear votes for ${name || slot}`, danger: true, fn: () => adminClearSlot(slot) }];
    } else if (type === 'arrival') {
      items = [{ label: `🗑 Remove ${name}'s arrival`, danger: true, fn: () => deleteArrival(id) }];
    } else if (type === 'comment') {
      const eventId = adminTarget.dataset.adminEventId;
      items = [{ label: `🗑 Delete ${name}'s comment`, danger: true, fn: () => deleteComment(id, eventId) }];
    }
  } else if (eventCard) {
    const eventId = eventCard.dataset.eventId;
    const event = EVENTS.find(ev => ev.id === eventId);
    const eventName = event?.name || eventId;
    const voters = voterData[eventId] || [];
    const isRecommended = event?.recommended;

    items = [
      {
        label: isRecommended ? '⭐ Remove Recommended tag' : '⭐ Mark as Recommended',
        fn: () => adminToggleRecommended(eventId),
      },
      { label: `🗑 Clear ALL votes — ${eventName}`, danger: true, fn: () => adminClearEvent(eventId) },
      ...voters.map(v => ({
        label: `🗑 Remove ${v.voter_name}'s vote`,
        danger: true,
        fn: () => adminDeleteVote(eventId, v.voter_id),
      })),
    ];
  }

  return items;
}

function adminToggleRecommended(eventId) {
  const event = EVENTS.find(e => e.id === eventId);
  const raw = EVENTS_RAW.find(e => e.id === eventId);
  if (!event || !raw) return;
  event.recommended = !event.recommended;
  raw.recommended = event.recommended;
  renderEvents();
  showToast(event.recommended ? '⭐ Marked as Recommended' : 'Recommended tag removed');
}

function triggerAdminMenu(x, y, adminTarget, eventCard) {
  const buildMenu = () => {
    const items = buildAdminMenuItems(adminTarget, eventCard);
    if (items.length) showCtxMenu(x, y, items);
  };
  if (!isAdmin) {
    promptAdminLogin(buildMenu);
  } else {
    buildMenu();
  }
}

// Desktop: right-click
document.addEventListener('contextmenu', e => {
  const adminTarget = e.target.closest('[data-admin-target]');
  const eventCard = e.target.closest('.event-card');
  if (!adminTarget && !eventCard) return;
  e.preventDefault();
  triggerAdminMenu(e.clientX, e.clientY, adminTarget, eventCard);
});

// Mobile: long-press (600ms hold)
let _lpTimer = null;
let _lpMoved = false;
document.addEventListener('touchstart', e => {
  const adminTarget = e.target.closest('[data-admin-target]');
  const eventCard = e.target.closest('.event-card');
  if (!adminTarget && !eventCard) return;
  _lpMoved = false;
  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;
  _lpTimer = setTimeout(() => {
    if (_lpMoved) return;
    triggerAdminMenu(x, y, adminTarget, eventCard);
  }, 600);
}, { passive: true });
document.addEventListener('touchmove', () => { _lpMoved = true; clearTimeout(_lpTimer); }, { passive: true });
document.addEventListener('touchend', () => clearTimeout(_lpTimer), { passive: true });

