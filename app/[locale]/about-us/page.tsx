import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {resolveLocale} from "@/i18n/locale";
import {BookingBar} from "@/components/landing/booking-bar";
import {Hotels} from "@/components/landing/hotels";
import {Reviews} from "@/components/landing/reviews";
import {Cta} from "@/components/landing/cta";
import {AboutHero} from "@/components/about/hero";
import {AboutReasons} from "@/components/about/reasons";
import {AboutValues} from "@/components/about/values";
import {AboutWelcome} from "@/components/about/welcome";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale: resolveLocale(locale), namespace: "Metadata"});
  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
  };
}

export default async function AboutUsPage() {
  const t = await getTranslations("About.hotelsHeading");

  return (
    <>
      <BookingBar />
      <AboutHero />
      <AboutReasons />
      <AboutValues />
      <Hotels eyebrow={t("eyebrow")} title={t("title")} />
      <AboutWelcome />
      <Reviews />
      <Cta />
    </>
  );
}
