import { CheckCircle2 } from "lucide-react";

const services = [
  "Signage Branding",
  "Promotional Branding",
  "Corporate Stationery",
  "Garment Printing & Apparel Branding",
  "Exhibition & Event Branding",
  "Office & Interior Branding",
  "Outdoor Branding Solutions",
  "CNC Laser Cutting & Custom Branding",
];

export default function CompanyStory() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest">
            About DCC
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-primary">
            Building Powerful Brands Through
            <span className="text-accent"> Creative Visual Solutions</span>
          </h2>
        </div>

        {/* ABOUT US */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">About Us</h3>

            <div className="space-y-6 text-muted-foreground leading-8">
              <p>
                DCC Depot Covers Company is a leading branding, signage and
                printing company dedicated to providing innovative visual
                communication solutions for businesses, organizations and
                institutions.
              </p>

              <p>
                We specialize in transforming ideas into impactful brand
                experiences through high-quality signage, printing and
                customized branding services.
              </p>

              <p>
                With a commitment to creativity, precision and customer
                satisfaction, we combine modern technology with skilled
                craftsmanship to deliver durable, professional and visually
                appealing branding solutions.
              </p>

              <p>
                Whether serving a small business or a large corporate project,
                we strive to exceed expectations through quality workmanship,
                timely delivery and competitive pricing.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/wind1.jpeg"
              className="rounded-3xl shadow-2xl object-cover h-[520px] w-full"
              alt=""
            />

            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg px-6 py-4">
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                Outdoor Branding
              </p>

              <h4 className="font-bold text-primary text-xl">
                Large Format Signage
              </h4>
            </div>
          </div>
        </div>

        {/* WHO WE ARE */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="/wind2.jpeg"
              className="rounded-3xl shadow-2xl object-cover h-[520px] w-full"
              alt=""
            />

            <div className="absolute bottom-6 right-6 bg-white rounded-2xl shadow-lg px-6 py-4">
              <p className="text-sm text-muted-foreground uppercase tracking-widest">
                Installation
              </p>

              <h4 className="font-bold text-primary text-xl">
                Interior Branding
              </h4>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-primary mb-6">Who We Are</h3>

            <p className="text-muted-foreground leading-8 mb-10">
              At DCC Depot Covers Company, we are a team of experienced
              designers, branding specialists and production experts passionate
              about helping businesses build strong and recognizable brands.
              Every brand has a unique story, and our mission is to bring that
              story to life through creative and effective branding solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex gap-3 p-4 rounded-xl border bg-muted/30 hover:bg-white hover:shadow-md transition"
                >
                  <CheckCircle2 className="text-accent mt-1 w-5 h-5 shrink-0" />

                  <span className="font-medium text-primary text-sm">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Commitment */}

        <div className="mt-24 rounded-3xl bg-primary text-white p-10 lg:p-14">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold">Our Commitment</h3>

            <p className="mt-6 text-white/80 leading-8">
              Our goal is to become a trusted branding partner by delivering
              exceptional quality, innovative designs and reliable services that
              enhance our clients' brand visibility and market presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
