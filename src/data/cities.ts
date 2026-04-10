/**
 * DYNAMIC DATA LAYER — City Hubs
 *
 * Central source of truth for all city-level data.
 * Each city has its own hub page (e.g., /albany, /corvallis).
 * Market numbers pulled from Q1 2026 MLS data in market.ts.
 */

export interface CityHighlight {
  label: string;
  value: string;
  detail?: string;
}

export interface CityNeighborhood {
  name: string;
  slug?: string;            // internal link if we have a page
  tagline: string;
  priceRange: string;
  character: string;
}

export interface CityEmployer {
  name: string;
  sector: string;
  employees?: string;
}

export interface CityHub {
  slug: string;              // URL path: /albany, /corvallis
  name: string;
  state: string;
  county: string;
  tagline: string;
  heroDescription: string;
  population: number;
  populationGrowth: string;  // e.g., "+1.2% annually"
  distanceFromLebanon: string;
  driveTime: string;

  // Market data (Q1 2026)
  avgSoldPrice: number;
  avgListPrice: number;
  avgDOM: number;
  numberSold: number;
  activeListings: number;
  pricePerSqft: number;
  yoyPriceChange: number;    // percentage
  prevYearAvgPrice: number;
  prevYearSold: number;

  // Content
  highlights: CityHighlight[];
  whyLiveHere: string[];
  neighborhoods: CityNeighborhood[];
  topEmployers: CityEmployer[];
  schoolDistrict: string;
  schoolHighlights: string[];
  outdoorRec: string[];
  comparedToLebanon: string; // one-paragraph comparison
  faqs: { question: string; answer: string }[];
}

// ─── ALBANY ─────────────────────────────────────────────────
export const albany: CityHub = {
  slug: "albany",
  name: "Albany",
  state: "Oregon",
  county: "Linn County",
  tagline: "Historic charm meets Willamette Valley affordability",
  heroDescription:
    "Albany blends small-town character with urban convenience. A hub for antique lovers and history buffs, Albany offers diverse housing stock, strong schools, and easy access to both Salem and Corvallis.",
  population: 56828,
  populationGrowth: "+1.2% annually",
  distanceFromLebanon: "12 miles west",
  driveTime: "15 minutes via US-20",

  avgSoldPrice: 446343,
  avgListPrice: 449479,
  avgDOM: 97,
  numberSold: 147,
  activeListings: 137,
  pricePerSqft: 265,
  yoyPriceChange: -1.5,
  prevYearAvgPrice: 452907,
  prevYearSold: 133,

  highlights: [
    { label: "Avg Sold Price", value: "$446K", detail: "Q1 2026" },
    { label: "Homes Sold Q1", value: "147", detail: "Up from 133" },
    { label: "Avg Days on Market", value: "97", detail: "Residential <1 acre" },
    { label: "Active Listings", value: "137", detail: "Current inventory" },
  ],

  whyLiveHere: [
    "Largest historic districts in Oregon — 700+ historic homes across four designated districts",
    "Affordable compared to Corvallis ($446K vs $593K) with similar amenities",
    "Central Willamette Valley location: 25 min to Salem, 15 min to Corvallis, 15 min to Lebanon",
    "Strong job market with major employers in healthcare, manufacturing, and government",
    "Excellent parks system including Timber-Linn Memorial Park and over 30 developed parks",
    "Active arts and culture scene with the Albany Civic Theater and numerous festivals",
  ],

  neighborhoods: [
    {
      name: "Historic Districts",
      tagline: "Victorian and craftsman homes downtown",
      priceRange: "$280K–$450K",
      character:
        "Four National Register historic districts with over 700 homes ranging from 1850s Queen Anne to 1920s Craftsman. Walkable to downtown shops and restaurants.",
    },
    {
      name: "North Albany",
      tagline: "Family-friendly with Corvallis commute access",
      priceRange: "$400K–$600K",
      character:
        "Newer subdivisions north of the Willamette River with excellent schools, parks, and easy access to Corvallis via Highway 20. Popular with families and OSU commuters.",
    },
    {
      name: "South Albany",
      tagline: "Affordable starter homes and acreage",
      priceRange: "$320K–$420K",
      character:
        "Mix of established neighborhoods and rural properties south of town. Offers some of the most affordable housing in the area with larger lot sizes.",
    },
    {
      name: "East Albany",
      tagline: "Growing developments near I-5",
      priceRange: "$350K–$500K",
      character:
        "Albany's fastest-growing area with newer construction, shopping centers, and easy I-5 access. A mix of single-family homes and townhomes in planned developments.",
    },
  ],

  topEmployers: [
    { name: "Samaritan Health Services", sector: "Healthcare", employees: "2,000+" },
    { name: "ATI Specialty Alloys", sector: "Manufacturing", employees: "1,200+" },
    { name: "Linn County Government", sector: "Government", employees: "800+" },
    { name: "Greater Albany Public Schools", sector: "Education", employees: "1,500+" },
    { name: "Target Distribution Center", sector: "Logistics", employees: "500+" },
  ],

  schoolDistrict: "Greater Albany Public Schools (GAPS)",
  schoolHighlights: [
    "Serves 10,000+ students across 20 schools",
    "South Albany High and West Albany High are both rated above state averages",
    "GAPS offers career technical education programs in healthcare, engineering, and agriculture",
    "Oak Grove Elementary rated highly for STEM education",
  ],

  outdoorRec: [
    "Timber-Linn Memorial Park — 130 acres with pool, skatepark, sports fields",
    "Dave Clark Trail along the Willamette River",
    "Talking Water Gardens — constructed wetland park and bird watching",
    "Benton County Fairgrounds events year-round",
    "Nearby Cascades access for skiing and hiking",
    "Calapooia River kayaking and fishing",
  ],

  comparedToLebanon:
    "Albany is about 65% larger than Lebanon by population and offers a wider range of housing from historic Victorian homes to new construction. At $446K average, Albany is more affordable than Corvallis but 18% higher than Lebanon ($377K). Albany homes spend fewer days on market (97 vs 105) and the city provides more urban amenities, shopping, and dining options. Lebanon wins on outdoor recreation access and small-town feel.",

  faqs: [
    {
      question: "Is Albany, Oregon a good place to live?",
      answer:
        "Yes. Albany offers affordable housing, strong schools, rich history, and a central Willamette Valley location. It is within 25 minutes of Salem, Corvallis, and Lebanon, making it ideal for commuters. The historic districts are nationally recognized, and the parks system is one of the best in the valley.",
    },
    {
      question: "What is the average home price in Albany, Oregon?",
      answer:
        "As of Q1 2026, the average sold price in Albany is $446,343 for residential properties under 1 acre. This represents a slight decrease of 1.5% year-over-year. 147 homes sold in Q1 2026, up from 133 in Q1 2025, indicating strong buyer activity.",
    },
    {
      question: "How does Albany compare to Corvallis for home buyers?",
      answer:
        "Albany is significantly more affordable — $446K average vs $593K in Corvallis. Albany offers more housing inventory (137 active listings vs 79), a wider range of home styles including historic properties, and similar commute access to I-5 and Highway 20. Corvallis has the university and a higher concentration of tech jobs.",
    },
    {
      question: "What are the best neighborhoods in Albany?",
      answer:
        "Top neighborhoods include the Historic Districts (Victorian charm, walkable downtown), North Albany (family-friendly, good schools, Corvallis commute), East Albany (newer construction, shopping), and South Albany (affordable starter homes, larger lots).",
    },
    {
      question: "How far is Albany from Lebanon?",
      answer:
        "Albany is approximately 12 miles west of Lebanon, about a 15-minute drive via US-20. Many residents commute between the two cities for work and shopping.",
    },
  ],
};

