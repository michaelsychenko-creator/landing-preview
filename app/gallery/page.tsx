import type {Metadata} from "next";
import {BookingBar} from "@/components/landing/booking-bar";
import {Cta} from "@/components/landing/cta";
import {GalleryHero} from "@/components/gallery/hero";
import {GalleryShowcase} from "@/components/gallery/showcase";
import {galleryHero} from "@/lib/landing-content";

export const metadata: Metadata = {
  title: "Gallery - VLC Apart",
  description: galleryHero.body,
};

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
