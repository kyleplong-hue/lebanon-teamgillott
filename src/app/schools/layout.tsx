import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lebanon, Oregon Schools Guide - Top-Rated School Districts',
  description:
    'Explore Lebanon schools: 91% graduation rate, Sand Ridge Charter School, Lebanon Community School District 9. Find homes near top-rated schools.',
  openGraph: {
    title: 'Lebanon, Oregon Schools Guide - Top-Rated School Districts',
    description:
      'Explore Lebanon schools: 91% graduation rate, Sand Ridge Charter School, Lebanon Community School District 9. Find homes near top-rated schools.',
    type: 'website',
    url: 'https://lebanon.teamgillott.com/schools',
  },
};

export default function SchoolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
