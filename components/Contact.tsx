import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";

const caseTypes = [
  "Criminal Law",
  "Civil Litigation",
  "Family Law",
  "Divorce Cases",
  "Bail Matters",
  "Property Disputes",
  "Corporate Advisory"
];

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-20 md:py-28">
      <div className="luxury-container">
        <SectionHeader
          label="Contact Me"
          title="Request a confidential consultation."
          text="Share a short summary and the office will respond with the next practical step."
          dark
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <form className="border border-white/10 bg-white/[0.04] p-5 md:p-8" action={`mailto:${siteConfig.email}`} method="post">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Name</span>
                  <input name="name" required className="mt-2 w-full border border-white/10 bg-black/45 px-4 py-4 text-white outline-none transition focus:border-gold" placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Phone</span>
                  <input name="phone" required type="tel" className="mt-2 w-full border border-white/10 bg-black/45 px-4 py-4 text-white outline-none transition focus:border-gold" placeholder="+91" />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Case Type</span>
                <select name="caseType" className="mt-2 w-full border border-white/10 bg-black/45 px-4 py-4 text-white outline-none transition focus:border-gold">
                  {caseTypes.map((type) => (
                    <option key={type} value={type} className="bg-black">
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-4 block">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Message</span>
                <textarea name="message" rows={5} className="mt-2 w-full resize-none border border-white/10 bg-black/45 px-4 py-4 text-white outline-none transition focus:border-gold" placeholder="Briefly describe your matter" />
              </label>
              <button type="submit" className="mt-6 w-full rounded-full bg-gold px-6 py-4 text-sm font-bold text-black transition hover:shadow-[0_0_34px_rgba(200,155,60,0.3)] sm:w-auto">
                Book Consultation
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4">
              <div className="border border-white/10 bg-white/[0.04] p-6">
                <MapPin className="text-gold" />
                <h3 className="mt-4 font-serif text-2xl font-semibold text-white">Office Address</h3>
                <p className="mt-2 text-sm leading-7 text-white/66">{siteConfig.address}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link href={siteConfig.phoneHref} className="border border-white/10 bg-white/[0.04] p-6 transition hover:border-gold/60">
                  <Phone className="text-gold" />
                  <p className="mt-4 text-sm font-bold text-white">Phone</p>
                  <p className="mt-1 text-sm text-white/66">{siteConfig.phone}</p>
                </Link>
                <Link href={siteConfig.whatsapp} className="border border-white/10 bg-white/[0.04] p-6 transition hover:border-gold/60">
                  <MessageCircle className="text-gold" />
                  <p className="mt-4 text-sm font-bold text-white">WhatsApp</p>
                  <p className="mt-1 text-sm text-white/66">Instant chat</p>
                </Link>
              </div>
              <Link href={siteConfig.emailHref} className="border border-white/10 bg-white/[0.04] p-6 transition hover:border-gold/60">
                <Mail className="text-gold" />
                <p className="mt-4 text-sm font-bold text-white">Email</p>
                <p className="mt-1 text-sm text-white/66">{siteConfig.email}</p>
              </Link>
              <div className="overflow-hidden border border-white/10 bg-white/[0.04]">
                <iframe
                  title="Office location map"
                  src="https://www.google.com/maps?q=District%20Court%20Complex%20New%20Delhi&output=embed"
                  width="100%"
                  height="260"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block grayscale"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
