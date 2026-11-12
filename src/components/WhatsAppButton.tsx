import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "254740653661"; // Primary business WhatsApp number
  const message = "Hello! I'm interested in your branding services.";

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex items-center gap-3"
      >
        {/* Text Bubble */}
        <div className="hidden sm:flex items-center rounded-full border border-white/50 bg-white/90 px-5 py-3 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:-translate-x-1 group-hover:shadow-2xl">
          <p className="text-sm font-semibold text-gray-900">Chat with us</p>
        </div>

        {/* WhatsApp Button */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-[#0b3d2c] shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
          {/* Pulse */}
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30"></span>

          {/* Glow */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] blur-xl opacity-40"></span>

          <FaWhatsapp className="relative text-4xl" />
        </div>
      </a>
    </div>
  );
}
