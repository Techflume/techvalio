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
    title: "Data Migration & Qualification - Techvalio",
    description:
      "Techvalio provides end-to-end data migration and qualification services ensuring data accuracy, completeness, and integrity during system upgrades or cloud transitions.",
    keywords:
      "Data migration, data qualification, DMP, DQP, validation summary report, Techvalio, data transformation, pharma data migration",
  },

  hero: {
    title: "Data Migration & Qualification",
    img: "/images/services/banner/data-migration-and-qualification.png",
    alt: "Data Migration",
  },

  intro:
    "Data Migration is the process of converting and transferring legacy system data into a new updated system or cloud platform—while ensuring accuracy, completeness, and data integrity throughout the transition.",

  features: [
    "End-to-end data migration to any infrastructure ensuring no loss, corruption, or unauthorized modification.",
    "Compiling and qualifying data with priority on integrity and security.",
    "Support for pharmaceutical, biotech, and emerging innovations.",
    "Legacy system data conversion: physical to logical or digital transformation.",
  ],

  sections: [
    {
      heading: "What is Data Migration?",
      text: `Data migration is the structured process of exporting, converting, and transferring data from a legacy system to a new system or cloud platform. Techvalio ensures that data maintains integrity throughout the transition, supporting organizations across pharmaceutical, biotechnology, and healthcare industries.`,
    },
    {
      heading: "Why Data Migration & Qualification Matters",
      text: `Data migration is critical in regulated industries where data integrity, security, and compliance are paramount.`,
      keyHeading: "Key reasons Data Migration matters:",
      keys: [
        "Ensures data reliability throughout system upgrades",
        "Supports compliance with global regulatory expectations",
        "Reduces operational risks during transitions",
        "Guarantees accurate, complete, and consistent data",
      ],
    },
  ],

  fullWidthImage: "/images/services/data-migration-and-qualification.png",

  offerings: [
    {
      title: "Data Migration Plan (DMP)",
      desc: "A structured plan defining objectives, methodologies, timelines, and risk strategies for the migration project.",
    },
    {
      title: "Data Mapping & Transformation Matrix",
      desc: "Defines how legacy data maps to the new system, including conversions, relationships, and transformations.",
    },
    {
      title: "Migration Test Protocol & Report",
      desc: "Testing protocols and reports validating migration accuracy and resolving discrepancies.",
    },
    {
      title: "Data Qualification Protocol (DQP)",
      desc: "Ensures migrated data is accurate, consistent, complete, and reliable.",
    },
    {
      title: "Data Reconciliation Report",
      desc: "A comparison between legacy and new system data ensuring completeness and correctness.",
    },
    {
      title: "Validation Summary Report (VSR)",
      desc: "A complete summary of migration and qualification activities for audits and compliance.",
    },
  ],

  process: [
    {
      title: "Define Migration Scope",
      desc: "Identify systems, datasets, and regulatory requirements for migration and qualification.",
    },
    {
      title: "Develop Data Migration Plan (DMP)",
      desc: "Roadmap including objectives, risks, and validation strategy.",
    },
    {
      title: "Build Data Mapping & Transformation Matrix",
      desc: "Defines how legacy fields convert to new system fields.",
    },
    {
      title: "Execute Migration Test Protocol (MTP)",
      desc: "Validating migration accuracy and resolving discrepancies.",
    },
    {
      title: "Perform Data Qualification (DQP)",
      desc: "Ensuring data accuracy, completeness, consistency, and reliability.",
    },
    {
      title: "Prepare Reconciliation Report",
      desc: "Comparing source vs target data for validation completeness.",
    },
    {
      title: "Generate Validation Summary Report (VSR)",
      desc: "Final documented evidence of validation and data integrity.",
    },
  ],

testimonial: [
  {
    quote:
      "“Their migration accuracy was outstanding. Not a single record mismatch was found during reconciliation. Truly world-class work by Techvalio.”",
    name: "Sourabh Menon",
    role: "IT Data Validation Manager, BioQuest Pharma",
    avatar: "/images/avatar-male.png",
  },
  {
    quote:
      "“Techvalio brought structure and clarity to our entire data migration project. The DMP, DQP, and reconciliation reports were audit-perfect.”",
    name: "Dr. Meera Shah",
    role: "Quality Systems Lead, Vertex Lifesciences",
    avatar: "/images/avatar-female.png",
  },
  {
    quote:
      "“Our legacy system migration was extremely complex. Techvalio ensured complete integrity, no data loss, and seamless transition to the new platform.”",
    name: "Rahul Deshmukh",
    role: "Digital Transformation Head, CureNext Pharma",
    avatar: "/images/avatar-male.png",
  },
  {
    quote:
      "“The level of documentation and validation Techvalio provided made our regulatory submission significantly easier. Highly recommended for DQP and VSR.”",
    name: "Shalini Verma",
    role: "Regulatory Compliance Manager, MedCore Labs",
    avatar: "/images/avatar-female.png",
  },
],


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
      a: "Yes, we support on-premise to cloud and system-to-system migrations with full validation.",
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
              <span className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary font-bold rounded-full 
                transition-all duration-300 group-hover:bg-primary group-hover:text-white">
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
            <h2 className="text-xl md:text-2xl font-bold text-primary">{sec.heading}</h2>

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
          </MotionDiv>
        ))}

        {/* FULL WIDTH IMAGE */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full my-12"
        >
          <div className="relative w-full h-80 md:h-[250px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={service.fullWidthImage}
              alt="Section Banner"
              fill
              className="object-fit"
            />
          </div>
        </MotionDiv>

        {/* CTA BUTTON */}
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
              className="bg-card border rounded-xl p-6 shadow-md transition-all duration-300 
              hover:bg-primary/10 hover:-translate-y-1 hover:shadow-lg"
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
                <p className="mt-2 text-sm text-muted-foreground">{item.a}</p>
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
