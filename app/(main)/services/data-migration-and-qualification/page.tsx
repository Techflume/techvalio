import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MotionDiv, MotionP, MotionH1 } from "@/components/common/MotionDiv";

// ------------------------
// Page Data (SERVER SIDE)
// ------------------------
const service = {
    seo: {
        title: "Data Migration & Qualification - Techvalio",
        description:
            "Techvalio provides end-to-end data migration and qualification services ensuring data accuracy, completeness, and integrity during system upgrades or cloud transitions.",
        keywords:
            "Data migration, data qualification, DMP, DQP, validation summary report, Techvalio, data transformation, pharma data migration",
    },

    hero: {
        title: "Data Migration & Qualification",
        img: "/images/services/services6.jpg",
        alt: "Data Migration",
    },

    intro:
        "Data Migration is the process of converting and transferring legacy system data into a new updated system or cloud platform—while ensuring accuracy, completeness, and data integrity throughout the transition.",

    features: [
        "End to End data migration to any infrastructure through validated source to ensure no loss, corruption, or unauthorized modification occurs.",
        "Compiling data and data qualification by keeping data integrity and data security at priority ",
        "Support for pharmaceutical, biotech, and emerging innovations",
        "Legacy system data conversion , physical data migration to logical or digital transformation ",
    ],

    sections: [
        {
            heading: "What is Data Migration?",
            text: `Data migration is the structured process of exporting, converting, and transferring data from a legacy system to a new system or cloud platform. Techvalio ensures that data maintains integrity throughout the transition, supporting organizations across pharmaceutical, biotechnology, and healthcare industries.`,
            img: "/images/services/data-migration-what.jpg",
        },
        {
            heading: "Why Data Migration & Qualification Matters",
            text: `Data migration is critical in regulated industries where data integrity, security, and compliance are paramount.

• Ensures data reliability throughout system upgrades  
• Supports compliance with global regulatory expectations  
• Reduces operational risks during transitions  
• Guarantees accurate, complete, and consistent data`,
        },
    ],

    offerings: [
        {
            title: "Data Migration Plan (DMP)",
            desc: "A structured plan defining objectives, methodologies, timelines, and risk strategies for the migration project.",
        },
        {
            title: "Data Mapping & Transformation Matrix",
            desc: "We define how legacy data maps to the new system, including conversions, transformations, and field relationships.",
        },
        {
            title: "Migration Test Protocol & Report",
            desc: "We prepare testing protocols and reports to verify migration accuracy and resolve any discrepancies.",
        },
        {
            title: "Data Qualification Protocol (DQP)",
            desc: "Evaluation metrics for accuracy, consistency, completeness, and reliability of the migrated data.",
        },
        {
            title: "Data Reconciliation Report",
            desc: "Comparison between old and new systems to ensure all records are migrated successfully with no loss or errors.",
        },
        {
            title: "Validation Summary Report (VSR)",
            desc: "A complete summary of all migration and qualification activities for audits and stakeholder confidence.",
        },
    ],

    process: [
        {
            title: "Define Migration Scope",
            desc: "Identify systems, datasets, and regulatory requirements needed for migration and qualification.",
        },
        {
            title: "Develop Data Migration Plan (DMP)",
            desc: "The roadmap outlining objectives, risks, and validation strategy.",
        },
        {
            title: "Build Data Mapping & Transformation Matrix",
            desc: "Blueprint showing how legacy data fields convert into the new system structure.",
        },
        {
            title: "Execute Migration Test Protocol (MTP)",
            desc: "Testing migration accuracy, identifying discrepancies, and validating results.",
        },
        {
            title: "Perform Data Qualification (DQP)",
            desc: "Validating accuracy, completeness, and reliability of the migrated data.",
        },
        {
            title: "Prepare Reconciliation Report",
            desc: "Comparing source vs target data to confirm completeness and accuracy.",
        },
        {
            title: "Generate Validation Summary Report (VSR)",
            desc: "Final documented proof of data integrity, validation, and audit readiness.",
        },
    ],

    testimonial: {
        quote:
            "“Techvalio handled our system migration flawlessly. Every dataset was validated, mapped, reconciled, and documented with exceptional precision.”",
        name: "Dr. Anjali Patil",
        role: "Data Governance Lead, NovaBio",
        avatar: "/images/avatar-female.png",
    },

    faq: [
        {
            q: "What is the flow for Data Migration and Qualification?",
            a: `The standard flow includes:
1. Define scope  
2. Data Migration Plan (DMP)  
3. Data Mapping & Transformation Matrix  
4. Migration Testing (MTP)  
5. Data Qualification (DQP)  
6. Data Reconciliation Report  
7. Validation Summary Report (VSR)`,
        },
        {
            q: "Why is data qualification important?",
            a: "It ensures that migrated data is accurate, complete, consistent, and compliant with GxP standards.",
        },
        {
            q: "Does Techvalio support cloud migration?",
            a: "Yes, we handle both on-premise to cloud and system-to-system migrations with full validation.",
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
