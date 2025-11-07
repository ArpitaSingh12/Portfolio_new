import { Toaster } from './components/ui/sonner';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster position="bottom-right" />
    </div>
  );
}
