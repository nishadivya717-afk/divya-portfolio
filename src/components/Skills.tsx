import React, { useState } from 'react';
import { Layout, Server, Database, Wrench, Code2, Check, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/defaultData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Skills' },
    { id: 'Frontend Development', label: 'Frontend' },
    { id: 'Backend Development', label: 'Backend' },
    { id: 'Database & Storage', label: 'Database' },
    { id: 'Developer Tools', label: 'Tools' }
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-teal-400" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.title === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Segmented Filter Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Technical Stack
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Skills & Proficiencies
            </h2>
            <p className="mt-2 text-slate-300 text-sm">
              Core technologies honed during BCA studies and rigorous hands-on Python Full Stack training at FIIT.
            </p>
          </div>

          {/* Interactive filter control (functional buttons with active/inactive states) */}
          <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedCategory(opt.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === opt.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/90 p-6 space-y-6 hover:border-slate-700 transition-colors duration-200"
            >
              {/* Category Header */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 shrink-0">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Cards (Progress-free, no fake percentages) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-[#040714] border border-slate-800/80 hover:border-blue-500/40 transition-all duration-200 space-y-1.5 group"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                      {/* Quiet level indicator without fake percentages */}
                      <span className="text-[11px] font-mono text-slate-400">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[12px] text-slate-400 leading-snug line-clamp-2">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Architecture Flow Note */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/20 via-slate-900/50 to-blue-950/20 border border-blue-900/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Full-Stack Integration Competency
            </h4>
            <p className="text-xs text-slate-400 max-w-2xl">
              Trained to build complete end-to-end applications: React frontends consuming Python (Flask / Django) REST APIs, backed by structured SQL / SQLite databases.
            </p>
          </div>
          <a
            href="#projects"
            className="px-4 py-2 text-xs font-semibold text-blue-400 hover:text-white bg-blue-950/60 hover:bg-blue-600/50 border border-blue-800/60 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            See in Action
          </a>
        </div>

      </div>
    </section>
  );
};
