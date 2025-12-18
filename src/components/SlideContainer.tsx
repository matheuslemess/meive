import React, { useState } from "react";
import { CoverSlide } from "../slides/CoverSlide";
import { CarouselSlide } from "../slides/CarouselSlide";
import { RoleSlide } from "../slides/RoleSlide";
import { SecretSlide } from "../slides/SecretSlide";
import { RevealSlide } from "../slides/RevealSlide";
import { ExpectationSlide } from "../slides/ExpectationSlide";
import { GuessSlide } from "../slides/GuessSlide";

import { MusicPlayer } from "../components/MusicPlayer";

export const SlideContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const touchStartY = React.useRef<number | null>(null);

  const MUSIC_URL = "/jonas.mpeg";

  const slides = [
    { type: "cover" },
    { type: "meive-intro" },
    { type: "carousel" },
    { type: "secret" },
    { type: "reveal" },
    { type: "role" }, // Moved after Reveal
    { type: "expectation" },
    { type: "guess" }, // NEW
    {
      type: "content",
      title: "Vem Aí",
      subtitle: "Mais um membro para nossa família",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((curr) => curr + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((curr) => curr - 1);
    }
  };

  const startExperience = () => {
    setIsPlaying(true);
    nextSlide();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }

    touchStartY.current = null;
  };

  return (
    <div
      className="w-full h-[100dvh] relative overflow-hidden bg-rose-50 text-rose-950 font-sans touch-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <MusicPlayer shouldPlay={isPlaying} src={MUSIC_URL} />

      <div
        className="w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${currentSlide * 100}%)` }}
      >
        <SlideWrapper>
          <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
            <CoverSlide onStart={startExperience} />
          </div>
        </SlideWrapper>

        <SlideWrapper>
          <div className="w-full h-full flex flex-col items-center justify-center bg-rose-50 text-center relative overflow-hidden p-6">
            <div className="absolute top-10 left-10 w-32 h-32 bg-rose-200/50 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-200/40 rounded-full blur-3xl animate-pulse delay-700" />

            {/* Background Decorativo - Nuvens sutis */}
            <div className="absolute top-20 left-10 text-rose-100/50 text-8xl animate-pulse pointer-events-none">
              ☁️
            </div>
            <div className="absolute bottom-32 right-10 text-amber-100/50 text-9xl animate-pulse delay-1000 pointer-events-none">
              ☁️
            </div>

            <div className="z-10 flex flex-col items-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <div className="relative mb-8 group cursor-pointer">
                <div className="w-64 h-64 md:w-80 md:h-80 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-300 to-amber-200 rounded-[2rem] rotate-6 opacity-60 group-hover:rotate-12 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden border-4 border-white shadow-xl rotate-[-3deg] group-hover:rotate-0 transition-transform duration-700">
                    <img
                      src="/meivehey.jpeg"
                      alt="Meive"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white text-rose-950 px-6 py-3 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl shadow-lg border border-rose-100 transform rotate-12 animate-bounce">
                  <p className="font-handwriting font-bold text-lg">
                    Oi gente! ❤️
                  </p>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-handwriting text-rose-950 mb-4">
                Aqui é a Meive...
              </h2>
              <p className="text-lg text-rose-800 font-serif max-w-md">
                ...e tenho uma fofoca pra te contar!
              </p>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-rose-300/50 animate-pulse text-sm">
              (Deslize para continuar)
            </div>
          </div>
        </SlideWrapper>

        <SlideWrapper>
          <CarouselSlide />
        </SlideWrapper>

        <SlideWrapper>
          <SecretSlide />
        </SlideWrapper>

        <SlideWrapper>
          <RevealSlide isActive={currentSlide === 4} />
        </SlideWrapper>

        <SlideWrapper>
          <RoleSlide />
        </SlideWrapper>

        <SlideWrapper>
          <ExpectationSlide />
        </SlideWrapper>

        <SlideWrapper>
          <GuessSlide />
        </SlideWrapper>

        <SlideWrapper>
          <div className="w-full h-full flex flex-col items-center justify-center bg-rose-50 text-center p-8 relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-rose-200/40 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-amber-100/50 rounded-full blur-3xl animate-pulse delay-1000" />

            {/* Background Decorativo - Nuvens sutis */}
            <div className="absolute top-20 left-10 text-rose-100/50 text-8xl animate-pulse pointer-events-none">
              ☁️
            </div>
            <div className="absolute bottom-32 right-10 text-amber-100/50 text-9xl animate-pulse delay-1000 pointer-events-none">
              ☁️
            </div>

            <div className="z-10 flex flex-col items-center animate-in scale-in duration-700">
              <div className="relative mb-8 transform hover:scale-105 transition-transform duration-500">
                <div className="absolute -inset-2 bg-gradient-to-tr from-rose-400 to-amber-300 rounded-2xl opacity-70 blur-md animate-pulse" />
                <div className="w-72 h-72 md:w-80 md:h-80 relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl rotate-2">
                  <img
                    src="/pais.jpeg"
                    alt="Meus Papais"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 text-5xl animate-bounce drop-shadow-md">
                  💖
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-handwriting text-rose-600 mb-4 drop-shadow-sm">
                Bem... espero que você tenha gostado da novidade tanto quanto
                eu... 👨‍👩‍👧‍👦
              </h2>
              <p className="mb-8 font-serif text-rose-800 text-md md:text-xl max-w-md opacity-90">
                Obrigado por fazer parte da minha vida, e do meu futuro
                irmãozinho(a)...
              </p>
              <p className="mb-8 font-serif text-rose-300/60 text-xs tracking-widest uppercase">
                Feito com carinho pela Meive. 💖
              </p>
              <button
                className="px-6 py-3 bg-gradient-to-r from-rose-400 to-rose-500 text-white rounded-full font-bold shadow-lg shadow-rose-300/50 transform transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95 flex items-center gap-2 text-sm"
                onClick={() =>
                  window.open(
                    "https://wa.me/5567991368436?text=Parab%C3%A9ns%20papais!%20Que%20not%C3%ADcia%20linda!%20%F0%9F%A4%B0%E2%9D%A4%EF%B8%8F",
                    "_blank"
                  )
                }
              >
                <span>Mande os Parabéns para os meus papais!</span>
              </button>
            </div>
          </div>
        </SlideWrapper>
      </div>
    </div>
  );
};

const SlideWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full flex-shrink-0 relative">{children}</div>
);
