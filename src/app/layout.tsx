import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE_URL, TEAM_URL } from "@/data/config";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lebanon, Oregon Real Estate | Team Gillott",
  description:
    "Discover your dream home in Lebanon, Corvallis, or Albany, Oregon. Team Gillott offers expert real estate services, market insights, and neighborhood guides.",
  keywords: [
    "Lebanon Oregon real estate",
    "Corvallis homes for sale",
    "Albany Oregon properties",
    "Team Gillott real estate",
    "Willamette Valley homes",
  ],
  authors: [{ name: "Team Gillott", url: TEAM_URL }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Team Gillott Lebanon Real Estate",
    title: "Lebanon, Oregon Real Estate | Team Gillott",
    description:
      "Discover your dream home in Lebanon, Corvallis, or Albany, Oregon. Expert real estate services from Team Gillott.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lebanon, Oregon Real Estate | Team Gillott",
    description:
      "Discover your dream home in Lebanon, Corvallis, or Albany, Oregon.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Team Gillott",
  description:
    "Team Gillott is a premier real estate team serving Lebanon, Corvallis, and Albany, Oregon.",
  url: TEAM_URL,
  sameAs: [
    "https://www.facebook.com/teamgillott",
    "https://www.instagram.com/teamgillott",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Team Gillott | Keller Williams",
    addressLocality: "Lebanon",
    addressRegion: "OR",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Lebanon", addressRegion: "OR" },
    { "@type": "City", name: "Corvallis", addressRegion: "OR" },
    { "@type": "City", name: "Albany", addressRegion: "OR" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Team Gillott Real Estate",
  description:
    "Professional real estate services in Lebanon, Corvallis, and Albany, Oregon",
  url: TEAM_URL,
  telephone: "+1-541-234-5678",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Team Gillott | Keller Williams",
    addressLocality: "Lebanon",
    addressRegion: "OR",
    postalCode: "97355",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.6383,
    longitude: -122.6375,
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <SchemaMarkup schema={organizationSchema} />
        <SchemaMarkup schema={localBusinessSchema} />
        <meta name="theme-color" content="#CA3121" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8fafb] text-[#354652] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
