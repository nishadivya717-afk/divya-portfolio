import React, { useState } from 'react';
import { X, Save, Upload, Link, Github, ExternalLink, Image as ImageIcon, AlertCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectEditModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedProject: Project) => void;
}

export const ProjectEditModal: React.FC<ProjectEditModalProps> = ({
  project,
  isOpen,
  onClose,
  onSave
}) => {
  const [title, setTitle] = useState(project.title);
  const [tagline, setTagline] = useState(project.tagline);
  const [description, setDescription] = useState(project.description);
  const [technologiesStr, setTechnologiesStr] = useState(project.technologies.join(', '));
  const [category, setCategory] = useState<Project['category']>(project.category);
  const [status, setStatus] = useState<Project['status']>(project.status);
  const [imageUrl, setImageUrl] = useState(project.imageUrl);
  const [githubUrl, setGithubUrl] = useState(project.githubUrl);
  const [liveDemoUrl, setLiveDemoUrl] = useState(project.liveDemoUrl);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrorMsg('Image size exceeds 2MB. Please select a smaller screenshot.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setImageUrl(reader.result);
          setErrorMsg('');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setErrorMsg('Project title and description cannot be empty.');
      return;
    }

    const techArray = technologiesStr
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const updated: Project = {
      ...project,
      title: title.trim(),
      tagline: tagline.trim(),
      description: description.trim(),
      technologies: techArray.length > 0 ? techArray : project.technologies,
      category,
      status,
      imageUrl: imageUrl.trim(),
      githubUrl: githubUrl.trim(),
      liveDemoUrl: liveDemoUrl.trim()
    };

    onSave(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#070c1e] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div>
            <h3 className="text-base font-bold text-white">
              Edit Project: {project.title}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Update project details, links, tech stack, and screenshot
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close edit modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {errorMsg && (
            <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/60 flex items-center gap-2 text-xs text-red-300">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Title & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Project Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as Project['category'])}
                className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Full Stack">Full Stack</option>
                <option value="Frontend">Frontend</option>
                <option value="Python Backend">Python Backend</option>
                <option value="AI Integration">AI Integration</option>
              </select>
            </div>
          </div>

          {/* Tagline */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Short Tagline
            </label>
            <input
              type="text"
              value={tagline}
              onChange={e => setTagline(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              placeholder="e.g. Interactive electronics store built with React"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Description *
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Technologies */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Technologies (comma separated)
            </label>
            <input
              type="text"
              value={technologiesStr}
              onChange={e => setTechnologiesStr(e.target.value)}
              placeholder="React.js, React Router, Axios, JavaScript, CSS"
              className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 font-mono text-xs"
            />
          </div>

          {/* Status & Screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Project Status
              </label>
              <select
                value={status}
                onChange={e => setStatus(e.target.value as Project['status'])}
                className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Completed">Completed</option>
                <option value="In Development">In Development</option>
                <option value="Prototype">Prototype</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Upload Screenshot or File
              </label>
              <label className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-300 bg-slate-950 border border-slate-700 rounded-lg cursor-pointer hover:border-slate-500 transition-colors">
                <Upload className="w-4 h-4 text-blue-400" />
                <span className="truncate">
                  {imageUrl ? 'Change Screenshot' : 'Choose PNG/JPG (<2MB)'}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Or Image URL input */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Screenshot Image URL (Optional)
            </label>
            <input
              type="text"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              placeholder="https://... or data:image/..."
              className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>

          {/* URLs: GitHub & Live Demo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-blue-400" />
                GitHub Repository URL
              </label>
              <input
                type="url"
                value={githubUrl}
                onChange={e => setGithubUrl(e.target.value)}
                placeholder="https://github.com/nishadivya717-afk/your-repo"
                className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                Live Demo URL
              </label>
              <input
                type="url"
                value={liveDemoUrl}
                onChange={e => setLiveDemoUrl(e.target.value)}
                placeholder="https://your-live-demo.example.app"
                className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 font-mono"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-md shadow-blue-600/30"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
