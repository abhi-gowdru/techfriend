'use client'

import { Monitor, Code, Zap } from 'lucide-react'

export default function Integration() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-glow opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-balance">
              Integrate Seamlessly
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              ToolHub is built with developers in mind. Easy to integrate, simple to use, and fully documented.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-primary/10 h-fit">
                  <Monitor size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Web Interface</h3>
                  <p className="text-sm text-muted-foreground">Beautiful, responsive UI works on all devices</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-accent/10 h-fit">
                  <Code size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">API Endpoints</h3>
                  <p className="text-sm text-muted-foreground">RESTful APIs for programmatic access</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-primary/10 h-fit">
                  <Zap size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground">Optimized for speed and reliability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - code example */}
          <div className="p-6 rounded-xl bg-card border border-border overflow-hidden">
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
              <div className="text-muted-foreground mb-4">
                <span className="text-accent">const</span> <span className="text-primary">tools</span> = <span className="text-accent">await</span> toolhub.<span className="text-secondary">getTools</span>()
              </div>
              <div className="text-muted-foreground mb-4">
                <span className="text-accent">const</span> <span className="text-primary">invoice</span> = <span className="text-accent">await</span> tools.<span className="text-secondary">invoice</span>({'{}'})
              </div>
              <div className="text-muted-foreground">
                console.<span className="text-secondary">log</span>(<span className="text-accent">invoice</span>)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
