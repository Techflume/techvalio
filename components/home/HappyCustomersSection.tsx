import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HappyCustomersSection() {

    const engineDetailImage = PlaceHolderImages.find(
        (p) => p.id === "engine-detail"
    );
    return (
        <section className="py-16 md:py-24 flex justify-center items-center"
            style={{
                backgroundImage: `
        linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
      `,
                backgroundSize: "20px 20px, 20px 20px, 20px 20px",
                backgroundPosition: "0 0, 0 0, 0 0",
            }}
        >
            <div className="container">
                <div className="relative rounded-lg overflow-hidden p-8 md:p-12 text-center text-primary-foreground">
                    {engineDetailImage && (
                        <Image
                            src={engineDetailImage.imageUrl}
                            alt={engineDetailImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={engineDetailImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-primary/90"></div>
                    <div className="relative z-10">
                        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                            Ready to Launch with Confidence?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl md:text-lg">
                            Ensure your software is **compliant, secure, and deployment-ready**. Contact Techvalio today for a consultation tailored to your regulated market needs.
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <Button
                                asChild
                                size="lg"
                                variant="secondary"
                                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                            >
                                <Link href="#contact">Request a Free Consultation</Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className=" text-primary-foreground bg-primary-foreground/10"
                            >
                                <Link href="#services">View Full Service Modules</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
