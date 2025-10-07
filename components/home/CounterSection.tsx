import React from 'react'
import { AnimatedDiv } from '../animated-div'
import { AnimatedCounter } from '../animated-counter'
import { stats } from "@/lib/data";

export default function CounterSection() {
  
  return (
    <section className="py-16 md:py-24 flex justify-center">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <AnimatedDiv
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-center space-x-2">
              <stat.icon className="h-8 w-8 text-primary" />
              <p className="text-4xl font-bold font-headline text-foreground">
                <AnimatedCounter value={stat.value} />
                {stat.suffix}
              </p>
            </div>
            <p className="mt-2 text-muted-foreground">{stat.label}</p>
          </AnimatedDiv>
        ))}
      </div>
    </div>
  </section>
  )
}
