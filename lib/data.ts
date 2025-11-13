// /lib/data.js

import {
  Cog,
  ShieldCheck,
  Users,
  Award,
  Car,
  Component,
  Settings2,
  Wind,
  Sun,
  Disc,
  Circle,
  Shield,
  Target,
  Zap,
  Cloud,
  Stethoscope,
  Repeat2,
  Scale,
  Building,
  Trophy,
  Layers,
  FileText,
  Settings,
} from "lucide-react";

// /lib/data.ts
export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Industry", href: "/industry" },
  { label: "Compliance", href: "/compliance" },
  {
    label: "Resources",
    href: "/resources",
    children: [{ label: "Blog", href: "/resources/blog" }],
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Why Us", href: "/why-us" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const companyLogos = [
  { name: "Bosch", imageId: "bosch-logo" },
  { name: "Denso", imageId: "denso-logo" },
  { name: "Magna", imageId: "magna-logo" },
  { name: "ZF", imageId: "zf-logo" },
  { name: "Aisin", imageId: "aisin-logo" },
  { name: "Valeo", imageId: "valeo-logo" },
];

// Can go in your page or in a separate /lib/data.js file

export const heroSlides = [
  {
    src: "/images/banner/banner1.jpg",
    alt: "Banner 1",
    headline: "",
    highlight: "Why techvalio",
    description:
      "Techvalio values are designed to understand compliance challenges and create best solution with blend of technology and human ingenuity Looking for best gxp solutions to your requirements? Here is techvalio with its remarkable practices",
    cta: { label: "Get Started", href: "#get-started" },
    secondary: { label: "Get Free Assessment", href: "#contact" },
    features:
      "✓ Risk-Based Validation • ✓ Deep Domain Knowledge • ✓ Seamlessly Agile-Friendly",
  },
  {
    src: "/images/banner/banner2.jpg",
    alt: "Banner 2",
    headline: "",
    highlight: "golobal compliance",
    description:
      "At techvalio, our expert solutions seamlessly integrate and harmonize global compliance frameworks, ensuring the highest level of confidence in regulatory adherence, quality excellence, data security, and integrity.",
    cta: { label: "Explore more on global standards", href: "#demo-industry" },
    secondary: { label: "Book free demo ", href: "#demo-industry" },
    features:
      "✓ GMP & ISO Standards • ✓ Equipment/Process Validation • ✓ Audit-Ready Reports",
  },
  {
    src: "/images/banner/banner3.jpg",
    alt: "Banner 3",
    headline: "",
    highlight: "Global Value Creation ",
    description:
      "Techvalio strives to establish a professional development policy based on a two-way value creation strategy, where both clients and employees are treated with dignity and respect, we are committed to fostering a versatile, growth-oriented, and harassment-free work environment that promotes collaboration and continuous learning",
    cta: { label: "Lets create ", href: "#compliance" },
    secondary: { label: "Book free demo ", href: "#free-assessment" },
    features:
      "✓ Data Migration • ✓ Cloud Qualification • ✓ Cleanroom/Server Solutions",
  },
  // ...add up to banner7
];

export const whyChooseUsFeatures = [
  {
    icon: Shield,
    title: "Risk-Based Validation",
    description:
      "We focus validation efforts on high-risk components and critical workflows, ensuring maximum coverage where it matters most.",
  },
  {
    icon: Target,
    title: "Domain Knowledge Expertise",
    description:
      "Deep, specialized experience in regulated sectors, including Life Sciences, FinTech, and complex Cloud architectures.",
  },
  {
    icon: Shield,
    title: "Audit-Ready Documentation",
    description:
      "Structured, professional, and comprehensive documentation aligned perfectly with global compliance needs (e.g., FDA, ISO).",
  },
  {
    icon: Zap,
    title: "Accelerated Validation",
    description:
      "Leverage reusable templates, proven processes, and advanced tools to reduce validation time and cost significantly.",
  },
  {
    icon: Stethoscope,
    title: "Life Sciences Compliance",
    description:
      "Expert validation services tailored to **FDA 21 CFR Part 11** and **EU Annex 11** for medical devices and pharma.",
  },
  {
    icon: Scale,
    title: "Performance & Security",
    description:
      "Ensure your systems are robust, scalable, and secure under real-world stress, minimizing post-deployment risks.",
  },
  {
    icon: Repeat2,
    title: "Validation Automation",
    description:
      "Implementation of automation frameworks to increase test repeatability, reduce manual effort, and support continuous delivery.",
  },
  {
    icon: Cloud,
    title: "Agile & DevOps Integration",
    description:
      "Validation seamlessly integrated into iterative development and DevOps pipelines for faster release cycles.",
  },
];

