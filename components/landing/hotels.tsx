"use client";

import Image from "next/image";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";
import {ArrowRight, MapPin} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {Link} from "@/i18n/navigation";
import {hotels} from "@/lib/landing-content";
import {itemVariants, listVariants, revealViewport} from "@/lib/landing-motion";

export function Hotels({eyebrow, title}: {eyebrow?: string; title?: string}) {
  const t = useTranslations("Hotels");

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="reveal-on-scroll mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            {eyebrow ?? t("sectionEyebrow")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            {title ?? t("sectionTitle")}
          </h2>
        </div>

        <motion.ul
          className="mt-12 grid gap-8 md:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          {hotels.map((hotel) => (
            <motion.li key={hotel.id} variants={itemVariants} className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mt-5 flex flex-1 flex-col">
                <p className="inline-flex items-center gap-1.5 text-xs font-medium text-navy-muted">
                  <MapPin className="size-3.5 text-primary" />
                  {hotel.location}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-navy">{hotel.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                  {t(`items.${hotel.id}.description`)}
                </p>
                <p className="mt-3 text-xs tracking-wide text-navy/60">
                  {t(`items.${hotel.id}.tags`)}
                </p>
                <Separator className="my-4 bg-navy/10" />
                <div className="mt-auto flex items-end justify-between gap-3">
                  <p className="text-sm text-navy-muted">
                    {t("from")}{" "}
                    <span className="text-2xl font-semibold text-navy">{hotel.price}</span>
                    <span className="text-navy-muted">{t("perNight")}</span>
                  </p>
                  <Button asChild size="icon" className="bg-primary text-white hover:bg-primary/90">
                    <a href="#" aria-label={t("learnMoreAbout", {name: hotel.name})}>
                      <ArrowRight />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-10">
          <Button asChild variant="outline" className="border-navy/20 text-navy" size="lg">
            <Link href="/hotels">
              {t("viewAll")}
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
