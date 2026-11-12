import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO, { SITE_URL } from "@/components/SEO";
import { getService, services } from "@/data/services";

const WHATSAPP = "https://wa.me/254740653661";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) {
    return (
      <>
        <SEO
          title="Service Not Found | DCC"
          description="The service you are looking for could not be found."
          path="/services"
          noindex
        />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-grow items-center justify-center py-24">
            <div className="px-4 text-center">
              <h1 className="text-6xl font-extrabold text-primary">404</h1>
              <p className="mt-4 text-xl text-muted-foreground">
                We couldn't find that service.
              </p>
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white"
              >
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      serviceType: service.name,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${service.slug}`,
      image: `${SITE_URL}${service.image}`,
      provider: {
        "@type": "LocalBusiness",
        name: "Depot Covers Company (DCC)",
        url: SITE_URL,
        telephone: "+254740653661",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Nairobi Textiles, Luthuli Avenue",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
      },
      areaServed: { "@type": "Country", name: "Kenya" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        {
          "@type": "ListItem",
          position: 3,
          name: service.name,
          item: `${SITE_URL}/services/${service.slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        image={`${SITE_URL}${service.image}`}
        jsonLd={jsonLd}
      />
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-grow">
          {/* Hero */}
          <section className="gradient-hero py-16 text-white lg:py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
              <div>
                <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60">
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ChevronRight className="h-4 w-4" />
                  <Link to="/services" className="hover:text-white">Services</Link>
                  <ChevronRight className="h-4 w-4" />
                  <span className="text-white">{service.name}</span>
                </nav>
                <span className="inline-block rounded-full border border-accent/30 bg-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
                  {service.category}
                </span>
                <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
                  {service.name} in Nairobi, Kenya
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                  {service.intro}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to={`/contact?service=${service.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-white transition hover:bg-accent/90"
                  >
                    Get a Free Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent(`Hello, I'd like a quote for ${service.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <img
                  src={service.image}
                  alt={`${service.name} by Depot Covers Company Nairobi`}
                  width={1200}
                  height={800}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Features + process */}
          <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-extrabold text-primary">
                  What we produce
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Everything below is designed, produced and finished by our
                  in-house team in Nairobi.
                </p>
                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-muted/40 p-8">
                <h2 className="text-2xl font-bold text-primary">How it works</h2>
                <ol className="mt-6 space-y-4">
                  {service.outcomes.map((outcome, index) => (
                    <li key={outcome} className="flex items-start gap-4">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <span className="pt-1 font-medium text-foreground/90">{outcome}</span>
                    </li>
                  ))}
                </ol>
                <a
                  href="tel:+254740653661"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:text-accent"
                >
                  <Phone className="h-5 w-5" />
                  Call +254 740 653 661
                </a>
              </div>
            </div>
          </section>

          {/* Gallery */}
          {service.gallery.length > 1 && (
            <section className="bg-secondary/30 py-16">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-primary">
                  Recent {service.name.toLowerCase()} work
                </h2>
                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {service.gallery.slice(0, 12).map((image, index) => (
                    <img
                      key={`${image}-${index}`}
                      src={image}
                      alt={`${service.name} project ${index + 1} by DCC Kenya`}
                      width={600}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="aspect-square w-full rounded-2xl object-cover shadow-sm"
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="bg-white py-16">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-primary">
                {service.name} FAQs
              </h2>
              <div className="mt-8 space-y-4">
                {service.faq.map((item) => (
                  <details
                    key={item.question}
                    className="rounded-2xl border border-border bg-white p-5 transition-colors hover:border-accent/40"
                  >
                    <summary className="cursor-pointer font-semibold text-primary">
                      {item.question}
                    </summary>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Related */}
          <section className="bg-muted/30 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-extrabold text-primary">Related services</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    className="group rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <h3 className="font-bold text-primary group-hover:text-accent">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
