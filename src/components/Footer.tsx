'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#354652] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold font-sans mb-4">Team Gillott</h3>
            <p className="text-blue-100">
              Serving Lebanon, Corvallis, and Albany with professional real estate services.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold font-sans mb-4">Neighborhoods</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="/neighborhoods/south-lebanon" className="hover:text-white transition-colors">
                  South Lebanon
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/east-lebanon" className="hover:text-white transition-colors">
                  East Lebanon
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/north-lebanon" className="hover:text-white transition-colors">
                  North Lebanon
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/hamilton-creek" className="hover:text-white transition-colors">
                  Hamilton Creek
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold font-sans mb-4">Resources</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a
                  href="https://www.teamgillott.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Team Gillott Website
                </a>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Market Report
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-200 pt-6 text-center text-blue-100 text-sm">
          <p>&copy; 2026 Team Gillott Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
