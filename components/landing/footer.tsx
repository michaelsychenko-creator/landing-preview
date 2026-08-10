import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { footerLegal, navLinks, phoneDisplay } from "@/lib/landing-content"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-1.5c0-.3.2-.5.5-.5z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-5">
            <Image
              src="/images/Logo.png"
              alt="VLC Apart"
              width={140}
              height={40}
              className="h-10 w-auto rounded-md sm:h-12"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              A network of premium apartment hotels in Valencia. Your home away
              from home — with all the comforts and no compromises.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-white/60">EN / ES</span>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-white/85 transition-colors hover:text-primary"
              >
                <MessageCircle className="size-4" />
                Chat with us
              </a>
              <a
                href={`tel:${phoneDisplay.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-1.5 text-white/85 transition-colors hover:text-primary"
              >
                <Phone className="size-4" />
                {phoneDisplay}
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold tracking-wide text-primary uppercase">
              Explore
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <p className="mb-4 text-sm font-semibold tracking-wide text-primary uppercase">
              Book & follow
            </p>
            <Button
              asChild
              size="lg"
              className="h-12 gap-2 bg-primary px-6 text-base text-white hover:bg-primary/90"
            >
              <a href="#booking">Book Now</a>
            </Button>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-white"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-white"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="X"
                className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary hover:text-white"
              >
                <span className="text-xs font-bold">X</span>
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {footerLegal.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xs text-white/50 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-white/50">
            © 2026, VLC Apart. All rights reserved
          </p>
          <Image
            src="/images/pay.webp"
            alt="Accepted payment methods"
            width={280}
            height={20}
            className="h-4 w-auto opacity-80 brightness-110"
          />
        </div>
      </div>
    </footer>
  )
}
