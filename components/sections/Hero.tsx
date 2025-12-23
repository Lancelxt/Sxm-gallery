"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { useState, useEffect } from "react"

export function Hero() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null)

  useEffect(() => {
    const videos = ["/index.mp4", "/index1.mp4", "/index33.mp4"]
    const randomVideo = videos[Math.floor(Math.random() * videos.length)]
    setVideoSrc(randomVideo)
  }, [])

  // Render nothing on server / before client picks video
  if (!videoSrc) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
            font-heading
            text-2xl md:text-4xl
            tracking-[0.35em]
            text-transparent
            bg-clip-text
            bg-gradient-to-r from-gray-50 via-white to-gray-50
            drop-shadow-[0_0_25px_rgba(165,180,252,0.35)]
            mb-8
          "
        >
          Welcome To My Portfolio
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
