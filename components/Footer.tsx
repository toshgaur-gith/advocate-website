import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { footerLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[radial-gradient(circle_at_16%_0%,rgba(200,155,60,0.24),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(139,100,32,0.2),transparent_34%),linear-gradient(180deg,#171006_0%,#080604_38%,#020202_100%)] pb-24 text-white shadow-[inset_0_34px_90px_rgba(200,155,60,0.08)] md:pb-0">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8c572] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(200,155,60,0.16),transparent)]" />
      <div className="pointer-events-none absolute -left-28 top-4 h-80 w-80 rounded-full bg-[#c89b3c]/18 blur-[105px]" />
      <div className="pointer-events-none absolute right-[-5rem] top-12 h-72 w-72 rounded-full bg-[#8b6420]/18 blur-[100px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(0deg,rgba(0,0,0,0.72),transparent)]" />

      <div className="relative border-t border-[#d7b15b]/40">
        <div className="luxury-container grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr_1fr] md:py-18">
          <div>
            <BrandLogo footer />
            <p className="mt-5 max-w-md text-sm leading-7 text-white/58">
              Premium legal consultation for individuals, families, founders, and
              businesses seeking clear strategy and dependable representation.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, href: siteConfig.instagram, label: "Instagram" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Facebook, href: "#", label: "Facebook" }
              ].map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-[#d7b15b]/24 bg-[#c89b3c]/[0.055] text-white/70 shadow-[0_12px_34px_rgba(0,0,0,0.26)] transition hover:border-[#e8c572] hover:bg-[#c89b3c]/12 hover:text-[#e8c572] hover:shadow-[0_0_28px_rgba(200,155,60,0.22)]"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-semibold">Quick Links</h3>
            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-white/62 transition hover:translate-x-1 hover:text-gold">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-semibold">Contact</h3>
            <div className="mt-5 grid gap-4 text-sm text-white/62">
              <p className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-gold" size={18} />
                {siteConfig.address}
              </p>
              <Link href={siteConfig.phoneHref} className="flex gap-3 transition hover:text-gold">
                <Phone className="shrink-0 text-gold" size={18} />
                {siteConfig.phone}
              </Link>
              <Link href={siteConfig.whatsapp} className="flex gap-3 transition hover:text-gold">
                <MessageCircle className="shrink-0 text-gold" size={18} />
                Chat on WhatsApp
              </Link>
              <Link href={siteConfig.emailHref} className="flex gap-3 transition hover:text-gold">
                <Mail className="shrink-0 text-gold" size={18} />
                {siteConfig.email}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-y border-[#d7b15b]/30 bg-[linear-gradient(90deg,rgba(200,155,60,0.18),rgba(116,76,22,0.16),rgba(255,255,255,0.045),rgba(200,155,60,0.14))] shadow-[inset_0_1px_0_rgba(255,255,255,0.055),0_-18px_70px_rgba(200,155,60,0.06)]">
        <div className="luxury-container py-6">
          <p className="text-xs leading-6 text-white/68">
            Disclaimer: As per the rules of the Bar Council of India, advocates
            are not permitted to solicit work or advertise. By accessing this
            website, the user acknowledges that they are seeking information
            voluntarily for their own understanding about the advocate/legal
            services.
          </p>
        </div>
      </div>

      <div className="luxury-container relative py-6 text-center text-xs text-white/44">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
