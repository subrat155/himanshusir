import { motion } from 'motion/react';
import { Heart, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-white/5 backdrop-blur-md border-t border-white/10 text-center">
      <h3 className="text-2xl font-bold mb-4">Made with <Heart className="inline text-red-500 animate-pulse" /> on 26 july 2026</h3>
      <p className="text-gray-400">Design by Batch-JANUARY, 2026</p>
      <div className="flex justify-center gap-4 mt-6">
        <Github size={24} />
      </div>
      <p className="mt-8 text-sm text-gray-500">© 2026</p>
    </footer>
  );
}
