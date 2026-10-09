import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PROFILE_INFO } from '../data/defaultData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030611] border-t border-slate-850 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Attribution (As requested: "Designed and developed by Divya.") */}
          <div className="space-y-1 text-center md:text-left">
            <p className="text-sm font-semibold text-white">
              Designed and developed by <span className="text-blue-400">Divya</span>.
            </p>
            <p className="text-slate-500 text-xs">
              Python Full Stack Developer · BCA 2025 · FIIT 2026 · Chennai, India
            </p>
          </div>

          {/* Social Icons & Email */}
          <div className="flex items-center gap-4">
            <a
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PROFILE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 transition-colors"
              aria-label="Email Divya"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
