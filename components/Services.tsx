"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { services } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Services() {
  return (
    <section id="services" className="bg-ink py-20 md:py-28">
      <div className="luxury-container">
        <SectionHeader
          label="Practice Areas"
          title="Legal services built for decisive action."
          text="Focused representation across disputes, advisory, notices, negotiations, court proceedings, and urgent legal remedies."
          dark
        />

        <div className="mt-12 hidden grid-cols-2 gap-4 lg:grid xl:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.03}>
                <article className="group h-full border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/70 hover:bg-white/[0.06] hover:shadow-[0_18px_70px_rgba(200,155,60,0.12)]">
                  <span className="grid size-12 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-black">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{service.description}</p>
                  <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold">
                    Consult
                    <ArrowRight size={16} />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 lg:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1.08}
            breakpoints={{
              540: { slidesPerView: 2.05 }
            }}
            className="pb-10"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <SwiperSlide key={service.title} className="h-auto">
                  <article className="min-h-72 border border-white/10 bg-white/[0.04] p-6">
                    <span className="grid size-12 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-6 font-serif text-2xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/64">{service.description}</p>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
