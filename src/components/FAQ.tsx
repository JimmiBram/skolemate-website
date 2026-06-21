import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Hvordan adskiller SkoleMate sig fra andre AI-værktøjer som ChatGPT?",
      answer: "SkoleMate er bygget specifikt til skoler i Danmark og er derfor instrueret i at forstå didaktik og pædagogik i undervisningssammenhæng. Det sikrer hurtig og effektiv brug af SkoleMate, der ikke kræver lange instruktioner fra dig for at forstå konteksten."
    },
    {
      question: "Fungerer SkoleMate på alle fag og klassetrin?",
      answer: "Ja, SkoleMate tilpasser indholdet til både fag, niveau og elevgruppe – fra dansk og matematik til engelsk, naturfag og valgfag."
    },
    {
      question: "Kræver det meget teknisk erfaring at bruge SkoleMate?",
      answer: "Nej, SkoleMate er udviklet til alle brugere og kræver ingen teknisk viden på forhånd. Vi har gjort alle værktøjer simple og anvendelige, så alt der kræves af dig, er din faglighed indenfor undervisning og didaktik."
    },
    {
      question: "Er SkoleMate sikkert og GDPR-godkendt?",
      answer: "Ja, SkoleMate er udviklet i Danmark og hostes i EU, så alle data behandles sikkert og i fuld overensstemmelse med datasikkerhed og GDPR."
    },
    {
      question: "Hvilken AI-model benytter SkoleMate?",
      answer: "SkoleMate benytter den europæiske sprogmodel, Mistral, der er udviklet i Frankrig. Vi har fravalgt de store amerikanske spillere til fordel for en europæisk model for at sikre digital suverænitet og den højeste standard inden for datasikkerhed, der flugter med europæiske værdier og lovgivning."
    },
    {
      question: "Hvad koster SkoleMate?",
      answer: "SkoleMate er for altid gratis for dig at bruge i vores Freemium udgave. Bliver du med tiden træt af begrænsningerne, kan du i stedet opgradere til Premium til 69,- pr. mdr. Du kan også vælge at tage resten af kollegaerne med under armen og lade skolen klare tilmeldingen."
    }
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Ofte stillede spørgsmål
          </h2>
          <p className="text-lg text-muted-foreground">
            Find svar på de mest almindelige spørgsmål om SkoleMate
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
