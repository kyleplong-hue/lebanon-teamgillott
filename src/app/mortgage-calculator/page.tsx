import MortgageCalcClient from '@/components/MortgageCalcClient';
import { WebPageSchema } from '@/components/SchemaMarkup';
import { siteUrl } from '@/data/config';

export const metadata = {
  title: 'Mortgage Calculator | Lebanon, Oregon Real Estate | Team Gillott',
  description:
    'Calculate your monthly mortgage payment in Lebanon, Oregon. Explore affordability scenarios and payment breakdowns with our free mortgage calculator.',
  keywords:
    'mortgage calculator, monthly payment calculator, Lebanon Oregon homes, mortgage rates, down payment calculator',
};

export default function MortgageCalculatorPage() {
  return (
    <>
      <WebPageSchema
        title="Mortgage Calculator — Lebanon, Oregon"
        description="Calculate your monthly mortgage payment in Lebanon, Oregon. Explore affordability scenarios and payment breakdowns."
        url={siteUrl('/mortgage-calculator')}
      />
      <MortgageCalcClient />
    </>
  );
}
