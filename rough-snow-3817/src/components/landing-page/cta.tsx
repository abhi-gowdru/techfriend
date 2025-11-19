'use client'

import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-black">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-cyan-300 text-balance">
          Ready to Transform Your Workflow?
        </h2>

        <p className="text-lg text-gray-200/70 mb-8 max-w-2xl mx-auto text-balance">
          Join 100K+ users who are already using TechFriend to boost their productivity. Start using all 50+ tools for free today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Neon Primary Button */}
          <button className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-semibold shadow-[0_0_5px_rgba(0,255,255,0.6)] hover:shadow-[0_0_15px_rgba(0,255,255,0.9)] transition-all duration-300 flex items-center gap-2 group border border-cyan-400/40">
            Get Started Now
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          {/* Secondary Button */}
          <button className="px-8 py-4 rounded-2xl border border-cyan-400/40 text-cyan-200 hover:bg-cyan-500/10 transition-all backdrop-blur-sm shadow-[0_0_8px_rgba(0,255,255,0.2)]">
            View on GitHub
          </button>
        </div>
      </div>
    </section>
  )
}