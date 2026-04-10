'use client';

import { useMemo } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { marketTrends } from '@/data/market';

export function PriceTrendChart() {
  const chartData = useMemo(() => {
    return marketTrends.map((trend) => ({
      month: trend.month,
      price: trend.medianPrice,
    }));
  }, []);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-[#e2e8f0]">
          <p className="text-sm font-semibold text-[#354652]">{payload[0].payload.month}</p>
          <p className="text-sm text-[#CA3121] font-semibold font-tabular-nums">
            ${(payload[0].value / 1000).toFixed(0)}K
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#CA3121" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#CA3121" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="month"
            stroke="#64748b"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#64748b' }}
          />
          <YAxis
            stroke="#64748b"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#64748b' }}
            tickFormatter={(value) => `$${value / 1000}K`}
            domain={['dataMin - 10000', 'dataMax + 10000']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#CA3121"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPrice)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SalesVolumeChart() {
  const chartData = useMemo(() => {
    return marketTrends.map((trend) => ({
      month: trend.month,
      sales: trend.closedSales,
    }));
  }, []);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-[#e2e8f0]">
          <p className="text-sm font-semibold text-[#354652]">{payload[0].payload.month}</p>
          <p className="text-sm text-[#CA3121] font-semibold font-tabular-nums">
            {payload[0].value} sales
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="month"
            stroke="#64748b"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#64748b' }}
          />
          <YAxis
            stroke="#64748b"
            style={{ fontSize: '12px' }}
            tick={{ fill: '#64748b' }}
            domain={[0, 'dataMax + 5']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="sales"
            fill="#CA3121"
            radius={[4, 4, 0, 0]}
            isAnimationActive={true}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
