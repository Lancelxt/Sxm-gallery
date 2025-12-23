"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Header() {
  // const navItems = ["About", "Experience", "Skills", "Projects", "Contact"]
  const navItems = ["About", "Projects", "Contact"]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      // className="fixed top-0 w-full bg-black backdrop-blur-sm border-b border-[#2d2d44] z-50"
      className="fixed top-0 w-full bg-black backdrop-blur-sm border-b border-[#000000] z-50"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          href="#"
          className="text-xl font-bold text-shadow-white"
        >
    Sam
        </Link>
        <div className="hidden md:flex gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}
