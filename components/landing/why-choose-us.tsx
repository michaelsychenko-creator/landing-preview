"use client";

import Image from "next/image";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button";
import {Link} from "@/i18n/navigation";
import {amenities} from "@/lib/landing-content";
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

const accentHover = {
  rest: {opacity: 0},
  hover: {opacity: 1},
};

const iconHover = {
  rest: {scale: 1},
  hover: {scale: 1.04},
};

const indexHover = {
  rest: {color: "rgba(23, 42, 73, 0.25)"},
  hover: {color: "rgba(255, 145, 77, 0.7)"},
};

const ruleHover = {
  rest: {width: 32, backgroundColor: "rgba(23, 42, 73, 0.1)"},
  hover: {width: 48, backgroundColor: "rgba(255, 145, 77, 0.6)"},
};

export function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");
  const tAmenities = useTranslations("Amenities");

  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(255,145,77,0.14), transparent 42%), radial-gradient(circle at 88% 8%, rgba(23,42,73,0.06), transparent 36%)",
        }}
      />

      <div className="reveal-on-scroll relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              {t("eyebrow")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-muted">{t("body")}</p>
          </div>

          <div className="hidden shrink-0 flex-wrap gap-3 lg:flex">
            <Button
              asChild
              size="lg"
              className="h-12 bg-primary px-6 text-base text-white hover:bg-primary/90"
            >
              <a href="#booking">{t("bookNow")}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-navy/20 px-6 text-base text-navy"
            >
              <Link href="/about-us">{t("aboutUs")}</Link>
            </Button>
          </div>
        </div>

        <motion.ul
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          {amenities.map((item, index) => (
            <motion.li key={item.id} variants={itemVariants}>
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
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white/90 p-6 backdrop-blur-sm"
              >
                <motion.span
                  aria-hidden
                  variants={accentHover}
                  transition={{duration: 0.35, ease: [0.22, 1, 0.36, 1]}}
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                />

                <div className="flex items-start justify-between gap-3">
                  <motion.div
                    variants={iconHover}
                    transition={spring}
                    className="relative flex size-[3.75rem] items-center justify-center rounded-2xl bg-gradient-to-br from-[#fff8f2] via-cream to-[#f0e8e4] ring-1 ring-inset ring-navy/[0.06]"
                  >
                    <Image
                      src={item.icon}
                      alt=""
                      width={56}
                      height={56}
                      className="size-11 object-contain drop-shadow-sm"
                    />
                  </motion.div>
                  <motion.span
                    variants={indexHover}
                    transition={{duration: 0.35, ease: [0.22, 1, 0.36, 1]}}
                    className="font-heading text-[0.7rem] font-medium tracking-[0.22em]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>
                </div>

                <h3 className="mt-6 font-heading text-[1.05rem] font-semibold tracking-tight text-navy">
                  {tAmenities(`${item.id}.title`)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-muted">
                  {tAmenities(`${item.id}.description`)}
                </p>

                <motion.div
                  aria-hidden
                  variants={ruleHover}
                  transition={spring}
                  className="mt-5 h-px"
                />
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-12 flex flex-wrap gap-3 lg:hidden">
          <Button
            asChild
            size="lg"
            className="h-12 bg-primary px-6 text-base text-white hover:bg-primary/90"
          >
            <a href="#booking">{t("bookNow")}</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-navy/20 px-6 text-base text-navy"
          >
            <Link href="/about-us">{t("aboutUs")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
