'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-[#e2e8f0] rounded-2xl overflow-hidden hover:shadow-md hover:border-[#0099cc]/30 transition-all duration-300 bg-white"
        >
          <button
            onClick={() => toggleAccordion(item.id)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#f8fafb] transition-colors duration-300 text-left"
            aria-expanded={expandedId === item.id}
            aria-controls={`faq-content-${item.id}`}
          >
            <span className="font-semibold text-[#1a2b36] text-lg pr-4 tracking-tight">{item.question}</span>
            <span
              className={`flex-shrink-0 text-[#0099cc] font-bold text-2xl transition-transform duration-200 ${
                expandedId === item.id ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
          {expandedId === item.id && (
            <div
              id={`faq-content-${item.id}`}
              className="px-6 py-4 bg-[#f8fafb] border-t border-[#e2e8f0] text-[#1a2b36]"
            >
              <p className="text-base leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
