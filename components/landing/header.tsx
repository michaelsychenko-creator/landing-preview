"use client";

import {useEffect, useRef, useState, type ComponentProps, type ReactNode} from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {Menu, MessageCircle, Phone} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {LanguageSwitcher} from "@/components/landing/language-switcher";
import {Link, usePathname} from "@/i18n/navigation";
import {navLinks, phoneDisplay} from "@/lib/landing-content";
import {cn} from "@/lib/utils";

function isNavActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("#")) return false;
  return pathname === href;
}

function NavHref({
  href,
  className,
  children,
  onClick,
  ...rest
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
} & Omit<ComponentProps<typeof Link>, "href" | "onClick">) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const t = useTranslations("Nav");
  const tHeader = useTranslations("Header");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    document.documentElement.dataset.headerHidden = "false";

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      setScrolled(y > 12);

      if (y < 48) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }

      lastY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => {
      window.removeEventListener("scroll", onScroll);
      delete document.documentElement.dataset.headerHidden;
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.headerHidden = hidden ? "true" : "false";
  }, [hidden]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[transform,background-color,box-shadow,backdrop-filter] duration-300 ease-out will-change-transform",
        scrolled
          ? "border-white/10 bg-navy/95 shadow-md backdrop-blur-md"
          : "border-transparent bg-navy",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
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
          {navLinks.map((link) => {
            const active = isNavActive(link.href, pathname);
            return (
              <NavHref
                key={link.id}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-white/10 hover:text-primary",
                  active ? "text-primary" : "text-white/85",
                )}
              >
                {t(link.id)}
              </NavHref>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="gap-1.5 text-base text-white hover:bg-white/10 hover:text-primary"
          >
            <a href="#">
              <MessageCircle data-icon="inline-start" />
              {tHeader("chat")}
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
              aria-label={tHeader("openMenu")}
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[min(100%,20rem)] border-navy-muted bg-navy text-white"
          >
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
              {navLinks.map((link) => {
                const active = isNavActive(link.href, pathname);
                return (
                  <NavHref
                    key={link.id}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-lg font-medium transition-colors hover:bg-white/10 hover:text-primary",
                      active ? "bg-white/10 text-primary" : "text-white/90",
                    )}
                  >
                    {t(link.id)}
                  </NavHref>
                );
              })}
            </nav>
            <div className="mt-8 flex flex-col gap-3 border-t border-white/15 px-4 pt-6">
              <LanguageSwitcher />
              <a
                href="#"
                className="inline-flex items-center gap-2 text-base font-medium text-white"
              >
                <MessageCircle className="size-4" />
                {tHeader("chatWithUs")}
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
  );
}
