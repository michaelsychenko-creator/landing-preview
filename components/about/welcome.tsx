"use client";

import Image from "next/image";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";
import {Star} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {aboutWelcome} from "@/lib/landing-content";
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

export function AboutWelcome() {
  const t = useTranslations("About.welcome");

  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              {t("eyebrow")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              {t("title")}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Avatar size="lg">
              <AvatarImage src="/images/ok.webp" alt="" />
              <AvatarFallback>VA</AvatarFallback>
            </Avatar>
            <div>
              <p className="flex items-center gap-1.5">
                <span className="font-heading text-3xl font-semibold text-navy">
                  {aboutWelcome.rating}
                </span>
                <Star className="size-5 fill-primary text-primary" />
              </p>
              <Badge variant="secondary" className="mt-1 bg-white text-navy-muted">
                {t("ratingNote")}
              </Badge>
            </div>
          </div>
        </motion.div>

        <motion.ul
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          {aboutWelcome.audiences.map((audience) => (
            <motion.li key={audience.id} variants={itemVariants}>
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
                className="h-full"
              >
                <Card className="h-full gap-0 overflow-hidden rounded-2xl border bg-white py-0 ring-0">
                  <div className="relative overflow-hidden bg-cream">
                    <motion.div
                      variants={imageHover}
                      transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
                      className="relative mx-auto aspect-3/2 max-w-56"
                    >
                      <Image
                        src={audience.image}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="224px"
                      />
                    </motion.div>
                  </div>
                  <CardHeader className="gap-2 px-6 pt-5">
                    <CardTitle className="font-heading text-xl font-semibold tracking-tight text-navy">
                      {t(`audiences.${audience.id}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <CardDescription className="text-sm leading-relaxed text-navy-muted">
                      {t(`audiences.${audience.id}.description`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
