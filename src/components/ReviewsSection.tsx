"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Quote, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FiverrIcon } from "@/components/FiverrIcon"

const reviewImages = [
  "https://i.postimg.cc/52fnQ5cJ/1.png",
  "https://i.postimg.cc/YCtbL65Z/2.png",
  "https://i.postimg.cc/dVJ4ZRMY/3.png",
  "https://i.postimg.cc/pLPq5QNx/4.png",
]

const fiverrReviews = [
  { name: "John M.", country: "USA", review: "Exceptional work on my WordPress site! Tousif delivered beyond expectations with clean code and excellent communication throughout.", rating: 5 },
  { name: "Ahmed R.", country: "UAE", review: "Professional WHMCS integration. The automation system works flawlessly. Highly recommend for any hosting business needs.", rating: 5 },
  { name: "Sarah L.", country: "UK", review: "Transformed our outdated website into a modern, fast-loading masterpiece. Great attention to detail!", rating: 5 },
  { name: "Michael T.", country: "Canada", review: "Best developer I've worked with on Fiverr. Completed the project ahead of schedule with perfect results.", rating: 5 },
  { name: "Hassan A.", country: "Pakistan", review: "Outstanding domain reseller platform setup. Very knowledgeable and patient throughout the process.", rating: 5 },
  { name: "Daniel K.", country: "Germany", review: "Excellent security audit and malware removal. My site is now faster and more secure than ever.", rating: 5 },
  { name: "Olivia P.", country: "Australia", review: "Amazing WooCommerce customization! Sales have increased significantly since the redesign.", rating: 5 },
  { name: "Robert S.", country: "USA", review: "Professional, responsive, and delivers quality work. Will definitely hire again for future projects.", rating: 5 },
]

const whatsappReviews = [
  { name: "Ali Khan", review: "Bhai ne bohat zabardast kaam kiya hai. WordPress site bilkul professional lagti hai ab.", rating: 5 },
  { name: "Mark Wilson", review: "Tousif fixed my hacked website within hours. Incredible turnaround time and very reasonable rates.", rating: 5 },
  { name: "Ayesha Noor", review: "Best WHMCS developer in Pakistan! Very cooperative and delivers exactly what you need.", rating: 5 },
  { name: "James Brown", review: "The domain reseller platform is working perfectly. Automated everything as promised.", rating: 5 },
  { name: "Bilal Ahmed", review: "Third project with Tousif, never disappointed. Always on time and budget.", rating: 5 },
  { name: "Steven Cole", review: "Helped me set up my entire hosting business from scratch. Couldn't have done it without him.", rating: 5 },
  { name: "Usman Raza", review: "Super responsive on WhatsApp, answers all questions patiently. Great working with him!", rating: 5 },
  { name: "Kevin Moore", review: "Quality work at fair prices. My e-commerce site runs smoothly thanks to his optimizations.", rating: 5 },
]

export function ReviewsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % reviewImages.length)
  }, [])

  useEffect(() => {
    if (isCarouselPaused) return
    const interval = setInterval(nextImage, 3000)
    return () => clearInterval(interval)
  }, [isCarouselPaused, nextImage])

  return (
    <section id="reviews" className="relative py-24 overflow-hidden bg-muted/20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />
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
            Client Reviews
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            What Clients{" "}
            <span className="bg-gradient-to-r from-emerald-700 to-teal-500 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by clients worldwide. Here&apos;s what they have to say about my work.
          </p>
        </motion.div>

        {/* Image Carousel - Improved */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-muted/30">
              {reviewImages.map((img, index) => (
                <motion.div
                  key={img}
                  initial={false}
                  animate={{
                    opacity: currentImageIndex === index ? 1 : 0,
                    scale: currentImageIndex === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={img}
                    alt={`Review screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-contain p-4"
                  />
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {reviewImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentImageIndex === index
                      ? "bg-gradient-to-r from-emerald-700 to-teal-500 w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fiverr Reviews */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#1DBF73] flex items-center justify-center">
              <FiverrIcon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Fiverr Reviews</h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {fiverrReviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={index >= 4 ? "hidden lg:block" : ""}
              >
                <Card className="h-full border-border/50 bg-white/5 dark:bg-black/5 backdrop-blur-xl group hover:border-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/5 hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 mb-2 sm:mb-3">
                      <div>
                        <p className="font-semibold text-foreground text-xs sm:text-sm">{review.name}</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">{review.country}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-1 -left-1 h-3 w-3 sm:h-4 sm:w-4 text-emerald-600/30" />
                      <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed pl-3 sm:pl-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                        {review.review}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* WhatsApp Reviews */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground">WhatsApp Reviews</h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {whatsappReviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={index >= 4 ? "hidden lg:block" : ""}
              >
                <Card className="h-full border-border/50 bg-white/5 dark:bg-black/5 backdrop-blur-xl group hover:border-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/5 hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 mb-2 sm:mb-3">
                      <p className="font-semibold text-foreground text-xs sm:text-sm">{review.name}</p>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-1 -left-1 h-3 w-3 sm:h-4 sm:w-4 text-emerald-600/30" />
                      <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed pl-3 sm:pl-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                        {review.review}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
