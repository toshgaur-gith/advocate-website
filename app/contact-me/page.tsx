import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Footer } from "@/components/Footer";
import { InnerHero } from "@/components/InnerHero";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Aap Ke Vakil Sahab se WhatsApp, phone, email ya office visit ke through legal consultation book karein."
};

const contactItems = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Fast response ke liye matter ka short summary bhejein.",
    value: "Chat on WhatsApp",
    href: siteConfig.whatsapp
  },
  {
    icon: Phone,
    title: "Phone",
    text: "Consultation timing aur urgent matter ke liye call karein.",
    value: siteConfig.phone,
    href: siteConfig.phoneHref
  },
  {
    icon: Mail,
    title: "Email",
    text: "Documents ya detailed query ke liye email bhej sakte hain.",
    value: siteConfig.email,
    href: siteConfig.emailHref
  },
  {
    icon: MapPin,
    title: "Office",
    text: "Appointment confirm karke office visit plan karein.",
    value: siteConfig.address,
    href: "https://www.google.com/maps?q=District%20Court%20Complex%20New%20Delhi"
  }
];

export default function ContactMePage() {
  return (
    <>
      <Navbar />
      <main>
        <InnerHero
          label="Contact Me"
          title="Legal help ke liye direct aur simple contact."
          text="WhatsApp, call, email ya office consultation - jo option convenient ho, usse connect karein aur matter ka next step clear karein."
          image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=82"
        />

        <section className="bg-beige py-20 text-ink md:py-28">
          <div className="luxury-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="section-label">Reach Out</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl">
                Apna concern share karein, hum practical direction denge.
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
                Sensitive details tabhi share karein jab consultation confirm ho.
                Pehle short summary aur case type enough hota hai.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <Link
                      href={item.href}
                      className="group block h-full border border-black/8 bg-white/70 p-7 transition hover:-translate-y-1 hover:border-gold/70 hover:bg-white hover:shadow-[0_24px_70px_rgba(30,20,8,0.12)]"
                    >
                      <span className="grid size-12 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-black">
                        <Icon size={22} />
                      </span>
                      <h3 className="mt-6 font-serif text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-neutral-700">{item.text}</p>
                      <p className="mt-5 text-sm font-bold text-gold">{item.value}</p>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-ink py-20 text-white md:py-28">
          <div className="luxury-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="section-label">Office Location</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-5xl">
                Visit se pehle appointment confirm karna best rahega.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/66 md:text-base">
                Court schedule aur hearings ke kaaran availability change ho sakti
                hai. WhatsApp par time confirm karke aana convenient rahega.
              </p>
              <Link
                href={siteConfig.whatsapp}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-black transition hover:scale-[1.02]"
              >
                <MessageCircle size={18} />
                Appointment Confirm Karein
              </Link>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden border border-white/10 bg-white/[0.04] premium-shadow">
                <iframe
                  title="Office location map"
                  src="https://www.google.com/maps?q=District%20Court%20Complex%20New%20Delhi&output=embed"
                  width="100%"
                  height="430"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block grayscale"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
