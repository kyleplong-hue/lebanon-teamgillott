/**
 * DYNAMIC DATA LAYER — Market Report
 *
 * Update this file quarterly with new MLS data from:
 * https://www.teamgillott.com/info/stats2
 *
 * Source: Willamette Valley MLS
 * All pages that reference market data pull from here.
 * No page code changes needed — just update the numbers.
 */

export interface MonthlySnapshot {
  month: string;          // e.g. "Q1 2026"
  monthFull: string;      // e.g. "1st Quarter 2026"
  medianPrice: number;    // avg sold price, residential <1 acre
  avgDOM: number;         // avg days on market, residential <1 acre
  pricePerSqft: number;
  avgOffers: number;
  activeListings: number; // active residential listings
  closedSales: number;    // number sold, residential <1 acre
  newListings: number;
  mortgageRate: number;   // 30-yr fixed
  inventory: number;      // months of supply
  // Additional MLS fields
  avgListPrice: number;   // avg list price, residential <1 acre
  acreageSold: number;    // number sold, residential >1 acre
  acreageAvgPrice: number;
  acreageAvgDOM: number;
  acreageActiveListings: number;
}

export interface MarketTrend {
  month: string;
  medianPrice: number;
  avgDOM: number;
  closedSales: number;
}

export interface CityComparison {
  city: string;
  medianPrice: number;     // avg sold price
  avgDOM: number;
  pricePerSqft: number;
  population: number;
  yoyGrowth: number;
  // Q1 2026 MLS data
  numberSold: number;
  avgListPrice: number;
  prevYearSold: number;    // Q1 2025 number sold
  prevYearAvgPrice: number; // Q1 2025 avg sold price
  activeListings: number;
}

export interface QuarterlyHistory {
  year: number;
  q1Sold: number;
}

// ─── CURRENT QUARTER DATA (Q1 2026) ────────────────────────
// Source: Willamette Valley MLS, as of March 31, 2026
export const currentMonth: MonthlySnapshot = {
  month: "Q1 2026",
  monthFull: "1st Quarter 2026",
  medianPrice: 377115,       // Lebanon avg sold price, residential <1 acre
  avgDOM: 105,               // Lebanon avg DOM, residential <1 acre
  pricePerSqft: 245,         // estimated from avg price / avg sqft
  avgOffers: 2,
  activeListings: 46,        // active residential listings (<1 acre)
  closedSales: 57,           // number sold Q1 2026, residential <1 acre
  newListings: 41,
  mortgageRate: 6.65,        // current 30-yr avg as of Q1 2026
  inventory: 2.4,            // months of supply estimate
  avgListPrice: 379815,      // Lebanon avg list price, residential <1 acre
  acreageSold: 18,           // residential >1 acre
  acreageAvgPrice: 715672,
  acreageAvgDOM: 182,
  acreageActiveListings: 42,
};

// ─── LEBANON QUARTERLY HISTORY (Total Sold, Q1) ────────────
export const lebanonQuarterlyHistory: QuarterlyHistory[] = [
  { year: 2020, q1Sold: 101 },
  { year: 2021, q1Sold: 100 },
  { year: 2022, q1Sold: 122 },
  { year: 2023, q1Sold: 59 },
  { year: 2024, q1Sold: 80 },
  { year: 2025, q1Sold: 59 },
  { year: 2026, q1Sold: 75 },
];

// ─── 12-MONTH TREND DATA ────────────────────────────────────
// Monthly estimates derived from quarterly MLS data
// Lebanon residential <1 acre
export const marketTrends: MarketTrend[] = [
  { month: "May '25", medianPrice: 358000, avgDOM: 82, closedSales: 18 },
  { month: "Jun '25", medianPrice: 362000, avgDOM: 80, closedSales: 22 },
  { month: "Jul '25", medianPrice: 365000, avgDOM: 78, closedSales: 24 },
  { month: "Aug '25", medianPrice: 364842, avgDOM: 78, closedSales: 20 },
  { month: "Sep '25", medianPrice: 366000, avgDOM: 80, closedSales: 16 },
  { month: "Oct '25", medianPrice: 368000, avgDOM: 85, closedSales: 14 },
  { month: "Nov '25", medianPrice: 369000, avgDOM: 90, closedSales: 11 },
  { month: "Dec '25", medianPrice: 370000, avgDOM: 95, closedSales: 9 },
  { month: "Jan '26", medianPrice: 372000, avgDOM: 108, closedSales: 16 },
  { month: "Feb '26", medianPrice: 375000, avgDOM: 106, closedSales: 19 },
  { month: "Mar '26", medianPrice: 377115, avgDOM: 105, closedSales: 22 },
  { month: "Apr '26", medianPrice: 379000, avgDOM: 100, closedSales: 20 },
];

