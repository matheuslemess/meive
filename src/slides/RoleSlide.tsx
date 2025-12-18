import { Crown, Star } from "lucide-react";

export const RoleSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-rose-50 text-center p-8 relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-amber-100/50 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-rose-100/50 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Background Decorativo - Nuvens sutis */}
      <div className="absolute top-20 left-10 text-rose-100/50 text-8xl animate-pulse pointer-events-none">
        ☁️
      </div>
      <div className="absolute bottom-32 right-10 text-amber-100/50 text-9xl animate-pulse delay-1000 pointer-events-none">
        ☁️
      </div>

      <div className="z-10 flex flex-col items-center animate-in slide-in-from-right duration-1000">
        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-yellow-200 blur-2xl opacity-40 animate-pulse" />
          <Crown
            size={80}
            className="text-amber-400 drop-shadow-lg transform -rotate-12"
          />
          <Star
            size={24}
            className="absolute -top-2 -right-4 text-rose-400 animate-bounce"
            fill="currentColor"
          />
        </div>

        <h2 className="text-3xl md:text-5xl font-handwriting text-rose-600 mb-6 leading-tigher">
          Ai, ai... ser princesa dá muito trabalho... 👑
        </h2>

        <p className="font-serif text-rose-800 text-lg md:text-xl max-w-md opacity-90 leading-relaxed mb-8">
          É muita gente pra mandar, muitos brinquedos pra espalhar...
          <br />
          <br />
          Sozinha eu não dou conta de governar essa casa...
        </p>

        <div className="flex items-center gap-2">
          <span className="text-rose-900 font-bold text-sm uppercase tracking-wider">
            Ainda bem que o reforço esta vindo!!
          </span>
        </div>
      </div>
    </div>
  );
};
