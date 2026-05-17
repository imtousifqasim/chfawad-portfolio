"use client"

import { Mail, Phone, ChevronUp } from "lucide-react"

const footerNav = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
]

const socials = [
  { name: "WhatsApp", href: "https://wa.me/923286477314", color: "text-green-500" },
  { name: "Instagram", href: "https://www.instagram.com/tousifqasim/", color: "text-pink-500" },
  { name: "Facebook", href: "https://www.facebook.com/imtousifqasim", color: "text-emerald-600" },
  { name: "TikTok", href: "https://www.tiktok.com/@itxtousifahmad", color: "text-foreground" },
]

export function EnhancedFooter() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-600/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="text-2xl font-bold text-[#00674b]">
              Tousif.
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              WordPress, Shopify & WHMCS developer with 7+ years of experience delivering professional web solutions worldwide.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
              <Mail className="h-3.5 w-3.5" />
              <span>contact@tousifqasim.dev</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <Phone className="h-3.5 w-3.5" />
              <span>+92 328 6477314</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">WordPress Development</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">WHMCS Setup</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">Shopify Development</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">Website Security</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">Web Hosting</a></li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all ${s.color}`}
                >
                  {s.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block px-5 py-2.5 text-sm font-bold rounded-xl bg-gradient-to-r from-emerald-700 to-teal-500 text-white hover:from-emerald-800 hover:to-teal-600 transition-all shadow-lg shadow-emerald-600/20"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Tousif Qasim. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
          >
            Back to Top
            <ChevronUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
