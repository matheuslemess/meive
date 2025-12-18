import React from "react";

interface ContentSlideProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
}

export const ContentSlide: React.FC<ContentSlideProps> = ({
  title,
  subtitle,
  children,
  backgroundImage,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 p-8 text-center relative overflow-hidden">
      {backgroundImage && (
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center transition-transform duration-[3s] hover:scale-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      <div className="z-10 max-w-lg w-full bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
        <h2 className="text-3xl font-display text-amber-50 mb-4">{title}</h2>
        {subtitle && (
          <p className="text-amber-100/80 mb-6 font-light">{subtitle}</p>
        )}

        <div className="text-zinc-300">{children}</div>
      </div>
    </div>
  );
};