export const stats = [
  {
    value: 12,
    suffix: "+",
    label: "Years in Regulated Markets",
    icon: Building, // Represents industry presence/experience
  },
  {
    value: 99,
    suffix: "%",
    label: "Audit Pass Rate",
    icon: Shield, // Represents compliance and success
  },
  {
    value: 500,
    suffix: "+",
    label: "Validation Projects Completed",
    icon: Trophy, // Represents successful delivery
  },
  {
    value: 40,
    suffix: "%",
    label: "Validation Time Reduction",
    icon: Zap, // Represents efficiency and acceleration
  },
];

export const premiumParts = [
  {
    title: "Validation Planning & Strategy",
    description:
      "The foundational phase where scope, risks, and regulatory alignment are defined to create a successful roadmap.",
    features: [
      "Define scope and risk levels",
      "Align with ISO, FDA standards",
      "Create Validation Roadmap",
    ],
    badge: "Phase 1: Foundation",
    imageId: "engine-part",
  },
  {
    title: "Requirements Review & Traceability",
    description:
      "Ensure all user and functional requirements are testable, complete, and fully traceable through the entire project.",
    features: [
      "Analyze URS/FSD",
      "Ensure end-to-end traceability",
      "Identify gaps or ambiguities",
    ],
    badge: "Core Deliverable",
    imageId: "transmission-part",
  },
  {
    title: "Test Design & Execution",
    description:
      "Development of comprehensive test cases, scenarios, and acceptance criteria followed by rigorous testing.",
    features: [
      "Develop Test Strategy/Cases",
      "Execute Unit, System, UAT",
      "Log Defects and Validate Fixes",
    ],
    badge: "Rigorous Testing",
    imageId: "engine-components",
  },
];

export const qualityProcess = [
  {
    step: 1,
    title: "Sourcing & Selection",
    description:
      "We carefully source parts from reputable suppliers and select only the best components.",
  },
  {
    step: 2,
    title: "Inspection & Testing",
    description:
      "Every part undergoes comprehensive inspection by ASE-certified technicians.",
  },
  {
    step: 3,
    title: "Cleaning & Preparation",
    description:
      "Parts are professionally cleaned and prepared to meet our strict quality standards.",
  },
  {
    step: 4,
    title: "Final Quality Check",
    description:
      "A final quality assessment ensures each part meets OEM specifications before shipping.",
  },
];

export const popularParts = [
  "Engines",
  "Transmissions",
  "Headlights",
  "Bumpers",
  "Doors",
  "Mirrors",
  "Wheels",
  "Airbags",
  "ECU Modules",
  "Catalytic Converters",
];

