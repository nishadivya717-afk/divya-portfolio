/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { INITIAL_PROJECTS } from './data/defaultData';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Manage editable projects with localStorage persistence
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('divya_portfolio_projects');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((p: Project) => ({
            ...p,
            githubUrl: p.githubUrl?.replace('https://github.com/divya-dev', 'https://github.com/nishadivya717-afk') || p.githubUrl
          }));
        }
      }
    } catch (e) {
      console.warn('Failed to load projects from localStorage', e);
    }
    return INITIAL_PROJECTS;
  });

  // Save projects to localStorage whenever modified
  useEffect(() => {
    try {
      localStorage.setItem('divya_portfolio_projects', JSON.stringify(projects));
    } catch (e) {
      console.warn('Failed to persist projects to localStorage', e);
    }
  }, [projects]);

  // Section Observer for active navigation indicator
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'resume', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUpdateProject = (updated: Project) => {
    setProjects(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const handleResetProjects = () => {
    if (window.confirm('Reset all projects back to original default descriptions and details?')) {
      setProjects(INITIAL_PROJECTS);
      try {
        localStorage.removeItem('divya_portfolio_projects');
      } catch (e) {
        // ignore
      }
    }
  };

  const handleOpenResume = () => {
    const resumeEl = document.getElementById('resume');
    if (resumeEl) {
      resumeEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050814] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResumeModal={handleOpenResume} />
        <About />
        <Skills />
        <Projects
          projects={projects}
          onUpdateProject={handleUpdateProject}
          onResetProjects={handleResetProjects}
        />
        <Education />
        <Resume projects={projects} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
