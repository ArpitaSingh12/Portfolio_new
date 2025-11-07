import { motion } from 'motion/react';
import { Card } from './ui/card';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    institution: 'VJTI, Mumbai',
    degree: 'B.Tech in Computer Engineering',
    achievement: 'CGPA: 8.01',
    color: 'from-cyan-500 to-blue-500',
    year: '2023 - 2027'
  },
  {
    icon: Award,
    institution: 'Poddar Brio International School',
    degree: 'HSC',
    achievement: 'MHT-CET 99.97%ile (State Rank 47)',
    color: 'from-violet-500 to-purple-500',
    year: '2023'
  },
  {
    icon: BookOpen,
    institution: 'EuroSchool Airoli',
    degree: 'SSC',
    achievement: '97.2%',
    color: 'from-fuchsia-500 to-pink-500',
    year: '2021'
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-4">
            🎓 Training Grounds
          </h2>
          <p className="text-slate-400 text-lg">My educational journey and milestones</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 p-6 md:p-8 backdrop-blur-sm hover:shadow-2xl transition-all hover:scale-105 group">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Icon */}
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${edu.color} shadow-lg group-hover:shadow-2xl transition-all shrink-0`}>
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className={`text-xl md:text-2xl bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                        {edu.institution}
                      </h3>
                      <span className="text-slate-400 text-sm md:text-base mt-1 md:mt-0">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-slate-300 mb-2">{edu.degree}</p>
                    <div className={`inline-block bg-gradient-to-r ${edu.color} rounded-lg px-4 py-2 shadow-lg`}>
                      <p className="text-white text-sm">{edu.achievement}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}