"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Zap, Crown, Code, MessageCircle, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const pricingPlans = [
  {
    name: "Starter",
    price: "$80",
    pricePKR: "15,000 PKR",
    originalPKR: "22,000 PKR",
    description: "Perfect for landing pages or portfolios",
    icon: Sparkles,
    popular: false,
    features: [
      "1 Page Website",
      "Contact Form",
      "Basic SEO Setup",
      "Responsive Design",
      "Speed Optimization",
      "Delivery in 2–3 Days",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$120",
    pricePKR: "25,000 PKR",
    originalPKR: "33,500 PKR",
    description: "Ideal for small businesses",
    icon: Zap,
    popular: true,
    features: [
      "Up to 5 Pages",
      "Contact Form",
      "Basic SEO Setup",
      "Online Booking",
      "Social Media Integration",
      "Delivery in 5-6 Days",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "$150",
    pricePKR: "35,000 PKR",
    originalPKR: "42,000 PKR",
    description: "For growing businesses",
    icon: Crown,
    popular: false,
    features: [
      "Up to 10 Pages",
      "Ecommerce",
      "Online Payment",
      "Basic SEO Setup",
      "Speed Optimization",
      "Delivery in 8-10 Days",
    ],
    cta: "Get Started",
  },
]

const customPlan = {
  name: "Custom",
  price: "Let's Talk",
  description: "Tailored solutions for unique requirements. Have a specific project in mind? Let's discuss your needs and create a custom package that fits your goals perfectly.",
  icon: Code,
  features: [
    "Fully Custom Solution",
    "Dedicated Project Manager",
    "Scalable Architecture",
    "API Integrations",
    "Custom Plugins/Modules",
    "Ongoing Maintenance",
    "Training & Documentation",
    "Flexible Timeline",
  ],
  cta: "Discuss Project",
}

interface PricingSectionProps {
  currency: "USD" | "PKR"
}

export function PricingSection({ currency }: PricingSectionProps) {
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
            Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Transparent{" "}
            <span className="bg-gradient-to-r from-emerald-700 to-teal-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include quality work and dedicated support.
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

              <Card className={`w-full relative overflow-hidden transition-all duration-500 flex flex-col ${
                plan.popular
                  ? "border-emerald-600/50 bg-gradient-to-b from-emerald-600/5 to-transparent shadow-xl shadow-emerald-600/10"
                  : "border-border/50 bg-white/5 dark:bg-black/5 backdrop-blur-xl"
              } hover:border-emerald-600/50 hover:shadow-xl hover:shadow-emerald-600/10 group-hover:scale-[1.02]`}>

                <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-6 relative z-10 flex flex-col flex-1">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                    plan.popular
                      ? "bg-gradient-to-br from-emerald-700 to-teal-500 shadow-lg shadow-emerald-600/30"
                      : "bg-gradient-to-br from-emerald-700/80 to-emerald-900/80"
                  }`}>
                    <plan.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{plan.description}</p>

                  <div className="mb-6 min-h-[80px] flex flex-col justify-end">
                    {currency === "PKR" ? (
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground line-through opacity-60 mb-1">
                          {plan.originalPKR}
                        </span>
                        <span className={`text-3xl sm:text-4xl font-bold ${
                          plan.popular ? "bg-gradient-to-r from-emerald-700 to-teal-500 bg-clip-text text-transparent" : "text-foreground"
                        }`}>
                          {plan.pricePKR}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className={`text-4xl font-bold ${
                          plan.popular ? "bg-gradient-to-r from-emerald-700 to-teal-500 bg-clip-text text-transparent" : "text-foreground"
                        }`}>
                          {plan.price}
                        </span>
                      </div>
                    )}
                    <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider mt-1">per project</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular
                            ? "bg-emerald-600/20 text-emerald-600"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-muted-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 mt-auto">
                    <Button
                      className={`w-full h-12 font-bold transition-all duration-300 rounded-xl ${
                        plan.popular
                          ? "bg-gradient-to-r from-emerald-700 to-teal-500 hover:from-emerald-800 hover:to-teal-600 text-white shadow-lg shadow-emerald-600/25 hover:scale-[1.02] active:scale-[0.98]"
                          : "bg-foreground text-background hover:bg-foreground/90 shadow-lg shadow-foreground/5 hover:scale-[1.02] active:scale-[0.98]"
                      }`}
                      asChild
                    >
                      <a href="#contact">{plan.cta}</a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full h-12 font-bold rounded-xl border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                      asChild
                    >
                      <a href={`https://wa.me/923286477314?text=Hi Tousif! I'm interested in your ${plan.name} Package.`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl">
            <CreditCard className="h-5 w-5 text-emerald-600" />
            <span className="text-sm text-muted-foreground font-medium">Accepted Payments:</span>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-bold bg-white/5 rounded-md">Visa</span>
              <span className="px-3 py-1 text-xs font-bold bg-white/5 rounded-md">Mastercard</span>
              <span className="px-3 py-1 text-xs font-bold bg-white/5 rounded-md">PayPal</span>
              <span className="px-3 py-1 text-xs font-bold bg-white/5 rounded-md">Bank Transfer</span>
              <span className="px-3 py-1 text-xs font-bold bg-white/5 rounded-md">USDT</span>
            </div>
          </div>
        </motion.div>

        {/* Custom Plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Card className="relative overflow-hidden border-dashed border-2 border-emerald-500/30 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-600/5 backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <CardContent className="p-5 sm:p-6 lg:p-8 relative z-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 flex-1">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 flex-shrink-0">
                    <customPlan.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{customPlan.name}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{customPlan.description}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2">
                    {customPlan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-2.5 w-2.5 text-emerald-500" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-emerald-500/20 lg:border-0 lg:pt-0">
                    <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                      {customPlan.price}
                    </span>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      <Button
                        className="bg-gradient-to-r from-emerald-700 to-teal-500 hover:from-emerald-800 hover:to-teal-600 text-white px-8 h-12 font-bold rounded-xl shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                        asChild
                      >
                        <a href="#contact">{customPlan.cta}</a>
                      </Button>
                      <Button
                        variant="outline"
                        className="px-8 h-12 font-bold rounded-xl border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
                        asChild
                      >
                        <a href="https://wa.me/923286477314?text=Hi Tousif! I have a custom project I'd like to discuss." target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-5 w-5" />
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            All plans include free consultation.{" "}
            <a href="#contact" className="text-emerald-600 hover:text-emerald-500 font-medium underline underline-offset-4">
              Let&apos;s discuss your requirements
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
