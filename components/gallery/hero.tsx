import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {galleryHero} from "@/lib/landing-content";

export function GalleryHero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pt-12 pb-4 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <Breadcrumb className="animate-hero-in">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-navy">{galleryHero.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col gap-3">
          <Badge
            variant="secondary"
            className="animate-hero-in h-7 bg-white/80 px-3 text-xs font-semibold tracking-[0.12em] text-primary uppercase"
          >
            {galleryHero.eyebrow}
          </Badge>
          <h1 className="animate-hero-in-delay font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            {galleryHero.title}
          </h1>
          <p className="animate-hero-in-delay-2 max-w-3xl text-base leading-relaxed text-navy-muted sm:text-lg">
            {galleryHero.body}
          </p>
        </div>
      </div>
    </section>
  );
}
