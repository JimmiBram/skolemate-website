import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SESSION_KEY = "skolemate_for_sale_seen";

const ForSalePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (!seen) {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }
  }, []);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 border-0 bg-transparent shadow-none overflow-visible">
          <div className="aurora-modal">
            <div className="aurora-modal-inner p-8">


          <div className="space-y-4 text-foreground">
            <h2 className="text-3xl font-bold text-primary">SkoleMate er til salg</h2>
            <p>Vi har besluttet at sælge SkoleMate.</p>
            <p>
              Ikke fordi produktet ikke virker. Tværtimod. Vi har bygget en gennemarbejdet
              AI-platform til skoler med chat, canvas chat, dokumenthåndtering, administration,
              brugerstyring, betaling, mulighed for skolens egne data og en pædagogisk tilgang
              til AI i undervisningen.
            </p>
            <p>Platformen er allerede i drift og har brugere på.</p>
            <p>
              Men vi må også være ærlige: Vi har ikke formået at sælge SkoleMate ind til skolerne
              i et omfang, hvor det kan løbe rundt for os. Adoptionen af en AI-platform til elever
              og lærere ser ud til at være en længere rejse, end vi selv har haft kræfter og
              økonomi til at løfte.
            </p>
            <p>
              Til gengæld står der nu et færdigt teknisk fundament, som andre kan bygge videre på.
            </p>
            <p>
              SkoleMate kan være interessant for en virksomhed, skoleaktør, konsulent, udvikler
              eller organisation, der vil hurtigt i gang med en danskudviklet og EU-hostet
              AI-løsning til undervisningssektoren. Produktet kan også relativt let tilpasses
              andre brancher, da meget af teknologien ikke kun er skolespecifik.
            </p>
            <p>Vi håber, at nogen kan få glæde af det, vi har bygget.</p>
            <p className="font-semibold">Prisidé: 150.000 kr.</p>
            <p>
              Man kan enten købe virksomheden eller produktet/kildekoden. Virksomheden (AiKlar)
              er gældfri.
            </p>
            <p>
              Læs mere her:{" "}
              <Link
                to="/salg"
                onClick={() => setOpen(false)}
                className="text-primary underline"
              >
                Læs mere om salget af SkoleMate
              </Link>
            </p>
            <p>Del gerne opslaget med nogen, der kunne være den rette køber.</p>
            <div className="flex justify-end pt-2">
              <Button onClick={() => setOpen(false)}>OK</Button>
            </div>
          </div>
          </div>
          </div>
        </DialogContent>
      </Dialog>

      <button
        onClick={() => setOpen(true)}
        className="aurora-flap aurora-flap-right fixed right-0 top-1/2 -translate-y-1/2 z-40 rounded-l-xl shadow-xl font-bold text-2xl leading-tight text-white"
        aria-label="SkoleMate er til salg"
      >
        <span className="aurora-flap-inner aurora-flap-inner-vertical">
          SkoleMate er til salg
        </span>
      </button>
    </>
  );
};

export default ForSalePopup;
