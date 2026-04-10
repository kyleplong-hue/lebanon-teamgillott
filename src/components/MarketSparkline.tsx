'use client';

import { MarketTrend } from '@/data/market';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';

interface MarketSparklineProps {
  data: MarketTrend[];
}

export default function MarketSparkline({ data }: MarketSparklineProps) {
  const chartData = data.map((d) => ({
    month: d.month,
    price: d.medianPrice / 1000,
  }));

  return (
    <div className="h-16 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
          <defs>
            <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CA3121" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#CA3121" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-[#354652] text-white text-xs px-2.5 py-1.5 rounded-lg shadow-lg">
                    <span className="font-medium">${payload[0].value}K</span>
                    <span className="text-[#94a3b8] ml-1.5">{payload[0].payload.month}</span>
                  </div>
                );
              }
              return null;
            }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#CA3121"
            strokeWidth={2}
            fill="url(#sparkGrad)"
            dot={false}
            activeDot={{ r: 3, fill: '#CA3121', stroke: '#fff', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
