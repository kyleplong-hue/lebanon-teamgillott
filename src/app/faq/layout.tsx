import { Metadata } from 'next';
import { siteUrl } from '@/data/config';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Lebanon Real Estate',
  description:
    'Get answers to your Lebanon real estate questions: median home prices, schools, neighborhoods, first-time buyer programs, and more.',
  openGraph: {
    title: 'Frequently Asked Questions - Lebanon Real Estate',
    description:
      'Get answers to your Lebanon real estate questions: median home prices, schools, neighborhoods, first-time buyer programs, and more.',
    type: 'website',
    url: siteUrl('/faq'),
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
