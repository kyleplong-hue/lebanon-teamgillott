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
          className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => toggleAccordion(item.id)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
            aria-expanded={expandedId === item.id}
            aria-controls={`faq-content-${item.id}`}
          >
            <span className="font-semibold text-[#354652] text-lg pr-4">{item.question}</span>
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
              className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-[#354652]"
            >
              <p className="text-base leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
