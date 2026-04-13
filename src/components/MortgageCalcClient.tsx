'use client';

import { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { CaretUp, CaretDown } from '@phosphor-icons/react';
import SchemaMarkup from '@/components/SchemaMarkup';
import CTABanner from '@/components/CTABanner';
import { currentMonth, formatPriceFull } from '@/data/market';
import { siteUrl } from '@/data/config';
import { HERO_MORTGAGE } from '@/data/hero-images';

const MORTGAGE_COLORS = {
  principal: '#CA3121',
  taxes: '#CA3121',
  insurance: '#64748b',
};

interface MortgageCalculation {
  monthlyPayment: number;
  principalInterest: number;
  propertyTax: number;
  homeInsurance: number;
  totalMonthly: number;
}

interface AffordabilityScenario {
  monthlyBudget: number;
  maxHomePrice: number;
  downPayment: number;
}

function calculateMortgage(
  homePrice: number,
  downPaymentPercent: number,
  interestRate: number,
  loanTermYears: number
): MortgageCalculation {
  const downPaymentAmount = homePrice * (downPaymentPercent / 100);
  const principal = homePrice - downPaymentAmount;

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  // P&I formula: M = P[r(1+r)^n]/[(1+r)^n-1]
  const monthlyPayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  // Property tax: annual rate of 1.07% divided by 12
  const monthlyPropertyTax = (homePrice * 0.0107) / 12;

  // Home insurance: $1,200/year divided by 12
  const monthlyHomeInsurance = 1200 / 12;

  return {
    monthlyPayment: isFinite(monthlyPayment) ? monthlyPayment : 0,
    principalInterest: isFinite(monthlyPayment) ? monthlyPayment : 0,
    propertyTax: monthlyPropertyTax,
    homeInsurance: monthlyHomeInsurance,
    totalMonthly: monthlyPayment + monthlyPropertyTax + monthlyHomeInsurance,
  };
}

function calculateAffordability(
  monthlyBudget: number,
  interestRate: number,
  loanTermYears: number,
  downPaymentPercent: number
): AffordabilityScenario {
  // Work backwards from budget to max home price
  // Budget = (P&I + Taxes + Insurance)
  // This requires iteration since taxes depend on home price

  let maxHomePrice = 100000; // Start with a guess
  let low = 50000;
  let high = 2000000;

  // Binary search to find the max home price
  for (let i = 0; i < 20; i++) {
    const mid = (low + high) / 2;
    const calc = calculateMortgage(mid, downPaymentPercent, interestRate, loanTermYears);

    if (calc.totalMonthly < monthlyBudget) {
      low = mid;
    } else {
      high = mid;
    }
  }

  maxHomePrice = low;
  const downPayment = maxHomePrice * (downPaymentPercent / 100);

  return {
    monthlyBudget,
    maxHomePrice,
    downPayment,
  };
}

export default function MortgageCalcClient() {
  // Calculator inputs
  const [homePrice, setHomePrice] = useState(currentMonth.medianPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(currentMonth.mortgageRate);
  const [loanTerm, setLoanTerm] = useState(30);

  // Calculate current mortgage
  const mortgageInfo = useMemo(
    () => calculateMortgage(homePrice, downPaymentPercent, interestRate, loanTerm),
    [homePrice, downPaymentPercent, interestRate, loanTerm]
  );

  const downPaymentAmount = homePrice * (downPaymentPercent / 100);
  const loanAmount = homePrice - downPaymentAmount;

  // Pie chart data
  const pieData = [
    { name: 'Principal & Interest', value: mortgageInfo.principalInterest },
    { name: 'Property Tax', value: mortgageInfo.propertyTax },
    { name: 'Home Insurance', value: mortgageInfo.homeInsurance },
  ];

  // Comparison scenarios (different down payments)
  const comparisonScenarios = [5, 10, 15, 20].map((dpPercent) => {
    const calc = calculateMortgage(homePrice, dpPercent, interestRate, loanTerm);
    return {
      downPayment: dpPercent,
      downPaymentAmount: homePrice * (dpPercent / 100),
      monthlyPayment: calc.totalMonthly,
      loanAmount: homePrice - homePrice * (dpPercent / 100),
    };
  });

  // Affordability scenarios
  const affordabilityScenarios = [1500, 2000, 2500, 3000].map((budget) =>
    calculateAffordability(budget, interestRate, loanTerm, downPaymentPercent)
  );

  const mortgageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Lebanon Oregon Mortgage Calculator',
    description: 'Free mortgage calculator for Lebanon, Oregon real estate. Estimate monthly payments with current rates and down payment scenarios.',
    url: siteUrl('/mortgage-calculator'),
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Team Gillott',
      url: 'https://www.teamgillott.com',
    },
  };

  return (
    <>
      <SchemaMarkup schema={mortgageSchema} />

      {/* Hero */}
      <section
        className="relative w-full pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_MORTGAGE}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 border border-white/25 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-medium text-white/90">
              Real-time rates for Lebanon, Oregon
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.08] mb-4">
            Mortgage Calculator
          </h1>

          <p className="text-lg text-white/80 max-w-2xl">
            Explore your affordability and see payment breakdowns. Calculate scenarios instantly using current
            Lebanon market rates.
          </p>
        </div>
      </section>

      {/* Main Calculator Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Inputs */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 space-y-6 sticky top-6">
              {/* Home Price */}
              <div>
                <label className="block text-sm font-semibold text-[#354652] mb-3">
                  Home Price
                </label>
                <input
                  type="range"
                  min="50000"
                  max="1500000"
                  step="10000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full h-2 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer accent-[#CA3121]"
                />
                <div className="flex items-center gap-2 mt-3">
                  <input
                    type="number"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="flex-1 px-3 py-2 bg-[#f8fafb] border border-[#e2e8f0] rounded-lg text-sm font-semibold text-[#354652] tabular-nums"
                  />
                  <span className="text-sm font-medium text-[#64748b]">$</span>
                </div>
              </div>

              {/* Down Payment % */}
              <div>
                <label className="block text-sm font-semibold text-[#354652] mb-3">
                  Down Payment %
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer accent-[#CA3121]"
                />
                <div className="flex items-center gap-2 mt-3">
                  <input
                    type="number"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Math.max(5, Math.min(50, Number(e.target.value))))}
                    className="flex-1 px-3 py-2 bg-[#f8fafb] border border-[#e2e8f0] rounded-lg text-sm font-semibold text-[#354652] tabular-nums"
                  />
                  <span className="text-sm font-medium text-[#64748b]">%</span>
                </div>
                <p className="text-xs text-[#64748b] mt-2">
                  Down payment: {formatPriceFull(downPaymentAmount)}
                </p>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-semibold text-[#354652] mb-3">
                  Interest Rate (%)
                </label>
                <input
                  type="range"
                  min="3"
                  max="10"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer accent-[#CA3121]"
                />
                <div className="flex items-center gap-2 mt-3">
                  <input
                    type="number"
                    value={interestRate.toFixed(2)}
                    onChange={(e) => setInterestRate(Math.max(3, Math.min(10, Number(e.target.value))))}
                    step="0.1"
                    className="flex-1 px-3 py-2 bg-[#f8fafb] border border-[#e2e8f0] rounded-lg text-sm font-semibold text-[#354652] tabular-nums"
                  />
                  <span className="text-sm font-medium text-[#64748b]">%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-sm font-semibold text-[#354652] mb-3">
                  Loan Term
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setLoanTerm(15)}
                    className={`py-2 px-3 rounded-lg font-semibold text-sm transition-all ${
                      loanTerm === 15
                        ? 'bg-[#CA3121] text-white'
                        : 'bg-[#f8fafb] border border-[#e2e8f0] text-[#354652] hover:border-[#cbd5e1]'
                    }`}
                  >
                    15 years
                  </button>
                  <button
                    onClick={() => setLoanTerm(30)}
                    className={`py-2 px-3 rounded-lg font-semibold text-sm transition-all ${
                      loanTerm === 30
                        ? 'bg-[#CA3121] text-white'
                        : 'bg-[#f8fafb] border border-[#e2e8f0] text-[#354652] hover:border-[#cbd5e1]'
                    }`}
                  >
                    30 years
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Results & Chart */}
          <div className="lg:col-span-2 space-y-8">
            {/* Monthly Payment Result */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 sm:p-8">
              <h2 className="text-sm font-medium text-[#64748b] uppercase tracking-wider mb-2">
                Monthly Payment
              </h2>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-semibold tracking-tight text-[#354652] tabular-nums">
                  {formatPriceFull(mortgageInfo.totalMonthly).replace('$', '')}
                </span>
                <span className="text-lg text-[#64748b]">/month</span>
              </div>

              {/* Payment Breakdown Rows */}
              <div className="space-y-3 border-t border-[#e2e8f0] pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: MORTGAGE_COLORS.principal }} />
                    <span className="text-sm text-[#64748b]">Principal & Interest</span>
                  </div>
                  <span className="text-sm font-semibold text-[#354652] tabular-nums">
                    {formatPriceFull(mortgageInfo.principalInterest)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: MORTGAGE_COLORS.taxes }} />
                    <span className="text-sm text-[#64748b]">Property Tax (1.07%)</span>
                  </div>
                  <span className="text-sm font-semibold text-[#354652] tabular-nums">
                    {formatPriceFull(mortgageInfo.propertyTax)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: MORTGAGE_COLORS.insurance }} />
                    <span className="text-sm text-[#64748b]">Home Insurance</span>
                  </div>
                  <span className="text-sm font-semibold text-[#354652] tabular-nums">
                    {formatPriceFull(mortgageInfo.homeInsurance)}
                  </span>
                </div>
              </div>

              {/* Loan Summary */}
              <div className="border-t border-[#e2e8f0] mt-6 pt-6 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Loan Amount</span>
                  <span className="font-semibold text-[#354652] tabular-nums">{formatPriceFull(loanAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">{loanTerm}-year term</span>
                  <span className="font-semibold text-[#354652] tabular-nums">{loanTerm * 12} payments</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Interest Rate</span>
                  <span className="font-semibold text-[#354652] tabular-nums">{interestRate.toFixed(2)}%</span>
                </div>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 sm:p-8">
              <h2 className="text-sm font-medium text-[#64748b] uppercase tracking-wider mb-6">
                Payment Breakdown
              </h2>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={130}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            index === 0
                              ? MORTGAGE_COLORS.principal
                              : index === 1
                                ? MORTGAGE_COLORS.taxes
                                : MORTGAGE_COLORS.insurance
                          }
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => formatPriceFull(Number(value))}
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-[#f8fafb]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-[#354652] mb-8">
            Down Payment Scenarios
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e2e8f0]">
                  <th className="text-left px-4 py-4 font-semibold text-[#354652]">Down Payment</th>
                  <th className="text-right px-4 py-4 font-semibold text-[#354652]">Amount</th>
                  <th className="text-right px-4 py-4 font-semibold text-[#354652]">Loan Amount</th>
                  <th className="text-right px-4 py-4 font-semibold text-[#354652]">Monthly Payment</th>
                </tr>
              </thead>
              <tbody>
                {comparisonScenarios.map((scenario, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-[#e2e8f0] ${
                      scenario.downPayment === downPaymentPercent
                        ? 'bg-[#CA3121]/5'
                        : ''
                    }`}
                  >
                    <td className="px-4 py-4 font-medium text-[#354652]">
                      {scenario.downPayment}%
                    </td>
                    <td className="px-4 py-4 text-right font-semibold text-[#354652] tabular-nums">
                      {formatPriceFull(scenario.downPaymentAmount)}
                    </td>
                    <td className="px-4 py-4 text-right font-semibold text-[#354652] tabular-nums">
                      {formatPriceFull(scenario.loanAmount)}
                    </td>
                    <td className="px-4 py-4 text-right font-semibold text-[#354652] tabular-nums">
                      {formatPriceFull(scenario.monthlyPayment)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Affordability Guide */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-[#354652] mb-2">
            What Home Price Can You Afford?
          </h2>
          <p className="text-lg text-[#64748b] mb-8 max-w-2xl">
            Based on different monthly budgets, see what price range you might target. Assumes{' '}
            {downPaymentPercent}% down payment at {interestRate.toFixed(2)}% interest.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {affordabilityScenarios.map((scenario, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
                <p className="text-xs font-medium text-[#64748b] uppercase tracking-wider mb-3">
                  Monthly Budget
                </p>
                <p className="text-2xl font-semibold text-[#354652] mb-4 tabular-nums">
                  {formatPriceFull(scenario.monthlyBudget)}
                </p>

                <div className="space-y-3 border-t border-[#e2e8f0] pt-4">
                  <div>
                    <p className="text-xs text-[#64748b] mb-1">Max Home Price</p>
                    <p className="text-lg font-semibold text-[#354652] tabular-nums">
                      {formatPriceFull(scenario.maxHomePrice)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[#64748b] mb-1">Your Down Payment</p>
                    <p className="text-sm font-semibold text-[#CA3121] tabular-nums">
                      {formatPriceFull(scenario.downPayment)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-[#CA3121]/5 border border-[#CA3121]/15 rounded-lg">
            <p className="text-sm text-[#64748b]">
              These estimates include principal, interest, property taxes (1.07% annually), and home insurance
              ($100/month). Actual costs may vary based on your specific situation, credit score, and local lender
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
