"use client";

import Image from "next/image";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {eventOffer, offers} from "@/lib/landing-content";
import {itemVariants, listVariants, revealViewport} from "@/lib/landing-motion";

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
    boxShadow: "0 1px 0 rgba(23, 42, 73, 0.03), 0 28px 50px -28px rgba(23, 42, 73, 0)",
  },
  hover: {
    y: -6,
    borderColor: "rgba(255, 145, 77, 0.35)",
    boxShadow: "0 1px 0 rgba(23, 42, 73, 0.03), 0 28px 50px -28px rgba(23, 42, 73, 0.45)",
  },
};

const imageHover = {
  rest: {scale: 1},
  hover: {scale: 1.05},
};

const arrowHover = {
  rest: {x: 0},
  hover: {x: 4},
};

export function Offers() {
  const t = useTranslations("Offers");

  return (
    <section id="offers" className="scroll-mt-24 bg-cream py-16 sm:py-20 lg:py-24">
      <div className="reveal-on-scroll mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            {t("eyebrow")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        <motion.ul
          className="mt-12 grid gap-6 md:grid-cols-2"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          {offers.map((offer) => (
            <motion.li key={offer.id} variants={itemVariants}>
              <motion.div
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={cardHover}
                transition={{
                  y: spring,
                  borderColor: {duration: 0.4, ease: [0.22, 1, 0.36, 1]},
                  boxShadow: {duration: 0.45, ease: [0.22, 1, 0.36, 1]},
                }}
                className="grid overflow-hidden rounded-2xl border bg-white/90 sm:grid-cols-[14rem_1fr]"
              >
                <div className="relative min-h-48 overflow-hidden sm:min-h-56">
                  <motion.div
                    variants={imageHover}
                    transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
                    className="absolute inset-0"
                  >
                    <Image
                      src={offer.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 224px"
                    />
                  </motion.div>
                </div>
                <div className="flex flex-col p-7 sm:p-8">
                  <p className="font-heading text-5xl font-semibold tracking-tight text-primary sm:text-6xl">
                    {offer.discount}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-navy">
                    {t(`items.${offer.id}.title`)}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-navy-muted">
                    {t(`items.${offer.id}.description`)}
                  </p>
                  <a
                    href="#booking"
                    className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-navy transition-colors hover:text-primary"
                  >
                    {t(`items.${offer.id}.cta`)}
                    <motion.span variants={arrowHover} transition={spring}>
                      <ArrowRight className="size-5" />
                    </motion.span>
                  </a>
                </div>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.3}}
          className="relative mt-8 min-h-72 overflow-hidden rounded-2xl sm:min-h-80"
        >
          <Image src="/images/4-1.webp" alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-navy/75" />
          <div className="relative grid gap-8 p-8 text-white sm:grid-cols-[1fr_auto] sm:items-end sm:p-10 lg:p-12">
            <div>
              <p className="text-base text-white/80">{t("event.eyebrow")}</p>
              <h3 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("event.title")}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80">
                {t("event.description")}
              </p>
            </div>
            <div className="space-y-4 sm:text-right">
              <Badge className="bg-primary px-3 py-1.5 text-lg font-semibold text-white hover:bg-primary">
                {eventOffer.discount}
              </Badge>
              <p className="text-base text-white/75">{t("event.discountNote")}</p>
              <Button
                asChild
                size="lg"
                className="h-12 gap-2 bg-white px-6 text-base text-navy hover:bg-cream"
              >
                <a href="#booking">
                  {t("event.cta")}
                  <ArrowRight className="size-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
