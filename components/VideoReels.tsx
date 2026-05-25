"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Play } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { reels, siteConfig } from "@/data/site";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 34 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1] as const
    }
  })
};

export function VideoReels() {
  return (
    <section className="relative overflow-hidden bg-beige py-20 text-ink md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="section-label">VIDEO INSIGHTS</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Short legal explainers for fast clarity.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-700 md:text-base">
            A premium reel-style area ready for Instagram Reels, YouTube Shorts,
            and client education clips.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-gold/45 bg-ink px-6 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-black hover:shadow-[0_18px_46px_rgba(200,155,60,0.26)]"
            >
              <Instagram size={18} className="transition group-hover:scale-110" />
              Follow on Instagram
            </Link>
          </div>
        </motion.div>

        <div className="mt-14 hidden grid-cols-4 gap-5 lg:grid">
          {reels.map((reel, index) => (
            <motion.article
              key={reel.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden bg-black shadow-[0_24px_80px_rgba(30,20,8,0.18)]"
            >
              <ReelCard reel={reel} priority={index === 0} />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 lg:hidden"
        >
          <Swiper
            spaceBetween={16}
            slidesPerView={1.12}
            breakpoints={{
              520: { slidesPerView: 1.65 },
              760: { slidesPerView: 2.35 }
            }}
            className="!overflow-visible"
          >
            {reels.map((reel, index) => (
              <SwiperSlide key={reel.title}>
                <motion.article
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.24 }}
                  className="group relative overflow-hidden bg-black shadow-[0_22px_60px_rgba(30,20,8,0.18)]"
                >
                  <ReelCard reel={reel} />
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

function ReelCard({
  reel,
  priority = false
}: {
  reel: (typeof reels)[number];
  priority?: boolean;
}) {
  return (
    <Link
      href={reel.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open Instagram reel: ${reel.title}`}
      className="relative block aspect-[9/14] min-h-[430px] overflow-hidden md:min-h-[500px] lg:min-h-[520px]"
    >
      <Image
        src={reel.image}
        alt={reel.title}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 48vw, 86vw"
        className="object-cover transition duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.16)_0%,rgba(5,5,5,0.18)_36%,rgba(5,5,5,0.9)_100%)]" />
      <div className="absolute inset-0 border border-white/12 transition duration-300 group-hover:border-gold/65 group-hover:shadow-[inset_0_0_0_1px_rgba(200,155,60,0.18)]" />
      <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/70 bg-black/46 text-gold shadow-[0_0_34px_rgba(200,155,60,0.22)] backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-black">
        <Play size={24} fill="currentColor" />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-gold">
          {reel.label}
        </p>
        <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white text-balance">
          {reel.title}
        </h3>
      </div>
    </Link>
  );
}
