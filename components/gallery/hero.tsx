import {useTranslations} from "next-intl";
import {Badge} from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {Link} from "@/i18n/navigation";

export function GalleryHero() {
  const t = useTranslations("Gallery");

  return (
    <section className="bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pt-12 pb-4 sm:px-6 sm:pt-16 lg:px-8 lg:pt-20">
        <Breadcrumb className="animate-hero-in">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">{t("home")}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-navy">{t("title")}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col gap-3">
          <Badge
            variant="secondary"
            className="animate-hero-in h-7 bg-white/80 px-3 text-xs font-semibold tracking-[0.12em] text-primary uppercase"
          >
            {t("eyebrow")}
          </Badge>
          <h1 className="animate-hero-in-delay font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            {t("title")}
          </h1>
          <p className="animate-hero-in-delay-2 max-w-3xl text-base leading-relaxed text-navy-muted sm:text-lg">
            {t("body")}
          </p>
        </div>
      </div>
    </section>
  );
}
