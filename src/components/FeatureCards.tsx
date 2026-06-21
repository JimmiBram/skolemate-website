import { useState, useEffect, useRef } from "react";
import lessonPlanningImage from "@/assets/lesson-planning-new.png";
import materialDevelopmentImage from "@/assets/smart-tools-classroom.png";
import aiChatImage from "@/assets/mine-materialer.png";

const features = [
  {
    title: "Lektionsplanlægning",
    description: "SkoleMate hjælper dig med at planlægge og gennemføre undervisning, der passer til netop dine elever – hurtigt og nemt",
    bgColor: "bg-feature-mint",
    image: lessonPlanningImage,
    imageAlt: "Illustration af lektionsplanlægning med kalender og noter",
    backContent: "Vi ved, hvor meget tid det kræver at planlægge god undervisning, og derfor har vi gjort det let for dig. Ud fra dine ønsker strukturerer SkoleMate gennemførte undervisningsmoduler med tydelige læringsmål og konkrete idéer til aktiviteter og opgaver. Du får en færdig lektionsplan i tabelform klar til eksport eller udskrivning."
  },
  {
    title: "Smarte værktøjer",
    description: "Indbyggede smarte værktøjer til at udvikle opgaver og aktiviteter med udgangspunkt i din faglighed",
    bgColor: "bg-feature-coral",
    image: materialDevelopmentImage,
    imageAlt: "Illustration af materialeudearbejdelse med lærer og tavle",
    backContent: "Vi synes, det skal være hurtigt og effektivt for dig at skabe stærke undervisningsaktiviteter. Derfor har vi samlet en række smarte værktøjer til at udvikle opgaver, aktiviteter, samtalekort, quizzer m.m. SkoleMate hjælper dig med at udvikle indhold, der passer til dine elever – og giver dig nye idéer, når du har brug for inspiration."
  },
  {
    title: "Mine materialer",
    description: "Gem dine materialer så du altid kan arbejde videre, redigere og eksportere",
    bgColor: "bg-feature-orange",
    image: aiChatImage,
    imageAlt: "Illustration af AI chat interface",
    backContent: "Vi har samlet et sted, hvor du nemt kan udvikle, gemme og forbedre dine materialer. SkoleMate hjælper dig med at redigere eksisterende indhold, omskrive tekster til rette niveau og tilføje variation med eksempler og cases. Når du er færdig, kan du hurtigt eksportere materialet og bruge det direkte i din undervisning."
  },
];

const FeatureCards = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          features.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleReadMore = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setFlippedCard(index);
  };

  const handleMouseLeave = (index: number) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    }
  };

  return (
    <section id="funktioner" className="w-full bg-background pt-4 md:pt-8 pb-16 md:pb-24">
      <div className="container mx-auto px-6">
        <p className="text-xl md:text-2xl text-center text-foreground/90 mb-16 md:mb-20 md:whitespace-nowrap">
          Vi har gjort det sikkert og nemt <span className="font-bold text-foreground border-b-4 border-primary pb-0.5">for lærere</span> at komme i gang med at bruge kunstig intelligens.
        </p>
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative min-h-[500px] perspective-1000 transition-all duration-700 ease-out ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div
                className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
                  flippedCard === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div
                  className={`${feature.bgColor} rounded-3xl p-8 flex flex-col justify-between min-h-[500px] transition-transform duration-300 hover:scale-105 hover:shadow-xl backface-hidden absolute inset-0`}
                >
                  {/* Card Content */}
                  <div className="space-y-4">
                    <h3 className="text-[32px] leading-[35.2px] font-bold text-gray-1">
                      {feature.title}
                    </h3>
                    <p className="text-normal text-gray-2">
                      {feature.description}
                    </p>
                    <button
                      onClick={(e) => handleReadMore(index, e)}
                      className="inline-flex items-center text-normal text-gray-1 hover:text-primary transition-colors font-medium group"
                    >
                      Læs mere
                      <svg 
                        className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Card Image */}
                  <div className="mt-6 -mx-8 -mb-8 overflow-hidden rounded-b-3xl h-[280px]">
                    <img 
                      src={feature.image} 
                      alt={feature.imageAlt}
                      className={`w-full h-full object-cover object-center ${
                        index === 1 ? "scale-110" : "scale-150"
                      }`}
                    />
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className={`${feature.bgColor} rounded-3xl p-8 flex flex-col justify-center min-h-[500px] backface-hidden absolute inset-0 rotate-y-180`}
                >
                  <div className="space-y-4">
                    <h3 className="text-[32px] leading-[35.2px] font-bold text-gray-1 mb-6">
                      {feature.title}
                    </h3>
                    <p className="text-normal text-gray-2 leading-relaxed">
                      {feature.backContent}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
