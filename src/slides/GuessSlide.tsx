import { useState } from "react";
import { Baby } from "lucide-react";
import confetti from "canvas-confetti";

export const GuessSlide = () => {
  const [voted, setVoted] = useState<"boy" | "girl" | null>(null);

  const handleVote = (type: "boy" | "girl") => {
    setVoted(type);

    // Confetes específicos
    const colors =
      type === "boy" ? ["#60a5fa", "#93c5fd"] : ["#f472b6", "#fbcfe8"];

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors,
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-rose-50 text-center p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/40 to-transparent" />

      {/* Background Decorativo - Nuvens sutis */}
      <div className="absolute top-20 left-10 text-rose-100/50 text-8xl animate-pulse pointer-events-none">
        ☁️
      </div>
      <div className="absolute bottom-32 right-10 text-amber-100/50 text-9xl animate-pulse delay-1000 pointer-events-none">
        ☁️
      </div>

      <div className="z-10 flex flex-col items-center animate-in zoom-in duration-700 w-full max-w-md">
        <div className="mb-8 relative">
          <Baby size={64} className="text-rose-400" />
          <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
            🤔
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-handwriting text-rose-600 mb-4 leading-tight">
          Mas e aí... <br />o que vocês acham?
        </h2>

        <p className="font-serif text-rose-800 text-lg mb-8 opacity-80">
          Todo mundo me pergunta se vou ter um maninho para jogar bola ou uma
          maninha para dividir os laços...
        </p>

        <div className="flex gap-6 w-full justify-center">
          {/* Opção Menino */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleVote("boy");
            }}
            className={`
                 flex-1 p-6 rounded-2xl border-4 transition-all duration-300 flex flex-col items-center gap-2 relative overflow-hidden
                 ${
                   voted === "boy"
                     ? "bg-blue-100 border-blue-400 scale-105 shadow-xl"
                     : "bg-white border-blue-200 hover:border-blue-300"
                 }
                 ${voted === "girl" ? "opacity-50 grayscale" : "opacity-100"}
              `}
          >
            <span className="text-4xl">🤴</span>
            <span className="font-bold text-blue-500 font-sans tracking-wider">
              MENINO
            </span>
          </button>

          {/* Opção Menina */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleVote("girl");
            }}
            className={`
                 flex-1 p-6 rounded-2xl border-4 transition-all duration-300 flex flex-col items-center gap-2 relative overflow-hidden
                 ${
                   voted === "girl"
                     ? "bg-pink-100 border-pink-400 scale-105 shadow-xl"
                     : "bg-white border-pink-200 hover:border-pink-300"
                 }
                 ${voted === "boy" ? "opacity-50 grayscale" : "opacity-100"}
              `}
          >
            <span className="text-4xl">👸</span>
            <span className="font-bold text-pink-500 font-sans tracking-wider">
              MENINA
            </span>
          </button>
        </div>

        {voted && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4">
            <p className="text-rose-900 font-bold bg-white/50 px-6 py-2 rounded-full border border-rose-200 shadow-sm">
              {voted === "boy"
                ? "Boa! Um parceiro de bagunça! 🚙"
                : "Eba! Vamos combinar os looks! 👗"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
