"use client";

import { motion } from "framer-motion";
import { SlideUp } from "../animations/SlideUp";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black from-[#0f0f23] to-[#1a1a2e]"
    >
      <div className="max-w-6xl mx-auto">
        <SlideUp>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            About{" "}
            <span
            >
              Me
            </span>
          </h2>
        </SlideUp>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <SlideUp delay={0.1}>
            <motion.div
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-left"
            >
              <div className="relative w-64 h-64 rounded-lg overflow-hidden border-2 border-[#ffffff] shadow-lg shadow-[#6366f1]/20">
                <Image
                  src="/pfp.png"
                  alt="Professional photo"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </SlideUp>

          <SlideUp delay={0.2}>
            <div className="space-y-4">
              <p className="text-lg text-muted leading-relaxed">
                I’m a video editor and motion graphics artist who
                genuinely loves editing, motion design, and visual storytelling.
                I’m naturally drawn to minimalist and collage-inspired visuals,
                but I don’t believe in sticking to just one style. Each project
                is an opportunity to explore new ideas, experiment with visuals,
                and let the content shape its own rhythm and direction.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                Editing is more than just work for me—it’s a creative outlet and
                a continuous learning process. I focus on creating clean,
                engaging, and visually impactful edits while constantly
                improving my skills in video editing, motion graphics, and
                visual design. Every project helps me grow as an artist and push
                my creative boundaries.
              </p>
            </div>
          </SlideUp>
        </div>

        {/* <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <SlideUp delay={0.3}>
            <div
              className="border border-[#2d2d44] rounded-lg p-6 md:p-8"
              style={{
                background: "rgba(26, 26, 46, 0.5)",
              }}
            >
              <h3
                className="text-xl font-semibold mb-6"
                style={{
                  background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Career Progression
              </h3>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-3 h-3 rounded-full bg-[#6366f1] mt-2"></div>
                  <div>
                    <p className="font-semibold">Software Developer</p>
                    <p className="text-sm text-muted">Full-stack development</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-3 h-3 rounded-full bg-[#8b5cf6] mt-2"></div>
                  <div>
                    <p className="font-semibold">Cloud Infrastructure</p>
                    <p className="text-sm text-muted">AWS & containerization</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-3 h-3 rounded-full bg-[#6366f1] mt-2"></div>
                  <div>
                    <p className="font-semibold">DevOps Engineer (Current)</p>
                    <p className="text-sm text-muted">Pipeline automation & deployment</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </SlideUp>

          <SlideUp delay={0.4}>
            <div
              className="border border-[#2d2d44] rounded-lg p-6 md:p-8"
              style={{
                background: "rgba(26, 26, 46, 0.5)",
              }}
            >
              <h3
                className="text-xl font-semibold mb-6"
                style={{
                  background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Fun Facts
              </h3>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-[#6366f1] mt-1">→</span>
                  <span>Passionate about automation and infrastructure optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-1">→</span>
                  <span>Enjoy learning new tools and frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6366f1] mt-1">→</span>
                  <span>Active open-source contributor and community member</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b5cf6] mt-1">→</span>
                  <span>Love mentoring and helping others grow in tech</span>
                </li>
              </ul>
            </div>
          </SlideUp>
        </div> */}
      </div>
    </section>
  );
}
