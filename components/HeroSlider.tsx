"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";
import { heroSlides, siteConfig, stats } from "@/data/site";

export function HeroSlider() {
  return (
    <section id="home" className="relative min-h-screen bg-black">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        rewind
        speed={950}
        autoplay={{ delay: 5200, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="hero-swiper h-screen min-h-[760px] md:min-h-[820px]"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative h-full">
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6.8, ease: "easeOut" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={slide === heroSlides[0]}
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.93)_0%,rgba(5,5,5,0.68)_42%,rgba(5,5,5,0.28)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(200,155,60,0.22),transparent_32%)]" />

              <div className="luxury-container relative z-10 flex h-full items-center pt-20">
                <div className="max-w-3xl pb-28">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                    className="section-label"
                  >
                    Premium Legal Representation
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.72, delay: 0.08 }}
                    className="mt-5 font-serif text-4xl font-semibold leading-[1.06] text-white text-balance md:text-7xl"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.72, delay: 0.16 }}
                    className="mt-6 max-w-2xl text-base leading-8 text-white/76 md:text-lg"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.72, delay: 0.24 }}
                    className="mt-9 flex flex-col gap-3 sm:flex-row"
                  >
                    <Link href={siteConfig.whatsapp} className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-black transition hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(200,155,60,0.34)]">
                      <MessageCircle size={18} />
                      {slide.primaryCta}
                    </Link>
                    <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 px-6 py-4 text-sm font-semibold text-white transition hover:border-gold hover:text-gold">
                      <CalendarCheck size={18} />
                      {slide.secondaryCta}
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-x-0 bottom-8 z-20 hidden md:block">
        <div className="luxury-container">
          <div className="grid grid-cols-4 overflow-hidden border border-white/12 bg-black/50 backdrop-blur-xl premium-shadow">
            {stats.map((stat) => (
              <div key={stat.label} className="border-r border-white/10 p-6 last:border-r-0">
                <p className="font-serif text-3xl font-semibold text-gold">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link
        href="/#about"
        className="absolute bottom-7 right-6 z-20 hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70 transition hover:text-gold lg:flex"
      >
        Explore
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}
