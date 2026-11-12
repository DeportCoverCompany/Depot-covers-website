import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const WHATSAPP = "https://wa.me/254740653661?text=Hello%2C%20I%20just%20submitted%20a%20quote%20request.";

export default function ThankYou() {
  return (
    <>
      <SEO
        title="Thank You — We've Received Your Request | DCC"
        description="Thank you for contacting Depot Covers Company. Our team will review your request and reply within 24 hours."
        path="/thank-you"
        noindex
      />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          <section className="bg-muted/30 py-24">
            <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-extrabold text-primary sm:text-4xl">
                Thank you — your request is in.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                A branding specialist will review your project and reply within{" "}
                <strong className="text-primary">24 hours</strong> with a free,
                no-obligation quotation.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-[#062b18] transition hover:bg-[#20bd5a]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat with us now
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-primary transition hover:bg-muted"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back to home
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
