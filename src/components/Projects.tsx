import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Project 1: Meal-Match',
    subtitle: 'Recipe Generator App',
    description: 'AI-powered personalized recipe recommendations from text/audio input.',
    tools: ['Flutter', 'Dart', 'KNN', 'Firebase'],
    reward: '🍳 UI & Recommendation Pro',
    gradient: 'from-cyan-500 to-blue-500',
    glowColor: 'cyan'
  },
  {
    title: 'Project 2: PadhaiPal',
    subtitle: 'Educational Platform',
    description: 'Converts handwritten notes to audio and recommends YouTube learning resources.',
    tools: ['Node.js', 'OCR', 'Machine Learning'],
    reward: '📚 EdTech Innovator',
    gradient: 'from-violet-500 to-purple-500',
    glowColor: 'violet'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-4">
            🎯 My Projects
          </h2>
          <p className="text-slate-400 text-lg">Completed projects that earned me XP</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card
                className={`relative bg-slate-800/50 border-2 border-${project.glowColor}-500/30 hover:border-${project.glowColor}-500/60 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-${project.glowColor}-500/30 group overflow-hidden`}
              >
                {/* Glowing border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className={`text-2xl md:text-3xl bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-2`}>
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="outline"
                        className="border-slate-600 text-slate-300"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-center">
                    <Button
                      className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 border-0 shadow-lg transition-all`}
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View Project
                    </Button>
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