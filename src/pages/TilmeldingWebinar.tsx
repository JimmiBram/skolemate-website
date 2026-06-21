import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const TilmeldingWebinar = () => {
  useEffect(() => {
    // Check if form already exists
    const container = document.getElementById('hubspot-webinar-form-container');
    if (!container || container.children.length > 0) {
      return;
    }

    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/147114190.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-center">
            Tilmelding til webinar
          </h1>
          
          {/* HubSpot Form */}
          <div className="bg-background p-4 md:p-8 rounded-2xl shadow-lg">
            <div 
              id="hubspot-webinar-form-container"
              className="hs-form-frame" 
              data-region="eu1" 
              data-form-id="a70f9f71-f1ab-4c11-bb44-c93b3949d4f7" 
              data-portal-id="147114190"
            />
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default TilmeldingWebinar;
