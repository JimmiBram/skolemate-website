export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  publishedAt: string;
  category: string;
  isFeatured: boolean;
  tags: string[];
}

// Add new blog posts here - newest first
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "kunstig-intelligens-i-skolen-en-didaktisk-noedvendighed",
    title: "Kunstig intelligens i skolen - en didaktisk nødvendighed",
    excerpt: "AI er en gave for skolen, hvis vi bruger det rigtigt. Læs om SkoleMates didaktiske tilgang og forskning om konsekvenserne ved forkert brug af AI.",
    content: `
## Indledning

Kunstig intelligens (AI) er for alvor rykket ind i vores samfund – og dermed også ind i klasselokalerne.

Nogle frygter, at AI blot bliver endnu en genvej for eleverne til at springe over, hvor gærdet er lavest, mens andre ser AI som et uundgåeligt værktøj, der kan berige undervisningen. Sandheden ligger et sted midt imellem: AI er en gave for skolen, hvis vi bruger det rigtigt.

Det betyder, at teknologien skal anvendes med et solidt didaktisk afsæt og aldrig stå alene. Vi – som lærere, pædagoger og samfund – har et ansvar for at sikre, at AI fremmer elevernes tænkning og læring frem for at erstatte den.

I denne artikel præsenteres platformen SkoleMate.dk og dens didaktiske tilgang til AI. Samtidig kigger vi på forskning, der dokumenterer konsekvenserne ved forkert brug af AI, hvor elever blot får svar serveret uden refleksion. Ifølge blandt andet Microsoft Research og Carnegie Mellon University viser resultaterne tydeligt, at ukritisk brug af AI kan hæmme kognitiv udvikling, svække den kritiske sans og reducere læringsudbyttet – medmindre vi bevidst integrerer teknologien på de rigtige pædagogiske præmisser.

## SkoleMate.dk – AI med didaktisk fundament

SkoleMate er en dansk AI-platform designet til fremtidens skole. Platformen fungerer som hele skolens AI-assistent – et intelligent værktøj til både lærere, elever og skoleledelse, skabt til at forstå og styrke skolens læringsprocesser.

Kernen i SkoleMates tilgang er et stærkt didaktisk fundament: AI-løsningen er udviklet specifikt til læringsbrug frem for blot generel brug. Det betyder, at SkoleMate ikke blot spytter svar ud, men understøtter de pædagogiske mål ved at invitere til refleksion, dialog og forståelse.

Teknologien er tænkt som en sparringspartner i klasselokalet – altid tilgængelig til at stille opklarende spørgsmål, forklare svære begreber på nye måder og foreslå next steps i læreprocessen. Denne tilgang afspejler en sokratisk metode: I stedet for at erstatte lærerens undervisning eller elevens tankeproces, supplerer SkoleMate ved at stille gode spørgsmål og komme med hints, der får eleven til at reflektere mere aktivt.

Denne didaktiske tilgang minder om den, forskere ved Københavns Universitet – herunder professor Guido Makransky – har afprøvet med deres specialiserede AI-værktøj ChatTutor, som netop er designet til at støtte læring fremfor at erstatte den. Makranskys forskning viser, at sådanne værktøjer, der bygger på læringsteori og aktiv deltagelse, giver bedre læringsudbytte end generelle AI-modeller som ChatGPT.

## Risikoen ved forkert brug af AI

Omvendt viser nyere forskning, hvad der sker, hvis AI blot bruges som smutvej uden pædagogisk rammesætning. Hvis en elev beder en generativ AI om at skrive sin opgave og afleverer svaret uden videre, udebliver den læring, der normalt opstår gennem bearbejdning, fejlsøgning og kritisk tænkning.

Ifølge en rapport fra Microsoft Research og Carnegie Mellon University fra 2025, der undersøgte 319 vidensarbejdere, brugte deltagerne markant mindre tid og kræfter på kritisk tænkning, når de støttede sig til AI for at løse opgaver. Forskerne konkluderede, at overdrevet afhængighed gjorde deltagerne mentalt dovnere og svækkede evnen til selvstændig problemløsning.

En lignende tendens sås i et studie fra Massachusetts Institute of Technology (MIT), hvor forskere målte hjerneaktivitet hos studerende med EEG. Ifølge forskerne viste resultaterne markant mindre hjerneaktivitet, når deltagerne brugte et AI-værktøj som ChatGPT, sammenlignet med når de selv skrev teksten fra bunden. Deltagerne, der brugte AI, havde også sværere ved at huske, hvad de havde skrevet bagefter – et tegn på reduceret læring.

Ifølge filosof Thomas Telving, der kommenterede studierne, kræver kritisk tænkning træning, og hvis man overlader opgaven til en maskine, bliver man dårligere til det selv: "Hvis du bruger AI til at klare opgaver for dig, er det klart, at du ikke lærer meget," som Telving udtrykte det.

Risikoen kan ifølge Microsoft/CMU-forskerne opdeles i tre dominerende konsekvenser:

- **Manglende beredskab ved uventede problemer**
- **Ensidig tænkning**
- **Overafhængighed af AI**

## AI som løftestang for tænkning og læring

Hvordan sikrer vi så, at AI bliver en løftestang for elevens tænkning – og ikke en erstatning for den?

Svaret ligger i didaktikken.

Eleverne skal lære at bruge teknologien kritisk og reflekteret. Ifølge børne- og undervisningsminister Mattias Tesfaye må AI aldrig blive et snydeværktøj, men gerne et læringsværktøj.

Hvis en opgave tillader AI, bør evalueringen fokusere på elevens proces og refleksion fremfor kun det færdige produkt. Forskning viser, at elever lærer mere, når de omskriver og forbedrer AI-tekster, i stedet for at aflevere dem råt.

AI bør bruges til at stille åbne spørgsmål fremfor lukkede svar. Her excellerer platforme som SkoleMate, der – som Makranskys forskning viser – kan fungere som tutor fremfor orakel.

For at nå dertil kræves indsats på flere niveauer:

Skoler bør formulere en fælles retning for AI, lærere skal efteruddannes, og elever skal undervises i etik, bias og begrænsninger. Ifølge Styrelsen for Undervisning og Kvalitet viser de nyeste anbefalinger, at skolerne aktivt bør udvikle lokal AI-strategi og tage dialogen med både elever og forældre.

## Konklusion

Kunstig intelligens er en gave – hvis vi bruger det rigtigt. I skolen kan AI åbne for nye læringsformer og aflaste lærerne med trivielle opgaver. Men teknologi alene gør det ikke.

Erfaringer fra SkoleMate.dk viser, at når AI bygges på et didaktisk fundament og bruges til at aktivere elevens egen tænkning, styrker det både motivation og læringsudbytte. Forskningen peger samtidig på, at den ureflekterede genvej kan svække de færdigheder, vi ønsker at styrke hos næste generation.

Ansvarlig brug af AI sikrer, at maskinerne forbliver kloge værktøjer, mens menneskerne forbliver de klogeste.

## Kilder

- Specialiseret AI-værktøj understøtter læring bedre end ChatGPT – Københavns Universitet: https://nyheder.ku.dk/alle_nyheder/2025/09/specialiseret-ai-vaerktoej-understoetter-laering-bedre-end-chatgpt/
- Gør AI os dummere?: https://finansforbundet.dk/dk/nyheder/2025/goer-ai-os-dummere/
- Syv anbefalinger til folkeskolen – Styrelsen for Undervisning og Kvalitet: https://uvm.dk/aktuelt/nyheder/2025/juni/250626-offentliggoerelse-af-anbefalinger-om-brug-af-generativ-ai-i-undervisningen-i-folkeskolen/
- AI i skolen – hvorfor og hvordan?: https://viden.via.dk/evu/ai-i-skolen-hvorfor-og-hvordan
    `,
    featuredImage: "/lovable-uploads/blog-ai-didaktik.jpg",
    author: "Jimmi Bram",
    publishedAt: "2026-01-08",
    category: "AI i undervisningen",
    isFeatured: true,
    tags: ["AI", "didaktik", "undervisning", "skole", "læring"],
  },
  {
    id: "2",
    slug: "ai-i-klasselokalet",
    title: "AI i klasselokalet",
    excerpt: "Hvorfor en EU-baseret løsning er afgørende for datasuverænitet og sikkerhed når det kommer til AI i skolen.",
    content: `
## AI i Klasselokalet: Hvorfor en EU-baseret løsning er afgørende for datasuverænitet

Kunstig intelligens er ikke længere fremtid, men et uundværligt redskab i mange sektorer – og undervisningssektoren er ingen undtagelse. Mens potentialet er enormt, er det afgørende, at vi som undervisere og skoleledere træffer bevidste valg omkring, hvor AI-løsningerne hostes. I en tid med stigende fokus på datasikkerhed og suverænitet er valget af en EU-baseret løsning for AI i skolen ikke blot et teknisk spørgsmål, men en nødvendighed for at sikre elevernes og skolens data.

## Datasikkerhed og Privatliv: EU's Gyldne Standard

Den primære grund til at vælge en EU-baseret AI-løsning er uden tvivl datasikkerhed og privatliv. Når data behandles inden for EU's grænser, er de underlagt den strenge GDPR-lovgivning (General Data Protection Regulation). Dette garanterer et højt niveau af beskyttelse for personoplysninger – herunder elevernes og lærernes data – hvilket ofte ikke er tilfældet, hvis data hostes uden for EU, især i lande med mindre restriktiv lovgivning som f.eks. USA.

For skoler betyder dette:

- **Klar ejerskab af data**: Skolen bevarer fuld kontrol over egne data.
- **Mindre risiko for misbrug**: Data kan ikke uden videre udleveres til tredjeparter eller bruges til kommercielle formål, uden samtykke og gennemsigtighed.
- **Overholdelse af retningslinjer**: Det bliver lettere at overholde kommunale og nationale datasikkerhedsretningslinjer.

At sikre, at elevernes læringsdata og personlige interaktioner med AI forbliver inden for et sikkert og reguleret miljø, er fundamentalt for at opbygge tillid til teknologien i skolen.

## SkoleMate.dk: AI designet til skolen – og til EU

Hos SkoleMate har vi fra start designet vores platform med dette i mente. Vi er stolte af at være en fuldt EU-baseret løsning og benytter Mistral AI som vores kernemodel. Dette er et bevidst valg med klare fordele:

- **Datasuverænitet og GDPR-Compliance**: Alle data, der behandles via SkoleMate, forbliver inden for EU's jurisdiktion. Dette giver skolerne ro i sindet og sikrer, at vi til enhver tid lever op til de højeste standarder for datasikkerhed og privatliv.
- **Mistral AI – En europæisk leder**: Mistral AI er en europæiskudviklet model, der er kendt for sin effektivitet, dens fokus på sikkerhed og dens evne til at levere præcise og kontekstuelt relevante svar. Ved at benytte Mistral understøtter vi ikke kun europæisk innovation, men sikrer også en model, der kan tilpasses specifikt til det danske og europæiske undervisningsmiljø.
- **Optimeret til Undervisningsbehov**: SkoleMate er ikke en generel AI. Vi har finjusteret og trænet Mistral-modellen til at forstå didaktikken og pædagogikken i klasselokalet. Dette betyder, at SkoleMate kan fungere som en kvalificeret sparringspartner for både lærere og elever, der stiller opklarende spørgsmål og understøtter refleksion frem for blot at give et endeligt svar.

## SkoleMate vs. Generelle AI-Modeller (ChatGPT, Grok, Gemini)

Mens generelle AI-modeller som ChatGPT (OpenAI), Grok (xAI) og Gemini (Google) er yderst avancerede og kraftfulde, er der markante forskelle, når vi taler om AI i skolen:

| Feature/Kriterie | SkoleMate.dk (Mistral AI) | ChatGPT, Grok, Gemini |
|------------------|---------------------------|------------------------|
| Datasuverænitet | Fuldt EU-baseret (GDPR) | Ofte baseret i USA (CLOUD Act) |
| Fokus/Formål | Specifikt designet til didaktisk læring og undervisning | Generelle sprogmodeller til bred anvendelse |
| Dataanvendelse | Data bruges kun til at forbedre skolens brug; ikke til kommerciel profit eller salg til 3. part | Data kan potentielt bruges til træning af modeller eller kommercielle formål |
| Svarstil | Designet til at stille spørgsmål, guide og fremme refleksion | Leverer direkte svar; kan fremme "copy-paste" uden dybere læring |
| Præcision i dansk kontekst | Optimeret til dansk skolesprog og didaktik | Generel tilgang; kan mangle nuancer i dansk pædagogik |
| Sikkerhedsprotokoller | Bygget med fokus på skolens behov og elevsikkerhed | Varierer; primært designet til privat/professionel brug |

De generelle AI-modeller er fantastiske værktøjer for den enkelte, men i et institutionelt miljø som skolen, hvor sikkerhed, pædagogik og databeskyttelse er altafgørende, er en specialiseret og EU-baseret løsning som SkoleMate den didaktisk ansvarlige vej frem. Vi skal sikre, at AI understøtter læringen, ikke kompromitterer den eller elevernes privatliv.
    `,
    featuredImage: "/lovable-uploads/blog-eu-datasuveraenitet.jpg",
    author: "Søren Larsen",
    publishedAt: "2026-01-05",
    category: "Datasikkerhed",
    isFeatured: true,
    tags: ["AI", "GDPR", "datasikkerhed", "EU", "Mistral AI"],
  },
];

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter((post) => post.isFeatured).slice(0, 3);
};

export const getAllPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getPaginatedPosts = (page: number, perPage: number = 10): { posts: BlogPost[]; totalPages: number } => {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedPosts = blogPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(blogPosts.length / perPage);
  
  return { posts: paginatedPosts, totalPages };
};
