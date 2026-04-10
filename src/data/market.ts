/**
 * DYNAMIC DATA LAYER — Market Report
 *
 * Update this file monthly with new MLS data.
 * All pages that reference market data pull from here.
 * No page code changes needed — just update the numbers.
 */

export interface MonthlySnapshot {
  month: string;          // e.g. "Apr 2026"
  monthFull: string;      // e.g. "April 2026"
  medianPrice: number;
  avgDOM: number;
  pricePerSqft: number;
  avgOffers: number;
  activeListings: number;
  closedSales: number;
  newListings: number;
  mortgageRate: number;   // 30-yr fixed
  inventory: number;      // months of supply
}

export interface MarketTrend {
  month: string;
  medianPrice: number;
  avgDOM: number;
  closedSales: number;
}

export interface CityComparison {
  city: string;
  medianPrice: number;
  avgDOM: number;
  pricePerSqft: number;
  population: number;
  yoyGrowth: number;
}

// ─── CURRENT MONTH DATA ─────────────────────────────────────
export const currentMonth: MonthlySnapshot = {
  month: "Apr 2026",
  monthFull: "April 2026",
  medianPrice: 395000,
  avgDOM: 65,
  pricePerSqft: 254,
  avgOffers: 2,
  activeListings: 87,
  closedSales: 34,
  newListings: 41,
  mortgageRate: 6.12,
  inventory: 2.6,
};

// ─── 12-MONTH TREND DATA ────────────────────────────────────
// Add new months at the end, remove oldest to keep 12 months
export const marketTrends: MarketTrend[] = [
  { month: "May '25", medianPrice: 362000, avgDOM: 89, closedSales: 28 },
  { month: "Jun '25", medianPrice: 368000, avgDOM: 85, closedSales: 31 },
  { month: "Jul '25", medianPrice: 371000, avgDOM: 82, closedSales: 33 },
  { month: "Aug '25", medianPrice: 375000, avgDOM: 79, closedSales: 35 },
  { month: "Sep '25", medianPrice: 378000, avgDOM: 77, closedSales: 30 },
  { month: "Oct '25", medianPrice: 380000, avgDOM: 74, closedSales: 27 },
  { month: "Nov '25", medianPrice: 382000, avgDOM: 72, closedSales: 22 },
  { month: "Dec '25", medianPrice: 384000, avgDOM: 70, closedSales: 19 },
  { month: "Jan '26", medianPrice: 386000, avgDOM: 69, closedSales: 21 },
  { month: "Feb '26", medianPrice: 389000, avgDOM: 68, closedSales: 26 },
  { month: "Mar '26", medianPrice: 392000, avgDOM: 67, closedSales: 30 },
  { month: "Apr '26", medianPrice: 395000, avgDOM: 65, closedSales: 34 },
];

// ─── CITY COMPARISON DATA ────────────────────────────────────
export const cityComparisons: CityComparison[] = [
  {
    city: "Lebanon",
    medianPrice: 395000,
    avgDOM: 65,
    pricePerSqft: 254,
    population: 19950,
    yoyGrowth: 4.6,
  },
  {
    city: "Corvallis",
    medianPrice: 565000,
    avgDOM: 70,
    pricePerSqft: 326,
    population: 62110,
    yoyGrowth: 3.1,
  },
  {
    city: "Albany",
    medianPrice: 390000,
    avgDOM: 88,
    pricePerSqft: 265,
    population: 56828,
    yoyGrowth: 2.8,
  },
  {
    city: "Sweet Home",
    medianPrice: 315000,
    avgDOM: 95,
    pricePerSqft: 212,
    population: 9680,
    yoyGrowth: 5.2,
  },
];

// ─── RECENTLY SOLD ───────────────────────────────────────────
export interface RecentSale {
  address: string;
  neighborhood: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  dom: number;
  dateSold: string;
}

export const recentSales: RecentSale[] = [
  {
    address: "1847 Cascade Dr",
    neighborhood: "East Lebanon",
    price: 425000,
    beds: 4,
    baths: 2.5,
    sqft: 2180,
    dom: 42,
    dateSold: "Apr 3, 2026",
  },
  {
    address: "312 S 5th St",
    neighborhood: "South Lebanon",
    price: 339000,
    beds: 3,
    baths: 2,
    sqft: 1540,
    dom: 58,
    dateSold: "Mar 28, 2026",
  },
  {
    address: "2205 Hamilton Creek Rd",
    neighborhood: "Hamilton Creek",
    price: 589000,
    beds: 4,
    baths: 3,
    sqft: 2840,
    dom: 31,
    dateSold: "Mar 22, 2026",
  },
  {
    address: "905 Crowfoot Rd",
    neighborhood: "North Lebanon",
    price: 412000,
    beds: 3,
    baths: 2,
    sqft: 1920,
    dom: 47,
    dateSold: "Mar 18, 2026",
  },
  {
    address: "4410 Berlin Rd",
    neighborhood: "East Lebanon",
    price: 365000,
    beds: 3,
    baths: 2,
    sqft: 1680,
    dom: 73,
    dateSold: "Mar 14, 2026",
  },
  {
    address: "1128 Park St",
    neighborhood: "South Lebanon",
    price: 298000,
    beds: 2,
    baths: 1,
    sqft: 1120,
    dom: 91,
    dateSold: "Mar 9, 2026",
  },
];

// ─── HELPER FUNCTIONS ────────────────────────────────────────
export function formatPrice(price: number): string {
  if (price >= 1000000) return `$${(price / 1000000).toFixed(1)}M`;
  if (price >= 1000) return `$${Math.round(price / 1000)}K`;
  return `$${price}`;
}

export function formatPriceFull(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getYoYChange(): { price: number; dom: number } {
  const currentPrice = marketTrends[marketTrends.length - 1].medianPrice;
  const yearAgoPrice = marketTrends[0].medianPrice;
  const currentDOM = marketTrends[marketTrends.length - 1].avgDOM;
  const yearAgoDOM = marketTrends[0].avgDOM;

  return {
    price: Number((((currentPrice - yearAgoPrice) / yearAgoPrice) * 100).toFixed(1)),
    dom: Number((((currentDOM - yearAgoDOM) / yearAgoDOM) * 100).toFixed(1)),
  };
}
