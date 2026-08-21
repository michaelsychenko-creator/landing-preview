import Image from "next/image";
import {useTranslations} from "next-intl";
import {ArrowRight, Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Link} from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative overflow-hidden bg-navy sm:min-h-[min(88vh,52rem)]">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <Image
          src="/images/background_new.png"
          alt={t("imageAlt")}
          fill
          priority
          className="object-cover object-[70%_center]"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/25 lg:via-navy/70 lg:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-navy/20" />

      <div className="relative mx-auto flex max-w-6xl flex-col justify-start px-4 pb-10 pt-8 sm:min-h-[min(88vh,52rem)] sm:justify-end sm:px-6 sm:pb-32 sm:pt-20 lg:justify-center lg:px-8 lg:pb-24">
        <div className="max-w-xl text-white">
          <p className="animate-hero-in mb-4 text-sm font-medium tracking-wide text-white/85">
            {t("eyebrow")}
          </p>
          <p className="animate-hero-in mb-2 text-sm font-semibold tracking-[0.12em] text-primary uppercase sm:text-base">
            VLC Apart
          </p>
          <h1 className="animate-hero-in-delay font-heading text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {t.rich("title", {
              home: (chunks) => <span className="text-primary">{chunks}</span>,
              nl: () => <br />,
            })}
          </h1>
          <p className="animate-hero-in-delay-2 mt-5 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
            {t("body")}
          </p>
          <div className="animate-hero-in-delay-2 mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-11 gap-2 bg-primary px-5 text-white hover:bg-primary/90"
            >
              <Link href="/hotels">
                {t("viewHotels")}
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 border-white/40 bg-white/10 px-5 text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/about-us">{t("aboutUs")}</Link>
            </Button>
          </div>
        </div>

        <div className="animate-hero-in-delay-2 mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-14">
          <Stat value="3" label={t("locations")} />
          <Stat value="12" label={t("capacity")} />
          <Stat value="10%+" label={t("discount")} />
          <div className="rounded-xl bg-white/10 px-3 py-3 backdrop-blur-sm sm:px-4">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-semibold text-white">5.0</span>
              <Star className="size-4 fill-primary text-primary" />
            </div>
            <p className="mt-1 text-xs text-white/75">{t("rating")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({value, label}: {value: string; label: string}) {
  return (
    <div className="rounded-xl bg-white/10 px-3 py-3 backdrop-blur-sm sm:px-4">
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-white/75">{label}</p>
    </div>
  );
}
