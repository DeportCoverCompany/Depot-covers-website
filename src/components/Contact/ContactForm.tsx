import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  const phoneNumber = "254700000000"; // Replace with the company's WhatsApp number

  const message = encodeURIComponent(
    "Hello, I would like to enquire about your design and branding services.",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-muted/20">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative elements */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/80">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Let's create something great
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have a project in mind?
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Whether you need branding, printing, signage or a complete
              creative solution, we'd love to hear about your project.
            </p>

            {/* WhatsApp Button */}
            <div className="mt-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-2xl sm:px-9 sm:py-5 sm:text-lg"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                  <MessageCircle className="h-6 w-6" />
                </span>

                <span>Chat with us on WhatsApp</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>

            {/* Reassurance */}
            <p className="mt-5 text-sm text-white/45">
              Quick response • No obligation • Let's discuss your ideas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
