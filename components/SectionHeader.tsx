"use client";

import { Reveal } from "@/components/Reveal";

type SectionHeaderProps = {
  label: string;
  title: string;
  text?: string;
  dark?: boolean;
};

export function SectionHeader({ label, title, text, dark = false }: SectionHeaderProps) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="section-label">{label}</p>
      <h2
        className={`mt-3 font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-sm leading-7 md:text-base ${dark ? "text-white/70" : "text-neutral-600"}`}>
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}
