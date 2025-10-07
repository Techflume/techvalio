"use client";
import Image from 'next/image';
import React from 'react'

export default function CompanyLogosSection() {
  // Generate array of brand logos from logo1.png to logo13.png
  const brandLogos = Array.from({ length: 14 }, (_, index) => ({
    src: `/images/brands/logo${index + 1}.png`,
    alt: `Brand Logo ${index + 1}`,
    id: `brand-logo-${index + 1}`
  }));

  // Duplicate the logos array for seamless infinite scroll
  const allLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="py-12 bg-white flex justify-center">
      <div className="container">
        <h3 className="text-center text-sm font-semibold text-muted-foreground mb-8">
          TRUSTED BY TOP BRANDS
        </h3>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee">
            {allLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 mx-6 flex items-center justify-center"
                style={{ width: "160px", minWidth: "160px" }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={158}
                  height={48}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 max-w-full"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>

      {/* Custom CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
