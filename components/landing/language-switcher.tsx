"use client";

import {useTransition} from "react";
import {useLocale, useTranslations} from "next-intl";
import {Globe} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {usePathname, useRouter} from "@/i18n/navigation";
import {routing} from "@/i18n/routing";
import {cn} from "@/lib/utils";
import type {Locale} from "next-intl";

type LanguageSwitcherProps = {
  className?: string;
  variant?: "header" | "footer";
};

export function LanguageSwitcher({className, variant = "header"}: LanguageSwitcherProps) {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onSelect(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale as Locale});
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          disabled={isPending}
          aria-label={t("label")}
          className={cn(
            "gap-1.5 text-base",
            variant === "header" && "text-white hover:bg-white/10 hover:text-primary",
            variant === "footer" && "px-0 text-white/85 hover:bg-white/10 hover:text-primary",
            className,
          )}
        >
          <Globe data-icon="inline-start" />
          {locale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup value={locale} onValueChange={onSelect}>
            {routing.locales.map((code) => (
              <DropdownMenuRadioItem key={code} value={code}>
                {code === "es" ? t("es") : t("en")}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
