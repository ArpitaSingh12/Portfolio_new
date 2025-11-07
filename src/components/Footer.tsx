import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-12 relative border-t border-cyan-500/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-400">
            👩‍💻 Designed & Developed by{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Arpita Dinesh Singh
            </span>{' '}
            | © 2025 | Thanks for Playing ✨
          </p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>
    </footer>
  );
}