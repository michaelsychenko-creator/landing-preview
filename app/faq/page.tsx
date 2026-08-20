import type {Metadata} from "next";
import {BookingBar} from "@/components/landing/booking-bar";
import {Cta} from "@/components/landing/cta";
import {FaqHero} from "@/components/faq/hero";
import {FaqList} from "@/components/faq/list";
import {faqJsonLd} from "@/lib/landing-content";

export const metadata: Metadata = {
  title: "FAQ - VLC Apart",
  description:
    "Frequently asked questions about staying at VLC Apart — check-in, parking, pets, Wi-Fi, kitchens, cancellation and more.",
};

export default function FaqPage() {
  const jsonLd = faqJsonLd();

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
