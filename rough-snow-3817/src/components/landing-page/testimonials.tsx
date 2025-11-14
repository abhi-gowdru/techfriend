'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Freelance Designer',
    content: 'ToolHub has become my go-to platform for all productivity needs. The invoice generator alone saves me hours every month!',
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
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-glow opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Loved by Creators & Developers
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Join thousands of users who have switched to ToolHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <div className="text-2xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
