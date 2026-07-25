import { motion } from 'motion/react';
import { FaReact, FaNodeJs, FaHtml5 } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const icons = [FaReact, FaNodeJs, FaHtml5];
const colors = ['#61DAFB', '#68A063', '#E34F26'];

export default function FloatingTechIcons() {
  const [items, setItems] = useState<{ id: number; Icon: any; color: string; size: number; startX: number; startY: number; endX: number; endY: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate random items on client side to avoid hydration issues
    const generated = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      Icon: icons[i % icons.length],
      color: colors[i % colors.length],
      size: Math.random() * 40 + 20, // 20 to 60px
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      endX: Math.random() * 100,
      endY: Math.random() * 100,
      duration: Math.random() * 40 + 40, // 40 to 80 seconds
      delay: Math.random() * 10,
    }));
    setItems(generated);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-25">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute drop-shadow-[0_0_10px_currentColor]"
          style={{ color: item.color }}
          initial={{
            x: `${item.startX}vw`,
            y: `${item.startY}vh`,
            rotate: 0,
          }}
          animate={{
            x: [`${item.startX}vw`, `${item.endX}vw`, `${item.startX}vw`],
            y: [`${item.startY}vh`, `${item.endY}vh`, `${item.startY}vh`],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "linear",
            delay: item.delay,
          }}
        >
          <item.Icon size={item.size} />
        </motion.div>
      ))}
    </div>
  );
}
