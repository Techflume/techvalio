"use client";

import React from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Textarea } from "../ui/textarea";

export default function ContactUsSection() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-muted/30 py-10 px-4">
      <Card className="w-full max-w-5xl bg-white dark:bg-card shadow-xl border rounded-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left: Contact Form */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-foreground">Chat with our team</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Need help with something? Want a demo? Get in touch with our friendly team and we’ll respond within 2 hours.
          </p>

          <form className="mt-8 space-y-5">
            {/* Full Name */}
            <Input placeholder="Full name" required />

            {/* Work Email */}
            <Input type="email" placeholder="Work email" required />

            {/* Phone Number */}
            <Input type="tel" placeholder="Phone number" required />

            {/* Message */}
            <Textarea
              placeholder="Write your message..."
              rows={4}
              required
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full mt-4" size="lg">
              Send Message
            </Button>
          </form>
        </div>

        {/* Right: Image + Text */}
        <div className="relative hidden md:block">
          <Image
            src="/images/banner/banner4.jpg" // replace with your actual image path
            alt="Contact visual"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-10 left-10 text-white max-w-xs">
            <h3 className="text-lg font-semibold leading-snug">
              “Our software helps manage cash flow, financial reporting and payroll with ease.
              It’s a great solution for startups looking for an efficient way to manage their finances all-in-one.”
            </h3>

            <p className="mt-4 text-sm font-medium">Maya Rothwell</p>
            <p className="text-xs text-white/70">Founder & CEO, Open Ventures</p>
          </div>
        </div>
      </Card>
    </section>
  );
}
