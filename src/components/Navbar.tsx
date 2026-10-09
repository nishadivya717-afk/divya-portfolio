import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight, Github } from 'lucide-react';
import { PROFILE_INFO } from '../data/defaultData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050814]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5 border-b border-slate-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
              <Terminal className="w-4 h-4" />
            </div>
            <span>Divya<span className="text-blue-500">.dev</span></span>
          </a>

          {/* Zone 2: 4-7 concise single-line text links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap shrink-0 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${
                    isActive
                      ? 'text-blue-400 font-semibold'
                      : 'hover:text-white text-slate-300'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b19] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-900/30 text-blue-400 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="pt-2 flex items-center gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors block"
            >
              Get in Touch
            </a>
            <a
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
