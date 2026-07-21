import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/Contact/ContactHero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactMap from "@/components/Contact/ContactMap";
import ContactProcess from "@/components/Contact/ContactProcess";
import ContactFaq from "@/components/Contact/ContactFaq";
import ContactTestimonials from "@/components/Contact/ContactTestimonials";
import ContactCta from "@/components/Contact/ContactCta";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>
          Depot Covers Company (DCC) — Branding & Printing Solutions Kenya
        </title>
        <meta
          name="description"
          content="Depot Covers Company (DCC) — Branding & Printing Solutions Kenya"
        />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <ContactHero />

          {/* Contact Main Section */}
          <section className="bg-white py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
                <div className="xl:col-span-8">
                  <ContactForm />
                </div>

                <div className="xl:col-span-4">
                  <div className="sticky top-28">
                    <ContactInfo />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ContactMap />
          <ContactProcess />
          <ContactFaq />
          <ContactTestimonials />
          <ContactCta />
        </main>

        <Footer />
      </div>
    </>
  );
}
