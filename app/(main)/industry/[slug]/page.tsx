"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ShieldCheck, Users, MessageCircle } from "lucide-react";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

type Highlight = { icon: JSX.Element; title: string; desc: string; };
type Service = { title: string; desc: string; };
type App = { title: string; desc: string; };
type Stat = { label: string; value: string; };
type WhyChoose = { title: string; desc: string; };
type CaseStudy = { company: string; desc: string; author: string; img: string; };
type FAQ = { q: string; a: string; };

const industryData = {
  hero: {
    title: "Manufacturing",
    subtitle: "Leading Validation & Digital Transformation for Manufacturing",
    desc: "Techvalio blends compliance, automation, and digital integration for robust manufacturing innovation. From seamless validation to smarter partner and customer portals, our seasoned team delivers future-ready manufacturing solutions, every time.",
    heroImg: "/images/banner/banner1.jpg",
  },
  highlights: [
    { icon: <Sparkles className="text-primary" size={32} />, title: "Seamless Integration", desc: "100% Salesforce integration with your ERP, CRM, and supply chain." },
    { icon: <ShieldCheck className="text-primary" size={32} />, title: "Better Support", desc: "Automated validation, smart compliance documentation, and self-serve partner support." },
    { icon: <Users className="text-primary" size={32} />, title: "Partner Management", desc: "Streamlined onboarding, public partner marketplace, event & feedback channels." },
    { icon: <MessageCircle className="text-primary" size={32} />, title: "Continuous Feedback", desc: "Collect feedback, share knowledge, and optimize services across your entire network." },
  ],
  services: [
    { title: "Support Portal", desc: "Self-service solutions to empower clients and reduce operational bottlenecks." },
    { title: "PRM Portal", desc: "Partner Relationship Management portals that drive collaboration, data-driven engagement, and compliance visibility." },
    { title: "B2B Ecommerce", desc: "Secure, digitized B2B sales—quotes, ordering, renewals, and supply chain integration." },
  ],
  apps: [
    { title: "Valio Partner Network", desc: "All-in-one marketplace for your channel and vendor partners. Salesforce integrated." },
    { title: "Valio Labs Ideas", desc: "Crowdsource innovations, gather process feedback, and route the best ideas to your dev and compliance teams." },
    { title: "Compliance Docs Pro", desc: "Knowledge/document management for audits, ops, SOPs—customized for manufacturing." },
  ],
  stats: [
    { label: "Projects Delivered", value: "140+" },
    { label: "Validated Sites", value: "60+" },
    { label: "Audit Pass Rate", value: "100%" },
    { label: "Industry Experts", value: "12+" },
  ],
  whyChoose: [
    { title: "Expertise", desc: "Decades of hands-on experience in manufacturing and digital transformation." },
    { title: "Customization", desc: "Solutions tailored for your business—from portals to automation and analytics." },
    { title: "Client Satisfaction", desc: "Long-term partnership, rapid support, and continuous value-add features." },
    { title: "Innovation", desc: "Stay ahead with Techvalio and the newest validation, quality, and digital tech." },
  ],
  caseStudy: {
    company: "Acme Manufacturing",
    desc: "Acme's facilities gained real-time compliance visibility, streamlined partner onboarding, and automated feedback thanks to Techvalio’s integrated validation tech stack.",
    author: "Meera Nair, Digital Compliance Lead",
    img: "/images/team/techvalio-client.jpg",
  },
  trustedBy: [
    "/images/brands/logo1.png",
    "/images/brands/logo2.png",
    "/images/brands/logo3.png",
    "/images/brands/logo4.png",
  ],
  faqs: [
    {
      q: "What is Manufacturing Cloud validation?",
      a: "It’s the specialized validation process for Manufacturing Cloud, ensuring regulatory compliance and seamless integration with operations, sales, and ERP.",
    },
    {
      q: "How quickly can Techvalio deliver?",
      a: "Typical timelines for a full implementation are 4–12 weeks, depending on customization and scope.",
    },
  ],
};

const IndustryPage: React.FC = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
        <Image
          src={industryData.hero.heroImg}
          alt={`Hero Manufacturing`}
          fill
          className="object-cover z-0"
          style={{ opacity: 0.7 }}
        />
      
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <motion.h1
            className="text-white font-bold text-4xl md:text-5xl tracking-tight mb-4"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {industryData.hero.title}
          </motion.h1>
          <motion.div
            className="text-white/90 font-semibold text-lg md:text-xl mb-2"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {industryData.hero.subtitle}
          </motion.div>
          <motion.div
            className="text-white/70 text-sm md:text-base"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            {industryData.hero.desc}
          </motion.div>
        </div>
      </section>

      {/* Intro Section: Left image/icon, right text */}
