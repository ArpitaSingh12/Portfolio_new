import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Lightbulb, Users, BookOpen } from 'lucide-react';

const badges = [
  { icon: Lightbulb, label: 'Innovator', color: 'from-cyan-500 to-blue-500' },
  { icon: Users, label: 'Team Player', color: 'from-violet-500 to-purple-500' },
  { icon: BookOpen, label: 'Mentor', color: 'from-fuchsia-500 to-pink-500' }
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-4">
            👩‍💻 Player Profile
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Avatar/Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-cyan-500 via-violet-500 to-fuchsia-500 p-1 shadow-2xl shadow-violet-500/50">
                <div className="w-full h-full rounded-3xl bg-slate-900 flex items-center justify-center">
                  <div className="text-8xl">👩‍💻</div>
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl px-4 py-2 shadow-lg"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-sm">Level 3 🎮</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-slate-800/50 border-cyan-500/30 p-6 md:p-8 backdrop-blur-sm shadow-xl shadow-cyan-500/10">
              <p className="text-slate-300 text-lg leading-relaxed">
                Hi, I'm <span className="text-cyan-400">Arpita</span> — a curious Computer Engineering student from <span className="text-violet-400">VJTI</span> who loves building intelligent, creative tech solutions. I specialize in <span className="text-fuchsia-400">AI</span>, <span className="text-cyan-400">backend systems</span>, and <span className="text-violet-400">interactive design</span>. When I'm not coding, I'm mentoring peers or competing on the basketball court! 🏀
              </p>
            </Card>

            {/* Achievement Badges */}
            <div className="grid grid-cols-3 gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className={`bg-gradient-to-br ${badge.color} p-4 border-0 text-center shadow-lg hover:shadow-2xl transition-all cursor-pointer`}>
                    <badge.icon className="w-8 h-8 mx-auto mb-2 text-white" />
                    <p className="text-sm text-white">{badge.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
