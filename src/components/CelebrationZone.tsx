import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { PartyPopper } from 'lucide-react';
import { useState } from 'react';

export default function CelebrationZone() {
  const [celebrated, setCelebrated] = useState(false);

  const handleCelebrate = () => {
    setCelebrated(true);
    // Immediate confetti burst
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#6C63FF', '#00E5FF', '#FF4ECD', '#7DF9FF', '#FFFFFF']
    });

    // Fireworks effect for a few seconds
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval as unknown as number);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#6C63FF', '#00E5FF', '#FF4ECD', '#7DF9FF', '#FFFFFF']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#6C63FF', '#00E5FF', '#FF4ECD', '#7DF9FF', '#FFFFFF']
      });
    }, 250);
  };

  return (
    <section className="py-20 px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-16">
        Let's Celebrate!
      </h2>

      {/* 3D Style Cake */}
      <div className="relative mb-20 flex flex-col items-center justify-end h-72">
         {/* Candles */}
         <div className="flex gap-6 mb-2 z-30 translate-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative flex flex-col items-center">
                {/* Flame */}
                {!celebrated && (
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 0.9, 1.1, 1], 
                      opacity: [0.8, 1, 0.8, 1, 0.9] 
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 0.5 + Math.random() * 0.5 
                    }}
                    className="w-4 h-6 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-100 rounded-t-full rounded-b-sm shadow-[0_0_20px_#f97316]"
                  />
                )}
                {/* Candle stick */}
                <div className="w-3 h-12 bg-gradient-to-r from-pink-300 via-white to-pink-200 rounded-sm shadow-inner overflow-hidden relative">
                  {/* Stripes */}
                  <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, #FF4ECD 4px, #FF4ECD 8px)' }}></div>
                </div>
              </div>
            ))}
         </div>

         {/* Cake Top Tier */}
         <div className="w-48 h-24 bg-gradient-to-b from-[#FF4ECD] to-[#c7279b] rounded-[50%] shadow-[-10px_10px_20px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center relative border-t-4 border-white/20">
            {/* Top Surface */}
            <div className="w-40 h-16 bg-[#FF4ECD] rounded-[50%] shadow-[inset_0_-5px_15px_rgba(0,0,0,0.2)]"></div>
            
            {/* Frosting dollops */}
            <div className="absolute -bottom-2 w-full flex justify-around px-2 z-20">
              {[...Array(6)].map((_, i) => (
                 <div key={i} className="w-6 h-6 bg-white rounded-full shadow-[0_5px_5px_rgba(0,0,0,0.2)]"></div>
              ))}
            </div>
         </div>

         {/* Cake Bottom Tier */}
         <div className="w-72 h-32 bg-gradient-to-b from-[#6C63FF] to-[#3f39a6] rounded-[50%] shadow-[-15px_15px_30px_rgba(0,0,0,0.6)] -mt-14 z-10 flex items-center justify-center relative border-t-4 border-white/20">
            {/* Top Surface */}
            <div className="w-60 h-24 bg-[#6C63FF] rounded-[50%] shadow-[inset_0_-8px_15px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center relative"></div>
            
            {/* Frosting drips */}
            <div className="absolute top-0 w-full h-12 flex justify-around px-6 z-20">
               {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-7 bg-white rounded-b-full shadow-[0_4px_6px_rgba(0,0,0,0.3)]" style={{ height: `${20 + Math.random() * 20}px` }}></div>
               ))}
            </div>

            {/* Cake Text */}
            {celebrated && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="absolute z-30 flex flex-col items-center justify-center mt-12 w-full px-4 text-center"
              >
                <span className="text-white font-bold text-lg drop-shadow-md tracking-wider">
                  HAPPY BIRTHDAY
                </span>
                <span className="text-cyan-300 font-bold text-sm drop-shadow-md">
                  HIMANSHU SIR
                </span>
              </motion.div>
            )}
         </div>
         
         {/* Plate */}
         <div className="w-[22rem] h-20 bg-gray-400/20 backdrop-blur-xl rounded-[50%] border-t border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.9)] -mt-16 z-0"></div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCelebrate}
        className="flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-2xl font-bold text-white shadow-[0_0_25px_rgba(0,229,255,0.6)] hover:shadow-[0_0_40px_rgba(0,229,255,0.9)] transition-shadow"
      >
        <PartyPopper size={28} />
        Celebrate!
      </motion.button>
    </section>
  );
}