// ─── CORVALLIS ──────────────────────────────────────────────
export const corvallis: CityHub = {
  slug: "corvallis",
  name: "Corvallis",
  state: "Oregon",
  county: "Benton County",
  tagline: "University town with top-tier quality of life",
  heroDescription:
    "Home to Oregon State University, Corvallis consistently ranks among Oregon's best places to live. A vibrant mix of college-town energy, tech industry jobs, and outdoor adventure — with real estate prices to match the demand.",
  population: 62110,
  populationGrowth: "+0.8% annually",
  distanceFromLebanon: "18 miles west",
  driveTime: "25 minutes via US-20",

  avgSoldPrice: 593250,
  avgListPrice: 598658,
  avgDOM: 102,
  numberSold: 68,
  activeListings: 79,
  pricePerSqft: 326,
  yoyPriceChange: 4.1,
  prevYearAvgPrice: 569682,
  prevYearSold: 77,

  highlights: [
    { label: "Avg Sold Price", value: "$593K", detail: "Q1 2026" },
    { label: "Homes Sold Q1", value: "68", detail: "Down from 77" },
    { label: "Avg Days on Market", value: "102", detail: "Residential <1 acre" },
    { label: "Active Listings", value: "79", detail: "Limited inventory" },
  ],

  whyLiveHere: [
    "Oregon State University — 32,000+ students, major research institution, and top employer",
    "Consistently ranked #1 or #2 best place to live in Oregon (Niche, US News)",
    "Thriving tech sector with HP, NuScale Power, Inpria, and OSU spinoffs",
    "Exceptional outdoor access: Marys Peak, Bald Hill, Peavy Arboretum, McDonald Forest",
    "Award-winning Corvallis School District with high graduation rates",
    "Vibrant downtown with independent shops, restaurants, breweries, and farmers market",
  ],

  neighborhoods: [
    {
      name: "South Corvallis",
      tagline: "Artsy, walkable, close to natural areas",
      priceRange: "$400K–$600K",
      character:
        "Eclectic mix of older homes and newer infill near South Town shops. Walking distance to natural areas and the Willamette River. Popular with university staff and outdoor enthusiasts.",
    },
    {
      name: "North Corvallis",
      tagline: "Family neighborhoods near Bald Hill",
      priceRange: "$500K–$750K",
      character:
        "Desirable family area with access to Bald Hill and Chip Ross Park. Newer construction mixed with established 1980s-90s homes. Excellent schools and quiet streets.",
    },
    {
      name: "West Corvallis / Philomath",
      tagline: "Newer developments with valley views",
      priceRange: "$450K–$650K",
      character:
        "Growing area along Philomath Boulevard with newer subdivisions, valley views, and quick access to the Coast Range. A good balance of price and modern amenities.",
    },
    {
      name: "Downtown / Campus",
      tagline: "Urban living near OSU",
      priceRange: "$350K–$550K",
      character:
        "Historic homes, student rentals, and walkable urban living. Highest density area with restaurants, shops, and campus amenities within walking distance.",
    },
  ],

  topEmployers: [
    { name: "Oregon State University", sector: "Education/Research", employees: "10,000+" },
    { name: "Samaritan Health Services", sector: "Healthcare", employees: "3,000+" },
    { name: "HP Inc.", sector: "Technology", employees: "1,500+" },
    { name: "Corvallis School District", sector: "Education", employees: "1,200+" },
    { name: "NuScale Power", sector: "Clean Energy", employees: "400+" },
  ],

  schoolDistrict: "Corvallis School District 509J",
  schoolHighlights: [
    "One of Oregon's top-rated districts with A+ Niche rating",
    "Corvallis High School and Crescent Valley High both rank in Oregon's top 20",
    "Strong STEM programs through OSU partnerships",
    "Bilingual immersion programs (Spanish/English) at multiple elementary schools",
  ],

  outdoorRec: [
    "Bald Hill Natural Area — 300 acres of trails with panoramic valley views",
    "Peavy Arboretum and McDonald-Dunn Forest — 11,000 acres of trails",
    "Marys Peak — highest point in the Coast Range, 45-minute drive",
    "Willamette River access for kayaking, fishing, and swimming",
    "Chip Ross Park — popular hilltop trail with sunset views",
    "Avery Park — gardens, playgrounds, rose garden",
  ],

  comparedToLebanon:
    "Corvallis is the premium option in the region at $593K average — 57% higher than Lebanon ($377K). You get a top university town, thriving tech sector, and nationally ranked schools. Lebanon offers 36% more home for your dollar with a quieter, small-town lifestyle just 25 minutes away. Many families buy in Lebanon and commute to Corvallis for work, getting the best of both worlds.",

  faqs: [
    {
      question: "Is Corvallis, Oregon expensive?",
      answer:
        "Corvallis is the most expensive city in the mid-Willamette Valley with an average sold price of $593,250 in Q1 2026 — up 4.1% year-over-year. However, it remains more affordable than Portland metro. Many buyers look to nearby Lebanon ($377K) or Albany ($446K) for more affordable options within a 25-minute commute.",
    },
    {
      question: "What is the average home price in Corvallis, Oregon?",
      answer:
        "As of Q1 2026, the average sold price in Corvallis is $593,250 for residential properties under 1 acre. 68 homes sold in Q1, down from 77 the previous year, reflecting limited inventory (79 active listings). The market is competitive with homes averaging 102 days on market.",
    },
    {
      question: "Is Corvallis a good place to raise a family?",
      answer:
        "Absolutely. Corvallis School District is one of Oregon's best with A+ ratings. The city offers abundant parks, safe neighborhoods, family-friendly events, and a strong community feel. OSU brings cultural and sporting events year-round. The main trade-off is higher home prices.",
    },
    {
      question: "How far is Corvallis from Lebanon?",
      answer:
        "Corvallis is approximately 18 miles west of Lebanon, about a 25-minute drive via US-20. This proximity is why many families buy in Lebanon for the lower prices and commute to Corvallis for work at OSU or HP.",
    },
    {
      question: "What are the best neighborhoods in Corvallis?",
      answer:
        "Top neighborhoods include North Corvallis (family-friendly, Bald Hill access, $500K-$750K), South Corvallis (artsy, walkable, $400K-$600K), West Corvallis/Philomath corridor (newer homes, valley views), and Downtown/Campus (urban walkability, historic homes).",
    },
  ],
};

// ─── ALL CITIES ─────────────────────────────────────────────
export const cities: CityHub[] = [albany, corvallis];

export function getCity(slug: string): CityHub | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getOtherCities(slug: string): CityHub[] {
  return cities.filter((c) => c.slug !== slug);
}
