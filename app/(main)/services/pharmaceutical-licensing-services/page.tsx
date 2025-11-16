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
    title: "Pharmaceutical Licensing Services - Techvalio",
    description:
      "Techvalio delivers pharmaceutical validation, regulatory compliance, QA documentation, and end-to-end GxP support.",
    keywords:
      "pharmaceutical validation, software validation, FDA compliance, GxP validation, pharma licensing",
  },

  hero: {
    title: "Pharmaceutical Licensing Services",
    // img: "/images/services/services1.jpg",
    img: "/images/services/banner/Pharmaceutical Licensing Services.png",
    alt: "Pharmaceutical Licensing",
  },

  intro:
    "Delivering end-to-end software verification to ensure reliability, data integrity, and regulatory compliance across all development phases.",

  features: [
    "End-to-end compliance with global standards (FDA, EMA, WHO)",
    "Audit-ready validation protocols",
    "Support for pharma, biotech, and innovations",
    "Automated documentation workflows",
  ],

  // NEW STRUCTURED SECTIONS
  sections: [
    {
      heading: "Why Choose Techvalio?",
      text: `Our team combines industry expertise with advanced validation technologies.
We create solutions that meet regulatory requirements and help your teams innovate confidently.`,
      img: "/images/banner/banner2.jpg",
    },
    {
      heading: "Our Approach: Agile, Scalable, Personalized",
      text: `From assessment to delivery and support, we tailor the validation lifecycle to minimize risk and ensure compliance.`,
      keyHeading: "Key Benefits:",
      keys: [
        "Reduced audit deviations & documentation errors",
        "Faster validation lifecycle with agile methodology",
        "Regulatory alignment with FDA, EMA & WHO",
      ],
    },
  ],

  fullWidthImage: "/images/services/licenses-full.jpg",

  offerings: [
    {
      title: "Regulatory Consulting",
      desc: "Expert guidance on dossiers, process mapping, and globally recognized compliance documentation.",
    },
    {
      title: "Validation & QA Services",
      desc: "Comprehensive risk analysis, protocol design, test execution, and ongoing system monitoring.",
    },
    {
      title: "End-to-End Support",
      desc: "From GxP workshops to long-term support—with continuous improvement at every step.",
    },
  ],

  process: [
    {
      title: "Discovery",
      desc: "We analyze your systems, workflows, and compliance needs.",
    },
    {
      title: "Gap Analysis",
      desc: "We identify missing validation and documentation requirements.",
    },
    {
      title: "Testing & Documentation",
      desc: "Hands-on verification, test execution, and audit-ready documentation.",
    },
    {
      title: "Launch & Support",
      desc: "Go live confidently with long-term compliance support.",
    },
  ],

 testimonial: [
  {
    quote:
      "“After switching to Techvalio’s pharmaceutical validation, our audit process became 2x faster and all documentation was instantly QC-ready.”",
    name: "Dr. Rachel Verma",
    role: "Regulatory Lead, PharmaNova",
    avatar: "/images/avatar-sample.png",
  },
  {
    quote:
      "“Techvalio completely streamlined our validation lifecycle. Every protocol, test script, and report was delivered with exceptional clarity and precision.”",
    name: "Dr. Meenakshi Rao",
    role: "QA Validation Manager, BioEdge Pharma",
    avatar: "/images/avatar-female.png",
  },
  {
    quote:
      "“Their GxP-driven validation approach helped us close long-pending CAPAs and pass regulatory inspection without a single observation.”",
    name: "Amit Khurana",
    role: "Quality Compliance Head, Zenith Lifesciences",
    avatar: "/images/avatar-male.png",
  },
  {
    quote:
      "“Techvalio’s documentation quality is outstanding. Audit trails, test evidence, and traceability matrices were perfectly aligned with regulatory expectations.”",
    name: "Dr. Shalini Mukherjee",
    role: "Regulatory Affairs Specialist, NovaCure Biotech",
    avatar: "/images/avatar-female.png",
  },
  {
    quote:
      "“Thanks to Techvalio’s validation support, our software system achieved full 21 CFR Part 11 readiness ahead of schedule. Truly impressive team.”",
    name: "Rohit Sinha",
    role: "IT Validation Lead, Medisphere Therapeutics",
    avatar: "/images/avatar-male.png",
  }
],


  faq: [
    {
      q: "How long does a typical validation project take?",
      a: "Most pharmaceutical validations take 6–12 weeks depending on system complexity.",
    },
    {
      q: "Do you provide post-validation maintenance?",
      a: "Yes, Techvalio offers periodic audits, documentation updates, and continuous compliance support.",
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
              transition={{ duration: 0.9, delay: i * 0.1 }}
            >
              <span className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary font-bold rounded-full 
              transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                {i + 1}
              </span>

              <span className="group-hover:text-primary transition-colors duration-300 font-medium">
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
              <p className="text-muted-foreground whitespace-pre-line">
                {sec.text}
              </p>
            )}

            {sec.keyHeading && (
              <h3 className="text-lg font-semibold mt-4">{sec.keyHeading}</h3>
            )}

            {sec.keys && (
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {sec.keys.map((k, i) => (
                  <li key={i}>{k}</li>
                ))}
              </ul>
            )}

            {/* {sec.img && (
              <div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image src={sec.img} alt={sec.heading} fill className="object-cover" />
              </div>
            )} */}
          </MotionDiv>
        ))}

        {/* FULL WIDTH IMAGE */}
        {/* {service.fullWidthImage && (
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full my-12"
          >
            <div className="relative w-full h-80 md:h-[520px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={service.fullWidthImage}
                alt="Full Width Section"
                fill
                className="object-cover"
              />
            </div>
          </MotionDiv>
        )} */}

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
              <p className="text-muted-foreground text-sm whitespace-pre-line">{o.desc}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Our Validation Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {service.process.map((step, i) => (
              <MotionDiv
                key={i}
                className="bg-white border rounded-xl px-6 py-8 text-center shadow-lg
                transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary 
                flex items-center justify-center font-bold mb-3">
                  {i + 1}
                </div>

                <h3 className="font-bold text-base mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
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
                <p className="mt-2 text-sm text-muted-foreground">
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
