import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import signInImage from "@/assets/sign-in.png";
import vaerktojerImage from "@/assets/vaerktojer.png";
import canvasEditorImage from "@/assets/canvas-editor.png";
import generelChatElevImage from "@/assets/generel-chat-elev.png";
import mistralLogo from "@/assets/partners/mistral-ai-logo.svg";
import { X } from "lucide-react";

const Funktionalitet = () => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Funktionalitet</h1>
          <p className="text-xl text-gray-2 max-w-2xl mx-auto">
            Det skal være sikkert og nemt at bruge kunstig intelligens i skolen.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section 1: Text left, Image right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-2 leading-relaxed">
                Vi har udviklet SkoleMate med idéen om at gøre det nemt og sikkert for lærere og elever at bruge kunstig intelligens, der skaber reel værdi i hverdagen. Derfor kræver det altså heller ingen tekniske færdigheder på forhånd for at komme i gang. Alt du skal gøre er at logge ind på platformen og begynde din chat med SkoleMate. SkoleMate er udviklet specifikt til skoler og ved allerede, om du er logget ind som lærer eller elev. På den måde tilpasses oplevelsen den enkelte bruger og det samme gør de værktøjer, der stilles til rådighed.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={signInImage} 
                alt="SkoleMate login interface" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openLightbox(signInImage, "SkoleMate login interface")}
              />
            </div>
          </div>

          {/* Section 2: Image left, Text right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-2 leading-relaxed">
                Det betyder for lærere at SkoleMate agerer intelligent sparringspartner, der giver gode råd og idéer til udvikling af nye undervisningsmaterialer eller kommer med forslag til differentiering af eksisterende indhold. Det giver superkræfter i forberedelsen, hvor effektivitet kan være en afgørende faktor for i sidste ende at levere god undervisning af høj kvalitet.
              </p>
              <p className="text-lg text-gray-2 leading-relaxed mt-4">
                Værktøjerne sikrer at lærerens faglighed bringes i spil med en spørgende tilgang, hvor SkoleMate indsamler viden i stedet for at "finde på". På den måde tilrettelægges forberedelse af undervisning indenfor den specifikke kontekst hver gang - tilpasset elever, klasse, fag, miljø etc.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={vaerktojerImage} 
                alt="SkoleMate værktøjer oversigt" 
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openLightbox(vaerktojerImage, "SkoleMate værktøjer oversigt")}
              />
            </div>
          </div>

          {/* Section 3: Text left, Image right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-2 leading-relaxed">
                Med vores Canvas-editor får lærere et dynamisk arbejdsrum, hvor kunstig intelligens og menneskelig faglighed smelter sammen. Her kan man ikke blot sparre med SkoleMate for at generere idéer, men også rette og tilføje direkte i indholdet undervejs. Det gør det let som en leg at finpudse tekster, strukturere forløb og tilpasse materialer præcis til klassens behov i én og samme arbejdsgang. Ved at kombinere den intelligente sparring med lærerens egen pædagogiske intuition sikres det, at det færdige materiale altid er af højeste kvalitet og klar til brug i undervisningen.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={canvasEditorImage} 
                alt="SkoleMate Canvas-editor" 
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openLightbox(canvasEditorImage, "SkoleMate Canvas-editor")}
              />
            </div>
          </div>

          {/* Section 4: Image left, Text right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-2 leading-relaxed">
                For elever er SkoleMate en ekstra sidemakker eller hjælpelærer i undervisningen. SkoleMate støtter og vejleder eleverne, men den leverer ikke færdige svar eller opgaveløsninger. Det betyder, at SkoleMate trygt kan inviteres ind i undervisningen og bidrage til et bedre læringsmiljø. Gennem en dialogisk tilgang hjælper platformen eleven med at bryde svære opgaver ned i overskuelige bidder, stille de rigtige spørgsmål og finde frem til egne løsninger. På den måde bliver teknologien en katalysator for læring fremfor en genvej, hvilket styrker elevens selvtillid og faglige fordybelse. Ved at tilpasse hjælpen til den enkelte elevs behov, sikres det, at alle får den nødvendige støtte til at komme videre i deres egen læreproces.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={generelChatElevImage} 
                alt="SkoleMate elev-chat" 
                className="w-full max-w-lg mx-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => openLightbox(generelChatElevImage, "SkoleMate elev-chat")}
              />
            </div>
          </div>

          {/* Section 5: European Data Sovereignty */}
          <div className="flex flex-col items-center text-center bg-muted/30 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Europæisk datasikkerhed</h2>
            <div className="max-w-4xl">
              <p className="text-lg text-gray-2 leading-relaxed mb-4">
                Som grundprincip har vi valgt at gå den svære, men rigtige vej i udviklingen af SkoleMate. Det betyder, at vi udelukkende benytter software og infrastruktur inden for Europas grænser. Vi har bevidst valgt den franske sprogmodel, Mistral, fremfor de store amerikanske eller kinesiske spillere som ChatGPT, Gemini eller DeepSeek. Selvom det kræver en langt mere kompleks teknisk arkitektur at bygge alt op fra bunden i europæiske datacentre, har det været en nødvendig prioritering for aldrig at gå på kompromis med datasikkerheden.
              </p>
              <p className="text-lg text-gray-2 leading-relaxed">
                Som dansk virksomhed vægtes brugernes tryghed højest. Ved at holde os til det europæiske økosystem sikres det, at al databehandling sker under de strengeste EU-standarder og GDPR-lovgivning. For brugerne betyder det, at der er fuld tillid til, at data bliver i Europa, og at teknologien bag SkoleMate er bygget på et fundament af ansvarlig AI og digital suverænitet.
              </p>
            </div>
            <img 
              src={mistralLogo} 
              alt="Mistral AI logo" 
              className="mt-8 w-full max-w-[200px] h-auto"
            />
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Luk billede"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Funktionalitet;