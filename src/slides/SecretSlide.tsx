import { useState } from "react";
import { Sparkles } from "lucide-react";

export const SecretSlide = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-rose-50 text-rose-950 relative overflow-hidden p-6">
      {/* Background Decorativo - Nuvens sutis */}
      <div className="absolute top-20 left-10 text-rose-100/50 text-8xl animate-pulse">
        ☁️
      </div>
      <div className="absolute bottom-32 right-10 text-amber-100/50 text-9xl animate-pulse delay-1000">
        ☁️
      </div>

      <div className="relative w-full max-w-md h-full flex flex-col items-center justify-center">
        {/* CONTEÚDO REVELADO (Fica atrás das mãos) */}
        <div
          className={`
            flex flex-col items-center transition-all duration-1000 delay-300
            ${isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-90"}
        `}
        >
          <div className="mb-6 animate-bounce">
            <Sparkles size={56} className="text-amber-400" />
          </div>

          <h2 className="text-3xl md:text-5xl font-handwriting text-rose-600 mb-6 leading-tight text-center">
            A barriga da mamãe...
          </h2>

          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border-2 border-dashed border-rose-300 shadow-lg transform rotate-[-2deg]">
            <p className="text-xl md:text-2xl font-serif text-rose-900 font-bold text-center">
              ...tá crescendooo!!! 🤰
            </p>
            <div className="w-16 h-1 bg-rose-300 mx-auto my-3 rounded-full" />
            <p className="text-sm text-rose-700/60 font-handwriting text-center">
              (Eu já desconfiava...)
            </p>
          </div>

          <p className="mt-12 text-rose-400/80 text-sm uppercase tracking-widest animate-pulse">
            Deslize para ver ⬇️
          </p>
        </div>

        {/* CAMADA DE INTERAÇÃO (MÃOS / PEEKABOO) */}
        <div
          className={`absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-500 ${
            isRevealed ? "pointer-events-none" : ""
          }`}
          onClick={() => setIsRevealed(true)}
        >
          {/* Texto de chamada */}
          <h2
            className={`text-4xl font-handwriting text-rose-500/80 mb-8 transition-opacity duration-300 ${
              isRevealed ? "opacity-0" : "opacity-100"
            }`}
          >
            Você já imagina que é?? 🙈
          </h2>

          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Mão Esquerda */}
            <div
              className={`
                    absolute left-0 text-[8rem] leading-none transform transition-transform duration-1000 ease-in-out
                    ${
                      isRevealed
                        ? "-translate-x-full -rotate-12 opacity-0"
                        : "translate-x-4 rotate-0"
                    }
                 `}
            >
              🤚
            </div>

            {/* Mão Direita */}
            <div
              className={`
                    absolute right-0 text-[8rem] leading-none transform transition-transform duration-1000 ease-in-out scale-x-[-1]
                    ${
                      isRevealed
                        ? "translate-x-full rotate-12 opacity-0"
                        : "-translate-x-4 rotate-0"
                    }
                 `}
            >
              🤚
            </div>

            {/* Olhinhos espiando no meio (opcional, só pra graça) */}
            {!isRevealed && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl animate-pulse">
                👀
              </div>
            )}
          </div>

          <p
            className={`mt-8 text-rose-500/80 font-bold uppercase tracking-widest text-sm animate-bounce transition-opacity duration-300 ${
              isRevealed ? "opacity-0" : "opacity-100"
            }`}
          >
            Toque para descobrir
          </p>
        </div>
      </div>
    </div>
  );
};
