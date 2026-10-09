import React, { useState } from 'react';
import { ExternalLink, Github, Edit3, Eye, RotateCcw, Plus, Layers, Code2, Bot, ShoppingCart, HeartPulse, Wallet } from 'lucide-react';
import { Project } from '../types';
import { ProjectEditModal } from './ProjectEditModal';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsProps {
  projects: Project[];
  onUpdateProject: (updated: Project) => void;
  onResetProjects: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  onUpdateProject,
  onResetProjects
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [viewingProject, setViewingProject] = useState<Project | null>(null);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Full Stack', label: 'Full Stack' },
    { id: 'Frontend', label: 'Frontend' },
    { id: 'Python Backend', label: 'Python Backend' },
    { id: 'AI Integration', label: 'AI & APIs' }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  const handleImageError = (id: string) => {
    setImageErrorMap(prev => ({ ...prev, [id]: true }));
  };

  const getFallbackIcon = (id: string) => {
    switch (id) {
      case 'electronics-shopping-portal':
        return <ShoppingCart className="w-10 h-10 text-blue-400" />;
      case 'pathforge-ai':
        return <Bot className="w-10 h-10 text-sky-400" />;
      case 'expense-tracker':
        return <Wallet className="w-10 h-10 text-emerald-400" />;
      case 'health-management-system':
        return <HeartPulse className="w-10 h-10 text-rose-400" />;
      case 'gemini-ai-chat-application':
        return <Code2 className="w-10 h-10 text-purple-400" />;
      default:
        return <Layers className="w-10 h-10 text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#060a1a] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Portfolio Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-2 text-slate-300 text-sm">
              Real application builds showcasing frontend design, Python backend services, and database integration. Each project is fully customizable.
            </p>
          </div>

          {/* Action Tools: Reset to Defaults button */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={onResetProjects}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors"
              title="Reset projects to initial specifications"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
          </div>
        </div>

        {/* Filter Bar (Functional buttons / segmented controls) */}
        <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-slate-800 rounded-xl mb-10 overflow-x-auto max-w-full w-fit">
          {filterCategories.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedFilter === f.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const hasValidImage = project.imageUrl && !imageErrorMap[project.id];

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-slate-900/60 border border-slate-800/90 overflow-hidden flex flex-col hover:border-slate-700 transition-all duration-300 group hover:shadow-xl hover:shadow-black/40"
              >
                {/* Project Image Container with Resilient Fallback */}
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden border-b border-slate-800/80">
                  {hasValidImage ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      onError={() => handleImageError(project.id)}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Zero-Broken-Image Policy: styled CSS/SVG fallback container */
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
                      <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800/80 mb-2">
                        {getFallbackIcon(project.id)}
                      </div>
                      <span className="text-xs font-semibold text-slate-300">{project.title}</span>
                      <span className="text-[11px] text-slate-500 mt-0.5">{project.technologies.slice(0, 3).join(' · ')}</span>
                    </div>
                  )}

                  {/* Top Status & Edit Trigger */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-slate-800 text-slate-300">
                      {project.status}
                    </span>

                    <button
                      onClick={() => setEditingProject(project)}
                      className="p-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-slate-700/70 text-slate-300 hover:text-white hover:bg-blue-600 transition-colors shadow-sm"
                      title="Edit project details and links"
                      aria-label={`Edit ${project.title}`}
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Category Chip overlay at bottom */}
                  <div className="absolute bottom-2 left-3">
                    <span className="text-[10px] font-mono text-blue-300 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-900/60">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Clean unboxed technology metadata with typographic separators (Zero-Pill compliant) */}
                  <div className="pt-2 border-t border-slate-800/60">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                      {project.technologies.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span className="font-mono text-[11px] text-slate-300">{tech}</span>
                          {idx < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-slate-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions: Live Demo, GitHub, Details */}
                  <div className="pt-2 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700/80 rounded-lg transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setViewingProject(project)}
                      className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                      title="View full architectural details"
                      aria-label="View project details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Edit Modal */}
        {editingProject && (
          <ProjectEditModal
            project={editingProject}
            isOpen={true}
            onClose={() => setEditingProject(null)}
            onSave={(updated) => {
              onUpdateProject(updated);
              setEditingProject(null);
            }}
          />
        )}

        {/* Detail Modal */}
        {viewingProject && (
          <ProjectDetailModal
            project={viewingProject}
            isOpen={true}
            onClose={() => setViewingProject(null)}
            onEdit={(proj) => {
              setViewingProject(null);
              setEditingProject(proj);
            }}
          />
        )}

      </div>
    </section>
  );
};
