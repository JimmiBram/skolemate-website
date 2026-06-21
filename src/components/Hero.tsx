import { Button } from "@/components/ui/button";
import ballonImage from "@/assets/hero-balloon-v4.png";
import { useState, useEffect, useCallback } from "react";

const roles = ["elever", "lærere", "skoleledere"];

const RotatingText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const currentWord = roles[roleIndex];

  useEffect(() => {
    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentWord]);

  return (
    <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto md:mx-0">
      SkoleMate er udviklet specifikt til{" "}
      <span className="font-bold text-white">
        {displayedText}
        <span className="animate-pulse">|</span>
      </span>{" "}
      på danske skoler
    </p>
  );
};

const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Circles */}
    <div className="absolute top-[10%] left-[5%] w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white/15 animate-float" />
    <div className="absolute top-[60%] left-[12%] w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/8" style={{ animationDelay: '1s' }} />
    <div className="absolute top-[20%] right-[8%] w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-white/10" style={{ animationDelay: '2s' }} />
    <div className="absolute bottom-[30%] right-[15%] w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/6" />

    {/* Triangles */}
    <svg className="absolute top-[15%] right-[25%] w-8 h-8 md:w-14 md:h-14 opacity-10 animate-float" style={{ animationDelay: '0.5s' }} viewBox="0 0 40 40">
      <polygon points="20,4 36,36 4,36" fill="none" stroke="white" strokeWidth="2" />
    </svg>
    <svg className="absolute bottom-[40%] left-[20%] w-10 h-10 md:w-16 md:h-16 opacity-[0.08] animate-float" style={{ animationDelay: '1.5s' }} viewBox="0 0 40 40">
      <polygon points="20,4 36,36 4,36" fill="white" />
    </svg>

    {/* Math symbols */}
    <span className="absolute top-[30%] left-[30%] text-white/10 text-3xl md:text-5xl font-bold select-none animate-float" style={{ animationDelay: '0.8s' }}>+</span>
    <span className="absolute top-[50%] right-[20%] text-white/10 text-2xl md:text-4xl font-bold select-none animate-float" style={{ animationDelay: '1.2s' }}>×</span>
    <span className="absolute bottom-[35%] left-[40%] text-white/[0.07] text-4xl md:text-6xl font-bold select-none animate-float" style={{ animationDelay: '2.2s' }}>÷</span>
    <span className="absolute top-[12%] left-[50%] text-white/[0.08] text-2xl md:text-3xl font-bold select-none animate-float" style={{ animationDelay: '1.8s' }}>=</span>
    
    {/* Small dots */}
    <div className="absolute top-[45%] left-[8%] w-3 h-3 rounded-full bg-white/15" />
    <div className="absolute top-[25%] right-[35%] w-2 h-2 rounded-full bg-white/20" />
    <div className="absolute bottom-[25%] right-[30%] w-4 h-4 rounded-full bg-white/10" />
  </div>
);

const WaveDivider = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    {/* Back wave - 30% opacity */}
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="absolute bottom-0 block w-full h-[120px] md:h-[220px]"
    >
      <path
        d="M0,224 Q360,80 720,192 Q1080,304 1440,160 L1440,320 L0,320 Z"
        fill="white"
        fillOpacity="0.3"
      />
    </svg>
    {/* Middle wave - 50% opacity */}
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="absolute bottom-0 block w-full h-[100px] md:h-[190px]"
    >
      <path
        d="M0,192 Q400,64 800,192 Q1120,288 1440,128 L1440,320 L0,320 Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
    {/* Front wave - 70% opacity */}
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="absolute bottom-0 block w-full h-[85px] md:h-[165px]"
    >
      <path
        d="M0,160 Q320,288 720,128 Q1080,16 1440,160 L1440,320 L0,320 Z"
        fill="white"
        fillOpacity="0.7"
      />
    </svg>
    {/* Front solid white wave */}
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="relative block w-full h-[70px] md:h-[140px]"
    >
      <path
        d="M0,128 Q280,256 640,128 Q1000,0 1440,128 L1440,320 L0,320 Z"
        fill="hsl(0, 0%, 100%)"
      />
    </svg>
  </div>
);

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(14, 100%, 51%) 0%, hsl(25, 100%, 55%) 50%, hsl(30, 100%, 60%) 100%)' }}>
      <FloatingShapes />
      
      <div className="container mx-auto px-6 pt-16 pb-28 md:pt-24 md:pb-36 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 pl-0 md:pl-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Hele skolens AI-assistent
            </h1>
            <p className="text-large text-white/90 max-w-xl mx-auto md:mx-0">
              Vi samarbejder med alle skoler, der ønsker at understøtte individualiseret og engageret læring med AI.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full font-bold"
                asChild
              >
                <a href="https://app.skolemate.dk/accounts/signup/?next=/" target="_blank" rel="noopener noreferrer">
                  Tilmeld
                </a>
              </Button>
              <Button
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white/15 rounded-full"
                asChild
              >
                <a href="#funktioner">Læs mere</a>
              </Button>
            </div>
            <RotatingText />
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              alt="Illustration af børn der lærer med AI-assisteret undervisning"
              src={ballonImage}
              className="w-full max-w-[390px] h-auto animate-float object-scale-down drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Centered CTA below grid */}
        <div className="flex flex-col items-center gap-4 mt-12">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 rounded-full font-bold px-10 py-6 text-lg"
            asChild
          >
            <a href="#kontakt">Kontakt os</a>
          </Button>
          <p className="text-white/80 text-base md:text-lg">
            ...og hør mere om hvordan SkoleMate kan gøre en forskel på din skole.
          </p>
        </div>
      </div>

      <WaveDivider />
    </section>
  );
};

export default Hero;
