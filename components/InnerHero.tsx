import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";

type InnerHeroProps = {
  label: string;
  title: string;
  text: string;
  image: string;
};

export function InnerHero({ label, title, text, image }: InnerHeroProps) {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-black pt-28 text-white md:min-h-[700px]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.76)_48%,rgba(5,5,5,0.34)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(200,155,60,0.18),transparent_34%)]" />
      <div className="luxury-container relative z-10 flex min-h-[520px] items-center py-20 md:min-h-[600px]">
        <Reveal className="max-w-3xl">
          <p className="section-label">{label}</p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.06] text-balance md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
            {text}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={siteConfig.whatsapp}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-black transition hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(200,155,60,0.34)]"
            >
              <MessageCircle size={18} />
              WhatsApp Par Baat Karein
            </Link>
            <Link
              href="/contact-me"
              className="inline-flex items-center justify-center rounded-full border border-white/24 px-6 py-4 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
            >
              Consultation Book Karein
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
