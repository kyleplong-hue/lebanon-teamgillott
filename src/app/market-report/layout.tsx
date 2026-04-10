import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lebanon, Oregon Real Estate Market Report - April 2026',
  description:
    'Latest Lebanon real estate market data: median price $395K, homes selling 34.5% faster. Compare to Corvallis and Albany.',
  openGraph: {
    title: 'Lebanon, Oregon Real Estate Market Report - April 2026',
    description:
      'Latest Lebanon real estate market data: median price $395K, homes selling 34.5% faster. Compare to Corvallis and Albany.',
    type: 'website',
    url: 'https://lebanon.justsoldle.com/market-report',
  },
};

export default function MarketReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
