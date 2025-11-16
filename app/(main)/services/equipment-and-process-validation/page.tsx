import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MotionDiv, MotionP, MotionH1 } from "@/components/common/MotionDiv";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Link from "next/link";

// ------------------------
// Page Data (SERVER SIDE)
// ------------------------
const service = {
  seo: {
    title: "Equipment Qualification - Techvalio",
    description:
      "Techvalio provides end-to-end Equipment & Process Validation services including IQ/OQ/PQ, FAT, SAT, documentation, and regulatory compliance support.",
    keywords:
      "Equipment Qualification, Process Validation, IQ OQ PQ, FAT, SAT, Pharma Equipment Validation, Techvalio",
  },

  hero: {
    title: "Equipment Qualification",
    img: "/images/services/banner/equipment-and-process-validation.png",
    alt: "Equipment Qualification",
  },

  intro:
    "Equipment Qualification is a systematic and documented process of ensuring that any GxP-regulated equipment is installed, operates, and performs according to the approved User Requirements Specification (URS) while producing consistent, reliable, and compliant results.",

  features: [
    "USFDA, EMA, WHO, TGA And CDSCO",
    "Detailed Protocol for Qualification with Execution",
    "Support for pharmaceutical, biotech, and emerging innovations",
    "Detailed Workflow with All Test Reports FAT, SAT and DQ",
  ],

  // NEW SECTION STRUCTURE (Same as CSV)
  sections: [
    {
      heading: "What is Equipment Qualification?",
      text: `Equipment Qualification verifies that any GxP equipment is installed, operates, and performs according to approved requirements. 
It involves assessing design components, reviewing specifications, and validating performance under real operating conditions. 
This includes Design Specification review, Factory Acceptance Testing (FAT), and Site Acceptance Testing (SAT).`,
      img: "/images/services/eq-what.jpg",
    },
    {
      heading: "Importance of Equipment & Process Validation",
      text: `Industries like pharmaceuticals, biotechnology, healthcare, and medical devices require Equipment Qualification to ensure consistency, reliability, and quality.`,
      keyHeading: "Why it matters:",
      keys: [
        "Regulatory Compliance – Meets FDA, EMA, WHO, and international validation standards.",
        "Risk Mitigation – Prevents system failures and quality deviations.",
        "Quality Assurance – Ensures accurate and consistent product output.",
      ],
    },
  ],

  // Full width image at bottom of section
  fullWidthImage: "/images/services/diagrame3.png",

  offerings: [
    {
      title: "Validation Protocol Development",
      desc: "We prepare tailored protocols that define scope, strategy, acceptance criteria, and testing methodologies.",
    },
    {
      title: "Execution of IQ / OQ / PQ",
      desc: `We perform the complete qualification lifecycle:
• Installation Qualification (IQ)  
• Operational Qualification (OQ)  
• Performance Qualification (PQ)`,
    },
    {
      title: "Factory & Site Acceptance Testing",
      desc: "We conduct FAT to verify equipment before shipment and SAT to confirm proper functioning after installation.",
    },
    {
      title: "Comprehensive Documentation",
      desc: "We prepare traceable, audit-ready documentation including protocols, reports, findings, and corrective actions.",
    },
    {
      title: "Training & Support",
      desc: "We train your team on equipment usage, maintenance, compliance, and troubleshooting.",
    },
  ],

  process: [
    {
      title: "Validation Master Plan (VMP)",
      desc: "We help create a comprehensive VMP outlining validation strategy, roles, and methodologies.",
    },
    {
      title: "Design Qualification (DQ)",
      desc: "We verify that equipment design meets user requirements and regulatory standards.",
    },
    {
      title: "Installation Qualification (IQ)",
      desc: "Ensures equipment is installed according to manufacturer specifications and requirements.",
    },
    {
      title: "Operational Qualification (OQ)",
      desc: "Validates that equipment functions correctly under defined operating conditions.",
    },
    {
      title: "Performance Qualification (PQ)",
      desc: "Confirms that equipment consistently performs under real production conditions.",
    },
    {
      title: "FAT & SAT",
      desc: "Factory Acceptance Testing before shipment and Site Acceptance Testing after installation.",
    },
    {
      title: "Documentation & Reporting",
      desc: "Complete audit-ready validation documentation, test results, and traceability.",
    },
    {
      title: "Training & Ongoing Support",
      desc: "Ensuring long-term compliance, knowledge transfer, and troubleshooting support.",
    },
  ],

testimonial: [
  {
    quote:
      "“Techvalio’s qualification services helped our facility achieve compliance effortlessly. IQ, OQ, and PQ were executed with exceptional professionalism.”",
    name: "Rajesh Mehta",
    role: "Manufacturing Head, BioPharm Ltd.",
    avatar: "/images/avatar-male.png",
  },
  {
    quote:
      "“Their end-to-end IQ, OQ, and PQ execution was flawless. All documentation was audit-ready and aligned with global regulatory expectations.”",
    name: "Dr. Neha Bhandari",
    role: "Quality Assurance Lead, Genova Biotech",
    avatar: "/images/avatar-female.png",
  },
  {
    quote:
      "“Techvalio’s FAT and SAT support saved us weeks of downtime. Their team identified issues early and ensured the equipment was fully compliant before go-live.”",
    name: "Vikram Shah",
    role: "Engineering Manager, PharmaCore Industries",
    avatar: "/images/avatar-male.png",
  },
  {
    quote:
      "“The validation protocols, traceability, and structured execution were beyond impressive. Our inspectors specifically appreciated their documentation style.”",
    name: "Ritu Agarwal",
    role: "Regulatory Affairs Manager, MedAxis Healthcare",
    avatar: "/images/avatar-female.png",
  },
  {
    quote:
      "“From DQ to PQ, Techvalio provided exceptional clarity and technical expertise. Their team made the entire qualification lifecycle smooth and fully compliant.”",
    name: "Karan Patel",
    role: "Operations Head, Lifecare Biosolutions",
    avatar: "/images/avatar-male.png",
  }
],

  faq: [
    {
      q: "What is the sequence flow for Equipment Qualification?",
      a: `The standard flow is:
1. User Requirement Specification (URS)  
2. Design Qualification (DQ)  
3. Factory Acceptance Test (FAT)  
4. Installation Qualification (IQ)  
5. Operational Qualification (OQ)  
6. Performance Qualification (PQ)  
7. Documentation & Release`,
    },
    {
      q: "What standards does Equipment Qualification follow?",
      a: "We follow FDA 21 CFR Part 11, EU Annex 11, WHO, GAMP5, and other global guidelines.",
    },
    {
      q: "Do you provide process validation along with equipment qualification?",
      a: "Yes, we offer complete process validation including DQ, PPQ, and ongoing revalidation.",
    },
  ],
};

