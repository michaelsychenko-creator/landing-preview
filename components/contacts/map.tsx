"use client";

import {Suspense, useCallback} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {motion} from "framer-motion";
import {ExternalLink, Navigation} from "lucide-react";
import {Button} from "@/components/ui/button";
import {ButtonGroup} from "@/components/ui/button-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
  contactMapsDirectionsUrl,
  contactMapsEmbedUrl,
  contactMapsSearchUrl,
  contactProperties,
} from "@/lib/landing-content";
import {itemVariants, revealViewport} from "@/lib/landing-motion";

const defaultPropertyId = contactProperties[0].id;

export function ContactMap() {
  return (
    <Suspense fallback={<ContactMapFallback />}>
      <ContactMapInner />
    </Suspense>
  );
}

function ContactMapInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selected =
    contactProperties.find((property) => property.id === searchParams.get("property"))?.id ??
    defaultPropertyId;

  const setSelected = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("property", value);
      router.replace(`/contacts?${params.toString()}#map`, {scroll: false});
    },
    [router, searchParams],
  );

  return (
    <section id="map" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <Tabs value={selected} onValueChange={setSelected} className="gap-4">
            <TabsList className="h-auto w-full flex-wrap justify-start gap-1 bg-cream p-1 sm:w-fit">
              {contactProperties.map((property) => (
                <TabsTrigger
                  key={property.id}
                  value={property.id}
                  className="h-9 px-3 data-active:bg-white data-active:text-navy"
                >
                  {property.shortName}
                </TabsTrigger>
              ))}
            </TabsList>

            {contactProperties.map((property) => (
              <TabsContent key={property.id} value={property.id}>
                <Card className="gap-0 overflow-hidden rounded-2xl py-0 ring-0">
                  <CardHeader className="gap-1 px-5 pt-5 sm:px-6 sm:pt-6">
                    <CardTitle className="font-heading text-xl font-semibold tracking-tight text-navy sm:text-2xl">
                      {property.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-navy-muted">
                      {property.addressLines.join(" · ")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pt-5">
                    <div className="relative min-h-88 overflow-hidden sm:min-h-112 lg:min-h-152">
                      <iframe
                        title={`Map of ${property.name}`}
                        src={contactMapsEmbedUrl(property)}
                        className="absolute inset-0 size-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex-wrap justify-end gap-3 bg-cream">
                    <ButtonGroup>
                      <Button asChild variant="outline" className="border-navy/15 text-navy">
                        <a href={contactMapsSearchUrl(property)} target="_blank" rel="noreferrer">
                          Open in Google Maps
                          <ExternalLink data-icon="inline-end" />
                        </a>
                      </Button>
                      <Button asChild className="text-white">
                        <a
                          href={contactMapsDirectionsUrl(property)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Get directions
                          <Navigation data-icon="inline-end" />
                        </a>
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

function ContactMapFallback() {
  return (
    <section id="map" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4">
          <Skeleton className="h-11 w-full rounded-lg sm:w-80" />
          <Card className="gap-0 overflow-hidden rounded-2xl py-0 ring-0">
            <CardHeader className="gap-2 px-5 pt-5 sm:px-6 sm:pt-6">
              <Skeleton className="h-7 w-56" />
              <Skeleton className="h-4 w-80 max-w-full" />
            </CardHeader>
            <CardContent className="px-0 pt-5">
              <Skeleton className="min-h-88 rounded-none sm:min-h-112 lg:min-h-152" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
