import React, { useState } from "react";
import { Play, Sparkles, Heart } from "lucide-react";

interface CoverSlideProps {
  onStart: () => void;
}

export const CoverSlide: React.FC<CoverSlideProps> = ({ onStart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full h-full relative flex flex-col items-center justify-center bg-rose-50 overflow-hidden cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-gradient-to-br from-rose-200/30 to-amber-100/20 rounded-full blur-[120px] animate-pulse duration-[4s]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-t from-rose-200/40 to-transparent rounded-full blur-[100px] animate-pulse duration-[5s] delay-1000" />
      </div>

      {/* Background Decorativo - Nuvens sutis */}
      <div className="absolute top-20 left-10 text-rose-100/50 text-8xl animate-pulse pointer-events-none">
        ☁️
      </div>
      <div className="absolute bottom-32 right-10 text-amber-100/50 text-9xl animate-pulse delay-1000 pointer-events-none">
        ☁️
      </div>

      <div className="z-10 flex flex-col items-center text-center p-8 max-w-md w-full relative">
        <div className="mb-8 animate-fade-in-up">
          <div className="relative">
            <Heart className="text-rose-400 w-12 h-12 fill-rose-100" />
            <Sparkles className="absolute -top-4 -right-6 text-amber-400 w-6 h-6 animate-bounce delay-700" />
          </div>
        </div>

        <h1
          className="text-5xl md:text-7xl font-display text-rose-950 mb-4 tracking-wide relative animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Olá!
          <span className="absolute -right-4 top-0 text-3xl animate-pulse">
            ✨
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl font-handwriting text-rose-800 mb-12 opacity-80 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          "Tenho uma coisinha pra contar..."
        </p>

        <div
          onClick={onStart}
          className={`
            group relative px-8 py-4 bg-white/80 backdrop-blur-md border border-rose-200 rounded-full shadow-lg cursor-pointer
            transform transition-all duration-500 ease-out flex items-center gap-3
            ${
              isHovered
                ? "scale-105 shadow-xl border-rose-300"
                : "scale-100 animate-pulse"
            }
          `}
          style={{ animationDelay: "1s", animationFillMode: "both" }}
        >
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <Play size={16} fill="currentColor" className="ml-0.5" />
          </div>
          <span className="font-sans font-medium text-rose-900 tracking-wider">
            ABRIR MENSAGEM
          </span>

          <span className="absolute -inset-1 rounded-full border border-rose-300 opacity-0 group-hover:animate-ping" />
        </div>

        <div
          className="absolute -bottom-32 left-0 right-0 text-center animate-fade-in-up"
          style={{ animationDelay: "1.5s" }}
        >
          <p className="text-xs text-rose-400 uppercase tracking-[0.3em]">
            Ligue o som 🔊
          </p>
        </div>
      </div>
    </div>
  );
};
