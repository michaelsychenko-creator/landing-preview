import Image from "next/image";
import {useTranslations} from "next-intl";
import {Star} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Link} from "@/i18n/navigation";
import {aboutHero} from "@/lib/landing-content";

export function AboutHero() {
  const t = useTranslations("About.hero");

  return (
    <section className="relative overflow-hidden bg-cream lg:min-h-[min(88vh,46rem)]">
      <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <Image
          src={aboutHero.image}
          alt={t("imageAlt")}
          fill
          priority
          className="rounded-bl-[2.5rem] object-cover object-center"
          sizes="46vw"
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <Badge
            variant="secondary"
            className="animate-hero-in h-7 bg-white/80 px-3 text-xs font-semibold tracking-[0.12em] text-primary uppercase"
          >
            {t("eyebrow")}
          </Badge>
          <h1 className="animate-hero-in-delay mt-3 font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            {t("title")}
          </h1>
          <div className="animate-hero-in-delay-2 mt-5 flex flex-col gap-4 text-base leading-relaxed text-navy-muted sm:text-lg">
            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
          </div>

          <div className="animate-hero-in-delay-2 mt-8 grid grid-cols-2 overflow-hidden rounded-2xl bg-white/90 shadow-[0_3px_12px_rgba(23,42,73,0.08)]">
            {aboutHero.stats.map((stat) => (
              <Card key={stat.id} className="rounded-none bg-transparent py-0 ring-0">
                <CardContent className="border-l-2 border-primary px-4 py-4 sm:px-5 sm:py-5">
                  <p className="flex items-end gap-1.5">
                    <span className="font-heading text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                      {stat.value}
                    </span>
                    {"rating" in stat && stat.rating ? (
                      <Star className="mb-1 size-5 fill-primary text-primary" />
                    ) : null}
                  </p>
                  <p className="mt-1 text-xs font-semibold tracking-wide text-navy uppercase">
                    {t(stat.id)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="animate-hero-in-delay-2 mt-8">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 border-primary px-5 text-primary hover:bg-primary hover:text-white"
            >
              <Link href={aboutHero.ctaHref}>{t("cta")}</Link>
            </Button>
          </div>
        </div>

        <div className="animate-hero-in-delay relative min-h-72 overflow-hidden rounded-2xl sm:min-h-96 lg:hidden">
          <Image
            src={aboutHero.image}
            alt={t("imageAlt")}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
