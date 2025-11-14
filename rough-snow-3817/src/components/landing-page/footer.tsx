'use client'

import { Github, Twitter, Mail, Heart } from 'lucide-react'
import logo from '@/react-app/assets/logo.png'

export default function Footer() {
  return (
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="TechFriend" />
            </div>
            <p className="text-sm text-muted-foreground">
              Open source productivity tools for everyone. Free, fast, and privacy-first.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#tools" className="hover:text-primary transition">Tools</a></li>
              <li><a href="#features" className="hover:text-primary transition">Features</a></li>
              <li><a href="#faq" className="hover:text-primary transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition">License</a></li>
              <li><a href="#" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart size={16} className="fill-accent text-accent" />
              <span>by the TechFriend Community</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com/abhi-gowdru/techfriend" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-muted transition">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="text-center mt-8 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} TechFriend. All rights reserved. Made with ❤️ for the open source community.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
