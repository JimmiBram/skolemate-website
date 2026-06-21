import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cookiepolitik = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Cookiepolitik</h1>
        
        <div className="prose prose-lg max-w-none text-gray-2 space-y-6">
          <p className="text-sm text-gray-2 mb-8">Sidst opdateret: {new Date().toLocaleDateString('da-DK')}</p>
          
          <section>
            <p className="mb-4">
              Skolemate respekterer og værner om dit privatliv. Denne cookiepolitik beskriver, hvad cookies er, hvilke typer cookies vi bruger, hvordan vi bruger dem, hvor længe de fungerer, og hvorfor vi bruger dem. Vi forklarer også, hvordan du kan administrere dine cookieindstillinger.
            </p>
            <p className="mb-4">
              <strong>Skolemate ApS</strong>, Fragevej 58, 4760 Vordingborg, Danmark ("Skolemate", "vi", "os", "vores") er ansvarlig for hjemmesiden <a href="http://www.skolemate.dk" className="text-primary hover:underline">www.skolemate.dk</a> ("Hjemmesiden"), og vi er dataansvarlige for de oplysninger, der indsamles via cookies eller lignende teknologier på Hjemmesiden.
            </p>
            <p className="mb-4">
              For god ordens skyld: Denne cookiepolitik gælder kun for vores Hjemmeside og gælder for dig, når du interagerer med Hjemmesiden.
            </p>
            <p className="mb-4">
              Denne cookiepolitik er en del af vores privatlivspolitik, da brugen af cookies kan indebære behandling af dine personoplysninger. Du kan læse mere om vores behandling af personoplysninger i vores privatlivspolitik.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Samtykke</h2>
            <p className="mb-4">
              Cookies kræver som udgangspunkt dit samtykke, bortset fra nødvendige cookies.
            </p>
            <p className="mb-4">
              Hvis du accepterer cookies på vores Hjemmeside, giver du samtykke til vores brug af cookies som beskrevet under afsnittet "Hvilke typer cookies bruger vi, og hvordan bruger vi dem?" nedenfor.
            </p>
            <p className="mb-4">
              Du kan til enhver tid ændre eller trække dit samtykke tilbage – se afsnittet "Sådan administrerer du dine cookieindstillinger" nedenfor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Hvad er cookies?</h2>
            <p className="mb-4">
              Cookies er små tekstfiler, som hjemmesider gemmer på din enhed, mens du surfer. De behandles og lagres af din webbrowser. Cookies udfører ofte vigtige funktioner for hjemmesider og giver indblik i brugernes onlineadfærd.
            </p>
            <p className="mb-4">Cookies kan f.eks. bruges til:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>at følge din adfærd på en hjemmeside</li>
              <li>at genkende din computer/enhed</li>
              <li>at huske dine indstillinger og præferencer for at tilpasse indholdet</li>
            </ul>
            <p className="mb-4">
              En cookie indeholder kun tekst, den er ikke et program og kan ikke indeholde virus.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Førsteparts- og tredjepartscookies</h2>
            <p className="mb-4">Cookies kan være <strong>førsteparts</strong>- eller <strong>tredjepartscookies</strong>:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Førstepartscookies</strong> sættes af den hjemmeside, du besøger (her: skolemate.dk), og det er kun denne part, der kan læse disse cookies.</li>
              <li><strong>Tredjepartscookies</strong> sættes af andre end ejeren af hjemmesiden. Tredjepartscookies gør det muligt at tilbyde tredjepartsfunktioner på eller via Hjemmesiden (f.eks. annoncering, interaktivt indhold og analyseværktøjer).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Sessionscookies og vedvarende cookies</h2>
            <p className="mb-4">Cookies kan enten være <strong>sessionscookies</strong> eller <strong>vedvarende cookies</strong>:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Sessionscookies</strong> er midlertidige og slettes, når du lukker din browser.</li>
              <li><strong>Vedvarende cookies</strong> bliver liggende på din computer/enhed efter, at du har lukket browseren og udløber enten på det tidspunkt, der er angivet i cookien, eller når du selv sletter dem.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Hvilke typer cookies bruger vi, og hvordan bruger vi dem?</h2>
            <p className="mb-4">
              Vi bruger både førsteparts- og tredjepartscookies til flere formål. Vi anvender:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>nødvendige cookies</li>
              <li>statistik-/analytiske cookies</li>
              <li>præference-/funktionscookies</li>
              <li>marketingcookies</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">Nødvendige cookies</h3>
            <p className="mb-4">
              Nødvendige cookies kaldes nogle gange "strengt nødvendige cookies", da vi uden dem ikke kan levere de grundlæggende funktioner på Hjemmesiden.
            </p>
            <p className="mb-4">
              Vi bruger nødvendige cookies af tekniske grunde, så Hjemmesiden kan fungere korrekt. Du behøver derfor ikke give samtykke til disse cookies, og du kan heller ikke fravælge dem.
            </p>
            <p className="mb-4">Nødvendige cookies bruges f.eks. til:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>at sikre, at du er et menneske og ikke en bot</li>
              <li>at registrere, hvilke cookies du har accepteret, så vi overholder GDPR</li>
              <li>at få chatfunktionen til at fungere og indlæses hurtigt</li>
            </ul>
            <p className="mb-4">
              Kort sagt: De er til for at sikre, at du kan bruge og navigere rundt på Hjemmesiden.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">Statistikcookies</h3>
            <p className="mb-4">
              Statistikcookies kaldes også "performancookies". Disse cookies indsamler oplysninger om dine besøg på Hjemmesiden for at hjælpe os med at forstå, hvordan den bruges, så vi kan forbedre funktioner og rapportere på vores performance.
            </p>
            <p className="mb-4">De kan f.eks. bruges til:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>at analysere brugeradfærd for at kunne vise mere relevant indhold</li>
              <li>at se hvilken side du kom fra, hvor mange gange du har besøgt Hjemmesiden, og hvor længe du bliver</li>
              <li>at teste nye sider, annoncer eller funktioner og se, hvordan brugere reagerer på dem</li>
            </ul>
            <p className="mb-4">
              Vi bruger kun statistiske/analytiske cookies, hvis du har givet dit samtykke.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">Præferencecookies</h3>
            <p className="mb-4">
              Præferencecookies kaldes også "funktionscookies". De bruges til at forbedre funktionalitet og brugeroplevelse på Hjemmesiden, men er ikke strengt nødvendige.
            </p>
            <p className="mb-4">
              Uden disse cookies kan visse funktioner være begrænsede eller ikke fungere optimalt.
            </p>
            <p className="mb-4">
              Et eksempel: Vi kan bruge præferencecookies til at huske, hvilket sprog du foretrækker på Hjemmesiden.
            </p>
            <p className="mb-4">
              Vi bruger kun præferencecookies, hvis du har givet dit samtykke.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">Marketingcookies</h3>
            <p className="mb-4">
              Marketingcookies bruges til at finde ud af, hvilket indhold og hvilke annoncer der er mest relevante for dig og dine interesser.
            </p>
            <p className="mb-4">
              Et eksempel: En marketingcookie kan gøre det muligt for sociale medier at registrere, at du har besøgt Skolemate. Efter et besøg på skolemate.dk kan du derfor opleve at se annoncer fra os på dine sociale medieprofiler.
            </p>
            <p className="mb-4">
              Vi bruger kun marketingcookies, hvis du har givet dit samtykke.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Oversigt over cookies, vi bruger på Hjemmesiden</h2>
            <p className="mb-4">
              Du kan finde en fuldstændig liste over de cookies, vi bruger, ved at åbne "Cookieerklæring" i cookie-banneret.
            </p>
            <p className="mb-4">Her kan du se:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>hvilke tredjeparter vi bruger</li>
              <li>hvad de gør med oplysningerne</li>
              <li>om det er første- eller tredjepartscookies</li>
              <li>hvor længe den enkelte cookie lagres (levetid)</li>
            </ul>
            <p className="mb-4">
              Nedenfor kan du finde mere information om nogle af de tredjepartsleverandører, vi benytter:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Google Analytics 4 (Google Ireland Limited)</strong> bruges til at analysere brugen af Hjemmesiden (ikke en eventuel Skolemate-platform, der tilbydes til kunder) og indsamler din geolokation (afledt af IP-adresse), trackingdata og brugsinformation via cookies, hvis du giver samtykke. Vi anvender kun Google Analytics 4 og IP-adressen afkortes, før data logges i noget datacenter eller på en server. Google kan selv være dataansvarlig for visse oplysninger, der indsamles fra din enhed. Data lagres først i EU og kan derefter overføres til USA til Googles analysetjenester. Se Googles privatlivspolitik.</li>
              <li><strong>HubSpot-cookies</strong> bruges til statistik over brugen af Hjemmesiden. Se HubSpots privatlivspolitik.</li>
              <li><strong>Facebook (Meta)-cookies</strong> bruges i forbindelse med annoncering. Se Metas/Facebooks privatlivspolitik.</li>
            </ul>
            <p className="mb-4">
              Hvis du har accepteret cookies, kan du altid efterfølgende framelde dig/opt-out. Se vejledningen i afsnittet "Sådan administrerer du dine cookieindstillinger" nedenfor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Lignende teknologier til at genkende og spore besøgende</h2>
            <p className="mb-4">
              Cookies er ikke den eneste måde at genkende eller spore besøgende på en hjemmeside. Vi kan fra tid til anden også bruge lignende teknologier som f.eks. "tracking pixels" eller "clear gifs". Det er små grafiske filer med en unik identifikator, som f.eks. kan gøre det muligt for os at genkende, at du besøger Hjemmesiden, og at følge din adfærd til markedsføringsformål.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Sådan administrerer du dine cookieindstillinger</h2>
            <p className="mb-4">
              Du kan altid ændre mening og sige nej til alle cookies, der ikke er strengt nødvendige.
            </p>
            <p className="mb-4">
              Du kan administrere dine cookiepræferencer i cookie-banneret – ved at klikke på det relevante link/ikon på Hjemmesiden.
            </p>
            <p className="mb-4">Der kan du:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>vælge, hvilke kategorier af cookies du accepterer</li>
              <li>eller fravælge bestemte kategorier</li>
            </ul>
            <p className="mb-4">
              Hvis du fravælger cookies (undtagen nødvendige cookies), kan du fortsat bruge Hjemmesiden, men visse funktioner og områder kan være begrænsede, og Hjemmesiden vil muligvis ikke fungere optimalt.
            </p>
            <p className="mb-4">
              Du kan også ændre indstillingerne direkte i din browser, så den afviser cookies. De fleste browsere er som standard indstillet til at acceptere cookies, men du kan ændre det, så:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>alle cookies afvises, eller</li>
              <li>du får en besked, hver gang en hjemmeside forsøger at sætte eller opdatere en cookie</li>
            </ul>
            <p className="mb-4">
              Hvis din browser automatisk afviser alle cookies, kan visse funktioner og tjenester blive utilgængelige, da de er afhængige af, at Hjemmesiden kan huske dine valg.
            </p>
            <p className="mb-4">
              Bemærk: Du skal ændre indstillingerne i <strong>hver browser</strong> og på <strong>hver enhed</strong>, du bruger.
            </p>
            <p className="mb-4">
              Du kan også nemt slette cookies, du tidligere har accepteret, i din browser. Husk, at hvis du bruger flere browsere, skal du slette cookies i dem alle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Ændringer i denne cookiepolitik</h2>
            <p className="mb-4">
              Vi kan opdatere denne cookiepolitik fra tid til anden – f.eks. hvis vi ændrer de cookies, vi bruger, eller hvis der sker ændringer i vores drift, i lovgivningen eller i myndighedskrav.
            </p>
            <p className="mb-4">
              Det er en god idé jævnligt at genbesøge denne side for at holde dig opdateret. For at gøre det nemmere angiver vi altid datoen for seneste opdatering øverst på siden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Kontakt</h2>
            <p className="mb-4">
              Hvis du har spørgsmål til denne cookiepolitik, er du velkommen til at kontakte os: <a href="mailto:privacy@skolemate.dk" className="text-primary hover:underline">privacy@skolemate.dk</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookiepolitik;
