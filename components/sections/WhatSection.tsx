"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Download } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
// Import carousel components from src directory
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../src/components/ui/carousel"

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

// Sample data - in production this would come from CMS or API
const printers: Printer[] = [
  {
    name: "BLT-A160",
    image: "/images/a160.png",
    buildVolume: "160 x 160 x 200 mm",
    buildRate: "30 cm³/h",
    lasers: "2 x 500W",
    applications: ["Small Parts Batch Prod.", "Dental Restorations", "Jewelry & Micro Parts"],
    datasheetUrl: "/datasheets/BLT-A160_datasheet.pdf"
  },
  {
    name: "BLT-A300/A320",
    image: "/images/a300_a320.png",
    buildVolume: "250 x 250 x 300 mm",
    buildRate: "50 cm³/h",
    lasers: "2 x 1000W",
    applications: ["Cost-Effective Production", "Medium Volume Runs", "Industrial Components"],
    datasheetUrl: "/datasheets/BLT-A300_A320_datasheet.pdf"
  },
  {
    name: "BLT-S210",
    image: "/images/S210.png",
    buildVolume: "105 x 105 x 200 mm",
    buildRate: "15 cm³/h",
    lasers: "500W",
    applications: ["Material Research", "Process Development", "Custom Alloys R&D"],
    datasheetUrl: "/datasheets/BLT-S210_datasheet.pdf"
  },
  {
    name: "BLT-S310/S320",
    image: "/images/s310_s320.png",
    buildVolume: "250 x 250 x 400 mm",
    buildRate: "50 cm³/h",
    lasers: "2 x 500W",
    applications: ["Aerospace Components", "High-Reliability Parts", "Automated Manufacturing"],
    datasheetUrl: "/datasheets/BLT-S310_S320_datasheet.pdf"
  },
  {
    name: "BLT-S400",
    image: "/images/s400.png",
    buildVolume: "400 x 300 x 400 mm",
    buildRate: "150 cm³/h",
    lasers: "6 x 500W",
    applications: ["Batch Production", "Smart Manufacturing", "Scalable Production"],
    datasheetUrl: "/datasheets/BLT-S400_datasheet.pdf"
  },
  {
    name: "BLT-S450",
    image: "/images/s450.png",
    buildVolume: "450 x 450 x 500 mm",
    buildRate: "200 cm³/h",
    lasers: "8 x 500W",
    applications: ["Production Printer", "Cost-Effective", "Automated Powder Circulation"],
    datasheetUrl: "/datasheets/BLT-S450_datasheet.pdf"
  },
  {
    name: "BLT-S600",
    image: "/images/s600.png",
    buildVolume: "600 x 600 x 600 mm",
    buildRate: "80 cm³/h",
    lasers: "4 x 500W",
    applications: ["Aerospace", "Medical", "Automotive"],
    datasheetUrl: "/datasheets/BLT-S600.pdf"
  },
  {
    name: "BLT-S800",
    image: "/images/s800.png", 
    buildVolume: "800 x 800 x 650 mm",
    buildRate: "150cm³/h | 200cm³/h | 250cm³/h",
    lasers: "500W x 6; 500W x 8; 500W x 10",
    applications: ["Aerospace", "Defense", "Energy"],
    datasheetUrl: "/datasheets/BLT-S800.pdf"
  },
  {
    name: "BLT-S815",
    image: "/images/s815.png",
    buildVolume: "800 x 800 x 1500 mm",
    buildRate: "250 cm³/h",
    lasers: "10 x 500W",
    applications: ["Large Format Printing", "High Throughput", "Automated Handling"],
    datasheetUrl: "/datasheets/BLT-S815_datasheet.pdf"
  },
  {
    name: "BLT-S825",
    image: "/images/s825.png",
    buildVolume: "850 x 850 x 2500 mm",
    buildRate: "870 cm³/h",
    lasers: "24 x 500W",
    applications: ["Extra Large Format", "Tall Build Volume", "High Build Height"],
    datasheetUrl: "/datasheets/BLT-S825_datasheet.pdf"
  },
  {
    name: "BLT-S1000",
    image: "/images/s1000.png",
    buildVolume: "1200 x 600 x 1500 mm",
    buildRate: "300 cm³/h",
    lasers: "12 x 500W",
    applications: ["Large Format Printer", "Meter-sized Parts", "Large Build Volume"],
    datasheetUrl: "/datasheets/BLT-S1000_datasheet.pdf"
  },
  {
    name: "BLT-S1500",
    image: "/images/s1500.png",
    buildVolume: "1500 x 1500 x 1200 mm",
    buildRate: "900 cm³/h",
    lasers: "26 x 500W",
    applications: ["Ultra Large Format", "Oversized Parts", "Jumbo Printer"],
    datasheetUrl: "/datasheets/BLT-S1500_datasheet.pdf"
  }
]

