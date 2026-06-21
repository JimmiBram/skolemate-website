import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { NavLink } from "./NavLink";

interface CookiePreferences {
  necessary: boolean;
  statistics: boolean;
  preferences: boolean;
  marketing: boolean;
}

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    statistics: false,
    preferences: false,
    marketing: false,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");

    // Treat "accepted" the same as no consent stored
    if (!cookieConsent || cookieConsent === "accepted") {
      if (cookieConsent === "accepted") {
        localStorage.removeItem("cookieConsent");
      }

      const timer = setTimeout(() => setShowBanner(true), 500);
      return () => clearTimeout(timer);
    }

    // Load tracking scripts based on saved consent
    const consent: CookiePreferences = JSON.parse(cookieConsent);
    loadTrackingScriptsBasedOnConsent(consent);
  }, []);

  const loadGoogleTagManager = () => {
    // Check if already loaded
    const win = window as any;
    if (win.dataLayer && win.dataLayer.some((item: any) => item['gtm.start'])) return;

    console.log("Loading Google Tag Manager...");

    // Initialize dataLayer and load GTM
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-5K9H6HHP';
    document.head.appendChild(script);

    // Add noscript iframe to body
    const existingNoscript = document.querySelector('noscript[data-gtm]');
    if (!existingNoscript) {
      const noscript = document.createElement("noscript");
      noscript.setAttribute('data-gtm', 'true');
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-5K9H6HHP";
      iframe.height = "0";
      iframe.width = "0";
      iframe.style.display = "none";
      iframe.style.visibility = "hidden";
      noscript.appendChild(iframe);
      document.body.insertBefore(noscript, document.body.firstChild);
    }
  };


  const trackGoogleAdsConversion = () => {
    const win = window as any;
    if (typeof win.gtag === 'function') {
      win.gtag('event', 'conversion', {
        'send_to': 'AW-17774150041/xzy3COv0uuEbEJmDsJtC',
        'value': 1.0,
        'currency': 'DKK'
      });
      console.log('Google Ads conversion tracked');
    }
  };

  const updateGoogleConsent = (consent: CookiePreferences) => {
    const win = window as any;
    if (typeof win.gtag === 'function') {
      win.gtag('consent', 'update', {
        'ad_storage': consent.marketing ? 'granted' : 'denied',
        'ad_user_data': consent.marketing ? 'granted' : 'denied',
        'ad_personalization': consent.marketing ? 'granted' : 'denied',
        'analytics_storage': consent.statistics ? 'granted' : 'denied',
        'functionality_storage': consent.preferences ? 'granted' : 'denied',
        'personalization_storage': consent.preferences ? 'granted' : 'denied',
        'security_storage': 'granted'
      });
      console.log('Google Consent Mode updated:', consent);
    }
  };

  const loadTrackingScriptsBasedOnConsent = (consent: CookiePreferences) => {
    // Update Google Consent Mode first
    updateGoogleConsent(consent);
    
    // Google Tag Manager requires statistics consent
    if (consent.statistics) {
      loadGoogleTagManager();
    }
    // Google Ads conversion tracking requires marketing consent
    if (consent.marketing) {
      trackGoogleAdsConversion();
    }
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      statistics: true,
      preferences: true,
      marketing: true,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setShowBanner(false);
    loadTrackingScriptsBasedOnConsent(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      statistics: false,
      preferences: false,
      marketing: false,
    };
    localStorage.setItem("cookieConsent", JSON.stringify(onlyNecessary));
    setShowBanner(false);
    // Update Google Consent to denied
    updateGoogleConsent(onlyNecessary);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false);
    loadTrackingScriptsBasedOnConsent(preferences);
  };

  const handleTogglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Can't disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-40 animate-fade-in"
        onClick={() => {}} // Prevent closing by clicking backdrop - user must make a choice
      />

      {/* Cookie banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-gray-5 shadow-2xl animate-fade-in">
        <div className="container mx-auto px-6 py-6 max-w-6xl">
          {!showSettings ? (
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Cookie className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Vi bruger cookies</h3>
                </div>
                <p className="text-sm text-gray-2 mb-2">
                  SkoleMate bruger cookies for at forbedre din oplevelse på vores hjemmeside. Vi respekterer dit
                  privatliv og gemmer kun cookies, hvis du giver samtykke. Nødvendige cookies er altid aktive for at
                  hjemmesiden kan fungere.
                </p>
                <p className="text-xs text-gray-3 mb-2">
                  <strong>Google Tag Manager</strong> kræver statistik-samtykke.
                </p>
                <NavLink to="/cookiepolitik" className="text-sm text-primary hover:underline">
                  Læs vores fulde cookiepolitik
                </NavLink>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Button variant="outline" size="default" onClick={handleRejectAll} className="w-full sm:w-auto">
                  Kun nødvendige
                </Button>
                <Button
                  variant="outline"
                  size="default"
                  onClick={() => setShowSettings(true)}
                  className="w-full sm:w-auto"
                >
                  Indstillinger
                </Button>
                <Button variant="secondary" size="default" onClick={handleAcceptAll} className="w-full sm:w-auto">
                  Accepter alle
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cookie className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Cookie indstillinger</h3>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-2 hover:text-foreground transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-3 max-h-[60vh] overflow-y-auto">
                <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Nødvendige cookies</h4>
                    <p className="text-sm text-gray-2">
                      Disse cookies er nødvendige for, at hjemmesiden kan fungere korrekt. De kan ikke slås fra.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="w-5 h-5 cursor-not-allowed accent-primary"
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Statistikcookies (Google Tag Manager)</h4>
                    <p className="text-sm text-gray-2">
                      Hjælper os med at forstå, hvordan besøgende bruger hjemmesiden. Indlæser Google Tag Manager når
                      aktiveret.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.statistics}
                      onChange={() => handleTogglePreference("statistics")}
                      className="w-5 h-5 cursor-pointer accent-primary"
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Præferencecookies</h4>
                    <p className="text-sm text-gray-2">
                      Gør det muligt at huske dine valg og præferencer for at forbedre din oplevelse.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.preferences}
                      onChange={() => handleTogglePreference("preferences")}
                      className="w-5 h-5 cursor-pointer accent-primary"
                    />
                  </div>
                </div>

                <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Marketingcookies</h4>
                    <p className="text-sm text-gray-2">
                      Bruges til at vise relevante annoncer og måle effektiviteten af vores kampagner.
                    </p>
                  </div>
                  <div className="ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => handleTogglePreference("marketing")}
                      className="w-5 h-5 cursor-pointer accent-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 justify-end pt-4 border-t border-gray-5">
                <Button variant="outline" size="default" onClick={handleRejectAll} className="w-full sm:w-auto">
                  Kun nødvendige
                </Button>
                <Button variant="secondary" size="default" onClick={handleSavePreferences} className="w-full sm:w-auto">
                  Gem indstillinger
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
