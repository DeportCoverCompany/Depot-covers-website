import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessHero from "@/components/Process/ProcessHero";
import ProcessOverview from "@/components/Process/ProcessOverview";
import ProcessBenefits from "@/components/Process/ProcessBenefits";
import ProcessTimeline from "@/components/Process/ProcessTimeline";
import ProcessFaq from "@/components/Process/ProcessFaq";
import ProcessTestimonials from "@/components/Process/ProcessTestimonials";
import ProcessCta from "@/components/Process/ProcessCta";
import SEO from "@/components/SEO";
import { PROCESS_FAQS, faqPageSchema } from "@/data/faqs";

const Process = () => {
  return (
    <>
      <SEO
        title="Our Branding & Printing Process | DCC"
        description="From brief and design to production and installation — see how DCC delivers branding and printing projects on time and on budget in Kenya."
        path="/process"
        jsonLd={faqPageSchema(PROCESS_FAQS)}
      />
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
