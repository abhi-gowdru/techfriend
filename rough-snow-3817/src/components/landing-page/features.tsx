'use client'

import { Zap, Lock, Code2, Smartphone, Globe, Settings } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed. Tools load instantly and run smoothly on any device.',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your data stays yours. Everything processes locally, no tracking or logging.',
  },
  {
    icon: Code2,
    title: 'Open Source',
    description: 'Fully transparent code. Contribute, fork, and customize as you wish.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Responsive design works perfectly on phones, tablets, and desktops.',
  },
  {
    icon: Globe,
    title: 'Offline Access',
    description: 'Use most tools without internet. Perfect for on-the-go productivity.',
  },
  {
    icon: Settings,
    title: 'Highly Customizable',
    description: 'Themes, preferences, and layouts that adapt to your workflow.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-glow opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Why Choose ToolHub?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We believe tools should be simple, fast, and respect your privacy. Here's what makes ToolHub different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
