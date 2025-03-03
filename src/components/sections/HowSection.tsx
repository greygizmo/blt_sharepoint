"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useAssetPath } from "../../../lib/utils"

interface ProcessStep {
  number: number
  title: string
  description: string
  icon: string
}

interface SupportService {
  title: string
  description: string
  icon: string
}

interface TrainingProgram {
  title: string
  duration: string
  format: string
  topics: string[]
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Initial Consultation",
    description: "Our application engineers work with you to understand your specific requirements, challenges, and goals for metal additive manufacturing.",
    icon: "/icons/consultation.svg"
  },
  {
    number: 2,
    title: "Design Optimization",
    description: "We help optimize your designs for additive manufacturing, leveraging our expertise to maximize performance while minimizing costs.",
    icon: "/icons/design.svg"
  },
  {
    number: 3,
    title: "Material Selection",
    description: "Choose from our wide range of qualified metal powders or work with us to develop custom parameters for your specific material requirements.",
    icon: "/icons/material.svg"
  },
  {
    number: 4,
    title: "Process Development",
    description: "Our team develops and validates the optimal printing parameters to ensure consistent quality and performance for your application.",
    icon: "/icons/process.svg"
  },
  {
    number: 5,
    title: "Production & Quality Assurance",
    description: "We provide comprehensive training and support to ensure successful implementation and ongoing production with rigorous quality control.",
    icon: "/icons/production.svg"
  }
]

const supportServices: SupportService[] = [
  {
    title: "Installation & Setup",
    description: "Professional installation, calibration, and initial training to ensure your BLT system is operational from day one.",
    icon: "/icons/installation.svg"
  },
  {
    title: "Technical Support",
    description: "24/7 remote technical assistance and scheduled on-site service visits to maintain optimal system performance.",
    icon: "/icons/support.svg"
  },
  {
    title: "Application Engineering",
    description: "Expert guidance on part design, process optimization, and material development for your specific applications.",
    icon: "/icons/engineering.svg"
  },
  {
    title: "Software Updates",
    description: "Regular software updates with new features, improvements, and optimizations to enhance your productivity.",
    icon: "/icons/software.svg"
  }
]

const trainingPrograms: TrainingProgram[] = [
  {
    title: "Basic Operator Training",
    duration: "3 days",
    format: "On-site at customer facility",
    topics: [
      "Machine operation fundamentals",
      "Safety procedures",
      "Basic maintenance",
      "Build preparation",
      "Post-processing basics"
    ]
  },
  {
    title: "Advanced Process Control",
    duration: "5 days",
    format: "At BLT Training Center",
    topics: [
      "Parameter optimization",
      "Advanced build strategies",
      "Material-specific considerations",
      "Quality control methods",
      "Troubleshooting techniques"
    ]
  },
  {
    title: "Design for Additive Manufacturing",
    duration: "4 days",
    format: "Virtual or on-site",
    topics: [
      "Design principles for AM",
      "Topology optimization",
      "Support structure strategies",
      "Part consolidation techniques",
      "Cost optimization methods"
    ]
  }
]

const HowSection = () => {
  const [activeTab, setActiveTab] = useState(0)
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
        HOW <span className="text-blt-orange">WE WORK</span>
      </motion.h2>

      {/* Process Steps */}
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
        className="relative"
      >
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 z-0"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              variants={fadeInUpVariants}
              custom={index}
              className={`relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                <div className={`w-full max-w-md ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blt-orange text-white flex items-center justify-center font-bold text-lg mr-3">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-blt-orange">{step.title}</h3>
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
              
              <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex">
                <div className="w-12 h-12 rounded-full bg-white border-4 border-blt-orange flex items-center justify-center">
                  <div className="w-8 h-8 relative">
                    <Image 
                      src={getAssetPath(step.icon)} 
                      alt={step.title} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Support Services */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        custom={0}
        className="space-y-6"
      >
        <h3 className="text-2xl font-semibold text-gray-900">Support Services</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportServices.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              custom={index + 1}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 relative mr-4 flex-shrink-0">
                  <Image 
                    src={getAssetPath(service.icon)} 
                    alt={service.title} 
                    fill 
                    className="object-contain"
                  />
                </div>
                <h4 className="text-xl font-semibold text-blt-orange">{service.title}</h4>
              </div>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Training Programs */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        custom={0}
        className="space-y-6"
      >
        <h3 className="text-2xl font-semibold text-gray-900">Training Programs</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              custom={index + 1}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-xl font-semibold text-blt-orange mb-3">{program.title}</h4>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span className="text-gray-700">{program.duration}</span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-gray-700">{program.format}</span>
                </div>
                
                <div>
                  <div className="font-semibold text-gray-900 mb-2">Topics Covered:</div>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {program.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4">
                  <a 
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-blt-orange hover:text-white transition-colors"
                    aria-label={`Request information about ${program.title}`}
                    tabIndex={0}
                  >
                    Request Information
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        custom={0}
        className="bg-gray-100 rounded-xl p-8 text-center"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Contact our team to discuss your specific requirements and discover how BLT's metal 3D printing solutions can transform your manufacturing capabilities.
        </p>
        <a 
          href="#contact"
          className="inline-flex items-center justify-center rounded-md bg-blt-orange px-6 py-3 text-base font-medium text-white hover:bg-blt-orange-dark transition-colors"
          aria-label="Contact our team"
          tabIndex={0}
        >
          Contact Our Team
        </a>
      </motion.div>
    </div>
  )
}

export default HowSection 