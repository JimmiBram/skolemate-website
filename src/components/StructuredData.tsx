const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SkoleMate",
    "url": "https://skolemate.dk",
    "logo": "https://skolemate.dk/favicon.png",
    "description": "SkoleMate er hele skolens AI-assistent - udviklet i Danmark til danske skoler. Vi leverer sikker, GDPR-godkendt AI til undervisning med fokus på didaktik og pædagogik.",
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Country",
      "name": "Denmark"
    },
    "sameAs": [
      "https://www.linkedin.com/company/skolemate"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "kontakt@skolemate.dk",
      "availableLanguage": "Danish"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DK"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hvordan adskiller SkoleMate sig fra andre AI-værktøjer som ChatGPT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SkoleMate er bygget specifikt til skoler i Danmark og er derfor instrueret i at forstå didaktik og pædagogik i undervisningssammenhæng. Det sikrer hurtig og effektiv brug af SkoleMate, der ikke kræver lange instruktioner fra dig for at forstå konteksten."
        }
      },
      {
        "@type": "Question",
        "name": "Fungerer SkoleMate på alle fag og klassetrin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, SkoleMate tilpasser indholdet til både fag, niveau og elevgruppe – fra dansk og matematik til engelsk, naturfag og valgfag."
        }
      },
      {
        "@type": "Question",
        "name": "Kræver det meget teknisk erfaring at bruge SkoleMate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nej, SkoleMate er udviklet til alle brugere og kræver ingen teknisk viden på forhånd. Vi har gjort alle værktøjer simple og anvendelige, så alt der kræves af dig, er din faglighed indenfor undervisning og didaktik."
        }
      },
      {
        "@type": "Question",
        "name": "Er SkoleMate sikkert og GDPR-godkendt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, SkoleMate er udviklet i Danmark og hostes i EU, så alle data behandles sikkert og i fuld overensstemmelse med datasikkerhed og GDPR."
        }
      },
      {
        "@type": "Question",
        "name": "Hvilken AI-model benytter SkoleMate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SkoleMate benytter den europæiske sprogmodel, Mistral, der er udviklet i Frankrig. Vi har fravalgt de store amerikanske spillere til fordel for en europæisk model for at sikre digital suverænitet og den højeste standard inden for datasikkerhed, der flugter med europæiske værdier og lovgivning."
        }
      },
      {
        "@type": "Question",
        "name": "Hvad koster SkoleMate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SkoleMate er for altid gratis for dig at bruge i vores Freemium udgave. Bliver du med tiden træt af begrænsningerne, kan du i stedet opgradere til Premium til 69,- pr. mdr. Du kan også vælge at tage resten af kollegaerne med under armen og lade skolen klare tilmeldingen."
        }
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SkoleMate",
    "url": "https://skolemate.dk",
    "description": "Hele skolens AI-assistent - udviklet i Danmark til danske skoler",
    "inLanguage": "da-DK",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://skolemate.dk/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default StructuredData;
