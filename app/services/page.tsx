import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { InnerHero } from "@/components/InnerHero";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { services, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Criminal law, civil litigation, family law, bail, cheque bounce, property disputes aur corporate advisory services."
};

const hinglishDescriptions: Record<string, string> = {
  "Criminal Law": "FIR, investigation, trial aur defence strategy ke liye focused legal support.",
  "Civil Litigation": "Civil suits, injunctions, recovery aur disputes mein structured representation.",
  "Family Law": "Family settlements, maintenance, custody aur sensitive matters mein practical guidance.",
  "Divorce Cases": "Mutual ya contested divorce mein confidential aur step-by-step support.",
  "Bail Matters": "Anticipatory bail, regular bail aur urgent court relief ke liye quick action.",
  "Consumer Cases": "Defective service, unfair trade practice aur consumer claims ke liye legal remedy.",
  "Cheque Bounce": "Section 138 notices, complaints, defence aur settlement ke liye clear advice.",
  "Property Disputes": "Title, possession, partition, tenancy aur documentation disputes ka solution.",
  "DRT Matters": "Debt recovery, SARFAESI aur bank disputes mein tribunal-focused strategy.",
  "Corporate Advisory": "Contracts, notices, compliance aur business disputes ke liye practical legal help."
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <InnerHero
          label="Services"
          title="Har legal matter ke liye clear strategy aur strong representation."
          text="Criminal, civil, family, property, banking aur business matters mein premium legal consultation simple Hinglish mein."
          image="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=1800&q=82"
        />

        <section className="bg-beige py-20 text-ink md:py-28">
          <div className="luxury-container">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="section-label">Practice Areas</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl">
                Legal services jo aapke facts aur urgency ke hisaab se plan hoti hain.
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-700 md:text-base">
                Har card ek focused practice area hai. Learn More par click karke
                aap consultation request kar sakte hain.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} delay={index * 0.035}>
                    <article className="group flex h-full flex-col border border-black/8 bg-white/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/70 hover:bg-white hover:shadow-[0_24px_70px_rgba(30,20,8,0.12)]">
                      <span className="grid size-12 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-black">
                        <Icon size={22} />
                      </span>
                      <h3 className="mt-6 font-serif text-2xl font-semibold">{service.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-neutral-700">
                        {hinglishDescriptions[service.title]}
                      </p>
                      <Link
                        href="/contact-me"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold transition group-hover:text-ink"
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </Link>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-ink py-16 text-white md:py-20">
          <div className="luxury-container grid items-center gap-6 border border-gold/22 bg-white/[0.04] p-7 md:grid-cols-[1fr_auto] md:p-10">
            <Reveal>
              <p className="section-label">Urgent Legal Help</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight md:text-5xl">
                Matter urgent hai? WhatsApp par short details bhejein.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66">
                Case type, location aur urgent concern share karein. Consultation
                ke liye next step clear kar diya jayega.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link
                href={siteConfig.whatsapp}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-black transition hover:scale-[1.02]"
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </Link>
            </Reveal>
          </div>
        </section>

        <CTASection
          title="Confusion ko clarity mein convert karein."
          text="Aapka legal issue chahe simple ho ya complex, pehle consultation se direction clear ho sakti hai."
        />
      </main>
      <Footer />
    </>
  );
}
