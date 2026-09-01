import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+254 740 653 661", "+254 795 592 478"],
    href: "tel:+254740653661",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["depotcovers001@gmail.com"],
    href: "mailto:depotcovers001@gmail.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Nairobi Textiles, Luthuli Ave, Nairobi"],
    href: "https://maps.google.com/?q=Luthuli+Avenue+Nairobi",
  },
  {
    icon: Globe,
    title: "Website",
    details: ["www.depotcovers.co.ke"],
    href: "https://www.depotcovers.co.ke",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-primary">
        Contact Information
      </h2>

      <div className="grid gap-4">
        {contactDetails.map((item, idx) => (
          <Card
            key={idx}
            className="border-none bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0 shadow-md shadow-accent/10">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-accent uppercase tracking-wider mb-0.5">
                  {item.title}
                </p>
                {item.details.map((detail, dIdx) => (
                  <a
                    key={dIdx}
                    href={item.href}
                    target={
                      item.title === "Visit Us" || item.title === "Website"
                        ? "_blank"
                        : undefined
                    }
                    rel="noopener noreferrer"
                    className="block text-foreground font-medium hover:text-accent transition-colors"
                  >
                    {detail}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-border/40 bg-primary/5 border-dashed border-2">
        <CardContent className="p-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-primary mb-2">Business Hours</h3>
            <div className="space-y-1 text-sm">
              <p className="flex justify-between gap-8">
                <span className="text-muted-foreground">Mon – Fri:</span>{" "}
                <span className="font-semibold">8am – 6pm</span>
              </p>
              <p className="flex justify-between gap-8">
                <span className="text-muted-foreground">Saturday:</span>{" "}
                <span className="font-semibold">9am – 4pm</span>
              </p>
              <p className="flex justify-between gap-8">
                <span className="text-muted-foreground">Sunday:</span>{" "}
                <span className="text-destructive font-medium uppercase text-[10px] tracking-widest bg-destructive/10 px-2 py-0.5 rounded">
                  Closed
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="pt-4">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4 text-center sm:text-left">
          Follow Us On Social Media
        </p>
        <div className="flex justify-center sm:justify-start gap-4">
          {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full bg-accent hover:bg-primary text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-accent/20"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
