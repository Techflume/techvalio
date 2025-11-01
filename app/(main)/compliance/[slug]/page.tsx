"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Image from "next/image";
import { motion } from "framer-motion";

// Dummy placeholder images (replace with real as wanted)
const heroImg = "/images/banner/banner3.jpg";
const heroLogos = [
  "/images/iso-logo.png",
  "/images/fda-logo.png",
  "/images/gxp-logo.png",
  "/images/gmp-logo.png"
];

const faqs = [
  {
    question: "What is FDA regulatory consulting?",
    answer:
      "Expert support, document preparation, and process validation so your product clears the US or global FDA requirements.",
  },
  {
    question: "When do you need a consultant?",
    answer:
      "Before product launch, when planning QMS, or facing a regulatory hurdle or audit.",
  },
];

export default function ComplianceDemoPage() {
  return (
    <div>
      {/* HERO BLOCK */}
      <section className="bg-[#3F388F]">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex-1 py-6"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 drop-shadow-lg">FDA Regulatory and Compliance Consulting</h1>
            <div className="text-white/90 text-lg font-medium mb-7 max-w-lg">
              We support MedTech & Pharma clients with regulatory consulting, compliance strategies, and full QA/QMS support.
            </div>
            <div className="flex gap-6 mb-1">
              {heroLogos.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.12 * i }}
                >
                  <Image src={src} width={40} height={40} alt="logo"/>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={heroImg}
              alt="Compliance Team"
              width={495}
              height={420}
              className="rounded-lg object-cover shadow-lg border-4 border-white/20"
            />
          </motion.div>
        </div>
      </section>

      {/* TOPICS Q: A */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-lg font-bold mb-2 text-primary">What is the role of the FDA in marketing your medical device?</h3>
            <div className="text-muted-foreground text-base shadow-sm p-3 bg-muted/50 rounded-xl border border-muted">
              The FDA ensures medical device safety and efficacy. Our experts help interpret requirements, submit clearance documents, and strategize for a US launch.
            </div>
          </motion.div>
          <motion.div
            className="flex-1 border-l md:pl-8 pt-4 md:pt-0 border-muted"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.13 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-2 text-primary">
              How can we help you release your medical device to the market under the FDA’s regulations?
            </h3>
            <div className="text-muted-foreground text-base shadow-sm p-3 bg-muted/50 rounded-xl border border-muted">
              We’ll map the right regulatory path, support technical files, and provide full lifecycle support—from GAP analysis to launch.
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS/ICONS */}
      <section className="bg-[#F3F2F7] py-14">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-xl md:text-2xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >How can you benefit from our consulting services?</motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "📜", title: "Lower regulatory risk", desc: "Clear documents for every regulatory step." },
              { icon: "⏱️", title: "Lean time to market", desc: "Accelerated product realization in all phases." },
              { icon: "🧬", title: "Result-focused strategy", desc: "Competence and dedication for every client." },
              { icon: "🔏", title: "Regulatory vigilance", desc: "Global reach and compliance oversight." }
            ].map((benefit, i) =>
              <motion.div
                key={benefit.title}
                className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 border border-primary/10"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">{benefit.icon}</div>
                <div className="font-semibold text-primary mb-1">{benefit.title}</div>
                <div className="text-sm text-muted-foreground">{benefit.desc}</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* YELLOW FEATURE CALL TO ACTION */}
      <section className="bg-[#F7C348] py-12 animate-in fade-in duration-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-2 text-[#3F388F]">Find out if your product is a medical device under FDA regulations</h3>
            <div className="text-base text-[#343456]">
              Unsure how your product is regulated by the FDA? Let our experts clarify with a rapid risk and classification assessment—before you invest.
            </div>
          </motion.div>
          <motion.div
            className="w-60 h-32 bg-white/80 border border-yellow-400 rounded-lg flex items-center justify-center text-gray-400 text-xl shadow-inner"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            viewport={{ once: true }}
          >
            [Insert Device Image]
          </motion.div>
        </div>
      </section>

      {/* OUR PROCESS with blue bg */}
      <section className="bg-[#3F388F] py-11 text-white relative">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-xl md:text-2xl font-bold mb-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.43 }}
            viewport={{ once: true }}
          >Our process</motion.h2>
          <ul className="space-y-6 text-base pl-4">
            {[
              { label: "Initiation:", text: "Initial call, project scoping, and regulatory requirements review." },
              { label: "Process documentation:", text: "Gap analysis, validation plan, and standard operating procedures." },
              { label: "Submission:", text: "Draft FDA correspondence and complete application files for you." },
              { label: "Post-approval phase:", text: "Training/consulting and QMS strategy for ongoing compliance." }
            ].map((p, i) =>
              <motion.li
                key={p.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <span className="font-semibold">{p.label} </span>{p.text}
              </motion.li>
            )}
          </ul>
        </div>
      </section>

      {/* STATS BLOCK */}
      <section className="bg-[#3F388F] pb-10 text-white">
        <motion.div
          className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-8 pt-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div><span className="text-3xl font-bold animate-in">{'10+'}</span><br />years experience</div>
          <div><span className="text-3xl font-bold animate-in">{'200+'}</span><br />medical products</div>
          <div><span className="text-3xl font-bold animate-in">{'50+'}</span><br />global markets</div>
        </motion.div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-white py-12">
        <motion.div
          className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <div className="flex-1 flex justify-center">
            <div className="rounded-full w-28 h-28 overflow-hidden bg-muted/60 mx-auto md:mx-0 flex items-center justify-center border-4 border-primary/20 shadow-md">
              <Image src="/images/team/client-fda.jpg" alt="testimonial client" width={112} height={112} className="object-cover" />
            </div>
          </div>
          <div className="flex-[2] text-center md:text-left">
            <p className="italic text-xl text-primary max-w-2xl mx-auto font-semibold">"Working for the MedTech sector allows me to continuously challenge myself."</p>
            <div className="text-muted-foreground mt-2">— Dr. Erika Klein, Compliance Lead</div>
          </div>
        </motion.div>
      </section>

      {/* Q&A - FAQ */}
      <section className="bg-[#F3F2F7] py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-7 text-center text-primary">Q&A</h2>
            <Accordion type="multiple" className="bg-white/80 rounded-2xl border shadow-lg w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem value={`faq-${idx}`} key={faq.question}>
                  <AccordionTrigger className="text-lg font-semibold px-7 py-5 hover:bg-primary/5 data-[state=open]:bg-primary/10 transition border-b border-muted">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-7 py-5 text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* BOTTOM WIDE FOOTER */}
      <footer className="bg-[#3F388F] text-white py-8">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.49 }}
        >
          <div className="font-bold text-lg mb-3">Ready for compliance clarity?</div>
          <div>Contact Techvalio for a free pre-assessment or consultation.</div>
        </motion.div>
      </footer>
    </div>
  );
}
