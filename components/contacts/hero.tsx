import {Badge} from "@/components/ui/badge";
import {contactHero} from "@/lib/landing-content";

export function ContactsHero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 pt-12 pb-4 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <Badge
          variant="secondary"
          className="animate-hero-in h-7 bg-white/80 px-3 text-xs font-semibold tracking-[0.12em] text-primary uppercase"
        >
          {contactHero.eyebrow}
        </Badge>
        <h1 className="animate-hero-in-delay mt-3 font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
          {contactHero.title}
        </h1>
      </div>
    </section>
  );
}