export const metadata = {
  title: service.seo.title,
  description: service.seo.description,
  keywords: service.seo.keywords,
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HERO */}
      <section className="relative flex items-center justify-center h-[320px] md:h-[400px] overflow-hidden">
        <Image src={service.hero.img} alt={service.hero.alt} fill className="object-cover" />

        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          <MotionH1
            className="text-3xl md:text-5xl text-white font-bold text-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            {service.hero.title}
          </MotionH1>
        </MotionDiv>
      </section>

      {/* INTRO */}
      <section className="container mx-auto py-16 px-4">
        <MotionP
          className="text-center max-w-2xl mx-auto text-lg text-muted-foreground mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {service.intro}
        </MotionP>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.features.map((feature, i) => (
            <MotionDiv
              key={i}
              className="group bg-card border rounded-xl p-6 shadow-md flex items-start gap-4 
              transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
            >
              <span
                className="h-12 w-12 flex items-center justify-center 
                bg-primary/10 text-primary font-bold rounded-full 
                transition-all duration-300 group-hover:bg-primary group-hover:text-white"
              >
                {i + 1}
              </span>

              <span className="transition-colors duration-300 group-hover:text-primary font-medium">
                {feature}
              </span>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* MAIN SECTIONS */}
      <section className="container mx-auto px-4 pb-20">

        {service.sections.map((sec, index) => (
          <MotionDiv
            key={sec.heading}
            className="flex flex-col gap-6 md:gap-10 mb-16"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-primary">
              {sec.heading}
            </h2>

            {sec.text && (
              <p className="text-muted-foreground whitespace-pre-line">{sec.text}</p>
            )}

            {sec.keyHeading && (
              <h3 className="text-lg font-semibold mt-4">{sec.keyHeading}</h3>
            )}

            {sec.keys && (
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {sec.keys.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {/* {sec.img && (
              <div className="relative w-full h-80 md:h-[380px] rounded-xl overflow-hidden shadow-lg">
                <Image src={sec.img} alt={sec.heading} fill className="object-cover" />
              </div>
            )} */}
          </MotionDiv>
        ))}

        {/* FULL WIDTH IMAGE */}
        {service.fullWidthImage && (
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full my-12"
          >
            <div className="relative w-full h-[260px]  rounded-xl overflow-hidden shadow-lg">
              <Image
                src={service.fullWidthImage}
                alt="Section Banner"
                fill
                className="object-fit"
              />
            </div>
          </MotionDiv>
        )}


        <div className="flex justify-center cursor-pointer mt-10">
                    <Link href="/#contact">
                        <Button
                            size="lg"
                            className="px-8 py-3 text-lg font-semibold cursor-pointer"
                        >
                            Request Consultation
                        </Button>
                    </Link>
                </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-6">
          What We Offer
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {service.offerings.map((o, i) => (
            <MotionDiv
              key={i}
              className="bg-card border rounded-xl p-6 shadow-md 
              transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
            >
              <h3 className="font-bold text-lg text-primary mb-2">{o.title}</h3>
              <p className="text-muted-foreground text-sm whitespace-pre-line">
                {o.desc}
              </p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* VALIDATION PROCESS */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Our Validation Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {service.process.map((step, i) => (
              <MotionDiv
                key={i}
                className="bg-white shadow-lg rounded-xl px-6 py-8 text-center border
                transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1 hover:shadow-lg"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.12 }}
              >
                <div
                  className="w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary 
                  flex items-center justify-center font-bold mb-3 transition-all duration-300"
                >
                  {i + 1}
                </div>

                <h3 className="font-bold text-base mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-xs">{step.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="container mx-auto py-16 px-4">
       <TestimonialCarousel testimonials={service.testimonial} />
      </section>

      {/* FAQ */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
          FAQs
        </h2>

        <div className="space-y-4">
          {service.faq.map((item, i) => (
            <details
              key={i}
              className="border rounded-lg px-6 py-4 bg-card transition-all"
            >
              <summary className="font-semibold cursor-pointer">
                {item.q}
              </summary>

              <MotionDiv
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="mt-2 text-sm text-muted-foreground whitespace-pre-line">
                  {item.a}
                </p>
              </MotionDiv>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-primary py-10 text-center">
        <Link href="/#contact">
          <Button
            size="lg"
            variant="secondary"
            className="
        text-lg font-semibold rounded-full px-8
        shadow-lg 
        transition-all duration-300 
        hover:shadow-xl hover:scale-[1.03] 
        active:scale-[0.98] cursor-pointer
      "
          >
            Book a Free Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
}
