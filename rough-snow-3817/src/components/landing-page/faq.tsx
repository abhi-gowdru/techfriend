'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is ToolHub really free?',
    answer: 'Yes, ToolHub is completely free and always will be. We believe great tools should be accessible to everyone. There are no hidden charges or premium tiers.',
  },
  {
    question: 'How is ToolHub funded?',
    answer: 'ToolHub is open source and community-driven. We rely on community contributions, sponsorships, and donations to maintain the platform.',
  },
  {
    question: 'Can I use these tools offline?',
    answer: 'Most tools work perfectly offline! Many operations happen entirely in your browser with no server calls required. Just download and go.',
  },
  {
    question: 'Is my data safe?',
    answer: 'Absolutely. Your data never leaves your device unless you choose to export it. We have zero tracking, zero logging, and zero ads.',
  },
  {
    question: 'Can I contribute to ToolHub?',
    answer: 'Yes! We love contributions. Check out our GitHub repository to submit bug fixes, new features, or improvements.',
  },
  {
    question: 'Do you have an API?',
    answer: 'Yes, we provide REST APIs for many tools. Check our documentation for endpoints, authentication, and rate limits.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-glow opacity-50"></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Everything you need to know about ToolHub
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 bg-card/50 border-t border-border text-muted-foreground animate-slide-down">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
