import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {resolveLocale} from "@/i18n/locale";
import {BookingBar} from "@/components/landing/booking-bar";
import {Cta} from "@/components/landing/cta";
import {FaqHero} from "@/components/faq/hero";
import {FaqList} from "@/components/faq/list";
import {faqItems} from "@/lib/landing-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale: resolveLocale(locale), namespace: "Metadata"});
  return {
    title: t("faqTitle"),
    description: t("faqDescription"),
  };
}

export default async function FaqPage() {
  const t = await getTranslations("Faq");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: t(`items.${item.id}.question`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`items.${item.id}.answer`),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
      <BookingBar />
      <FaqHero />
      <FaqList />
      <Cta />
    </>
  );
}
