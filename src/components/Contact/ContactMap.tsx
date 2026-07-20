import { MapIcon, ParkingCircle, Users } from "lucide-react";
import LocationSection from "../LocationSection";

export default function ContactMap() {
  const features = [
    {
      icon: MapIcon,
      title: "Centrally Located",
      desc: "Easy access from all parts of the CBD and surrounding business districts.",
    },
    {
      icon: ParkingCircle,
      title: "Ample Parking",
      desc: "Secure parking spaces available for clients visiting our office.",
    },
    {
      icon: Users,
      title: "Easy Public Access",
      desc: "Only a short walk from major bus and matatu terminals.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
            Visit Our Office
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Find Us in Nairobi
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Located at <strong>Nairobi Textiles, Luthuli Avenue</strong>,
            Nairobi — easy to find in the heart of the city.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Google Map */}
          <div className="order-2 lg:order-1 lg:col-span-8">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <LocationSection />
            </div>
          </div>

          {/* Features */}
          <div className="order-1 space-y-6 lg:order-2 lg:col-span-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 transition-colors duration-300 group-hover:bg-red-600">
                    <feature.icon className="h-7 w-7 text-red-600 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="rounded-2xl bg-gradient-to-r from-red-600 to-red-500 p-7 text-white shadow-xl">
              <h3 className="text-xl font-bold">Need Directions?</h3>

              <p className="mt-2 text-sm text-red-100">
                Click below to open our location directly in Google Maps.
              </p>

              <a
                href="https://maps.google.com/?q=-1.2837641,36.8270377"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-red-600 transition hover:bg-slate-100"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
