import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Services/ServicesHero";
import ServiceCard from "@/components/Services/ServiceCard";
import ProcessSection from "@/components/Services/ProcessSection";
import WhyChooseUs from "@/components/Services/WhyChooseUs";
import ServicesCta from "@/components/Services/ServicesCta";
import SEO from "@/components/SEO";
import { services } from "@/data/services";

export default function Services() {
  return (
    <>
      <SEO
        title="Printing & Branding Services in Kenya | DCC"
        description="Explore signage, large-format printing, corporate stationery, garment branding, promotional items, exhibition, office and CNC branding services from DCC Nairobi."
        path="/services"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <ServicesHero />

          {/* Intro */}
          <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <p className="text-xl text-foreground/80 leading-relaxed">
                  We provide complete branding and printing solutions tailored
                  to help businesses stand out and grow.
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="bg-secondary/30 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="sr-only">Our branding and printing services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    name={service.name}
                    category={service.category}
                    description={service.description}
                    img_url={service.image}
                    gallery={service.gallery}
                    features={service.features}
                    slug={service.slug}
                  />
                ))}
              </div>
            </div>
          </section>

          <ProcessSection />
          <WhyChooseUs />
          <ServicesCta />
        </main>

        <Footer />
      </div>
    </>
  );
}
