"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useAssetPath } from "../../../lib/utils"

interface Benefit {
  icon: string
  title: string
  description: string
}

interface Testimonial {
  quote: string
  author: string
  company: string
  image: string
}

interface CaseStudy {
  title: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  image: string
}

const benefits: Benefit[] = [
  {
    icon: "/icons/speed.svg",
    title: "Increased Production Speed",
    description: "Our multi-laser technology delivers up to 4x faster build rates compared to single-laser systems, dramatically reducing production time and costs."
  },
  {
    icon: "/icons/quality.svg",
    title: "Superior Part Quality",
    description: "Advanced gas flow systems and precise thermal control ensure consistent material properties and exceptional surface finish across the entire build volume."
  },
  {
    icon: "/icons/cost.svg",
    title: "Lower Cost Per Part",
    description: "Higher throughput, optimized powder usage, and reduced post-processing requirements significantly decrease the overall cost per part."
  },
  {
    icon: "/icons/flexibility.svg",
    title: "Design Freedom",
    description: "Create complex geometries impossible with traditional manufacturing methods, enabling weight reduction, part consolidation, and enhanced performance."
  },
  {
    icon: "/icons/reliability.svg",
    title: "Exceptional Reliability",
    description: "Robust machine design and comprehensive monitoring systems ensure consistent results and minimize downtime for maximum productivity."
  },
  {
    icon: "/icons/support.svg",
    title: "Comprehensive Support",
    description: "Our global team of application engineers provides expert assistance from process development to production optimization and maintenance."
  }
]

const testimonials: Testimonial[] = [
  {
    quote: "BLT's metal 3D printing technology has revolutionized our production capabilities, allowing us to manufacture complex aerospace components with unprecedented speed and quality.",
    author: "Sarah Johnson",
    company: "Aerospace Innovations Inc.",
    image: "/images/testimonial-1.jpg"
  },
  {
    quote: "The multi-laser system from BLT has reduced our production time by 70% while maintaining exceptional part quality. Their technical support team has been invaluable in optimizing our manufacturing processes.",
    author: "Michael Chen",
    company: "Medical Devices International",
    image: "/images/testimonial-2.jpg"
  },
  {
    quote: "We've been able to consolidate multiple components into single parts, reducing weight and improving performance. BLT's technology has been a game-changer for our automotive applications.",
    author: "Thomas Weber",
    company: "Precision Automotive GmbH",
    image: "/images/testimonial-3.jpg"
  }
]

const caseStudies: CaseStudy[] = [
  {
    title: "Lightweight Aerospace Bracket",
    industry: "Aerospace",
    challenge: "Design and manufacture a lightweight structural bracket with complex internal lattice structures to reduce weight while maintaining strength requirements.",
    solution: "Utilized BLT-S600 with advanced topology optimization software to create an optimized design with internal lattice structures impossible to produce with traditional methods.",
    results: [
      "Weight reduction of 45% compared to conventional design",
      "Maintained all structural performance requirements",
      "Reduced lead time from 8 weeks to 5 days",
      "Cost savings of 30% over traditional manufacturing"
    ],
    image: "/images/case-aerospace.jpg"
  },
  {
    title: "Custom Medical Implant",
    industry: "Medical",
    challenge: "Produce patient-specific titanium implants with optimized osseointegration properties and complex geometries for better patient outcomes.",
    solution: "Implemented BLT-S400 with specialized titanium alloy and custom parameter sets to create porous structures with ideal properties for bone ingrowth.",
    results: [
      "Improved patient recovery time by 35%",
      "Enhanced implant longevity and performance",
      "Reduced surgical complications by 28%",
      "Enabled same-day production of custom implants"
    ],
    image: "/images/case-medical.jpg"
  }
]

const WhySection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activeCaseStudy, setActiveCaseStudy] = useState(0)
  const getAssetPath = useAssetPath()

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  }

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNextCaseStudy = () => {
    setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length)
  }

  const handlePrevCaseStudy = () => {
    setActiveCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <div className="space-y-16">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        custom={0}
        className="text-4xl font-bold mb-8 text-gray-900"
      >
        WHY <span className="text-blt-orange">CHOOSE BLT</span>
      </motion.h2>

      {/* Benefits Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.1 
            } 
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={fadeInUpVariants}
            custom={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 relative mr-4 flex-shrink-0">
                <Image 
                  src={getAssetPath(benefit.icon)} 
                  alt={benefit.title} 
                  fill 
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-blt-orange">{benefit.title}</h3>
            </div>
            <p className="text-gray-700">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        custom={0}
        className="bg-gray-100 rounded-xl p-8 relative"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">What Our Customers Say</h3>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden flex-shrink-0">
                    <Image 
                      src={getAssetPath(testimonial.image)} 
                      alt={testimonial.author} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <blockquote className="text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</blockquote>
                    <div className="font-semibold text-blt-orange">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeTestimonial ? "bg-blt-orange" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              tabIndex={0}
            />
          ))}
        </div>
        
        <button
          onClick={handlePrevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Previous testimonial"
          tabIndex={0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button
          onClick={handleNextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Next testimonial"
          tabIndex={0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </motion.div>

      {/* Case Studies */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        custom={0}
        className="space-y-6"
      >
        <h3 className="text-2xl font-semibold text-gray-900">Case Studies</h3>
        
        <div className="relative overflow-hidden rounded-xl bg-white shadow-md">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeCaseStudy * 100}%)` }}
          >
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                    <Image 
                      src={getAssetPath(caseStudy.image)} 
                      alt={caseStudy.title} 
                      fill 
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blt-orange text-white px-3 py-1 rounded-md text-sm font-medium">
                      {caseStudy.industry}
                    </div>
                  </div>
                  <div className="w-full md:w-3/5 p-6 md:p-8">
                    <h4 className="text-xl font-semibold text-blt-orange mb-4">{caseStudy.title}</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Challenge</h5>
                        <p className="text-gray-700">{caseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Solution</h5>
                        <p className="text-gray-700">{caseStudy.solution}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Results</h5>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          {caseStudy.results.map((result, i) => (
                            <li key={i}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center py-4 gap-2 bg-gray-50 border-t">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCaseStudy(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeCaseStudy ? "bg-blt-orange" : "bg-gray-300"
                }`}
                aria-label={`Go to case study ${index + 1}`}
                tabIndex={0}
              />
            ))}
          </div>
          
          <button
            onClick={handlePrevCaseStudy}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous case study"
            tabIndex={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button
            onClick={handleNextCaseStudy}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next case study"
            tabIndex={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default WhySection 