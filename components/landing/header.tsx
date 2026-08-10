"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks, phoneDisplay } from "@/lib/landing-content"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY
    document.documentElement.dataset.headerHidden = "false"

    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY.current

      setScrolled(y > 12)

      // Always show near the top; hide on downward scroll, reveal on upward
      if (y < 48) {
        setHidden(false)
      } else if (delta > 6) {
        setHidden(true)
      } else if (delta < -6) {
        setHidden(false)
      }

      lastY.current = y
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      delete document.documentElement.dataset.headerHidden
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.headerHidden = hidden ? "true" : "false"
  }, [hidden])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[transform,background-color,box-shadow,backdrop-filter] duration-300 ease-out will-change-transform",
        scrolled
          ? "border-white/10 bg-navy/95 shadow-md backdrop-blur-md"
          : "border-transparent bg-navy",
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/Logo.png"
            alt="VLC Apart"
            width={140}
            height={40}
            className="h-10 w-auto rounded-md sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-base font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="text-base font-medium text-white/70">EN / ES</span>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="gap-1.5 text-base text-white hover:bg-white/10 hover:text-primary"
          >
            <a href="#">
              <MessageCircle className="size-4" />
              Chat
            </a>
          </Button>
          <a
            href={`tel:${phoneDisplay.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 text-base font-medium text-white"
          >
            <Phone className="size-4 text-primary" />
            {phoneDisplay}
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,20rem)] border-navy-muted bg-navy text-white">
            <SheetHeader>
              <SheetTitle className="text-left text-white">
                <Image
                  src="/images/Logo.png"
                  alt="VLC Apart"
                  width={120}
                  height={36}
                  className="h-10 w-auto rounded-md"
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-lg font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3 border-t border-white/15 px-4 pt-6">
              <span className="text-base font-medium text-white/65">EN / ES</span>
              <a href="#" className="inline-flex items-center gap-2 text-base font-medium text-white">
                <MessageCircle className="size-4" />
                Chat with us
              </a>
              <a
                href={`tel:${phoneDisplay.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-base font-medium text-white"
              >
                <Phone className="size-4 text-primary" />
                {phoneDisplay}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
