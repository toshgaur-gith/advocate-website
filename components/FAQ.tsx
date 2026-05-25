import { faqItems } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function FAQ() {
  return (
    <section className="bg-beige py-20 text-ink md:py-28">
      <div className="luxury-container">
        <SectionHeader
          label="FAQ"
          title="Common consultation questions."
          text="Simple answers before you share details or request a formal legal consultation."
        />
        <div className="mx-auto mt-12 max-w-4xl divide-y divide-black/10 border-y border-black/10">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.04}>
              <article className="py-7">
                <h3 className="font-serif text-2xl font-semibold">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-700 md:text-base">{item.answer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
