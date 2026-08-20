export const navLinks = [
  {label: "Main", href: "/"},
  {label: "About Us", href: "#"},
  {label: "Hotels", href: "/hotels"},
  {label: "Offers", href: "#offers"},
  {label: "Gallery", href: "#"},
  {label: "Contacts", href: "#"},
  {label: "FAQ", href: "#"},
] as const;

export const phoneDisplay = "+ 34 960 000 001";

export const hotelOptions = [
  {value: "all", label: "All Aparthotel"},
  {value: "gayano", label: "VLC Apart Gayano"},
] as const;

export const amenities = [
  {
    title: "Fully Equipped Kitchen",
    description: "Fridge, hob, dishwasher and everything you need to cook at home",
    icon: "/images/1.png",
  },
  {
    title: "Free High-Speed Wi-Fi",
    description: "Gigabit internet in every apartment — for work and leisure",
    icon: "/images/2.png",
  },
  {
    title: "Near the Sea & Centre",
    description: "All our locations are within walking distance of restaurants and landmarks",
    icon: "/images/3.png",
  },
  {
    title: "Online Check-in 24/7",
    description: "Arrive at any time without waiting at reception — via app or door code",
    icon: "/images/4.png",
  },
  {
    title: "Laundry",
    description: "In-apartment washer and dryer — fresh clothes without leaving home",
    icon: "/images/5.png",
  },

  {
    title: "Spacious Apartments",
    description:
      "Generous layouts — up to 12 people in one apartment. Ideal for groups and families",
    icon: "/images/6.png",
  },
  {
    title: "24/7 Support",
    description: "Chatbot and live agent always available to resolve any issue",
    icon: "/images/7.png",
  },
  {
    title: "Parking & Transfers",
    description: "Free parking around and airport transfer to/from Valencia Airport",
    icon: "/images/8.png",
  },
] as const;

const hotelGallery = ["/images/2-1.webp", "/images/2-2.png", "/images/2-3.webp"] as const;

export const hotels = [
  {
    name: "VLC Apart Gayano",
    location: "Valencia, Rascanya · Torrefiel",
    description:
      "A cosy stay in a lively residential neighbourhood with good tram and bus connections and a genuine local feel",
    longDescription:
      "A cosy stay in a lively, authentic neighbourhood north of Valencia's city centre. Apartments with capacity for up to 12 guests, good tram and bus connections make it easy to explore the city, while local markets, cafés and parks are right on your doorstep. Perfect for families, groups and anyone who wants to experience real Valencian life",
    tags: "City Connections · Residential Feel · Local Atmosphere",
    price: "€99",
    image: "/images/2-1.webp",
    capacity: 12,
    gallery: hotelGallery,
  },
  {
    name: "VLC Apart Cortina",
    location: "Valencia, Benicalap",
    description:
      "Quiet family-friendly district with tram line nearby and one of Valencia's largest parks on the doorstep",
    longDescription:
      "Set in a quiet, family-friendly district with tram line 4 just minutes away. Apartments with capacity for up to 8 guests, with one of Valencia's largest green spaces — Parque de Benicalap — on the doorstep, making it ideal for families and longer stays. A peaceful base with easy access to the city centre and the beach",
    tags: "Tram Access · Park Proximity · Family-Friendly Area",
    price: "€99",
    image: "/images/2-2.png",
    capacity: 8,
    gallery: hotelGallery,
  },
  {
    name: "VLC Apart Encarna",
    location: "Valencia, Benicalap",
    description:
      "Authentic residential streets, local cafés and easy bike or tram access to Valencia's landmarks — without the tourist bustle",
    longDescription:
      "Authentic residential streets, local cafés and a calm atmosphere away from the tourist crowds. Apartments with capacity for up to 4 guests, easy bike or tram access to Valencia's landmarks makes this a great choice for those who want comfort and a genuine local experience — without the bustle",
    tags: "Quiet Streets · Authentic Neighbourhood · Bike-Friendly",
    price: "€99",
    image: "/images/2-3.webp",
    capacity: 4,
    gallery: hotelGallery,
  },
] as const;

export const hotelsHero = {
  eyebrow: "Our hotels",
  titleLead: "Find Your Perfect Stay",
  titleAccent: "in Valencia",
  body: "Three aparthotels in the heart of Valencia — each in its own neighbourhood, each with its own character. Whether you're travelling with family, a group of friends or a remote team, we have the right space for your stay. All apartments are fully equipped, spacious and designed for comfort — from a weekend getaway to a long-term stay.",
  image: "/images/4-2.webp",
  cta: "About Us",
  stats: [
    {value: "12", unit: "PPL", label: "max capacity"},
    {value: "10%+", unit: "", label: "Discount on Direct Booking"},
  ],
} as const;

export const advantagePoints = [
  {
    title: "Corporate Retreats",
    description: "A complete space for your team with work areas and meeting rooms",
  },
  {
    title: "Large Family Holidays",
    description: "Everyone under one roof — no hotel corridors between rooms",
  },
  {
    title: "Tour Groups & Travel Agencies",
    description: "Special rates and terms for tour operators and travel agencies",
  },
] as const;

export const audienceTags = ["Corporate", "Families", "Tour Groups", "Celebrations"] as const;

export const offers = [
  {
    discount: "10%+",
    title: "Direct Booking",
    description:
      "Book directly on our website and get a guaranteed best price. No middleman commissions",
    cta: "Book Now",
    image: "/images/3-1.webp",
  },
  {
    discount: "30%",
    title: "Long-term Stay",
    description:
      "Book for 30+ days and get a special 30% discount. Perfect for remote work or summer stay in Valencia",
    cta: "Book Now",
    image: "/images/3-2.webp",
  },
] as const;

export const eventOffer = {
  eyebrow: "• Valencia Event",
  title: "Gran Feria de València",
  description:
    "Valencia's biggest summer celebration — the whole month of July. Book your apartment early and save 15%",
  discount: "-15%",
  discountNote: "with early booking",
  cta: "Book for the Festival",
} as const;

export const reviews = [
  {
    quote:
      "A wonderful place for a large family! We arrived as 9 people and had plenty of space. The kitchen is fully equipped, and the city view is incredible.",
    name: "Olena K.",
    meta: "Kyiv, Ukraine · July 2024",
  },
  {
    quote:
      "Perfect for our team offsite. We could work, cook together and still feel at home. Check-in was seamless and support replied within minutes.",
    name: "Marcus L.",
    meta: "Berlin, Germany · March 2025",
  },
  {
    quote:
      "Spacious, clean and right where we needed to be. Booking direct saved us money and the apartment fit our whole group comfortably.",
    name: "Sofía R.",
    meta: "Madrid, Spain · June 2025",
  },
  {
    quote:
      "We stayed for a week with friends and loved every bit of it. Quiet building, fast Wi-Fi, and the terrace made evenings special.",
    name: "Tomáš V.",
    meta: "Prague, Czechia · September 2024",
  },
  {
    quote:
      "Exactly what we needed for a weekend escape. The apartment was spotless, the bed was excellent, and communication was clear from start to finish.",
    name: "Amélie D.",
    meta: "Lyon, France · January 2025",
  },
  {
    quote:
      "Great location for exploring the city on foot. Having a full kitchen meant we could cook after long days out — felt like a real home.",
    name: "James W.",
    meta: "London, UK · April 2025",
  },
] as const;

export const footerLegal = ["Privacy", "Terms & conditions", "Cookies"] as const;
