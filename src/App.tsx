import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import TopBar from "./components/TopBar";
import WhatsAppButton from "./components/WhatsAppButton";
import ServiceDetail from "./pages/ServiceDetail";

const queryClient = new QueryClient();

const App = () => (
  // <QueryClientProvider client={queryClient}>
  //   <TooltipProvider>
  //     <Toaster />
  //     <Sonner />
  //     <BrowserRouter>
  //       <TopBar />
  //       <ScrollToTop />
  //       <WhatsAppButton />
  //       <Routes>
  //         <Route path="/" element={<Index />} />
  //         <Route path="/services" element={<Services />} />
  //         <Route path="/marketing" element={<Portfolio />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/process" element={<Process />} />
  //         <Route path="/contact" element={<Contact />} />
  //         <Route path="/servicedetails" element={<ServiceDetail />} />
  //         <Route path="*" element={<NotFound />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </TooltipProvider>
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center animate-pulse">
      <div className="text-5xl mb-4 text-amber-500 animate-bounce">⚠️</div>
      <h2 className="text-2xl font-semibold text-gray-800">Not Available</h2>
      <p className="mt-2 text-sm text-gray-500">
        This website is currently unavailable. until further notice.
      </p>
    </div>
  </div>
);

export default App;
