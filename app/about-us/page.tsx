import type {Metadata} from "next";
import {BookingBar} from "@/components/landing/booking-bar";
import {Hotels} from "@/components/landing/hotels";
import {Reviews} from "@/components/landing/reviews";
import {Cta} from "@/components/landing/cta";
import {AboutHero} from "@/components/about/hero";
import {AboutReasons} from "@/components/about/reasons";
import {AboutValues} from "@/components/about/values";
import {AboutWelcome} from "@/components/about/welcome";
import {aboutHotelsHeading} from "@/lib/landing-content";

export const metadata: Metadata = {
  title: "About Us - VLC Apart",
  description:
    "We Are VLC Apart. Three aparthotels in Valencia. Three neighbourhoods. One idea — to give every guest a place that feels like home, not just a room for the night.",
};

export default function AboutUsPage() {
  return (
    <>
      <BookingBar />
      <AboutHero />
      <AboutReasons />
      <AboutValues />
      <Hotels eyebrow={aboutHotelsHeading.eyebrow} title={aboutHotelsHeading.title} />
      <AboutWelcome />
      <Reviews />
      <Cta />
    </>
  );
}
