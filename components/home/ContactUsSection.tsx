"use client";

import React, { useState } from "react";
import Image from "next/image";
import Select, { MultiValue } from "react-select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { servicesList } from "@/lib/data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle, Send } from "lucide-react"; // ✅ Import icons

type ServiceOption = {
  value: string;
  label: string;
};

const contactServicesOptions: ServiceOption[] = servicesList.map(service => ({
  value: service.title,
  label: service.title,
}));

export default function ContactUsSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<MultiValue<ServiceOption>>([]);
  const [submitting, setSubmitting] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState<"success" | "error">("success");
  const [dialogMessage, setDialogMessage] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleServicesChange(selected: MultiValue<ServiceOption>) {
    setSelectedServices(selected || []);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return; // ensure one click only
    setSubmitting(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        services: selectedServices,
      }),
    });

    const result = await res.json();

    if (result.success) {
      setDialogType("success");
      setDialogMessage("Your message was sent! We will contact you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setSelectedServices([]);
    } else {
      setDialogType("error");
      setDialogMessage("Error sending message: " + result.error);
    }
    setOpenDialog(true);
    setSubmitting(false);
  }

  return (
    <>
      {/* Dialog for success/error */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent
          className={dialogType === "success"
            ? "bg-green-600 text-white px-6 py-8"
            : "bg-red-600 text-white px-6 py-8"}
          style={{ minWidth: 340 }}
        >
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-white">
              {dialogType === "success" ? (
                <>
                  <Send className="w-6 h-6 text-white" />
                  Message Sent
                </>
              ) : (
                <>
                  <CheckCircle className="w-6 h-6 text-white" />
                  Error
                </>
              )}
            </DialogTitle>
            <DialogDescription className="mt-2 text-white text-md">
              {dialogMessage}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-end mt-4">
            <Button
              onClick={() => setOpenDialog(false)}
              className="cursor-pointer"
              variant={dialogType === "success" ? "default" : "destructive"}
              style={{
                backgroundColor: dialogType === "success" ? "#fff" : "#fff",
                color: dialogType === "success" ? "#1d7a36" : "#b91c1c",
                fontWeight: 600
              }}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <section className="flex justify-center items-center min-h-screen bg-muted/30 py-10 px-4 " id="contact">
        <Card className="w-full max-w-5xl bg-white dark:bg-card shadow-xl border rounded-2xl overflow-hidden grid md:grid-cols-2">
          {/* Left: Contact Form */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-foreground">Chat with our team</h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Need help with something? Want a demo? Get in touch with our friendly team and we’ll respond within 2 hours.
            </p>
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <Input
                name="name"
                placeholder="Full name"
                required
                value={form.name}
                onChange={handleInputChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Work email"
                required
                value={form.email}
                onChange={handleInputChange}
              />
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
              <Input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                value={form.phone}
                onChange={handleInputChange}
              />
              <Textarea
                name="message"
                placeholder="Write your message..."
                rows={4}
                required
                value={form.message}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                className="w-full mt-4 cursor-pointer"
                size="lg"
                disabled={submitting}
                style={{ cursor: submitting ? "not-allowed" : "pointer", opacity: submitting ? 0.7 : 1 }}
              >
                {submitting ? "Sending..." : "Send Message"}
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
    </>
  );
}
