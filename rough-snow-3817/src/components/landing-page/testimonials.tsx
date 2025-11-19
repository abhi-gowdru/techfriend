'use client'

import { Star } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Freelance Designer',
    content: 'TechFriend has become my go-to platform for all productivity needs. The invoice generator alone saves me hours every month!',
    avatar: '👩‍💼',
  },
  {
    name: 'Alex Kumar',
    role: 'Startup Founder',
    content: 'Open source, fast, and reliable. This is exactly what the community needed. Already integrated it into our workflow.',
    avatar: '👨‍💼',
  },
  {
    name: 'Maria Garcia',
    role: 'Software Developer',
    content: 'Love the privacy-first approach. All tools work offline, and the code is so clean. I contributed multiple features!',
    avatar: '👩‍💻',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const isCarousel = testimonials.length > 3

  useEffect(() => {
    if (!isCarousel) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isCarousel])

  return (
    <section className="relative py-20 overflow-hidden bg-black">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-cyan-300 text-balance">
            Loved by Creators & Developers
          </h2>
          <p className="text-lg text-gray-200/60 text-balance">
            Join thousands of users who have switched to TechFriend
          </p>
        </div>

        {/* Grid if 3 or fewer, carousel if more */}
        {!isCarousel ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_18px_rgba(0,255,255,0.15)] hover:border-cyan-400 hover:shadow-[0_0_22px_rgba(0,255,255,0.6)] transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-cyan-300 text-cyan-300" />
                  ))}
                </div>
                <p className="text-cyan-100/70 mb-4">{t.content}</p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{t.avatar}</div>
                  <div>
                    <div className="font-semibold text-cyan-200">{t.name}</div>
                    <div className="text-sm text-cyan-100/60">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
            {/* Slides */}
            <div
              className="transition-transform duration-700 flex"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="min-w-full p-6 rounded-2xl border border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_18px_rgba(0,255,255,0.15)] hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-cyan-300 text-cyan-300" />
                    ))}
                  </div>
                  <p className="text-cyan-100/70 mb-4">{t.content}</p>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{t.avatar}</div>
                    <div>
                      <div className="font-semibold text-cyan-200">{t.name}</div>
                      <div className="text-sm text-cyan-100/60">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    current === i
                      ? 'bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.8)]'
                      : 'bg-cyan-300/40 hover:bg-cyan-300'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}