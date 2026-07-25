import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Attempt to play on mount, might be blocked by browser policy
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
      <audio ref={audioRef} src="/src/assets/audio/birthday.mp3" loop />
      <button onClick={togglePlay} className="p-2 hover:bg-white/20 rounded-full">
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <button onClick={toggleMute} className="p-2 hover:bg-white/20 rounded-full">
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      {isPlaying && (
        <div className="flex items-center gap-0.5 h-4">
          {[1,2,3].map(i => (
            <motion.div key={i} className="w-1 bg-cyan-400" 
              animate={{ height: [4, 16, 4] }} 
              transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