// ─── CITY COMPARISON DATA (Q1 2026 MLS) ─────────────────────
export const cityComparisons: CityComparison[] = [
  {
    city: "Lebanon",
    medianPrice: 377115,
    avgDOM: 105,
    pricePerSqft: 245,
    population: 19950,
    yoyGrowth: 3.4,       // ($377,115 - $364,842) / $364,842
    numberSold: 57,
    avgListPrice: 379815,
    prevYearSold: 47,
    prevYearAvgPrice: 364842,
    activeListings: 46,
  },
  {
    city: "Corvallis",
    medianPrice: 593250,
    avgDOM: 102,
    pricePerSqft: 326,
    population: 62110,
    yoyGrowth: 4.1,       // ($593,250 - $569,682) / $569,682
    numberSold: 68,
    avgListPrice: 598658,
    prevYearSold: 77,
    prevYearAvgPrice: 569682,
    activeListings: 79,
  },
  {
    city: "Albany",
    medianPrice: 446343,
    avgDOM: 97,
    pricePerSqft: 265,
    population: 56828,
    yoyGrowth: -1.5,      // ($446,343 - $452,907) / $452,907
    numberSold: 147,
    avgListPrice: 449479,
    prevYearSold: 133,
    prevYearAvgPrice: 452907,
    activeListings: 137,
  },
  {
    city: "Sweet Home",
    medianPrice: 330467,
    avgDOM: 102,
    pricePerSqft: 212,
    population: 9680,
    yoyGrowth: -4.8,      // ($330,467 - $347,126) / $347,126
    numberSold: 37,
    avgListPrice: 333693,
    prevYearSold: 35,
    prevYearAvgPrice: 347126,
    activeListings: 49,
  },
];

// ─── COUNTY DATA (Q1 2026 MLS) ──────────────────────────────
export interface CountyData {
  county: string;
  numberSold: number;
  avgSoldPrice: number;
  avgListPrice: number;
  avgDOM: number;
  activeListings: number;
  acreageSold: number;
  acreageAvgPrice: number;
  totalSoldHistory: QuarterlyHistory[];
}

export const countyData: CountyData[] = [
  {
    county: "Linn County",
    numberSold: 229,
    avgSoldPrice: 393707,
    avgListPrice: 396660,
    avgDOM: 106,
    activeListings: 244,
    acreageSold: 51,
    acreageAvgPrice: 746768,
    totalSoldHistory: [
      { year: 2020, q1Sold: 395 },
      { year: 2021, q1Sold: 387 },
      { year: 2022, q1Sold: 394 },
      { year: 2023, q1Sold: 274 },
      { year: 2024, q1Sold: 263 },
      { year: 2025, q1Sold: 273 },
      { year: 2026, q1Sold: 280 },
    ],
  },
  {
    county: "Benton County",
    numberSold: 110,
    avgSoldPrice: 556679,
    avgListPrice: 562480,
    avgDOM: 102,
    activeListings: 126,
    acreageSold: 23,
    acreageAvgPrice: 874647,
    totalSoldHistory: [
      { year: 2020, q1Sold: 187 },
      { year: 2021, q1Sold: 167 },
      { year: 2022, q1Sold: 199 },
      { year: 2023, q1Sold: 131 },
      { year: 2024, q1Sold: 144 },
      { year: 2025, q1Sold: 142 },
      { year: 2026, q1Sold: 133 },
    ],
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

// ─── MLS SOURCE INFO ────────────────────────────────────────
export const mlsSource = {
  name: "Willamette Valley MLS",
  asOf: "March 31, 2026",
  quarterLabel: "Q1 2026",
  statsPageUrl: "https://www.teamgillott.com/info/stats2",
};

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
