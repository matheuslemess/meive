import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  shouldPlay: boolean;
  src: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  shouldPlay,
  src,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      if (!hasStarted) {
        audioRef.current
          .play()
          .then(() => setHasStarted(true))
          .catch((e) =>
            console.log(
              "Aguardando interação do usuário para tocar áudio...",
              e
            )
          );
      }
    }
  }, [shouldPlay, hasStarted]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!shouldPlay) return null;

  return (
    <button
      onClick={toggleMute}
      className="fixed top-4 right-4 z-50 p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all ring-1 ring-white/20"
      aria-label={isMuted ? "Ativar som" : "Mudo"}
    >
      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      <audio ref={audioRef} src={src} loop />
    </button>
  );
};
