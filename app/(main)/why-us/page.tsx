import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ThumbsUp,
  Sparkles,
  ShieldCheck,
  LineChart,
  Users,
  Timer,
} from "lucide-react";

// import { 
//   MotionDiv, 
//   MotionH1, 
//   MotionH2 
// } from "@/components/common/MotionWrapper";

import TestimonialCarousel from "@/components/TestimonialCarousel";
import { MotionDiv,MotionH1, MotionH2  } from "@/components/common/MotionDiv";

// ⭐⭐⭐⭐⭐ TESTIMONIAL ARRAY (FINAL)
const testimonials = [
  {
    quote:
      "“Techvalio transformed our software development lifecycle with complete GxP validation and exceptional documentation quality.”",
    name: "Priya Sharma",
    role: "Quality Compliance Manager",
    avatar: "/images/avatar-female.png",
  },
  {
    quote:
      "“Their expertise in Annex 11 and Part 11 compliance helped us streamline our entire computerized system validation process with zero audit remarks.”",
    name: "Dr. Kavita Deshmukh",
    role: "Head of Digital Compliance, Lifecore Pharma",
    avatar: "/images/avatar-female.png",
  },
  {
    quote:
      "“Techvalio’s team ensured full traceability from SRS to PQ. Our validation documents improved drastically in clarity, structure, and regulatory alignment.”",
    name: "Harshit Nair",
    role: "Software QA Lead, BioQuest Technologies",
    avatar: "/images/avatar-male.png",
  },
  {
    quote:
      "“Their validation approach made our agile development cycle fully GxP compliant. Every sprint now produces audit-ready evidence.”",
    name: "Dr. Sneha Iyer",
    role: "Agile Compliance Coordinator, MediSoft Labs",
    avatar: "/images/avatar-female.png",
  },
  {
    quote:
      "“Thanks to Techvalio, our system achieved complete 21 CFR Part 11 readiness with minimal rework. Their guidance on audit trails & e-records was exceptional.”",
    name: "Arjun Mehra",
    role: "IT Systems Validation Manager, Genex Pharma",
    avatar: "/images/avatar-male.png",
  },
];

// 🌟 Differentiators
const features = [
  {
    icon: <ShieldCheck className="text-primary" size={32} />,
    title: "Audit-Ready Compliance",
    desc: "We deliver solutions always ready for regulatory audit—pharma, medtech, lab, and more.",
  },
  {
    icon: <Sparkles className="text-primary" size={32} />,
    title: "Result-Driven Validation",
    desc: "World-class expertise meets smart automation for rapid, robust validation cycles.",
  },
  {
    icon: <LineChart className="text-primary" size={32} />,
    title: "Guaranteed ROI",
    desc: "Reduce risk, accelerate time-to-market, and cut compliance costs with our unique approach.",
  },
  {
    icon: <ThumbsUp className="text-primary" size={32} />,
    title: "Proven Trust",
    desc: "Clients across 4 continents. Start-ups to enterprise rely on Techvalio as their validation partner.",
  },
];

// ⭐ Score Stats
const stats = [
  { label: "Successful Validation Projects", value: "300+" },
  { label: "Satisfied Clients", value: "120+" },
  { label: "Compliance Success Rate", value: "100%" },
  { label: "Years of Domain Experience", value: "12+" },
];

export default function WhyUsPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">

      {/* ⭐ HERO SECTION */}
      <section className="relative w-full h-[300px] md:h-[340px] flex items-center justify-center bg-primary/80">
        <Image
          src="/images/why-us.jpg"
          alt="Why Techvalio"
          fill
          className="object-cover z-0"
          style={{ opacity: 0.72 }}
        />

        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <MotionDiv
          className="relative z-10 text-center gap-6"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-white font-bold text-4xl md:text-5xl tracking-tight mb-8">
            Why Choose Techvalio?
          </h1>

          <div className="text-gray-200 text-md max-w-xl mx-auto font-medium">
            The difference between compliant and confident. <br />
            The Techvalio edge for regulated industries and innovators.
          </div>
        </MotionDiv>
      </section>

      {/* ⭐ DIFFERENTIATORS */}
      <section className="container mx-auto px-4 py-16">
        <MotionH2
          className="font-headline text-2xl md:text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Sets Us Apart
        </MotionH2>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <MotionDiv
              key={f.title}
              className="bg-white rounded-xl shadow-md border p-7 flex flex-col items-center text-center gap-3 hover:shadow-xl transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <div className="mb-3">{f.icon}</div>
              <div className="font-bold text-lg mb-2 text-primary">{f.title}</div>
              <div className="text-muted-foreground text-sm">{f.desc}</div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* ⭐ SCORE CARDS */}
      <section className="container mx-auto px-4 pt-0 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <MotionDiv
              key={stat.label}
              className="flex flex-col items-center bg-background rounded-xl border shadow p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: idx * 0.09 }}
            >
              <div className="text-2xl font-headline font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground text-center">
                {stat.label}
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* ⭐ APPROACH */}
      <section className="container mx-auto px-4 py-18 md:py-24">
        <MotionH2
          className="font-headline text-2xl md:text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Proven Approach
        </MotionH2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-evenly">
          {[
            {
              icon: <Users size={32} className="text-primary" />,
              label: "Discovery & Collaboration",
              step: "01",
              desc: "We listen, learn, and blueprint your unique validation needs.",
            },
            {
              icon: <Timer size={32} className="text-primary" />,
              label: "Smart Agile Validation",
              step: "02",
              desc: "Rapid sprints, full documentation, and continuous compliance.",
            },
            {
              icon: <ShieldCheck size={32} className="text-primary" />,
              label: "Launch & Onward Support",
              step: "03",
              desc: "Audit, train, and optimize—so you can scale with peace of mind.",
            },
          ].map((a, idx) => (
            <MotionDiv
              key={a.label}
              className="flex-1 flex flex-col items-center md:px-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <div className="bg-primary/10 rounded-full flex items-center justify-center w-16 h-16 mb-4">
                {a.icon}
              </div>
              <div className="font-bold text-lg mb-1 text-primary">{a.label}</div>
              <div className="mb-2 text-xs font-mono text-muted-foreground">
                {a.step}
              </div>
              <div className="text-muted-foreground text-sm text-center">
                {a.desc}
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* ⭐ TESTIMONIALS */}
      <section className="container mx-auto py-16 px-4">
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* ⭐ CTA */}
      <div className="bg-primary py-10 text-center">
        <Link href="/#contact">
          <Button
            size="lg"
            variant="secondary"
            className="
              text-lg font-semibold rounded-full px-8
              shadow-lg transition-all duration-300 
              hover:shadow-xl hover:scale-[1.03] 
              active:scale-[0.98]
            "
          >
            Book a Free Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
}