export const testimonials = [
  {
    quote:
      "Saved over $800 on a transmission for my Honda Accord. The part arrived exactly as described and works perfectly. The 90-day warranty gave me peace of mind.",
    author: "Sarah Johnson",
    location: "Phoenix, AZ",
    avatarId: "testimonial-avatar-1",
  },
  {
    quote:
      "Amazing customer service! They helped me find the exact engine part I needed using my VIN. Shipped fast and the quality exceeded my expectations.",
    author: "Mike Rodriguez",
    location: "Dallas, TX",
    avatarId: "testimonial-avatar-2",
  },
  {
    quote:
      "As a mechanic, I've used many parts suppliers. Global Auto Connect's quality control is top-notch. My customers are always satisfied with the parts.",
    author: "Jennifer Chen",
    location: "Seattle, WA",
    avatarId: "testimonial-avatar-3",
  },
  {
    quote:
      "The VIN lookup feature is incredible. Found my BMW part in seconds and it fit perfectly. Will definitely use them again for all my auto part needs.",
    author: "David Thompson",
    location: "Miami, FL",
    avatarId: "testimonial-avatar-4",
  },
  {
    quote:
      "Excellent experience from start to finish. The part was cleaned, inspected, and packaged perfectly. Saved me thousands compared to the dealership.",
    author: "Lisa Martinez",
    location: "Denver, CO",
    avatarId: "testimonial-avatar-5",
  },
  {
    quote:
      "Their 24/7 support team is fantastic. Called at midnight with a question and got immediate help. The expertise and friendliness is unmatched.",
    author: "Robert Kim",
    location: "Atlanta, GA",
    avatarId: "testimonial-avatar-6",
  },
];

export const trustFeatures = [
  {
    icon: ShieldCheck,
    title: "Foundation for Smooth Audits",
    description:
      "Our structured, risk-based approach minimizes audit findings and ensures documentation is always ready.",
  },
  {
    icon: Users,
    title: "Stakeholder Confidence",
    description:
      "We validate that the software meets key business and user expectations, building trust across the organization.",
  },
  {
    icon: Layers,
    title: "Future Scalability Assured",
    description:
      "Validation ensures the core software architecture is robust, providing a clear path for future growth.",
  },
  {
    icon: FileText,
    title: "Consolidated, Final Deliverables",
    description:
      "We provide the Validation Summary Report and Compliance Statement for final sign-off.",
  },
];

export const certifications = [
  { name: "FDA 21 CFR Part 11", icon: FileText },
  { name: "EU Annex 11", icon: Award },
  { name: "ISO 13485 (Med Devices)", icon: Settings },
  { name: "ISO 9001 (Quality Mgt)", icon: ShieldCheck },
];

export const securityFeatures = [
  "Complete Test Coverage Assurance",
  "Data Integrity Verification",
  "Independent Validation (IV&V)",
  "End-to-End Traceability",
  "Strict Change Control Validation",
  "Compliance Checklist Delivery",
];

export const footerNav = [
  {
    title: "Validation Quick Links",
    items: [
      // Assuming a Contact/CTA section exists
      { label: "Request a Proposal", href: "#contact" },
      { label: "Schedule Consultation", href: "#contact" },
      { label: "Back to Top", href: "#" },
    ],
  },
  {
    title: "Validation Services",
    items: [
      // Links related to core services/modules
      { label: "Validation Modules", href: "#parts" }, // Reusing the old ID, but pointing to the Modules section
      { label: "Compliance & Audits", href: "#trust" },
      { label: "Independent Validation (IV&V)", href: "#why-us" },
      { label: "Validation Automation", href: "#why-us" },
      { label: "Life Sciences (FDA/EU)", href: "#trust" },
      { label: "Performance & Security", href: "#why-us" },
    ],
  },
  {
    title: "Techvalio Advantage",
    items: [
      // Links related to differentiators and trust factors
      { label: "✓ Audit-Ready Documentation", href: "#trust" },
      { label: "✓ Risk-Based Approach", href: "#why-us" },
      { label: "✓ Agile & DevOps Friendly", href: "#why-us" },
      { label: "✓ Accelerated Validation", href: "#why-us" },
      { label: "✓ Requirements Traceability", href: "#parts" },
      { label: "✓ Seamless Integration", href: "#contact" }, // Can link to a process or contact area
    ],
  },
];

