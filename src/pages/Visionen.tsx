import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Visionen = () => {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-6 py-16 max-w-4xl relative overflow-hidden">
          {/* Background decorative elements with parallax */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <Parallax speed={-10} className="absolute top-20 left-10">
              <div className="w-32 h-32 bg-feature-mint/20 rounded-full blur-3xl" />
            </Parallax>
            <Parallax speed={-15} className="absolute top-40 right-20">
              <div className="w-40 h-40 bg-feature-coral/20 rounded-full blur-3xl" />
            </Parallax>
            <Parallax speed={-8} className="absolute bottom-20 left-1/4">
              <div className="w-36 h-36 bg-feature-orange/20 rounded-full blur-3xl" />
            </Parallax>
          </div>

          <Parallax speed={5}>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Visionen
            </h1>
          </Parallax>
          
          <div className="prose prose-lg max-w-none space-y-6 text-foreground/90 relative z-10">
            <Parallax speed={2}>
              <p className="text-lg leading-relaxed font-medium">
                Vores vision er at levere den mest anvendte, ansvarlige og værdiskabende Ai-løsning til skoler i hele Europa, der understøtter lærere og elever i individualiseret, kreativ og meningsfuld læring.
              </p>
            </Parallax>

            <Parallax speed={3}>
              <p className="text-lg leading-relaxed">
                Vi tror på, at kunstig intelligens kan være en enorm gave for skolen – men kun hvis vi bruger den rigtigt. For ja, AI kan friste elever til at vælge den hurtige løsning. Og hvordan hænger det så sammen med vores ønske om også at styrke både læring, nysgerrighed og kritiske tænkning?
              </p>
            </Parallax>

            <Parallax speed={4}>
              <p className="text-lg leading-relaxed">
                Det gør det kun, hvis teknologien bliver brugt med et klart didaktisk formål og her kommer mennesker altid før teknologien.
              </p>
            </Parallax>

            <Parallax speed={2}>
              <p className="text-lg leading-relaxed">
                Vi har bygget SkoleMate på et pædagogisk fundament, hvor AI aldrig står alene, men understøtter undervisningen på de rigtige præmisser. SkoleMate er udviklet specifikt til læring – ikke som et generelt tekstværktøj, men som en intelligent sparringspartner, der hjælper elever og lærere med at komme et lag dybere. Det mener vi skaber værdi i skolen.
              </p>
            </Parallax>

            <Parallax speed={3}>
              <div className="text-lg leading-relaxed">
                <p className="mb-4">I praksis betyder det bl.a. at SkoleMate arbejder med en spørgende, undersøgende tilgang ved at:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>stille relevante spørgsmål, der inspirerer brugeren til at tænke selv</li>
                  <li>invitere til refleksion frem for at give hurtige, færdige svar</li>
                  <li>forklare svære begreber i øjenhøjde</li>
                  <li>foreslå meningsfulde skridt i læreprocessen</li>
                  <li>støtte aktiv deltagelse og faglig fordybelse</li>
                </ul>
              </div>
            </Parallax>

            <Parallax speed={4}>
              <p className="text-lg leading-relaxed">
                Vi ved samtidig godt, at lærere har mere travlt end nogensinde. Flere krav, flere elever med forskellige behov – og mindre tid. AI er ikke løsningen på alting, men vi tror på at teknologien i fremtidens skole, kan give dem støtte, struktur og overskud, så der bliver plads til det, undervisning i sin kerne handler om: relationer, kreativitet og fordybelse.
              </p>
            </Parallax>

            <Parallax speed={2}>
              <p className="text-lg leading-relaxed font-medium">
                Kort sagt: AI kan løfte skolen, når den bruges med omtanke - og det ansvar tager vi på os.
              </p>
            </Parallax>
          </div>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </ParallaxProvider>
  );
};

export default Visionen;
