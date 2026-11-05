/**
 * Blog posts. Add a new post by adding an object to POSTS (newest first is not
 * required; the list is sorted by date). Prices and service details must match
 * the service pages they link to.
 */

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Paragraphs shown after the list. */
  after?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  /** Google title, 60 characters or fewer. */
  metaTitle: string;
  /** Google description, 160 characters or fewer. */
  description: string;
  date: string; // YYYY-MM-DD
  readMinutes: number;
  image: string;
  imageAlt: string;
  intro: string;
  sections: BlogSection[];
  /** The service page this post points readers to. */
  cta: { label: string; href: string };
};

const POSTS: BlogPost[] = [
  {
    slug: "what-is-checked-in-an-mot",
    title: "What Is Checked in an MOT? A Simple Guide for Castleford Drivers",
    metaTitle: "What Is Checked in an MOT? | Ignition Autocare",
    description:
      "What is checked in an MOT, the most common reasons cars fail, and simple checks you can do at home first. A plain-English guide from our Castleford garage.",
    date: "2026-11-01",
    readMinutes: 4,
    image: "/images/blog/mot-bay.jpg",
    imageAlt: "The MOT bay ramp at Ignition Autocare in Castleford",
    intro:
      "Every car over three years old needs an MOT each year. It checks that your car meets the legal minimum standard for safety and emissions. Here is what is checked in an MOT, why cars fail, and what you can check yourself before you book.",
    sections: [
      {
        heading: "What is checked in an MOT?",
        paragraphs: [
          "An MOT tester follows the official DVSA checklist. It is the same test at every garage. The main areas are:",
        ],
        list: [
          "Lights, indicators and the horn",
          "Brakes, including how well they stop the car",
          "Tyres and wheels, including tread depth (at least 1.6mm)",
          "Steering and suspension",
          "Seat belts and seats",
          "Windscreen, wipers and washers",
          "Mirrors, number plates and the VIN",
          "Exhaust, fuel system and emissions",
          "The body and structure, checked for serious rust or sharp edges",
        ],
      },
      {
        heading: "What an MOT does not check",
        paragraphs: [
          "An MOT is not a service. It does not check the condition of the engine, clutch or gearbox, and it does not change your oil. A car can pass its MOT and still need a service, so it is worth booking both together.",
        ],
      },
      {
        heading: "The most common reasons cars fail",
        paragraphs: [
          "Many MOT failures are small things that are easy to fix before the test:",
        ],
        list: [
          "A blown bulb in a headlight, brake light or number plate light",
          "Tyres below the legal tread depth, or with cuts and bulges",
          "Worn brake pads or discs",
          "Wipers that smear, or an empty washer bottle",
          "A warning light left on, such as the airbag or ABS light",
        ],
      },
      {
        heading: "Quick checks you can do at home",
        paragraphs: [
          "Walk round the car with the lights on and check every bulb. Ask someone to press the brake pedal so you can check the brake lights. Top up the screen wash. Check your tyres with a 20p coin: if you can see the outer band of the coin in the tread, the tread may be too low. Make sure the number plates are clean and easy to read.",
        ],
      },
      {
        heading: "How much does an MOT cost?",
        paragraphs: [
          "The government sets a maximum MOT fee of £54.85 for cars. At our Castleford garage an MOT is £40 on its own, or £34.85 when you book it with a Full or Major Service. Bookings are drop-off: bring your car in on the day and we call you when it is ready.",
        ],
      },
    ],
    cta: { label: "Book your MOT", href: "/mot" },
  },
  {
    slug: "wet-belt-warning-signs",
    title: "Wet Belt Warning Signs: Ford EcoBoost and PureTech Engines",
    metaTitle: "Wet Belt Warning Signs | Ignition Autocare",
    description:
      "Wet belt warning signs on Ford EcoBoost and 1.2 PureTech engines, why the belt wears and what replacement costs. Advice from our Castleford garage.",
    date: "2026-11-01",
    readMinutes: 4,
    image: "/images/garage/wet-belt-video-poster.jpg",
    imageAlt: "Wet belt replacement on a Ford Ranger at Ignition Autocare",
    intro:
      "Many modern small petrol engines use a wet belt: a timing belt that runs inside the engine, bathed in oil. These engines are economical, but the belt needs care. Here are the wet belt warning signs to look out for, and what to do if you spot them.",
    sections: [
      {
        heading: "What is a wet belt?",
        paragraphs: [
          "A wet belt, also called a belt-in-oil, does the same job as a normal cambelt: it keeps the engine's moving parts in time. The difference is that it sits inside the engine in the oil. It is common on the Ford 1.0 EcoBoost and on 1.2 PureTech engines used by Peugeot, Citroën and Vauxhall.",
        ],
      },
      {
        heading: "Why wet belts wear out",
        paragraphs: [
          "The belt is sensitive to the oil it runs in. The wrong oil, missed services or lots of short journeys can make it break down early. Small pieces of the belt can then block the oil pick-up, which starves the engine of oil.",
        ],
      },
      {
        heading: "Wet belt warning signs",
        list: [
          "The oil pressure warning light comes on, even briefly",
          "Black flakes in the oil or on the dipstick",
          "The engine management light comes on",
          "Brake pedal feels harder than usual (on some engines, belt debris can affect the brake vacuum pump)",
          "Unusual rattling or ticking noises from the engine",
        ],
        after: [
          "If the oil pressure light comes on, stop as soon as it is safe and do not keep driving. Driving on with low oil pressure can badly damage the engine.",
        ],
      },
      {
        heading: "How often should a wet belt be replaced?",
        paragraphs: [
          "It depends on the engine. Ford quotes 10 years or 150,000 miles for the 1.0 EcoBoost, while the interval for the 1.2 PureTech was reduced to 6 years or 62,000 miles. Your car's service history and the way it is driven also matter, so a check before it is due is the safest option.",
        ],
      },
      {
        heading: "What does wet belt replacement cost?",
        paragraphs: [
          "Wet belt replacement is a bigger job than a normal cambelt, because the sump has to come off and the oil system must be cleaned. At our Castleford garage most wet belt replacements cost between £900 and £1,500, depending on the vehicle. We offer a free wet belt check first and confirm the exact price before any work starts.",
        ],
      },
    ],
    cta: { label: "Get a wet belt quote", href: "/wet-belt-replacement" },
  },
  {
    slug: "interim-full-or-major-service",
    title: "Interim, Full or Major Service: Which One Does Your Car Need?",
    metaTitle: "Interim, Full or Major Service? | Ignition Autocare",
    description:
      "The difference between an interim, full and major car service, how often you need each one, and how to choose. A simple guide from our Castleford garage.",
    date: "2026-11-01",
    readMinutes: 3,
    image: "/images/garage/engine-service.jpg",
    imageAlt: "Technician testing a car battery during a service",
    intro:
      "Servicing keeps your car reliable and helps it hold its value. But with three types of service on offer, it is not always clear which one you need. Here is a simple guide to the difference between an interim, full and major service.",
    sections: [
      {
        heading: "Interim service: every 6 months or 6,000 miles",
        paragraphs: [
          "An interim service suits cars that do more than 12,000 miles a year. It covers an oil and filter change, fluid top-ups, tyre condition, a battery check, a brake visual inspection and a safety check of key components. Think of it as a top-up between full services.",
        ],
      },
      {
        heading: "Full service: every 12 months or 12,000 miles",
        paragraphs: [
          "A full service is our most popular option and suits most drivers once a year. It covers everything in the interim service plus the air filter, a brake fluid condition check, and a full multi-point inspection of the brakes, suspension, steering and exhaust.",
        ],
      },
      {
        heading: "Major service: every 24 months or 24,000 miles",
        paragraphs: [
          "A major service is the most thorough. It includes everything in the full service plus a deeper inspection of the car's components for long-term reliability. Many drivers alternate between a full service one year and a major service the next.",
        ],
      },
      {
        heading: "How to choose",
        list: [
          "High mileage, more than 12,000 miles a year: add an interim service between full services",
          "Average mileage: a full service every year",
          "Every second year, or if you are unsure when the car was last serviced: a major service",
        ],
        after: [
          "Your car's handbook or service book shows the manufacturer's schedule, and we are always happy to advise.",
        ],
      },
      {
        heading: "A video with every service",
        paragraphs: [
          "Every service at our Castleford garage comes with a free video health check sent to your phone, so you can see what we found before you agree to any extra work. You can also add an MOT to a Full or Major Service for £34.85.",
        ],
      },
    ],
    cta: { label: "Book a service", href: "/car-servicing" },
  },
  {
    slug: "dashboard-warning-lights",
    title: "Dashboard Warning Lights: Which Ones Mean Stop Now?",
    metaTitle: "Dashboard Warning Lights Explained | Ignition Autocare",
    description:
      "Which dashboard warning lights mean stop now and which mean book a check soon. A simple guide to red and amber lights from our Castleford garage.",
    date: "2026-11-01",
    readMinutes: 3,
    image: "/images/garage/diagnostics-banner.jpg",
    imageAlt: "Technician running a diagnostic check on a car",
    intro:
      "A warning light on the dashboard can be worrying. The good news is that the colour tells you how urgent it is. Here is a simple guide to the most common dashboard warning lights and what to do about each one.",
    sections: [
      {
        heading: "Red lights: stop when it is safe",
        paragraphs: [
          "A red warning light means a serious problem. Pull over when it is safe, turn off the engine and get advice before driving on.",
        ],
        list: [
          "Oil pressure: the engine may be short of oil. Driving on can destroy the engine",
          "Engine temperature: the engine is overheating. Let it cool before checking the coolant",
          "Brake warning: there may be a problem with the brakes or brake fluid",
          "Battery or charging: the battery is not charging and the car may soon stop",
        ],
      },
      {
        heading: "Amber lights: book a check soon",
        paragraphs: [
          "An amber light means something needs looking at, but you can usually drive carefully to a garage.",
        ],
        list: [
          "Engine management: a fault with the engine or emissions system. If it flashes, reduce speed and get it checked quickly",
          "ABS: the anti-lock brakes may not work, although normal braking should still work",
          "Tyre pressure: one or more tyres may be low",
          "Airbag: the airbags may not work in a crash. This is also an MOT fail",
          "Glow plug or DPF (diesel cars): book a check before it gets worse",
        ],
      },
      {
        heading: "Why guessing can cost more",
        paragraphs: [
          "The same light can have many causes. A proper diagnostic check reads the fault codes stored in the car, so the real cause is found instead of replacing parts that are not faulty.",
        ],
      },
      {
        heading: "Diagnostics at our Castleford garage",
        paragraphs: [
          "We use Bosch diagnostic equipment that reads fault codes across the engine, ABS, airbags, gearbox and more. Most checks take one to two hours, and we explain what we found before any repair goes ahead.",
        ],
      },
    ],
    cta: { label: "Book a diagnostic check", href: "/diagnostics" },
  },
  {
    slug: "how-to-check-your-tyres",
    title: "How to Check Your Tyres in Five Minutes",
    metaTitle: "How to Check Your Tyres | Ignition Autocare",
    description:
      "How to check your tyres for tread depth, pressure and damage in five minutes, and when they need replacing. Simple tyre advice from our Castleford garage.",
    date: "2026-11-01",
    readMinutes: 3,
    image: "/images/garage/tyre-stock.jpg",
    imageAlt: "Tyres in stock at Ignition Autocare in Castleford",
    intro:
      "Your tyres are the only part of the car that touches the road, so they matter for braking, steering and grip in the wet. Here is how to check your tyres in about five minutes.",
    sections: [
      {
        heading: "1. Check the tread depth",
        paragraphs: [
          "The legal minimum tread depth for cars in the UK is 1.6mm across the central three-quarters of the tyre. A quick way to check is the 20p test: put a 20p coin into the main grooves. If you can see the outer band of the coin, the tread may be close to the limit and should be checked properly. Many experts suggest replacing tyres at around 3mm, because grip in the wet drops as the tread wears.",
        ],
      },
      {
        heading: "2. Check the pressure",
        paragraphs: [
          "Check pressures when the tyres are cold, using the figures in your handbook, on the driver's door frame or inside the fuel flap. Low pressure wears tyres faster, increases fuel use and makes the car handle worse.",
        ],
      },
      {
        heading: "3. Look for damage",
        list: [
          "Cuts or cracks in the sidewall",
          "Bulges or lumps, which can mean internal damage",
          "Nails or screws in the tread",
          "Uneven wear, such as one edge wearing faster than the other",
        ],
        after: [
          "A bulge in the sidewall is dangerous and the tyre should be replaced before driving far.",
        ],
      },
      {
        heading: "4. Uneven wear can mean alignment problems",
        paragraphs: [
          "If the inside or outside edge of a tyre is wearing faster, the wheel alignment may be out. Fixing the alignment protects your new tyres and can improve handling.",
        ],
      },
      {
        heading: "Need new tyres?",
        paragraphs: [
          "We keep over 300 tyres in stock at our Castleford garage, from budget to premium brands, with same-day fitting available. Every tyre fitting includes wheel balancing.",
        ],
      },
    ],
    cta: { label: "See tyre options", href: "/tyres" },
  },
  {
    slug: "how-much-does-a-car-service-cost",
    title: "How Much Does a Car Service Cost in Castleford?",
    metaTitle: "How Much Does a Car Service Cost? | Ignition Autocare",
    description:
      "How much a car service costs in Castleford: interim, full and major service prices, what changes the price, and how to save by booking your MOT at the same time.",
    date: "2026-11-05",
    readMinutes: 3,
    image: "/images/garage/reception-desk.jpg",
    imageAlt: "The reception desk at Ignition Autocare in Castleford",
    intro:
      "It is one of the first questions drivers ask: how much does a car service cost? The honest answer is that it depends on the type of service and your car. Here are our prices, what changes them, and how to get the most for your money.",
    sections: [
      {
        heading: "Car service prices at our Castleford garage",
        list: [
          "Interim service: from £107.57. Oil and filter change, fluid top-ups and key safety checks.",
          "Full service: from £136.37. Everything in the interim plus an air filter and a full multi-point inspection.",
          "Major service: from £207.65. Everything in the full service plus deeper checks of the parts that wear over time.",
        ],
        after: [
          "Every service includes a free video health check, sent to your phone, so you can see what our technician found.",
        ],
      },
      {
        heading: "What changes the price?",
        paragraphs: [
          "The main things are engine size and the type of oil your car needs. Larger engines take more oil, and some cars need a specific manufacturer-approved oil. Some models also need extra parts at certain mileages, such as spark plugs or a cabin filter.",
          "That is why we price by registration. Enter your reg on our booking page and you see the exact price for your car before you book, with no hidden extras.",
        ],
      },
      {
        heading: "Which service do you need?",
        paragraphs: [
          "If you drive more than 12,000 miles a year, an interim service every six months is a good idea. Most drivers need a full service every 12 months, and a major service every two years. Our guide to interim, full and major servicing explains the difference in more detail.",
        ],
      },
      {
        heading: "Save by booking your MOT at the same time",
        paragraphs: [
          "Our MOT is £40, or just £34.85 when you book it with a full or major service. It is one visit instead of two, and if anything needs fixing to pass, we can do it while the car is already with us.",
        ],
      },
      {
        heading: "Is a cheap service worth it?",
        paragraphs: [
          "Be careful with very low prices. A cheap service may skip checks or use lower-grade oil. Ask what is included. We follow your manufacturer's schedule and stamp your service book, so your warranty stays protected.",
        ],
      },
    ],
    cta: { label: "Get your exact service price", href: "/car-servicing" },
  },
  {
    slug: "car-aircon-regas-signs-and-cost",
    title: "Does Your Car Need an Aircon Regas? Signs, Cost and How Often",
    metaTitle: "Car Aircon Regas: Signs, Cost & How Often | Ignition Autocare",
    description:
      "Signs your car needs an aircon regas, how often to do it and what it costs in Castleford. Plain-English advice from our air conditioning technicians.",
    date: "2026-11-05",
    readMinutes: 3,
    image: "/images/garage/aircon-machine.jpg",
    imageAlt: "The air conditioning regas machine at Ignition Autocare",
    intro:
      "Car air conditioning slowly loses gas over time, even when nothing is wrong. When it runs low, the air stops getting cold. A regas puts it right. Here is how to tell if your car needs one, how often to do it and what it costs.",
    sections: [
      {
        heading: "Signs your car needs an aircon regas",
        list: [
          "The air from the vents is cool rather than cold, or warm",
          "It takes much longer to cool the car down than it used to",
          "The windscreen takes ages to demist",
          "A musty smell when you turn the system on",
        ],
        after: [
          "A musty smell usually means bacteria in the system rather than low gas, but we can treat that at the same time.",
        ],
      },
      {
        heading: "How often should you regas your car?",
        paragraphs: [
          "Most manufacturers recommend an air conditioning service every two years. Running the system for a few minutes every week, even in winter, also helps keep the seals in good condition.",
        ],
      },
      {
        heading: "How much does an aircon regas cost?",
        paragraphs: [
          "At our Castleford garage, a regas starts from £74.99 for cars using R134a gas. Most cars from 2017 onwards use the newer R1234yf gas, which costs more to buy, so a regas for those cars is £139.99. It takes about an hour.",
        ],
      },
      {
        heading: "What we do during a regas",
        paragraphs: [
          "We recover the old gas, test the system to make sure it holds pressure, then refill it with the exact weight of gas your car needs. A rough top-up can over or under fill the system, which makes it work harder and cool less.",
        ],
      },
      {
        heading: "What if it still isn't cold?",
        paragraphs: [
          "If the system won't hold gas, there is a leak. We can find it and quote for the repair before doing any work, so you are never surprised by the bill.",
        ],
      },
    ],
    cta: { label: "Book an aircon regas", href: "/air-conditioning" },
  },
  {
    slug: "how-to-choose-a-garage-near-me",
    title: "How to Choose a Good Garage Near You: 7 Things to Check",
    metaTitle: "How to Choose a Good Garage Near Me | Ignition Autocare",
    description:
      "Searching for a garage near me? Seven simple things to check before you book, from reviews and approvals to clear prices, so you choose a garage you can trust.",
    date: "2026-11-05",
    readMinutes: 4,
    image: "/images/garage/garage-exterior-v2.jpg",
    imageAlt: "The Ignition Autocare garage on Colorado Way, Castleford",
    intro:
      "When you search for a garage near me, you get a long list of names. Some are excellent and some are not. These seven checks help you find a garage you can trust with your car and your money.",
    sections: [
      {
        heading: "1. Read the Google reviews",
        paragraphs: [
          "Look at the number of reviews as well as the star rating. A garage with hundreds of recent reviews has a track record you can check. Read the low reviews too, and see how the garage replied.",
        ],
      },
      {
        heading: "2. Check for approvals",
        paragraphs: [
          "Independent approvals, such as being a Bosch Car Service garage, mean the workshop has been assessed on its equipment, training and customer service. For MOTs, make sure the garage is DVSA approved.",
        ],
      },
      {
        heading: "3. Ask for a price before any work",
        paragraphs: [
          "A good garage tells you the price up front and asks before doing anything extra. If a garage won't give you a price until the work is done, go elsewhere.",
        ],
      },
      {
        heading: "4. Ask them to show you the problem",
        paragraphs: [
          "Being shown worn brake pads or a leaking part makes it easy to decide. We film a short video health check and send it to your phone, so you see exactly what our technician sees.",
        ],
      },
      {
        heading: "5. Check the guarantee",
        paragraphs: [
          "Ask how long parts and labour are guaranteed for. Twelve months is a good standard.",
        ],
      },
      {
        heading: "6. Make sure your warranty is protected",
        paragraphs: [
          "You don't have to use a main dealer to keep your warranty. An independent garage can service your car, as long as it follows the manufacturer's schedule and uses parts of matching quality.",
        ],
      },
      {
        heading: "7. Think about convenience",
        paragraphs: [
          "Can the garage collect your car, or lend you a courtesy car? Can you book online and get a price straight away? Small things like these make car maintenance much less of a hassle.",
        ],
      },
      {
        heading: "A local garage in Castleford",
        paragraphs: [
          "Ignition Autocare is a Bosch Approved independent garage on Colorado Way in Glasshoughton, serving Castleford, Pontefract, Normanton and the surrounding towns. We do MOTs, servicing, repairs, tyres and aircon, with hundreds of five-star Google reviews from local drivers.",
        ],
      },
    ],
    cta: { label: "Get an instant price", href: "/book" },
  },
];

export const BLOG_POSTS = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
