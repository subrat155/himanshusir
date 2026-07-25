import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-6">
        <motion.img 
          src="/src/assets/images/hero1.jpg" 
          alt="Memory 1" 
          className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover border-4 border-cyan-400 shadow-[0_0_20px_rgba(0,229,255,0.5)] rotate-[-6deg]"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 text-center">
          HAPPY BIRTHDAY
        </h1>
        <motion.img 
          src="/src/assets/images/hero2.jpg" 
          alt="Memory 2" 
          className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover border-4 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] rotate-[6deg]"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
        />
      </div>
      <div className="text-4xl md:text-6xl font-bold text-white min-h-[1.5em]">
        <TypeAnimation
          sequence={[
            'HIMANSHU SIR', 3000,
            'MERN DEV', 3000,
            'CODER', 3000,
            'FULL STACK DEVELOPER', 3000,
            'BEST MENTOR', 3000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
        />
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-xl mt-8 text-gray-300"
      >
        Thank you for inspiring us to become better developers.
      </motion.p>

    </section>
  );
}
