"use client";

import Link from "next/link";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/20 bg-black/95 px-3 py-2 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <Link href={siteConfig.phoneHref} className="flex min-h-12 flex-col items-center justify-center rounded-sm bg-white/7 text-[0.68rem] font-bold text-white">
          <Phone size={16} />
          Call
        </Link>
        <Link href={siteConfig.whatsapp} className="flex min-h-12 flex-col items-center justify-center rounded-sm bg-gold text-[0.68rem] font-bold text-black">
          <MessageCircle size={16} />
          WhatsApp
        </Link>
        <Link href="/#contact" className="flex min-h-12 flex-col items-center justify-center rounded-sm bg-white/7 text-[0.68rem] font-bold text-white">
          <CalendarCheck size={16} />
          Consult
        </Link>
      </div>
    </div>
  );
}
