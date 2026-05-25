import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for advocate and legal consultancy enquiries."
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-beige text-ink">
        <section className="luxury-container min-h-screen pt-36 pb-20">
          <p className="section-label">Legal</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">
            Privacy Policy
          </h1>
          <div className="mt-8 max-w-3xl space-y-5 text-sm leading-7 text-neutral-700 md:text-base">
            <p>
              Information submitted through this website is used only to respond
              to voluntary enquiries and consultation requests. It is not sold,
              rented, or shared for marketing purposes.
            </p>
            <p>
              Enquiry forms may collect your name, phone number, case type, and
              message. Please avoid sharing sensitive case documents until a
              formal consultation or engagement is confirmed.
            </p>
            <p>
              This static website may use standard hosting analytics and security
              logs to improve performance and protect the website from misuse.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
