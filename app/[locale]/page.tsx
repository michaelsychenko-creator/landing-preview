import {BookingBar} from "@/components/landing/booking-bar";
import {Hero} from "@/components/landing/hero";
import {WhyChooseUs} from "@/components/landing/why-choose-us";
import {Hotels} from "@/components/landing/hotels";
import {UniqueAdvantage} from "@/components/landing/unique-advantage";
import {Offers} from "@/components/landing/offers";
import {Reviews} from "@/components/landing/reviews";
import {Cta} from "@/components/landing/cta";

export default function HomePage() {
  return (
    <>
      <BookingBar />
      <Hero />
      <WhyChooseUs />
      <Hotels />
      <UniqueAdvantage />
      <Offers />
      <Reviews />
      <Cta />
    </>
  );
}
