import type {Metadata} from "next";
import {BookingBar} from "@/components/landing/booking-bar";
import {UniqueAdvantage} from "@/components/landing/unique-advantage";
import {Offers} from "@/components/landing/offers";
import {Reviews} from "@/components/landing/reviews";
import {Cta} from "@/components/landing/cta";
import {HotelsHero} from "@/components/hotels/hero";
import {HotelsDirectory} from "@/components/hotels/directory";

export const metadata: Metadata = {
  title: "Hotels - VLC Apart",
  description:
    "Three aparthotels in the heart of Valencia — each in its own neighbourhood, each with its own character. Fully equipped apartments for families, groups and remote teams.",
};

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
