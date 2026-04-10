import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Lebanon Real Estate',
  description:
    'Get answers to your Lebanon real estate questions: median home prices, schools, neighborhoods, first-time buyer programs, and more.',
  openGraph: {
    title: 'Frequently Asked Questions - Lebanon Real Estate',
    description:
      'Get answers to your Lebanon real estate questions: median home prices, schools, neighborhoods, first-time buyer programs, and more.',
    type: 'website',
    url: 'https://lebanon.justsoldle.com/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
