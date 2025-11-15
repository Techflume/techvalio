import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MotionDiv, MotionP, MotionH1 } from "@/components/common/MotionDiv";

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
        img: "/images/services/services2.jpg",
        alt: "Equipment Qualification",
    },

    intro:
        "Equipment Qualification is a systematic and documented process of ensuring that any GxP-regulated equipment is installed, operates, and performs according to the approved User Requirements Specification (URS) while producing consistent, reliable, and compliant results.",

    features: [
        "USFDA, EMA,WHO, TGA And CDSCO ",
        "Detailed Protocol for Qualification with execution ",
        "Support for pharmaceutical, biotech, and emerging innovations ",
        "Detailed Workflow with All Test Reports FAT, SAT and DQ ",
    ],

    sections: [
        {
            heading: "What is Equipment Qualification?",
            text: `Equipment Qualification verifies that any GxP equipment is installed, operates, and performs according to approved requirements. It involves assessing design components, reviewing specifications, and validating performance under real operating conditions. This includes Design Specification review, Factory Acceptance Testing (FAT), and Site Acceptance Testing (SAT).`,
            img: "/images/services/eq-what.jpg",
        },
        {
            heading: "Importance of Equipment & Process Validation",
            text: `Industries like pharmaceuticals, biotechnology, healthcare, and medical devices require Equipment Qualification to ensure consistency, reliability, and quality.
      
Why it matters:
• Regulatory Compliance: Meets FDA, EMA, WHO, and international validation standards.  
• Risk Mitigation: Prevents system failures and quality deviations.  
• Quality Assurance: Ensures accurate and consistent product output.`,
        },
    ],

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

    testimonial: {
        quote:
            "“Techvalio’s qualification services helped our facility achieve compliance effortlessly. IQ, OQ, and PQ were executed with exceptional professionalism.”",
        name: "Rajesh Mehta",
        role: "Manufacturing Head, BioPharm Ltd.",
        avatar: "/images/avatar-male.png",
    },

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
