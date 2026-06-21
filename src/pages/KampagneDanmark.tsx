import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";


const KampagneDanmark = () => {
  useEffect(() => {
    // Set page title
    document.title = "Skolemate - Bygget i Danmark og uden brug af amerikanske tjenester";
    
    // Add noindex meta tag
    let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'noindex, nofollow';

    return () => {
      // Restore default robots meta on unmount
      if (metaRobots) {
        metaRobots.content = 'index, follow';
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed font-medium">
                Skolemate er dit lokale alternativ til de amerikanske platforme. Vi gemmer din data i Europa og anvender udelukkende EU baseret teknologi. Skolemate er lavet specifikt til det danske skolesystem.
              </p>
              <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
            </div>
          </div>
        </section>
        <FeatureCards />
        <ContactForm />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default KampagneDanmark;
