import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Brugsvilkaar = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Brugsvilkår</h1>
        
        <div className="prose prose-lg max-w-none text-gray-2 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptering af vilkår</h2>
            <p>
              Ved at bruge SkoleMate accepterer du disse brugsvilkår. Hvis du ikke accepterer vilkårene, må du ikke bruge platformen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Beskrivelse af tjenesten</h2>
            <p>
              SkoleMate er en EdTech AI-platform, der leverer AI-assistancefunktioner til skoler med fokus på individualiseret og engageret digital læring.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Brugerens ansvar</h2>
            <p>
              Som bruger af SkoleMate forpligter du dig til:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>At bruge platformen i overensstemmelse med gældende lovgivning</li>
              <li>Ikke at dele dine loginoplysninger med andre</li>
              <li>At holde dine oplysninger opdaterede</li>
              <li>At respektere andres rettigheder og privatliv</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Abonnement og betaling</h2>
            <p>
              SkoleMate tilbyder både gratis og betalte abonnementer. Premium-abonnementet koster 69 kr. om måneden og faktureres månedligt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Opsigelse</h2>
            <p>
              Du kan til enhver tid opsige dit abonnement. Opsigelse træder i kraft ved udgangen af den betalte periode.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Ansvarsbegrænsning</h2>
            <p>
              SkoleMate ApS er ikke ansvarlig for indirekte tab eller følgeskader som følge af brugen af platformen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Ændringer</h2>
            <p>
              Vi forbeholder os retten til at ændre disse vilkår. Væsentlige ændringer vil blive meddelt til brugerne.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Kontakt</h2>
            <p>
              Ved spørgsmål til brugsvilkårene kan du kontakte os via vores kontaktformular eller email.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Brugsvilkaar;
