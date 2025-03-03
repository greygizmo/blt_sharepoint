"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"

const sections = [
  { id: "who", title: "WHO" },
  { id: "what", title: "WHAT" },
  { id: "why", title: "WHY" },
  { id: "how", title: "HOW" },
  { id: "closing", title: "CONTACT" },
]

const SectionNavigation = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3 // Trigger earlier in viewport

      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 h-screen w-24 flex flex-col items-center justify-center z-30 space-y-8">
      {sections.map((section) => {
        const ref = useRef(null)
        const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" }) // Adjust visibility threshold

        return (
          <div key={section.id} className="w-24 flex items-center justify-center">
            <Link
              href={`#${section.id}`}
              ref={ref}
              className={`text-4xl font-black transition-all duration-300 ${
                activeSection === section.id ? "text-white neon-text" : "text-gray-700"
              }`}
              style={{
                opacity: activeSection === section.id ? 1 : 0.5,
                fontFamily: "'Winston-BlackItalic', serif",
                whiteSpace: "nowrap", // Prevents text wrapping
              }}
              aria-label={`Go to ${section.title} section`}
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(section.id)
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  const element = document.getElementById(section.id)
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              {section.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default SectionNavigation