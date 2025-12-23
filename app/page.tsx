import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/ui/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#e5e5e5]">
      <Header />
      <main>
        <Hero />
        {/* <Experience /> */}
        {/* <Skills /> */}
        <Projects />
        <About />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
