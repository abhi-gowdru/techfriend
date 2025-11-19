'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Github } from 'lucide-react'
import logo from '@/react-app/assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
                <img src={logo} alt="TechFriend" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition">Features</a>
            <a href="#tools" className="text-sm hover:text-primary transition">Tools</a>
            <a href="#faq" className="text-sm hover:text-primary transition">FAQ</a>
            <a href="#contact" className="text-sm hover:text-primary transition">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition hidden sm:block"
            >
              <Github size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slide-up">
            <a href="#features" className="block px-4 py-2 rounded-lg hover:bg-muted transition">Features</a>
            <a href="#tools" className="block px-4 py-2 rounded-lg hover:bg-muted transition">Tools</a>
            <a href="#faq" className="block px-4 py-2 rounded-lg hover:bg-muted transition">FAQ</a>
            <a href="#contact" className="block px-4 py-2 rounded-lg hover:bg-muted transition">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
