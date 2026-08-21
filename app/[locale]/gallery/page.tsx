import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {resolveLocale} from "@/i18n/locale";
import {BookingBar} from "@/components/landing/booking-bar";
import {Cta} from "@/components/landing/cta";
import {GalleryHero} from "@/components/gallery/hero";
import {GalleryShowcase} from "@/components/gallery/showcase";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale: resolveLocale(locale), namespace: "Metadata"});
  return {
    title: t("galleryTitle"),
    description: t("galleryDescription"),
  };
}

export default function GalleryPage() {
  return (
    <>
      <BookingBar />
      <GalleryHero />
      <GalleryShowcase />
      <Cta />
    </>
  );
}
