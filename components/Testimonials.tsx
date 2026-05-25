"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Testimonials() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="luxury-container">
        <SectionHeader
          label="Client Words"
          title="Trust built through clarity and care."
          text="Representative feedback from clients who valued responsive communication, preparation, and practical legal strategy."
          dark
        />

        <Reveal className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            rewind
            autoplay={{ delay: 4800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={18}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1100: { slidesPerView: 3 }
            }}
            className="pb-10"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="h-auto">
                <article className="flex min-h-80 flex-col border border-white/10 bg-white/[0.04] p-7 transition hover:border-gold/60">
                  <Quote className="text-gold" size={32} />
                  <p className="mt-6 flex-1 text-base leading-8 text-white/74">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-7 flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      loading="lazy"
                      className="size-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gold">{testimonial.city}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
