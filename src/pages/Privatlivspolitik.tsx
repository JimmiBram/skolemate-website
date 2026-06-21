import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privatlivspolitik = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Privatlivspolitik</h1>
        
        <div className="prose prose-lg max-w-none text-gray-2 space-y-6">
          <p className="text-sm text-gray-2 mb-8">Sidst opdateret: {new Date().toLocaleDateString('da-DK')}</p>
          
          <section>
            <p className="mb-4">
              SkoleMate ApS respekterer og værner om dit privatliv.
            </p>
            <p className="mb-4">
              Denne privatlivspolitik ("Politikken") beskriver, hvilke oplysninger vi indsamler om dig, og hvordan vi anvender, behandler, videregiver og beskytter disse oplysninger. Vi forklarer også dine rettigheder efter databeskyttelseslovgivningen.
            </p>
            <p className="mb-4">
              <strong>SkoleMate ApS</strong>, Fragevej 58, 4760 Vordingborg, Danmark ("SkoleMate", "vi", "os", "vores") er dataansvarlig for den behandling af personoplysninger, der er omfattet af denne Politik.
            </p>
            <p className="mb-4">
              Vi driver websitet <a href="http://www.skolemate.dk" className="text-primary hover:underline">www.skolemate.dk</a> ("Websitet") og leverer <strong>SkoleMate-platformen</strong>, dvs. vores digitale skoleplatform og tilknyttede produkter, applikationer og tjenester ("SkoleMate-tjenesterne").
            </p>
            <p className="mb-4">
              I denne Politik er vi dataansvarlig for den persondata, vi selv beslutter formål og midler for (fx website, markedsføring, login mv.). Vi sørger for, at dine personoplysninger behandles i overensstemmelse med:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>GDPR</strong> (EU's databeskyttelsesforordning)</li>
              <li><strong>Databeskyttelsesloven</strong> (Danmark)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Hvem denne politik gælder for</h2>
            <p className="mb-4">
              Denne privatlivspolitik gælder for dig, hvis du på en eller flere af følgende måder har kontakt med SkoleMate:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>du besøger vores website <a href="http://www.skolemate.dk" className="text-primary hover:underline">www.skolemate.dk</a></li>
              <li>du deltager i vores events/webinarer eller undersøgelser</li>
              <li>du modtager markedsførings- eller servicekommunikation fra os</li>
              <li>du er markedsførings- eller salgsemne (B2B-kontakt, fx på en skole)</li>
              <li>du tilmelder dig og/eller deltager i demo-møder</li>
              <li>du har indgået en aftale med os (på vegne af en skole)</li>
              <li>du giver os feedback eller er i dialog med vores salgs- eller supportteam</li>
              <li>du bruger <strong>SkoleMate-platformen</strong> som lærer-bruger eller skole-bruger (autoriseret bruger).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Brug af SkoleMate-platformen</h2>
            <p className="mb-4">
              Hvis din skole er kunde hos os, og du har et login til SkoleMate-platformen, gælder følgende:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>En <strong>"lærer-bruger"</strong> er en bruger, der er lærer eller anden pædagogisk medarbejder på en skole og har adgang til SkoleMate-platformen uafhængigt af en skoleaftale.</li>
              <li>En <strong>"skole-bruger"</strong> er en bruger tilknyttet skolen i lærer, administrativ eller ledelsesmæssig funktion.</li>
            </ul>
            <p className="mb-4">
              I begge tilfælde kan vi behandle nogle af dine personoplysninger som <strong>dataansvarlig</strong> under denne Politik.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">Vigtigt om elevers data og andre oplysninger i platformen</h3>
            <p className="mb-4">
              Når skolen (eller dens brugere) indtaster data om elever, forældre eller andre i SkoleMate-platformen, behandler vi disse data <strong>på vegne af skolen</strong>. Her er skolen <strong>dataansvarlig</strong>, og SkoleMate er <strong>databehandler</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data vi indsamler – og hvordan</h2>
            <p className="mb-4">
              Hvilke oplysninger vi indsamler, afhænger af, hvordan du interagerer med os. De fleste oplysninger giver du selv, men vi indsamler også visse tekniske oplysninger automatisk via cookies og lignende teknologier.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">1. Oplysninger du selv giver os</h3>
            <p className="mb-4">Vi indsamler og behandler oplysninger, når du fx tilmelder dig nyhedsbreve, deltager i undersøgelser, kontakter os eller bliver kunde.</p>

            <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">2. Oplysninger vi indsamler automatisk (website og cookies)</h3>
            <p className="mb-4">
              Når du besøger <strong>skolemate.dk</strong>, kan vi automatisk indsamle standardoplysninger via din browser/enhed og cookies. Se mere i vores <a href="/cookiepolitik" className="text-primary hover:underline">Cookiepolitik</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Hvorfor vi behandler dine data</h2>
            <p className="mb-4">
              Vi behandler kun dine personoplysninger, når vi har et gyldigt retsgrundlag. Formålene omfatter bl.a.:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>At levere og vedligeholde SkoleMate-tjenesterne</li>
              <li>At forbedre og optimere vores website og tjenester</li>
              <li>Markedsføring og salgsaktiviteter (B2B)</li>
              <li>Beskyttelse af SkoleMate-platformen</li>
              <li>Overholdelse af lovgivning og retskrav</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Deling af dine personoplysninger</h2>
            <p className="mb-4">
              Vi videregiver kun dine oplysninger, når det er nødvendigt og legitimt. Vi <strong>sælger ikke</strong> dine personoplysninger til tredjepart.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Hvor længe gemmer vi dine oplysninger?</h2>
            <p className="mb-4">
              Vi opbevarer dine personoplysninger, så længe det er nødvendigt til de formål, de blev indsamlet til. Når der ikke længere er et sagligt formål, <strong>sletter eller anonymiserer</strong> vi oplysningerne.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Hvordan vi beskytter dine oplysninger</h2>
            <p className="mb-4">
              Vi tager sikkerheden af dine oplysninger alvorligt og har truffet passende tekniske og organisatoriske foranstaltninger for at beskytte mod uautoriseret adgang.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Dine rettigheder</h2>
            <p className="mb-4">
              Som registreret har du følgende rettigheder:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Indsigt</strong> – du kan få oplyst, hvilke personoplysninger vi har om dig</li>
              <li><strong>Ret til berigtigelse</strong> – du kan få rettet urigtige oplysninger</li>
              <li><strong>Sletning</strong> – du kan i visse tilfælde få dine oplysninger slettet</li>
              <li><strong>Begrænsning af behandling</strong> – du kan i visse tilfælde kræve, at behandlingen begrænses</li>
              <li><strong>Indsigelse</strong> – du kan gøre indsigelse mod visse behandlinger</li>
              <li><strong>Dataportabilitet</strong> – du kan i visse tilfælde få udleveret oplysninger i struktureret format</li>
            </ul>
            <p className="mb-4">
              Kontakt os på: 📧 <a href="mailto:privacy@skolemate.dk" className="text-primary hover:underline">privacy@skolemate.dk</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Klager til tilsynsmyndighed</h2>
            <p className="mb-4">
              Du har ret til at klage til <strong>Datatilsynet</strong>:
            </p>
            <p className="mb-4">
              Borgergade 28, 5.<br />
              1300 København K<br />
              📧 <a href="mailto:dt@datatilsynet.dk" className="text-primary hover:underline">dt@datatilsynet.dk</a><br />
              🌐 <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">datatilsynet.dk</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Kontakt</h2>
            <p className="mb-4">
              <strong>SkoleMate ApS</strong><br />
              Fragevej 58<br />
              4760 Vordingborg<br />
              Danmark
            </p>
            <p className="mb-4">
              📧 <a href="mailto:privacy@skolemate.dk" className="text-primary hover:underline">privacy@skolemate.dk</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privatlivspolitik;