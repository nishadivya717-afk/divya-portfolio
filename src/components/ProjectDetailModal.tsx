import React from 'react';
import { X, Github, ExternalLink, Code2, Layers, CheckCircle2, AlertCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onEdit
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#070c1e] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-blue-400">
              {project.category}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">
              Status: <span className="text-slate-200 font-medium">{project.status}</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Visual Banner */}
          {project.imageUrl ? (
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-950 border border-slate-800">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border border-slate-800 flex flex-col items-center justify-center p-6 text-center">
              <Code2 className="w-12 h-12 text-blue-400/60 mb-2" />
              <h4 className="text-base font-bold text-white">{project.title}</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-md">
                Application interface under active development. You can upload a custom screenshot using the Edit button.
              </p>
            </div>
          )}

          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            {project.tagline && (
              <p className="text-sm text-blue-300 font-medium mt-1">
                {project.tagline}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features / Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Capabilities & Features
              </h4>
              <div className="space-y-2">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Architecture */}
          {project.architectureNotes && (
            <div className="space-y-2 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Technical Architecture & Implementation
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.architectureNotes}
              </p>
            </div>
          )}

          {/* Tech Stack tags */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Note on links */}
          <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-900/40 text-xs text-blue-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-blue-400" />
            <span>
              All links and details can be tailored anytime. Use the "Edit Project Details" button to insert your real repository or deploy URL.
            </span>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => {
                onClose();
                onEdit(project);
              }}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-850 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            >
              Edit Project Details
            </button>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm shadow-blue-600/30"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
