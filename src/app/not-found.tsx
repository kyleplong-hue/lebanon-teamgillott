import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | Team Gillott',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <section className="w-full min-h-[60vh] bg-[#f8fafb] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-7xl sm:text-8xl font-bold text-[#0099cc] tracking-tight mb-6">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2b36] tracking-tight mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-[#64748b] mb-8 max-w-xl mx-auto">
            Sorry, the page you are looking for doesn't exist. It may have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-[#0099cc] text-white font-semibold rounded-2xl hover:shadow-md transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/neighborhoods"
            className="inline-block px-8 py-3 bg-white text-[#0099cc] font-semibold rounded-2xl border border-[#e2e8f0] hover:shadow-md transition-all duration-300"
          >
            Explore Neighborhoods
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-[#e2e8f0]">
          <p className="text-[#64748b] mb-6">
            Looking for something specific?
          </p>
          <nav className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
            <Link href="/" className="text-[#0099cc] hover:text-[#0077aa] transition-colors">
              Home
            </Link>
            <Link href="/first-time-buyers" className="text-[#0099cc] hover:text-[#0077aa] transition-colors">
              First-Time Buyers
            </Link>
            <Link href="/selling" className="text-[#0099cc] hover:text-[#0077aa] transition-colors">
              Selling
            </Link>
            <Link href="/neighborhoods" className="text-[#0099cc] hover:text-[#0077aa] transition-colors">
              Neighborhoods
            </Link>
            <Link href="/market-report" className="text-[#0099cc] hover:text-[#0077aa] transition-colors">
              Market Report
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
