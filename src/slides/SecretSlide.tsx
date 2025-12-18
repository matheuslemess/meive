import { useState } from "react";
import { Lock, Fingerprint, Sparkles } from "lucide-react";

export const SecretSlide = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  const handleInteractionStart = () => {
    setIsTouching(true);
    setTimeout(() => {
      setIsRevealed(true);
      setIsTouching(false);
    }, 800);
  };

  const handleInteractionEnd = () => {
    setIsTouching(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-rose-50 text-rose-950 relative overflow-hidden p-8">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 animate-bounce delay-700 opacity-40">
          <span className="text-6xl">🤫</span>
        </div>
        <div className="absolute bottom-20 left-10 animate-pulse delay-1000 opacity-40">
          <span className="text-4xl">✨</span>
        </div>
      </div>

      <div className="z-10 flex flex-col items-center text-center max-w-lg w-full">
        {!isRevealed ? (
          <div className="flex flex-col items-center animate-in fade-in zoom-in duration-700">
            <h2 className="text-4xl md:text-5xl font-handwriting text-rose-600 mb-8 animate-pulse">
              Maas, o que vou e contar é segredo... shhh! 🤐
            </h2>

            <div
              className={`
                   relative w-32 h-32 rounded-full border-4 flex items-center justify-center cursor-pointer select-none transition-all duration-300
                   ${
                     isTouching
                       ? "border-amber-400 scale-110 bg-amber-50 shadow-[0_0_30px_rgba(251,191,36,0.4)]"
                       : "border-rose-200 bg-white shadow-lg animate-pulse-slow"
                   }
                `}
              onMouseDown={handleInteractionStart}
              onMouseUp={handleInteractionEnd}
              onTouchStart={handleInteractionStart}
              onTouchEnd={handleInteractionEnd}
            >
              {isTouching ? (
                <Fingerprint
                  size={64}
                  className="text-amber-400 animate-pulse"
                />
              ) : (
                <Lock size={48} className="text-rose-300" />
              )}

              {isTouching && (
                <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin" />
              )}
            </div>

            <p className="mt-8 text-rose-800/60 font-serif text-sm uppercase tracking-widest animate-pulse">
              {isTouching ? "Escaneando..." : "Toque e segure para descobrir"}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center animate-in zoom-in-50 duration-500">
            <div className="mb-6">
              <Sparkles
                size={48}
                className="text-amber-400 animate-spin-slow"
              />
            </div>

            <h2 className="text-3xl md:text-5xl font-handwriting text-rose-600 mb-6 leading-tight">
              A barriga da minha mamãe
              <br />
              tá crescendooo... 🤰
            </h2>

            <p className="text-lg md:text-xl text-rose-800 font-serif italic mb-8 max-w-xs">
              (E eu já descobri o porque!!!)
            </p>

            <div className="animate-bounce mt-4">
              <span className="inline-block px-6 py-3 bg-rose-100 text-rose-900 rounded-full border border-rose-200 text-sm font-bold tracking-wider shadow-sm">
                ARRASTE PRA CIMA ⬆️
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
