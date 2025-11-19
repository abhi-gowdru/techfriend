'use client'

import { Github, Heart } from 'lucide-react'
import logo from '@/react-app/assets/logo.png'

export function smoothScrollTo(id: string) {
  const target = document.querySelector(id)
  if (!target) return

  const top = target.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({
    top,
    behavior: 'smooth'
  })
}

export default function Footer() {
  return (
    <footer className="
      relative py-12 
      bg-black/40 
      backdrop-blur-xl 
      shadow-[0_0_75px_rgba(0,255,255,0.15)]
    ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="TechFriend"
              className="w-auto h-10"
            />
          </div>

          {/* Neon Nav */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            
            {/* Neon Button Link */}
            <button
              onClick={() => smoothScrollTo('#tools')}
              className="
                text-gray-300/80 
                hover:text-gray-400 
                transition 
                relative
              "
            >
              Tools
              <span className="absolute left-0 -bottom-1 w-full h-[2px] scale-x-0 bg-cyan-400 transition-transform duration-300 origin-left hover:scale-x-100 shadow-[0_0_8px_#22d3ee]"></span>
            </button>

            <button
              onClick={() => smoothScrollTo('#features')}
              className="
                text-gray-300/80
                hover:text-gray-400
                transition
                relative
              "
            >
              Features
              <span className="absolute left-0 -bottom-1 w-full h-[2px] scale-x-0 bg-cyan-400 transition-transform duration-300 origin-left hover:scale-x-100 shadow-[0_0_8px_#22d3ee]"></span>
            </button>

            <button
              onClick={() => smoothScrollTo('#faq')}
              className="
                text-gray-300/80 
                hover:text-gray-400 
                transition 
                relative
              "
            >
              FAQ
              <span className="absolute left-0 -bottom-1 w-full h-[2px] scale-x-0 bg-cyan-400 transition-transform duration-300 origin-left hover:scale-x-100 shadow-[0_0_8px_#22d3ee]"></span>
            </button>

            <a
              href="https://github.com/abhi-gowdru/techfriend"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-300/80 
                hover:text-gray-400 
                transition 
                relative
              "
            >
              GitHub
              <span className="absolute left-0 -bottom-1 w-full h-[2px] scale-x-0 bg-cyan-400 transition-transform duration-300 origin-left hover:scale-x-100 shadow-[0_0_8px_#22d3ee]"></span>
            </a>

          </nav>
        </div>

        {/* Bottom Section */}
        <div className="
          border-t border-cyan-500/20 
          pt-6 flex flex-col md:flex-row 
          items-center justify-between 
          text-sm text-gray-300/70 
          gap-4
        ">

          <p className="flex items-center gap-1 text-center">
            Made with 
            <Heart size={14} className="text-pink-500 drop-shadow-[0_0_8px_rgba(255,0,150,0.7)]" /> 
            by the TechFriend Community
          </p>

          <a
            href="https://github.com/abhi-gowdru/techfriend"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2 rounded-lg 
            "
          >
            <Github size={18} className="text-gray-300 hover:text-gray-400" />
          </a>
        </div>

        <p className="text-center mt-6 text-xs text-gray-300/50">
          © {new Date().getFullYear()} TechFriend. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
