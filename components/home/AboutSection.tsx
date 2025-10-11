import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-background py-12 md:py-4 md:pt-10">
      <div className="container max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-4">
          About Techvalio
        </h2>
        <p className="max-w-5xl text-base md:text-lg text-muted-foreground mb-4">
          Techvalio specializes in [translate:software validation, regulatory compliance, and tailored technology solutions]. Trusted by clients worldwide, we help regulated businesses and startups achieve quality, efficiency, and audit-readiness. Our team blends deep industry knowledge with cutting-edge practices, making compliance seamless and innovation reliable.
        </p>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Bringing [translate:clarity, control, and compliance] to your digital growth journey.
        </p>
      </div>
    </section>
  );
}
