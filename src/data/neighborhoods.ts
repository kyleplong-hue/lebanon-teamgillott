/**
 * DYNAMIC DATA LAYER — Neighborhoods
 *
 * Central source of truth for all neighborhood data.
 * Update prices, stats, and descriptions here.
 */

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
  },
];

export function getNeighborhood(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}

export function getOtherNeighborhoods(slug: string): Neighborhood[] {
  return neighborhoods.filter((n) => n.slug !== slug);
}
