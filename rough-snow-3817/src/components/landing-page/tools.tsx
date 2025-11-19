'use client'

import {
  FileText,
  Calculator,
  QrCode,
  Barcode,
  Palette,
  Fingerprint,
  Zap,
  Lock,
  Share2,
  Mail,
  Clock,
  Layers
} from 'lucide-react'

const tools = [
  { icon: FileText, name: 'Invoice Generator', description: 'Create professional invoices instantly' },
  { icon: Calculator, name: 'GST Calculator', description: 'Calculate GST with precision' },
  { icon: QrCode, name: 'QR Code Generator', description: 'Generate QR codes for any content' },
  { icon: Barcode, name: 'Barcode Generator', description: 'Create barcodes in multiple formats' },
  { icon: Palette, name: 'Color Converter', description: 'Convert between color formats' },
  { icon: Fingerprint, name: 'Hash Generator', description: 'Generate hashes (MD5, SHA256)' },
  { icon: Zap, name: 'JSON Formatter', description: 'Format and validate JSON data' },
  { icon: Lock, name: 'Password Generator', description: 'Create strong, secure passwords' },
  { icon: Share2, name: 'URL Shortener', description: 'Shorten long URLs easily' },
  { icon: Mail, name: 'Email Validator', description: 'Validate email addresses' },
  { icon: Clock, name: 'Time Zone Converter', description: 'Convert between time zones' },
  { icon: Layers, name: 'JSON to CSV', description: 'Convert JSON data to CSV' },
]

export default function Tools() {
  return (
    <section id="tools" className="relative py-20 overflow-hidden bg-black">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-cyan-300 text-balance">
            50+ Powerful Tools
          </h2>
          <p className="text-lg text-cyan-200/60 max-w-2xl mx-auto text-gray-400 text-balance">
            Everything you need for daily productivity, all in one neon-lit toolkit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon

            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-6 rounded-2xl backdrop-blur-md transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${(index % 4) * 0.1}s` }}
              >
                <div
                  className="mb-4 p-3 rounded-lg group-hover:scale-110 transition-all duration-300"
                >
                  <Icon size={28} className="text-gray-300" />
                </div>

                <h3 className="font-semibold text-base mb-3 text-cyan-300">
                  {tool.name}
                </h3>

                <p className="text-sm text-gray-100/60">
                  {tool.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}