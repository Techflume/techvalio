"use client";

import React, { useState } from "react";
import Image from "next/image";
import Select from "react-select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { servicesList } from "@/lib/data"; // Your array as given

// Build dropdown options from servicesList
const contactServicesOptions = servicesList.map(service => ({
  value: service.title,
  label: service.title,
}));

export default function ContactUsSection() {
  const [selectedServices, setSelectedServices] = useState([]);

  function handleServicesChange(selected) {
    setSelectedServices(selected || []);
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-muted/30 py-10 px-4 " id="contact">
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

            {/* Multi-select Services dropdown */}
            <div>
              <label htmlFor="services" className="block text-sm font-medium mb-2 text-muted-foreground">
                Services interested in <span className="text-primary">*</span>
              </label>
              <Select
                inputId="services"
                name="services"
                options={contactServicesOptions}
                isMulti
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Select one or more services"
                value={selectedServices}
                onChange={handleServicesChange}
                required
              />
              <p className="text-xs mt-1 text-muted-foreground">Select multiple services as needed.</p>
            </div>

            {/* Phone Number */}
            <Input type="tel" placeholder="Phone number" required />

            {/* Message */}
            <Textarea placeholder="Write your message..." rows={4} required />

            {/* Submit Button */}
            <Button type="submit" className="w-full mt-4" size="lg">
              Send Message
            </Button>
          </form>
        </div>

        {/* Right: Image + Testimonial */}
        <div className="relative hidden md:block">
          <Image
            src="/images/banner/banner4.jpg"
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
      <style jsx global>{`
        /* Optional: Tailwind-style overlay for react-select for seamless integration */
        .react-select__control {
          @apply rounded-md border border-border bg-background text-muted-foreground min-h-[42px] py-1;
        }
        .react-select__multi-value {
          @apply bg-primary/10 text-primary font-medium;
        }
        .react-select__multi-value__label {
          @apply text-xs;
        }
        .react-select__multi-value__remove {
          @apply hover:bg-primary hover:text-white rounded-md;
        }
        .react-select__menu {
          @apply rounded-md shadow-lg border mt-2 p-1 z-50 bg-white dark:bg-card;
        }
        .react-select__option {
          @apply px-4 py-2 hover:bg-primary/10 cursor-pointer rounded;
        }
        .react-select__option--is-selected {
          @apply bg-primary text-primary-foreground;
        }
      `}</style>
    </section>
  );
}
