import type {Metadata} from "next";
import {hasLocale} from "next-intl";
import {NextIntlClientProvider} from "next-intl";
import {getTranslations} from "next-intl/server";
import {notFound} from "next/navigation";
import {Bricolage_Grotesque, Geist_Mono} from "next/font/google";
import {Toaster} from "@/components/ui/sonner";
import {SiteHeader} from "@/components/landing/header";
import {SiteFooter} from "@/components/landing/footer";
import {MewsDistributor} from "@/components/landing/mews-distributor";
import {routing} from "@/i18n/routing";
import {resolveLocale} from "@/i18n/locale";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale: resolveLocale(locale), namespace: "Metadata"});

  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${bricolage.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col bg-white text-navy">
        <NextIntlClientProvider>
          <MewsDistributor />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster position="top-center" richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
