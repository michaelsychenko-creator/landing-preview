"use client";

import {useEffect, useMemo, useState} from "react";
import {format} from "date-fns";
import type {DateRange} from "react-day-picker";
import {ArrowRight, CalendarDays} from "lucide-react";
import {toast} from "sonner";
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {Sheet, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {hotelOptions} from "@/lib/landing-content";
import {openDistributorBooking} from "@/lib/mews";
import {cn} from "@/lib/utils";

const controlClass =
  "h-10 w-full min-w-0 rounded-lg border-white/20 bg-white text-sm text-navy data-[size=default]:h-10";

const stickyBarClass =
  "sticky top-16 z-40 border-b border-primary/40 bg-primary transition-transform duration-300 ease-out will-change-transform sm:top-[4.5rem] [[data-header-hidden=true]_&]:-translate-y-[calc(100%+4rem)] sm:[[data-header-hidden=true]_&]:-translate-y-[calc(100%+4.5rem)]";

export function BookingBar() {
  const [hotel, setHotel] = useState<string>("gayano");
  const [range, setRange] = useState<DateRange | undefined>();
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [open, setOpen] = useState(false);

  const dateLabel = useMemo(() => {
    if (range?.from && range?.to) {
      return `${format(range.from, "MMM d, yyyy")} – ${format(range.to, "MMM d, yyyy")}`;
    }
    if (range?.from) {
      return `${format(range.from, "MMM d, yyyy")} – Check-out`;
    }
    return "Select dates";
  }, [range]);

  useEffect(() => {
    const isMobile = () => window.matchMedia("(max-width: 1023px)").matches;

    const openFromHash = () => {
      if (window.location.hash === "#booking" && isMobile()) {
        setOpen(true);
      }
    };

    const openFromEvent = () => {
      if (isMobile()) setOpen(true);
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href="#booking"]');
      if (link && isMobile()) {
        e.preventDefault();
        setOpen(true);
      }
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    window.addEventListener("open-booking", openFromEvent);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", openFromHash);
      window.removeEventListener("open-booking", openFromEvent);
      document.removeEventListener("click", onClick);
    };
  }, []);

  function onOpenChange(next: boolean) {
    setOpen(next);
    if (!next && window.location.hash === "#booking") {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!range?.from || !range?.to) {
      toast.error("Please select check-in and check-out dates.");
      return;
    }
    if (range.to <= range.from) {
      toast.error("Check-out must be after check-in.");
      return;
    }

    const opened = openDistributorBooking({
      start: range.from,
      end: range.to,
      adults: Number(adults) || 2,
      children: Number(children) || 0,
    });

    if (!opened) {
      toast.error("Booking Engine is still loading...");
      return;
    }

    onOpenChange(false);
  }

  const formProps = {
    hotel,
    setHotel,
    range,
    setRange,
    adults,
    setAdults,
    children,
    setChildren,
    dateLabel,
    onSubmit,
  };

  return (
    <>
      {/* Desktop only — sticky booking form in header */}
      <section id="booking" className={cn(stickyBarClass, "hidden lg:block")}>
        <div className="mx-auto max-w-6xl px-4 py-0 sm:px-6 lg:px-8">
          <BookingForm {...formProps} layout="desktop" />
        </div>
      </section>

      {/* Mobile only — booking form in sheet, opened via #booking CTAs */}
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="bottom"
          className="max-h-[min(100dvh,40rem)] gap-0 overflow-y-auto rounded-t-2xl border-primary/40 bg-primary p-0 text-white lg:hidden [&_[data-slot=sheet-close]]:text-white [&_[data-slot=sheet-close]]:hover:bg-white/15 [&_[data-slot=sheet-close]]:hover:text-white"
        >
          <SheetHeader className="border-b border-white/15 px-4 py-4 pr-12">
            <SheetTitle className="font-heading text-lg text-white">Book your stay</SheetTitle>
          </SheetHeader>
          <div className="px-4 py-4">
            <BookingForm {...formProps} layout="modal" />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

type BookingFormProps = {
  hotel: string;
  setHotel: (value: string) => void;
  range: DateRange | undefined;
  setRange: (range: DateRange | undefined) => void;
  adults: string;
  setAdults: (value: string) => void;
  children: string;
  setChildren: (value: string) => void;
  dateLabel: string;
  onSubmit: (e: React.FormEvent) => void;
  layout: "desktop" | "modal";
};

function BookingForm({
  hotel,
  setHotel,
  range,
  setRange,
  adults,
  setAdults,
  children,
  setChildren,
  dateLabel,
  onSubmit,
  layout,
}: BookingFormProps) {
  const isDesktop = layout === "desktop";

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "grid gap-3 rounded-2xl bg-primary",
        isDesktop
          ? "px-0 py-3 lg:grid-cols-[1.2fr_1.4fr_0.7fr_0.7fr_auto] lg:items-end"
          : "px-0 py-0",
      )}
    >
      <Field label="Aparthotel" light>
        <Select value={hotel} onValueChange={setHotel}>
          <SelectTrigger className={controlClass}>
            <SelectValue placeholder="Select hotel" />
          </SelectTrigger>
          <SelectContent position="popper">
            {hotelOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field label="Dates" light>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className={cn(
                controlClass,
                "justify-start font-normal",
                !range?.from && "text-muted-foreground",
              )}
            >
              <CalendarDays className="size-4 text-primary" />
              {dateLabel}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              selected={range}
              onSelect={setRange}
              numberOfMonths={isDesktop ? 2 : 1}
              disabled={{before: new Date()}}
              className="bg-white"
            />
          </PopoverContent>
        </Popover>
      </Field>

      <Field label="Adult guests" light>
        <Select value={adults} onValueChange={setAdults}>
          <SelectTrigger className={controlClass}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="popper">
            {Array.from({length: 12}, (_, i) => String(i + 1)).map((n) => (
              <SelectItem key={n} value={n}>
                {n}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field label="Children" light>
        <Select value={children} onValueChange={setChildren}>
          <SelectTrigger className={controlClass}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="popper">
            {Array.from({length: 7}, (_, i) => String(i)).map((n) => (
              <SelectItem key={n} value={n}>
                {n}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <div className="flex min-w-0 flex-col gap-1.5">
        {isDesktop ? (
          <span
            className="invisible text-[0.7rem] leading-none font-semibold tracking-[0.08em] uppercase"
            aria-hidden
          >
            Book
          </span>
        ) : null}
        <Button
          type="submit"
          className="h-11 w-full gap-2 bg-navy px-6 text-sm text-white hover:bg-navy-muted"
        >
          Book Now
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
  light = false,
}: {
  label: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <label className="flex min-w-0 flex-col gap-1.5">
      <span
        className={cn(
          "text-[0.7rem] leading-none font-semibold tracking-[0.08em] uppercase",
          light ? "text-white/90" : "text-navy-muted",
        )}
      >
        {label}
      </span>
      {children}
    </label>
  );
}
