import Image from "next/image";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";
import { highlights, siteConfig } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="bg-beige py-20 text-ink md:py-28">
      <div className="luxury-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative">
          <div className="absolute -left-4 -top-4 h-28 w-28 border-l border-t border-gold/70" />
          <div className="absolute -bottom-4 -right-4 h-28 w-28 border-b border-r border-gold/70" />
          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 premium-shadow">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=82"
              alt="Advocate portrait"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="section-label">About Me</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl">
            Strategic advocacy with a refined, client-first legal experience.
          </h2>
          <p className="mt-6 text-sm leading-8 text-neutral-700 md:text-base">
            With extensive courtroom exposure and advisory experience, the
            practice focuses on clear strategy, careful drafting, precise
            preparation, and responsive communication across complex legal
            matters.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 border border-black/8 bg-white/55 p-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                  <Check size={17} />
                </span>
                <span className="text-sm font-semibold text-neutral-800">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={siteConfig.whatsapp} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-bold text-white transition hover:bg-gold hover:text-black">
              <MessageCircle size={18} />
              WhatsApp Me
            </Link>
            <Link href="/#services" className="inline-flex items-center justify-center rounded-full border border-ink/20 px-6 py-4 text-sm font-bold text-ink transition hover:border-gold hover:text-gold">
              Explore Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
