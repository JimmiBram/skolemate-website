import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datasikkerhed = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Datasikkerhed</h1>
        
        <div className="prose prose-lg max-w-none text-gray-2 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Vores forpligtelse til datasikkerhed</h2>
            <p>
              Hos SkoleMate tager vi datasikkerhed meget alvorligt. Vi implementerer passende tekniske og organisatoriske 
              sikkerhedsforanstaltninger for at beskytte dine personoplysninger mod uautoriseret adgang, tab eller misbrug.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Hosting og databehandling</h2>
            <p>
              SkoleMate er et dansk selskab, og alle data hostes på EU-baserede servere i overensstemmelse med GDPR-lovgivningen. 
              Dette sikrer, at dine data behandles i henhold til de højeste europæiske standarder for databeskyttelse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Sikkerhedsforanstaltninger</h2>
            <p>
              Vi anvender følgende sikkerhedsforanstaltninger:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kryptering af data under transmission (SSL/TLS)</li>
              <li>Kryptering af følsomme data i hvile</li>
              <li>Regelmæssige sikkerhedsopdateringer</li>
              <li>Adgangskontrol og autentificering</li>
              <li>Løbende sikkerhedsovervågning</li>
              <li>Backup-procedurer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. GDPR-compliance</h2>
            <p>
              SkoleMate er fuldt GDPR-compliant. Vi:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Behandler kun data, der er nødvendige for at levere vores service</li>
              <li>Opbevarer ikke data længere end nødvendigt</li>
              <li>Giver brugere fuld kontrol over deres data</li>
              <li>Har databehandleraftaler med alle underleverandører</li>
              <li>Fører register over behandlingsaktiviteter</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Dataportabilitet</h2>
            <p>
              Du har ret til at få udleveret dine data i et struktureret og maskinlæsbart format. 
              Kontakt os, hvis du ønsker at benytte denne ret.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Sikkerhedsbrud</h2>
            <p>
              I tilfælde af et sikkerhedsbrud, der kompromitterer dine personoplysninger, vil vi straks underrette de relevante 
              myndigheder og berørte brugere i overensstemmelse med GDPR-kravene.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Tredjeparts services</h2>
            <p>
              Vi bruger kun tredjeparter, der opfylder GDPR-kravene og har implementeret passende sikkerhedsforanstaltninger. 
              Alle databehandleraftaler sikrer, at dine data beskyttes på samme niveau som hos os.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Kontakt vedrørende datasikkerhed</h2>
            <p>
              Hvis du har spørgsmål eller bekymringer omkring datasikkerhed, er du velkommen til at kontakte os. 
              Vi tager alle henvendelser alvorligt og svarer hurtigst muligt.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datasikkerhed;
