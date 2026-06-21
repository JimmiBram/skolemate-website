import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const AIVilkaar = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Supplerende vilkår for SkoleMate AI-funktioner</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/90 space-y-8">
          <section className="space-y-4">
            <p className="text-lg">
              Disse supplerende vilkår ("AI-vilkår") beskriver de særlige betingelser, der gælder for brugen af visse AI-baserede funktioner i SkoleMate-platformen ("AI-produkter").
            </p>
            <p>
              Ved at aktivere eller bruge et AI-produkt accepterer <strong>Skolen</strong> ("Kunden") disse AI-vilkår.
            </p>
            <p>
              AI-vilkårene er en integreret del af SkoleMates <strong>Vilkår og betingelser</strong> mellem SkoleMate ApS ("SkoleMate", "vi", "os") og Skolen ("Kunden").
            </p>
            <p>
              Hvis der er konflikt mellem de generelle vilkår og disse AI-vilkår, har <strong>AI-vilkårene forrang</strong> for så vidt angår brugen af AI-produkterne.
            </p>
            <p>
              Overtrædelse af AI-vilkårene anses som misligholdelse af hovedaftalen.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">1. AI-produkter og tredjeparter</h2>
            <p><strong>1.1.</strong> SkoleMate tilbyder AI-funktioner, der er drevet af:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>tredjeparts <strong>Large Language Models</strong> (LLM) leveret af eksterne AI-udbydere ("Tredjeparts LLM-udbyder"), og/eller</li>
              <li>SkoleMates egne maskinlæringsmodeller.</li>
            </ul>
            <p className="mt-4">Disse funktioner betegnes samlet <strong>"AI-produkter"</strong>.</p>
            <p>SkoleMate kan til enhver tid opdatere listen over AI-produkter (fx tilføje eller fjerne funktioner).</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">2. Databeskyttelse</h2>
            <p><strong>2.1. AI-assistent – MistralAI som underdatabehandler</strong></p>
            <p>Når Skolen eller dens autoriserede brugere (Skole-brugere og Lærere) bruger AI-assistenten:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>fungerer MistralAI som underdatabehandler for de personoplysninger, der indtastes som input til AI-assistenten,</li>
              <li>behandlingen sker i overensstemmelse med SkoleMates databehandleraftale (især bestemmelserne om underdatabehandlere).</li>
            </ul>
            <p className="mt-4">Ved at bruge AI-assistenten godkender Skolen MistralAI som underdatabehandler som beskrevet i databehandleraftalen.</p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
              <p className="font-semibold text-amber-900 mb-2">Vigtigt:</p>
              <p className="text-amber-800">Skolen og dens brugere <strong>må ikke indtaste følsomme personoplysninger</strong> i AI-assistenten, fx om:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2 text-amber-800">
                <li>helbred, diagnoser, handicap</li>
                <li>religiøs overbevisning</li>
                <li>seksuel orientering</li>
                <li>politisk tilhørsforhold</li>
                <li>CPR-numre eller andre særligt beskyttede identifikatorer</li>
              </ul>
            </div>
            <p>Skolen er ansvarlig for at informere Lærere og Skole-brugere om denne begrænsning og for at sikre efterlevelse.</p>
            <p>Personoplysninger sendt til AI-assistenten vil ikke blive behandlet på servere uden for EU. Nærmere vilkår fremgår af SkoleMates databehandleraftale.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">3. Input og output</h2>
            <p><strong>3.1.</strong> Alle tekster, oplysninger og data (inkl. personoplysninger), som Skolen, lærere eller dens brugere indtaster i SkoleMate (<strong>"Input"</strong>), samt de svar og resultater, som SkoleMate genererer på baggrund af Input (<strong>"Output"</strong>), anses som <strong>Kundedata</strong> og er omfattet af de rettigheder og forpligtelser, der følger af Aftalen og databehandleraftalen.</p>
            <p><strong>3.2.</strong> AI-modeller kan generere lignende Output til forskellige kunder. Output genereret for andre skoler eller brugere tilhører ikke Skolen, og Skolen har ingen rettigheder til sådant tredjeparts-output.</p>
            <p><strong>3.3.</strong> Skolen giver SkoleMate, relevante Tredjeparts LLM-udbydere og andre godkendte underdatabehandlere ret til at behandle Input og Output i det omfang, det er nødvendigt for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>at levere SkoleMate-platformen</li>
              <li>at drive, vedligeholde og sikre SkoleMate-platformen.</li>
            </ul>
            <p><strong>3.4.</strong> Hverken SkoleMate eller Tredjeparts LLM-udbydere vil <strong>offentligt dele</strong> Skolens Input eller Output.</p>
            <p><strong>3.5.</strong> Input og Output deles ikke med tredjemand, medmindre det:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>sker til godkendte underdatabehandlere i henhold til databehandleraftalen, eller</li>
              <li>er krævet ved lov.</li>
            </ul>
            <p><strong>3.6.</strong> Tredjeparts LLM-udbydere må <strong>ikke bruge Skolens Input eller Output til at træne, forbedre eller udvikle deres egne modeller til generel brug</strong>, ud over hvad der er nødvendigt for at levere tjenesten til SkoleMate/Skolen i henhold til aftale.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">4. Korrekthed og ansvar for brug</h2>
            <p><strong>4.1.</strong> Kunstig intelligens og maskinlæring er eksperimentelle teknologier. SkoleMate kan generere <strong>forkert, misvisende eller ufuldstændig</strong> information. Output kan fx:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>være faktuelt forkert</li>
              <li>mangle vigtig kontekst</li>
              <li>være dårligt egnet i en pædagogisk eller skolefaglig sammenhæng.</li>
            </ul>
            <p><strong>4.2.</strong> Skolen er <strong>selv ansvarlig</strong> for at gennemgå og vurdere Output, inden det bruges, deles eller lægges til grund for beslutninger. Særligt i forhold til:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>elever</li>
              <li>forældre</li>
              <li>pædagogiske vurderinger</li>
              <li>myndighedskommunikation.</li>
            </ul>
            <p className="mt-4">Der skal altid være et <strong>menneskeligt led</strong> (fx lærer eller Skole-bruger), der godkender indholdet.</p>
            <p><strong>4.3.</strong> SkoleMate giver <strong>ingen garanti</strong> for, at Output er korrekt, fuldstændigt eller egnet til et bestemt formål, og SkoleMate påtager sig intet ansvar for tab, der opstår ved Skolens brug af Output.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">5. Rettigheder til brug og tredjepartspolitikker</h2>
            <p><strong>5.1.</strong> Skolen giver Tredjeparts LLM-udbydere ret til at behandle Input og Output i det omfang, det er nødvendigt for at:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>levere og drifte det konkrete SkoleMate</li>
              <li>overholde lovgivning</li>
              <li>håndhæve deres egne misbrugs- og sikkerhedspolitikker.</li>
            </ul>
            <p className="mt-4">SkoleMate begrænser kontraktuelt, at Skolens data ikke må bruges til generel modeltræning.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">6. Begrænsninger i brugen af SkoleMate</h2>
            <p><strong>6.1.</strong> Ud over de generelle begrænsninger i SkoleMates Vilkår og betingelser, må Skolen (og dens brugere) bl.a. <strong>ikke</strong>:</p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>bruge SkoleMate til at udvikle konkurrerende AI-modeller eller AI-tjenester</li>
              <li>forsøge at reverse-engineere, dekompilere eller på anden måde afsløre modelarkitektur, kildekode eller interne komponenter</li>
              <li>automatisere scraping eller masseudtræk af data fra SkoleMate</li>
              <li>give indtryk af, at AI-genereret Output er skrevet af et menneske, hvis det ikke er tilfældet (fx i eksamensbesvarelser, officielle tekster m.v., medmindre det lovligt og pædagogisk forsvarligt oplyses/rammesættes)</li>
              <li>forsøge at omgå tekniske begrænsninger for antal kald, token-grænser eller adgangsbegrænsninger</li>
              <li>bruge SkoleMate på en måde, der bryder gældende lovgivning (herunder eksamensregler, skoleregler, GDPR m.v.).</li>
            </ul>
            <p><strong>6.2.</strong> Skolen er ansvarlig for, at alle <strong>Skole-brugere og Lærere</strong> overholder disse begrænsninger. Handlinger udført af brugerne anses som handlinger udført af Skolen.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">7. Brugsgrænser og tilgængelighed</h2>
            <p><strong>7.1.</strong> SkoleMate kan fastsætte tekniske brugsgrænser (rate limits), fx:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>maks. antal AI-kald pr. tidsperiode</li>
              <li>maks. længde af Input/Output.</li>
            </ul>
            <p><strong>7.2.</strong> SkoleMate kan midlertidigt begrænse, suspendere eller deaktivere adgang til SkoleMate, hvis:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>brugen truer sikkerheden eller stabiliteten af SkoleMate-platformen</li>
              <li>der er mistanke om misbrug</li>
              <li>tredjepartsudbyderen kræver det (fx ved misbrug eller tekniske problemer).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">8. Feedback</h2>
            <p><strong>8.1.</strong> Skolen og lærere kan give SkoleMate feedback og forslag til forbedringer af SkoleMate. SkoleMate må frit bruge sådan feedback uden særskilt vederlag.</p>
            <p><strong>8.2.</strong> Hvis feedbacken indeholder Input/Output eller personoplysninger, vil SkoleMate kun gemme og bruge dette i et begrænset tidsrum (f.eks. op til 30 dage) og i overensstemmelse med databehandleraftalen og SkoleMates privatlivspolitik.</p>
          </section>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default AIVilkaar;