import { Phone, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex shrink-0 justify-center lg:justify-start">
          <Link to="/" aria-label="Depot Covers Company home">
            <img
              src="/logof.webp"
              alt="Depot Covers Company (DCC) logo"
              width={400}
              height={217}
              className="h-16 w-auto object-contain transition-transform hover:scale-105 sm:h-20 lg:h-24"
            />
          </Link>
        </div>

        {/* Right */}
        <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-center lg:justify-end">
          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-red-200 p-2 text-red-600">
              <Phone size={18} />
            </div>

            <div>
              <a
                className="font-semibold text-gray-900 transition-colors hover:text-[hsl(25,95%,43%)]"
                href="tel:+254740653661"
              >
                +254 740 653 661
              </a>
              <p className="text-sm text-gray-600">Any questions? Call us.</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-red-200 p-2 text-red-600">
              <Mail size={18} />
            </div>

            <div>
              <a
                href="mailto:depotcovers001@gmail.com"
                className="cursor-pointer font-semibold uppercase text-blue-700 transition-colors hover:text-[hsl(25,95%,43%)]"
              >
                Send Us Email
              </a>
              <p className="text-sm text-gray-600">Sales Inquiry</p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate("/contact")}
            className="h-12 whitespace-nowrap rounded-full bg-accent px-8 font-semibold text-white transition hover:bg-accent/90"
          >
            GET A FREE QUOTE
          </button>
        </div>
      </div>
    </header>
  );
}
