"use client";

import {useState} from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {AnimatePresence, motion} from "framer-motion";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ButtonGroup} from "@/components/ui/button-group";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {Separator} from "@/components/ui/separator";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {
  galleryFilters,
  galleryPhotos,
  type GalleryFilter,
  type GalleryPhoto,
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

function photosForFilter(filter: GalleryFilter) {
  if (filter === "all") return galleryPhotos;
  return galleryPhotos.filter((photo) => photo.property === filter);
}

export function GalleryShowcase() {
  const t = useTranslations("Gallery");
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [activeId, setActiveId] = useState<GalleryPhoto["id"] | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const photos = photosForFilter(filter);
  const activeIndex = activeId ? photos.findIndex((photo) => photo.id === activeId) : -1;
  const activePhoto =
    activeIndex >= 0 ? photos[activeIndex] : galleryPhotos.find((photo) => photo.id === activeId);

  const openPhoto = (id: GalleryPhoto["id"]) => {
    setActiveId(id);
    setLightboxOpen(true);
  };

  return (
    <section className="bg-cream pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <Carousel key={filter} opts={{align: "start", loop: true}} className="w-full">
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={photo.id} className="basis-[88%] sm:basis-1/2 lg:basis-1/3">
                  <button
                    type="button"
                    className="block w-full overflow-hidden rounded-2xl text-left"
                    onClick={() => openPhoto(photo.id)}
                    aria-label={t("openPhoto", {alt: t(`photos.${photo.id}`)})}
                  >
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src={photo.src}
                        alt={t(`photos.${photo.id}`)}
                        fill
                        priority={index < 3}
                        className="object-cover"
                        sizes="(max-width: 640px) 88vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </AspectRatio>
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-end gap-2">
              <CarouselPrevious
                className="static inset-auto size-9 translate-none rounded-full border-navy/15 bg-white text-navy hover:bg-white hover:text-primary"
                aria-label={t("previous")}
              />
              <CarouselNext
                className="static inset-auto size-9 translate-none rounded-full border-navy/15 bg-white text-navy hover:bg-white hover:text-primary"
                aria-label={t("next")}
              />
            </div>
          </Carousel>
        </motion.div>

        <Separator className="bg-navy/10" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold tracking-wide text-primary uppercase">
              {t("browse")}
            </p>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-navy">
              {t("photosByProperty")}
            </h2>
          </div>
          <ToggleGroup
            type="single"
            value={filter}
            onValueChange={(value) => {
              if (!value) return;
              setFilter(value as GalleryFilter);
              setLightboxOpen(false);
            }}
            variant="outline"
            spacing={0}
            className="flex-wrap bg-white p-1 ring-1 ring-navy/10"
            aria-label={t("filterAria")}
          >
            {galleryFilters.map((item) => (
              <ToggleGroupItem key={item.value} value={item.value} className="px-3 text-navy">
                {t(`filters.${item.value}`)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={filter}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit={{opacity: 0, transition: {duration: 0.2}}}
          >
            {photos.map((photo) => (
              <motion.li key={photo.id} variants={itemVariants}>
                <GalleryPhotoCard photo={photo} onSelect={openPhoto} />
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>

      <GalleryLightbox
        photos={photos}
        photo={activePhoto}
        activeIndex={activeIndex < 0 ? 0 : activeIndex}
        open={lightboxOpen && Boolean(activePhoto)}
        onClose={() => setLightboxOpen(false)}
        onSelect={openPhoto}
      />
    </section>
  );
}

function GalleryPhotoCard({
  photo,
  onSelect,
}: {
  photo: GalleryPhoto;
  onSelect: (id: GalleryPhoto["id"]) => void;
}) {
  const t = useTranslations("Gallery");
  const alt = t(`photos.${photo.id}`);
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
      className="h-full overflow-hidden rounded-2xl border bg-white"
    >
      <Card className="h-full gap-0 overflow-hidden rounded-2xl py-0 ring-0">
        <button
          type="button"
          className="w-full text-left"
          onClick={() => onSelect(photo.id)}
          aria-label={t("openPhoto", {alt})}
        >
          <div className="relative overflow-hidden">
            <AspectRatio ratio={4 / 3}>
              <motion.div
                variants={imageHover}
                transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
                className="absolute inset-0"
              >
                <Image
                  src={photo.src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            </AspectRatio>
            <Badge className="absolute top-3 left-3 bg-white/90 text-navy">
              {photo.propertyLabel}
            </Badge>
          </div>
          <CardHeader className="gap-1 p-4">
            <CardTitle className="text-navy">{t(`categories.${photo.category}`)}</CardTitle>
            <CardDescription className="text-navy-muted">{alt}</CardDescription>
          </CardHeader>
        </button>
      </Card>
    </motion.div>
  );
}

function GalleryLightbox({
  photos,
  photo,
  activeIndex,
  open,
  onClose,
  onSelect,
}: {
  photos: readonly GalleryPhoto[];
  photo: GalleryPhoto | undefined;
  activeIndex: number;
  open: boolean;
  onClose: () => void;
  onSelect: (id: GalleryPhoto["id"]) => void;
}) {
  const t = useTranslations("Gallery");
  const showRelative = (offset: number) => {
    if (!photos.length) return;
    const nextIndex = (activeIndex + offset + photos.length) % photos.length;
    const nextPhoto = photos[nextIndex];
    if (nextPhoto) onSelect(nextPhoto.id);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose();
      }}
    >
      <DialogContent
        className="gap-4 sm:max-w-4xl"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            showRelative(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            showRelative(1);
          }
        }}
      >
        <DialogHeader>
          <DialogTitle>{photo ? photo.propertyLabel : t("galleryPhoto")}</DialogTitle>
          {photo ? (
            <DialogDescription>
              {t(`categories.${photo.category}`)} · {t(`photos.${photo.id}`)}
            </DialogDescription>
          ) : null}
        </DialogHeader>
        {photo ? (
          <>
            <div className="overflow-hidden rounded-xl">
              <AspectRatio ratio={16 / 10}>
                <Image
                  src={photo.src}
                  alt={t(`photos.${photo.id}`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 896px) 90vw, 56rem"
                />
              </AspectRatio>
            </div>
            <DialogFooter className="sm:justify-between">
              <p className="text-sm text-muted-foreground">
                {activeIndex + 1} / {photos.length}
              </p>
              <ButtonGroup>
                <Button type="button" variant="outline" onClick={() => showRelative(-1)}>
                  <ChevronLeft data-icon="inline-start" />
                  {t("previous")}
                </Button>
                <Button type="button" variant="outline" onClick={() => showRelative(1)}>
                  {t("next")}
                  <ChevronRight data-icon="inline-end" />
                </Button>
              </ButtonGroup>
            </DialogFooter>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
