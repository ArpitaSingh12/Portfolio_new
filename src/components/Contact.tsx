import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message received! 🎮 Arpita will respond soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-4">
            📩 Let's Collaborate!
          </h2>
          <p className="text-slate-400 text-lg">Get in touch for opportunities and projects</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/50 border-cyan-500/30 p-8 md:p-12 backdrop-blur-sm shadow-2xl shadow-cyan-500/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-slate-900/50 border-slate-600 focus:border-cyan-500 text-slate-200 placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-slate-900/50 border-slate-600 focus:border-cyan-500 text-slate-200 placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-slate-900/50 border-slate-600 focus:border-cyan-500 text-slate-200 placeholder:text-slate-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 border-0 shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transition-all"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-slate-700">
                <p className="text-center text-slate-400 mb-4">Or connect directly:</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://linkedin.com/in/arpita-singh-383617218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-all hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/ArpitaSingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 hover:text-violet-300 transition-all hover:shadow-lg hover:shadow-violet-500/50 hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="mailto:arpitadineshsingh@gmail.com"
                    className="p-4 rounded-full bg-fuchsia-500/10 hover:bg-fuchsia-500/20 text-fuchsia-400 hover:text-fuchsia-300 transition-all hover:shadow-lg hover:shadow-fuchsia-500/50 hover:scale-110"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}