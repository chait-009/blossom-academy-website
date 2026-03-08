import { Phone, MapPin, Instagram, Mail, Youtube, Facebook, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

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
            {/* Social Media */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.instagram.com/blossom_science_academy/" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/blossomscienceacademy" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@blossomscienceacademy" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="mailto:contact@blossomscienceacademy.in" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About</Link></li>
              <li><Link to="/courses" className="hover:text-secondary transition-colors">Courses</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-secondary transition-colors">Refund Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-secondary transition-colors">Terms & Conditions</Link></li>
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
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="mailto:contact@blossomscienceacademy.in" className="block hover:text-secondary transition-colors">contact@blossomscienceacademy.in</a>
                  <a href="mailto:admission@blossomscienceacademy.in" className="block hover:text-secondary transition-colors">admission@blossomscienceacademy.in</a>
                  <a href="mailto:blossomscienceacademy@gmail.com" className="block hover:text-secondary transition-colors">blossomscienceacademy@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/60">
          <p>© {year} Blossom Science Academy. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://chaitanyashinde.online"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-secondary hover:text-secondary/80 transition-colors inline-flex items-center gap-1"
            >
              CHAITANYA SHINDE <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
