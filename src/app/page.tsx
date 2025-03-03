"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhoSection from "@/components/sections/WhoSection"
import WhatSection from "@/components/sections/WhatSection"
import WhySection from "@/components/sections/WhySection"
import HowSection from "@/components/sections/HowSection"
import ContactSection from "@/components/sections/ContactSection"
import SectionNavigation from "../../components/SectionNavigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <SectionNavigation />
      
      {/* Hero Banner */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video or Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Metal 3D printing in action"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Revolutionizing Manufacturing <br />
            <span className="text-blt-orange">With Metal 3D Printing</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white mb-10 max-w-3xl mx-auto"
          >
            BLT Advanced Manufacturing delivers cutting-edge metal 3D printing solutions 
            that transform how industries design, prototype, and produce complex metal parts.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a 
              href="#what"
              className="px-8 py-3 bg-blt-orange text-white font-medium rounded-md hover:bg-blt-orange-dark transition-colors"
              aria-label="Explore our products"
              tabIndex={0}
            >
              Explore Our Products
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 bg-white text-blt-orange font-medium rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Contact us"
              tabIndex={0}
            >
              Contact Us
            </a>
          </motion.div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-white text-sm mb-2">Scroll Down</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content Sections */}
      <div className="container mx-auto px-4 py-16">
        {/* WHO Section */}
        <section id="who" className="mb-24 scroll-mt-24">
          <WhoSection />
        </section>
        
        {/* WHAT Section */}
        <section id="what" className="mb-24 scroll-mt-24">
          <WhatSection />
        </section>
        
        {/* WHY Section */}
        <section id="why" className="mb-24 scroll-mt-24">
          <WhySection />
        </section>
        
        {/* HOW Section */}
        <section id="how" className="mb-24 scroll-mt-24">
          <HowSection />
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <ContactSection />
        </section>
      </div>
      
      <Footer />
    </main>
  )
} 