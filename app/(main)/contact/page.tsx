"use client";

import { motion } from "framer-motion";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";


export default function ContactUsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-muted py-16 border-b border-border text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold mb-3 text-foreground"
          initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}>
          Contact Us
        </motion.h1>
        <motion.div
          className="text-muted-foreground text-base"
          initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          Home / <span className="text-primary font-semibold">Contact Us</span>
        </motion.div>
      </section>

      {/* Main grid */}
      <main className="container mx-auto py-16 grid md:grid-cols-3 gap-14 items-start">
        {/* Form left */}
        <motion.div
          className="md:col-span-2 bg-white shadow-xl rounded-3xl p-12 border"
          initial={{ y: 48, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.09 }}>
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}>
            Get Your <span className="text-primary italic">Free Quote Today!</span>
          </motion.h2>
          <form className="mt-7 space-y-5">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
              <Input placeholder="Your Name" required />
              <Input type="email" placeholder="Email" required />
            </div>
            <Input  type="number" placeholder="Phone" required />
            <Input placeholder="Subject" required />
            <Textarea rows={10} placeholder="Your Message" required />
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}>
              <Button size="lg" className="w-[200px] mt-2 rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl transition">
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>
        {/* Info Right */}
        <motion.div
          className="bg-primary/95 text-white rounded-3xl shadow-2xl p-10 border border-primary/50 flex flex-col gap-7"
          initial={{ y: 70, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div>
            <div className="flex items-center gap-3 mb-2 text-lg font-semibold">
              <MapPin className="w-6 h-6" /> Address
            </div>
            <div className="ml-8 text-sm">4517 Washington Ave.<br />Manchester, Kentucky 39495</div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2 text-lg font-semibold">
              <Phone className="w-6 h-6" /> Contact
            </div>
            <div className="ml-8 text-sm">Phone: +0123-456-789<br />Email: example@gmail.com</div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2 text-lg font-semibold">
              <Clock className="w-6 h-6" /> Open Time
            </div>
            <div className="ml-8 text-sm">Mon – Fri: 10:00 – 20:00<br />Sat – Sun: 11:00 – 18:00</div>
          </div>
          <div>
            <div className="font-bold text-lg mb-2">Stay Connected</div>
            <div className="flex gap-3 ml-2">
              <a href="#" className="bg-white/15 hover:bg-white/30 rounded-full p-2 transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="bg-white/15 hover:bg-white/30 rounded-full p-2 transition"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="bg-white/15 hover:bg-white/30 rounded-full p-2 transition"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="bg-white/15 hover:bg-white/30 rounded-full p-2 transition"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Highlights bar */}
      <section className="w-full bg-white border-t py-14">
        <div className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-24 justify-between">
          {[
            {
              icon: <svg width="28" height="28" fill="none"><path d="M15 10V7a3 3 0 00-6 0v3m12 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              title: "Reasonable Prices",
              desc: "Quality design at affordable rates."
            },
            {
              icon: <svg width="28" height="28" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 100 8h8a4 4 0 004-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              title: "Timely Project Delivery",
              desc: "On-time project completion."
            },
            {
              icon: <svg width="28" height="28" fill="none"><path d="M9 7V6a6 6 0 1112 0v1m0 4h-6m8 4a2 2 0 01-2 2 2 2 0 01-2-2m4 0a4 4 0 00-4-4H4a4 4 0 00-4 4v1a4 4 0 004 4h8a4 4 0 004-4v-1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              title: "Professional Team",
              desc: "Expert architects, top results."
            }
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              className="flex items-center gap-4 bg-muted/70 rounded-xl px-7 py-8 border hover:-translate-y-2 shadow transition duration-300"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.09 }}
            >
              <span className="bg-primary/10 text-primary rounded-full p-3 flex items-center justify-center shadow">{item.icon}</span>
              <div>
                <div className="font-bold">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-muted py-9 text-muted-foreground text-center mt-8">
        <div className="container mx-auto">
          © {new Date().getFullYear()} <span className="font-semibold text-primary">YourBrand</span>. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
