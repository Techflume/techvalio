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
    title: "Data Centre & Server Qualification - Techvalio",
    description:
      "Techvalio provides comprehensive Data Centre and Server Qualification services ensuring optimal performance, security, environmental stability, and compliance with industry standards.",
    keywords:
      "Data centre qualification, server qualification, infrastructure validation, IT qualification, Techvalio, data centre audit",
  },

  hero: {
    title: "Data Centre & Server Qualification",
    img: "/images/services/banner/data-centre-and-server-qualification.png",
    alt: "Data Centre Qualification",
  },

  intro:
    "Data Centre and Server Qualification is a documented process that ensures servers, networks, storage systems, and environmental controls are installed, configured, and operating according to predefined specifications and regulatory requirements.",

  features: [
    "Infrastructure qualification along with Environmental qualification",
    "Infrastructure qualification along with components",
    "Support for pharmaceutical, biotech, and emerging innovations",
    "Access control and security control verification and qualification",
  ],

  sections: [
    {
      heading: "What is Data Centre & Server Qualification?",
      text: `Data Centre and Server Qualification guarantees that IT infrastructure—including servers, networks, storage systems, and environmental controls—is installed, configured, and performing according to approved specifications. It ensures security, reliability, and compliance with global standards across regulated industries.`,
    },
    {
      heading: "Why It Matters",
      text: `Proper Data Centre Qualification ensures operational continuity, data security, performance reliability, and regulatory compliance.`,
      keyHeading: "Key benefits of Data Centre Qualification:",
      keys: [
        "Physical environment assessment",
        "Server hardware performance validation",
        "Network and cybersecurity configuration review",
        "Backup & disaster recovery testing",
        "Environmental monitoring (temperature, humidity, fire protection, access control)",
      ],
    },
  ],

  fullWidthImage: "/images/services/data-centre-and-server-qualification.png",

  offerings: [
    {
      title: "Physical Environment Qualification",
      desc: "Assessment of data centre rooms, layouts, cooling, power systems, access control, and redundancy.",
    },
    {
      title: "Server Hardware Qualification",
      desc: "Validation of CPU, memory, storage, RAID configuration, network interfaces, and hardware performance.",
    },
    {
      title: "OS & Firmware Validation",
      desc: "Ensuring OS is updated, secure, patched, and configured for optimal performance.",
    },
    {
      title: "Network & Security Configuration Review",
      desc: "Firewall rules, intrusion detection, security protocols, and network architecture validation.",
    },
    {
      title: "Backup & Disaster Recovery Testing",
      desc: "Validation of backup systems, recovery processes, and redundant storage mechanisms.",
    },
  ],

  process: [
    {
      title: "Define Qualification Scope",
      desc: "Identify systems, environmental controls, hardware, and compliance requirements.",
    },
    {
      title: "Environmental Assessment",
      desc: "Evaluate temperature, humidity, fire systems, power redundancy, and access control.",
    },
    {
      title: "Server Hardware Validation",
      desc: "Validate CPU, RAM, disk arrays, RAID, network cards, and virtual machines.",
    },
    {
      title: "OS & Firmware Validation",
      desc: "Ensure the operating system is patched, configured, and secure.",
    },
    {
      title: "Network & Cybersecurity Review",
      desc: "Validate firewalls, security protocols, IDS/IPS, and overall network health.",
    },
    {
      title: "Backup & Recovery Validation",
      desc: "Test backup completion, restoration feasibility, and RTO/RPO readiness.",
    },
    {
      title: "Qualification Documentation",
      desc: "Full documentation including findings, corrective actions, and audit-ready reports.",
    },
  ],

testimonial: [
  {
    quote:
      "“Techvalio’s Data Centre Qualification service provided unmatched clarity, reliability, and compliance readiness for our IT infrastructure.”",
    name: "Sandeep Kumar",
    role: "IT Infrastructure Lead",
    avatar: "/images/avatar-male.png",
  },
  {
    quote:
      "“The Techvalio team executed our validation activities with precision. Their documentation and compliance approach helped us clear our audits effortlessly.”",
    name: "Dr. Meera Joshi",
    role: "Quality Assurance Manager",
    avatar: "/images/avatar-female.png",
  },
  {
    quote:
      "“We migrated from a legacy system to a cloud platform without a single data mismatch—thanks to Techvalio’s accurate mapping and qualification process.”",
    name: "Arvind Narayan",
    role: "Data Migration Lead, BioCrest Pharma",
    avatar: "/images/avatar-male.png",
  },
  {
    quote:
      "“Their IQ, OQ, and PQ execution was flawless. Techvalio’s team ensured every step was traceable, compliant, and aligned with regulatory expectations.”",
    name: "Shruti Deshpande",
    role: "Validation Specialist",
    avatar: "/images/avatar-female.png",
  },
  {
    quote:
      "“Techvalio brings a rare combination of technical expertise and strong regulatory understanding. Their support significantly improved our system reliability.”",
    name: "Vikram Patel",
    role: "IT Compliance Head",
    avatar: "/images/avatar-male.png",
  },
],


  faq: [
    {
      q: "What is the flow for Data Centre & Server Qualification?",
      a: `The standard flow includes:
1. Define scope  
2. Environmental assessment (power, cooling, security)  
3. Server hardware validation  
4. OS & firmware validation  
5. Network & security configuration testing  
6. Backup & disaster recovery validation  
7. Qualification documentation (final report)`,
    },
    {
      q: "What environmental factors do you evaluate?",
      a: "Temperature, humidity, fire suppression, power redundancy, access control, and environmental monitoring systems.",
    },
    {
      q: "Do you validate cloud-based servers?",
      a: "Yes. We validate both on-premise and cloud infrastructure including AWS, Azure, and private data centres.",
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
              className="group bg-card border rounded-xl p-6 shadow-md flex items-start gap-4 transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1 hover:shadow-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
            >
              <span className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary font-bold rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-white">
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
        {service.fullWidthImage && (
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full my-12"
          >
            <div className="relative w-full h-[250px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={service.fullWidthImage}
                alt="Section Banner"
                fill
                className="object-cover"
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
              className="bg-card border rounded-xl p-6 shadow-md transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1 hover:shadow-lg"
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
                className="bg-white shadow-lg rounded-xl px-6 py-8 text-center border transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1 hover:shadow-lg"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.12 }}
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-3 transition-all duration-300">
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
