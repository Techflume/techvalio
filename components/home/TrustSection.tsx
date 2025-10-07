import { CheckCircle } from 'lucide-react'
import React from 'react'
import { Separator } from '../ui/separator'
import {
 
  trustFeatures,
  certifications,
  securityFeatures,

} from "@/lib/data";

export default function TrustSection() {
    return (
        <section
            id="trust"
           
            className="relative py-16 md:py-24 bg-gradient-to-b from-blue-50 to-primary/40 overflow-hidden flex justify-center items-center"
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
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                       Compliance Assurance & Validation Trust
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                        Our services provide the verifiable evidence required to build trust with auditors, stakeholders, and end-users in regulated environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {trustFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-medium text-foreground">
                                    {feature.title}
                                </h4>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <Separator className="my-12 bg-primary/10" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="font-semibold text-xl mb-4">
                            Industry Certifications
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {certifications.map((cert, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <div className="p-2 bg-secondary rounded-full">
                                        <cert.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <span className="font-medium">{cert.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mb-4">Security &amp; Trust</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {securityFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-primary" />
                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
