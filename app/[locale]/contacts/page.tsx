import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {resolveLocale} from "@/i18n/locale";
import {BookingBar} from "@/components/landing/booking-bar";
import {Cta} from "@/components/landing/cta";
import {ContactsHero} from "@/components/contacts/hero";
import {ContactLocations} from "@/components/contacts/locations";
import {ContactMap} from "@/components/contacts/map";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale: resolveLocale(locale), namespace: "Metadata"});
  return {
    title: t("contactsTitle"),
    description: t("contactsDescription"),
  };
}

export default function ContactsPage() {
  return (
    <>
      <BookingBar />
      <ContactsHero />
      <ContactLocations />
      <ContactMap />
      <Cta />
    </>
  );
}
