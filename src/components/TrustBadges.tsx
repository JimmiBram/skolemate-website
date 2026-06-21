import flagDenmark from "@/assets/flag-denmark.png";
import flagEU from "@/assets/flag-eu.png";

const TrustBadges = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {/* Denmark Badge */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={flagDenmark} 
              alt="Dansk flag" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4"
            />
            <p className="text-lg font-semibold text-foreground">
              Udviklet til skoler i Danmark
            </p>
          </div>

          {/* EU Badge */}
          <div className="flex flex-col items-center text-center">
            <img 
              src={flagEU} 
              alt="EU flag" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4"
            />
            <p className="text-lg font-semibold text-foreground">
              Overholder datasikkerhed og GDPR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
