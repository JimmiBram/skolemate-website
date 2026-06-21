import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Databehandleraftale = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Databehandleraftale (DPA)</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/90 space-y-8">
          <section className="space-y-4">
            <p className="text-lg">Mellem</p>
            <p className="font-semibold">Kunden</p>
            <p>(herefter "Kunden")</p>
            <p>og</p>
            <p className="font-semibold">SkoleMate ApS, Fragevej 58, 4760 Vordingborg, Danmark</p>
            <p>(herefter "SkoleMate")</p>
            <p>(Kunden og SkoleMate betegnes hver for sig en "Part" og samlet "Parterne")</p>
            <p>har følgende <strong>databehandleraftale</strong> ("DPA") om SkoleMates behandling af personoplysninger på vegne af Kunden.</p>
            <p>Denne DPA træder i kraft på datoen for hovedaftalen mellem Parterne ("Aftalen").</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">1. Definitioner</h2>
            <p>I denne DPA forstås ved:</p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li><strong>"Aftale"</strong>: Hovedaftalen (f.eks. vilkår og tilbud) indgået mellem Kunden og SkoleMate, som til enhver tid kan ændres i overensstemmelse med sine betingelser.</li>
              <li><strong>"Anvendelig databeskyttelseslovgivning"</strong>: Alle love og regler, der finder anvendelse på SkoleMates behandling af personoplysninger under Aftalen, herunder, men ikke begrænset til, GDPR og anden EU/EØS-lovgivning samt eventuelt øvrig relevant national lovgivning.</li>
              <li><strong>"Dataansvarlig" / "Data Controller"</strong>: Den fysiske eller juridiske person, myndighed, institution eller andet organ, som alene eller sammen med andre afgør formålene med og hjælpemidlerne til behandling af personoplysninger (her Kunden).</li>
              <li><strong>"Databehandler" / "Processor"</strong>: En fysisk eller juridisk person, myndighed, institution eller andet organ, som behandler personoplysninger på den dataansvarliges vegne (her SkoleMate).</li>
              <li><strong>"Personoplysninger"</strong>: Enhver form for information om en identificeret eller identificerbar fysisk person, som defineret i GDPR og anden Anvendelig databeskyttelseslovgivning.</li>
              <li><strong>"Behandling" / "Process"</strong>: Enhver aktivitet eller række af aktiviteter, der involverer personoplysninger, f.eks. indsamling, registrering, organisering, lagring, tilpasning, ændring, søgning, brug, videregivelse, samkøring, begrænsning, sletning eller tilintetgørelse.</li>
              <li><strong>"Tjenester" / "Services"</strong>: De it‑tjenester og den platform, som SkoleMate leverer til Kunden i henhold til Aftalen, og hvor SkoleMate behandler Kundens data.</li>
              <li><strong>"Underdatabehandler" / "Sub‑Processor"</strong>: Tredjemand, som SkoleMate engagerer til at behandle personoplysninger på Kundens vegne som led i levering af Tjenesterne.</li>
              <li><strong>"Tilsynsmyndighed"</strong>: Den uafhængige offentlige myndighed, der fører tilsyn med overholdelsen af databeskyttelsesreglerne.</li>
              <li><strong>"Databrud"</strong>: Et brud på sikkerheden, der fører til hændelig eller ulovlig tilintetgørelse, tab, ændring, uautoriseret videregivelse af eller adgang til personoplysninger, der behandles.</li>
            </ul>
            <p className="mt-4">Eventuelle begreber, som ikke er defineret her, har den betydning, der fremgår af Aftalen eller GDPR.</p>
            <p>Enhver henvisning til "skriftligt" eller "skriftlig" omfatter også e‑mail.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">2. Baggrund</h2>
            <p><strong>2.1.</strong> Parterne har indgået Aftalen, hvorefter Kunden har engageret SkoleMate til at levere Tjenesterne. Denne DPA, inklusive eventuelle bilag, er en integreret del af Aftalen.</p>
            <p><strong>2.2.</strong> I forbindelse med levering af Tjenesterne vil SkoleMate behandle personoplysninger på vegne af Kunden i Aftalens løbetid. Denne DPA gælder for alle behandlingsaktiviteter, hvor SkoleMates medarbejdere eller underdatabehandlere behandler Kundens personoplysninger på vegne af Kunden.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">3. Roller og ansvar</h2>
            <p><strong>3.1.</strong> Parterne er enige om, at <strong>Kunden er dataansvarlig</strong>, og <strong>SkoleMate er databehandler</strong> for de personoplysninger, der behandles under denne DPA.</p>
            <p><strong>3.2.</strong> Kunden er ansvarlig for at sikre, at behandling af personoplysninger i henhold til Aftalen og denne DPA sker i overensstemmelse med Anvendelig databeskyttelseslovgivning. Kunden indestår for lovligheden af, at SkoleMate modtager og behandler personoplysninger på Kundens vegne, herunder at der foreligger passende hjemmel (f.eks. samtykke, kontrakt, retlig forpligtelse eller legitim interesse). Kunden er ansvarlig for sin egen privatlivspolitik og for at informere de registrerede, herunder om brugen af SkoleMate som databehandler.</p>
            <p><strong>3.3.</strong> SkoleMate må kun behandle personoplysninger efter <strong>dokumenterede instrukser</strong> fra Kunden, medmindre SkoleMate er retligt forpligtet til at behandle oplysningerne efter anden lovgivning. Kundens instrukser fremgår af denne DPA og tilhørende bilag. Yderligere instrukser skal gives skriftligt (herunder elektronisk) og knyttes til denne DPA.</p>
            <p><strong>3.4.</strong> Hvis SkoleMate vurderer, at en instruktion fra Kunden er i strid med Anvendelig databeskyttelseslovgivning, skal SkoleMate uden unødigt ophold informere Kunden herom og kan suspendere udførelsen af den pågældende instruktion, indtil Kunden skriftligt bekræfter eller ændrer den.</p>
            <p><strong>3.5.</strong> SkoleMates adgang til Kundens personoplysninger skal være begrænset til, hvad der er nødvendigt for at levere Tjenesterne, herunder support, fejlsøgning, vedligeholdelse og drift, og alene i overensstemmelse med denne DPA og Aftalen.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">4. Behandlingens karakter, formål og varighed</h2>
            <p><strong>4.1.</strong> Behandlingens karakter og formål består i, at SkoleMate stiller sin platform og sine Tjenester til rådighed for Kunden, som beskrevet i Aftalen, og behandler personoplysninger for at kunne levere, vedligeholde, sikre og udvikle Tjenesterne.</p>
            <p><strong>4.2.</strong> De typer af personoplysninger og kategorier af registrerede, som behandles, afhænger af Kundens konkrete brug af Tjenesterne, og fremgår nærmere af Bilag A til denne DPA.</p>
            <p><strong>4.3.</strong> SkoleMate behandler personoplysningerne, så længe Aftalen er i kraft og i op til 60 dage efter ophør, medmindre Kunden kræver tidligere sletning, selv sletter data via funktionalitet i Tjenesterne, eller andet følger af Bilag A eller gældende lov.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">5. Sikkerhed for behandlingen</h2>
            <p><strong>5.1.</strong> SkoleMate skal implementere passende tekniske og organisatoriske sikkerhedsforanstaltninger for at beskytte personoplysninger mod utilsigtet eller ulovlig ødelæggelse, tab, ændring, uautoriseret videregivelse eller adgang. Foranstaltningerne skal opfylde kravene i Anvendelig databeskyttelseslovgivning og sikre et passende sikkerhedsniveau i forhold til risikoen.</p>
            <p><strong>5.2.</strong> En beskrivelse af de væsentligste tekniske og organisatoriske sikkerhedsforanstaltninger er angivet i Bilag C til denne DPA. SkoleMate kan løbende opdatere og forbedre disse foranstaltninger, forudsat at sikkerhedsniveauet ikke reduceres.</p>
            <p><strong>5.3.</strong> SkoleMate skal regelmæssigt teste, vurdere og evaluere effektiviteten af de tekniske og organisatoriske foranstaltninger.</p>
            <p><strong>5.4.</strong> Kunden har gjort sig bekendt med de beskrevne foranstaltninger og er ansvarlig for at vurdere, om disse samlet set giver et sikkerhedsniveau, der er passende i forhold til de risici, der er forbundet med kundens brug af Tjenesterne.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">6. Fortrolighed</h2>
            <p><strong>6.1.</strong> SkoleMate skal sikre, at alle personer, der behandler personoplysninger på SkoleMates vegne, er underlagt passende fortrolighedsforpligtelser – enten i kraft af lov eller kontrakt.</p>
            <p><strong>6.2.</strong> SkoleMate må kun give adgang til personoplysninger til medarbejdere og andre, for hvem det er nødvendigt (need‑to‑know) for at kunne levere Tjenesterne. Adgangsrettigheder skal løbende gennemgås og justeres eller fjernes, når de ikke længere er nødvendige.</p>
            <p><strong>6.3.</strong> Efter anmodning fra Kunden skal SkoleMate kunne dokumentere, at de personer, der har adgang til personoplysninger, er underlagt fortrolighed.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">7. Underdatabehandlere</h2>
            <p><strong>7.1.</strong> Kunden giver SkoleMate en generel godkendelse til at anvende underdatabehandlere til behandling af personoplysninger på Kundens vegne.</p>
            <p><strong>7.2.</strong> De aktuelt godkendte underdatabehandlere fremgår af <strong>Bilag B</strong>. (Bemærk: Dette bilag er baseret på et standardeksempel og skal tilpasses SkoleMates faktiske leverandører, inden dokumentet anvendes i praksis.)</p>
            <p><strong>7.3.</strong> SkoleMate skal indgå skriftlige databehandleraftaler med alle underdatabehandlere, som pålægger dem væsentligt de samme databeskyttelsesforpligtelser, som følger af denne DPA.</p>
            <p><strong>7.4.</strong> SkoleMate er ansvarlig over for Kunden for underdatabehandleres handlinger og undladelser i samme omfang, som hvis SkoleMate selv havde foretaget behandlingen.</p>
            <p><strong>7.5.</strong> Ved planlagte ændringer i brugen af underdatabehandlere skal SkoleMate give Kunden forudgående besked og give Kunden mulighed for at gøre saglige indsigelser. Parterne skal i givet fald søge at finde en rimelig løsning; hvis dette ikke er muligt, kan Kunden opsige Aftalen i overensstemmelse med de nærmere vilkår i hovedaftalen.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">8. Overførsel til tredjelande</h2>
            <p><strong>8.1.</strong> Personoplysninger må som udgangspunkt kun overføres til lande uden for EU/EØS ("tredjelande"), hvis der foreligger et gyldigt overførselsgrundlag i henhold til Anvendelig databeskyttelseslovgivning (f.eks. EU-Kommissionens standardkontraktbestemmelser eller en gyldig adequacy‑afgørelse).</p>
            <p><strong>8.2.</strong> Hvis SkoleMate eller en underdatabehandler foretager tredjelandsoverførsler, skal SkoleMate sikre, at der er implementeret passende overførselsmekanismer og eventuelle supplerende foranstaltninger for at beskytte personoplysningerne.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">9. Sletning og tilbagelevering</h2>
            <p><strong>9.1.</strong> Kunden kan til enhver tid slette personoplysninger via funktionaliteten i Tjenesterne.</p>
            <p><strong>9.2.</strong> Hvis Kunden ikke selv kan slette eller rette personoplysninger, skal SkoleMate efter instruks fra Kunden og i det omfang lovgivningen tillader det, bistå med sletning eller rettelse.</p>
            <p><strong>9.3.</strong> Senest 60 dage efter ophør af Aftalen skal SkoleMate, efter Kundens valg, enten slette eller tilbagelevere alle personoplysninger, medmindre SkoleMate er retligt forpligtet til at opbevare dem længere. Når data er slettet, kan de ikke genskabes.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">10. Registreredes rettigheder</h2>
            <p><strong>10.1.</strong> Hvis en registreret (f.eks. forælder, elev eller medarbejder) henvender sig direkte til SkoleMate med anmodning om indsigt, berigtigelse, sletning, begrænsning, dataportabilitet, indsigelse m.v. vedrørende personoplysninger, som SkoleMate behandler på vegne af Kunden, og SkoleMate kan identificere, at anmodningen vedrører Kunden, skal SkoleMate så vidt muligt henvise den registrerede til at kontakte Kunden direkte.</p>
            <p><strong>10.2.</strong> SkoleMate skal – i det omfang Kunden ikke selv kan opfylde den registreredes rettigheder – bistå Kunden med at besvare og håndtere sådanne anmodninger i det omfang, det er rimeligt og proportionalt.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">11. Brud på persondatasikkerheden (Databrud)</h2>
            <p><strong>11.1.</strong> SkoleMate skal uden unødigt ophold og senest 48 timer efter, at SkoleMate er blevet bekendt med et Databrud inden for SkoleMates ansvarsområde, underrette Kunden herom.</p>
            <p><strong>11.2.</strong> Underretningen skal så vidt muligt indeholde alle relevante oplysninger, som Kunden har brug for til at kunne opfylde sine forpligtelser efter Anvendelig databeskyttelseslovgivning, herunder bl.a.:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>en beskrivelse af Databruddets karakter, herunder kategorier og omtrentligt antal berørte registrerede og poster</li>
              <li>en beskrivelse af de sandsynlige konsekvenser af Databruddet</li>
              <li>en beskrivelse af de foranstaltninger, der er truffet eller foreslået for at håndtere Databruddet og begrænse dets mulige skadevirkninger.</li>
            </ul>
            <p><strong>11.3.</strong> SkoleMate skal bistå Kunden med at opfylde Kundens pligt til at anmelde Databrud til tilsynsmyndigheder og eventuelt informere de registrerede, i det omfang Kunden ikke selv kan gøre dette uden SkoleMates bistand.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">12. Tilsyn, audits og inspektioner</h2>
            <p><strong>12.1.</strong> SkoleMate kan årligt lade sin informationssikkerhed revidere af en uafhængig ekstern part eller på tilsvarende måde dokumentere overholdelse af denne DPA og de sikkerhedsforanstaltninger, som er beskrevet.</p>
            <p><strong>12.2.</strong> På Kundens skriftlige anmodning skal SkoleMate stille relevant dokumentation til rådighed for, at SkoleMate overholder sine forpligtelser efter denne DPA, f.eks. i form af erklæringer, rapporter eller beskrivelser af sikkerhedsforanstaltninger.</p>
            <p><strong>12.3.</strong> Hvis Kunden efter gennemgang af dokumentationen har en rimelig begrundet formodning om, at der er behov for yderligere kontrol, kan Kunden – eller en tredjepartsrevisor udpeget af Kunden og godkendt af SkoleMate – efter forudgående aftale og inden for normal arbejdstid gennemføre en audit på SkoleMates lokationer i det omfang, det er nødvendigt og proportionelt. Parterne aftaler nærmere praktiske forhold, herunder fortrolighed.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">13. Logning</h2>
            <p><strong>13.1.</strong> SkoleMate kan føre log over adgang til og aktiviteter i systemet (logfiler) i et passende tidsrum for at kunne opfylde sikkerheds- og dokumentationskrav, jf. nærmere i Bilag C.</p>
            <p><strong>13.2.</strong> Adgang til logdata er begrænset til relevante formål, f.eks. sikkerhed, fejlfinding og dokumentation.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">14. Ansvar og begrænsning af ansvar</h2>
            <p><strong>14.1.</strong> SkoleMate er ansvarlig for tab, omkostninger og udgifter, som Kunden lider som følge af, at SkoleMate ikke overholder sine forpligtelser efter denne DPA eller Anvendelig databeskyttelseslovgivning, i det omfang det fremgår af Aftalen.</p>
            <p><strong>14.2.</strong> Parternes samlede ansvar i relation til denne DPA er underlagt samme ansvarsbegrænsninger og undtagelser, som fremgår af Aftalen, medmindre andet udtrykkeligt er aftalt.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">15. Varighed</h2>
            <p><strong>15.1.</strong> Denne DPA gælder, så længe SkoleMate behandler personoplysninger på vegne af Kunden i forbindelse med Aftalen, og indtil alle personoplysninger er slettet eller tilbageleveret i overensstemmelse med denne DPA.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">16. Meddelelser og kontaktpersoner</h2>
            <p><strong>16.1.</strong> Hver Part skal udpege en kontaktperson for forhold vedrørende databeskyttelse.</p>
            <p><strong>16.2.</strong> Kunden skal informere SkoleMate om den relevante kontaktperson ("Kundens kontaktperson"), som SkoleMate kan henvende sig til i forbindelse med Databrud, registreredes anmodninger, ændringer i underdatabehandlere m.v.</p>
            <p><strong>16.3.</strong> SkoleMates generelle kontaktpunkt for spørgsmål om databeskyttelse kan fastlægges i Aftalen eller i SkoleMates privatlivspolitik.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">17. Lovvalg og værneting</h2>
            <p><strong>17.1.</strong> Bestemmelserne om lovvalg og værneting i Aftalen gælder også for denne DPA.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">18. Bilag</h2>
            <p>Følgende bilag er en del af denne DPA:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Bilag A:</strong> Beskrivelse af behandlingens karakter, formål, typer af personoplysninger og kategorier af registrerede (tilpasses Kunden og SkoleMates løsning).</li>
              <li><strong>Bilag B:</strong> Liste over underdatabehandlere (skal opdateres med SkoleMates faktiske leverandører).</li>
              <li><strong>Bilag C:</strong> Tekniske og organisatoriske sikkerhedsforanstaltninger.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Databehandleraftale;