import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Globe, Printer, Instagram } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Process", path: "/process" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Paper Printing",
  "Screen Printing",
  "Large Format Printing",
  "Signages",
  "Embroidery",
  "Promotional Items",
  "Advertisement Solutions",
  "Branding",
];

const socialLinks = [
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@depotcoverscompany",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/dcckenya",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/254740653661",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[hsl(220,55%,10%)] text-white">
      {/* Top CTA Bar */}
      <div className="bg-[hsl(25,95%,53%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-lg">
                Ready to elevate your brand?
              </p>
              <p className="text-white/90 text-sm">
                Get in touch today and start your project.
              </p>
            </div>
            <Link to="/contact">
              <button className="bg-white text-[hsl(25,95%,53%)] font-bold px-6 py-2.5 rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap shadow-md">
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[hsl(25,95%,53%)] flex items-center justify-center">
                <Printer className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-extrabold text-xl block leading-none">
                  DCC
                </span>
                <span className="text-[hsl(25,95%,53%)] text-[10px] font-semibold tracking-widest uppercase">
                  Depot Covers Co.
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              High-quality branding and printing solutions that elevate your
              business visibility. From concept to completion.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[hsl(25,95%,53%)] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[hsl(25,95%,53%)] inline-block"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm hover:text-[hsl(25,95%,53%)] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(25,95%,53%)] opacity-60"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[hsl(25,95%,53%)] inline-block"></span>
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-white/60 text-sm hover:text-[hsl(25,95%,53%)] transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(25,95%,53%)] opacity-60"></span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[hsl(25,95%,53%)] inline-block"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-[hsl(25,95%,53%)]" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+254740653661"
                    className="text-white/80 text-sm hover:text-[hsl(25,95%,53%)] transition-colors block"
                  >
                    +254 740 653 661
                  </a>
                  <a
                    href="tel:+254795592478"
                    className="text-white/80 text-sm hover:text-[hsl(25,95%,53%)] transition-colors block"
                  >
                    +254 795 592 478
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-[hsl(25,95%,53%)]" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:depotcovers001@gmail.com"
                    className="text-white/80 text-sm hover:text-[hsl(25,95%,53%)] transition-colors break-all"
                  >
                    depotcovers001@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[hsl(25,95%,53%)]" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">
                    Location
                  </p>
                  <p className="text-white/80 text-sm">
                    Gaborone Lane, Nairobi
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Globe className="w-3.5 h-3.5 text-[hsl(25,95%,53%)]" />
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">
                    Website
                  </p>
                  <a
                    href="https://www.depotcovers.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 text-sm hover:text-[hsl(25,95%,53%)] transition-colors"
                  >
                    www.depotcovers.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Depot Covers Company (DCC). All
              rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Nairobi, Kenya · Branding · Printing · Visual Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
