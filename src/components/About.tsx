import React from 'react';
import { GraduationCap, Award, Server, Layout, Database, CheckCircle2, UserCheck, Compass } from 'lucide-react';
import { PROFILE_INFO } from '../data/defaultData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#060a1a] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Professional Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            I am a dedicated and motivated fresher seeking opportunities to begin my career as a Python Full Stack Developer and contribute to meaningful real-world software products.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <p>
              I completed my <strong className="text-white font-semibold">Bachelor of Computer Applications (BCA) in 2025</strong>, where I developed a solid academic grounding in computer science principles, data structures, object-oriented programming, and relational database systems.
            </p>

            <p>
              Driven by a desire to specialize in modern full-stack development, I pursued intensive <strong className="text-white font-semibold">Python Full Stack Developer training at FIIT in 2026</strong>. Through hands-on coursework and practical mini-projects, I strengthened my ability to build dynamic web applications connecting interactive frontend interfaces to robust backend architectures.
            </p>

            <p>
              My core technical passion lies in:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                  <Layout className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white">Responsive Websites</h3>
                <p className="text-xs text-slate-400">
                  Building intuitive, mobile-first interfaces using HTML5, CSS3, JavaScript, and React.js.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                  <Server className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white">Backend Applications</h3>
                <p className="text-xs text-slate-400">
                  Developing clean, modular server logic with Python, Django, and Flask.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-sky-600/20 text-sky-400 flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white">RESTful APIs</h3>
                <p className="text-xs text-slate-400">
                  Architecting predictable JSON endpoints, request handling, and client-server synchronization.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white">Database-Driven Apps</h3>
                <p className="text-xs text-slate-400">
                  Designing structured schemas, relational queries, and CRUD functionality with SQL & SQLite.
                </p>
              </div>
            </div>

            <p className="pt-2 text-slate-400 text-sm">
              As a fresher, I bring honesty, high enthusiasm, strong work ethic, and quick learning abilities. I am eager to join an IT company in Chennai where I can continuously learn from senior engineers, tackle challenging problems, and deliver quality code.
            </p>
          </div>

          {/* Right Highlights & Profile Sheet */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 space-y-6 shadow-xl">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-blue-400" />
                Quick Profile Overview
              </h3>

              <div className="space-y-4 text-sm divide-y divide-slate-800/80">
                <div className="pt-3 first:pt-0 flex justify-between items-center gap-4">
                  <span className="text-slate-400 text-xs font-medium">Name</span>
                  <span className="text-white font-semibold">{PROFILE_INFO.name}</span>
                </div>

                <div className="pt-3 flex justify-between items-center gap-4">
                  <span className="text-slate-400 text-xs font-medium">Primary Focus</span>
                  <span className="text-white font-medium text-right">Python Full Stack Web Dev</span>
                </div>

                <div className="pt-3 flex justify-between items-center gap-4">
                  <span className="text-slate-400 text-xs font-medium">Education</span>
                  <span className="text-white font-medium text-right">BCA Graduate (2025)</span>
                </div>

                <div className="pt-3 flex justify-between items-center gap-4">
                  <span className="text-slate-400 text-xs font-medium">Specialized Training</span>
                  <span className="text-white font-medium text-right">FIIT Python Full Stack (2026)</span>
                </div>

                <div className="pt-3 flex justify-between items-center gap-4">
                  <span className="text-slate-400 text-xs font-medium">Location</span>
                  <span className="text-white font-medium text-right">Chennai, Tamil Nadu</span>
                </div>

                <div className="pt-3 flex justify-between items-center gap-4">
                  <span className="text-slate-400 text-xs font-medium">Target Roles</span>
                  <span className="text-blue-400 font-semibold text-right">Python Developer · Full Stack Fresher</span>
                </div>
              </div>

              {/* Values as a Fresher */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                  Key Strengths
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Clean coding standards & organized project directories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Clear understanding of backend-to-frontend API flows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Fast adaptability to new tech stacks and internal libraries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Disciplined Git version control and team communication</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Education Badges Card */}
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-800/40 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">FIIT Certified Developer</h4>
                <p className="text-xs text-slate-400">
                  Comprehensive training in Python, Django, Flask, React.js & SQLite (2026).
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
