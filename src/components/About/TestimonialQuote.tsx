import { Quote } from "lucide-react";

export default function TestimonialQuote() {
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-5">
        <Quote size={400} className="text-white" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 w-accent bg-accent rounded-full"></div>
        </div>
        
        <blockquote className="space-y-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed italic">
            "DCC has been instrumental in building our brand's visual identity. 
            Their attention to detail and commitment to quality is unmatched."
          </p>
          <footer className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border-2 border-accent p-0.5">
               <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white">
                 J
               </div>
            </div>
            <div className="text-orange-300 font-bold text-lg tracking-wide uppercase">
              James Mwangi
            </div>
            <div className="text-white/50 text-sm font-medium">
              CEO, RetailHub Kenya
            </div>
          </footer>
        </blockquote>

        <div className="flex justify-center mt-8">
          <div className="w-16 h-1 w-accent bg-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}