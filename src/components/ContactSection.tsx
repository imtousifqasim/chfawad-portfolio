"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail, MapPin, Send, Check, X, Music2, MessageCircle,
  DollarSign, Video, Camera, Utensils, Store, TrendingUp, HelpCircle, Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import emailjs from "@emailjs/browser"

const EMAILJS_SERVICE_ID = "service_uus59em"
const EMAILJS_TEMPLATE_ID = "template_9dkqk3a"
const EMAILJS_PUBLIC_KEY = "PT85lmTuiIkI_FOAN"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", whatsapp: "", message: "", budget: "", interest: "" })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          whatsapp: formData.whatsapp,
          message: formData.message,
          budget: formData.budget,
          interest: formData.interest,
          to_email: "itxchfawad@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      )

      setFormStatus("success")
      setShowModal(true)
      setFormData({ name: "", whatsapp: "", message: "", budget: "", interest: "" })
    } catch {
      setFormStatus("error")
      setTimeout(() => setFormStatus("idle"), 3000)
    }
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />
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
            Contact
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Get In{" "}
            <span className="bg-gradient-to-r from-emerald-700 to-teal-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to promote your business? Let&apos;s create engaging content that reaches thousands.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="border-border/50 bg-white/5 dark:bg-black/5 backdrop-blur-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-teal-500 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a href="mailto:contact@chfawad.pk" className="flex items-center gap-4 p-3 rounded-xl bg-emerald-600/5 hover:bg-emerald-600/10 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/20">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground">contact@chfawad.pk</p>
                    </div>
                  </a>
                  <a href="https://www.tiktok.com/@fawadkyvlogs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-xl bg-emerald-600/5 hover:bg-emerald-600/10 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/20">
                      <Music2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">TikTok</p>
                      <p className="font-semibold text-foreground">@fawadkyvlogs</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-emerald-600/5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold text-foreground">Hujra Shah Muqeem, District Okara, Pakistan</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-white/5 dark:bg-black/5 backdrop-blur-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Follow Me on TikTok
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.tiktok.com/@fawadkyvlogs" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-foreground/10 border border-foreground/20 flex items-center justify-center hover:bg-foreground/20 hover:border-foreground/40 hover:scale-110 transition-all">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                  <span className="flex items-center text-sm text-muted-foreground font-medium">@fawadkyvlogs</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-border/50 bg-white/5 dark:bg-black/5 backdrop-blur-xl overflow-hidden">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-600/25">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Book Your Promotion Now</h3>
                    <p className="text-sm text-muted-foreground">I&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white/5 dark:bg-black/10 border-white/10 h-14 pl-4 text-base rounded-xl focus:border-emerald-600/50 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                    <Input
                      type="tel"
                      placeholder="Your WhatsApp Number"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      required
                      className="bg-white/5 dark:bg-black/10 border-white/10 h-14 pl-4 text-base rounded-xl focus:border-emerald-600/50 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />

                    {/* Budget Range Select */}
                    <Select
                      value={formData.budget}
                      onValueChange={(val) => setFormData({ ...formData, budget: val })}
                    >
                      <SelectTrigger className="w-full h-14 text-base rounded-xl bg-white/5 dark:bg-black/10 border-white/10 focus:border-emerald-600/50 transition-all">
                        <SelectValue placeholder="Select Budget Range" />
                      </SelectTrigger>
                      <SelectContent className="border-white/10 bg-background/95 backdrop-blur-xl">
                        <SelectItem value="2,500 - 5,000 PKR" className="py-3 px-3 text-base">
                          <DollarSign className="h-4 w-4 shrink-0 text-emerald-600" />
                          2,500 - 5,000 PKR
                        </SelectItem>
                        <SelectItem value="7,000 - 15,000 PKR" className="py-3 px-3 text-base">
                          <DollarSign className="h-4 w-4 shrink-0 text-emerald-600" />
                          7,000 - 15,000 PKR
                        </SelectItem>
                        <SelectItem value="20,000 - 40,000+ PKR" className="py-3 px-3 text-base">
                          <DollarSign className="h-4 w-4 shrink-0 text-emerald-600" />
                          20,000 - 40,000+ PKR
                        </SelectItem>
                        <SelectItem value="Not Sure" className="py-3 px-3 text-base">
                          <HelpCircle className="h-4 w-4 shrink-0 text-muted-foreground" />
                          Not Sure
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Interest Select */}
                    <Select
                      value={formData.interest}
                      onValueChange={(val) => setFormData({ ...formData, interest: val })}
                    >
                      <SelectTrigger className="w-full h-14 text-base rounded-xl bg-white/5 dark:bg-black/10 border-white/10 focus:border-emerald-600/50 transition-all">
                        <SelectValue placeholder="What are you looking for?" />
                      </SelectTrigger>
                      <SelectContent className="border-white/10 bg-background/95 backdrop-blur-xl">
                        <SelectItem value="Business Promotion" className="py-3 px-3 text-base">
                          <TrendingUp className="h-4 w-4 shrink-0 text-emerald-600" />
                          Business Promotion
                        </SelectItem>
                        <SelectItem value="Food Review" className="py-3 px-3 text-base">
                          <Utensils className="h-4 w-4 shrink-0 text-emerald-600" />
                          Food Review
                        </SelectItem>
                        <SelectItem value="Mini Vlog" className="py-3 px-3 text-base">
                          <Video className="h-4 w-4 shrink-0 text-emerald-600" />
                          Mini Vlog
                        </SelectItem>
                        <SelectItem value="Shop Showcase" className="py-3 px-3 text-base">
                          <Store className="h-4 w-4 shrink-0 text-emerald-600" />
                          Shop Showcase
                        </SelectItem>
                        <SelectItem value="TikTok Reel" className="py-3 px-3 text-base">
                          <Play className="h-4 w-4 shrink-0 text-emerald-600" />
                          TikTok Reel
                        </SelectItem>
                        <SelectItem value="UK TikTok Account" className="py-3 px-3 text-base">
                          <Music2 className="h-4 w-4 shrink-0 text-emerald-600" />
                          UK TikTok Account
                        </SelectItem>
                        <SelectItem value="Other" className="py-3 px-3 text-base">
                          <HelpCircle className="h-4 w-4 shrink-0 text-muted-foreground" />
                          Other
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    <Textarea
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-white/5 dark:bg-black/10 border-white/10 p-4 text-base rounded-xl resize-none focus:border-emerald-600/50 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 bg-gradient-to-r from-emerald-700 to-teal-500 hover:from-emerald-800 hover:to-teal-600 text-white font-semibold text-base rounded-xl shadow-lg shadow-emerald-600/25 disabled:opacity-70 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    disabled={formStatus === "submitting" || formStatus === "success"}
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : formStatus === "success" ? (
                      <span className="flex items-center gap-2">
                        <Check className="h-5 w-5" />
                        Message Sent!
                      </span>
                    ) : formStatus === "error" ? (
                      <span className="flex items-center gap-2">
                        <X className="h-5 w-5" />
                        Failed - Try Again
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => { setShowModal(false); setFormStatus("idle") }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/10 via-teal-500/5 to-transparent pointer-events-none" />
                <CardContent className="p-8 relative z-10">
                  <button
                    onClick={() => { setShowModal(false); setFormStatus("idle") }}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-700 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-600/30"
                    >
                      <Check className="h-10 w-10 text-white" />
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-bold text-foreground mb-2"
                    >
                      Message Sent!
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-muted-foreground mb-6"
                    >
                      Your message has been sent! I&apos;ll get back to you within 24 hours.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button
                        onClick={() => { setShowModal(false); setFormStatus("idle") }}
                        className="bg-gradient-to-r from-emerald-700 to-teal-500 hover:from-emerald-800 hover:to-teal-600 text-white font-semibold px-8 h-12 shadow-lg shadow-emerald-600/20"
                      >
                        Close
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
