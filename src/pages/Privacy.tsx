import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Depot Covers Company (DCC)"
        description="How Depot Covers Company collects, uses and protects the personal information you share through our website and quote forms."
        path="/privacy"
      />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow">
          <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-primary">Privacy Policy</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-KE", { year: "numeric", month: "long" })}
            </p>

            <div className="prose prose-slate mt-10 max-w-none">
              <h2>Who we are</h2>
              <p>
                Depot Covers Company (DCC) is a branding and printing company based
                at Nairobi Textiles, Luthuli Avenue, Nairobi, Kenya. You can reach
                us on +254 740 653 661 or at depotcovers001@gmail.com.
              </p>

              <h2>Information we collect</h2>
              <p>
                When you request a quote or contact us we collect the information
                you choose to provide: your name, company, email address, phone
                number, project details and any files you upload.
              </p>

              <h2>How we use your information</h2>
              <ul>
                <li>To prepare and send your quotation.</li>
                <li>To respond to your enquiry and discuss your project.</li>
                <li>To deliver products and services you order from us.</li>
                <li>To improve our website and services.</li>
              </ul>

              <h2>Sharing</h2>
              <p>
                We do not sell your personal information. We only share it with
                service providers who help us operate our business (for example
                email delivery and hosting), and only to the extent needed to
                provide our services.
              </p>

              <h2>Retention</h2>
              <p>
                We keep enquiry and project records for as long as needed to
                provide our services and to meet legal and accounting obligations.
              </p>

              <h2>Your rights</h2>
              <p>
                You may ask us to access, correct or delete the personal
                information we hold about you. Contact us at
                depotcovers001@gmail.com and we will respond within a reasonable
                time.
              </p>

              <h2>Cookies and analytics</h2>
              <p>
                We may use privacy-friendly analytics to understand how visitors
                use this website. Any analytics data is aggregated and is not used
                to identify you personally.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
