import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessHero from "@/components/Process/ProcessHero";
import ProcessOverview from "@/components/Process/ProcessOverview";
import ProcessBenefits from "@/components/Process/ProcessBenefits";
import ProcessTimeline from "@/components/Process/ProcessTimeline";
import ProcessFaq from "@/components/Process/ProcessFaq";
import ProcessTestimonials from "@/components/Process/ProcessTestimonials";
import ProcessCta from "@/components/Process/ProcessCta";
import { Helmet } from "react-helmet-async";

const Process = () => {
  return (
    <>
      <Helmet>
        <title>
          Depot Covers Company (DCC) — Branding & Printing Solutions Kenya
        </title>
        <meta
          name="description"
          content="Depot Covers Company (DCC) — Branding & Printing Solutions Kenya"
        />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <ProcessHero />

          <ProcessOverview />

          <ProcessBenefits />

          <ProcessTimeline />

          <ProcessFaq />

          <ProcessTestimonials />

          <ProcessCta />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Process;
