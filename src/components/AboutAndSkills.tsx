import { motion } from 'motion/react';

const skills = [
  { name: 'React', level: 95 },
  { name: 'Node.js', level: 90 },
  { name: 'Express', level: 90 },
  { name: 'MongoDB', level: 85 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Git', level: 80 },
  { name: 'REST API', level: 85 },
];

export default function AboutAndSkills() {
  return (
    <section className="py-20 px-8 grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10"
      >
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">About Our Mentor</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          Thank you for making MERN Stack enjoyable and helping us grow as developers. Your guidance, patience, and motivation inspire us every day. Wishing you happiness, success, good health, and many more wonderful years ahead.
        </p>
      </motion.div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-white">{skill.name}</span>
              <span className="text-cyan-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
