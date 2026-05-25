import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Website terms and conditions for advocate information pages."
};

export default function TermsConditions() {
  return (
    <>
      <Navbar />
      <main className="bg-beige text-ink">
        <section className="luxury-container min-h-screen pt-36 pb-20">
          <p className="section-label">Legal</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">
            Terms & Conditions
          </h1>
          <div className="mt-8 max-w-3xl space-y-5 text-sm leading-7 text-neutral-700 md:text-base">
            <p>
              This website provides general information voluntarily accessed by
              users. It does not create an advocate-client relationship and does
              not constitute legal advice.
            </p>
            <p>
              Visitors should seek a formal consultation before acting on any
              legal matter. Outcomes depend on facts, documents, applicable law,
              and judicial discretion.
            </p>
            <p>
              By using this website, you acknowledge the Bar Council of India
              disclaimer displayed in the footer and confirm that access is for
              your own information.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
