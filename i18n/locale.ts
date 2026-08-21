import {hasLocale, type Locale} from "next-intl";
import {routing} from "./routing";

export function resolveLocale(locale: string): Locale {
  return hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
}
