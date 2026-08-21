import {useTranslations} from "next-intl";
import {Button} from "@/components/ui/button";
import {Link} from "@/i18n/navigation";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-cream px-4 py-24 text-center">
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">404</p>
      <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-md text-base text-navy-muted">{t("body")}</p>
      <Button asChild size="lg" className="mt-8 text-white">
        <Link href="/">{t("home")}</Link>
      </Button>
    </section>
  );
}
