import type {Metadata} from "next";
import {BookingBar} from "@/components/landing/booking-bar";
import {Cta} from "@/components/landing/cta";
import {ContactsHero} from "@/components/contacts/hero";
import {ContactLocations} from "@/components/contacts/locations";
import {ContactMap} from "@/components/contacts/map";

export const metadata: Metadata = {
  title: "Contact Us - VLC Apart",
  description:
    "Get in touch with VLC Apart. Three aparthotels in Valencia — reach reservations by phone, email or at the property.",
};

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
