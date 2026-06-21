import mistralLogo from "@/assets/partners/mistral-ai.png";
import uniloginLogo from "@/assets/partners/unilogin.png";

const PartnerBar = () => {
  return (
    <section className="w-full bg-muted/50 py-12">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">
          Vi arbejder med
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          <img
            src={mistralLogo}
            alt="Mistral AI logo"
            className="h-[72px] md:h-[86px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply dark:mix-blend-screen dark:invert"
          />
          <img
            src={uniloginLogo}
            alt="Unilogin logo"
            className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply dark:mix-blend-screen dark:invert"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnerBar;
