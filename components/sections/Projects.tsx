"use client"

import { motion } from "framer-motion"
import { SlideUp } from "../animations/SlideUp"
import { PROJECTS, getYouTubeThumbnail } from "@/constants/projects"
import { useState } from "react"

export function Projects() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <SlideUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </SlideUp>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={playingIndex === idx ? {} : { y: -8 }}
              className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden flex flex-col transition-all group cursor-pointer"
              onClick={() =>
                setPlayingIndex(playingIndex === idx ? null : idx)
              }
            >
              {/* Video / Thumbnail */}
              <div className="relative aspect-square bg-black">
                {playingIndex === idx ? (
              <iframe
  className="absolute inset-0 w-full h-full"
  src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&loop=1&playlist=${project.videoId}&rel=0&modestbranding=1`}
  allow="autoplay; encrypted-media; picture-in-picture"
  allowFullScreen
/>
                ) : (
                  <>
                    <img
                      src={getYouTubeThumbnail(project.videoId, "hq") || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover p-0 group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          className="w-8 h-8 text-black ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              {/* <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
