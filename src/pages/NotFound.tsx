import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found | DCC"
        description="The page you are looking for could not be found."
        path="/404"
        noindex
      />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-grow items-center justify-center bg-background py-24">
          <div className="px-4 text-center">
            <h1 className="mb-2 text-6xl font-extrabold text-primary">404</h1>
            <p className="mb-6 text-2xl text-muted-foreground">
              Sorry, we couldn't find that page.
            </p>
            <Link
              to="/"
              className="inline-block rounded-lg bg-primary px-6 py-2.5 font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Go Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
