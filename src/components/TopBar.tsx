import { Phone, Mail, Link } from "lucide-react";
import { useLocation } from "react-router";

export default function TopBar() {
  const location = useLocation();

  const navigate = () => {
    if (location.pathname !== "/contact") {
      window.location.href = "/contact";
    }
  };

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex justify-center lg:justify-start shrink-0">
          <img
            src="/logof.jpeg"
            alt="DCC Logo"
            className="h-28 w-auto object-contain transition-transform hover:scale-105"
          />
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
                className="font-semibold text-gray-900 cursor-pointer hover:text-[hsl(25,95%,53%)] transition-colors"
                href="tel:+254740653661"
              >
                +254 795 592 478
              </a>
              <p className="text-sm text-gray-500">Any questions? Call us.</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-red-200 p-2 text-red-600">
              <Mail size={18} />
            </div>

            <div>
              <p className="font-semibold uppercase text-blue-700">
                Send Us Email
              </p>
              <p className="text-sm text-gray-500">Sales Inquiry</p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={navigate}
            className="h-12 whitespace-nowrap rounded-full bg-[hsl(25,95%,53%)] hover:bg-[hsl(25,95%,45%)] px-8 font-semibold text-white transition "
          >
            GET A FREE QUOTE
          </button>
        </div>
      </div>
    </header>
  );
}
