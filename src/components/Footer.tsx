import { Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-10 w-10 object-contain bg-white rounded-full p-0.5" />
              <span className="font-bold text-lg">BLOSSOM SCIENCE ACADEMY</span>
            </div>
            <p className="text-sm text-primary-foreground/80">Empowering Minds For Eternal Futures</p>
            <p className="text-xs font-semibold tracking-wider text-secondary">BELIEVE – ACHIEVE – SUCCEED</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {["Home", "About", "Courses", "Why Us", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-secondary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {["8th–10th SSC/CBSE", "11th–12th Regular/Integrated", "MHT-CET", "IIT-JEE", "NEET", "NDA"].map((c) => (
                <li key={c}>
                  <a href="#courses" className="hover:text-secondary transition-colors">{c}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>99221 97616 / 99221 97709</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span>Chinchwad, Pune</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-secondary" />
                <a href="https://www.instagram.com/blossom_science_academy/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  @blossom_science_academy
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/60">
          © {year} Blossom Science Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
