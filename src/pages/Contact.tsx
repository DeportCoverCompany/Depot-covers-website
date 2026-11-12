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
import QuoteForm from "@/components/Contact/QuoteForm";
import SEO from "@/components/SEO";
import { CONTACT_FAQS, faqPageSchema } from "@/data/faqs";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact DCC | Free Branding & Printing Quote"
        description="Request a free quote for branding, printing, signage or promotional items in Nairobi. We reply within 24 hours. Call +254 740 653 661 or WhatsApp us."
        path="/contact"
        jsonLd={faqPageSchema(CONTACT_FAQS)}
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <ContactHero />

          {/* Contact Main Section */}
          <section className="bg-white py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
                <div className="xl:col-span-8">
                  <div className="mb-8">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                      Free, no-obligation quote
                    </span>
                    <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
                      Tell us about your project
                    </h2>
                    <p className="mt-3 text-muted-foreground">
                      Complete the three short steps below and we'll reply with a
                      detailed quotation within 24 hours.
                    </p>
                  </div>
                  <QuoteForm />
                </div>

                <div className="xl:col-span-4">
                  <div className="sticky top-28">
                    <ContactInfo />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ContactForm />

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
