import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import confetti from "canvas-confetti";
import { useEffect } from "react";

import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";

export default function Hero() {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
        
        {/* Left Image */}
        <motion.img
          src={hero1}
          alt="Hero 1"
          className="w-72 h-48 md:w-80 md:h-56 object-cover rounded-3xl border-4 border-cyan-400 shadow-[0_0_35px_rgba(0,229,255,0.45)]"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        {/* Heading */}
        <div>
          <h1 className="text-5xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-white to-purple-500 bg-clip-text text-transparent mb-6">
            HAPPY BIRTHDAY
          </h1>

          <div className="text-3xl md:text-6xl font-bold text-white min-h-[70px]">
            <TypeAnimation
              sequence={[
                "HIMANSHU SIR",
                3000,
                "MERN DEV",
                3000,
                "CODER",
                3000,
                "FULL STACK DEVELOPER",
                3000,
                "BEST MENTOR",
                3000,
              ]}
              wrapper="span"
              cursor
              repeat={Infinity}
            />
          </div>
        </div>

        {/* Right Image */}
        <motion.img
          src={hero2}
          alt="Hero 2"
          className="w-72 h-48 md:w-80 md:h-56 object-cover rounded-3xl border-4 border-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.45)]"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
        />
      </div>
    </section>
  );
}
