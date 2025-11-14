'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/landing-page/navbar'
import Footer from '@/components/landing-page/footer'
import Hero from '@/components/landing-page/hero'
import Features from '@/components/landing-page/features'
import Tools from '@/components/landing-page/tools'
import Stats from '@/components/landing-page/stats'
import Testimonials from '@/components/landing-page/testimonials'
import Integration from '@/components/landing-page/integration'
import FAQ from '@/components/landing-page/faq'
import CTA from '@/components/landing-page/cta'

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const dark = document.documentElement.classList.contains('dark')
    setIsDark(dark)
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    
    if (newDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Tools />
        <Stats />
        <Integration />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
