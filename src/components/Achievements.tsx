import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Award, Cloud, Code, BarChart3, Trophy } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Machine Learning',
    issuer: 'Andrew Ng',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    issuer: 'IBM',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Code,
    title: 'Python Bootcamp',
    issuer: 'Jose Portilla',
    color: 'from-fuchsia-500 to-pink-500'
  },
  {
    icon: Trophy,
    title: 'Open Source',
    issuer: 'Linux Foundation',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: BarChart3,
    title: 'Power BI',
    issuer: 'Microsoft',
    color: 'from-orange-500 to-red-500'
  }
];

const activities = [
  {
    emoji: '🏀',
    title: 'ENba Basketball Semi-finalist',
    description: 'Competed at inter-college level'
  },
  {
    emoji: '☁️',
    title: 'Cloud & GitHub Workshops',
    description: 'Conducted technical workshops for students'
  },
  {
    emoji: '👩‍🏫',
    title: 'Web-Genesis Mentor',
    description: 'Mentored juniors in web development'
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-4">
            🏅 Badges Earned
          </h2>
          <p className="text-slate-400 text-lg">Certifications and achievements unlocked</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Card className={`bg-gradient-to-br ${achievement.color} p-4 md:p-6 border-0 text-center shadow-lg hover:shadow-2xl transition-all cursor-pointer aspect-square flex flex-col items-center justify-center`}>
                <achievement.icon className="w-8 h-8 md:w-12 md:h-12 text-white mb-2" />
                <p className="text-white text-xs md:text-sm mb-1">{achievement.title}</p>
                <p className="text-white/70 text-xs">{achievement.issuer}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            🎮 Extra Life
          </h2>
          <p className="text-slate-400 text-lg">Beyond the code</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-slate-800/50 border-cyan-500/30 p-6 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/20 transition-all text-center h-full">
                <div className="text-5xl mb-4">{activity.emoji}</div>
                <h3 className="text-lg text-cyan-400 mb-2">{activity.title}</h3>
                <p className="text-slate-400 text-sm">{activity.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}