import React from 'react'
import { AnimatedDiv } from '../animated-div'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { whyChooseUsFeatures } from "@/lib/data";

export default function WhyChooseUsSection() {
    return (
        <div>
            <section
                id="why-us"
                className="relative py-16 md:py-24 bg-gradient-to-b from-background to-primary/40 overflow-hidden flex justify-center"
            >
                {/* Curvy wave at bottom */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
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
                            Techvalio’s Validation Differentiators
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                            We go beyond simple testing. Our specialized approach guarantees your software is not just functional, but compliant, future-proof, and audit-ready from day one.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {whyChooseUsFeatures.map((feature, index) => (
                            <AnimatedDiv
                                key={feature.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full text-center transition-all hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-primary/10">
                                    <CardHeader>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <feature.icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="font-headline mt-4">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm">
                                            {feature.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </AnimatedDiv>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
