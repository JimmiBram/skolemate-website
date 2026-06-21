import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const pricingCards = [
  {
    title: "Gratis",
    price: "0 kr",
    priceSuffix: "/måned",
    features: [
      { text: "Ubegrænset chat", bold: false },
      { text: "Lektionsplanlægning", bold: false },
      { text: "Smarte værktøjer", bold: false },
      { text: "Materiale udarbejdelse", bold: false },
      { text: "Upload af dokumenter", bold: false },
      { text: "Dansk skolekontekst", bold: false },
    ],
    buttonText: "Kom i gang gratis",
    buttonVariant: "outline" as const,
    buttonHref: "https://app.skolemate.dk/accounts/signup/?next=/",
    isExternal: true,
    isPopular: false,
  },
  {
    title: "Plus",
    price: "69 kr",
    priceSuffix: "/måned",
    priceNote: "*",
    features: [
      { text: "Alt fra Gratis", bold: true },
      { text: "Ubegrænset materiale", bold: false },
      { text: "Ubegrænset upload af dokumenter", bold: false },
      { text: "Eksport til pdf", bold: false },
      { text: "Support", bold: false },
    ],
    buttonText: "Opgrader til Plus",
    buttonVariant: "secondary" as const,
    buttonHref: "https://app.skolemate.dk/accounts/signup/?next=/",
    isExternal: true,
    isPopular: true,
  },
  {
    title: "Skoleadgang",
    price: "Kontakt os",
    priceSuffix: " for pris",
    features: [
      { text: "Alt fra Plus", bold: true },
      { text: "Elevadgang", bold: false },
      { text: "Unilogin", bold: false },
      { text: "Integreret med skolens dokumenter (RAG)", bold: false },
    ],
    buttonText: "Kontakt os",
    buttonVariant: "outline" as const,
    buttonHref: "/#kontakt",
    isExternal: false,
    isPopular: false,
  },
];

const PricingCard = ({ card }: { card: typeof pricingCards[0] }) => (
  <Card className={`border-2 ${card.isPopular ? 'border-primary shadow-lg' : 'border-gray-5 hover:border-primary transition-colors'} flex flex-col h-full relative`}>
    {card.isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
        Populær
      </div>
    )}
    <CardHeader>
      <CardTitle className="text-3xl">{card.title}</CardTitle>
      <CardDescription className="text-2xl font-bold text-foreground mt-4">
        {card.price}<span className="text-base font-normal text-gray-2">{card.priceSuffix}</span>
        {card.priceNote && <span className="text-primary">{card.priceNote}</span>}
      </CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col flex-1">
      <ul className="space-y-3 flex-1">
        {card.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className={`text-gray-2 ${feature.bold ? 'font-semibold' : ''}`}>{feature.text}</span>
          </li>
        ))}
      </ul>
      <Button variant={card.buttonVariant} size="lg" className="w-full mt-6" asChild>
        {card.isExternal ? (
          <a href={card.buttonHref} target="_blank" rel="noopener noreferrer">
            {card.buttonText}
          </a>
        ) : (
          <a href={card.buttonHref}>
            {card.buttonText}
          </a>
        )}
      </Button>
    </CardContent>
  </Card>
);

const PricingSection = () => {
  return (
    <section id="priser" className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">Priser og Pakker</h2>
        <p className="text-xl text-gray-2 max-w-2xl mx-auto">
          Vælg den pakke der passer bedst til dine behov
        </p>
      </div>

      {/* Desktop Grid - hidden on mobile */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {pricingCards.map((card, index) => (
          <PricingCard key={index} card={card} />
        ))}
      </div>

      {/* Mobile Carousel - visible only on mobile */}
      <div className="md:hidden">
        <Carousel
          opts={{
            align: "center",
            loop: true,
            startIndex: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {pricingCards.map((card, index) => (
              <CarouselItem key={index} className="pl-2 basis-[85%]">
                <div className="pt-6">
                  <PricingCard card={card} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
      
      <p className="text-center text-sm italic text-gray-3 mt-8">* Priser er inkl. moms</p>
    </section>
  );
};

export default PricingSection;
