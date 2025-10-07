import React from 'react'
import { AnimatedDiv } from '../animated-div';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { CheckCircle } from 'lucide-react';
import { Badge } from '../ui/badge';
import { premiumParts } from "@/lib/data";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';


export default function PremiumPartsSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-car");

  return (
    <section
      id="parts"
      className="relative py-16 md:py-24  bg-gradient-to-b from-blue-50 to-primary/40 overflow-hidden flex justify-center"
    >
      {/* Curvy wave at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.09C212.09 68.86 106 116.91 0 120V0h1200v27.35c-82.87 26.4-177.16 45.93-267.7 38.21-96.8-8.24-186.24-52.59-284.26-59.28-111.19-7.36-219.44 32.21-326.65 49.81z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Our End-to-End Validation Service Modules
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            We cover the entire validation lifecycle, from initial planning and requirements review to final sign-off and ongoing change control.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {premiumParts.map((part, index) => {
            const partImage = PlaceHolderImages.find(
              (p) => p.id === part.imageId
            );
            return (
              <AnimatedDiv
                key={part.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full group bg-card/50 backdrop-blur-sm border-primary/10">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video w-full overflow-hidden">
                      {partImage && (
                        <Image
                          src={partImage.imageUrl}
                          alt={part.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          data-ai-hint={partImage.imageHint}
                        />
                      )}
                      <Badge
                        variant="secondary"
                        className="absolute top-4 right-4 bg-primary text-primary-foreground"
                      >
                        {part.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline text-xl">
                      {part.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground">
                      {part.description}
                    </CardDescription>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {part.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            );
          })}
        </div>
      </div>
    </section>
  )
}
