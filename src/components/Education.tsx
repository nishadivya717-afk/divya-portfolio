import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/defaultData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Academic & Professional Milestones
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Education & Training
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            Formal degrees and dedicated professional training that shaped my full-stack engineering foundation.
          </p>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((item, index) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/90 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors duration-200"
            >
              <div className="space-y-4">
                {/* Header Badge & Meta */}
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    {index === 0 ? (
                      <Award className="w-6 h-6" />
                    ) : (
                      <GraduationCap className="w-6 h-6" />
                    )}
                  </div>

                  <div className="text-right">
                    <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950/60 border border-blue-900/60 px-2.5 py-1 rounded-md">
                      {item.year}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1 justify-end">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Degree & Institution */}
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-medium text-slate-300 mt-1">
                    {item.institution}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Learnings List */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Core Focus & Competencies
                  </div>
                  <div className="space-y-2">
                    {item.keyLearnings.map((learning, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{learning}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Status Note */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="text-slate-500">Status</span>
                <span className="text-emerald-400 font-medium">Successfully Completed</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
