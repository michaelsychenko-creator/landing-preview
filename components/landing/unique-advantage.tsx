"use client";

import Image from "next/image";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {advantagePoints, audienceTags} from "@/lib/landing-content";
import {itemVariants, listVariants, revealViewport} from "@/lib/landing-motion";

export function UniqueAdvantage() {
  const t = useTranslations("Advantage");

  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20 lg:py-24">
      <Image
        src="/images/bcg_2.webp"
        alt=""
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/70" />

      <div className="reveal-on-scroll relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <motion.div variants={itemVariants}>
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              {t("eyebrow")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">{t("body")}</p>

            <ul className="mt-8 space-y-5">
              {advantagePoints.map((point) => (
                <li key={point.id} className="flex gap-3">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <h3 className="font-semibold text-white">{t(`points.${point.id}.title`)}</h3>
                    <p className="mt-1 text-sm text-white/70">
                      {t(`points.${point.id}.description`)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-8 h-12 bg-primary px-6 text-base text-white hover:bg-primary/90"
            >
              <a href="#booking">{t("bookNow")}</a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/images/Accommodating-large-groups-together.webp"
                alt={t("imageAlt")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-5xl font-semibold text-primary">12</p>
              <p className="mt-1 text-lg font-medium">{t("guestsInApartment")}</p>
              <p className="mt-1 text-sm text-white/70">{t("maxCapacity")}</p>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {audienceTags.map((tag) => (
                  <li key={tag} className="inline-flex items-center gap-2 text-sm">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {t(`tags.${tag}`)}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
