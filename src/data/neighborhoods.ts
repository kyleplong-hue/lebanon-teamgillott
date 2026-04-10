/**
 * DYNAMIC DATA LAYER — Neighborhoods
 *
 * Central source of truth for all neighborhood data.
 * Update prices, stats, and descriptions here.
 */

export interface NeighborhoodFAQ {
  question: string;
  answer: string;
}

export interface Neighborhood {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  priceRange: { low: number; high: number };
  avgPrice: number;
  avgDOM: number;
  turnoverRate: number;  // percentage
  highlights: string[];
  character: string;
  propertyTypes: string;
  schools: string[];
  lovelist: string[];    // what residents love
  // Enhanced content for AEO/GEO authority
  commute: string;
  landmarks: string[];
  lifestyle: string;     // paragraph about daily life
  bestFor: string[];     // ideal buyer profiles
  faqs: NeighborhoodFAQ[];
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: "south-lebanon",
    name: "South Lebanon",
    tagline: "Downtown living, walkable charm",
    description:
      "Close to downtown with walkable shops, restaurants, and community events. A mix of classic bungalows and updated homes near Lebanon's cultural center.",
    priceRange: { low: 320000, high: 420000 },
    avgPrice: 358000,
    avgDOM: 71,
    turnoverRate: 8.2,
    highlights: [
      "Downtown walkability",
      "Historic character homes",
      "Community events",
      "Local restaurants",
    ],
    character:
      "Tree-lined streets with a mix of 1940s-60s bungalows and updated craftsman-style homes. Walking distance to Cheadle Lake, the public library, and downtown shops along Main Street.",
    propertyTypes:
      "Primarily single-family homes on smaller lots (5,000-8,000 sq ft). Mix of 2-3 bedroom bungalows and updated 3-4 bedroom craftsman homes. Some townhomes near downtown.",
    schools: ["Cascades Elementary", "Lebanon Middle School", "Lebanon High School"],
    lovelist: [
      "Saturday farmers market",
      "Cheadle Lake park access",
      "Walkable downtown shops",
      "Community library events",
      "Local coffee roasters",
      "Historic home character",
      "Affordable entry prices",
      "Tight-knit community",
    ],
    commute:
      "South Lebanon is centrally located for commuters. Downtown Lebanon employers are within walking or biking distance. Corvallis is 25 minutes via Highway 20, Albany is 15 minutes via US-20, and Salem is about 55 minutes via I-5. Highway 20 access is 5 minutes north.",
    landmarks: [
      "Cheadle Lake Park — 80-acre lake with fishing, trails, and picnic areas",
      "Lebanon Public Library — community hub with events and programs",
      "Main Street shops and restaurants — walkable downtown district",
      "Saturday Farmers Market — seasonal produce and local vendors (May–October)",
      "River Park — Santiam River access and walking trails",
      "Ralston Park Pool — public outdoor swimming pool",
    ],
    lifestyle:
      "Daily life in South Lebanon revolves around the walkable downtown core. Residents grab coffee at local roasters, walk to Cheadle Lake, and browse the Saturday farmers market. The neighborhood has a strong community feel — neighbors know each other, and community events at the library and park are well-attended. It is one of the most affordable entry points into Lebanon real estate, making it popular with first-time buyers and downsizers who value convenience and character over new construction.",
    bestFor: [
      "First-time home buyers seeking affordable entry prices",
      "Downsizers who want walkable convenience",
      "History buffs who love character homes",
      "Families near downtown schools and parks",
    ],
    faqs: [
      {
        question: "What is the average home price in South Lebanon?",
        answer: "As of Q1 2026, the average home price in South Lebanon is approximately $358,000, with homes typically ranging from $320K to $420K. This makes it one of the most affordable neighborhoods in Lebanon, Oregon.",
      },
      {
        question: "Is South Lebanon walkable?",
        answer: "Yes, South Lebanon is the most walkable neighborhood in Lebanon. Residents can walk to downtown shops, restaurants, Cheadle Lake Park, and the public library. The Saturday farmers market is also within walking distance.",
      },
      {
        question: "What schools serve South Lebanon?",
        answer: "South Lebanon is served by Cascades Elementary, Lebanon Middle School, and Lebanon High School, all part of Lebanon Community School District 9 which has a 91% graduation rate.",
      },
      {
        question: "How long does it take to commute from South Lebanon to Corvallis?",
        answer: "The commute from South Lebanon to Corvallis is approximately 25 minutes via Highway 20. Albany is about 15 minutes away, making South Lebanon convenient for commuters to either city.",
      },
    ],
  },
  {
    slug: "east-lebanon",
    name: "East Lebanon",
    tagline: "Cascade foothills, recreation at your door",
    description:
      "Gateway to scenic Cascade foothills with outdoor recreation and larger lots. Ideal for those who want nature access without sacrificing convenience.",
    priceRange: { low: 350000, high: 475000 },
    avgPrice: 398000,
    avgDOM: 58,
    turnoverRate: 6.7,
    highlights: [
      "Cascade foothills access",
      "Larger lot sizes",
      "Outdoor recreation",
      "Mountain views",
    ],
    character:
      "Rolling terrain with views of the Cascade foothills. Properties sit on larger lots (0.25-1+ acres) with mature trees and natural landscaping. A quieter, more rural feel while still within city limits.",
    propertyTypes:
      "Spacious single-family homes on larger lots. Mix of 1990s-2010s construction with 3-4 bedrooms. Some properties include outbuildings, shops, or small acreage for hobby farming.",
    schools: ["Green Acres Elementary", "Lebanon Middle School", "Lebanon High School"],
    lovelist: [
      "McDowell Creek Falls",
      "Mountain biking trails",
      "Larger lot sizes",
      "Wildlife viewing",
      "Garden-friendly land",
      "Star-gazing darkness",
      "Peaceful mornings",
      "Creek-side properties",
    ],
    commute:
      "East Lebanon provides easy access to the Cascade foothills while still being 10 minutes from downtown Lebanon. Corvallis is 30 minutes via Highway 20, and Albany is 20 minutes. Some properties are more rural with gravel road access, so commute times can vary. Highway 20 is the main arterial.",
    landmarks: [
      "McDowell Creek Falls — stunning three-tier waterfall, 20-minute drive",
      "Cascade foothills trailheads — hiking, mountain biking, horseback riding",
      "Santiam River access points — fishing, kayaking, and swimming",
      "Berlin Road corridor — scenic rural drive with mountain views",
      "Crowfoot Road area — established properties with creek frontage",
      "Waterloo County Park — 10 minutes east, swimming and camping",
    ],
    lifestyle:
      "East Lebanon is for those who crave space and nature. Morning routines might include a trail run in the Cascade foothills or watching deer graze from the back deck. Properties sit on larger lots with room for gardens, shops, and even small-scale hobby farming. It is quieter than other Lebanon neighborhoods — you trade walkability for privacy and natural beauty. Weekends are spent at McDowell Creek Falls, fishing the Santiam River, or exploring the network of forest roads in the foothills.",
    bestFor: [
      "Outdoor enthusiasts who want nature at their doorstep",
      "Buyers seeking larger lots and privacy",
      "Hobby farmers and gardeners",
      "Remote workers who don't need a short commute",
    ],
    faqs: [
      {
        question: "What is the average home price in East Lebanon?",
        answer: "As of Q1 2026, the average home price in East Lebanon is approximately $398,000, with homes typically ranging from $350K to $475K. The higher end includes properties on larger lots with acreage.",
      },
      {
        question: "Is East Lebanon rural?",
        answer: "East Lebanon has a semi-rural character with larger lots (0.25-1+ acres) and views of the Cascade foothills. While it is within Lebanon city limits, properties feel more spacious and private than in other neighborhoods. Some properties along the eastern edge are on gravel roads.",
      },
      {
        question: "What outdoor recreation is near East Lebanon?",
        answer: "East Lebanon is the gateway to the Cascades. McDowell Creek Falls is a 20-minute drive, with numerous trailheads for hiking and mountain biking. The Santiam River offers fishing and kayaking, and Waterloo County Park is 10 minutes east for swimming and camping.",
      },
      {
        question: "What schools serve East Lebanon?",
        answer: "East Lebanon is served by Green Acres Elementary, Lebanon Middle School, and Lebanon High School, all part of Lebanon Community School District 9.",
      },
    ],
  },
  {
    slug: "north-lebanon",
    name: "North Lebanon",
    tagline: "Family-friendly, modern builds",
    description:
      "Family-friendly with newer developments and excellent commuter access. The fastest-growing area of Lebanon with modern amenities and community parks.",
    priceRange: { low: 375000, high: 450000 },
    avgPrice: 415000,
    avgDOM: 52,
    turnoverRate: 9.4,
    highlights: [
      "Newer construction",
      "Family neighborhoods",
      "Commuter access",
      "Community parks",
    ],
    character:
      "Lebanon's newest growth corridor featuring planned subdivisions with modern amenities. Well-maintained streets, community parks, and sidewalks throughout. Easy access to Highway 20 for Corvallis and Albany commutes.",
    propertyTypes:
      "Predominantly newer single-family homes (2015-2026) with 3-4 bedrooms, 2-car garages, and energy-efficient construction. Some duplex and townhome options in mixed-use developments.",
    schools: ["Riverview Elementary", "Sand Ridge Charter School", "Lebanon High School"],
    lovelist: [
      "New home feel",
      "Energy-efficient builds",
      "Sidewalks everywhere",
      "Community parks",
      "Quick Corvallis commute",
      "Modern floor plans",
      "Young families nearby",
      "Highway 20 access",
    ],
    commute:
      "North Lebanon has the best commuter access in the city. Highway 20 is 2 minutes away, making Corvallis a 22-minute drive and Albany a 12-minute drive. Many OSU and HP employees live here for the short commute. Salem is about 50 minutes via I-5 through Albany.",
    landmarks: [
      "Sand Ridge Charter School — highly rated K-8, top choice for families",
      "Riverview Elementary — newer school serving the growth corridor",
      "Community parks with playgrounds and walking paths",
      "Highway 20 commercial corridor — grocery, dining, and services",
      "Walmart and major retail — 5 minutes away",
      "Cheadle Lake and downtown Lebanon — 8 minutes south",
    ],
    lifestyle:
      "North Lebanon is where young families are planting roots. The subdivision streets are lined with sidewalks, kids ride bikes to the park, and neighbors wave from their porches. Homes are modern with open floor plans, energy-efficient construction, and 2-car garages. The trade-off for new construction is smaller lots — typically 5,000-7,000 sq ft. The quick Highway 20 access makes this the top choice for Corvallis commuters who want Lebanon affordability without a long drive.",
    bestFor: [
      "Young families with school-age children",
      "Corvallis and Albany commuters",
      "Buyers who want new construction and modern amenities",
      "First-time buyers who prioritize low maintenance",
    ],
    faqs: [
      {
        question: "What is the average home price in North Lebanon?",
        answer: "As of Q1 2026, the average home price in North Lebanon is approximately $415,000, with homes typically ranging from $375K to $450K. This reflects the newer construction and modern amenities available in this growth corridor.",
      },
      {
        question: "Is North Lebanon good for families?",
        answer: "North Lebanon is arguably the best family neighborhood in Lebanon. It features newer construction with modern floor plans, sidewalks throughout, community parks, and proximity to Sand Ridge Charter School (one of the top-rated schools in the area). Many young families are moving here.",
      },
      {
        question: "How far is North Lebanon from Corvallis?",
        answer: "North Lebanon to Corvallis is approximately 22 minutes via Highway 20. This makes it the closest Lebanon neighborhood to Corvallis, which is why many OSU and HP employees choose to live here.",
      },
      {
        question: "Are there new construction homes in North Lebanon?",
        answer: "Yes, North Lebanon is Lebanon's primary growth corridor with predominantly newer single-family homes built between 2015 and 2026. Construction includes 3-4 bedroom homes with energy-efficient features, modern floor plans, and 2-car garages.",
      },
    ],
  },
  {
    slug: "hamilton-creek",
    name: "Hamilton Creek",
    tagline: "Private estates, premium living",
    description:
      "Upscale, private estates on rolling hills with expansive green spaces. Lebanon's premier neighborhood for those seeking space, privacy, and natural beauty.",
    priceRange: { low: 425000, high: 600000 },
    avgPrice: 512000,
    avgDOM: 78,
    turnoverRate: 4.1,
    highlights: [
      "Custom estates",
      "Private acreage",
      "Rolling hills",
      "Premium finishes",
    ],
    character:
      "Lebanon's most exclusive enclave with custom-built homes on 1-5+ acre parcels. Rolling hills, creek frontage, and mature timber create a private, estate-like setting just minutes from town.",
    propertyTypes:
      "Custom-built single-family estates with 4-5+ bedrooms, 2,500-4,000+ sq ft. Many feature shops, barns, or outbuildings. Properties range from 1 acre to 10+ acres with creek frontage and timber.",
    schools: ["Hamilton Creek Elementary", "Lebanon Middle School", "Lebanon High School"],
    lovelist: [
      "Total privacy",
      "Custom-built homes",
      "Creek frontage",
      "Mature timber lots",
      "Equestrian potential",
      "No HOA restrictions",
      "Wildlife corridor",
      "Premium finishes",
    ],
    commute:
      "Hamilton Creek is 10-15 minutes from downtown Lebanon via Hamilton Creek Road. The winding road adds scenic beauty but means slightly longer drive times. Corvallis is 30-35 minutes, Albany is 25 minutes. This is not a commuter neighborhood — residents prioritize space and privacy over proximity.",
    landmarks: [
      "Hamilton Creek — year-round stream running through many properties",
      "Cascade foothills access — direct trail connections",
      "Mature timber stands — old-growth Douglas fir on some parcels",
      "Private equestrian facilities — several properties with riding arenas",
      "Wildlife corridor — regular deer, elk, and bird sightings",
      "McDowell Creek Falls — 15-minute drive to this stunning waterfall",
    ],
    lifestyle:
      "Hamilton Creek is Lebanon's prestige address. Daily life is unhurried — morning coffee on a wraparound porch overlooking acres of timber, afternoon walks along the creek, and evenings with nothing but birdsong and starlight. Homes are custom-built with premium finishes: hardwood floors, chef's kitchens, and oversized garages or shops. Many properties include barns, riding arenas, or outbuildings. There are no HOA restrictions, so residents have full freedom. The trade-off is distance from town and higher price points, but for buyers who want estate-level living without leaving Lebanon, Hamilton Creek is unmatched.",
    bestFor: [
      "Luxury buyers seeking estate-level living",
      "Equestrian enthusiasts with horses or livestock",
      "Privacy seekers who want acreage and seclusion",
      "Custom home builders looking for premium lots",
    ],
    faqs: [
      {
        question: "What is the average home price in Hamilton Creek?",
        answer: "As of Q1 2026, the average home price in Hamilton Creek is approximately $512,000, with homes typically ranging from $425K to $600K+. Properties with significant acreage (5+ acres) or custom builds can exceed $700K.",
      },
      {
        question: "How big are lots in Hamilton Creek?",
        answer: "Hamilton Creek lots range from 1 acre to 10+ acres. Most properties are on 2-5 acres with mature timber, creek frontage, and natural landscaping. This is Lebanon's most spacious neighborhood by far.",
      },
      {
        question: "Is Hamilton Creek good for horses?",
        answer: "Yes, Hamilton Creek is Lebanon's best neighborhood for equestrian buyers. Several properties include barns, riding arenas, and fenced pastures. The area has no HOA restrictions, so livestock is permitted. The rolling terrain and creek access make it ideal for horses.",
      },
      {
        question: "How far is Hamilton Creek from downtown Lebanon?",
        answer: "Hamilton Creek is approximately 10-15 minutes from downtown Lebanon via Hamilton Creek Road. The scenic, winding road adds character but means a slightly longer drive than other Lebanon neighborhoods. Corvallis is 30-35 minutes away.",
      },
    ],
  },
];

export function getNeighborhood(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}

export function getOtherNeighborhoods(slug: string): Neighborhood[] {
  return neighborhoods.filter((n) => n.slug !== slug);
}
