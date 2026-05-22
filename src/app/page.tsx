"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Menu, X, Mail, MapPin, Play, ChevronRight, ExternalLink, Video, Camera, Utensils, Store, ShoppingBag, Building2, Smartphone, Car, Music2, Star, TrendingUp, Users, Eye, MessageCircle, DollarSign, Check, CreditCard, Globe, Zap, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/HeroBackground"
import { SectionHeader } from "@/components/SectionHeader"
import { TypingEffect } from "@/components/TypingEffect"
import { StatsCounter } from "@/components/StatsCounter"
import { BackToTop } from "@/components/BackToTop"
import { PortfolioSection } from "@/components/PortfolioSection"
import { PricingSection } from "@/components/PricingSection"
import { ContactSection } from "@/components/ContactSection"
import { EnhancedFooter } from "@/components/EnhancedFooter"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Stats", href: "#stats" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

const services = [
  {
    title: "Mini Vlogs & Lifestyle",
    description: "Engaging mini vlogs capturing daily life, events, and authentic moments that connect with audiences.",
    icon: Video,
  },
  {
    title: "Food Review Videos",
    description: "Honest, appetizing food reviews that showcase local restaurants, dishes, and dining experiences.",
    icon: Utensils,
  },
  {
    title: "Business Promotions",
    description: "Strategic promotional content designed to boost visibility and drive customers to local businesses.",
    icon: TrendingUp,
  },
  {
    title: "TikTok Reels & Shorts",
    description: "Trendy, algorithm-optimized short-form videos crafted for maximum reach and engagement.",
    icon: Play,
  },
  {
    title: "Shop Reviews & Showcases",
    description: "Professional walkthroughs and interior showcases that highlight the best of local shops and services.",
    icon: Store,
  },
  {
    title: "Brand Awareness Content",
    description: "Creative brand storytelling that builds recognition and trust within the local community.",
    icon: Camera,
  },
]

