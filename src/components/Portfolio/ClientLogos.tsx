import { ArrowUpRight } from "lucide-react";

export default function ClientLogos() {
  const clients = [
    {
      name: "Client One",
      logo: "/project/companieslogo/logo1.jpeg",
    },
    {
      name: "Client One",
      logo: "/project/companieslogo/logo2.jpeg",
    },
    {
      name: "Client One",
      logo: "/project/companieslogo/logo3.jpeg",
    },
    {
      name: "Client One",
      logo: "/project/companieslogo/logo4.jpeg",
    },
    {
      name: "Client One",
      logo: "/project/companieslogo/logo5.jpeg",
    },
  ];

  return (
    <section className="border-y border-neutral-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Our Clients
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Trusted by businesses we’re proud to work with.
            </h2>
          </div>

          <a
            href="#work"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-neutral-900"
          >
            View our work
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 border-l border-t border-neutral-200 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex h-32 items-center justify-center border-b border-r border-neutral-200 px-8 transition-colors duration-300 hover:bg-neutral-50 sm:h-36"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-12 w-auto max-w-[140px] object-contain   transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Small supporting text */}
        <p className="mt-8 text-center text-sm ">
          From growing businesses to established brands we create work that gets
          noticed.
        </p>
      </div>
    </section>
  );
}
