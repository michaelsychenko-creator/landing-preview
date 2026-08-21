"use client";

import Image from "next/image";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";
import {ArrowRight, Mail, MapPin, Phone} from "lucide-react";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {Separator} from "@/components/ui/separator";
import {Link} from "@/i18n/navigation";
import {
  contactMapsDirectionsUrl,
  contactProperties,
  type ContactProperty,
} from "@/lib/landing-content";
import {itemVariants, listVariants, revealViewport} from "@/lib/landing-motion";

const spring = {
  type: "spring" as const,
  stiffness: 420,
  damping: 28,
  mass: 0.7,
};

const cardHover = {
  rest: {
    y: 0,
    borderColor: "rgba(23, 42, 73, 0.07)",
    boxShadow: "0 1px 0 rgba(23, 42, 73, 0.03), 0 28px 50px -28px rgba(23, 42, 73, 0)",
  },
  hover: {
    y: -6,
    borderColor: "rgba(255, 145, 77, 0.35)",
    boxShadow: "0 1px 0 rgba(23, 42, 73, 0.03), 0 28px 50px -28px rgba(23, 42, 73, 0.45)",
  },
};

const imageHover = {
  rest: {scale: 1},
  hover: {scale: 1.05},
};

export function ContactLocations() {
  return (
    <section className="bg-cream pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.ul
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          {contactProperties.map((property) => (
            <motion.li key={property.id} variants={itemVariants} className="h-full">
              <PropertyCard property={property} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function PropertyCard({property}: {property: ContactProperty}) {
  const t = useTranslations("Contacts");
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={cardHover}
      transition={{
        y: spring,
        borderColor: {duration: 0.4, ease: [0.22, 1, 0.36, 1]},
        boxShadow: {duration: 0.45, ease: [0.22, 1, 0.36, 1]},
      }}
      className="h-full"
    >
      <Card className="h-full gap-0 overflow-hidden rounded-2xl border bg-secondary py-0 ring-0">
        <AspectRatio ratio={4 / 3} className="overflow-hidden">
          <motion.div
            variants={imageHover}
            transition={{duration: 0.45, ease: [0.22, 1, 0.36, 1]}}
            className="relative size-full"
          >
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        </AspectRatio>

        <CardHeader className="gap-3 pt-5">
          <Badge variant="secondary" className="h-7 gap-1 bg-white px-2.5 text-navy">
            <MapPin data-icon="inline-start" />
            {property.neighbourhood}
          </Badge>
          <CardTitle className="font-heading text-xl font-semibold tracking-tight text-navy sm:text-2xl">
            {property.name}
          </CardTitle>
          <CardDescription className="text-sm text-navy-muted">{t("reception")}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col pt-4">
          <ItemGroup className="gap-2">
            <Item variant="muted" size="sm" asChild className="bg-white/70">
              <a href={property.phoneHref}>
                <ItemMedia variant="icon">
                  <Phone />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{t("phone")}</ItemTitle>
                  <ItemDescription>{property.phone}</ItemDescription>
                </ItemContent>
              </a>
            </Item>
            <Item variant="muted" size="sm" asChild className="bg-white/70">
              <a href={`mailto:${property.email}`}>
                <ItemMedia variant="icon">
                  <Mail />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{t("email")}</ItemTitle>
                  <ItemDescription>{property.email}</ItemDescription>
                </ItemContent>
              </a>
            </Item>
            <Item variant="muted" size="sm" className="items-start bg-white/70">
              <ItemMedia variant="icon">
                <MapPin />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{t("location")}</ItemTitle>
                <ItemDescription className="line-clamp-none">
                  {property.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="block">
                    {property.cityPostal}, {t("country")}
                  </span>
                </ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
        </CardContent>

        <Separator className="bg-navy/10" />

        <CardFooter className="flex-col items-stretch gap-2 border-0 bg-transparent">
          <Button asChild className="h-auto min-h-9 whitespace-normal py-2 text-white">
            <a href={contactMapsDirectionsUrl(property)} target="_blank" rel="noreferrer">
              {t("getDirectionsMaps")}
              <ArrowRight data-icon="inline-end" />
            </a>
          </Button>
          <Button asChild variant="ghost" className="text-navy hover:bg-white hover:text-primary">
            <Link href={{pathname: "/contacts", query: {property: property.id}, hash: "map"}}>
              {t("viewOnMap")}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
