"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Play, TrendingUp, Music2, ExternalLink, Pause } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/SectionHeader"

const viralVideos = [
  {
    title: "Shoes Shop Review",
    views: "16.2K Views",
    description: "Viral promotional video - Shoes Shop Review",
    category: "Footwear",
    video: "/videos/loaded-matka-fries.mp4",
    tiktokUrl: "https://www.tiktok.com/@fawadkyvlogs/video/7598453136432385302",
    gradient: "from-orange-500/20 to-red-500/20",
    bgGradient: "from-orange-900/30 to-red-900/30",
  },
  {
    title: "New Cafe In City",
    views: "27.5K Views",
    description: "Trending video: New cafe in city - food review and ambiance showcase",
    category: "Cafe",
    video: "/videos/mobile-shop.mp4",
    tiktokUrl: "https://www.tiktok.com/@fawadkyvlogs/video/7596999543359638806",
    gradient: "from-blue-500/20 to-cyan-500/20",
    bgGradient: "from-blue-900/30 to-cyan-900/30",
  },

]

function VideoCard({ video, index }: { video: typeof viralVideos[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Card className="overflow-hidden border-white/10 bg-white/[0.02] dark:bg-black/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-emerald-600/40 hover:shadow-[0_20px_40px_rgba(0,103,75,0.1)] rounded-3xl h-full flex flex-col">
        <div className="relative aspect-[9/16] overflow-hidden bg-muted/30 cursor-pointer" onClick={togglePlay}>
          <div className={'absolute inset-0 bg-gradient-to-br ' + video.bgGradient + ' opacity-60'} />
          <video
            ref={videoRef}
            src={video.video}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            preload="metadata"
            onEnded={() => setIsPlaying(false)}
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-black/30">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-emerald-600/40">
                <Play className="h-8 w-8 text-white ml-1" />
              </div>
            </div>
          )}
          {isPlaying && (
            <div className="absolute bottom-2 right-2">
              <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-xl flex items-center justify-center">
                <Pause className="h-4 w-4 text-white" />
              </div>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full bg-black/40 backdrop-blur-xl text-white border border-white/10">
              {video.views}
            </span>
          </div>
        </div>
        <CardContent className="p-4 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded-md bg-emerald-600/5 text-emerald-600 border border-emerald-600/10">
              {video.category}
            </span>
            <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded-md bg-purple-600/5 text-purple-600 border border-purple-600/10 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> Viral
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-emerald-600 transition-colors">
            {video.title}
          </h3>
          <p className="text-xs text-muted-foreground mb-2 flex-1">
            {video.description}
          </p>
          <div className="pt-3 flex flex-col gap-2 border-t border-white/5">
            <div className="flex items-center gap-2">
              <Music2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span className="text-xs text-muted-foreground truncate">@fawadkyvlogs</span>
            </div>
            <a
              href={video.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-500 transition-colors bg-emerald-600/5 hover:bg-emerald-600/10 rounded-xl py-2"
            >
              <Music2 className="h-3.5 w-3.5" />
              Watch on TikTok
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-emerald-600/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Viral Content"
          title="Highest"
          highlighted="Performing Videos"
          description="Real results for real businesses - content that reaches thousands."
        />

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {viralVideos.map((video, index) => (
            <VideoCard key={video.title} video={video} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground italic max-w-xl mx-auto">
            &ldquo;Real results for real businesses &mdash; content that reaches thousands.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}