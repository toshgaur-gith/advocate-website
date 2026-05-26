import {
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FileCheck2,
  Gavel,
  HeartHandshake,
  Home,
  Landmark,
  Scale,
  ShieldCheck,
  Users
} from "lucide-react";

export const siteConfig = {
  name: "Aap Ke Vakil Sahab",
  title: "Aap Ke Vakil Sahab | Advocate & Legal Consultant",
  description:
    "Premium legal consultation for criminal law, civil litigation, family disputes, bail matters, property disputes, DRT and corporate advisory.",
  url: "https://advocate-example.vercel.app",
  logo: "/images/brand-logo.png",
  ogImage:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&h=630&q=80",
  instagram: "https://www.instagram.com/aap_ke_vakilsahab/",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "https://wa.me/919876543210",
  email: "vakilsahabaapke@gmail.com",
  emailHref: "mailto:vakilsahabaapke@gmail.com",
  address: "Chamber no G -322 3rd Floor, Karkardooma Court Complex, Delhi 110032"
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about-me" },
  { label: "Services", href: "/services" },
  { label: "Contact Me", href: "/contact-me" }
];

export const footerLinks = [
  ...navLinks,
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" }
];

export const heroSlides = [
  {
    image:
      "/images/DHC.png",
    title: "आपके अधिकार। हमारी ज़िम्मेदारी।",
    subtitle:
      "Strategic legal representation with discretion, preparation, and a client-first mindset.",
    primaryCta: "Chat on WhatsApp",
    
  },
  {
    image:
      "/images/SCOI.png",
    title: "अधिकारों की रक्षा। न्याय की प्रतिबद्धता।",
    subtitle:
      "Criminal, civil, family, property, and corporate advisory support with calm, precise guidance.",
    primaryCta: "Chat on WhatsApp",
    secondaryCta: "View Services"
  },
  {
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=82",
    title: "सही सलाह। मज़बूत पक्ष।",
    subtitle:
      "Responsive legal consultation designed for individuals, families, founders, and businesses.",
    primaryCta: "Chat on WhatsApp",
   
  }
];

export const stats = [
  { label: "Kanooni Guidance" },
  { label: "Strong Case Preparation" },
  {  label: "Practical Legal Support" },
  { label: "Client First Approach" }
];

export const services = [
  { title: "Criminal Law", icon: ShieldCheck, description: "Defence strategy, trial support, FIR guidance, and urgent legal response." },
  { title: "Civil Litigation", icon: Scale, description: "Civil suits, injunctions, recovery disputes, and court representation." },
  { title: "Family Law", icon: HeartHandshake, description: "Sensitive advisory for family settlements, custody, and maintenance matters." },
  { title: "Divorce Cases", icon: Users, description: "Mutual and contested divorce guidance with practical, confidential support." },
  { title: "Bail Matters", icon: Gavel, description: "Anticipatory and regular bail applications handled with urgency." },
  { title: "Consumer Cases", icon: BadgeCheck, description: "Representation for defective services, unfair trade, and consumer claims." },
  { title: "Cheque Bounce", icon: FileCheck2, description: "Section 138 notices, complaints, defence, and settlement advisory." },
  { title: "Property Disputes", icon: Home, description: "Title, possession, partition, tenancy, and documentation disputes." },
  { title: "DRT Matters", icon: Landmark, description: "Debt recovery tribunal matters, SARFAESI responses, and bank disputes." },
  { title: "Corporate Advisory", icon: BriefcaseBusiness, description: "Contracts, notices, compliance, disputes, and founder advisory." }
];

export const highlights = [
  "Personalized legal strategies",
  "Honest communication",
  "Client-first approach",
  "Proven success"
];

export const reels = [
  {
    title: "NDPS Section 37 vs Article 21",
    label: "INSTAGRAM REELS",
    image: "/images/reels/ndps-article-21.jpg",
    link: "https://www.instagram.com/aap_ke_vakilsahab/reel/DYhSNs9IGYv/"
  },
  {
    title: "Rights From The Supreme Court",
    label: "INSTAGRAM REELS",
    image: "/images/reels/supreme-court-rights.jpg",
    link: "https://www.instagram.com/aap_ke_vakilsahab/reel/DYfNQ-Tpt4E/"
  },
  {
    title: "Digital Arrest Is A Cyber Scam",
    label: "INSTAGRAM REELS",
    image: "/images/reels/digital-arrest-scam.jpg",
    link: "https://www.instagram.com/aap_ke_vakilsahab/reel/DYezT6RI-Kf/"
  },
  {
    title: "FIR Refusal And BNS 199",
    label: "INSTAGRAM REELS",
    image: "/images/reels/fir-police-bns199.jpg",
    link: "https://www.instagram.com/aap_ke_vakilsahab/reel/DYcNGGSoAtA/"
  },
  {
    title: "Three Types Of Bail Everyone Should Know",
    label: "INSTAGRAM REELS",
    image: "/images/reels/bail-three-types.jpg",
    link: "https://www.instagram.com/aap_ke_vakilsahab/reel/DYZl5SQo_9f/"
  },
  {
    title: "Cheque Bounce: Know The Law",
    label: "INSTAGRAM REELS",
    image: "/images/reels/cheque-bounce.jpg",
    link: "https://www.instagram.com/aap_ke_vakilsahab/reel/DYUaZFzoqVc/"
  }
];

export const testimonials = [
  {
    name: "Rohit Mehra",
    city: "New Delhi",
    quote:
      "The advice was clear, timely, and practical. Every court step was explained without confusion.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Nisha Kapoor",
    city: "Gurugram",
    quote:
      "A calm and professional approach during a very stressful family matter. Highly responsive.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Amit Sethi",
    city: "Noida",
    quote:
      "Strong preparation, honest communication, and excellent drafting support for our property dispute.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Priya Malhotra",
    city: "Faridabad",
    quote:
      "The consultation helped me understand the realistic options before taking the next legal step.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Karan Bhasin",
    city: "Ghaziabad",
    quote:
      "Very professional drafting and quick responses during an urgent cheque bounce matter.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Meera Jain",
    city: "New Delhi",
    quote:
      "The matter was handled with discretion, patience, and a clear plan from the first meeting.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
  }
];

export const faqItems = [
  {
    question: "How can I book a consultation?",
    answer:
      "You can call, send a WhatsApp message, or submit the contact form with your preferred case type and a short summary."
  },
  {
    question: "Is online consultation available?",
    answer:
      "Yes, online consultations can be scheduled for document review, legal notices, case strategy, and follow-up discussions."
  },
  {
    question: "What should I bring for the first consultation?",
    answer:
      "Bring all relevant documents, notices, FIR copies, agreements, previous orders, and a concise timeline of events."
  }
];

export const legalSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteConfig.name,
  image: siteConfig.ogImage,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chamber 204, District Court Complex",
    addressLocality: "New Delhi",
    addressCountry: "IN"
  },
  areaServed: "India",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Legal Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title
      }
    }))
  }
};

export const contactCards = [
  { label: "Office", value: siteConfig.address, icon: Building2 },
  { label: "Phone", value: siteConfig.phone, icon: CheckCircle2 },
  { label: "Email", value: siteConfig.email, icon: Banknote }
];
