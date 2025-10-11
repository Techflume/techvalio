"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Dummy data (replace with actual service data/fetch)
const service = {
  title: "Pharmaceutical Licensing Services",
  heroImage: "/images/services/services1.jpg",
  heroAlt: "Pharmaceutical Licensing",
  intro:
    "Delivering end-to-end software verification to ensure reliability, data integrity, and regulatory compliance across all development phases.",
  features: [
    "End-to-end compliance with all global standards (FDA, EMA, WHO)",
    "Data integrity and audit-ready validation protocols",
    "Support for pharmaceutical, biotech, and emerging innovations",
    "Automated reporting & documentation workflows",
  ],
  content: [
    {
      heading: "Why Choose Techvalio?",
      text: `
      Our team combines industry expertise with advanced validation technologies. We create solutions that not only meet regulatory requirements, but also empower your teams to innovate with confidence.
      `,
      img: "/images/banner/banner2.jpg",
      imgAlt: "Why Choose Techvalio",
    },
    {
      heading: "Our Approach: Agile, Scalable, Personalized",
      text: `
      From initial assessment to project delivery and ongoing support, we tailor our process to your business needs, minimizing risk and ensuring every system is compliant, resilient, and future-ready.
      `,
    },
  ],
};

export default function ServiceDetailsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero/Banner Section */}
      <section className="relative flex items-center justify-center h-[320px] md:h-[400px] overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.heroAlt}
          fill
          className="object-cover"
          priority
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center z-10"
        >
          <motion.h1
            className="font-headline text-3xl md:text-5xl text-white font-bold drop-shadow-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {service.title}
          </motion.h1>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto py-10 md:py-16 px-4">
        <motion.p
          className="max-w-2xl mx-auto text-center text-lg text-muted-foreground mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {service.intro}
        </motion.p>

        {/* Features cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 my-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13 } },
          }}
        >
          {service.features.map((feature, i) => (
            <motion.div
              key={feature}
              className="bg-card border rounded-xl p-6 shadow-md flex items-center gap-4 text-base"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span className="inline-block bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg mr-2">
                {i + 1}
              </span>
              <span>{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <section className="container mx-auto pb-12 md:pb-20 px-4">
        {service.content.map((section, idx) => (
          <motion.div
            className={`flex flex-col md:flex-row items-center mb-12 gap-8 md:gap-16 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            key={section.heading}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
          >
            {/* Side image if available */}
            {section.img && (
              <div className="relative h-44 w-full md:w-80 rounded-lg overflow-hidden flex-shrink-0 shadow-lg">
                <Image
                  src={section.img}
                  alt={section.imgAlt || section.heading}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 320px, 100vw"
                />
              </div>
            )}
            <div>
              <h2 className="font-headline text-xl md:text-2xl font-semibold mb-2 text-primary">
                {section.heading}
              </h2>
              <p className="text-base text-muted-foreground">{section.text}</p>
            </div>
          </motion.div>
        ))}
        <div className="flex justify-center mt-12">
          <Button size="lg" className="px-8 py-3 text-lg font-semibold shadow-xl">
            Request Consultation
          </Button>
        </div>
      </section>

       <section className="container mx-auto py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-4">
            What We Offer
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Replace with your own data */}
            <div className="bg-card border rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-lg text-primary mb-2">Regulatory Consulting</h3>
              <p className="text-muted-foreground text-sm">
                Expert guidance on submitting dossiers, process mapping, and globally recognized compliance documentation.
              </p>
            </div>
            <div className="bg-card border rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-lg text-primary mb-2">Validation & QA Services</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive risk analysis, protocol design, test execution, and ongoing system monitoring.
              </p>
            </div>
            <div className="bg-card border rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-lg text-primary mb-2">End-to-End Support</h3>
              <p className="text-muted-foreground text-sm">
                From initial GxP workshop to long-term maintenance—we’re with you at every step for continuous improvement.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: Process Overview */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-headline text-2xl md:text-3xl font-semibold text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Our Validation Process
          </motion.h2>
          <div className="flex flex-col md:flex-row md:justify-center md:gap-8 gap-6">
            {/* Each step animated */}
            {["Discovery", "Gap Analysis", "Testing & Documentation", "Launch & Support"].map((step, idx) => (
              <motion.div
                key={step}
                className="bg-white shadow-lg rounded-xl px-6 py-8 text-center border transition-all"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg font-bold mb-3">{idx + 1}</div>
                <h3 className="font-bold text-base mb-2">{step}</h3>
                <p className="text-muted-foreground text-xs">
                  {/* A short description per step goes here */}
                  {step === "Discovery" && "We learn your needs, systems, and compliance profile."}
                  {step === "Gap Analysis" && "We identify what’s missing for full validation and compliant operation."}
                  {step === "Testing & Documentation" && "Hands-on verification, robust documentation & digital records."}
                  {step === "Launch & Support" && "Go live safely, then scale with confidence and continuous support."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section 3: Testimonial or Case Study */}
      <section className="container mx-auto py-16 px-4 flex flex-col items-center">
        <motion.div
          className="max-w-2xl mx-auto bg-card rounded-xl shadow-lg p-8 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg font-semibold text-primary leading-snug mb-4">
            “After switching to Techvalio’s pharmaceutical validation, our audit process became 2x faster and all documentation was instantly QC-ready.”
          </p>
          <div className="flex flex-col items-center">
            <Image
              src="/images/avatar-sample.png"
              alt="Client"
              width={56}
              height={56}
              className="rounded-full mb-2"
            />
            <div className="text-sm font-bold">Dr. Rachel Verma</div>
            <div className="text-xs text-muted-foreground">Regulatory Lead, PharmaNova</div>
          </div>
        </motion.div>
      </section>

      {/* Section 4: FAQ */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="font-headline text-2xl md:text-3xl mb-6 font-semibold text-primary">FAQs</h2>
        <div className="space-y-4">
          {/* FAQ Example: Swap with your own questions */}
          <motion.details
            className="border rounded-lg px-6 py-4 bg-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <summary className="font-semibold cursor-pointer">How long does a typical validation project take?</summary>
            <p className="mt-2 text-sm text-muted-foreground">Project timelines vary, but most pharmaceutical validations are completed within 6-12 weeks, depending on complexity.</p>
          </motion.details>
          <motion.details
            className="border rounded-lg px-6 py-4 bg-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <summary className="font-semibold cursor-pointer">Do you support post-validation maintenance?</summary>
            <p className="mt-2 text-sm text-muted-foreground">Yes! We provide documentation updates, periodic audits, and compliance coaching as your systems and regulations evolve.</p>
          </motion.details>
          {/* Add more FAQ items as needed */}
        </div>
      </section>

      {/* Call to action */}
      <div className="bg-primary py-10 text-center">
        <Button size="lg" variant="secondary" className="text-lg font-semibold rounded-full px-8">
          Book a Free Consultation
        </Button>
      </div>
    </div>
  );
}