const businessCategories = [
  {
    title: "Food & Restaurants",
    items: ["Burgers", "Pizza", "Shawarma", "Fries", "Loaded Matka Fries", "Fast Food"],
    icon: Utensils,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Footwear & Shoe Stores",
    items: ["Shop Walkthroughs", "Sneaker Collections", "Sandals", "Interior Showcases"],
    icon: ShoppingBag,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Automobile & Car Services",
    items: ["Car AC Repair", "Automobile Businesses", "Local Auto Service Shops"],
    icon: Car,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Mobile Shops & Local Businesses",
    items: ["Mobile Shops", "Accessories Stores", "Used Mobile", "Local Brands & Events"],
    icon: Smartphone,
    color: "from-emerald-500 to-teal-500",
  },
]

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(n => n.href.slice(1))
      const scrollPos = window.scrollY + 150
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <nav className="max-w-6xl mx-auto bg-background/60 backdrop-blur-xl border border-white/10 dark:border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-full px-6 py-2">
          <div className="flex items-center justify-between h-14">
            <a href="#home" className="text-xl font-bold text-emerald-600 hover:scale-105 transition-transform">
              Fawad.
            </a>

            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.slice(1)
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={('text-sm font-medium transition-colors relative group ' + (isActive ? "text-emerald-600" : "text-muted-foreground hover:text-emerald-600"))}
                  >
                    {item.name}
                    <span className={('absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all ') + (isActive ? "w-full" : "w-0 group-hover:w-full")} />
                  </a>
                )
              })}
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-full w-9 h-9 border border-white/5 hover:bg-white/5">
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden w-9 h-9 rounded-full border border-white/5" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden mt-2 px-4">
              <div className="bg-background/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl space-y-1">
                {navigation.map((item) => {
                  const isActive = activeSection === item.href.slice(1)
                  return (
                    <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}
                      className={('block px-4 py-3 text-sm font-medium rounded-xl transition-all ') + (isActive ? "text-emerald-600 bg-emerald-600/10" : "text-muted-foreground hover:text-emerald-600 hover:bg-white/5")}>
                      {item.name}
                    </a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <HeroBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-6 sm:space-y-8 p-6 sm:p-8 lg:p-12 rounded-[2rem] bg-white/[0.02] dark:bg-black/[0.02] backdrop-blur-3xl border border-white/10 dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl group-hover:bg-emerald-600/20 transition-all duration-700" />
              <div className="relative z-10">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <div className="inline-flex items-center gap-2 bg-emerald-600/10 text-emerald-600 border border-emerald-600/20 mb-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available for Promotions
                  </div>
                </motion.div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight">
                  Hi! I&apos;m{" "}
                  <span className="block text-emerald-600 drop-shadow-sm">CH Fawad</span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">Mini Vlogger | Content Creator | TikTok Influencer</p>
                <p className="mt-2 text-base text-muted-foreground max-w-xl">Helping Local Businesses Grow Online Through Engaging</p>
                <p className="text-base text-muted-foreground max-w-xl"><TypingEffect /></p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 relative z-10">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl px-8 h-14 text-lg font-bold shadow-xl shadow-emerald-900/20 transition-all hover:scale-105 active:scale-95" asChild>
                  <a href="mailto:contact@chfawad.pk">Book a Promotion</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl px-8 h-14 text-lg font-bold border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all hover:scale-105 active:scale-95" asChild>
                  <a href="#portfolio">View My Work <ExternalLink className="ml-2 h-5 w-5 opacity-50" /></a>
                </Button>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10 relative z-10">
                <a href="https://www.tiktok.com/@fawadkyvlogs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-bold hover:bg-white/10 transition-all">
                  <Music2 className="h-4 w-4 text-emerald-600" /> TikTok @fawadkyvlogs
                </a>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-bold">
                  <MapPin className="h-4 w-4 text-emerald-600" /> Hujra Shah Muqeem, Okara
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.2, ease: "circOut" }} className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-10 bg-emerald-600/20 rounded-[3rem] blur-[100px] group-hover:bg-emerald-600/30 transition-all duration-1000" />
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]">
                  <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/20 shadow-[0_32px_64px_rgba(0,0,0,0.2)] bg-muted/20 backdrop-blur-sm transform group-hover:rotate-2 group-hover:scale-[1.02] transition-all duration-700">
                    <Image src="https://i.ibb.co/VphcCGMG/fawad.png" alt="Fawad Ky Vlogs" fill sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 420px, 480px" className="object-cover transition-transform duration-1000 group-hover:scale-110" priority />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/60 via-transparent to-transparent opacity-60" />
                  </div>

                  <motion.div animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-8 -left-8 bg-background/80 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/10 z-20 hidden md:block">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center"><Play className="h-6 w-6 text-white" /></div>
                      <div>
                        <p className="text-[10px] text-emerald-600 font-black uppercase tracking-widest">Content</p>
                        <p className="text-sm font-bold">Mini Vlogger</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-10 -right-4 bg-background/80 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border border-white/10 z-20 hidden md:block">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center"><TrendingUp className="h-5 w-5 text-white" /></div>
                      <p className="text-sm font-bold">83.5K+ Views</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }} className="hidden lg:flex justify-center mt-12">
            <a href="#about" className="group flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-xs font-bold uppercase tracking-widest mb-3 group-hover:translate-y-1 transition-transform">Explore More</span>
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
                <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-600/[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/[0.02] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="About Me" title="Know" highlighted="Fawad" />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-6">
              <div className="p-8 lg:p-10 rounded-[2.5rem] bg-white/[0.02] dark:bg-black/[0.02] backdrop-blur-3xl border border-white/10 dark:border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-emerald-600/5 rounded-full blur-3xl group-hover:bg-emerald-600/10 transition-all duration-700" />
                <div className="relative z-10 space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>I&apos;m <span className="text-emerald-600 font-bold">Fawad</span>, known as <span className="text-emerald-600 font-bold">Fawad Ky Vlogs</span> (@fawadkyvlogs). A 17-year-old mini vlogger and content creator from Hujra Shah Muqeem, District Okara, Pakistan.</p>
                  <p>Currently studying Intermediate (First Year - ICOM) after completing Matric. With <span className="text-emerald-600 font-bold">3-4 years</span> on TikTok and over 1 year in paid promotions, I help local businesses grow through engaging video content.</p>
                  <p>From food reviews to business promotions and shop showcases - I create content that reaches thousands and drives real results. I&apos;m also learning <span className="text-emerald-600 font-bold underline decoration-emerald-600/30 underline-offset-8">Web Development</span> to expand my skillset.</p>
                </div>

                <div className="flex flex-wrap gap-3 pt-8 mt-8 border-t border-white/10">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-bold">
                    <Mail className="h-4 w-4 text-emerald-600" /> <span>contact@chfawad.pk</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-bold">
                    <MapPin className="h-4 w-4 text-emerald-600" /> <span>Hujra Shah Muqeem, Okara</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-bold">
                    <Music2 className="h-4 w-4 text-emerald-600" /> <span>@fawadkyvlogs</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-6">
              <div className="p-8 lg:p-10 rounded-[2.5rem] bg-white/[0.02] dark:bg-black/[0.02] backdrop-blur-3xl border border-white/10 dark:border-white/5 shadow-2xl">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center"><Star className="h-5 w-5 text-white" /></div>
                  Skills &amp; Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Mini Vlogging", "Business Promotions", "Content Creation", "Audience Engagement", "Trending Strategies", "Social Media Growth", "Food Reviews", "Shop Walkthroughs"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-600/5 text-emerald-600 border border-emerald-600/10">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] dark:bg-black/[0.02] border border-white/5 text-center">
                  <p className="text-2xl font-bold text-emerald-600">17</p>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Age</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] dark:bg-black/[0.02] border border-white/5 text-center">
                  <p className="text-2xl font-bold text-emerald-600">ICOM</p>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Education</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] dark:bg-black/[0.02] border border-white/5 text-center">
                  <p className="text-2xl font-bold text-emerald-600">3-4</p>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Years on TikTok</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] dark:bg-black/[0.02] border border-white/5 text-center">
                  <p className="text-2xl font-bold text-emerald-600">1+</p>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">Year Promotions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative py-24 overflow-hidden bg-muted/20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="TikTok Statistics" title="My" highlighted="Numbers" description="Real growth, real engagement - built consistently over time." />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              { end: 1135, suffix: "+", label: "Followers", icon: Users, delay: 0 },
              { end: 28700, suffix: "+", label: "Total Likes", icon: Heart, delay: 0.1 },
              { end: 60000, suffix: "+", label: "Monthly Views", icon: Eye, delay: 0.2 },
              { end: 83500, suffix: "+", label: "Top Video Views", icon: TrendingUp, delay: 0.3 },
            ].map((stat) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: stat.delay }} viewport={{ once: true }} className="p-8 rounded-[2rem] bg-white/[0.02] dark:bg-black/[0.02] backdrop-blur-3xl border border-white/10 text-center group hover:border-emerald-600/40 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <StatsCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioSection />

      {/* Services Section */}
      <section id="services" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-emerald-600/[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/[0.02] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What I Do" title="Services I" highlighted="Offer" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <div className="h-full p-8 rounded-[2.5rem] bg-white/[0.02] dark:bg-black/[0.02] backdrop-blur-3xl border border-white/10 dark:border-white/5 group hover:border-emerald-600/40 hover:shadow-[0_20px_40px_rgba(0,103,75,0.05)] transition-all duration-500 relative overflow-hidden flex flex-col">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-600/5 rounded-full blur-3xl group-hover:bg-emerald-600/10 transition-colors" />
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-emerald-900/20">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-black text-foreground mb-4 group-hover:text-emerald-600 transition-colors leading-tight">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base font-medium mb-8 flex-1">{service.description}</p>
                    <a href="#contact" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-600 group-hover:translate-x-2 transition-all duration-300">Book Now <ChevronRight className="h-4 w-4" /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Categories Section */}
      <section className="relative py-24 overflow-hidden bg-muted/20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Categories I Cover" title="Businesses I" highlighted="Promote" />

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {businessCategories.map((cat, index) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <div className="h-full p-8 rounded-[2.5rem] bg-white/[0.02] dark:bg-black/[0.02] backdrop-blur-3xl border border-white/10 dark:border-white/5 group hover:border-emerald-600/40 transition-all duration-500 relative overflow-hidden">
                  <div className="flex items-start gap-5">
                    <div className={'w-16 h-16 rounded-2xl bg-gradient-to-br ' + cat.color + ' flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-500'}>
                      <cat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-emerald-600 transition-colors">{cat.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((item) => (
                          <span key={item} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-lg bg-emerald-600/5 text-emerald-600 border border-emerald-600/10">{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      {/* UK TikTok Accounts Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-600/[0.02] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Available Now" title="UK TikTok" highlighted="Accounts" description="Selling aged UK TikTok accounts. Pricing depends on follower count, Creativity Program status, account age, and warnings history." />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <div className="p-8 rounded-[2.5rem] bg-white/[0.02] dark:bg-black/[0.02] backdrop-blur-3xl border border-white/10 dark:border-white/5 group hover:border-emerald-600/40 transition-all duration-500 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-500 flex items-center justify-center mb-6"><Globe className="h-7 w-7 text-white" /></div>
                <h3 className="text-xl font-black text-foreground mb-2">Fresh UK Aged Account</h3>
                <p className="text-muted-foreground text-sm mb-4">Aged UK TikTok account, ready to use. No history, clean slate.</p>
                <p className="text-2xl font-bold text-emerald-600">3,000 - 10,000 PKR</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <div className="p-8 rounded-[2.5rem] bg-white/[0.02] dark:bg-black/[0.02] backdrop-blur-3xl border border-white/10 dark:border-white/5 group hover:border-emerald-600/40 transition-all duration-500 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-500 flex items-center justify-center mb-6"><Zap className="h-7 w-7 text-white" /></div>
                <h3 className="text-xl font-black text-foreground mb-2">Monetized / 10K+ Followers</h3>
                <p className="text-muted-foreground text-sm mb-4">Monetized UK TikTok account with established follower base and reach.</p>
                <p className="text-2xl font-bold text-emerald-600">Higher Pricing</p>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="mt-10 text-center">
            <p className="text-muted-foreground text-sm mb-6">Interested? Contact via email or DM for details and screenshots.</p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl px-10 h-14 text-lg font-bold shadow-xl shadow-emerald-900/20 transition-all hover:scale-105" asChild>
              <a href="mailto:contact@chfawad.pk">Contact for Details <MessageCircle className="ml-2 h-5 w-5" /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Out of City Policy Section */}
      <section className="relative py-24 overflow-hidden bg-muted/20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-600/[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-600/[0.02] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Policy" title="Out of City" highlighted="Promotions" />

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <div className="p-8 lg:p-10 rounded-[2.5rem] bg-white/[0.02] dark:bg-black/[0.02] backdrop-blur-3xl border border-white/10 dark:border-white/5 shadow-2xl">
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                For promotions outside <span className="text-emerald-600 font-bold">Hujra Shah Muqeem</span> (e.g. Lahore or other cities), the client covers:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: DollarSign, text: "Travel expenses" },
                  { icon: Utensils, text: "Food expenses" },
                  { icon: Building2, text: "Accommodation (if required)" },
                  { icon: Car, text: "Full transportation arrangements" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <span className="text-sm font-bold text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Applies to: Long shoots, multi-day collaborations, full business coverage projects.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactSection />

      <BackToTop />

      <EnhancedFooter />
    </div>
  )
}
