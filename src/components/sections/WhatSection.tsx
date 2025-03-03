"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"

interface Printer {
  name: string
  image: string
  buildVolume: string
  buildRate: string
  lasers: string
  applications: string[]
  datasheetUrl: string
}

interface Industry {
  name: string
  image: string
  description: string
}

const printers: Printer[] = [
  {
    name: "BLT-S600",
    image: "/images/printer-s600.png",
    buildVolume: "600 x 600 x 600 mm",
    buildRate: "120 cm³/h",
    lasers: "4 x 500W",
    applications: ["Aerospace", "Medical", "Automotive"],
    datasheetUrl: "https://onedrive.example.com/blt-s600-datasheet.pdf"
  },
  {
    name: "BLT-S400",
    image: "/images/printer-s400.png",
    buildVolume: "400 x 400 x 400 mm",
    buildRate: "80 cm³/h",
    lasers: "2 x 500W",
    applications: ["Medical", "Tooling", "General Manufacturing"],
    datasheetUrl: "https://onedrive.example.com/blt-s400-datasheet.pdf"
  },
  {
    name: "BLT-S200",
    image: "/images/printer-s200.png",
    buildVolume: "200 x 200 x 200 mm",
    buildRate: "40 cm³/h",
    lasers: "1 x 500W",
    applications: ["Jewelry", "Dental", "Research"],
    datasheetUrl: "https://onedrive.example.com/blt-s200-datasheet.pdf"
  }
]

const industries: Industry[] = [
  {
    name: "Aerospace",
    image: "/images/industry-aerospace.png",
    description: "Lightweight components with complex geometries for aircraft and spacecraft."
  },
  {
    name: "Medical",
    image: "/images/industry-medical.png",
    description: "Custom implants, surgical instruments, and medical devices."
  },
  {
    name: "Automotive",
    image: "/images/industry-automotive.png",
    description: "Performance parts, tooling, and prototypes for automotive applications."
  },
  {
    name: "Energy",
    image: "/images/industry-energy.png",
    description: "Heat exchangers, turbine components, and specialized parts for energy production."
  }
]

const WhatSection = () => {
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
        WHAT <span className="text-blt-orange">WE OFFER</span>
      </motion.h2>

      {/* Product & Services */}
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
        className="space-y-12"
      >
        <motion.div variants={fadeInUpVariants} custom={1}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 relative h-64 md:h-80">
              <Image 
                src="/images/metal-3d-printer.png" 
                alt="BLT Metal 3D Printer" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold text-blt-orange mb-3">BLT Metal 3D Printers</h3>
              <p className="text-gray-700">
                Our state-of-the-art metal 3D printers utilize advanced laser powder bed fusion technology to create complex metal parts with exceptional precision and material properties. With multi-laser configurations and innovative gas flow systems, BLT printers deliver industry-leading build rates without compromising on quality.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Printer Carousel */}
        <motion.div variants={fadeInUpVariants} custom={2} className="py-8">
          <h4 className="text-xl font-semibold mb-6">Our Printer Range</h4>
          <Carousel visibleSlides={1}>
            {printers.map((printer, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="relative h-48 mb-4">
                    <Image 
                      src={printer.image} 
                      alt={printer.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl text-blt-orange mb-2">{printer.name}</CardTitle>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <p className="font-semibold text-gray-700">Build Volume</p>
                      <p className="text-gray-600">{printer.buildVolume}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Build Rate</p>
                      <p className="text-gray-600">{printer.buildRate}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Lasers/Power</p>
                      <p className="text-gray-600">{printer.lasers}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700">Applications</p>
                      <p className="text-gray-600">{printer.applications.join(", ")}</p>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <a 
                      href={printer.datasheetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-blt-orange hover:text-white transition-colors"
                      aria-label={`Download ${printer.name} datasheet`}
                      tabIndex={0}
                    >
                      Download Datasheet
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </motion.div>

        <motion.div variants={fadeInUpVariants} custom={3}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 order-1 md:order-2 relative h-64 md:h-80">
              <Image 
                src="/images/software-solutions.png" 
                alt="BLT Software Solutions" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-blt-orange mb-3">Software Solutions</h3>
              <p className="text-gray-700">
                Our comprehensive software suite provides end-to-end control over the additive manufacturing process. From part orientation and support generation to build preparation and machine monitoring, our intuitive software tools help maximize productivity and ensure consistent results.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Unique Selling Points */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        custom={0}
        className="space-y-6"
      >
        <h3 className="text-2xl font-semibold text-gray-900">Unique Selling Points</h3>
        
        <Tabs defaultValue="multi-laser">
          <TabsList className="w-full grid grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="multi-laser">Multi-Laser Technology</TabsTrigger>
            <TabsTrigger value="gas-flow">Advanced Gas Flow</TabsTrigger>
            <TabsTrigger value="software">Intelligent Software</TabsTrigger>
          </TabsList>
          <TabsContent value="multi-laser" className="p-4 bg-white rounded-md shadow-sm mt-4">
            <h4 className="text-xl font-semibold text-blt-orange mb-2">High-Speed Multi-Laser Printing</h4>
            <p className="text-gray-700">
              Our proprietary multi-laser technology enables up to 4 lasers to work simultaneously on a single part or multiple parts, dramatically increasing build speeds without compromising quality. The intelligent laser allocation system optimizes laser paths for maximum efficiency.
            </p>
          </TabsContent>
          <TabsContent value="gas-flow" className="p-4 bg-white rounded-md shadow-sm mt-4">
            <h4 className="text-xl font-semibold text-blt-orange mb-2">Advanced Gas Flow System</h4>
            <p className="text-gray-700">
              BLT's innovative laminar gas flow system ensures uniform temperature distribution and efficient removal of process byproducts, resulting in superior part quality, reduced porosity, and consistent mechanical properties throughout the build volume.
            </p>
          </TabsContent>
          <TabsContent value="software" className="p-4 bg-white rounded-md shadow-sm mt-4">
            <h4 className="text-xl font-semibold text-blt-orange mb-2">Intelligent Software Suite</h4>
            <p className="text-gray-700">
              Our comprehensive software ecosystem provides advanced build preparation tools, real-time monitoring capabilities, and predictive maintenance features. Machine learning algorithms continuously optimize process parameters based on historical data to ensure optimal results.
            </p>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Key Industries */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        custom={0}
        className="space-y-6"
      >
        <h3 className="text-2xl font-semibold text-gray-900">Key Industries Served</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              custom={index + 1}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <div className="absolute inset-0 bg-gray-900 opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative h-full w-full">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blt-orange transition-colors">
                  {industry.name}
                </h4>
                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default WhatSection 