export const popularCategories = [
  {
    name: "Body Parts",
    count: "3,200+ parts",
    imageId: "body-parts",
    icon: Car,
  },
  {
    name: "Engine Parts",
    count: "1,500+ parts",
    imageId: "engine-parts",
    icon: Cog,
  },
  {
    name: "Suspension",
    count: "2,800+ parts",
    imageId: "suspension-parts",
    icon: Settings2,
  },
  {
    name: "Transmission",
    count: "1,200+ parts",
    imageId: "transmission-parts-cat",
    icon: Component,
  },
  {
    name: "Lighting",
    count: "4,500+ parts",
    imageId: "lighting-parts",
    icon: Sun,
  },
  { name: "Brakes", count: "2,100+ parts", imageId: "brake-parts", icon: Disc },
  {
    name: "Exhaust",
    count: "800+ parts",
    imageId: "exhaust-parts",
    icon: Wind,
  },
  {
    name: "Wheels & Tires",
    count: "3,500+ parts",
    imageId: "wheel-parts",
    icon: Circle,
  },
];

// /lib/data.js
export const servicesList = [
  {
    image: "/images/services/services1.jpg",
    title: "Pharmaceutical Licensing Services",
    subtitle:
      "Delivering end-to-end software verification to ensure reliability, data integrity, and regulatory compliance across all development phases.",
  },
  {
    image: "/images/services/services2.jpg",
    title: "Equipment & Process Validation",
    subtitle:
      "Executing Installation, Operational, and Performance Qualification (IQ/OQ/PQ) for manufacturing and laboratory equipment to ensure consistent product quality.",
  },
  {
    image: "/images/services/services3.jpg",
    title: "Pharmaceutical Training and Webinars",
    subtitle:
      "Providing validation services aligned with FDA, EMA, and WHO guidelines for both regulated (GxP) and non-regulated (Non-GxP) environments.",
  },
  {
    image: "/images/services/services4.jpg",
    title: "HVAC Installation and Qualification",
    subtitle:
      "Verifying controlled environments through particle count testing, airflow visualization, and temperature/humidity mapping for GMP compliance.",
  },
  {
    image: "/images/services/services5.jpg",
    title: "Computer System Validation (CSV)",
    subtitle:
      "Performing comprehensive validation lifecycle activities—planning, testing, documentation, and maintenance—to meet 21 CFR Part 11 and Annex 11 standards.",
  },
  {
    image: "/images/services/services6.jpg",
    title: "Data Migration & Qualification",
    subtitle:
      "Conducting validated data transfer processes to ensure accuracy, completeness, and traceability during system upgrades or platform transitions.",
  },
  {
    image: "/images/services/services1.jpg",
    title: "Quality Management Solutions",
    subtitle:
      "Implementing and validating QMS platforms to streamline quality processes, CAPA management, and compliance reporting.",
  },
  {
    image: "/images/services/services1.jpg",
    title: "Software Testing & Validation",
    subtitle:
      "Delivering end-to-end software verification to ensure reliability, data integrity, and regulatory compliance across all development phases.",
  },

  {
    image: "/images/services/services1.jpg",
    title: "Data Centre & Server Qualification",
    subtitle:
      "Assessing IT infrastructure—including servers, networks, and data storage systems—to ensure reliability, redundancy, and compliance with data integrity standards.",
  },

  {
    image: "/images/services/services1.jpg",
    title: "Training & Webinars",
    subtitle:
      "Offering specialized training and live webinars on CSV, GxP compliance, and QA best practices to build organizational expertise and readiness.",
  },

  {
    image: "/images/services/services1.jpg",
    title: "Enterprise Solutions Validation",
    subtitle:
      "Ensuring ERP, CRM, and LIMS systems meet functional, performance, and compliance requirements for enterprise-level operations.",
  },
];

