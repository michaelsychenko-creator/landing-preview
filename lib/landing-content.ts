export const navLinks = [
  {id: "main", href: "/"},
  {id: "about", href: "/about-us"},
  {id: "hotels", href: "/hotels"},
  {id: "offers", href: "#offers"},
  {id: "gallery", href: "/gallery"},
  {id: "contacts", href: "/contacts"},
  {id: "faq", href: "/faq"},
] as const;

export const phoneDisplay = "+ 34 960 000 001";

export const hotelOptions = [{value: "all"}, {value: "gayano"}] as const;

export const amenities = [
  {id: "kitchen", icon: "/images/1.png"},
  {id: "wifi", icon: "/images/2.png"},
  {id: "location", icon: "/images/3.png"},
  {id: "checkin", icon: "/images/4.png"},
  {id: "laundry", icon: "/images/5.png"},
  {id: "spacious", icon: "/images/6.png"},
  {id: "support", icon: "/images/7.png"},
  {id: "parking", icon: "/images/8.png"},
] as const;

const hotelGallery = ["/images/2-1.webp", "/images/2-2.png", "/images/2-3.webp"] as const;

export const hotels = [
  {
    id: "gayano",
    name: "VLC Apart Gayano",
    location: "Valencia, Rascanya · Torrefiel",
    price: "€99",
    image: "/images/2-1.webp",
    capacity: 12,
    gallery: hotelGallery,
  },
  {
    id: "cortina",
    name: "VLC Apart Cortina",
    location: "Valencia, Benicalap",
    price: "€99",
    image: "/images/2-2.png",
    capacity: 8,
    gallery: hotelGallery,
  },
  {
    id: "encarna",
    name: "VLC Apart Encarna",
    location: "Valencia, Benicalap",
    price: "€99",
    image: "/images/2-3.webp",
    capacity: 4,
    gallery: hotelGallery,
  },
] as const;

export type Hotel = (typeof hotels)[number];

export const hotelsHero = {
  image: "/images/4-2.webp",
  ctaHref: "/about-us",
  stats: [
    {id: "capacity", value: "12", unitKey: "capacityUnit" as const},
    {id: "discount", value: "10%+", unitKey: null},
  ],
} as const;

export const advantagePoints = [{id: "corporate"}, {id: "family"}, {id: "tours"}] as const;

export const audienceTags = ["corporate", "families", "tourGroups", "celebrations"] as const;

export const offers = [
  {id: "direct", discount: "10%+", image: "/images/3-1.webp"},
  {id: "longStay", discount: "30%", image: "/images/3-2.webp"},
] as const;

export const eventOffer = {
  discount: "-15%",
} as const;

export const reviews = [
  {id: "olena", name: "Olena K."},
  {id: "marcus", name: "Marcus L."},
  {id: "sofia", name: "Sofía R."},
  {id: "tomas", name: "Tomáš V."},
  {id: "amelie", name: "Amélie D."},
  {id: "james", name: "James W."},
] as const;

export const aboutHero = {
  image: "/images/4-2.webp",
  ctaHref: "/hotels",
  stats: [
    {id: "locations", value: "3"},
    {id: "rating", value: "5.0", rating: true},
  ],
} as const;

export const aboutReasons = [
  {id: "apartments", icon: "/images/1-1.png"},
  {id: "locations", icon: "/images/2-4.png"},
  {id: "direct", icon: "/images/3-3.png"},
  {id: "groupSize", icon: "/images/4-3.png"},
  {id: "local", icon: "/images/5-1.png"},
  {id: "onsite", icon: "/images/6-1.png"},
] as const;

export const aboutValuesGallery = hotelGallery;

export const aboutWelcome = {
  rating: "5.0",
  audiences: [
    {id: "families", image: "/images/1-2.png"},
    {id: "groups", image: "/images/2-5.png"},
    {id: "longStay", image: "/images/3-4.png"},
    {id: "solo", image: "/images/4-4.png"},
  ],
} as const;

export const footerLegal = ["privacy", "terms", "cookies"] as const;

export const contactProperties = [
  {
    id: "gayano",
    shortName: "Gayano",
    name: "VLC Apart Gayano",
    phone: "+34 960 000 001",
    phoneHref: "tel:+34960000001",
    email: "Gayano@vlcapart.com",
    addressLines: ["Carrer de Gayano Lluch, 4", "Rascanya · Torrefiel"],
    cityPostal: "Valencia, 46025",
    neighbourhood: "Rascanya · Torrefiel",
    lat: 39.491135,
    lng: -0.380457,
    image: "/images/2-1.webp",
    mapsQuery: "39.491135,-0.380457",
  },
  {
    id: "cortina",
    shortName: "Cortina",
    name: "VLC Apart Cortina",
    phone: "+34 960 000 001",
    phoneHref: "tel:+34960000001",
    email: "Cortina@vlcapart.com",
    addressLines: ["C. de Carles Cortina, 5", "Benicalap"],
    cityPostal: "Valencia, 46025",
    neighbourhood: "Benicalap",
    lat: 39.499413,
    lng: -0.390065,
    image: "/images/2-2.png",
    mapsQuery: "39.499413,-0.390065",
  },
  {
    id: "encarna",
    shortName: "Encarna",
    name: "VLC Apart Encarna",
    phone: "+34 960 000 001",
    phoneHref: "tel:+34960000001",
    email: "Encarna@vlcapart.com",
    addressLines: ["Carrer d'Encarna Albarracín, 6", "Benicalap"],
    cityPostal: "Valencia, 46025",
    neighbourhood: "Benicalap",
    lat: 39.497311,
    lng: -0.389632,
    image: "/images/2-3.webp",
    mapsQuery: "39.497311,-0.389632",
  },
] as const;

