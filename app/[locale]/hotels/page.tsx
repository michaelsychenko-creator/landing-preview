import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {resolveLocale} from "@/i18n/locale";
import {BookingBar} from "@/components/landing/booking-bar";
import {UniqueAdvantage} from "@/components/landing/unique-advantage";
import {Offers} from "@/components/landing/offers";
import {Reviews} from "@/components/landing/reviews";
import {Cta} from "@/components/landing/cta";
import {HotelsHero} from "@/components/hotels/hero";
import {HotelsDirectory} from "@/components/hotels/directory";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale: resolveLocale(locale), namespace: "Metadata"});
  return {
    title: t("hotelsTitle"),
    description: t("hotelsDescription"),
  };
}

export default function HotelsPage() {
  return (
    <>
      <BookingBar />
      <HotelsHero />
      <HotelsDirectory />
      <UniqueAdvantage />
      <Offers />
      <Reviews />
      <Cta />
    </>
  );
}
