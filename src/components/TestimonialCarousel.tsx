import { useEffect, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import quotationMark from "@/assets/quotation-mark.png";

const testimonials = [
  {
    quote: "SkoleMate er fantastisk til differentiering. Jeg får øjeblikkelig hjælp til at omformulere komplekst stof, så det passer til mine elevers individuelle læringsstile og behov.",
    bgColor: "bg-feature-mint",
  },
  {
    quote: "Jeg bruger SkoleMate til at finde på nye idéer og forslag til undervisningsforløb, som jeg ikke selv havde tænkt på.",
    bgColor: "bg-feature-coral",
  },
  {
    quote: "Det bedste er, at SkoleMate kender min skoles retningslinjer og værdier. Jeg kan se hvordan det integreres i de materialer jeg udvikler og dermed sikres fagligheden hver gang.",
    bgColor: "bg-feature-orange",
  },
  {
    quote: "Jeg tør trygt lade SkoleMate støtte eleverne i undervisning og lektiehjælp. Den vejleder og hjælper dem i gang, men løser ikke opgaverne for dem.",
    bgColor: "bg-feature-blue",
  },
];

const TestimonialCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const scrollToNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-rotation every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [scrollToNext]);

  return (
    <section className="w-full bg-background pt-4 md:pt-8 pb-16 md:pb-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Hvad siger lærerne?
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="relative overflow-visible">
                    {/* Quotation mark positioned at bottom right, inside pill bounds */}
                    <img 
                      src={quotationMark} 
                      alt="" 
                      className="absolute bottom-6 right-10 md:right-16 w-16 h-16 md:w-24 md:h-24 opacity-40 z-10 pointer-events-none"
                    />
                    <div
                      className={`${testimonial.bgColor} rounded-full p-8 md:p-12 md:px-16 min-h-[280px] flex flex-col justify-center items-center text-center transition-transform duration-300`}
                    >
                      <blockquote>
                        <p className="text-lg md:text-xl text-gray-2 italic leading-relaxed max-w-2xl px-4">
                          "{testimonial.quote}"
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/80 hover:bg-white border-gray-200" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/80 hover:bg-white border-gray-200" />
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Gå til testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
