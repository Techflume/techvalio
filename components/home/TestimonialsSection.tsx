import React from 'react'
import { AnimatedDiv } from '../animated-div';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {  testimonials } from "@/lib/data";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TestimonialsSection() {
  return (
   <section
    id="testimonials"
    className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/40 flex justify-center items-center"
  >
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          What Our Customers Say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
          Join thousands of satisfied customers who trust Global Auto Connect
          for their auto part needs.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => {
          const avatarImage = PlaceHolderImages.find(
            (p) => p.id === testimonial.avatarId
          );
          return (
            <AnimatedDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6 flex-grow">
                  <div className="flex text-primary mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground">
                    <p>"{testimonial.quote}"</p>
                  </blockquote>
                </CardContent>
                <CardHeader className="flex flex-row items-center gap-4 pt-0">
                  {avatarImage && (
                    <Avatar>
                      <AvatarImage
                        src={avatarImage.imageUrl}
                        alt={testimonial.author}
                        data-ai-hint={avatarImage.imageHint}
                      />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <CardTitle className="text-base font-semibold">
                      {testimonial.author}
                    </CardTitle>
                    <CardDescription>{testimonial.location}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </AnimatedDiv>
          );
        })}
      </div>
      <div className="text-center mt-12">
        <div className="inline-flex items-center justify-center rounded-full bg-background/50 backdrop-blur-sm p-4 shadow-md border-primary/10 border">
          <p className="font-bold text-lg">4.9 / 5</p>
          <div className="flex text-primary ml-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Based on 12,450+ verified reviews
        </p>
      </div>
    </div>
  </section>
  )
}
