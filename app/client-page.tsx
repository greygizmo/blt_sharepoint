"use client";

import { Suspense } from 'react';
import SectionNavigation from '../components/SectionNavigation';
import WhoSection from '../components/WhoSection';
import WhatSection from '../components/sections/WhatSection';
import ClientImage from '../components/ClientImage';
import ClientDebug from '../components/ClientDebug';
import { useClientAssetPath } from '../hooks/useClientAssetPath';

export default function ClientHome() {
  // Adjustable opacity for the engine component image (0-1)
  const engineComponentOpacity = 0.8;
  const getAssetPath = useClientAssetPath();
  
  return (
    <main className="flex flex-col items-center overflow-x-hidden bg-black text-white">
      <SectionNavigation />
      
      {/* Add the debug component */}
      <ClientDebug />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 retro-grid opacity-20"></div>
        
        {/* BLT Logo */}
        <div className="fixed top-4 left-4 z-50 p-2">
          <ClientImage 
            src="/images/blt-logo-white.png"
            alt="BLT Logo" 
            width={101}
            height={41}
            className="w-[80px] h-auto object-contain" 
            priority
          />
        </div>
        
        {/* Engine Integration Component Image */}
        <div className="absolute inset-0 flex items-center justify-center z-[5] overflow-hidden">
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ 
              opacity: engineComponentOpacity,
              transform: 'scale(0.8) translateX(15%)',
              position: 'absolute',
              right: '-5%'
            }}
          >
            <ClientImage 
              src="/images/Engine Integration Component.png"
              alt="Engine Integration Component" 
              width={1200}
              height={800}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        <div className="relative z-10 text-left max-w-4xl" style={{ marginLeft: '-20%' }}>
          <h1 
            className="text-white mb-6 leading-tight tracking-tighter"
            style={{ 
              fontSize: '72px',
              fontFamily: "'Winston-BlackItalic', serif",
              textShadow: '0 0 5px #EA5504, 0 0 10px #EA5504, 0 0 20px #EA5504'
            }}
          >
            <span style={{ display: 'block' }}>BRIGHT LASER</span>
            <span style={{ display: 'block' }}>TECHNOLOGIES</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-16">
            A new partner and new era of metal additive manufacturing for GoEngineer and North America.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#" className="btn-primary hover:text-black transition-colors">
              SALES PLAYBOOK
            </a>
            <a href="#" className="btn-primary hover:text-black transition-colors">
              TECHNICAL PLAYBOOK
            </a>
            <a href="#" className="btn-primary hover:text-black transition-colors">
              FAQ
            </a>
            <a href="#" className="btn-primary hover:text-black transition-colors">
              WORDS TO KNOW
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>
      
      {/* WHO Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <section id="who" className="mb-24 scroll-mt-24">
          <WhoSection />
        </section>
      </Suspense>
      
      {/* WHAT Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <section id="what" className="mb-24 scroll-mt-24">
          <WhatSection />
        </section>
      </Suspense>
      
      {/* WHY Section - Placeholder */}
      <section className="relative min-h-screen w-full" id="why">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 retro-grid opacity-30"></div>
        
        <div className="container mx-auto relative z-10 pt-20 pb-10 px-4 md:px-6">
          <h3 className="font-winston subsection-title">
            Why Choose BLT
          </h3>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </section>
      
      {/* HOW Section - Placeholder */}
      <section className="relative min-h-screen w-full" id="how">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 retro-grid opacity-30"></div>
        
        <div className="container mx-auto relative z-10 pt-20 pb-10 px-4 md:px-6">
          <h3 className="font-winston subsection-title">
            How It Works
          </h3>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </section>
      
      {/* CLOSING NOTE Section */}
      <section className="relative min-h-screen w-full" id="closing">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 retro-grid opacity-30"></div>
        
        <div className="container mx-auto relative z-10 pt-20 pb-10 px-4 md:px-6">
          <h2 
            style={{ 
              fontFamily: "'Winston-BlackItalic', serif",
              textShadow: '0 0 5px #EA5504, 0 0 10px #EA5504, 0 0 20px #EA5504',
              fontSize: '2.25rem', // text-4xl base size
              color: 'white',
              textAlign: 'center',
              marginBottom: '1.5rem'
            }}
          >
            PARTNER WITH US
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12">
            We're confident BLT offers value to many of our existing customers, and we can only reach them with your help!
          </p>
          
          <div className="text-center">
            <a href="#" className="btn-primary">
              CONTACT US
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 