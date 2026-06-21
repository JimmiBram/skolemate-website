import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import sorenImage from "@/assets/team/soren-larsen.png";
import jimmiImage from "@/assets/team/jimmi-bram.png";
import jeppeImage from "@/assets/team/jeppe-klausen.png";
import kimImage from "@/assets/team/kim-alster.png";

const OmOs = () => {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-6 py-16 max-w-4xl">
          <Parallax speed={5}>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-left">
              Om os
            </h1>
          </Parallax>
          
          <div className="prose prose-lg max-w-none space-y-8 text-foreground/90 text-left">
            <Parallax speed={3}>
              <div className="space-y-6 mb-16">
                <p className="text-lg leading-relaxed">
                  Vi er et dedikeret team bestående af folk med baggrund indenfor skole, software og forretningsudvikling. Siden kunstig intelligens for alvor vandt frem i løbet af 2022, har vi fulgt med på sidelinjen og set hvordan AI, har været med til at forandre verden på godt og ondt. Udviklingen er gået stærkt og det kan være svært for de fleste at forstå, hvilken betydning AI har- og fremover vil få for vores samfund. Teknologien er allerede en del af alle arbejdspladser og industrier i større eller mindre grad - det gælder også skolen.
                </p>
                <p className="text-lg leading-relaxed">
                  Helt grundlæggende, så eksisterer vi for at give alle elever og studerende de bedste muligheder for at lære og trives i skolen gennem teknologi, der gør undervisningen mere individualiseret og engagerende. Vores mål er at levere AI, der ikke erstatter læreren – men giver nye muligheder, viden og værktøjer til at lykkes. Vi tror på, at teknologi skal understøtte og højne – ikke overtage – den menneskelige relation mellem lærer og elev.
                </p>
                <p className="text-lg leading-relaxed font-semibold">
                  Derfor har vi skabt SkoleMate.
                </p>
                <p className="text-lg leading-relaxed">
                  SkoleMate giver lærere superkræfter fra forberedelsen og helt ud i undervisningslokalet. Med AI som motor bringes fagligheden i spil – uden at gå på kompromis. Elever kan få støtte og hjælp, men ingen færdige løsninger.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-primary">
                  Det mener vi, er AI med mening.
                </p>
              </div>
            </Parallax>

            <Parallax speed={2}>
              <div className="space-y-8 mt-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                  Teamet bag SkoleMate
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Søren Larsen */}
                  <div className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src={sorenImage} 
                        alt="Søren Larsen" 
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">Søren Larsen</h3>
                        <p className="text-primary font-medium mb-2">Medstifter</p>
                        <p className="text-sm text-gray-2">
                          <a href="mailto:sl@skolemate.dk" className="hover:text-primary transition-colors">sl@skolemate.dk</a>
                        </p>
                      </div>
                    </div>
                    <p className="text-base text-foreground/80 leading-relaxed">
                      Søren har en solid pædagogisk baggrund med mange års erfaring som underviser. Med ekspertise i specialpædagogik og en dyb forståelse for læring bidrager han til at sikre, at SkoleMate møder lærernes og elevernes virkelige behov.
                    </p>
                  </div>

                  {/* Jimmi Bram */}
                  <div className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <img 
                        src={jimmiImage} 
                        alt="Jimmi Bram" 
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">Jimmi Bram</h3>
                        <p className="text-primary font-medium mb-2">Medstifter</p>
                        <p className="text-sm text-gray-2">
                          <a href="mailto:jb@skolemate.dk" className="hover:text-primary transition-colors">jb@skolemate.dk</a>
                        </p>
                      </div>
                    </div>
                    <p className="text-base text-foreground/80 leading-relaxed">
                      Jimmi er en teknologisk drivkraft med dybe rødder i softwareudvikling, cybersikkerhed og AI. Med over 20 års erfaring leder han udviklingen af SkoleMate's AI-løsninger og sikrer, at teknologien skaber reel værdi.
                    </p>
                  </div>

                </div>
              </div>
            </Parallax>
          </div>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </ParallaxProvider>
  );
};

export default OmOs;
