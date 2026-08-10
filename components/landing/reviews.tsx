"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/lib/landing-content";
import { itemVariants, revealViewport } from "@/lib/landing-motion";

export function Reviews() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="reveal-on-scroll mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              Guest Reviews
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              What our guests say
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-semibold text-navy">5.0</span>
            <Star className="size-5 fill-primary text-primary" />
            <span className="text-sm text-navy-muted">based on 248 reviews</span>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 w-full"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review) => (
                <CarouselItem
                  key={review.name + review.meta}
                  className="basis-[88%] pl-4 sm:basis-[48%] lg:basis-[38%]"
                >
                  <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy/7 bg-cream p-7">
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className="flex items-center gap-0.5"
                        aria-label="5 stars"
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="size-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <span
                        aria-hidden
                        className="font-heading text-5xl leading-none text-primary/28 select-none"
                      >
                        &ldquo;
                      </span>
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-muted">
                      {review.quote}
                    </p>

                    <div className="mt-7 flex items-center gap-3 border-t border-navy/6 pt-5">
                      <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-cream ring-1 ring-inset ring-navy/8">
                        <Image
                          src="/images/ok.webp"
                          alt=""
                          width={48}
                          height={48}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold tracking-tight text-navy">
                          {review.name}
                        </p>
                        <p className="mt-0.5 text-xs text-navy-muted">
                          {review.meta}
                        </p>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-6 flex justify-end gap-2">
              <CarouselPrevious
                className="static inset-auto size-7 translate-none rounded-full border-navy/15"
                aria-label="Previous slide"
              />
              <CarouselNext
                className="static inset-auto size-7 translate-none rounded-full border-navy/15"
                aria-label="Next slide"
              />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