const industries: Industry[] = [
  {
    name: "Aerospace & Aviation",
    image: "/images/industries/aerospace.jpg",
    description: "High-performance engine and structural parts, including flight-critical components for military and civilian aircraft, UAVs, and new space vehicles."
  },
  {
    name: "Space",
    image: "/images/industries/space.jpg",
    description: "Large rocket and satellite components, with BLT's technology contributing to projects like the Zhuque-2 Y2 commercial rocket."
  },
  {
    name: "Automotive",
    image: "/images/industries/automotive.jpg",
    description: "Prototypes and production parts, such as lightweight subframes, brake components, and mold inserts."
  },
  {
    name: "Energy",
    image: "/images/industries/energy.jpg",
    description: "Turbine blades, combustor components, and high-temperature tooling. Superalloys like Inconel 718 and Hastelloy X offer durability in gas turbines."
  },
  {
    name: "Mold & Tooling",
    image: "/images/industries/tooling.jpg",
    description: "Conformal cooling molds, injection mold inserts, die-cast tooling, which reduce cycle times and improve part quality."
  },
  {
    name: "Medical & Dental",
    image: "/images/industries/medical.jpg",
    description: "Orthopedic implants, cranial mesh, dental crowns/bridges in titanium or cobalt-chrome."
  },
  {
    name: "Electronics",
    image: "/images/industries/electronics.jpg",
    description: "Titanium watch components, hinges in foldable phones, and other small precision parts."
  },
  {
    name: "Research & Education",
    image: "/images/industries/research.jpg",
    description: "BLT provides lab-scale systems and custom powder development for universities, research institutes, and corporate R&D centers."
  }
]

const WhatSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  
  // Adjustable opacity for images (0-1)
  const imageOpacity = 0.9
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const glowVariants = {
    initial: { opacity: 0.7 },
    animate: { 
      opacity: [0.7, 1, 0.7], 
      filter: ['blur(4px)', 'blur(2px)', 'blur(4px)'],
      transition: { 
        repeat: Infinity, 
        duration: 2
      }
    }
  }

  return (
    <section 
      ref={sectionRef} 
      id="what" 
      className="relative min-h-screen w-full"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 retro-grid opacity-10"></div>
      
      {/* Laser line effect */}
      <motion.div 
        className="vertical-laser"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />
      
      <div className="container mx-auto relative z-10 pt-14 pb-6 px-4 md:px-6">
        {/* Product/Service Description */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-10"
        >
          <motion.h3 variants={itemVariants} className="subsection-title mb-5">Our Solutions</motion.h3>
          
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-4 mb-6 relative">
            <div 
              className="w-full md:w-1/2 relative overflow-visible flex items-center justify-center"
              style={{ opacity: imageOpacity }}
            >
              <Image 
                src="/images/metal-3d-printer.png"
                alt="BLT Metal 3D Printer"
                width={600}
                height={380}
                className="object-contain relative z-10"
                style={{ transform: "scale(1.2)" }}
                priority
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-4">
              <h3 className="inline-block text-2xl font-bold text-white mb-3 px-3 py-1 bg-[#EA5504] rounded">BLT Metal Printers</h3>
              <p className="text-gray-300">
                An family of systems from lab-scale (S210) to ultra-large industrial (S1500) with multi-laser technology.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row-reverse items-center gap-4 mb-6 relative">
            <div 
              className="w-full md:w-1/2 relative overflow-visible flex items-center justify-center"
              style={{ opacity: imageOpacity }}
            >
              <Image 
                src="/images/blt-metal-powder.png"
                alt="BLT Metal Powders"
                width={500}
                height={350}
                className="object-contain relative z-10"
                style={{ transform: "scale(0.75)", marginTop: "-2rem", marginBottom: "-2rem" }}
                priority
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-4">
              <h3 className="inline-block text-2xl font-bold text-white mb-3 px-3 py-1 bg-[#EA5504] rounded">BLT Metal Powders</h3>
              <p className="text-gray-300">
                Over 80 alloy grades—titanium, aluminum, nickel superalloys, stainless/tool steels, copper, and more.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-4 mb-6 relative">
            <div 
              className="w-full md:w-1/2 relative overflow-visible flex items-center justify-center"
              style={{ opacity: imageOpacity }}
            >
              <Image 
                src="/images/blt-post-processing.png"
                alt="Post-Processing Solutions"
                width={600}
                height={380}
                className="object-contain relative z-10"
                style={{ transform: "scale(1.2)" }}
                priority
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-4">
              <h3 className="inline-block text-2xl font-bold text-white mb-3 px-3 py-1 bg-[#EA5504] rounded">Post-Processing & Powder Management Solutions</h3>
              <p className="text-gray-300">
                Automated sieving, recycling, and closed-loop powder handling machines.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row-reverse items-center gap-4 mb-6 relative">
            <div 
              className="w-full md:w-1/2 relative overflow-visible flex items-center justify-center"
              style={{ opacity: imageOpacity }}
            >
              <Image 
                src="/images/printer-s600.png"
                alt="AM Services"
                width={600}
                height={380}
                className="object-contain relative z-10"
                style={{ transform: "scale(1.2)" }}
                priority
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-4">
              <h3 className="inline-block text-2xl font-bold text-white mb-3 px-3 py-1 bg-[#EA5504] rounded">Comprehensive AM Services</h3>
              <p className="text-gray-300">
                Application engineering, design for additive manufacturing (DFAM) consultation. As we build out our metal additive facility we'll begin offer to offer prototyping, high-mix love-volume manufacturing, finishing, and final part validation services.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Printers Carousel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.h3 
            variants={itemVariants} 
            className="subsection-title mb-6"
          >
            BLT Printer Family
          </motion.h3>
          
          <motion.div variants={itemVariants} className="relative">
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-4">
                {printers.map((printer, index) => (
                  <CarouselItem 
                    key={index} 
                    className="pl-4 basis-1/4"
                  >
                    <Card className="border border-gray-800 hover:border-[#EA5504] transition-all duration-300 bg-transparent text-white h-full">
                      <CardHeader className="relative h-[180px] p-0 flex items-center justify-center overflow-visible"
                        style={{ opacity: imageOpacity }}
                      >
                        <div className="p-2">
                          <Image 
                            src={printer.image}
                            alt={`${printer.name} 3D Printer`}
                            width={240}
                            height={200}
                            className="object-contain"
                            style={{ transform: "scale(1.25)" }}
                            priority
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <CardTitle className="text-xl font-bold text-[#EA5504] mb-4">{printer.name}</CardTitle>
                        <div className="space-y-2 text-gray-300">
                          <p><span className="font-medium">Build Volume:</span> {printer.buildVolume}</p>
                          <p><span className="font-medium">Build Rate:</span> {printer.buildRate}</p>
                          <p><span className="font-medium">Lasers:</span> {printer.lasers}</p>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full group border-gray-800 text-gray-300">
                          <Download size={16} className="mr-2 group-hover:text-[#EA5504]" />
                          <span className="group-hover:text-[#EA5504]">Download Datasheet</span>
                        </Button>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -right-2 -top-16 flex gap-2">
                <CarouselPrevious className="bg-transparent text-white hover:bg-[#EA5504] hover:text-white border-[#EA5504] relative inset-auto shadow-[0_0_15px_rgba(234,85,4,0.5)] hover:shadow-[0_0_15px_rgba(234,85,4,0.8)]" />
                <CarouselNext className="bg-transparent text-white hover:bg-[#EA5504] hover:text-white border-[#EA5504] relative inset-auto shadow-[0_0_15px_rgba(234,85,4,0.5)] hover:shadow-[0_0_15px_rgba(234,85,4,0.8)]" />
              </div>
            </Carousel>
          </motion.div>
        </motion.div>
        
        {/* Unique Selling Proposition (USP) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 
            variants={itemVariants} 
            className="subsection-title mb-8"
          >
            Unique Selling Proposition
          </motion.h3>
          
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 relative h-[450px] bg-black rounded-lg overflow-hidden flex items-center justify-center border border-gray-800 group">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-[#EA5504]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Orange accent line */}
              <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-[#EA5504] to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-[#EA5504] to-transparent"></div>
              
              <Image 
                src="/images/s400.png"
                alt="BLT 3D Printer"
                width={450}
                height={350}
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                style={{ opacity: imageOpacity }}
                priority
              />
              
              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h4 className="text-xl font-bold text-[#EA5504] mb-2">Advanced 3D Printing Technology</h4>
                <p className="text-gray-300 text-sm">Cutting-edge multi-laser systems with exceptional build volumes</p>
              </div>
            </div>
            
            {/* Right Side - Accordion */}
            <div className="w-full md:w-1/2">
              <Accordion type="single" collapsible className="bg-black bg-opacity-80 shadow-lg rounded-lg border border-gray-800 h-full" defaultValue="item-1">
                <AccordionItem value="item-1" className="border-b border-gray-800 px-4 data-[state=open]:bg-black/50">
                  <AccordionTrigger className="!flex-row-reverse !justify-start [&>svg]:text-[#EA5504] [&>svg]:mr-4 py-6">
                    <span className="text-[#EA5504] text-right w-full font-medium text-lg pr-4 hover:text-[#EA5504]/80 transition-all">High-Speed Multi-Laser Printing</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">
                    <p className="pl-2 border-l-2 border-[#EA5504]/40">All BLT printers support multi-laser technology, from 2 up to 26 on the top-end S1500. High laser density massively cuts build times for production parts.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-gray-800 px-4 data-[state=open]:bg-black/50">
                  <AccordionTrigger className="!flex-row-reverse !justify-start [&>svg]:text-[#EA5504] [&>svg]:mr-4 py-6">
                    <span className="text-[#EA5504] text-right w-full font-medium text-lg pr-4 hover:text-[#EA5504]/80 transition-all">Large-Format Builds</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">
                    <p className="pl-2 border-l-2 border-[#EA5504]/40">The competition's "extra large format" is square in the middle of BLT's expansive family of LPBF printers. With BLT, companies can print up to 1.5 m in a single build, enabling true consolidation of large assemblies.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b border-gray-800 px-4 data-[state=open]:bg-black/50">
                  <AccordionTrigger className="!flex-row-reverse !justify-start [&>svg]:text-[#EA5504] [&>svg]:mr-4 py-6">
                    <span className="text-[#EA5504] text-right w-full font-medium text-lg pr-4 hover:text-[#EA5504]/80 transition-all">Integrated Solutions (Hardware + Powder)</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">
                    <p className="pl-2 border-l-2 border-[#EA5504]/40">BLT's synergy between machines and custom powders helps ensure consistent, high-quality outputs.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b border-gray-800 px-4 data-[state=open]:bg-black/50">
                  <AccordionTrigger className="!flex-row-reverse !justify-start [&>svg]:text-[#EA5504] [&>svg]:mr-4 py-6">
                    <span className="text-[#EA5504] text-right w-full font-medium text-lg pr-4 hover:text-[#EA5504]/80 transition-all">Proven Track Record</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">
                    <p className="pl-2 border-l-2 border-[#EA5504]/40">Components in rockets, airplanes, racecars, and consumer electronics—backed by demanding global industries.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="px-4 data-[state=open]:bg-black/50">
                  <AccordionTrigger className="!flex-row-reverse !justify-start [&>svg]:text-[#EA5504] [&>svg]:mr-4 py-6">
                    <span className="text-[#EA5504] text-right w-full font-medium text-lg pr-4 hover:text-[#EA5504]/80 transition-all">Strategic Pricing Advantage</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">
                    <p className="pl-2 border-l-2 border-[#EA5504]/40">Typically 15–30% lower cost vs. major Western AM brands, allowing more accessible entry into metal 3D printing.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Industries Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12"
        >
          <motion.h3 variants={itemVariants} className="subsection-title mb-5">Industries We Serve</motion.h3>
          
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-lg h-[180px]"
              >
                {/* Industry image */}
                <div className="absolute inset-0 z-0">
                  <div className="relative w-full h-full" style={{ opacity: imageOpacity }}>
                    <Image 
                      src={`/images/${index % 2 === 0 ? 'metal-3d-printer.png' : 'Engine Integration Component.png'}`}
                      alt={industry.name}
                      fill
                      className="object-cover opacity-40"
                      priority
                    />
                  </div>
                </div>
                
                {/* Orange overlay with title */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-all duration-300">
                  <h4 className="text-white text-xl font-bold text-center">{industry.name}</h4>
                </div>
                
                {/* Description hover state */}
                <div className="absolute inset-0 bg-[#EA5504] bg-opacity-90 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center">{industry.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Offerings */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={itemVariants} 
            className="subsection-title mb-8"
          >
            Offerings
          </motion.h3>
          
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 relative h-[200px] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
                <Image 
                  src="/images/S210.png"
                  alt="Turn Key Solutions"
                  width={300}
                  height={180}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="w-full md:w-1/2">
                <h4 className="text-xl font-bold text-[#EA5504] mb-2">Turn Key Solutions</h4>
                <p className="text-gray-300">
                  Ideal for manufacturers who want to quickly adopt metal AM with minimal risk.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="w-full md:w-1/2 relative h-[200px] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
                <Image 
                  src="/images/metal-3d-printer.png"
                  alt="Production Cells"
                  width={300}
                  height={180}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="w-full md:w-1/2">
                <h4 className="text-xl font-bold text-[#EA5504] mb-2">Large-Scale Production Cells</h4>
                <p className="text-gray-300">
                  Multiple printers plus automated powder handling modules for continuous, high-volume manufacturing.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 relative h-[200px] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
                <Image 
                  src="/images/S210.png"
                  alt="Pilot Projects"
                  width={300}
                  height={180}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="w-full md:w-1/2">
                <h4 className="text-xl font-bold text-[#EA5504] mb-2">Pilot Project Services</h4>
                <p className="text-gray-300">
                  Customers can test part feasibility or produce short-run jobs through BLT's printing service bureaus.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatSection 