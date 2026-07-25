import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#050816] text-white z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="font-mono text-xl mb-12">
        <TypeAnimation
          sequence={[
            'Initializing Birthday Website...', 1000,
            'Loading Memories...', 1000,
            'Loading Images...', 1000,
            'Loading Happiness...', 1000,
            'Complete.', 1000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={0}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cyan-400 font-medium tracking-widest uppercase text-sm drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] animate-pulse">
          Scroll to view more
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-cyan-400 drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]"
        >
          ↓
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
