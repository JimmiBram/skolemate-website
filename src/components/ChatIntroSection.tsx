import { useState, useEffect, useCallback } from "react";

interface Message {
  sender: "elev" | "skolemate";
  text: string;
}

const messages: Message[] = [
  {
    sender: "elev",
    text: "Hey SkoleMate. Skriv en dansk stil for mig indenfor emnet ungdomsliv",
  },
  {
    sender: "skolemate",
    text: "Jeg kan desværre ikke skrive en færdig stil for dig, men jeg kan hjælpe dig med at komme i gang og guide dig gennem processen. Lad os starte med at finde en god vinkel på emnet ungdomsliv. Hvad interesserer dig mest ved emnet?",
  },
  {
    sender: "elev",
    text: "Jeg synes, det kunne være interessant at skrive om sociale medier, men jeg ved ikke hvor jeg skal starte.",
  },
  {
    sender: "skolemate",
    text: "God idé! Sociale medier er et super relevant emne for ungdomsliv – det påvirker både identitet, relationer og selvbillede. Lad os starte med en simpel brainstorm: Hvordan bruger du selv sociale medier? Hvad er det bedste ved dem? Hvad er det sværeste? Prøv at svare på ét af spørgsmålene – så hjælper jeg dig med at bygge videre.",
  },
];

const TYPING_SPEED = 20;
const PAUSE_BETWEEN_MESSAGES = 800;
const DISPLAY_DURATION = 5500;

interface ChatBubbleProps {
  sender: "elev" | "skolemate";
  text: string;
  isTyping?: boolean;
}

const ChatBubble = ({ sender, text, isTyping }: ChatBubbleProps) => {
  const isSkolemate = sender === "skolemate";

  return (
    <div
      className={`flex flex-col ${isSkolemate ? "items-start" : "items-end"}`}
    >
      {isSkolemate && (
        <span className="text-sm font-semibold text-foreground/70 mb-1 ml-2">
          SkoleMate
        </span>
      )}
      <div
        className={`max-w-[85%] md:max-w-[75%] bg-white rounded-2xl px-4 py-3 shadow-sm ${
          isSkolemate ? "rounded-tl-md" : "rounded-tr-md"
        }`}
      >
        <p className="text-sm md:text-base text-foreground leading-relaxed">
          {text}
          {isTyping && (
            <span className="inline-block w-0.5 h-4 bg-foreground/60 ml-0.5 animate-pulse" />
          )}
        </p>
      </div>
    </div>
  );
};

const ChatIntroSection = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  const resetAnimation = useCallback(() => {
    setVisibleMessages([]);
    setCurrentTypingIndex(0);
    setDisplayedText("");
  }, []);

  useEffect(() => {
    if (currentTypingIndex >= messages.length) {
      const timer = setTimeout(resetAnimation, DISPLAY_DURATION);
      return () => clearTimeout(timer);
    }

    const currentMessage = messages[currentTypingIndex];

    if (displayedText.length < currentMessage.text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentMessage.text.slice(0, displayedText.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, currentTypingIndex]);
        setCurrentTypingIndex((prev) => prev + 1);
        setDisplayedText("");
      }, PAUSE_BETWEEN_MESSAGES);
      return () => clearTimeout(timer);
    }
  }, [currentTypingIndex, displayedText, resetAnimation]);

  return (
    <section className="w-full bg-background py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          {/* Chat simulation - left side (70%) */}
          <div
            className="w-full lg:w-[70%] rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: "#FFF8E1" }}
          >
            <div 
              className="space-y-4"
              style={{ minHeight: "520px" }}
            >
              {/* Render completed messages */}
              {visibleMessages.map((msgIndex) => {
                const msg = messages[msgIndex];
                return (
                  <ChatBubble
                    key={msgIndex}
                    sender={msg.sender}
                    text={msg.text}
                  />
                );
              })}

              {/* Render currently typing message */}
              {currentTypingIndex < messages.length && displayedText && (
                <ChatBubble
                  sender={messages[currentTypingIndex].sender}
                  text={displayedText}
                  isTyping
                />
              )}
            </div>
          </div>

          {/* Text block - right side (30%) */}
          <div className="w-full lg:w-[30%] flex items-center">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 text-center lg:text-left">
              SkoleMate giver støtte og vejledning{" "}
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-state-success">
                til elever
              </span>{" "}
              i undervisningen uden at levere færdige svar eller opgaveløsninger.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatIntroSection;
