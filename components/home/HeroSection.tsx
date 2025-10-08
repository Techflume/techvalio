"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { AnimatedDiv } from "../animated-div";
import { heroSlides } from "@/lib/data";



const HeroSectionDemo = () => {
  return (
    <section className="relative h-[80vh] w-full py-20 md:py-32 overflow-hidden">
      {/* Swiper Carousel Background */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.hero-swiper-button-next',
            prevEl: '.hero-swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.hero-swiper-pagination',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          allowTouchMove={true}
          touchRatio={1}
          grabCursor={true}
          className="w-full h-full"
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={slide.alt}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                {/* Slide Content */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 pointer-events-none">
                  <div className="w-full z-10 text-center max-w-3xl mx-auto">
                    <AnimatedDiv
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg mb-2">
                        {slide.headline} <br />
                        <span className="text-primary">{slide.highlight}</span>
                      </h1>
                    </AnimatedDiv>
                    <AnimatedDiv
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                      className="mt-6 text-lg text-white/90 drop-shadow-md"
                    >
                      <p>{slide.description}</p>
                    </AnimatedDiv>
                    <AnimatedDiv
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                      className="mt-8 flex flex-wrap justify-center gap-4 pointer-events-auto"
                    >
                      <Button
                        asChild
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Link href={slide.cta.href}>{slide.cta.label}</Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-white/30 hover:bg-white/10 hover:border-white/50 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Link href={slide.secondary.href}>{slide.secondary.label}</Link>
                      </Button>
                    </AnimatedDiv>
                    <AnimatedDiv
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                      className="mt-8 text-sm text-white/80 drop-shadow-md"
                    >
                      <p>{slide.features}</p>
                    </AnimatedDiv>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation Buttons */}
        <button
          className="hero-swiper-button-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 cursor-pointer"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="hero-swiper-button-next absolute top-1/2 right-4 z-10 -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 cursor-pointer"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* Pagination */}
        <div className="hero-swiper-pagination absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex space-x-2"></div>
      </div>
      {/* Custom CSS for pagination styling */}
      <style jsx>{`
        .hero-swiper-pagination .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .hero-swiper-pagination .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
        }
      `}</style>
    </section>
  );
};

export default HeroSectionDemo;
