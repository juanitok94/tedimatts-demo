// components/FAQPreview.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default

  const faqs = [
    {
      question: "How quickly can you respond to emergency service calls?",
      answer: "We provide same-day emergency service throughout NYC's five boroughs, Westchester, and Long Island. When you call, you reach our team directly—no call centers, no delays. Most emergency repairs are completed within 4-6 hours of your call."
    },
    {
      question: "What makes TediMatts different from corporate competitors like Hercules?",
      answer: "We're family-owned and operated since 1997, while Hercules was acquired by WASH Multifamily Laundry Systems in 2019. You work directly with Teddy Mottola Jr. and our dedicated team who have been serving NYC properties for over 27 years. We're invested in long-term relationships, not corporate quotas."
    },
    {
      question: "Do you offer free consultations and property assessments?",
      answer: "Yes! We provide complimentary on-site consultations to assess your laundry room, review equipment performance, and recommend solutions tailored to your property's needs. There's no obligation—we want to help you make the best decision for your residents and your budget."
    },
    {
      question: "What brands of equipment do you install and service?",
      answer: "We specialize in Speed Queen commercial laundry equipment, the industry leader in durability and performance. As a 5-time Speed Queen Excellence Award winner (2015-2019), we have deep expertise with their products and can service all major commercial laundry brands."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Quick answers to common questions about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <span className={`text-blue-600 text-2xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Have more questions? We've got answers.
          </p>
          <Link 
            href="/faq" 
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            View All 26 FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}