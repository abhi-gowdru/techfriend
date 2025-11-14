'use client'

import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 grid-glow"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-slide-up">
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm font-medium">100% Open Source & Free</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up text-balance" style={{animationDelay: '0.1s'}}>
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            All Your Tools
          </span>
          {' '}in One Place
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up text-balance" style={{animationDelay: '0.2s'}}>
          Free, open-source productivity tools designed for everyday life. From invoices to QR codes, all the tools you need to stay productive and organized.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
            Get Started Free
          </button>
          <button className="px-8 py-3 rounded-lg border border-border hover:bg-muted transition-colors flex items-center gap-2">
            Learn More
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur border border-border/50">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-xs text-muted-foreground">Tools Available</div>
          </div>
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur border border-border/50">
            <div className="text-2xl font-bold text-accent">100K+</div>
            <div className="text-xs text-muted-foreground">Active Users</div>
          </div>
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur border border-border/50">
            <div className="text-2xl font-bold text-primary">Zero</div>
            <div className="text-xs text-muted-foreground">Ads & Tracking</div>
          </div>
        </div>
      </div>
    </section>
  )
}
