import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-new.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full bg-background border-b border-gray-5 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="SkoleMate Logo" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-bold text-foreground">SkoleMate</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/funktionalitet" className="text-normal text-gray-2 hover:text-primary transition-colors">
            Funktionalitet
          </NavLink>
          <NavLink to="/priser" className="text-normal text-gray-2 hover:text-primary transition-colors">
            Priser
          </NavLink>
          <NavLink to="/visionen" className="text-normal text-gray-2 hover:text-primary transition-colors">
            Visionen
          </NavLink>
          <NavLink to="/blog" className="text-normal text-gray-2 hover:text-primary transition-colors">
            Blog
          </NavLink>
          <NavLink to="/om-os" className="text-normal text-gray-2 hover:text-primary transition-colors">
            Om os
          </NavLink>
          
          <Button variant="secondary" size="default" asChild>
            <a href="https://app.skolemate.dk/accounts/signup/?next=/" target="_blank" rel="noopener noreferrer">
              Tilmeld
            </a>
          </Button>
          <Button size="default" asChild className="bg-red-500 hover:bg-red-600 text-white">
            <a href="https://app.skolemate.dk/accounts/login/?next=/" target="_blank" rel="noopener noreferrer">
              Login
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Luk menu" : "Åbn menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-gray-5 z-50 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col">
            <NavLink 
              to="/funktionalitet" 
              className="text-normal text-gray-2 hover:text-primary transition-colors py-3"
              onClick={closeMenu}
            >
              Funktionalitet
            </NavLink>
            <div className="border-t border-primary" />
            <NavLink 
              to="/priser" 
              className="text-normal text-gray-2 hover:text-primary transition-colors py-3"
              onClick={closeMenu}
            >
              Priser
            </NavLink>
            <div className="border-t border-primary" />
            <NavLink 
              to="/visionen" 
              className="text-normal text-gray-2 hover:text-primary transition-colors py-3"
              onClick={closeMenu}
            >
              Visionen
            </NavLink>
            <div className="border-t border-primary" />
            <NavLink 
              to="/blog" 
              className="text-normal text-gray-2 hover:text-primary transition-colors py-3"
              onClick={closeMenu}
            >
              Blog
            </NavLink>
            <div className="border-t border-primary" />
            <NavLink 
              to="/om-os" 
              className="text-normal text-gray-2 hover:text-primary transition-colors py-3"
              onClick={closeMenu}
            >
              Om os
            </NavLink>
            
            <div className="flex flex-col gap-3 pt-2">
              <Button variant="secondary" size="default" asChild className="w-full">
                <a href="https://app.skolemate.dk/accounts/signup/?next=/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  Tilmeld
                </a>
              </Button>
              <Button size="default" asChild className="w-full bg-red-500 hover:bg-red-600 text-white">
                <a href="https://app.skolemate.dk/accounts/login/?next=/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  Login
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
