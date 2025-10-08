import { AnimatedDiv } from '@/components/animated-div'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { complianceList } from '@/lib/data' // Add your data array!
import Image from 'next/image'
import React from 'react'

export default function CompliancePage() {
  return (
    <div>
      {/* Banner Section */}
      <section className="relative h-[320px] md:h-[380px] flex items-center justify-center bg-gradient-to-b from-primary/70 to-primary/40">
        <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white text-center z-10">
          Compliance
        </h1>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
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
      </section>

      {/* Grid Section */}
      <section
        className="relative py-16 md:py-24 bg-gradient-to-b from-background to-primary/40 overflow-hidden flex justify-center"
      >
        <div className="container relative z-10">
          <div className="text-center mb-12 flex flex-col items-center justify-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center">
              Compliance Solutions & Expertise
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg text-center">
              Techvalio delivers fully compliant solutions, supporting regulatory requirements and quality standards for your business success.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {complianceList.map((compliance, index) => (
              <AnimatedDiv
                key={compliance.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <Card className="h-full text-center transition-all hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-primary/10 flex flex-col items-center justify-center">
                  <CardHeader className="flex flex-col items-center justify-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center">
                      <Image
                        src={compliance.image}
                        alt={compliance.title}
                        className="object-cover h-full w-full"
                        loading="lazy"
                        width={84}
                        height={84}
                      />
                    </div>
                    <CardTitle className="font-headline mt-2 capitalize text-center">
                      {compliance.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center">
                    <p className="text-muted-foreground text-sm text-center">
                      {compliance.subtitle}
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
