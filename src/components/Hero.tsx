import React, { useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Code2, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { HERO_ASSETS, PROFILE_INFO } from '../data/defaultData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'python' | 'react'>('python');

  const pythonSnippet = `# app.py - Python Flask REST API
from flask import Flask, jsonify, request
import sqlite3

app = Flask(__name__)

@app.route('/api/projects', methods=['GET'])
def get_portfolio_projects():
    # Fetching real full-stack project data
    projects = [
        {"title": "Electronics Portal", "tech": "React + Axios"},
        {"title": "Expense Tracker", "tech": "Flask + SQLite"},
        {"title": "PathForge AI", "tech": "React + TS"}
    ]
    return jsonify({"developer": "Divya", "status": "Ready", "data": projects})

if __name__ == '__main__':
    app.run(debug=True, port=5000)`;

  const reactSnippet = `// PortfolioComponent.tsx - React Client
import React, { useEffect, useState } from 'react';

export const DeveloperProfile = () => {
  const [ready, setReady] = useState(true);

  return (
    <div className="developer-card">
      <h2>Divya · Python Full Stack Developer</h2>
      <p>Building Modern Web Applications with Python and React</p>
      <div className="status-badge">Available for Chennai roles</div>
    </div>
  );
};`;

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Editorial kicker (clean unboxed text with typographic separator, zero-pill) */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span className="text-blue-400">Full Stack Engineering</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                Chennai, Tamil Nadu
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-medium">BCA 2025 · FIIT 2026</span>
            </div>

            {/* Name & Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">Divya</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-200">
                Python Full Stack Developer
              </p>
            </div>

            {/* Tagline */}
            <p className="text-lg text-blue-300/90 font-medium italic border-l-2 border-blue-500 pl-3">
              "{PROFILE_INFO.tagline}"
            </p>

            {/* Short Introduction */}
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl" style={{ textWrap: 'balance' }}>
              I am a BCA graduate (2025) and passionate aspiring software developer with intensive Python Full Stack Developer training from FIIT (2026). I build responsive web interfaces, robust backend services, RESTful APIs, and database-driven applications with clean code and problem-solving focus.
            </p>

            {/* Call to Actions & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>

              {/* Social buttons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PROFILE_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  aria-label="Divya on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PROFILE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  aria-label="Divya on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick trust notes for recruiters */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Ready for Full-Time Roles
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Immediate Joiner
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Chennai & Remote
              </span>
            </div>

          </div>

          {/* Right Column: High-Fidelity Workspace & Interactive Code Snippet */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-3 shadow-2xl backdrop-blur-sm overflow-hidden group">
              
              {/* Workspace Image Preview */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-950">
                <img
                  src={HERO_ASSETS.heroWorkspaceImg}
                  alt="Modern developer workspace showing code editor and Python full stack environment"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-[#050814]/40 to-transparent" />
                
                {/* Tech Badges Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                  <span className="font-mono bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-slate-700/60 text-blue-300">
                    Python 3.11 · Django · React
                  </span>
                  <span className="bg-blue-600/80 backdrop-blur-md px-2.5 py-1 rounded text-white font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Fresher Ready
                  </span>
                </div>
              </div>

              {/* Code Snippet Box below image */}
              <div className="mt-3 bg-[#030611] rounded-xl border border-slate-800/90 overflow-hidden font-mono text-xs">
                {/* Editor Tab Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2 bg-slate-900/50">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveCodeTab('python')}
                      className={`px-2.5 py-1 rounded text-xs transition-colors ${
                        activeCodeTab === 'python'
                          ? 'bg-blue-600/30 text-blue-400 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      app.py (Flask)
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('react')}
                      className={`px-2.5 py-1 rounded text-xs transition-colors ${
                        activeCodeTab === 'react'
                          ? 'bg-blue-600/30 text-blue-400 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Profile.tsx (React)
                    </button>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>REST API</span>
                  </div>
                </div>

                {/* Code Content */}
                <pre className="p-3 overflow-x-auto text-slate-300 leading-relaxed text-[11px] max-h-40 selection:bg-blue-800 selection:text-white">
                  <code>{activeCodeTab === 'python' ? pythonSnippet : reactSnippet}</code>
                </pre>
              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Key Metrics Strip Below the Split (Mandatory design rule) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
              5 Projects
            </div>
            <div className="text-xs text-slate-400">
              Full Stack & Frontend applications built
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold text-blue-400 font-mono tabular-nums">
              BCA 2025
            </div>
            <div className="text-xs text-slate-400">
              Computer Applications Graduate
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">
              FIIT 2026
            </div>
            <div className="text-xs text-slate-400">
              Python Full Stack Certification
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono tabular-nums">
              Immediate
            </div>
            <div className="text-xs text-slate-400">
              Available for fresher roles in Chennai
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
