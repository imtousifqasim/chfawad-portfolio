"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Zap, Crown, MessageCircle, Camera, Video, Music2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const pricingPlans = [
  {
    name: "Basic",
    price: "2,500 - 5,000 PKR",
    description: "Perfect for quick promotions",
    icon: Sparkles,
    popular: false,
    features: [
      "1 TikTok Post/Reel",
      "Shop mention + tag/location",
      "Story + website mention",
      "3-5 photos",
      "Simple edit",
    ],
    cta: "Book Now",
  },
  {
    name: "Standard",
    price: "7,000 - 15,000 PKR",
    description: "Ideal for detailed business coverage",
    icon: Zap,
    popular: true,
    features: [
      "1 Detailed vlog/review reel",
      "Better edit + thumbnail",
      "Facebook + TikTok mention",
      "Website/blog feature",
      "2-3 days promotion",
    ],
    cta: "Book Now",
  },
  {
    name: "Premium",
    price: "20,000 - 40,000+ PKR",
    description: "Full business branding solution",
    icon: Crown,
    popular: false,
    features: [
      "Full business coverage",
      "Cinematic professional vlog",
      "Multiple reels/posts",
      "Website homepage feature",
      "Shop interview + branding",
      "1 week promotion",
    ],
    cta: "Book Now",
  },
]

const pricingIcons: Record<string, React.ReactNode> = {
  Basic: <Camera className="h-7 w-7 text-white" />,
  Standard: <Video className="h-7 w-7 text-white" />,
  Premium: <Crown className="h-7 w-7 text-white" />,
}

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden bg-muted/20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-emerald-600/10 text-emerald-600 border-emerald-600/20 mb-4 px-4 py-1">
            Pricing Packages
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Promotion{" "}
            <span className="bg-gradient-to-r from-emerald-700 to-teal-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your business promotion needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group flex"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-emerald-700 to-teal-500 text-white border-0 px-4 py-1 shadow-lg">
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card className={'w-full relative overflow-hidden transition-all duration-500 flex flex-col ' + (
                plan.popular
                  ? "border-emerald-600/50 bg-gradient-to-b from-emerald-600/5 to-transparent shadow-xl shadow-emerald-600/10"
                  : "border-border/50 bg-white/5 dark:bg-black/5 backdrop-blur-xl"
              ) + ' hover:border-emerald-600/50 hover:shadow-xl hover:shadow-emerald-600/10 group-hover:scale-[1.02]'}>

                <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-6 relative z-10 flex flex-col flex-1">
                  <div className={'w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ' + (
                    plan.popular
                      ? "bg-gradient-to-br from-emerald-700 to-teal-500 shadow-lg shadow-emerald-600/30"
                      : "bg-gradient-to-br from-emerald-700/80 to-emerald-900/80"
                  )}>
                    {pricingIcons[plan.name]}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{plan.description}</p>

                  <div className="mb-6 min-h-[80px] flex flex-col justify-end">
                    <span className={'text-3xl sm:text-4xl font-bold ' + (
                      plan.popular ? "bg-gradient-to-r from-emerald-700 to-teal-500 bg-clip-text text-transparent" : "text-foreground"
                    )}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider mt-1">per project</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <div className={'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ' + (
                          plan.popular
                            ? "bg-emerald-600/20 text-emerald-600"
                            : "bg-muted text-muted-foreground"
                        )}>
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-muted-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 mt-auto">
                    <Button
                      className={'w-full h-12 font-bold transition-all duration-300 rounded-xl ' + (
                        plan.popular
                          ? "bg-gradient-to-r from-emerald-700 to-teal-500 hover:from-emerald-800 hover:to-teal-600 text-white shadow-lg shadow-emerald-600/25 hover:scale-[1.02] active:scale-[0.98]"
                          : "bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/5 hover:scale-[1.02] active:scale-[0.98]"
                      )}
                      asChild
                    >
                      <a href="mailto:contact@chfawad.pk">{plan.cta}</a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full h-12 font-bold rounded-xl border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                      asChild
                    >
                      <a href="https://www.tiktok.com/@fawadkyvlogs" target="_blank" rel="noopener noreferrer">
                        <Music2 className="h-5 w-5" />
                        TikTok DM
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl">
            <MessageCircle className="h-5 w-5 text-emerald-600" />
            <span className="text-sm text-muted-foreground font-medium">Payment Methods:</span>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-bold bg-white/5 rounded-md">JazzCash</span>
              <span className="px-3 py-1 text-xs font-bold bg-white/5 rounded-md">EasyPaisa</span>
              <span className="px-3 py-1 text-xs font-bold bg-white/5 rounded-md">Bank Transfer</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Not sure which package fits?{" "}
            <a href="mailto:contact@chfawad.pk" className="text-emerald-600 hover:text-emerald-500 font-medium underline underline-offset-4">
              Let&apos;s discuss your needs
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}