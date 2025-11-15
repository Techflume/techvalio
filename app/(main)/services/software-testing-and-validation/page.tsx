import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MotionDiv, MotionP, MotionH1 } from "@/components/common/MotionDiv";

// ------------------------
// Page Data (SERVER SIDE)
// ------------------------
const service = {
  seo: {
    title: "Software Testing & Validation - Techvalio",
    description:
      "Techvalio provides end-to-end Software Testing & Validation services complying with GxP, 21 CFR Part 11, and EU Annex 11 for regulated industries.",
    keywords:
      "Software testing, software validation, GxP, SRS, RSD, 21 CFR Part 11, Annex 11, validation lifecycle, Techvalio",
  },

  hero: {
    title: "Software Testing & Validation",
    img: "/images/services/services1.jpg",
    alt: "Software Testing and Validation",
  },

  intro:
    "Techvalio delivers comprehensive Software Testing and Validation services designed for regulated industries. Our solutions ensure that applications comply with GxP guidelines and regulatory standards such as 21 CFR Part 11 and EU Annex 11 while maintaining high software quality and operational integrity.",

  features: [
    "Complete GxP support for application including SRS and RSD creation ",
    "Converting user stories into development plan and attaining 21CFR Part 11 and EU annex 11 through out the app ",
    "Support for pharmaceutical, biotech, and emerging innovations",
    "Technical support and unit testing over GxP Aspects and Validation",
  ],

  sections: [
    {
      heading: "Why Software Validation Matters",
      text: `In regulated environments such as pharmaceuticals, biotechnology, and healthcare, software must be validated to ensure accuracy, reliability, and regulatory compliance.  
      
Software validation prevents data integrity issues, ensures secure system operations, and confirms that applications perform consistently according to user needs and documented requirements.`,
      img: "/images/services/software-validation-what.jpg",
    },
    {
      heading: "Regulatory-Driven Software Development",
      text: `Techvalio ensures software development aligns with Good Automated Manufacturing Practice (GxP), Good Manufacturing Practices (GMP), Good Laboratory Practices (GLP), and Good Clinical Practices (GCP).  
      
We integrate compliance checkpoints into every stage of development—covering user needs, traceability, audit trails, secure access, and electronic records/e-signatures.`,
    },
  ],

  offerings: [
    {
      title: "GxP-Compliant Software Development Support",
      desc: "Ensuring software meets GMP, GLP, and GCP guidelines throughout development and deployment.",
    },
    {
      title: "SRS & RSD Documentation",
      desc: "Creating detailed Software Requirements Specification (SRS) and Requirement Specification Document (RSD).",
    },
    {
      title: "User Story to Development Conversion",
      desc: "Converting user stories into structured development plans under Agile methodology.",
    },
    {
      title: "Compliance with 21 CFR Part 11 & Annex 11",
      desc: "Ensuring audit trails, security controls, access permissions, and data integrity are compliant.",
    },
    {
      title: "GxP-Focused Unit Testing",
      desc: "Validation of individual components for accuracy, security, and functional correctness.",
    },
    {
      title: "Validation Planning & Execution",
      desc: "End-to-end validation lifecycle including IQ, OQ, and PQ for full compliance.",
    },
  ],

  process: [
    {
      title: "Define Requirements (SRS & RSD)",
      desc: "Documenting clear functional, non-functional, and regulatory requirements.",
    },
    {
      title: "Convert User Stories Into Plans",
      desc: "Developing structured execution plans from user stories using Agile methodology.",
    },
    {
      title: "Compliance Assessment",
      desc: "Evaluating system readiness for 21 CFR Part 11, Annex 11, and GxP compliance.",
    },
    {
      title: "Unit Testing & Functional Testing",
      desc: "Testing components, workflows, and user functions under GxP guidelines.",
    },
    {
      title: "Validation Execution (IQ/OQ/PQ)",
      desc: "Performing installation, operational, and performance qualification activities.",
    },
    {
      title: "Documentation & Traceability",
      desc: "Creating traceability matrices, validation reports, and audit-ready documents.",
    },
    {
      title: "Release, Support & Maintenance",
      desc: "Ensuring validated software remains compliant throughout its lifecycle.",
    },
  ],

  testimonial: {
    quote:
      "“Techvalio transformed our software development lifecycle with complete GxP validation and exceptional documentation quality.”",
    name: "Priya Sharma",
    role: "Quality Compliance Manager",
    avatar: "/images/avatar-female.png",
  },

  faq: [
    {
      q: "What is included in Software Validation?",
      a: "It includes SRS/RSD creation, user-story mapping, unit testing, compliance checks, IQ/OQ/PQ validation, documentation, and audit readiness.",
    },
    {
      q: "Do you ensure compliance with 21 CFR Part 11?",
      a: "Yes, we validate audit trails, e-signatures, data integrity, access control, and secure system configurations.",
    },
    {
      q: "Is Agile development supported?",
      a: "Absolutely. We convert user stories into actionable compliance-driven development plans.",
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
                <Image
                    src={service.hero.img}
                    alt={service.hero.alt}
                    fill
                    className="object-cover"
                />

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
                            className="bg-card border rounded-xl p-6 shadow-md flex items-start gap-4"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: i * 0.15 }}
                        >
                            <span className="h-8 w-8 flex items-center justify-center bg-primary/10 text-primary font-bold rounded-full">
                                {i + 1}
                            </span>
                            <span>{feature}</span>
                        </MotionDiv>
                    ))}
                </div>
            </section>

            {/* MAIN SECTIONS */}
            <section className="container mx-auto px-4 pb-20">
                {service.sections.map((sec, index) => (
                    <MotionDiv
                        key={sec.heading}
                        className={`flex flex-col md:flex-row gap-12 items-center mb-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }`}
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                    >
                        {sec.img && (
                            <div className="relative h-48 w-full md:w-80 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={sec.img}
                                    alt={sec.heading}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                                {sec.heading}
                            </h2>
                            <p className="text-muted-foreground">{sec.text}</p>
                        </div>
                    </MotionDiv>
                ))}

                <div className="flex justify-center">
                    <Button size="lg" className="px-8 py-3 text-lg font-semibold">
                        Request Consultation
                    </Button>
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
                            className="bg-card border rounded-xl p-6 shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: i * 0.15 }}
                        >
                            <h3 className="font-bold text-lg text-primary mb-2">{o.title}</h3>
                            <p className="text-muted-foreground text-sm">{o.desc}</p>
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

                    {/* 3 cards per row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {service.process.map((step, i) => (
                            <MotionDiv
                                key={i}
                                className="bg-white shadow-lg rounded-xl px-6 py-8 text-center border"
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: i * 0.12 }}
                            >
                                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-3">
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
            <section className="container mx-auto py-16 px-4 flex justify-center">
                <MotionDiv
                    className="max-w-2xl bg-card rounded-xl shadow-lg p-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-lg font-semibold text-primary mb-4">
                        {service.testimonial.quote}
                    </p>

                    <Image
                        src={service.testimonial.avatar}
                        alt={service.testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full mx-auto mb-2"
                    />

                    <div className="font-bold">{service.testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                        {service.testimonial.role}
                    </div>
                </MotionDiv>
            </section>

            {/* FAQ */}
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

                            {/* Animate only the ANSWER */}
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
                <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg font-semibold rounded-full px-8"
                >
                    Book a Free Consultation
                </Button>
            </div>
        </div>
    );
}
