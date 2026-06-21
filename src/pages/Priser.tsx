import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Priser = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Priser og Pakker</h1>
          <p className="text-xl text-gray-2 max-w-2xl mx-auto">
            Vælg den pakke der passer bedst til dine behov
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Gratis Package */}
          <Card className="border-2 border-gray-5 hover:border-primary transition-colors flex flex-col">
            <CardHeader>
              <CardTitle className="text-3xl">Gratis</CardTitle>
              <CardDescription className="text-2xl font-bold text-foreground mt-4">
                0 kr<span className="text-base font-normal text-gray-2">/måned</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1">
              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2">Ubegrænset chat</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2">Lektionsplanlægning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2">Smarte værktøjer</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2">Materiale udarbejdelse</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2">Upload af dokumenter</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2">Dansk skolekontekst</span>
                </li>
              </ul>
              <Button variant="outline" size="lg" className="w-full mt-6" asChild>
                <a href="https://app.skolemate.dk/accounts/signup/?next=/" target="_blank" rel="noopener noreferrer">
                  Kom i gang gratis
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Plus Package */}
          <Card className="border-2 border-primary shadow-lg relative flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
              Populær
            </div>
            <CardHeader>
              <CardTitle className="text-3xl">Plus</CardTitle>
            <CardDescription className="text-2xl font-bold text-foreground mt-4">
              69 kr<span className="text-base font-normal text-gray-2">/måned</span><span className="text-primary">*</span>
            </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1">
              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2 font-semibold">Alt fra Gratis</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2">Ubegrænset materiale</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2">Ubegrænset upload af dokumenter</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2">Eksport til pdf</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2">Support</span>
                </li>
              </ul>
              <Button variant="secondary" size="lg" className="w-full mt-6" asChild>
                <a href="https://app.skolemate.dk/accounts/signup/?next=/" target="_blank" rel="noopener noreferrer">
                  Opgrader til Plus
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Skole Package */}
          <Card className="border-2 border-gray-5 hover:border-primary transition-colors flex flex-col">
            <CardHeader>
              <CardTitle className="text-3xl">Skoleadgang</CardTitle>
              <CardDescription className="text-2xl font-bold text-foreground mt-4">
                Kontakt os<span className="text-base font-normal text-gray-2"> for pris</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1">
              <ul className="space-y-3 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2 font-semibold">Alt fra Plus</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2">Elevadgang</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2">Unilogin</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-2">Integreret med skolens dokumenter (RAG)</span>
                </li>
              </ul>
              <Button variant="outline" size="lg" className="w-full mt-6" asChild>
                <a href="/#kontakt">
                  Kontakt os
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <p className="text-center text-sm italic text-gray-3 mt-8">* Priser er inkl. moms</p>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Priser;