import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MotionDiv, MotionP, MotionH1 } from "@/components/common/MotionDiv";

// ------------------------
// Page Data (SERVER SIDE)
// ------------------------
const service = {
  seo: {
    title: "Computer System Validation (CSV) - Techvalio",
    description:
      "Techvalio provides comprehensive Computer System Validation (CSV) services ensuring compliance with FDA 21 CFR Part 11, EU Annex 11, and GxP guidelines.",
    keywords:
      "CSV, computer system validation, FDA 21 CFR Part 11, Annex 11, GxP validation, pharma compliance",
  },

  hero: {
    title: "Computer System Validation (CSV)",
    img: "/images/services/csv-hero.jpg",
    alt: "Computer System Validation",
  },

  intro:
    "Computer System Validation (CSV) ensures that computer-based systems consistently perform as intended while meeting regulatory standards such as FDA 21 CFR Part 11, GxP, and EU Annex 11 throughout their lifecycle.",

  features: [
    "USFDA,21 CFR part11,Eu Annex 1111,CFR 21 part 820 ",
    "End to End Validation Strategies to achieve Global regulatory compliance ",
    "Support for pharma, biotech, and innovations",
    "Emerging to Pharmaceutical, Life science, Healthcare, medical device and Tech innovations    ",
  ],

  sections: [
    {
      heading: "What is Computer System Validation?",
      text: `CSV is a systematic, documented process that confirms a computer system performs accurately, reliably, 
      and consistently while meeting regulatory requirements. It ensures the integrity of electronic records and electronic signatures.`,
      img: "/images/services/csv-what.jpg",
    },
    {
      heading: "Why Computer System Validation Matters",
      text: `CSV ensures that regulated industries such as pharmaceuticals, healthcare, life sciences, 
      and medical devices operate with accuracy, compliance, and data integrity.

Key reasons CSV is important:
• Ensure Compliance – Meets FDA 21 CFR Part 11, EU Annex 11, and global regulatory standards.
• Enhance Data Integrity – Guarantees that data is complete, consistent, and protected.
• Mitigate Risks – Identifies potential failures early to prevent compliance risks and system issues.`,
    },
  ],

  offerings: [
    {
      title: "Regulatory Compliance",
      desc: "Full compliance with FDA 21 CFR Part 11, EU Annex 11, GAMP5, and GxP standards.",
    },
    {
      title: "Complete CSV Documentation",
      desc: "Validation Plans, URS, FRS, IQ/OQ/PQ protocols, Traceability Matrix, and summary reports.",
    },
    {
      title: "Ongoing Revalidation",
      desc: "Continuous system revalidation as your system evolves, ensuring long-term compliance.",
    },
  ],

  process: [
    {
      title: "Planning & Documentation",
      desc: "We create validation plans, scope, user requirements, and documentation strategies.",
    },
    {
      title: "Requirements Gathering",
      desc: "We collaborate with your team to define User Requirements (URS) and system expectations.",
    },
    {
      title: "Risk Assessment",
      desc: "We analyze risks to prioritize validation activities and minimize compliance gaps.",
    },
    {
      title: "Validation Testing (IQ/OQ/PQ)",
      desc: "We perform Installation Qualification, Operational Qualification, and Performance Qualification.",
    },
    {
      title: "Documentation & Reporting",
      desc: "Every step is thoroughly documented to maintain audit-ready compliance.",
    },
    {
      title: "Training & Support",
      desc: "Your team receives training to manage CSV processes and maintain compliance.",
    },
    {
      title: "Revalidation & Continuous Support",
      desc: "We ensure your system stays compliant as it updates or scales over time.",
    },
  ],

  testimonial: {
    quote:
      "“Techvalio ensured our systems passed every audit without a single deviation. Their CSV documentation and testing are exceptionally thorough.”",
    name: "Anita Kulkarni",
    role: "QA Director, MedLife Sciences",
    avatar: "/images/avatar-female.png",
  },

  faq: [
    {
      q: "What is included in Computer System Validation?",
      a: "CSV includes planning, risk assessment, requirements, IQ/OQ/PQ testing, documentation, reporting, and continuous validation support.",
    },
    {
      q: "Which industries need CSV?",
      a: "Industries such as pharmaceuticals, medical devices, biotechnology, and healthcare are required to follow CSV guidelines.",
    },
    {
      q: "Does Techvalio support FDA 21 CFR Part 11 compliance?",
      a: "Yes. Our CSV process ensures full compliance with 21 CFR Part 11, EU Annex 11, and other GxP standards.",
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
