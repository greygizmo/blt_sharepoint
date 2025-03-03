"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useAssetPath } from "../../../lib/utils"

interface Office {
  name: string
  address: string[]
  phone: string
  email: string
  image: string
}

const offices: Office[] = [
  {
    name: "Global Headquarters",
    address: [
      "BLT Advanced Manufacturing",
      "123 Innovation Drive",
      "Munich, Germany 80331"
    ],
    phone: "+49 89 1234 5678",
    email: "info@blt-am.com",
    image: "/images/office-munich.jpg"
  },
  {
    name: "North America",
    address: [
      "BLT Advanced Manufacturing Inc.",
      "456 Tech Parkway",
      "Detroit, MI 48226, USA"
    ],
    phone: "+1 313 987 6543",
    email: "us-sales@blt-am.com",
    image: "/images/office-detroit.jpg"
  },
  {
    name: "Asia Pacific",
    address: [
      "BLT Advanced Manufacturing Ltd.",
      "789 Innovation Boulevard",
      "Singapore 018956"
    ],
    phone: "+65 6123 4567",
    email: "apac-sales@blt-am.com",
    image: "/images/office-singapore.jpg"
  }
]

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [selectedOffice, setSelectedOffice] = useState(0)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")
    
    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the form data to your backend
      console.log("Form submitted:", formData)
      setFormStatus("success")
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: ""
      })
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    }, 1500)
  }

  return (
    <div id="contact" className="space-y-16">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        custom={0}
        className="text-4xl font-bold mb-8 text-gray-900"
      >
        CONTACT <span className="text-blt-orange">US</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          custom={1}
          className="bg-white p-8 rounded-xl shadow-sm"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blt-orange focus:border-transparent"
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blt-orange focus:border-transparent"
                  aria-required="true"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blt-orange focus:border-transparent"
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blt-orange focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blt-orange focus:border-transparent"
                aria-required="true"
              >
                <option value="">Please select</option>
                <option value="Sales Inquiry">Sales Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Partnership Opportunity">Partnership Opportunity</option>
                <option value="Career Information">Career Information</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blt-orange focus:border-transparent"
                aria-required="true"
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full md:w-auto px-6 py-3 bg-blt-orange text-white font-medium rounded-md hover:bg-blt-orange-dark transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blt-orange disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </button>
              
              {formStatus === "success" && (
                <p className="mt-4 text-green-600">
                  Thank you for your message! We'll get back to you shortly.
                </p>
              )}
              
              {formStatus === "error" && (
                <p className="mt-4 text-red-600">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </div>
          </form>
        </motion.div>
        
        {/* Office Locations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          custom={2}
          className="space-y-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Offices</h3>
          
          {offices.map((office, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-full md:w-1/3 h-48 relative rounded-lg overflow-hidden">
                <Image 
                  src={getAssetPath(office.image)} 
                  alt={office.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <div className="w-full md:w-2/3">
                <h4 className="text-xl font-semibold text-blt-orange mb-3">{office.name}</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-3 mt-1 flex-shrink-0">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div>
                      {office.address.map((line, i) => (
                        <p key={i} className="text-gray-700">{line}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-3 flex-shrink-0">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <a href={`tel:${office.phone}`} className="text-gray-700 hover:text-blt-orange transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-3 flex-shrink-0">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <a href={`mailto:${office.email}`} className="text-gray-700 hover:text-blt-orange transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Map */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        custom={3}
        className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden relative"
      >
        {/* In a real application, you would integrate with Google Maps or another mapping service */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">Interactive map would be displayed here</p>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactSection 