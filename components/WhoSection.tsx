'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timelineData = [
  { year: "2011", event: "Company established in Xi'an." },
  { year: "2012", event: "Participated in national innovation projects, such as printing complex titanium components for China's C919 aircraft." },
  { year: "2017", event: "BLT's \"Metal Additive Manufacturing Intelligent Factory\" recognized as a national Intelligent Manufacturing Pilot Demonstration Project." },
  { year: "2018", event: "Signed a joint R&D agreement with Airbus for metal AM in aerospace." },
  { year: "2019", event: "Listed on China's STAR Market (stock code 688333.SH)." },
  { year: "2021", event: "Launched the BLT-S800 with 10 lasers—among the first multi-laser large-format PBF systems." },
  { year: "2023", event: "Introduced the BLT-S800 \"BRIGHT\" version with 20 lasers; rolled out the BLT-S1500 with 26 lasers." },
  { year: "2024", event: "Partnered with Materialise for software integration; continued global expansion." }
];

export default function WhoSection() {
  // Timeline state
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  
  // Scroll animation setup - target the entire section
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to horizontal movement
  const maxScrollDistance = -2000; // A fixed value that should be enough for most screen sizes
  const timelineX = useTransform(
    scrollYProgress, 
    [0.3, 0.6], // Start animation after scrolling 30% down, complete by 60%
    [0, maxScrollDistance] 
  );

  // Handle arrow key navigation in the timeline
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && activeTimelineItem < timelineData.length - 1) {
        setActiveTimelineItem(activeTimelineItem + 1);
      } else if (e.key === "ArrowLeft" && activeTimelineItem > 0) {
        setActiveTimelineItem(activeTimelineItem - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeTimelineItem]);

  // Scroll to active timeline item
  useEffect(() => {
    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      if (timelineItems[activeTimelineItem]) {
        timelineItems[activeTimelineItem].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeTimelineItem]);

  return (
    <section className="relative min-h-screen" id="who">
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 retro-grid opacity-10"></div>
      
     
      
      <div className="container mx-auto relative z-10">
        <div className="pt-20 pb-10 px-4 md:px-6">
          {/* Mission & Vision Subsection */}
          <div className="mb-16">
            <h3 className="subsection-title">Mission & Vision</h3>
            <div className="bg-black bg-opacity-80 p-6 rounded-lg border border-gray-800 mb-8">
              <p className="text-gray-300 mb-3">
                <span className="text-blt-orange font-bold">Mission:</span> "Make Easier Manufacturing, Make a Better World" (让制造更简单，世界更美好).
              </p>
              <p className="text-gray-300 mb-3">
                <span className="text-blt-orange font-bold">Vision:</span> "To Become the World's Leading AM Technologies Solutions Provider."
              </p>
              <p className="text-gray-300">
                <span className="text-blt-orange font-bold">Core Value:</span> "Achieve Customer Success, Create Value."
              </p>
            </div>
            
            <div className="space-y-6 text-gray-300">
              <p>
                BLT is strongly customer-centric, emphasizes R&D, and invests heavily in innovation. As a publicly listed firm, BLT files multiple new patents each year (600+ cumulative). Approximately 25% of BLT's 2500+ employees are in R&D (and roughly 40% hold post-graduate degrees).
              </p>
              
              <p>
                Management fosters a culture of "relentless improvement" to tackle hard problems like multi-laser alignment, large-format builds, new alloys, and support-free printing.
              </p>
              
              <p>
                BLT also highlights corporate responsibility and green manufacturing, noting that additive methods reduce material waste and enable lighter, more efficient parts.
              </p>
            </div>
          </div>
          
          {/* Buffer space between sections */}
          <div className="h-32"></div>
          
          {/* Timeline Subsection with Horizontal Interactive Timeline */}
          <div className="min-h-[70vh]" ref={timelineContainerRef}>
            <h3 className="subsection-title mb-12">Timeline of Milestones</h3>
            
            <div className="relative mb-16 overflow-hidden">
              <div className="timeline-track"></div>
              <motion.div 
                className="timeline-horizontal pb-12 flex w-max" 
                ref={timelineRef}
                style={{ x: timelineX }}
                drag="x"
                dragConstraints={timelineContainerRef}
              >
                {timelineData.map((item, i) => (
                  <div 
                    key={i} 
                    className={`timeline-item flex-shrink-0 w-80 mx-4 ${activeTimelineItem === i ? 'scale-105' : ''}`}
                    onClick={() => setActiveTimelineItem(i)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setActiveTimelineItem(i);
                      }
                    }}
                    tabIndex={0}
                    aria-label={`Timeline event for year ${item.year}: ${item.event}`}
                  >
                    <div className="timeline-point"></div>
                    <div className="timeline-year">{item.year}</div>
                    <div className={`bg-black bg-opacity-80 p-4 rounded-lg border ${activeTimelineItem === i ? 'border-blt-orange' : 'border-gray-800'} transition-colors duration-300`}>
                      <p className="text-gray-300">{item.event}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Timeline navigation controls */}
            <div className="flex justify-center space-x-4 mt-6">
              <button 
                className="px-4 py-2 rounded-md bg-black border border-gray-800 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setActiveTimelineItem(activeTimelineItem - 1)}
                disabled={activeTimelineItem === 0}
                aria-label="View previous timeline event"
              >
                Previous
              </button>
              <button 
                className="px-4 py-2 rounded-md bg-black border border-gray-800 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setActiveTimelineItem(activeTimelineItem + 1)}
                disabled={activeTimelineItem === timelineData.length - 1}
                aria-label="View next timeline event"
              >
                Next
              </button>
            </div>
            
            {/* Spacer to allow vertical scrolling to continue after timeline animation */}
            <div className="h-[40vh]"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 