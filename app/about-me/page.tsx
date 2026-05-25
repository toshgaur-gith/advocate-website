import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle2, MessageCircle, Scale, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { InnerHero } from "@/components/InnerHero";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Aap Ke Vakil Sahab ke baare mein - trusted advocate aur legal consultant for practical legal guidance."
};

const values = [
  "Har client ke case ko detail mein samajhna",
  "Seedhi, honest aur practical legal advice dena",
  "Court strategy ko documents aur facts ke saath prepare karna",
  "Client ko har important step par clearly update rakhna"
];

const cards = [
  { icon: Scale, title: "Court Focused", text: "Criminal, civil aur family matters mein structured representation." },
  { icon: ShieldCheck, title: "Client First", text: "Aapki privacy, urgency aur legal risk ko priority milti hai." },
  { icon: Award, title: "Prepared Strategy", text: "Har matter mein facts, documents aur law ka balanced approach." }
];

export default function AboutMePage() {
  return (
    <>
      <Navbar />
      <main>
        <InnerHero
          label="About Me"
          title="Aapke legal rights ke liye focused aur practical advocacy."
          text="Aap Ke Vakil Sahab ek modern legal practice hai jahan client ko simple Hinglish mein clear guidance, strong preparation aur trustworthy representation milti hai."
          image="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1800&q=82"
        />

        <section className="bg-beige py-20 text-ink md:py-28">
          <div className="luxury-container grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal className="relative">
              <div className="absolute -left-4 -top-4 h-28 w-28 border-l border-t border-gold/70" />
              <div className="absolute -bottom-4 -right-4 h-28 w-28 border-b border-r border-gold/70" />
              <div className="relative aspect-[4/5] overflow-hidden bg-black premium-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=82"
                  alt="Advocate portrait"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="section-label">Professional Approach</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl">
                Kanoon ko simple banana, aur action ko strong banana.
              </h2>
              <p className="mt-6 text-sm leading-8 text-neutral-700 md:text-base">
                Legal problem jab personal ya urgent ho, tab clear direction sabse
                zaroori hoti hai. Yahan aapko confusing legal language ke bajay
                practical steps, realistic options aur case-focused strategy milti
                hai.
              </p>
              <div className="mt-8 grid gap-3">
                {values.map((value) => (
                  <div key={value} className="flex items-start gap-3 border border-black/8 bg-white/60 p-4">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-gold" size={19} />
                    <span className="text-sm font-semibold leading-6 text-neutral-800">{value}</span>
                  </div>
                ))}
              </div>
              <Link
                href={siteConfig.whatsapp}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-bold text-white transition hover:bg-gold hover:text-black"
              >
                <MessageCircle size={18} />
                Direct WhatsApp Karein
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="bg-ink py-20 text-white md:py-28">
          <div className="luxury-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="section-label">Why Clients Trust</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl">
                Legal service jo premium bhi hai aur personal bhi.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.title} delay={index * 0.05}>
                    <article className="h-full border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-gold/60">
                      <span className="grid size-12 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                        <Icon size={22} />
                      </span>
                      <h3 className="mt-6 font-serif text-2xl font-semibold">{card.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/62">{card.text}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection
          title="Aapka matter important hai. Pehla step clear rakhein."
          text="Short summary WhatsApp par bhejein, aur consultation ke liye practical next step receive karein."
        />
      </main>
      <Footer />
    </>
  );
}
