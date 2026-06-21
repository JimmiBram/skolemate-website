import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const VilkaarOgBetingelser = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">SkoleMate – Vilkår og betingelser</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/90 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Parter</h2>
            <p>Disse vilkår og betingelser ("Aftalen") er indgået mellem:</p>
            <p className="font-semibold">Skolen</p>
            <p>(Herefter "Kunden" eller "Skolen")</p>
            <p>og</p>
            <div className="space-y-1">
              <p className="font-semibold">SkoleMate ApS</p>
              <p>Fragevej 58</p>
              <p>4760 Vordingborg, Danmark</p>
              <p>CVR-nr.: 45469948</p>
            </div>
            <p>(Herefter "SkoleMate", "vi", "os" eller "vores")</p>
            <p>Kunden og SkoleMate benævnes hver for sig en "Part" og samlet "Parterne".</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">1. Definitioner</h2>
            <p>I denne Aftale betyder:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>"Skole-bruger"</strong>: En bruger ansat hos Skolen, typisk ledelse/administration/IT, med udvidede rettigheder (herunder evt. admin).</li>
              <li><strong>"Lærer"</strong>: En bruger af SkoleMate-platformen, der underviser eller på anden måde er ansat som lærer/pædagog hos Skolen.</li>
              <li><strong>"Autoriseret bruger"</strong>: Fællesbetegnelse for alle Skole-brugere og Lærere, der er inviteret til at bruge SkoleMate-platformen.</li>
              <li><strong>"Admin-bruger"</strong>: En Skole-bruger med fuld administrationsadgang til SkoleMate-platformen på vegne af Skolen.</li>
              <li><strong>"Aftale"</strong>: Nærværende vilkår og betingelser mellem SkoleMate og Skolen.</li>
              <li><strong>"SkoleMate-tilbud"</strong>: Det konkrete tilbud fra SkoleMate til Skolen, som beskriver abonnementstype, moduler, eventuelle tilkøb og betalingsvilkår.</li>
              <li><strong>"Platformen" / "SkoleMate-platformen"</strong>: De software-tjenester, som SkoleMate stiller til rådighed for Skolen som software-as-a-service til håndtering af skole-/undervisningsrelaterede processer.</li>
              <li><strong>"Site" / "Skoleenhed"</strong>: En konkret fysisk skole eller afdeling, der anvender SkoleMate-platformen under Skolens kontrol.</li>
              <li><strong>"Kundedata"</strong>: De personoplysninger og øvrige data om elever, lærere, klasser, hold, aktiviteter mv., som Skolen eller Autoriserede brugere lægger ind i SkoleMate-platformen, jf. SkoleMates databehandleraftale.</li>
              <li><strong>"Abonnementsperiode"</strong>: Den aftalte løbetid for abonnementet (månedligt eller årligt), som fremgår af SkoleMate-tilbuddet.</li>
              <li><strong>"Vedligeholdelsesvindue"</strong>: De tidspunkter, hvor SkoleMate kan foretage planlagt vedligehold, typisk i weekender eller uden for normal undervisningstid.</li>
              <li><strong>"Fortrolige oplysninger"</strong>: Enhver oplysning af kommerciel, teknisk eller driftsmæssig værdi, der er mærket fortrolig, eller som efter sin karakter bør anses for fortrolig (fx elevdata, driftsoplysninger, priser m.v.).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">2. Introduktion</h2>
            <p><strong>2.1.</strong> Denne Aftale regulerer SkoleMates levering af SkoleMate-platformen til Skolen, uanset om Skolen benytter en gratis version (hvis relevant) eller et betalt abonnement. Ved at tage SkoleMate-platformen i brug er Skolen bundet af denne Aftale.</p>
            <p><strong>2.2.</strong> SkoleMate-tilbuddet beskriver:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Hvilken abonnementspakke Skolen eller læreren har valgt</li>
              <li>Hvilke moduler/tilvalg der følger med</li>
              <li>Priser og betalingsvilkår</li>
            </ul>
            <p><strong>2.3.</strong> Skolen eller læreren accepterer SkoleMate-tilbuddet enten:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>via e-mail, eller</li>
              <li>direkte i SkoleMate-platformen.</li>
            </ul>
            <p>SkoleMate-tilbuddet er reguleret af denne Aftale.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">3. SkoleMate-platformen</h2>
            <p><strong>3.1.</strong> SkoleMate stiller SkoleMate-platformen til rådighed for Skolen eller læreren som en <strong>cloud-baseret software-tjeneste</strong>, herunder hosting, drift, support og løbende vedligehold, jf. denne Aftale.</p>
            <p><strong>3.2.</strong> SkoleMate kan tilbyde yderligere funktioner og tilvalg (moduler) mod ekstra betaling. Disse kan Skolen tilkøbe efter behov og vil i så fald fremgå af SkoleMate-tilbuddet eller særskilt skriftlig aftale.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">4. Licens og begrænsninger</h2>
            <p><strong>4.1.</strong> SkoleMate giver Skolen eller læreren en <strong>ikke-eksklusiv, ikke-overdragelig, begrænset licens</strong> til at bruge SkoleMate-platformen og eventuelle tilkøbsmoduler i Abonnementsperioden – kun til Skolens interne drift og undervisningsaktiviteter.</p>
            <p><strong>4.2.</strong> Skolen kan udvide med:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>moduler og tilvalg</li>
              <li>elever</li>
            </ul>
            <p>ved at acceptere et opdateret SkoleMate-tilbud eller bestille via platformen, hvis muligt.</p>
            <p><strong>4.3.</strong> Skolen må <strong>ikke</strong>:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>a) kopiere eller ændre SkoleMate-platformen eller forsøge at lave afledte produkter heraf</li>
              <li>b) reverse-engineere, dekompilere eller forsøge at få adgang til kildekode</li>
              <li>c) fjerne eller ændre varemærker, copyright-angivelser eller andre rettighedsmærker</li>
              <li>d) udleje, videredistribuere eller give tredjemand adgang til platformen uden aftale</li>
              <li>e) bruge SkoleMate-platformen til at udvikle konkurrerende produkter</li>
              <li>f) give tredjemand adgang til at inspicere platformens kode eller struktur uden SkoleMates skriftlige samtykke.</li>
            </ul>
            <p><strong>4.4.</strong> Væsentlig overtrædelse af ovenstående er en <strong>materiel misligholdelse</strong> af Aftalen.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">5. Skolens forpligtelser</h2>
            <p><strong>5.1.</strong> Skolen er ansvarlig for at:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>a) lægge <strong>korrekte og opdaterede oplysninger</strong> ind i SkoleMate-platformen</li>
              <li>b) sikre, at skolens eget IT-udstyr og netværk fungerer og er opdateret</li>
              <li>c) sørge for, at alle Autoriserede brugere (Skole-brugere og Lærere) bruger platformen i overensstemmelse med SkoleMates Brugervilkår og skolens egne interne politikker</li>
              <li>d) sikre, at login-oplysninger til Skole-brugere og Lærere holdes hemmelige og ikke deles</li>
              <li>e) overholde gældende lovgivning, herunder særligt databeskyttelsesregler og skolens uddannelsesretlige forpligtelser.</li>
            </ul>
            <p><strong>5.2.</strong> Skolen skal <strong>handle i god tro</strong> i forhandlinger og angivelse af antal skoleenheder og brug, så prisfastsættelsen er korrekt i forhold til SkoleMates prismodeller.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">6. Brugere og adgang</h2>
            <p><strong>6.1.</strong> SkoleMate opretter én eller flere <strong>Admin-brugere</strong> for Skolen. Admin-brugeren kan:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>oprette og administrere Skole-brugere</li>
              <li>oprette Lærere</li>
              <li>tildele relevante rettigheder og roller.</li>
            </ul>
            <p><strong>6.2.</strong> Alle Autoriserede brugere skal acceptere SkoleMates <strong>Brugervilkår</strong> (Terms of Use) ved første login.</p>
            <p><strong>6.3.</strong> Skolen kan fastsætte yderligere interne retningslinjer for brugen af SkoleMate-platformen; det er Skolens ansvar at informere sine Skole-brugere og Lærere om disse.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">7. Drift, support og vedligehold</h2>
            <p><strong>7.1.</strong> SkoleMate vil levere SkoleMate-platformen og tilhørende support med <strong>rimelig professionel omhu</strong> og i overensstemmelse med god IT-skik.</p>
            <p><strong>7.2.</strong> Support omfatter typisk:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>hjælp til opstart og onboarding</li>
              <li>svar på konkrete spørgsmål om brug</li>
              <li>afhjælpning af mindre fejl</li>
              <li>generel vejledning i funktionaliteten.</li>
            </ul>
            <p><strong>7.3.</strong> Support omfatter <strong>ikke</strong> fejlsøgning i Skolens egne systemer (netværk, hardware, andre programmer osv.).</p>
            <p><strong>7.4.</strong> Planlagt vedligehold forsøges lagt i <strong>Vedligeholdelsesvinduer</strong> (uden for almindelig undervisningstid) og udføres så skånsomt som muligt. Platformen kan i disse perioder være midlertidigt utilgængelig.</p>
            <p><strong>7.5.</strong> SkoleMate kan i ekstraordinære situationer (fx alvorlige sikkerhedsproblemer) midlertidigt lukke adgang til hele eller dele af platformen uden for Vedligeholdelsesvinduet, men vil – så vidt muligt – orientere Skolen.</p>
            <p><strong>7.6.</strong> Backup og tekniske sikkerhedsforanstaltninger er nærmere beskrevet i <strong>SkoleMates databehandleraftale</strong>.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">8. Betaling og priser</h2>
            <p><strong>8.1.</strong> Skolen eller læreren betaler et abonnement (månedligt eller årligt) efter:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>valgt pakke</li>
              <li>antal brugere</li>
              <li>eventuelle tilkøb og moduler</li>
            </ul>
            <p>som angivet i SkoleMate-tilbuddet.</p>
            <p><strong>8.2.</strong> Tilkøbsydelser afregnes efter de priser, der gælder på tidspunktet for bestillingen.</p>
            <p><strong>8.3.</strong> Betalingsbetingelser, herunder forfald og moms, fremgår af SkoleMate-tilbuddet. Manglende betaling kan medføre, at SkoleMate midlertidigt lukker for adgang til platformen, indtil betaling er modtaget.</p>
            <p><strong>8.4.</strong> SkoleMate kan justere priser til næste abonnementsperiode med forudgående skriftligt varsel (typisk 3 måneder).</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">9. Immaterielle rettigheder</h2>
            <p><strong>9.1.</strong> SkoleMate beholder ejendomsretten til:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>SkoleMate-platformen</li>
              <li>kildekode, design, dokumentation og undervisningsmateriale</li>
              <li>SkoleMate-navn, logo og øvrige varemærker.</li>
            </ul>
            <p>Skolen får kun en brugsret efter denne Aftale.</p>
            <p><strong>9.2.</strong> Skolen får ingen ejendomsret til SkoleMate-platformen eller andre immaterielle rettigheder – kun retten til at bruge løsningen, så længe Aftalen er i kraft.</p>
            <p><strong>9.3.</strong> Skolen giver SkoleMate en begrænset ret til at bruge skolens navn og logo:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>til at vise skolelogo i platformen (hvis relevant)</li>
              <li>til at nævne Skolen som referencekunde på hjemmeside, i præsentationer m.v.</li>
            </ul>
            <p>Skolen kan til enhver tid trække dette samtykke tilbage med skriftlig besked.</p>
            <p><strong>9.4.</strong> Eventuel feedback og forslag til forbedringer fra Skolens side kan SkoleMate frit anvende uden særskilt vederlag.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">10. Fortrolighed</h2>
            <p><strong>10.1.</strong> Parterne skal behandle hinandens <strong>Fortrolige oplysninger</strong> fortroligt og må kun bruge dem til at opfylde Aftalen.</p>
            <p><strong>10.2.</strong> Fortrolige oplysninger må kun deles med medarbejdere eller rådgivere med et reelt behov og under tavshedspligt.</p>
            <p><strong>10.3.</strong> SkoleMates Fortrolige oplysninger omfatter bl.a. tekniske detaljer om SkoleMate-platformen.</p>
            <p>Skolens Fortrolige oplysninger omfatter bl.a. Kundedata.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">11. Behandling af personoplysninger</h2>
            <p><strong>11.1.</strong> Når Skolen bruger SkoleMate-platformen, er Skolen <strong>dataansvarlig</strong>, og SkoleMate er <strong>databehandler</strong> for Kundedata.</p>
            <p><strong>11.2.</strong> Parternes rettigheder og pligter vedr. personoplysninger er reguleret i en særskilt <strong>databehandleraftale</strong> mellem Skolen og SkoleMate, som udgør en integreret del af denne Aftale.</p>
            <p><strong>11.3.</strong> Skolen er ejer af Kundedata.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">12. Brugsdata</h2>
            <p><strong>12.1.</strong> SkoleMate kan indsamle og bruge <strong>anonymiserede eller pseudonymiserede brugsdata</strong> om, hvordan platformen anvendes (fx antal logins, mest brugte funktioner, belastning osv.) til:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>at forbedre SkoleMate-platformen</li>
              <li>at udarbejde statistik og generelle anbefalinger.</li>
            </ul>
            <p><strong>12.2.</strong> Sådanne data må ikke identificere enkeltpersoner eller konkret Skole, når de deles offentligt eller bruges som benchmark.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">13. Tredjepartstjenester</h2>
            <p><strong>13.1.</strong> SkoleMate-platformen kan integrere med tredjepartsløsninger (fx læringsværktøjer, login-tjenester, betalingsløsninger m.v.).</p>
            <p><strong>13.2.</strong> Brug af sådanne tredjepartstjenester er reguleret af aftaler mellem Skolen og den pågældende tredjepart. SkoleMate er ikke ansvarlig for fejl eller tab, der skyldes tredjeparts systemer.</p>
            <p><strong>13.3.</strong> Hvis Skolen tilslutter en tredjepartstjeneste, anses det som en instruks til SkoleMate om at dele nødvendige data med denne tredjepart.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">14. Sikkerhed og ansvarsfraskrivelse</h2>
            <p><strong>14.1.</strong> SkoleMate tilstræber høj tilgængelighed og sikkerhed og har implementeret passende tekniske og organisatoriske sikkerhedsforanstaltninger.</p>
            <p><strong>14.2.</strong> SkoleMate-platformen leveres <strong>"som den er"</strong>, uden garanti for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>at platformen altid er fejlfri eller uden nedetid</li>
              <li>at eksterne angreb aldrig kan lykkes</li>
              <li>at platformen altid er kompatibel med al Skolens øvrige software/hardware.</li>
            </ul>
            <p><strong>14.3.</strong> Funktioner, der skal hjælpe Skolen med at opfylde lovkrav (fx GDPR-funktionalitet, rapporter mv.), er hjælpeværktøjer. Skolen har altid det endelige ansvar for sin egen retslige compliance.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">15. Fejl og mangler</h2>
            <p>Hvis Skolen vil klage over fejl eller mangler, skal dette ske <strong>uden unødigt ophold</strong> efter, at Skolen bliver opmærksom på fejlen – og senest 30 dage efter. Ellers kan kravet bortfalde.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">16. Ansvar og ansvarsbegrænsning</h2>
            <p><strong>16.1.</strong> Intet i Aftalen udelukker ansvar for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>dødsfald eller personskade forårsaget ved uagtsomhed</li>
              <li>forsætlig vildledning eller svig</li>
              <li>andet ansvar, der ikke lovligt kan begrænses.</li>
            </ul>
            <p><strong>16.2.</strong> Parterne er ikke ansvarlige for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>indirekte tab</li>
              <li>driftstab, tabt avance</li>
              <li>tab af data (medmindre SkoleMate har forsømt backup-pligten i grov grad)</li>
              <li>krav fra tredjemand, som ikke direkte kan henføres til SkoleMates misligholdelse.</li>
            </ul>
            <p><strong>16.3.</strong> SkoleMates samlede ansvar under Aftalen er begrænset til et beløb svarende til <strong>de abonnementer, Skolen har betalt de seneste 12 måneder</strong> før hændelsen, der udløste kravet.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">17. Abonnementsperiode, ophør og misligholdelse</h2>
            <p><strong>17.1.</strong> Abonnementsperioden (måned/år) fremgår af SkoleMate-tilbuddet. Abonnementet fornyes automatisk, medmindre det opsiges.</p>
            <p><strong>17.2.</strong> Skolen eller læreren kan opsige Aftalen skriftligt (fx via e-mail) med <strong>1 måneds varsel</strong> til udløbet af en abonnementsperiode, medmindre andet fremgår af SkoleMate-tilbuddet. Betalte beløb refunderes som udgangspunkt ikke.</p>
            <p><strong>17.3.</strong> SkoleMate kan opsige Aftalen med <strong>3 måneders skriftligt varsel</strong> til udløbet af en abonnementsperiode.</p>
            <p><strong>17.4.</strong> Ved væsentlig misligholdelse (fx manglende betaling, grov misbrug af platformen eller alvorlige databrud) kan den ikke-misligholdende Part ophæve Aftalen med øjeblikkelig virkning, hvis forholdet ikke er bragt i orden efter skriftligt påkrav og rimelig frist.</p>
            <p><strong>17.5.</strong> Ved ophør:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>ophører Skolens adgang til SkoleMate-platformen</li>
              <li>skal Skolen sørge for at eksportere Kundedata eller instruere SkoleMate om at returnere/slette data i overensstemmelse med databehandleraftalen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">18. Force majeure</h2>
            <p>Ingen af Parterne er ansvarlige for manglende opfyldelse pga. force majeure, fx krig, strejke, offentlige påbud, pandemi, alvorlige netværksnedbrud, naturkatastrofer og lignende forhold uden for Partens rimelige kontrol.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">19. Overdragelse</h2>
            <p>Skolen må ikke overdrage Aftalen til tredjemand uden SkoleMates skriftlige samtykke.</p>
            <p>SkoleMate kan overdrage Aftalen til koncernselskaber eller i forbindelse med salg/fusion mv.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">20. Tredjemandsrettigheder</h2>
            <p>Kun Parterne (Skolen og SkoleMate) har rettigheder i henhold til denne Aftale.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">21. Ugyldighed (severability)</h2>
            <p>Hvis en bestemmelse i Aftalen er ugyldig eller ulovlig, påvirker det ikke de øvrige bestemmelser. Den ugyldige del skal i givet fald erstattes af en bestemmelse, der så vidt muligt afspejler samme formål.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">22. Ændringer af vilkår</h2>
            <p>SkoleMate kan ændre vilkårene i denne Aftale, hvis det er nødvendigt af:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>lovgivningsmæssige årsager</li>
              <li>sikkerheds- eller driftsmæssige hensyn</li>
              <li>produktudvikling og forretningsmæssige behov.</li>
            </ul>
            <p className="mt-4">Ændringer varsles skriftligt (fx via e-mail eller besked i SkoleMate-platformen). Fortsat brug efter ikrafttræden = accept af ændringerne. Ved væsentlige ændringer kan Skolen opsige Aftalen til udløbet af indeværende abonnementsperiode.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">23. Meddelelser</h2>
            <p>Meddelelser efter Aftalen kan gives via e-mail til de kontaktpersoner, Parterne har oplyst. E-mails anses modtaget <strong>næste arbejdsdag</strong>.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">24. Lovvalg og værneting</h2>
            <p><strong>24.1.</strong> Aftalen er underlagt <strong>dansk ret</strong>.</p>
            <p><strong>24.2.</strong> Enhver tvist, som Parterne ikke kan løse i mindelighed, skal indbringes for <strong>danske domstole</strong>, med <strong>Retten i Næstved / København</strong> som værneting.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">25. Hele aftalen</h2>
            <p>Denne Aftale, sammen med:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>SkoleMates databehandleraftale</li>
              <li>SkoleMate-tilbuddet</li>
              <li>evt. særaftaler</li>
            </ul>
            <p>udgør Parternes samlede aftale om brugen af SkoleMate-platformen.</p>
          </section>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default VilkaarOgBetingelser;