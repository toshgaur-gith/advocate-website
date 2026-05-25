import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";

type CTASectionProps = {
  title: string;
  text: string;
};

export function CTASection({ title, text }: CTASectionProps) {
  return (
    <section className="bg-black py-16 text-white md:py-20">
      <div className="luxury-container">
        <Reveal className="border border-gold/22 bg-white/[0.035] p-7 text-center md:p-10">
          <p className="section-label">Legal Help</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/66 md:text-base">
            {text}
          </p>
          <Link
            href={siteConfig.whatsapp}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-black transition hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(200,155,60,0.32)]"
          >
            <MessageCircle size={18} />
            WhatsApp Par Message Karein
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
