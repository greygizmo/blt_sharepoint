"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Define sections with their IDs and titles
const sections = [
  { id: "hero", title: "" },
  { id: "who", title: "WHO" },
  { id: "what", title: "WHAT" },
  { id: "why", title: "WHY" },
  { id: "how", title: "HOW" },
  { id: "contact", title: "CONTACT" }
];

export default function SectionNavigation() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  
  // Find current section data
  const currentSection = sections.find(section => section.id === activeSection) || sections[0];
  
  useEffect(() => {
    // Create an Intersection Observer to detect when sections are in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Adjust threshold to control how much of the section needs to be visible
        threshold: 0.3,
        // Add rootMargin to trigger the change slightly before/after the section is in view
        rootMargin: "-10% 0px -10% 0px"
      }
    );
    
    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });
    
    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);
  
  return (
    <div className="fixed left-8 top-0 h-screen flex items-center z-20 pointer-events-none">
      <motion.h2
        key={activeSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="font-black text-6xl transform -rotate-90 whitespace-nowrap text-white"
      >
        {currentSection.title}
      </motion.h2>
    </div>
  );
} 