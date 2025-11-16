"use client";

import Image from "next/image";
import { MotionDiv } from "@/components/common/MotionDiv";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="pb-20"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            {/* CARD — NO HOVER ANIMATION */}
            <div className="bg-card rounded-2xl shadow-xl p-10 text-center border mx-4">
              
              {/* ONLY TEXT ANIMATION */}
              <MotionDiv
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg font-semibold text-primary mb-6 leading-relaxed">
                  {t.quote}
                </p>
              </MotionDiv>

              {/* <Image
                src={t.avatar}
                alt={t.name}
                width={70}
                height={70}
                className="rounded-full mx-auto mb-3 border border-primary/20"
              /> */}

              <MotionDiv
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </MotionDiv>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* DOTS BELOW CARD */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: -5px !important;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #9ca3af !important;
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
