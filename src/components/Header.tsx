"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: "WHO", href: "#who" },
  { label: "WHAT", href: "#what" },
  { label: "WHY", href: "#why" },
  { label: "HOW", href: "#how" },
  { label: "CONTACT", href: "#contact" }
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative z-10">
            <Link href="/" aria-label="BLT Advanced Manufacturing Home">
              <Image 
                src={isScrolled ? "/images/blt-logo.png" : "/images/blt-logo-white.png"} 
                alt="BLT Advanced Manufacturing" 
                width={150} 
                height={50}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? "text-gray-800 hover:text-blt-orange" 
                    : "text-white hover:text-blt-orange"
                }`}
                tabIndex={0}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="/login" 
              className={`px-5 py-2 rounded-md font-medium transition-colors ${
                isScrolled 
                  ? "bg-blt-orange text-white hover:bg-blt-orange-dark" 
                  : "bg-white text-blt-orange hover:bg-gray-100"
              }`}
              tabIndex={0}
            >
              Login
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-10 p-2"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            tabIndex={0}
          >
            <div className="w-6 flex flex-col items-end justify-center gap-1.5">
              <span 
                className={`block h-0.5 rounded transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${isMobileMenuOpen ? "w-6 translate-y-2 rotate-45" : "w-6"}`}
              ></span>
              <span 
                className={`block h-0.5 rounded transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${isMobileMenuOpen ? "opacity-0" : "w-4"}`}
              ></span>
              <span 
                className={`block h-0.5 rounded transition-all duration-300 ${
                  isScrolled ? "bg-gray-800" : "bg-white"
                } ${isMobileMenuOpen ? "w-6 -translate-y-2 -rotate-45" : "w-5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-gray-900 z-40 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                className="text-white text-xl font-medium hover:text-blt-orange transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="/login" 
              className="mt-4 px-8 py-3 rounded-md bg-blt-orange text-white font-medium hover:bg-blt-orange-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 