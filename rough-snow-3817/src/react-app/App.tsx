'use client'

import Navbar from '@/components/landing-page/navbar'
import Footer from '@/components/landing-page/footer'
import Hero from '@/components/landing-page/hero'
import Features from '@/components/landing-page/features'
import Tools from '@/components/landing-page/tools'
import Testimonials from '@/components/landing-page/testimonials'
import FAQ from '@/components/landing-page/faq'
import CTA from '@/components/landing-page/cta'

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Tools />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
