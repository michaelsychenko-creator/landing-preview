"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {aboutValues} from "@/lib/landing-content";
import {itemVariants, listVariants, revealViewport} from "@/lib/landing-motion";

export function AboutValues() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(255,145,77,0.18), transparent 42%), radial-gradient(circle at 88% 80%, rgba(255,255,255,0.06), transparent 36%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            {aboutValues.eyebrow}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {aboutValues.title}
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-base leading-relaxed text-white/80">
            {aboutValues.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <Carousel opts={{align: "start", loop: true}} className="w-full">
            <CarouselContent className="-ml-4">
              {aboutValues.gallery.map((src) => (
                <CarouselItem key={src} className="basis-[88%] pl-4 sm:basis-1/2 lg:basis-[42%]">
                  <motion.div variants={itemVariants} className="overflow-hidden rounded-2xl">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src={src}
                        alt="VLC Apart aparthotel interior"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 88vw, (max-width: 1024px) 50vw, 42vw"
                      />
                    </AspectRatio>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-end gap-2">
              <CarouselPrevious
                className="static inset-auto size-9 translate-none rounded-full border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                aria-label="Previous photo"
              />
              <CarouselNext
                className="static inset-auto size-9 translate-none rounded-full border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                aria-label="Next photo"
              />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
