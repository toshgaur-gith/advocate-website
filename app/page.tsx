import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { HeroSlider } from "@/components/HeroSlider";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { VideoReels } from "@/components/VideoReels";
import { JsonLd } from "@/components/JsonLd";
import { faqItems, legalSchema } from "@/data/site";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <JsonLd data={legalSchema} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        }}
      />
      <Navbar />
      <main>
        <HeroSlider />
        <About />
        <Services />
        <VideoReels />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
