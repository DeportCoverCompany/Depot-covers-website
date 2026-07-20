import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Printer } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Process", path: "/process" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 w-full bg-[hsl(220,55%,14%)] shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center gap-2.5 group">
            <div className="flex items-center gap-2 group"></div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-[hsl(25,95%,53%)] bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white hover:bg-white/10"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 bg-[hsl(220,55%,14%)] border-white/10 p-0"
              >
                <div className="flex items-center justify-between p-5 border-b border-white/10">
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[hsl(25,95%,53%)] flex items-center justify-center">
                      <Printer className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-extrabold text-base">
                      DCC
                    </span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <nav className="flex flex-col p-4 gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                        isActive(link.path)
                          ? "text-[hsl(25,95%,53%)] bg-white/10"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-white/10 mt-2">
                    <Link to="/contact" onClick={() => setOpen(false)}>
                      <Button className="w-full bg-[hsl(25,95%,53%)] hover:bg-[hsl(25,95%,45%)] text-white font-semibold">
                        Get a Quote
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
