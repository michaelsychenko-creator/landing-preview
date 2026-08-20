"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { hotels } from "@/lib/landing-content";
import {
  itemVariants,
  listVariants,
  revealViewport,
} from "@/lib/landing-motion";

const spring = {
  type: "spring" as const,
  stiffness: 420,
  damping: 28,
  mass: 0.7,
};

const cardHover = {
  rest: {
    y: 0,
    borderColor: "rgba(23, 42, 73, 0.07)",
    boxShadow:
      "0 1px 0 rgba(23, 42, 73, 0.03), 0 28px 50px -28px rgba(23, 42, 73, 0)",
  },
  hover: {
    y: -6,
    borderColor: "rgba(255, 145, 77, 0.35)",
    boxShadow:
      "0 1px 0 rgba(23, 42, 73, 0.03), 0 28px 50px -28px rgba(23, 42, 73, 0.45)",
  },
};

const imageHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

type Hotel = (typeof hotels)[number];

export function HotelsDirectory() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.ul
          className="space-y-8"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          {hotels.map((hotel, index) => (
            <motion.li key={hotel.name} variants={itemVariants}>
              <HotelCard hotel={hotel} index={index + 1} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function HotelCard({ hotel, index }: { hotel: Hotel; index: number }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.location)}`;

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={cardHover}
      transition={{
        y: spring,
        borderColor: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        boxShadow: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      }}
      className="overflow-hidden rounded-2xl border bg-white"
    >
      <Card className="gap-0 overflow-hidden rounded-2xl py-0 ring-0">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div className="flex flex-col p-6 sm:p-8">
            <CardHeader className="gap-3 p-0">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="h-7 min-w-7 rounded-full px-2.5 text-sm font-semibold">
                  {index}
                </Badge>
                <Badge
                  variant="secondary"
                  className="h-7 gap-1 bg-cream px-2.5 text-navy"
                >
                  <Users className="size-3.5" />
                  Up to {hotel.capacity} guests
                </Badge>
              </div>
              <p className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-muted">
                <MapPin className="size-3.5 text-primary" />
                {hotel.location}
              </p>
              <CardTitle className="font-heading text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                {hotel.name}
              </CardTitle>
              <p className="text-xs tracking-wide text-navy/60">{hotel.tags}</p>
            </CardHeader>

            <CardContent className="mt-4 flex-1 p-0">
              <CardDescription className="text-sm leading-relaxed text-navy-muted sm:text-base">
                {hotel.longDescription}
              </CardDescription>

              <div className="mt-6 flex flex-wrap gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-navy/15 text-navy"
                    >
                      <MapPin className="size-4" />
                      View on Map
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>{hotel.name}</DialogTitle>
                      <DialogDescription>
                        {hotel.location}
                      </DialogDescription>
                    </DialogHeader>
                    <p className="text-sm leading-relaxed text-navy-muted">
                      Open Google Maps to see this aparthotel neighbourhood and
                      nearby connections.
                    </p>
                    <DialogFooter>
                      <Button asChild className="text-white">
                        <a href={mapsUrl} target="_blank" rel="noreferrer">
                          Open in Google Maps
                          <ExternalLink className="size-4" />
                        </a>
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Button asChild className="text-white">
                  <a href="#booking">
                    Book Now
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            </CardContent>

            <Separator className="my-6 bg-navy/10" />

            <CardFooter className="mt-auto justify-between gap-3 rounded-none border-0 bg-transparent p-0">
              <p className="text-sm text-navy-muted">
                from{" "}
                <span className="font-heading text-3xl font-semibold text-navy">
                  {hotel.price}
                </span>
                <span>/night</span>
              </p>
              <Button
                asChild
                variant="ghost"
                className="gap-2 text-navy hover:bg-cream hover:text-primary"
              >
                <a href="#" aria-label={`Learn more about ${hotel.name}`}>
                  Learn More
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </CardFooter>
          </div>

          <HotelGallery hotel={hotel} />
        </div>
      </Card>
    </motion.div>
  );
}

function HotelGallery({ hotel }: { hotel: Hotel }) {
  return (
    <div className="relative min-h-64 overflow-hidden bg-cream lg:min-h-full">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="h-full"
      >
        <CarouselContent>
          {hotel.gallery.map((src, i) => (
            <CarouselItem key={src + i} className="basis-[88%] sm:basis-1/2">
              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full lg:min-h-104">
                <motion.div
                  variants={imageHover}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={src}
                    alt={`${hotel.name} photo ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 50vw, 28vw"
                  />
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 border-white/70 bg-white/90 text-navy hover:bg-white" />
        <CarouselNext className="right-3 border-white/70 bg-white/90 text-navy hover:bg-white" />
        <CarouselDots />
      </Carousel>
    </div>
  );
}

function CarouselDots() {
  const { api } = useCarousel();
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const sync = (embla: CarouselApi) => {
      if (!embla) return;
      setCount(embla.scrollSnapList().length);
      setSelected(embla.selectedScrollSnap());
    };

    sync(api);
    api.on("reInit", sync);
    api.on("select", sync);
    return () => {
      api.off("reInit", sync);
      api.off("select", sync);
    };
  }, [api]);

  if (count <= 1) return null;

  return (
    <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => api?.scrollTo(i)}
          className={
            i === selected
              ? "size-2 rounded-full bg-primary"
              : "size-2 rounded-full bg-white/80"
          }
        />
      ))}
    </div>
  );
}
