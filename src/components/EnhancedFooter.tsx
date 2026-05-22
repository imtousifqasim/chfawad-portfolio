"use client"

import { Mail, Phone, ChevronUp, MapPin } from "lucide-react"

const footerNav = [
  { name: "About", href: "#about" },
  { name: "Stats", href: "#stats" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

const socials = [
  { name: "TikTok", href: "https://www.tiktok.com/@fawadkyvlogs", color: "currentColor" },
]

const socialIcons: Record<string, (props: { className?: string; style?: React.CSSProperties }) => React.ReactNode> = {
  TikTok: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  ),
}

export function EnhancedFooter() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-600/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1 flex flex-col">
            <a href="#home" className="text-2xl font-bold text-emerald-600">
              Fawad.
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Mini Vlogger & Content Creator helping local businesses grow online through engaging video content on TikTok.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
              <Mail className="h-3.5 w-3.5" />
              <span>contact@chfawad.pk</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span>Hujra Shah Muqeem, Okara, Pakistan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 flex-1">
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
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3 flex-1">
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">Mini Vlogs & Lifestyle</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">Food Review Videos</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">Business Promotions</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">TikTok Reels & Shorts</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors">Shop Reviews & Showcases</a></li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5">
              Connect
            </h4>
            <div className="flex flex-col gap-3 mb-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                >
                  <span style={{ color: s.color }} className="h-4 w-4">
                    {socialIcons[s.name]?.({ className: "h-full w-full" })}
                  </span>
                  {s.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block px-5 py-2.5 text-sm font-bold rounded-xl bg-gradient-to-r from-emerald-700 to-teal-500 text-white hover:from-emerald-800 hover:to-teal-600 transition-all shadow-lg shadow-emerald-600/20"
            >
              Book a Promotion
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-600/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-600/50" />
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Fawad Ky Vlogs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}