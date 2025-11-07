import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Code2, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'C++', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 75 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'JavaScript', level: 80 }
    ]
  },
  {
    title: 'Frameworks/Tools',
    icon: Wrench,
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Flutter', level: 85 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Firebase', level: 80 },
      { name: 'GitHub', level: 90 }
    ]
  },
  {
    title: 'Concepts',
    icon: Brain,
    color: 'from-fuchsia-500 to-pink-500',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'DSA', level: 80 },
      { name: 'Web Development', level: 85 },
      { name: 'App Development', level: 90 }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-4">
            🧠 My Power-Ups
          </h2>
          <p className="text-slate-400 text-lg">Skills I've mastered on my journey</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 p-6 backdrop-blur-sm hover:shadow-2xl transition-all h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-500">
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: skillIndex * 0.1 + 0.3 }}
                            className="text-cyan-400"
                          >
                            +{skill.level} XP
                          </motion.span>
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-slate-700"
                      />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