<section className="container mx-auto px-4 py-10 ">
      <div className=" inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background/95 z-0"></div>
  <div className="flex flex-col md:flex-row gap-7 items-center">
    {/* Left: Icon or image (replace with your icon or illustration) */}
    <div className="md:w-1/2 flex justify-center">
      <div className="bg-primary/10 rounded-2xl flex items-center justify-center w-40 h-40 md:w-64 md:h-64">
        <Sparkles size={100} className="text-primary" />
        {/* or <Image src="/images/industry/feature-illustration.png" ... /> */}
      </div>
    </div>
    {/* Right: Text */}
    <div className="md:w-1/2">
      <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">
        The Techvalio Manufacturing Advantage
      </h2>
      <p className="text-lg text-muted-foreground mb-3">
        Techvalio empowers manufacturing leaders with compliance, digital transformation, and seamless integration across ERP, CRM, and shop floor tools.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Faster validation, rapid digital onboarding</li>
        <li>Real-time regulatory reporting</li>
        <li>Audit-ready documentation & support</li>
      </ul>
    </div>
  </div>
</section>


      {/* Highlights */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {industryData.highlights.map((item, i) => (
            <Card key={item.title} className="flex flex-col items-center py-9 px-5 gap-2 shadow-md h-full">
              <div className="mb-4">{item.icon}</div>
              <CardTitle className="mb-2 text-primary">{item.title}</CardTitle>
              <CardContent className="text-muted-foreground text-center px-0 pb-0">
                {item.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-8">Our Services for Manufacturing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {industryData.services.map((service, i) => (
            <Card key={service.title} className="group cursor-pointer hover:shadow-lg border-primary/15 hover:border-primary">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{service.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Solutions / Native Apps */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-8">Native Apps & Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {industryData.apps.map((app, i) => (
            <Card key={app.title} className="group cursor-pointer hover:shadow-lg border-primary/15 hover:border-primary">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{app.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{app.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Separator with stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {industryData.stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="font-headline text-2xl md:text-3xl text-primary font-bold">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* Why Choose Us accordion */}
     <section className="container mx-auto px-2 md:px-6 py-14">
  <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-7">Why Choose Us?</h2>
  <div className="bg-white shadow-md border rounded-2xl overflow-hidden w-full">
    <Accordion type="multiple" className="w-full">
      {industryData.whyChoose.map((why, i) => (
        <AccordionItem key={why.title} value={why.title}>
          <AccordionTrigger className="text-lg font-bold px-8 py-5 hover:bg-primary/10 data-[state=open]:bg-primary/10 transition">
            {why.title}
          </AccordionTrigger>
          <AccordionContent className="bg-primary/5 px-8 py-5 text-base text-muted-foreground">
            {why.desc}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
</section>


      {/* Case Study */}
      <section className="container mx-auto px-4 py-14">
        <Card className="flex flex-col md:flex-row items-center p-7 gap-7 bg-gradient-to-l from-card/80 to-primary/10 border-primary/20 shadow-md">
          <Image src={industryData.caseStudy.img} width={90} height={90} alt="Case Study" className="rounded-full object-cover" />
          <div>
            <CardTitle className="text-primary">{industryData.caseStudy.company}</CardTitle>
            <CardDescription className="mb-2">{industryData.caseStudy.desc}</CardDescription>
            <div className="text-sm text-muted-foreground">{`— ${industryData.caseStudy.author}`}</div>
          </div>
        </Card>
      </section>

      {/* Trusted Brands */}
      <section className="container mx-auto px-4 pt-4 pb-12">
        <div className="flex flex-wrap gap-8 justify-center items-center">
          {industryData.trustedBy.map((logo, i) => (
            <Image src={logo} key={i} alt="Brand" width={124} height={40} className="object-contain grayscale opacity-80" />
          ))}
        </div>
      </section>

      {/* FAQ */}
    <section className="container mx-auto px-2 md:px-6 py-14">
  <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-7 text-center">FAQ</h2>
  <div className="bg-white shadow-md border rounded-2xl overflow-hidden w-full">
    <Accordion type="multiple" className="w-full">
      {industryData.faqs.map((faq, i) => (
        <AccordionItem key={faq.q} value={faq.q}>
          <AccordionTrigger className="text-lg font-semibold px-8 py-5 hover:bg-primary/10 data-[state=open]:bg-primary/10 transition">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="bg-primary/5 px-8 py-5 text-base text-muted-foreground">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
</section>

    </div>
  );
};

export default IndustryPage;
