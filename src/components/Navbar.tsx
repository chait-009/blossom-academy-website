import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import RequestCallbackDialog from "@/components/RequestCallbackDialog";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname === "/") {
        const el = document.getElementById(href.replace("/#", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const renderLink = (l: { label: string; href: string }) => {
    if (l.href.startsWith("/#")) {
      return (
        <Link
          key={l.href}
          to={l.href}
          onClick={() => handleNavClick(l.href)}
          className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
        >
          {l.label}
        </Link>
      );
    }
    return (
      <Link
        key={l.href}
        to={l.href}
        className={`text-sm font-medium transition-colors ${location.pathname === l.href ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
      >
        {l.label}
      </Link>
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Blossom Science Academy Logo" className="h-10 w-10 object-contain" />
            <span className="font-bold text-lg text-primary hidden sm:inline">BLOSSOM SCIENCE ACADEMY</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(renderLink)}
            <a href="tel:9922197616" className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Phone className="h-4 w-4 text-primary" />
            </a>
            <Button onClick={() => setCallbackOpen(true)} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              Request Callback
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-foreground/80 hover:text-primary py-2"
              >
                {l.label}
              </Link>
            ))}
            <Button onClick={() => { setOpen(false); setCallbackOpen(true); }} className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              Request Callback
            </Button>
          </div>
        )}
      </nav>
      <RequestCallbackDialog open={callbackOpen} onOpenChange={setCallbackOpen} />
    </>
  );
};

export default Navbar;
