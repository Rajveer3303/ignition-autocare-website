/**
 * Area pages (/areas/<slug>). One page per town, with its neighbouring villages
 * folded in rather than a thin page each, which Google treats as doorway pages.
 *
 * Distances and drive times are road routes from WF10 4FA (OpenStreetMap / OSRM,
 * Oct 2026). Miles are rounded to the nearest half mile. Minutes are the routed
 * time plus ~30% for traffic, rounded up to 5, so they are realistic rather than
 * best-case.
 *
 * Copy rules: we are based in Castleford and serve these towns. Never imply a
 * branch, address or staff in the town itself.
 */

export type Place = { name: string; miles: number; minutes: number };

export type Town = {
  slug: string;
  /** Main town, used in short labels: "Pontefract". */
  name: string;
  /** Every place the page covers, main town first. */
  places: Place[];
  /** Estates and nearby spots we mention by name (not separate pages). */
  nearby: string[];
  postcode: string;
  /** Opening paragraph under the H1. */
  intro: string;
  /** Town-specific body copy. */
  local: string[];
  image: string;
  imagePosition?: string;
  imageAlt: string;
  /** Extra town-specific questions; the shared ones are added on the page. */
  faqs: { q: string; a: string }[];
};

export const TOWNS: Town[] = [
  {
    slug: "pontefract",
    name: "Pontefract",
    places: [
      { name: "Pontefract", miles: 3, minutes: 10 },
      { name: "Ackworth", miles: 6.5, minutes: 20 },
      { name: "Darrington", miles: 6, minutes: 15 },
    ],
    nearby: ["Carleton", "Chequerfield", "Tanshelf", "Ackworth Moor Top"],
    postcode: "WF7, WF8",
    intro:
      "Ignition Autocare is about three miles from Pontefract town centre, just over Junction 32 of the M62. Book your MOT, service or repair online in a couple of minutes, drop your car in on the way to work, or let us collect it from your door for free.",
    local: [
      "From Carleton, Chequerfield or Tanshelf, the run to our garage on Colorado Way is usually around ten minutes. Drop your car off in the morning and pick it up later the same day, or grab a coffee at the Costa across the road while you wait for your MOT.",
      "If you live further out in Ackworth or Darrington, our free collection and delivery service means you don't have to make the trip at all. We collect your car from home or work, carry out the work at our Castleford garage, send you a video of anything we find, and bring it back.",
    ],
    image: "/images/garage/exterior-front.jpg",
    imageAlt: "Ignition Autocare garage on Colorado Way, Castleford, serving Pontefract",
    faqs: [
      {
        q: "How far is Ignition Autocare from Pontefract?",
        a: "Our garage on Colorado Way, Castleford (WF10 4FA) is about 3 miles from Pontefract town centre, usually around a 10-minute drive via Junction 32 of the M62. From Darrington it's about 6 miles and from Ackworth about 6.5 miles.",
      },
      {
        q: "Do you collect cars from Ackworth and Darrington?",
        a: "Yes. Ackworth and Darrington are well inside our 20-mile collection area. Collection and delivery is free for most service and repair bookings. It isn't available for MOT-only bookings, but it is included when you book an MOT with a service.",
      },
    ],
  },
  {
    slug: "normanton",
    name: "Normanton",
    places: [
      { name: "Normanton", miles: 4, minutes: 15 },
      { name: "Altofts", miles: 6, minutes: 15 },
    ],
    nearby: ["Snydale", "Warmfield"],
    postcode: "WF6",
    intro:
      "Ignition Autocare is about four miles from Normanton, an easy drive along the A655. Book an MOT, service, diagnostics or repair online with your reg for an instant price, or let us collect your car from Normanton or Altofts for free.",
    local: [
      "Normanton and Altofts drivers don't need to head into Wakefield or Leeds for dealer-standard work. We're a Bosch Approved garage with Level 3 qualified technicians, using Bosch diagnostic equipment throughout, at independent garage prices.",
      "Most jobs are booked in and finished the same day. If you'd rather not make the trip, we'll collect your car from your home or workplace in Normanton or Altofts and drop it back once the work is done. You'll get a video of anything we find, and nothing goes ahead without your approval.",
    ],
    image: "/images/garage/exterior-branded.jpg",
    imageAlt: "Ignition Autocare garage in Castleford, serving Normanton and Altofts",
    faqs: [
      {
        q: "How far is Ignition Autocare from Normanton?",
        a: "We're about 4 miles from Normanton, usually around 15 minutes by car along the A655. From Altofts it's about 6 miles.",
      },
      {
        q: "Can you collect my car from Altofts?",
        a: "Yes. Altofts and Normanton are both within our 20-mile collection area, and collection and delivery is free for most service and repair bookings. Collection isn't available for MOT-only bookings, but it is when you book an MOT together with a service.",
      },
    ],
  },
  {
    slug: "featherstone",
    name: "Featherstone",
    places: [{ name: "Featherstone", miles: 3.5, minutes: 10 }],
    nearby: ["Purston Jaglin", "North Featherstone", "Ackton"],
    postcode: "WF7",
    intro:
      "Featherstone is one of our closest neighbours, about three and a half miles from our Castleford garage. Book your MOT, service or repair online in a couple of minutes, or let us collect your car for free.",
    local: [
      "Because we're so close, it's easy to drop your car off in the morning and collect it later the same day. If that doesn't suit, our free collection and delivery service brings the garage to you: we pick your car up from home or work and bring it back when it's done.",
      "Every Full and Major Service includes a video health check sent to your phone, so you can see exactly what our technicians found. We quote before we start, and nothing is done without your say-so.",
    ],
    image: "/images/garage/workshop-red-car.jpg",
    imageAlt: "Cars on the ramps in the Ignition Autocare workshop, serving Featherstone",
    faqs: [
      {
        q: "How far is Ignition Autocare from Featherstone?",
        a: "About 3.5 miles, usually around a 10-minute drive to our garage on Colorado Way, Castleford (WF10 4FA).",
      },
      {
        q: "Can I wait while my car has its MOT?",
        a: "Yes, you're welcome to wait, and there's a Costa Coffee just across the road. If you'd rather not wait, drop the car off and we'll call you when it's ready.",
      },
    ],
  },
  {
    slug: "knottingley",
    name: "Knottingley",
    places: [
      { name: "Knottingley", miles: 6.5, minutes: 20 },
      { name: "Ferrybridge", miles: 6, minutes: 15 },
      { name: "Brotherton", miles: 6.5, minutes: 15 },
      { name: "Fairburn", miles: 8, minutes: 15 },
    ],
    nearby: [],
    postcode: "WF11",
    intro:
      "Ignition Autocare looks after drivers from Knottingley, Ferrybridge, Brotherton and Fairburn. We're about six miles away and a quick run along the M62. Book online with your reg for an instant price, or let us collect your car for free.",
    local: [
      "With the M62 and A1(M) on the doorstep, many drivers in Knottingley and Ferrybridge cover a lot of miles. Regular servicing and correctly aligned wheels make a real difference to fuel economy and tyre wear. Our Level 3 qualified technicians use Bosch diagnostic equipment to keep high-mileage cars running properly.",
      "If you're in Brotherton or Fairburn and can't spare the time to drop your car off, we'll collect it from your home or workplace, carry out the work at our Castleford garage and deliver it back the same day for most jobs.",
    ],
    image: "/images/garage/exterior-signage.jpg",
    imageAlt: "Ignition Autocare MOT, tyres and autocare signage, serving Knottingley and Ferrybridge",
    faqs: [
      {
        q: "How far is Ignition Autocare from Knottingley and Ferrybridge?",
        a: "We're about 6 miles from Ferrybridge and 6.5 miles from Knottingley, usually 15 to 20 minutes by car. Brotherton is about 6.5 miles away and Fairburn about 8 miles.",
      },
      {
        q: "Do you collect from Brotherton and Fairburn?",
        a: "Yes. Both are inside our 20-mile collection area. Collection and delivery is free for most service and repair bookings. It isn't available for MOT-only bookings, but it is included when you book an MOT with a service.",
      },
    ],
  },
  {
    slug: "wakefield",
    name: "Wakefield",
    places: [
      { name: "Wakefield", miles: 8.5, minutes: 25 },
      { name: "Stanley", miles: 8.5, minutes: 20 },
    ],
    nearby: ["Outwood", "Lupset", "Agbrigg", "Sandal"],
    postcode: "WF1, WF2, WF3",
    intro:
      "Looking for a garage you can trust near Wakefield? Ignition Autocare is a Bosch Approved garage about eight and a half miles from the city centre. We offer dealer-standard servicing, MOTs and repairs at independent prices, with free collection and delivery.",
    local: [
      "Wakefield has no shortage of garages and main dealers, so it's worth knowing what sets us apart. We're independently assessed by Bosch, our technicians are Level 3 qualified, and every Full or Major Service comes with a video health check sent straight to your phone. It's the transparency of a main dealer without the main dealer bill.",
      "The drive from Wakefield or Stanley is usually 20 to 25 minutes, but you don't have to make it. Book online, add your address, and we'll collect your car from home or work, carry out the work and deliver it back.",
    ],
    image: "/images/garage/workshop-porsche.jpg",
    imageAlt: "Prestige car in the Ignition Autocare workshop, serving Wakefield",
    faqs: [
      {
        q: "How far is Ignition Autocare from Wakefield?",
        a: "Our garage in Castleford (WF10 4FA) is about 8.5 miles from Wakefield city centre and from Stanley, usually 20 to 25 minutes by car depending on traffic.",
      },
      {
        q: "Is an independent garage as good as a main dealer?",
        a: "We're a Bosch Approved garage with Level 3 qualified technicians, and we use Bosch diagnostic equipment and quality parts. You get dealer-level expertise without dealer prices. Having your car serviced by an independent garage doesn't affect your manufacturer warranty, as long as the work follows the manufacturer's schedule and uses parts of matching quality.",
      },
    ],
  },
  {
    slug: "garforth",
    name: "Garforth",
    places: [
      { name: "Garforth", miles: 7.5, minutes: 20 },
      { name: "Swillington", miles: 6.5, minutes: 25 },
    ],
    nearby: ["East Garforth", "Micklefield"],
    postcode: "LS25, LS26",
    intro:
      "Ignition Autocare serves drivers in Garforth and Swillington from our Bosch Approved garage in Castleford, about seven and a half miles away. Book online with your reg for an instant price, or let us collect your car for free.",
    local: [
      "Garforth and Swillington are part of Leeds, but our garage is often quicker to reach than heading into the city, and our prices are independent-garage prices. Every job is quoted before we start, and nothing extra is done without your approval.",
      "Our free collection and delivery service is ideal if you commute. We collect your car from home or work, carry out the work, and return it for most jobs the same day.",
    ],
    image: "/images/garage/interior-1.jpg",
    imageAlt: "Inside the Ignition Autocare workshop, serving Garforth and Swillington",
    faqs: [
      {
        q: "How far is Ignition Autocare from Garforth?",
        a: "About 7.5 miles, usually around 20 minutes by car. From Swillington it's about 6.5 miles.",
      },
      {
        q: "Can you collect from Garforth and return my car the same day?",
        a: "For most services and repairs, yes. Garforth and Swillington are inside our 20-mile collection area. We'll confirm the collection time and estimated return when you book.",
      },
    ],
  },
  {
    slug: "kippax-allerton-bywater",
    name: "Kippax & Allerton Bywater",
    places: [
      { name: "Kippax", miles: 5, minutes: 15 },
      { name: "Allerton Bywater", miles: 3, minutes: 10 },
    ],
    nearby: ["Great Preston", "Ledston", "Ledston Luck"],
    postcode: "LS25, WF10",
    intro:
      "Allerton Bywater and Kippax are right on our doorstep. Our Castleford garage is about three miles from Allerton Bywater and five from Kippax. Book your MOT, service or repair online in minutes, or let us collect your car for free.",
    local: [
      "Being this close means it's easy to drop your car off in the morning and pick it up later the same day. If you're in Kippax, Great Preston or Ledston and would rather not make the trip, our free collection and delivery service brings your car to us so you don't have to.",
      "We're a Bosch Approved garage with over 29 years of motor trade expertise. We send you a video of anything we find, quote clearly before we start, and never carry out work without your approval.",
    ],
    image: "/images/garage/exterior-5.jpg",
    imageAlt: "Ignition Autocare garage in Castleford, serving Kippax and Allerton Bywater",
    faqs: [
      {
        q: "How far is Ignition Autocare from Kippax and Allerton Bywater?",
        a: "We're about 3 miles from Allerton Bywater (around 10 minutes) and 5 miles from Kippax (around 15 minutes).",
      },
      {
        q: "Do you offer courtesy cars?",
        a: "Yes, we offer free courtesy cars so you can stay on the move while we work on your car. Ask when you book and we'll check availability for your date.",
      },
    ],
  },
  {
    slug: "rothwell-methley",
    name: "Rothwell & Methley",
    places: [
      { name: "Rothwell", miles: 7, minutes: 20 },
      { name: "Methley", miles: 3.5, minutes: 10 },
      { name: "Oulton", miles: 6, minutes: 20 },
      { name: "Woodlesford", miles: 6.5, minutes: 20 },
    ],
    nearby: ["Mickletown"],
    postcode: "LS26",
    intro:
      "Ignition Autocare serves Rothwell, Oulton, Woodlesford and Methley from our Bosch Approved garage in Castleford. Methley is about three and a half miles away and Rothwell about seven. Book online with your reg for an instant price, or let us collect your car for free.",
    local: [
      "If you're in Methley or Mickletown, we're one of your nearest garages. From Rothwell, Oulton and Woodlesford it's usually around 20 minutes. With free collection and delivery, the distance doesn't matter, because we come to you.",
      "Whether it's an MOT, a full service, brakes, tyres or a warning light that needs diagnosing, our Level 3 qualified technicians will explain what they've found in plain English, send you a video, and give you a clear price before any work starts.",
    ],
    image: "/images/garage/workshop-ramps.jpg",
    imageAlt: "Ramps in the Ignition Autocare workshop, serving Rothwell and Methley",
    faqs: [
      {
        q: "How far is Ignition Autocare from Rothwell?",
        a: "About 7 miles from Rothwell, 6 miles from Oulton and 6.5 miles from Woodlesford, usually around 20 minutes by car. Methley is closer, at about 3.5 miles.",
      },
      {
        q: "Do you collect from Oulton and Woodlesford?",
        a: "Yes. They're inside our 20-mile collection area, and collection and delivery is free for most service and repair bookings. It isn't available for MOT-only bookings, but it is included when you book an MOT with a service.",
      },
    ],
  },
  {
    slug: "selby",
    name: "Selby",
    places: [{ name: "Selby", miles: 16.5, minutes: 30 }],
    nearby: ["Brayton", "Thorpe Willoughby", "Barlby"],
    postcode: "YO8",
    intro:
      "Ignition Autocare serves drivers in Selby from our Bosch Approved garage in Castleford, about sixteen and a half miles away along the M62. With free collection and delivery for most bookings, you don't need to make the trip.",
    local: [
      "Selby is towards the edge of our 20-mile collection area, so collection and delivery is the easiest way to use us. Book online, add your home or work address, and we'll pick your car up, carry out the work at our Castleford garage and bring it back. If there's ever a charge for collection at this distance, we'll tell you before you confirm.",
      "Drivers in Selby, Brayton and Thorpe Willoughby get dealer-standard work at independent prices: Bosch Approved, Level 3 qualified technicians, and a video health check with every Full or Major Service so you can see exactly what we found.",
    ],
    image: "/images/garage/exterior-aerial.jpg",
    imageAlt: "Aerial view of Ignition Autocare garage in Castleford, serving Selby",
    faqs: [
      {
        q: "How far is Ignition Autocare from Selby?",
        a: "About 16.5 miles, usually around 30 minutes by car via the M62.",
      },
      {
        q: "Is collection free from Selby?",
        a: "Selby is inside our 20-mile collection area, and collection and delivery is free for most bookings. Because it's towards the outer edge, we'll confirm before you book whether any charge applies to your address. Collection isn't available for MOT-only bookings.",
      },
    ],
  },
];

/** Castleford districts served by the homepage rather than an area page. */
export const CASTLEFORD_AREAS = ["Glasshoughton", "Airedale", "Whitwood", "Castleford town centre"];

export function getTown(slug: string) {
  return TOWNS.find((t) => t.slug === slug);
}

/** "Pontefract, Darrington & Ackworth" */
export function placeList(town: Town) {
  const names = town.places.map((p) => p.name);
  return names.length > 1 ? `${names.slice(0, -1).join(", ")} & ${names[names.length - 1]}` : names[0];
}
