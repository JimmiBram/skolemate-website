const ContactForm = () => {
  return (
    <section id="kontakt" className="py-20 px-0 md:px-6 bg-muted/30">
      <div className="container max-w-5xl mx-auto">
        <div className="bg-background p-8 md:p-12 rounded-none md:rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kontakt os</h2>
          <p className="text-muted-foreground mb-6">
            Har du spørgsmål? Skriv til os, så vender vi tilbage hurtigst muligt.
          </p>
          <a
            href="mailto:info@aiklar.dk"
            className="text-xl md:text-2xl font-semibold text-primary underline underline-offset-4"
          >
            info@aiklar.dk
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
