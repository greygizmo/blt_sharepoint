"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface FooterLink {
  label: string
  href: string
}

interface SocialLink {
  platform: string
  href: string
  icon: string
}

const companyLinks: FooterLink[] = [
  { label: "About Us", href: "#who" },
  { label: "Our Products", href: "#what" },
  { label: "Why Choose Us", href: "#why" },
  { label: "How We Work", href: "#how" },
  { label: "Careers", href: "/careers" },
  { label: "News & Events", href: "/news" }
]

const resourceLinks: FooterLink[] = [
  { label: "Documentation", href: "/docs" },
  { label: "Knowledge Base", href: "/knowledge-base" },
  { label: "Case Studies", href: "#why" },
  { label: "Blog", href: "/blog" },
  { label: "Videos", href: "/videos" },
  { label: "Webinars", href: "/webinars" }
]

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Sitemap", href: "/sitemap" }
]

const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", href: "https://linkedin.com/company/blt-am", icon: "/icons/linkedin.svg" },
  { platform: "Twitter", href: "https://twitter.com/blt_am", icon: "/icons/twitter.svg" },
  { platform: "YouTube", href: "https://youtube.com/c/bltam", icon: "/icons/youtube.svg" },
  { platform: "Instagram", href: "https://instagram.com/blt_am", icon: "/icons/instagram.svg" }
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image 
                src="/images/blt-logo-white.png" 
                alt="BLT Advanced Manufacturing" 
                width={180} 
                height={60}
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              BLT Advanced Manufacturing is a leading provider of metal 3D printing solutions, 
              delivering cutting-edge technology to transform manufacturing across industries.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blt-orange transition-colors"
                  aria-label={`Follow us on ${link.platform}`}
                  tabIndex={0}
                >
                  <div className="w-5 h-5 relative">
                    <Image 
                      src={link.icon} 
                      alt={link.platform} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-blt-orange transition-colors"
                    tabIndex={0}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-blt-orange transition-colors"
                    tabIndex={0}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-3 mt-1 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>123 Innovation Drive<br />Munich, Germany 80331</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-3 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+4989123456789" className="hover:text-blt-orange transition-colors">
                  +49 89 1234 5678
                </a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-3 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@blt-am.com" className="hover:text-blt-orange transition-colors">
                  info@blt-am.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} BLT Advanced Manufacturing. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  className="text-gray-500 text-sm hover:text-blt-orange transition-colors"
                  tabIndex={0}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 