import type { SeoPageData } from "./seoData";
import { priceRange } from "./seoData";

const enMovingToTurkey: SeoPageData = {
  slug: "en/moving-to-turkey",
  lang: "en",
  hreflangGroup: "relocation",
  title: "Moving to Türkiye from Europe | Door-to-Door Removals",
  description:
    "Moving to Türkiye from Europe? Door-to-door van removals from Munich, Amsterdam, Paris and Vienna in 24-48 hours, no transhipment, insured and tracked.",
  h1: "Moving to Türkiye: Door-to-Door Removals from Europe",
  intro: [
    "If you are relocating to Antalya, Fethiye, Bodrum, Izmir or Istanbul, the hardest part of the move is rarely the flight — it is working out how to get your furniture, books, kitchen equipment and the things you actually care about from a European address to a Turkish one without them spending six weeks in a container yard. RouteEU Express moves household goods by dedicated van, collected at your door in Europe and delivered to your door in Türkiye, usually within 24 to 48 hours of departure.",
    "Your belongings are loaded once and unloaded once. There is no depot, no transhipment, no repacking by a local agent you have never met. Two drivers share the wheel so the vehicle keeps moving, the van is not affected by the weekend driving bans that hold up heavy trucks, everything travels under transport insurance, and you can watch the vehicle's position on a live map for the whole journey.",
  ],
  transitTable: {
    caption: "Indicative transit times to Istanbul",
    rows: [
      { destination: "Vienna → Istanbul", time: "20-32 hours" },
      { destination: "Munich → Istanbul", time: "24-36 hours" },
      { destination: "Paris → Istanbul", time: "28-44 hours" },
      { destination: "Amsterdam → Istanbul", time: "30-46 hours" },
    ],
  },
  priceTable: {
    caption: "Indicative removal rates for a full van",
    rows: [
      { route: "Munich → Istanbul", price: priceRange("Münih") },
      { route: "Vienna → Istanbul", price: priceRange("Viyana") },
      { route: "Amsterdam → Istanbul", price: priceRange("Amsterdam") },
      { route: "Paris → Istanbul", price: priceRange("Paris") },
    ],
    disclaimer:
      "These are indicative ranges for a full van of roughly 1,300 kg / 5 euro pallets / 13.5 m³ and vary with season, fuel and demand. Onward delivery beyond Istanbul to the coast is quoted separately. If you are moving only part of a household, you pay for the volume you use — request a quotation in the app for a figure based on your own address and inventory.",
  },
  sections: [
    {
      heading: "Who this service is for",
      paragraphs: [
        "Most of the people we move fall into one of four groups. Retirees buying or renting on the Turkish coast, who want their own bed, their own armchair and their own kitchen rather than starting again from a furniture showroom. Remote workers and digital nomads settling in Istanbul or Izmir, whose priority is a desk setup, monitors, an instrument or a bicycle arriving intact. Families relocating for a partner's job, moving a full household. And people going the other way — professionals finishing a posting in Türkiye and moving back to Germany, the Netherlands, Belgium or France.",
        "The common thread is scale. A full 40-foot container is far more space than most of these moves need, and an international parcel service becomes absurdly expensive once a wardrobe or a sofa is involved. A single van of about 13.5 m³ covers a one or two-bedroom home comfortably, and for anything smaller you can book part of a van and pay for the volume you actually occupy.",
      ],
    },
    {
      heading: "Should you ship your furniture at all?",
      paragraphs: [
        "Before you book anything, it is worth being honest about what deserves a place in the van, because moving everything is rarely the cheapest or the smartest option. Türkiye runs on 220-240 V at 50 Hz with Europlug and Schuko-type sockets, so appliances from Germany, Austria, the Netherlands, Belgium and France generally work without conversion — but UK equipment needs adapters, and anything designed for a different voltage or fitted to a specific kitchen carcass is often more trouble than it is worth. Bulky flat-pack furniture is another common regret: a wardrobe that cost a few hundred euros new can easily take up a quarter of the load space, and the same money buys a replacement locally.",
        "The other half of that decision is the part removal companies rarely volunteer. Cheap flat-pack shelving, a three-year-old sofa, garden furniture, half-empty tins of paint and the contents of the loft cost real money to move and almost nothing to replace in Türkiye, where furniture, white goods and household basics are widely available and often cheaper than in Northern Europe. Selling or donating those items before you go usually saves more than it costs you in replacements. A simple rule works well: for each large item, ask what it would cost to buy the equivalent locally, and compare that with the share of the van it will occupy.",
        "What is genuinely worth shipping, in our experience, is everything that fails that test in the opposite direction — the pieces that are expensive to replace, impossible to replace, or that make an unfamiliar flat feel like home:",
      ],
      list: [
        "Solid, well-made or antique furniture, and anything with sentimental value",
        "Beds and good mattresses, which are surprisingly expensive to replace",
        "Books, records, artwork, musical instruments and hobby equipment",
        "Professional tools, workshop machinery, studio and photographic kit",
        "Bicycles, sports gear and outdoor equipment",
        "Kitchenware and linens you have already invested in",
      ],
    },
    {
      heading: "Road transport versus a shipping container",
      paragraphs: [
        "The traditional route for an international move is a shipping container, and for very large households it can still be the right answer. Once you are moving the contents of a four or five-bedroom house, a car, or a workshop full of machinery, the cost per cubic metre in a 20 or 40-foot container is hard to beat, and it is worth getting a sea freight quotation alongside ours.",
        "For everything below that threshold, road transport usually wins on the two things people care about most. Time: a van leaves your address and arrives at the Turkish address in one to two days, whereas a container move from Northern Europe to a Turkish port typically runs to four to eight weeks door to door once you count collection, stuffing, sailing, port clearance and onward delivery. Handling: a container is loaded at your home, unloaded at the port of origin, restowed, unloaded again at destination and transferred to a local truck — five or six touch points, each one a chance for something to be dropped, scuffed or mislaid. Our van is loaded at your old address and opened again at your new one.",
      ],
    },
    {
      heading: "Customs and personal effects",
      paragraphs: [
        "Used household goods and personal effects are treated differently from commercial cargo when they enter Türkiye. In general terms, the framework covers people transferring their normal residence to Türkiye — typically supported by a residence permit or the appropriate visa, a detailed inventory of the goods with approximate values, a passport copy and the transport documents — and household items that have been in your use rather than newly purchased for the move. Certain categories, notably vehicles, alcohol, tobacco, firearms and some electronics, sit outside the normal personal-effects treatment and follow their own rules.",
        "We prepare the inventory with you, coordinate the file with a customs broker at the Turkish border and keep the vehicle moving while the declaration is processed. What we will not do is quote you a duty figure or promise an exemption, because the thresholds, time limits and documentary requirements change and they depend on your personal status. Please confirm the current rules for your own situation with a licensed customs broker or the relevant customs authority before you pack — this page describes the general framework and is not a substitute for professional advice.",
      ],
    },
    {
      heading: "How the move works, step by step",
      paragraphs: [
        "A typical relocation runs in four stages, and you can follow each one from the app:",
      ],
      list: [
        "Quotation — tell us the collection and delivery addresses and roughly what you are moving, in rooms or in cubic metres, and you will get an indicative price straight away. A short video walk-through of your home is usually enough for us to confirm it.",
        "Collection — the van arrives at your European address on the agreed date. We load, secure and blanket-wrap the furniture, and hand you the inventory and consignment note.",
        "In transit — the vehicle runs through with two drivers, clears customs at the Turkish border with your broker, and its position stays visible on the live map.",
        "Delivery — the same van pulls up at your new address in Türkiye and the goods are carried in. No warehouse, no local agent, nothing to collect from a depot.",
      ],
    },
    {
      heading: "Insurance, contract and live tracking",
      paragraphs: [
        "Every move is carried out under a written transport contract with a CMR consignment note and an itemised inventory, so what left the house is documented before the doors close. All goods travel under transport insurance; for higher-value items — artwork, instruments, professional equipment — we agree the declared value and the scope of cover in writing at the quotation stage rather than leaving it to be argued about later.",
        "Tracking is live rather than a daily status message. You see the vehicle on a map at any hour, which matters more than it sounds when you are waiting in an empty flat in Antalya trying to decide whether the delivery lands today or tomorrow. One company handles the whole movement, so there is one phone number to call and one invoice at the end.",
      ],
    },
    {
      heading: "Moving the other way: Türkiye to Europe",
      paragraphs: [
        "The service is symmetrical. If your contract in Istanbul has ended, or you are returning to Europe after several years on the coast, we run the same door-to-door removals from Turkish addresses to Germany, Austria, the Netherlands, Belgium, France, Italy, Switzerland, Poland and Scandinavia, with the same transit times, the same insurance and the same live tracking.",
        "Return legs are frequently cheaper than one-way movements, because a vehicle that has already delivered in Türkiye would otherwise travel back empty. If your dates are even slightly flexible, say so when you request the quotation — it can make a noticeable difference to the price. Customs formalities in the export direction follow the rules of the destination country, and the same advice applies: confirm the current requirements with a customs broker before you pack.",
      ],
    },
  ],
  faq: [
    {
      question: "How long does a move from Europe to Türkiye take?",
      answer:
        "The road leg is fast: Vienna to Istanbul is typically 20 to 32 hours, Munich 24 to 36, Paris 28 to 44 and Amsterdam 30 to 46 hours door to door. Add a little time for customs clearance at the border and for onward delivery if your new address is on the coast rather than in Istanbul. A container move over the same route normally takes four to eight weeks.",
    },
    {
      question: "How much does it cost to move my belongings to Türkiye?",
      answer:
        "A full van from Amsterdam to Istanbul falls in the range of " +
        priceRange("Amsterdam") +
        ", with other departure cities shown in the rate table above. If you are moving less than a full load, you pay for the volume you occupy instead of the whole vehicle. Send us the addresses and a rough inventory in the app and you will get an indicative figure within seconds.",
    },
    {
      question: "Do I have to pay import duty on my personal belongings?",
      answer:
        "Used household goods brought in by someone transferring their residence to Türkiye are handled under a personal-effects regime rather than as commercial imports, normally on the basis of a residence permit or appropriate visa, a detailed inventory and proof that the items were in your use. Vehicles, alcohol, tobacco and some other categories are excluded from that treatment. The thresholds and paperwork change, so confirm your own position with a licensed customs broker or the customs authority before shipping; this answer describes the general framework and is not formal advice.",
    },
    {
      question: "Can I send just a few boxes rather than a whole household?",
      answer:
        "Yes. Part-load space is available on scheduled departures, so a dozen boxes, a bicycle and a desk can travel without you hiring a whole vehicle. You pay for the volume and weight you use, and the goods still go door to door without being transhipped along the way.",
    },
    {
      question: "Do you disassemble and pack furniture?",
      answer:
        "Our crews dismantle standard furniture such as beds, wardrobes and tables at collection and reassemble them on delivery, and everything is blanket-wrapped and secured in the van. Full packing of crockery, glassware and small items can be arranged in advance if you prefer not to do it yourself — mention it when you request the quotation so it is included in the price.",
    },
    {
      question: "Are my belongings insured while in transit?",
      answer:
        "Yes. Every move travels under transport insurance, backed by a written contract and an itemised inventory taken at loading. For artwork, instruments, professional equipment or anything else of unusual value, we agree the declared value and the cover in writing before the van is loaded.",
    },
    {
      question: "Can I track the van during the journey?",
      answer:
        "Yes. Each vehicle carries live GPS tracking and you can see its position on a map at any time of day or night, right up to the moment it reaches your new address. You also have a single point of contact for the whole move rather than being passed between agents in two countries.",
    },
  ],
  related: [
    { slug: "en/express-van-transport-turkey", label: "Express Van Transport Türkiye to Europe" },
  ],
};

export default enMovingToTurkey;