export const industryList = [
  {
    image: "/images/industry/biologics.png",
    title: "Biologics",
    link: "/biologic-industry",
    subtitle:
      "Implementing and validating QMS platforms to streamline quality processes, CAPA management, and compliance reporting.",
  },
  {
    image: "/images/industry/life-science.png",
    title: "Lifesciences",
    link: "/life-sciences",
    subtitle:
      "Delivering end-to-end software verification to ensure reliability, data integrity, and regulatory compliance across all development phases.",
  },
  {
    image: "/images/industry/fnb.png",
    title: "Food & Beverages",
    link: "/food-and-beverage-industry",
    subtitle:
      "Executing Installation, Operational, and Performance Qualification (IQ/OQ/PQ) for manufacturing and laboratory equipment to ensure consistent product quality.",
  },
  {
    image: "/images/industry/healthcare.png",
    title: "Healthcare",
    link: "/healthcare-industry",
    subtitle:
      "Providing validation services aligned with FDA, EMA, and WHO guidelines for both regulated (GxP) and non-regulated (Non-GxP) environments.",
  },
  {
    image: "/images/industry/medicaldevice.png",
    title: "Medical Devices",
    link: "/medical-devices",
    subtitle:
      "Performing comprehensive validation lifecycle activities—planning, testing, documentation, and maintenance—to meet 21 CFR Part 11 and Annex 11 standards.",
  },
  {
    image: "/images/industry/pharma.png",
    title: "Pharmaceuticals",
    link: "/pharmaceuticals-industry",
    subtitle:
      "Conducting validated data transfer processes to ensure accuracy, completeness, and traceability during system upgrades or platform transitions.",
  },
  {
    image: "/images/industry/Biotechnology.png",
    title: "Biotechnology",
    link: "/biotechnology-industry",
    subtitle:
      "Delivering end-to-end software verification to ensure reliability, data integrity, and regulatory compliance across all development phases.",
  },
  {
    image: "/images/industry/Nutraceuticals.png",
    title: "Nutraceuticals",
    link: "/nutraceuticals",
    subtitle:
      "Delivering end-to-end software verification to ensure reliability, data integrity, and regulatory compliance across all development phases.",
  },
  {
    image: "/images/industry/Cannabis.png",
    title: "Cannabis",
    link: "/cannabis-industry",
    subtitle:
      "Delivering end-to-end software verification to ensure reliability, data integrity, and regulatory compliance across all development phases.",
  },
];

export const complianceList = [
  {
    image: "/images/services/services1.jpg",
    title: "Pharmaceutical Licensing Services",
    subtitle:
      "Delivering end-to-end software verification to ensure reliability, data integrity, and regulatory compliance across all development phases.",
    slug: "pharmaceutical-licensing-services",
  },
  {
    image: "/images/services/services2.jpg",
    title: "Equipment & Process Validation",
    subtitle:
      "Executing Installation, Operational, and Performance Qualification (IQ/OQ/PQ) for manufacturing and laboratory equipment to ensure consistent product quality.",
    slug: "equipment-process-validation",
  },
  {
    image: "/images/services/services3.jpg",
    title: "Pharmaceutical Training and Webinars",
    subtitle:
      "Providing validation services aligned with FDA, EMA, and WHO guidelines for both regulated (GxP) and non-regulated (Non-GxP) environments.",
    slug: "pharmaceutical-training-webinars",
  },
  {
    image: "/images/services/services4.jpg",
    title: "HVAC Installation and Qualification",
    subtitle:
      "Verifying controlled environments through particle count testing, airflow visualization, and temperature/humidity mapping for GMP compliance.",
    slug: "hvac-installation-qualification",
  },
  {
    image: "/images/services/services5.jpg",
    title: "Computer System Validation (CSV)",
    subtitle:
      "Performing comprehensive validation lifecycle activities—planning, testing, documentation, and maintenance—to meet 21 CFR Part 11 and Annex 11 standards.",
    slug: "computer-system-validation-csv",
  },
  {
    image: "/images/services/services6.jpg",
    title: "Data Migration & Qualification",
    subtitle:
      "Conducting validated data transfer processes to ensure accuracy, completeness, and traceability during system upgrades or platform transitions.",
    slug: "data-migration-qualification",
  },
  {
    image: "/images/services/services1.jpg",
    title: "Quality Management Solutions",
    subtitle:
      "Implementing and validating QMS platforms to streamline quality processes, CAPA management, and compliance reporting.",
    slug: "quality-management-solutions",
  },
  {
    image: "/images/services/services1.jpg",
    title: "Software Testing & Validation",
    subtitle:
      "Delivering end-to-end software verification to ensure reliability, data integrity, and regulatory compliance across all development phases.",
    slug: "software-testing-validation",
  },
];

