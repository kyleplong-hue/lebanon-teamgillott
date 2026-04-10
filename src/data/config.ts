/**
 * SITE CONFIGURATION
 *
 * Central config for all URLs and site-wide constants.
 * When migrating from staging (justsoldle.com) to production
 * (teamgillott.com), update SITE_URL below — everything else
 * pulls from this file automatically.
 */

// ─── BASE URLS ──────────────────────────────────────────────
// Content hub URL (this Next.js site)
// Staging:    https://lebanon.justsoldle.com
// Production: https://lebanon.teamgillott.com
export const SITE_URL = "https://lebanon.justsoldle.com";

// Team Gillott main website (CINC platform)
export const TEAM_URL = "https://www.teamgillott.com";

// ─── SITE IDENTITY ──────────────────────────────────────────
export const SITE_NAME = "Team Gillott — Lebanon Oregon Real Estate";
export const SITE_DESCRIPTION =
  "Lebanon Oregon real estate market data, neighborhood guides, and home buying resources from Team Gillott at Keller Williams.";

export const ORGANIZATION = {
  name: "Team Gillott",
  legalName: "Team Gillott at Keller Williams Realty Mid-Willamette",
  url: "https://www.teamgillott.com",
  city: "Lebanon",
  state: "Oregon",
  stateCode: "OR",
};

// ─── HELPERS ────────────────────────────────────────────────
/** Build a full URL for any path on this content hub */
export function siteUrl(path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean === "/" ? "" : clean}`;
}

/** Build a full URL for the main Team Gillott site */
export function teamUrl(path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${TEAM_URL}${clean === "/" ? "" : clean}`;
}
