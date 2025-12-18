import { ClipboardList, CheckCircle2 } from "lucide-react";

export const ExpectationSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-rose-50 text-center p-8 relative overflow-hidden">
      {/* Decoração de fundo sutil */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-gradient-to-r from-transparent via-rose-100/30 to-transparent rotate-[-10deg]" />

      {/* Background Decorativo - Nuvens sutis */}
      <div className="absolute top-20 left-10 text-rose-100/50 text-8xl animate-pulse pointer-events-none">
        ☁️
      </div>
      <div className="absolute bottom-32 right-10 text-amber-100/50 text-9xl animate-pulse delay-1000 pointer-events-none">
        ☁️
      </div>

      <div className="z-10 flex flex-col items-center max-w-md w-full animate-in slide-in-from-bottom duration-1000">
        <div className="mb-6 p-4 bg-white rounded-full shadow-xl shadow-rose-100 ring-4 ring-rose-50">
          <ClipboardList size={48} className="text-rose-500" />
        </div>

        <h2 className="text-3xl md:text-5xl font-handwriting text-rose-600 mb-2">
          Aliás 📝
        </h2>
        <p className="text-rose-800/70 font-serif italic mb-8">
          Já montei a grade curricular do estagiário:
        </p>

        {/* Lista de Tarefas / Checklist */}
        <div className="w-full bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-rose-100 space-y-4 text-left">
          <CheckItem text="Chorar em estéreo (Madrugadas)" delay="100ms" />
          <CheckItem text="Derreter o coração da vovó" delay="300ms" />
          <CheckItem text="Dividir a bagunça (e a culpa)" delay="500ms" />
          <CheckItem
            text="Ser meu melhor amigo(a) pra sempre"
            delay="700ms"
            highlight
          />
        </div>
      </div>
      <p className="text-rose-800/70 font-serif italic mt-2">
        E você vem junto nessa!
      </p>
    </div>
  );
};

const CheckItem = ({
  text,
  delay,
  highlight = false,
}: {
  text: string;
  delay: string;
  highlight?: boolean;
}) => (
  <div
    className={`flex items-start gap-3 animate-in fade-in slide-in-from-left-4 fill-mode-both`}
    style={{ animationDelay: delay }}
  >
    <CheckCircle2
      className={`flex-shrink-0 mt-0.5 ${
        highlight ? "text-amber-500" : "text-rose-400"
      }`}
      size={20}
    />
    <span
      className={`font-sans text-sm md:text-base ${
        highlight ? "text-amber-600 font-bold" : "text-rose-900"
      }`}
    >
      {text}
    </span>
  </div>
);
