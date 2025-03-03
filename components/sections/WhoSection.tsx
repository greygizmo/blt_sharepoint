"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

interface TimelineItem {
  year: string
  title: string
  description: string
}

const timelineItems: TimelineItem[] = [
  {
    year: "2011",
    title: "Company Established",
    description: "BLT was founded with a vision to revolutionize 3D printing technology."
  },
  {
    year: "2015",
    title: "First Printer Launch",
    description: "Released our first commercial metal 3D printer, the BLT-S200."
  },
  {
    year: "2018",
    title: "Global Expansion",
    description: "Expanded operations to North America and Europe."
  },
  {
    year: "2020",
    title: "Multi-Laser Technology",
    description: "Pioneered multi-laser technology for faster, more efficient printing."
  },
  {
    year: "2023",
    title: "Partnership Formation",
    description: "Formed strategic partnership to accelerate innovation and market reach."
  }
]

const WhoSection = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState<number | null>(null)

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
    <div className="space-y-12">
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
      >
        <motion.h2 
          variants={fadeInUpVariants}
          custom={0}
          className="text-4xl font-bold mb-8 text-gray-900"
        >
          WHO IS <span className="text-blt-orange">BLT?</span>
        </motion.h2>

        <Accordion type="single" collapsible className="mb-12">
          <motion.div variants={fadeInUpVariants} custom={1}>
            <AccordionItem value="mission">
              <AccordionTrigger>Mission</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  To revolutionize manufacturing through innovative metal 3D printing solutions that enable our customers to create complex, high-performance parts with unprecedented efficiency and freedom of design.
                </p>
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          <motion.div variants={fadeInUpVariants} custom={2}>
            <AccordionItem value="vision">
              <AccordionTrigger>Vision</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  To be the global leader in metal additive manufacturing, driving the transformation of industries through cutting-edge technology that makes advanced manufacturing accessible, sustainable, and economically viable.
                </p>
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          <motion.div variants={fadeInUpVariants} custom={3}>
            <AccordionItem value="values">
              <AccordionTrigger>Core Values</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Innovation: Constantly pushing the boundaries of what's possible</li>
                  <li>Excellence: Delivering superior quality in everything we do</li>
                  <li>Integrity: Operating with honesty and transparency</li>
                  <li>Collaboration: Working together to achieve extraordinary results</li>
                  <li>Sustainability: Developing solutions that minimize environmental impact</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        </Accordion>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        custom={0}
        className="space-y-6"
      >
        <h3 className="text-2xl font-semibold text-gray-900">Timeline of Milestones</h3>
        
        <div className="relative">
          {/* Timeline track */}
          <div className="absolute left-0 right-0 h-1 top-6 bg-gray-200 rounded-full">
            <div className="absolute left-0 h-full bg-blt-orange rounded-full laser-glow" style={{ 
              width: activeTimelineItem !== null ? `${(activeTimelineItem + 1) * (100 / timelineItems.length)}%` : '0%',
              transition: 'width 0.5s ease-out'
            }} />
          </div>
          
          {/* Timeline items */}
          <div className="flex justify-between relative pt-6">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <button
                  onClick={() => setActiveTimelineItem(index)}
                  className={`w-4 h-4 rounded-full z-10 transition-all duration-300 ${
                    activeTimelineItem === index 
                      ? "bg-blt-orange laser-glow scale-125" 
                      : "bg-gray-400 hover:bg-blt-orange"
                  }`}
                  aria-label={`View milestone: ${item.title}`}
                />
                <span className="mt-2 font-bold text-sm">{item.year}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Active timeline item details */}
        <div className="mt-8">
          {activeTimelineItem !== null && (
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-blt-orange mb-2">
                  {timelineItems[activeTimelineItem].title}
                </h4>
                <p className="text-gray-700">
                  {timelineItems[activeTimelineItem].description}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default WhoSection 