import { NavLink } from "./NavLink";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-new.png";

const Footer = () => {
  return (
    <footer className="w-full bg-muted border-t border-gray-5 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(200px,auto)_minmax(220px,auto)] gap-8 md:gap-12 mb-8">
          {/* Company Info */}
          <div className="md:pl-12">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="SkoleMate Logo" className="w-10 h-10 object-contain" />
              <h3 className="text-xl font-bold text-foreground">SkoleMate</h3>
            </div>
            <p className="text-gray-2 mb-3">SkoleMate platformen er udviklet af</p>
            <p className="text-gray-2 mb-2">AiKlar ApS</p>
            <p className="text-gray-2 mb-2">Fragevej 58, 4760 Vordingborg</p>
            <p className="text-gray-2 mb-2">info@skolemate.dk</p>
            <p className="text-gray-2 mb-4">CVR: 45469948</p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61579405786332" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-2 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://instagram.com/skolemate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-2 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://linkedin.com/company/skolemate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-2 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:text-right md:pr-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <NavLink to="/funktionalitet" className="text-gray-2 hover:text-primary transition-colors">
                Funktionalitet
              </NavLink>
              <NavLink to="/priser" className="text-gray-2 hover:text-primary transition-colors">
                Priser
              </NavLink>
              <NavLink to="/visionen" className="text-gray-2 hover:text-primary transition-colors">
                Visionen
              </NavLink>
              <NavLink to="/om-os" className="text-gray-2 hover:text-primary transition-colors">
                Om os
              </NavLink>
              <NavLink to="/blog" className="text-gray-2 hover:text-primary transition-colors">
                Blog
              </NavLink>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="md:text-right md:pr-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Juridisk</h3>
            <nav className="flex flex-col gap-2">
              <NavLink to="/privatlivspolitik" className="text-gray-2 hover:text-primary transition-colors">
                Privatlivspolitik
              </NavLink>
              <NavLink to="/brugsvilkaar" className="text-gray-2 hover:text-primary transition-colors">
                Brugsvilkår
              </NavLink>
              <NavLink to="/cookiepolitik" className="text-gray-2 hover:text-primary transition-colors">
                Cookiepolitik
              </NavLink>
              <NavLink to="/datasikkerhed" className="text-gray-2 hover:text-primary transition-colors">
                Datasikkerhed
              </NavLink>
              <NavLink to="/databehandleraftale" className="text-gray-2 hover:text-primary transition-colors">
                Databehandler aftale
              </NavLink>
              <NavLink to="/ai-vilkaar" className="text-gray-2 hover:text-primary transition-colors">
                AI vilkår
              </NavLink>
              <NavLink to="/vilkaar-og-betingelser" className="text-gray-2 hover:text-primary transition-colors">
                Vilkår og betingelser
              </NavLink>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-5 pt-6">
          <p className="text-gray-2 text-center">
            © {new Date().getFullYear()} AiKlar ApS. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
