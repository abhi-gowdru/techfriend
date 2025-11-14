'use client'

import { TrendingUp } from 'lucide-react'

const stats = [
  { value: '100K+', label: 'Active Users', company: 'Global Community' },
  { value: '500M+', label: 'Operations', company: 'Monthly' },
  { value: '99.9%', label: 'Uptime', company: 'Guaranteed' },
  { value: '50+', label: 'Tools', company: 'And Growing' },
]

export default function Stats() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur text-center animate-slide-up group hover:border-primary/50 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
                <TrendingUp size={20} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="text-sm font-semibold">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
