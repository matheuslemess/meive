import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

interface RevealSlideProps {
  isActive: boolean;
}

export const RevealSlide: React.FC<RevealSlideProps> = ({ isActive }) => {
  const hasFiredRef = useRef(false);

  useEffect(() => {
    if (isActive && !hasFiredRef.current) {
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ["#fb7185", "#fcd34d", "#ffffff"],
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ["#fb7185", "#fcd34d", "#ffffff"],
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();

      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#fb7185", "#fcd34d", "#ffffff"],
        });
      }, 500);

      hasFiredRef.current = true;
    }

    if (!isActive) {
      hasFiredRef.current = false;
    }
  }, [isActive]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-rose-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="z-10 w-full h-full flex flex-col px-4 py-6 justify-between items-center overflow-hidden">
        <div
          className={`flex-shrink-0 text-center transition-all duration-1000 transform ${
            isActive ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-handwriting text-rose-600 mb-1 rotate-[-2deg]">
            GANHEI UM ESTAGIÁRIO! 👶
          </h2>
          <p className="text-lg md:text-xl text-rose-800 font-serif">
            (Ou será um melhor amigo pra vida toda?)
          </p>
        </div>

        <div
          className={`relative flex-1 min-h-0 w-full max-w-sm my-4 flex items-center justify-center transition-all duration-1000 delay-300 ${
            isActive
              ? "scale-100 rotate-2 opacity-100"
              : "scale-90 rotate-0 opacity-0"
          }`}
        >
          <div className="relative w-auto h-full max-h-full aspect-[4/5] bg-white p-3 shadow-2xl rounded-lg flex items-center justify-center">
            <div className="w-full h-full overflow-hidden rounded relative bg-white flex items-center justify-center">
              <img
                src="/teste.jpeg"
                alt="A Revelação"
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12 text-center pointer-events-none">
                <span className="text-white font-bold text-lg tracking-wider">
                  AGORA SOMOS 4! ❤️
                </span>
              </div>
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-rose-200/80 rotate-1 shadow-sm mix-blend-multiply" />
          </div>
        </div>

        <div
          className={`flex-shrink-0 text-center transition-all duration-1000 delay-700 ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-8 py-3 bg-white/50 backdrop-blur-md rounded-full border border-rose-200 shadow-lg margin-bottom-safe">
            <p className="text-rose-900 font-bold uppercase tracking-[0.2em] text-sm">
              vamos descobrir, juntos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
