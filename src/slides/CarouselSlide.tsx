import { useState } from "react";

const IMAGES = [
  "/img/ana.jpeg",
  "/img/bisa.jpeg",
  "/img/ceci.jpeg",
  "/img/dani.jpeg",
  "/img/danielelali.jpeg",
  "/img/julia.jpeg",
  "/img/luiza.jpeg",
  "/img/mi.jpeg",
  "/img/paulo.jpeg",
  "/img/thay.jpeg",
  "/img/tiaevo.jpeg",
  "/img/tiallai.jpeg",
  "/img/tiathay.jpeg",
  "/img/vos.jpeg",
  "/img/vovo.jpeg",
];

export const CarouselSlide = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const col1 = IMAGES;
  const col2 = [...IMAGES].reverse();
  const col3 = [...IMAGES.slice(6), ...IMAGES.slice(0, 6)];

  const renderColumn = (
    images: string[],
    animationClass: string,
    colIndex: number
  ) => (
    <div className="h-full overflow-hidden relative w-full">
      <div className={`flex flex-col gap-4 w-full ${animationClass}`}>
        {[...images, ...images, ...images, ...images].map((src, i) => {
          const typeIndex = (i + colIndex) % 3;

          let shapeClass = "";
          let borderClass = "";

          if (typeIndex === 0) {
            shapeClass = "rounded-full aspect-square";
            borderClass = "border-2 border-white shadow-md";
          } else if (typeIndex === 1) {
            shapeClass = "rounded-lg aspect-[4/5]";
            borderClass = "border-2 border-white shadow-md p-1 bg-white";
          } else {
            shapeClass = "aspect-square";
            borderClass = "drop-shadow-md";
          }

          return (
            <div
              key={`${colIndex}-${i}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(src);
              }}
              className={`
                    relative w-full flex-shrink-0 cursor-pointer transition-transform hover:scale-105 hover:z-50
                    ${shapeClass} ${borderClass} ${
                typeIndex === 1 ? "" : "overflow-hidden"
              }
                  `}
            >
              {typeIndex === 1 ? (
                <div className="w-full h-full rounded-sm overflow-hidden bg-gray-100">
                  <img
                    src={src}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : typeIndex === 2 ? (
                <div className="w-full h-full drop-shadow-md">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <clipPath id={`clip-heart-${colIndex}-${i}`}>
                        <path d="M50 90 C 10 50 0 30 20 10 C 40 -10 50 20 50 20 C 50 20 60 -10 80 10 C 100 30 90 50 50 90 Z" />
                      </clipPath>
                    </defs>
                    <image
                      href={src}
                      width="100"
                      height="100"
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#clip-heart-${colIndex}-${i})`}
                    />
                  </svg>
                </div>
              ) : (
                <img
                  src={src}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}

              {typeIndex !== 1 && (
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-full h-full bg-rose-50 relative overflow-hidden flex flex-col pt-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-rose-200/40 animate-pulse text-6xl">
          ❤️
        </div>
        <div className="absolute bottom-20 right-10 text-amber-200/40 animate-bounce text-4xl delay-700">
          ⭐
        </div>

        {/* Background Decorativo - Nuvens sutis (Match Style) */}
        <div className="absolute top-20 left-10 text-rose-100/50 text-8xl animate-pulse">
          ☁️
        </div>
        <div className="absolute bottom-32 right-10 text-amber-100/50 text-9xl animate-pulse delay-1000">
          ☁️
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 z-[60] bg-gradient-to-b from-rose-100 via-rose-50 to-transparent pt-8 pb-12 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-handwriting text-rose-600 mb-2 drop-shadow-sm">
          Antes... 👑
        </h2>
        <p className="text-rose-800/80 text-base font-serif max-w-lg mx-auto leading-relaxed ">
          Quero agradecer por ter feito parte desses meus quase dois aninhos de
          vida e por ser alguém tão especial e importante para mim e para os
          meus papais!
        </p>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-3 md:gap-5 px-3 h-full overflow-hidden mask-fade-vertical">
        {renderColumn(col1, "animate-marquee-vertical", 0)}

        <div className="-mt-20 h-full w-full">
          {renderColumn(col2, "animate-marquee-vertical-reverse", 1)}
        </div>

        <div className="-mt-10 h-full w-full">
          {renderColumn(col3, "animate-marquee-vertical", 2)}
        </div>
      </div>

      {selectedImage && (
        <div
          className="absolute inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-8 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative transform animate-in zoom-in-95">
            <img
              src={selectedImage}
              className="max-w-full max-h-[80vh] rounded-lg shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};
