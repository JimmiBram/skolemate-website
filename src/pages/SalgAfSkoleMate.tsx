import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Figure = ({ src, caption }: { src: string; caption?: string }) => (
  <figure className="my-8">
    <img
      src={src}
      alt={caption || "Skærmbillede af SkoleMate"}
      loading="lazy"
      className="w-full rounded-xl border border-border shadow-md"
    />
    {caption && (
      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
        {caption}
      </figcaption>
    )}
  </figure>
);

const SalgAfSkoleMate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Salg af SkoleMate
        </h1>
        <p className="text-lg text-foreground/80 mb-8">
          Fuld AI chat løsning med administration, værktøjer, canvas chat,
          dokument håndtering m.v.
        </p>

        {/* Key facts callout */}
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 mb-10">
          <p className="text-sm text-muted-foreground mb-3">
            CVR: 45469948 (Virksomheden hedder AiKlar, men vi har kun eet
            produkt, så AiKlar = SkoleMate)
          </p>
          <p className="text-xl font-semibold text-foreground mb-2">
            Udbudspris: DKK 150.000,-
          </p>
          <p className="text-foreground">
            Kontakt:{" "}
            <a href="mailto:sl@aiklar.dk" className="text-primary underline">
              sl@aiklar.dk
            </a>{" "}
            eller{" "}
            <a href="mailto:jb@aiklar.dk" className="text-primary underline">
              jb@aiklar.dk
            </a>
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
          <Figure src="/salg/skaermbillede-1.png" caption="SkoleMate's Website" />

          <p>
            SkoleMate er en moderne AI-platform udviklet specifikt til skoler,
            med fokus på at styrke elevers læring og selvstændige tænkning.
            Løsningen kombinerer avanceret AI med en målrettet pædagogisk
            tilgang og kan tilpasses den enkelte institutions behov.
          </p>
          <p>
            Platformen er allerede teknisk gennemarbejdet med en skalerbar
            arkitektur, egenudviklet chatbot og mulighed for integration af
            skolens egne data. Det giver en stærk position i et marked med
            stigende efterspørgsel på sikre og relevante AI-løsninger til
            undervisning.
          </p>
          <p>
            For en køber repræsenterer SkoleMate en mulighed for hurtigt at
            træde ind i et voksende marked med et færdigt produkt, klare
            anvendelsesmuligheder og et tydeligt værdiforslag over for både
            skoler og uddannelsesinstitutioner.
          </p>
          <p>
            Kort sagt: Et solidt fundament, et aktuelt behov i markedet og et
            produkt med potentiale til at skalere.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground pt-6">
            Teamet Bag SkoleMate (og AiKlar)
          </h2>
          <Figure src="/salg/skaermbillede-2.png" />
          <p>
            AiKlar udvikler og sælger løsningen SkoleMate, det er hele
            virksomheden der sælges, eller bare produktet og kildekoden, op til
            dig. Kernen er en digital assistent, der hjælper elever med at
            forstå fagligt indhold, finde relevant information og arbejde mere
            selvstændigt i deres læring. Derudover tilbydes tilpasning af
            løsningen til den enkelte skole samt kurser og introduktion til
            brugen af AI i undervisningen.
          </p>
          <p>
            Produktet vil relativt let kunne kodes om til andre brancher. Der er
            chat, canvas chat, avanceret administration, brugerstyring, betaling
            og meget meget mere.
          </p>
          <p>
            SkoleMate dækker et stigende behov for at integrere AI i
            undervisningen på en måde, der er sikker, relevant og pædagogisk
            funderet. Skoler efterspørger løsninger, der både kan støtte
            eleverne fagligt og samtidig give lærere et værktøj, der er tilpasset
            deres hverdag – uden at gå på kompromis med datasikkerhed eller
            kvalitet.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-foreground pt-4">
            Til lærere (Intelligent sparringspartner)
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Forberedelses-assistent:</strong> Hjælper med at udvikle
              undervisningsmaterialer, opgaver og hele forløb fra bunden.
            </li>
            <li>
              <strong>Canvas-editor:</strong> Et dynamisk arbejdsrum, hvor man
              kan sparre med AI'en og redigere indhold direkte i samme visning.
            </li>
            <li>
              <strong>Differentiering:</strong> Forslag til hvordan eksisterende
              indhold kan tilpasses forskellige elevniveauer og behov.
            </li>
            <li>
              <strong>Faglig sparring:</strong> AI'en er trænet i specifikke fag
              (dansk, matematik, fysik m.fl.) og kender til danske læreplaner.
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold text-foreground pt-4">
            Til elever (Den digitale sidemakker)
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Vejledning uden facit:</strong> Fungerer som en
              hjælpelærer, der guider eleven videre i processen i stedet for blot
              at give det færdige svar.
            </li>
            <li>
              <strong>Niveau-tilpasning:</strong> Platformen ved automatisk, om
              brugeren er lærer eller elev, og tilpasser toneleje og værktøjer
              derefter.
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold text-foreground pt-4">
            Sikkerhed og teknik
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Datasikkerhed (GDPR):</strong> Dansk hosting og EU-baseret
              infrastruktur (MistralAI via EU-servere), så persondata er
              beskyttet efter danske standarder.
            </li>
            <li>
              <strong>Uni-Login:</strong> Nem adgang for både elever og lærere
              via skolens eksisterende login-system.
            </li>
            <li>
              <strong>Ingen "hallucinationer":</strong> Systemet er designet til
              at indsamle viden i en specifik kontekst fremfor blot at "finde på"
              fakta.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground pt-6">
            Advanced Admin Interface (Super-Admin / Udvikler)
          </h2>
          <p>
            Dette modul er designet til platformens bagmænd eller tekniske
            administratorer, der skal styre systemets kerne uden at skrive kode.
          </p>
          <p>
            <strong>No-Code AI Builder:</strong> Visuelt interface til at bygge
            nye specialiserede AI-værktøjer (f.eks. en "Historie-bot" eller
            "Formel-coach") ved blot at definere prompts og adfærd. Blok
            opbygning af prompts gør det til en let opgave at udvide og tilpasse
            platformen.
          </p>
          <Figure
            src="/salg/skaermbillede-3.png"
            caption="SkoleMate har et egenudviklet brugervenligt system til redigering af prompts med genbrugelige elementer (Prompt Blocks) og variabler."
          />
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Skole &amp; Organisationsstyring:</strong> Central styring
              af licenser, oprettelse af nye skoler/kommuner og overblik over
              forbrugsdata.
            </li>
            <li>
              <strong>Support &amp; Brugerhjælp:</strong> Indbygget ticket-system
              eller "impersonation"-værktøj, så administratorer kan hjælpe
              brugere direkte i deres kontekst.
            </li>
            <li>
              <strong>Model konfiguration:</strong> Mulighed for at skifte mellem
              forskellige AI-modeller (f.eks. forskellige versioner af Mistral
              eller GPT) for at optimere præstation vs. omkostning.
            </li>
            <li>
              <strong>Interface konfiguration:</strong> Mulighed for at ændre på
              menuer, hvordan AI værktøjer opfører sig, meddelser m.v.
            </li>
            <li>
              <strong>Betalinger og abonnementer (Via Stripe):</strong>{" "}
              Abonnementer og betaling kan administreres let.
            </li>
            <li>
              <strong>ChatBot Test Konsol:</strong> Så man kan se effekten når
              man arbejder med prompts og guardrails for AI'en.
            </li>
          </ul>
          <Figure src="/salg/skaermbillede-4.png" caption="ChatBot Test Konsol" />

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground pt-6">
            Skole-Admin Interface (Lokalt for skolen)
          </h2>
          <p>
            Dette modul giver den enkelte skole eller uddannelsesinstitution
            autonomi over deres egen instans af SkoleMate.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Privat Vidensbase (RAG Indeksering):</strong> Upload af
              skolens egne dokumenter, ordensregler, lokale læreplaner eller
              specifikt undervisningsmateriale, som skolens AI eksklusivt skal
              trække på.
            </li>
            <li>
              <strong>Brugeradministration:</strong> Overblik over skolens
              brugere (elever/lærere), tildeling af rettigheder og styring af
              adgang via Uni-Login grupper.
            </li>
            <li>
              <strong>Kalender-integration:</strong> Synkronisering med skolens
              skemaer (f.eks. via Lectio eller Aula), så AI'en kender elevernes
              aktuelle moduler og deadlines.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground pt-6">
            Status og baggrund
          </h2>
          <p>
            Vi har tre skoler på i pilot og 130 brugere, deraf en hel del
            dagligt aktive. Vi har ikke betalende kunder, og ikke evnerne til
            reelt at penetrere markedet, da vi som Lærer (Søren) og IT
            udvikler/Arkitekt (Jimmi) ikke har evnet det.
          </p>
          <p>
            Vi ønsker derofor at sælge platformen til nogen der kan tage den
            videre.
          </p>
          <p>
            Meget få driftsomkostninger, pt er UniLogin licensen på 9000,- om
            året den klart største post. Unilogin kan fjernes hvis den ikke
            ønskes, eller platformen skal skrives om til andre brancher.
          </p>
          <p>
            Vi drifter SkoleMate på Hetzner som er en billig tysk udlejer af
            servere.
          </p>
          <p>
            Vi har markedsført primært via Google AdWords, Facebook og mund til
            mund. Alle kampagner har ført til ganske fin tilførsel af kunder og
            opmærksomhed, men betalingerne sidder ikke løst efterfølgende, dog
            bliver flere brugere på den gratis Tier.
          </p>
          <p>
            Virksomheden AiKlar stiftes slut 2025 af Søren Larsen (Underviser)
            og Jimmi Bram (IT) med formålet at lave en AI platform til skoler der
            kender skolen (Via skolens dokumenter i vektor database) og derved
            kan hjælpe nye elever med spørgsmål om skolen, events m.v. og som har
            en didaktisk tilgang der gør den anvendelig i skoleøjemed, den kommer
            aldrig med svaret, men hjælper eleven med selv at knuse problemet.
          </p>
          <p>
            På lærerfronten ønskede vi (og udviklede det) at hjælpe underviserne
            til at lave endnu bedre skole på den samme tid. Vi har
            lektionsplanlægning, materiale udvikling m.v.
          </p>
          <p>
            Vi er begge deltid på projektet gennem hele forløbet, og har brugt
            et års tid på ren udvikling og features.
          </p>
          <p>
            Vi må indse at vi ikke formår at penetrere markedet, vi har mange
            rigtig positive samtaler, og en masse entuisiasme fra lærer,
            skoleledere m.fl, men får ikke lukket aftalerne helt frem til
            betaling.
          </p>
          <p>
            Nu er vi kørt lidt døde i projektet. Teknologien er der, der er ingen
            tvivl om at behovet er der. Endda lovgivningen siger at underviserer
            og skoler skal forholde sig til AI. Men lige nu er det et nyt marked,
            og der er altså bare et stykke fra ord til handling har vi oplevet.
          </p>
          <p>
            Vi overvejede at omskrive til generel AI platform, som var det der
            arkitektonisk var tanken fra starten, derfor hedder vi AiKlar ApS,
            men nu er der andre projekter der vil have opmærksomhed, så det kunne
            være fantastisk hvis vi kunne finde nogen der med fornyet energi kan
            tage SkoleMate videre.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground pt-6">
            Marked og konkurrence
          </h2>
          <p>
            Konkurrencebilledet består dels af generelle AI-platforme som OpenAI
            og Google, som tilbyder brede løsninger, og dels af mere
            specialiserede edtech-virksomheder med fokus på læring. Forskellen
            er, at SkoleMate er målrettet skoler med en pædagogisk og kontrolleret
            tilgang, fremfor generelle AI-værktøjer.
          </p>
          <p>
            Købekraften ligger primært hos offentlige og private skoler,
            kommuner samt uddannelsesinstitutioner. Disse aktører har typisk
            faste budgetter til digitale løsninger og undervisningsværktøjer, og
            der ses en stigende prioritering af teknologi, der kan understøtte
            læring og effektivisere undervisningen.
          </p>
          <p>
            Markedet for edtech og AI i uddannelse er globalt meget stort og i
            kraftig vækst. Edtech-markedet estimeres til flere hundrede
            milliarder dollars årligt globalt, og AI-delen er en af de hurtigst
            voksende segmenter. Væksten drives af øget digitalisering, politisk
            fokus på teknologi i skolerne og et stigende behov for
            individualiseret læring. Samlet set er der tale om et ekspanderende
            marked med gode muligheder for skalering.
          </p>
          <p>
            Skoler har ikke i dag en AI platform, det er derfor ret nyt, og der
            er ikke umiddelbart noget den erstatter. Den vil kunne give langt
            mere tid til undervisere og på sigt administrationen, og den vil give
            eleverne en solid indføring i hvordan AI kan hjælpe dem, men det er
            nyt. Så enten skal det vinkles anderledes, eller også skal man ud og
            lave noget solidt salgsarbejde, som helt sikker kan blive en stor
            success.
          </p>
          <p>
            IT og features, vi har været rigtig gode til at køre brugertest, og
            fange essensen af hvordan en dansk AI platform skal udvikles til
            skoler.
          </p>
          <p>
            Vores strategi har været for produkt fokuseret. Vi har brugt meget
            tid på brugerfeedback og at udvikle hvad vi mener er den bedste
            platform man kan købe til hele skolen.
          </p>
          <p>Strategisk skulle vi måske have solgt ind tidligere og med mindre.</p>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground pt-6">
            Visionen og den ideelle køber
          </h2>
          <p>
            Visionen var at levere den bedste AI drevne platform til hele skolen.
            Der understøtter lærene, eleverne, administration, pedellerne m.fl.
            Hvor hele skolen bliver bundet sammen af AI. Hvor skoleleder kan
            sætte rammer om undervisningsformen, lærene kan få deres ideer til at
            leve hurtigere og bedre, eleverne kan få individualiseret
            undervisning og hjælp uden bare at få løsningen.
          </p>
          <p>
            Den ideelle køber vil være en spiller i EdTech der har reach og viden
            om hvordan man går i markedet med en ny og innovativ platform. Og som
            kan videreudvikle og integrere platformen.
          </p>
          <p>
            Det kunne sagtens være en spiller som allerede er på markedet i
            software.
          </p>
          <p>
            Alternativt kunne det være en køber som kan se mulighederne i platform
            i andre sammenhænge. Det er en solid og velfunderet teknisk platform
            som sagtens ville kunne tjene som virksomheders custom AI platform til
            medarbejdere i alle eller specifikke funktioner.
          </p>
          <p>
            Vi er fleksible, vi vil gerne se platformen leve videre og blive en
            stor success. Vi bliver ikke i virksomheden, men kan købes ind efter
            aftalte.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground pt-6">
            Flere Billeder
          </h2>
          <Figure src="/salg/skaermbillede-5.png" />
          <Figure src="/salg/skaermbillede-6.png" />
          <Figure src="/salg/skaermbillede-7.png" />
          <Figure src="/salg/skaermbillede-8.png" />
          <Figure src="/salg/skaermbillede-9.png" />
          <Figure src="/salg/skaermbillede-10.png" caption="AI Chat drevne værktøjer" />
          <Figure
            src="/salg/skaermbillede-11.png"
            caption="Manuel og AI redigering af brugerens dokumenter"
          />
          <Figure
            src="/salg/skaermbillede-12.png"
            caption="Administrations interface til Skoler"
          />
        </div>

        {/* Closing contact */}
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 mt-12 text-center">
          <p className="text-lg font-semibold text-foreground mb-2">
            Interesseret i at høre mere?
          </p>
          <p className="text-foreground">
            Kontakt os på{" "}
            <a href="mailto:sl@aiklar.dk" className="text-primary underline">
              sl@aiklar.dk
            </a>{" "}
            eller{" "}
            <a href="mailto:jb@aiklar.dk" className="text-primary underline">
              jb@aiklar.dk
            </a>
          </p>
          <p className="text-foreground mt-2">Udbudspris: DKK 150.000,-</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SalgAfSkoleMate;
