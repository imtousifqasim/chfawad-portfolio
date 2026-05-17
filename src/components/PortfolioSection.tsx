"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/SectionHeader"

const projects = [
  {
    title: "Purace Travel Colombia",
    description: "Tour Booking Website",
    image: "https://i.postimg.cc/YSKSfwKP/1.png",
    link: "https://puracetravelcolombia.com/",
    tech: ["WordPress", "WooCommerce", "Booking"],
  },
  {
    title: "RRR Motor Sports",
    description: "Rental Website",
    image: "https://i.postimg.cc/YSKSfwBw/2.png",
    link: "https://officialrrrmotorsports.com/",
    tech: ["WordPress", "Custom Theme", "Booking"],
  },
  {
    title: "Royal Oasis HTX",
    description: "Business Website",
    image: "https://i.postimg.cc/7L8LMyrL/6.png",
    link: "https://royaloasishtx.fun/",
    tech: ["WordPress", "Business"],
  },
  {
    title: "AAA Consultant",
    description: "Visa Consultancy Website",
    image: "https://i.postimg.cc/W4L46PcR/4.png",
    link: "https://aaasconsultants.com/",
    tech: ["WordPress", "Contact Form", "SEO"],
  },
  {
    title: "AL Mehdi Care Services",
    description: "Maid Services",
    image: "https://i.postimg.cc/xdDdySV2/3.png",
    link: "https://almehdicareservices.com/",
    tech: ["WordPress", "Service Booking"],
  },
  {
    title: "Upper Class Deals",
    description: "Flight Booking",
    image: "https://i.postimg.cc/Bv9vcGf3/5.png",
    link: "https://upperclassdeals.com/",
    tech: ["WordPress", "Flight Booking", "API"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#00674b]/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Selected Work"
          title="Featured"
          highlighted="Projects"
          description="A curated selection of digital experiences built with precision and care."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Card className="overflow-hidden border-white/10 bg-white/[0.02] dark:bg-black/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-[#00674b]/40 hover:shadow-[0_20px_40px_rgba(0,103,75,0.1)] rounded-3xl h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <Button
                      size="sm"
                      className="w-full bg-[#00674b] hover:bg-[#00523b] text-white rounded-xl h-12 font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#00674b] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded-md bg-[#00674b]/5 text-[#00674b] border border-[#00674b]/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                    <div className="flex gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="w-2 h-2 rounded-full bg-teal-500" />
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00674b] font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      Explore <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl px-10 h-14 font-bold border-[#00674b]/20 hover:border-[#00674b]/50 hover:bg-[#00674b]/5 transition-all"
            asChild
          >
            <a href="https://wa.me/923286477314" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
