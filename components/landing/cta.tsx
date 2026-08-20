"use client";

import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {itemVariants, revealViewport} from "@/lib/landing-motion";

export function Cta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <Image src="/images/bcg_3.webp" alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-navy/70" />

      <div className="reveal-on-scroll relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Ready to travel?
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Book today and save on your stay
          </h2>
          <p className="mt-4 text-base text-white/80">Guaranteed best price on direct booking</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-11 gap-2 bg-primary px-5 text-white hover:bg-primary/90"
            >
              <Link href="/hotels">
                Find an Apartment
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 border-white/40 bg-white/10 px-5 text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/contacts">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
