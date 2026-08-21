import * as rootParams from "next/root-params";
import {hasLocale} from "next-intl";
import {getRequestConfig} from "next-intl/server";
import {routing} from "./routing";

type RootParams = {
  locale?: () => Promise<string | undefined>;
};

export default getRequestConfig(async ({locale, requestLocale}) => {
  if (!locale) {
    const params = rootParams as RootParams;
    const paramValue =
      typeof params.locale === "function" ? await params.locale() : await requestLocale;

    locale = hasLocale(routing.locales, paramValue) ? paramValue : routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: "Europe/Madrid",
  };
});
