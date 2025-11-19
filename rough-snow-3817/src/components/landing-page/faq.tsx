'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is TechFriend really free?',
    answer:
      'Yes, TechFriend is completely free and always will be. We believe great tools should be accessible to everyone. There are no hidden charges or premium tiers.',
  },
  {
    question: 'How is TechFriend funded?',
    answer:
      'TechFriend is open source and community-driven. We rely on community contributions, sponsorships, and donations to maintain the platform.',
  },
  {
    question: 'Can I use these tools offline?',
    answer:
      'Most tools work perfectly offline! Many operations happen entirely in your browser with no server calls required. Just download and go.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Absolutely. Your data never leaves your device unless you choose to export it. We have zero tracking, zero logging, and zero ads.',
  },
  {
    question: 'Can I contribute to TechFriend?',
    answer:
      'Yes! We love contributions. Check out our GitHub repository to submit bug fixes, new features, or improvements.',
  },
  {
    question: 'Do you have an API?',
    answer:
      'No, we currently do not offer an API. However, all our tools are open source, so you can fork and adapt them as needed.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 overflow-hidden bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-cyan-300 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-200/60 text-balance">
            Everything you need to know about TechFriend
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-cyan-500/30 rounded-2xl backdrop-blur-md bg-black/40  hover:border-cyan-400 transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 flex items-center justify-between text-left text-cyan-200 hover:bg-cyan-500/10 transition-all rounded-xl"
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-cyan-300' : 'text-cyan-400'
                  }`}
                />
              </button>

              {/* Animated Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
                  openIndex === index
                    ? 'max-h-40 opacity-100 p-4 border-t border-cyan-500/30'
                    : 'max-h-0 opacity-0 p-0 border-none'
                }`}
              >
                <p className="text-cyan-100/70 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}