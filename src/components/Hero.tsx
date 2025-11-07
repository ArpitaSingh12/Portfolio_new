import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ChevronDown, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/20" />
      
      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* XP Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Badge className="bg-gradient-to-r from-cyan-500 to-violet-500 border-0 px-6 py-2 shadow-lg shadow-cyan-500/50">
              XP Level: 3 Engineer 🧠
            </Badge>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="px-2 pb-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient break-words leading-tight pb-2" style={{ lineHeight: '1.3' }}>
              ✨ Arpita Dinesh Singh ✨
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300"
          >
            AI & Backend Developer | Flutter • Node.js • Machine Learning
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <a
              href="https://linkedin.com/in/arpita-singh-383617218"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-all hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/ArpitaSingh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 hover:text-violet-300 transition-all hover:shadow-lg hover:shadow-violet-500/50 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://instagram.com/arpitasingh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-fuchsia-500/10 hover:bg-fuchsia-500/20 text-fuchsia-400 hover:text-fuchsia-300 transition-all hover:shadow-lg hover:shadow-fuchsia-500/50 hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a
              href="mailto:arpitadineshsingh@gmail.com"
              className="p-3 rounded-full bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 hover:text-pink-300 transition-all hover:shadow-lg hover:shadow-pink-500/50 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 border-0 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transition-all hover:scale-105"
            >
              🎮 Start Game / Enter Portfolio
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block text-cyan-400"
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}