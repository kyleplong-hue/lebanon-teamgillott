'use client';

import { useState } from 'react';
import { neighborhoods, type Neighborhood } from '@/data/neighborhoods';

export default function NeighborhoodCompare() {
  const [leftSlug, setLeftSlug] = useState<string>('south-lebanon');
  const [rightSlug, setRightSlug] = useState<string>('north-lebanon');

  const leftNeighborhood = neighborhoods.find((n) => n.slug === leftSlug);
  const rightNeighborhood = neighborhoods.find((n) => n.slug === rightSlug);

  if (!leftNeighborhood || !rightNeighborhood) {
    return null;
  }

  const maxPrice = Math.max(
    leftNeighborhood.priceRange.high,
    rightNeighborhood.priceRange.high
  );

  const PriceBar = ({ range }: { range: { low: number; high: number } }) => {
    const lowPercent = (range.low / maxPrice) * 100;
    const highPercent = (range.high / maxPrice) * 100;
    const width = highPercent - lowPercent;

    return (
      <div className="space-y-2">
        <div className="h-2 bg-[#e2e8f0] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0099cc] rounded-full"
            style={{
              marginLeft: `${lowPercent}%`,
              width: `${width}%`,
            }}
          />
        </div>
        <div className="flex justify-between text-sm text-[#64748b] font-mono tabular-nums">
          <span>${(range.low / 1000).toFixed(0)}K</span>
          <span>${(range.high / 1000).toFixed(0)}K</span>
        </div>
      </div>
    );
  };

  const StatRow = ({
    label,
    leftValue,
    rightValue,
  }: {
    label: string;
    leftValue: React.ReactNode;
    rightValue: React.ReactNode;
  }) => (
    <div className="grid grid-cols-3 gap-4 pb-4 border-b border-[#e2e8f0] last:border-b-0">
      <div className="text-sm font-medium text-[#64748b]">{label}</div>
      <div className="text-sm font-mono tabular-nums text-[#1a2b36] font-semibold">
        {leftValue}
      </div>
      <div className="text-sm font-mono tabular-nums text-[#1a2b36] font-semibold">
        {rightValue}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      {/* Dropdown Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <label className="block text-sm font-semibold text-[#1a2b36] mb-2">
            Select First Neighborhood
          </label>
          <select
            value={leftSlug}
            onChange={(e) => setLeftSlug(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#1a2b36] font-medium focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent transition-all"
          >
            {neighborhoods.map((n) => (
              <option key={n.slug} value={n.slug}>
                {n.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#1a2b36] mb-2">
            Select Second Neighborhood
          </label>
          <select
            value={rightSlug}
            onChange={(e) => setRightSlug(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#1a2b36] font-medium focus:outline-none focus:ring-2 focus:ring-[#0099cc] focus:border-transparent transition-all"
          >
            {neighborhoods.map((n) => (
              <option key={n.slug} value={n.slug}>
                {n.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="bg-[#f8fafb] border border-[#e2e8f0] rounded-2xl p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-[#1a2b36] tracking-tight mb-1">
            {leftNeighborhood.name}
          </h2>
          <p className="text-[#64748b] text-sm mb-6">{leftNeighborhood.tagline}</p>

          {/* Price Range Section */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-3">
              Price Range
            </h3>
            <PriceBar range={leftNeighborhood.priceRange} />
          </div>

          {/* Stats Table */}
          <div className="space-y-0 mb-8">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-4">
              Market Stats
            </h3>
            <div className="bg-white rounded-lg p-4 space-y-0">
              <StatRow
                label="Average Price"
                leftValue={`$${(leftNeighborhood.avgPrice / 1000).toFixed(0)}K`}
                rightValue=""
              />
              <StatRow
                label="Days on Market"
                leftValue={leftNeighborhood.avgDOM}
                rightValue=""
              />
              <StatRow
                label="Annual Turnover"
                leftValue={`${leftNeighborhood.turnoverRate.toFixed(1)}%`}
                rightValue=""
              />
            </div>
          </div>

          {/* Character */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">
              Character
            </h3>
            <p className="text-sm text-[#1a2b36] leading-relaxed">
              {leftNeighborhood.character}
            </p>
          </div>

          {/* Property Types */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">
              Property Types
            </h3>
            <p className="text-sm text-[#1a2b36] leading-relaxed">
              {leftNeighborhood.propertyTypes}
            </p>
          </div>

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-3">
              Highlights
            </h3>
            <div className="flex flex-wrap gap-2">
              {leftNeighborhood.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-[#e8f4f8] text-[#0099cc]"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Schools */}
          <div>
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-3">
              Schools
            </h3>
            <ul className="space-y-2">
              {leftNeighborhood.schools.map((school) => (
                <li
                  key={school}
                  className="text-sm text-[#1a2b36] flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0099cc] mr-2.5" />
                  {school}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#f8fafb] border border-[#e2e8f0] rounded-2xl p-8 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold text-[#1a2b36] tracking-tight mb-1">
            {rightNeighborhood.name}
          </h2>
          <p className="text-[#64748b] text-sm mb-6">{rightNeighborhood.tagline}</p>

          {/* Price Range Section */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-3">
              Price Range
            </h3>
            <PriceBar range={rightNeighborhood.priceRange} />
          </div>

          {/* Stats Table */}
          <div className="space-y-0 mb-8">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-4">
              Market Stats
            </h3>
            <div className="bg-white rounded-lg p-4 space-y-0">
              <StatRow
                label="Average Price"
                leftValue={`$${(rightNeighborhood.avgPrice / 1000).toFixed(0)}K`}
                rightValue=""
              />
              <StatRow
                label="Days on Market"
                leftValue={rightNeighborhood.avgDOM}
                rightValue=""
              />
              <StatRow
                label="Annual Turnover"
                leftValue={`${rightNeighborhood.turnoverRate.toFixed(1)}%`}
                rightValue=""
              />
            </div>
          </div>

          {/* Character */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">
              Character
            </h3>
            <p className="text-sm text-[#1a2b36] leading-relaxed">
              {rightNeighborhood.character}
            </p>
          </div>

          {/* Property Types */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-2">
              Property Types
            </h3>
            <p className="text-sm text-[#1a2b36] leading-relaxed">
              {rightNeighborhood.propertyTypes}
            </p>
          </div>

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-3">
              Highlights
            </h3>
            <div className="flex flex-wrap gap-2">
              {rightNeighborhood.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-[#e8f4f8] text-[#0099cc]"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Schools */}
          <div>
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wide mb-3">
              Schools
            </h3>
            <ul className="space-y-2">
              {rightNeighborhood.schools.map((school) => (
                <li
                  key={school}
                  className="text-sm text-[#1a2b36] flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0099cc] mr-2.5" />
                  {school}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