export type ContactProperty = (typeof contactProperties)[number];

export function contactMapsEmbedUrl(property: ContactProperty, locale: string) {
  return `https://maps.google.com/maps?q=${property.mapsQuery}&z=16&hl=${locale}&output=embed`;
}

export function contactMapsSearchUrl(property: ContactProperty) {
  return `https://www.google.com/maps/search/?api=1&query=${property.mapsQuery}`;
}

export function contactMapsDirectionsUrl(property: ContactProperty) {
  return `https://www.google.com/maps/dir/?api=1&destination=${property.mapsQuery}`;
}

export const galleryFilters = [
  {value: "all"},
  {value: "gayano"},
  {value: "cortina"},
  {value: "encarna"},
] as const;

export const galleryPhotos = [
  {
    id: "gayano-living",
    src: "/images/2-1.webp",
    property: "gayano",
    propertyLabel: "VLC Apart Gayano",
    category: "apartment",
  },
  {
    id: "gayano-family",
    src: "/images/1-2.png",
    property: "gayano",
    propertyLabel: "VLC Apart Gayano",
    category: "apartment",
  },
  {
    id: "gayano-group",
    src: "/images/2-5.png",
    property: "gayano",
    propertyLabel: "VLC Apart Gayano",
    category: "apartment",
  },
  {
    id: "gayano-common",
    src: "/images/Accommodating-large-groups-together.webp",
    property: "gayano",
    propertyLabel: "VLC Apart Gayano",
    category: "common",
  },
  {
    id: "gayano-neighbourhood",
    src: "/images/bcg_1.webp",
    property: "gayano",
    propertyLabel: "VLC Apart Gayano",
    category: "neighbourhood",
  },
  {
    id: "cortina-exterior",
    src: "/images/2-2.png",
    property: "cortina",
    propertyLabel: "VLC Apart Cortina",
    category: "neighbourhood",
  },
  {
    id: "cortina-interior",
    src: "/images/4-2.webp",
    property: "cortina",
    propertyLabel: "VLC Apart Cortina",
    category: "apartment",
  },
  {
    id: "cortina-stay",
    src: "/images/3-1.webp",
    property: "cortina",
    propertyLabel: "VLC Apart Cortina",
    category: "apartment",
  },
  {
    id: "cortina-long-stay",
    src: "/images/3-4.png",
    property: "cortina",
    propertyLabel: "VLC Apart Cortina",
    category: "apartment",
  },
  {
    id: "cortina-location",
    src: "/images/Location.webp",
    property: "cortina",
    propertyLabel: "VLC Apart Cortina",
    category: "neighbourhood",
  },
  {
    id: "cortina-common",
    src: "/images/bcg_2.webp",
    property: "cortina",
    propertyLabel: "VLC Apart Cortina",
    category: "common",
  },
  {
    id: "encarna-building",
    src: "/images/2-3.webp",
    property: "encarna",
    propertyLabel: "VLC Apart Encarna",
    category: "neighbourhood",
  },
  {
    id: "encarna-couple",
    src: "/images/4-4.png",
    property: "encarna",
    propertyLabel: "VLC Apart Encarna",
    category: "apartment",
  },
  {
    id: "encarna-stay",
    src: "/images/3-2.webp",
    property: "encarna",
    propertyLabel: "VLC Apart Encarna",
    category: "apartment",
  },
  {
    id: "encarna-street",
    src: "/images/background_new.png",
    property: "encarna",
    propertyLabel: "VLC Apart Encarna",
    category: "neighbourhood",
  },
  {
    id: "encarna-common",
    src: "/images/4-1.webp",
    property: "encarna",
    propertyLabel: "VLC Apart Encarna",
    category: "common",
  },
] as const;

export type GalleryPhoto = (typeof galleryPhotos)[number];
export type GalleryFilter = (typeof galleryFilters)[number]["value"];

export const faqItems = [
  {id: "check-in", n: 1},
  {id: "self-check-in", n: 2},
  {id: "parking", n: 3},
  {id: "pets", n: 4},
  {id: "wifi", n: 5},
  {id: "kitchen", n: 6},
  {id: "minimum-stay", n: 7},
  {id: "direct-booking", n: 8},
  {id: "cancellation", n: 9},
  {id: "capacity", n: 10},
] as const;

export type FaqItem = (typeof faqItems)[number];

export const faqColumns = [faqItems.slice(0, 5), faqItems.slice(5)] as const;
