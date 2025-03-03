"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  children: React.ReactNode[]
  className?: string
  visibleSlides?: number
}

export const Carousel = ({
  children,
  className,
  visibleSlides = 3,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(0)
  
  const totalSlides = React.Children.count(children)
  const maxIndex = Math.max(0, totalSlides - visibleSlides)

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex(prevIndex => Math.max(0, prevIndex - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex(prevIndex => Math.min(maxIndex, prevIndex + 1))
  }

  const slideVariants = {
    hiddenRight: { x: 100, opacity: 0 },
    hiddenLeft: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -100 : 100,
        opacity: 0,
        transition: { duration: 0.3 }
      }
    }
  }

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="rounded-full p-2 hover:bg-gray-200 text-gray-700 disabled:text-gray-300 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="rounded-full p-2 hover:bg-gray-200 text-gray-700 disabled:text-gray-300 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          custom={direction}
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
            width: `${(totalSlides / visibleSlides) * 100}%`,
          }}
          initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              style={{ width: `${100 / totalSlides}%` }}
              className="px-2"
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "w-2 h-2 mx-1 rounded-full transition-colors duration-300",
              currentIndex === index ? "bg-blt-orange" : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  )
} 