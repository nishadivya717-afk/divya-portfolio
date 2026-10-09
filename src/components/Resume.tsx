import React, { useState, useEffect } from 'react';
import { Download, Upload, FileText, CheckCircle2, Link as LinkIcon, Printer, AlertCircle, Sparkles, ExternalLink } from 'lucide-react';
import { PROFILE_INFO, SKILL_CATEGORIES } from '../data/defaultData';
import { ResumeSettings, Project } from '../types';

interface ResumeProps {
  projects: Project[];
}

export const Resume: React.FC<ResumeProps> = ({ projects }) => {
  const [resumeSettings, setResumeSettings] = useState<ResumeSettings>(() => {
    try {
      const saved = localStorage.getItem('divya_resume_settings');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState(resumeSettings.customResumeExternalUrl || '');
  const [uploadStatus, setUploadStatus] = useState<string>('');

  useEffect(() => {
    try {
      localStorage.setItem('divya_resume_settings', JSON.stringify(resumeSettings));
    } catch (e) {
      console.warn('Failed to persist resume settings', e);
    }
  }, [resumeSettings]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setUploadStatus('Please select a valid PDF file (.pdf).');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setUploadStatus('File size exceeds 5MB limit.');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setResumeSettings(prev => ({
            ...prev,
            customResumeFileName: file.name,
            customResumeDataUrl: reader.result as string
          }));
          setUploadStatus(`Successfully attached: ${file.name}`);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveExternalUrl = () => {
    if (customUrlInput.trim()) {
      setResumeSettings(prev => ({
        ...prev,
        customResumeExternalUrl: customUrlInput.trim()
      }));
      setUploadStatus('Direct PDF link saved successfully!');
    }
  };

  const handleClearCustomResume = () => {
    setResumeSettings({});
    setCustomUrlInput('');
    setUploadStatus('Custom resume cleared. Reverted to generated resume.');
  };

  const handleDownload = () => {
    if (resumeSettings.customResumeDataUrl) {
      // Trigger download of user's uploaded PDF
      const a = document.createElement('a');
      a.href = resumeSettings.customResumeDataUrl;
      a.download = resumeSettings.customResumeFileName || 'Divya_Python_Full_Stack_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      return;
    }

    if (resumeSettings.customResumeExternalUrl) {
      window.open(resumeSettings.customResumeExternalUrl, '_blank');
      return;
    }

    // Default: Print/PDF download of the clean structured resume
    window.print();
  };

  return (
    <section id="resume" className="py-20 bg-[#060a1a] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
              Curriculum Vitae
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Resume & Qualifications
            </h2>
            <p className="mt-2 text-slate-300 text-sm">
              Authentic record of education, skills, and projects. No fabricated experience — strictly truthful fresher credentials.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setShowUploadModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Upload className="w-3.5 h-3.5 text-blue-400" />
              <span>
                {resumeSettings.customResumeFileName || resumeSettings.customResumeExternalUrl
                  ? 'Manage Attached PDF'
                  : 'Attach Custom PDF Resume'}
              </span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-md shadow-blue-600/30"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Attachment Notice Banner if custom file is active */}
        {(resumeSettings.customResumeFileName || resumeSettings.customResumeExternalUrl) && (
          <div className="mb-8 p-3 rounded-xl bg-blue-950/40 border border-blue-800/60 flex items-center justify-between gap-4 text-xs text-blue-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Active custom resume: <strong className="text-white">{resumeSettings.customResumeFileName || 'External PDF Link'}</strong>
              </span>
            </div>
            <button
              onClick={handleClearCustomResume}
              className="text-xs text-slate-400 hover:text-red-300 underline"
            >
              Remove Attachment
            </button>
          </div>
        )}

        {/* Resume Preview Sheet (Formatted cleanly for print or visual review) */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl p-6 sm:p-10 max-w-4xl mx-auto space-y-8 print:p-0 print:border-none print:shadow-none print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white print:text-black tracking-tight">
                {PROFILE_INFO.name}
              </h3>
              <div className="text-sm font-semibold text-blue-400 print:text-slate-800 mt-0.5">
                {PROFILE_INFO.role}
              </div>
              <p className="text-xs text-slate-400 print:text-slate-600 mt-1">
                Chennai, Tamil Nadu, India · {PROFILE_INFO.email}
              </p>
            </div>

            <div className="text-xs text-slate-400 print:text-slate-600 space-y-1 sm:text-right font-mono">
              <div>BCA Graduate (2025)</div>
              <div>FIIT Certified (2026)</div>
              <div>
                <a
                  href={PROFILE_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  github.com/nishadivya717-afk
                </a>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-slate-900 border-b border-slate-800/80 pb-1">
              Career Objective
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              Aspiring and motivated Python Full Stack Developer seeking an entry-level software development position in Chennai. Armed with a Bachelor of Computer Applications degree (2025) and comprehensive hands-on full-stack training from FIIT (2026), aiming to build responsive client interfaces, maintain scalable RESTful APIs, and contribute productively to engineering teams.
            </p>
          </div>

          {/* Technical Skills Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-slate-900 border-b border-slate-800/80 pb-1">
              Technical Proficiencies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <span className="font-semibold text-white print:text-black">Frontend:</span>
                <p className="text-slate-400 print:text-slate-700">
                  HTML5, CSS3, JavaScript (ES6+), React.js, Material UI, Responsive Design
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-semibold text-white print:text-black">Backend:</span>
                <p className="text-slate-400 print:text-slate-700">
                  Python, Django, Flask, REST APIs, JSON data serialization
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-semibold text-white print:text-black">Databases:</span>
                <p className="text-slate-400 print:text-slate-700">
                  SQL, SQLite, Relational Database Modeling, CRUD operations
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-semibold text-white print:text-black">Developer Tools:</span>
                <p className="text-slate-400 print:text-slate-700">
                  Git, GitHub, Visual Studio Code, Chrome DevTools
                </p>
              </div>
            </div>
          </div>

          {/* Projects Highlights */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-slate-900 border-b border-slate-800/80 pb-1">
              Key Projects
            </h4>

            {projects.slice(0, 3).map((proj) => (
              <div key={proj.id} className="space-y-1 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold text-white print:text-black">
                    {proj.title}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400 print:text-slate-600">
                    {proj.technologies.join(', ')}
                  </span>
                </div>
                <p className="text-slate-300 print:text-slate-700 leading-relaxed">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-slate-900 border-b border-slate-800/80 pb-1">
              Education & Certifications
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-white print:text-black">
                    Python Full Stack Developer Training
                  </div>
                  <div className="text-slate-400 print:text-slate-600">
                    FIIT (Forum for Information Technology), Chennai
                  </div>
                </div>
                <span className="font-mono text-slate-400 print:text-slate-600">2026</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-white print:text-black">
                    Bachelor of Computer Applications (BCA)
                  </div>
                  <div className="text-slate-400 print:text-slate-600">
                    University Graduate Program, Chennai
                  </div>
                </div>
                <span className="font-mono text-slate-400 print:text-slate-600">2025</span>
              </div>
            </div>
          </div>

          {/* Print/Save hint */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 print:hidden">
            <span>Ready for interview presentation</span>
            <button
              onClick={() => window.print()}
              className="hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print or Save as PDF</span>
            </button>
          </div>

        </div>

      </div>

      {/* PDF Upload / Link Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#070c1e] border border-slate-700 rounded-2xl shadow-2xl p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" />
                Attach Your Real PDF Resume
              </h3>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setUploadStatus('');
                }}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Recruiters can download your exact official PDF resume. You can either upload a local PDF file or enter a public cloud link (Google Drive / GitHub).
            </p>

            {uploadStatus && (
              <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/80 text-xs text-blue-200">
                {uploadStatus}
              </div>
            )}

            {/* Option A: Upload Local File */}
            <div className="space-y-2 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <label className="block text-xs font-semibold text-slate-200">
                Option 1: Upload PDF File from Device
              </label>
              <label className="flex items-center justify-center gap-2 p-4 text-xs font-medium text-slate-300 bg-slate-950 border border-dashed border-slate-700 rounded-lg cursor-pointer hover:border-blue-500 hover:text-blue-300 transition-colors">
                <Upload className="w-4 h-4" />
                <span>
                  {resumeSettings.customResumeFileName
                    ? `Current: ${resumeSettings.customResumeFileName} (Click to change)`
                    : 'Click to select .pdf file (Max 5MB)'}
                </span>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Option B: External URL */}
            <div className="space-y-2 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <label className="block text-xs font-semibold text-slate-200">
                Option 2: Direct Resume Link (Google Drive / GitHub)
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://drive.google.com/..."
                  value={customUrlInput}
                  onChange={e => setCustomUrlInput(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={handleSaveExternalUrl}
                  className="px-3 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shrink-0"
                >
                  Save URL
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowUploadModal(false);
                  setUploadStatus('');
                }}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg hover:bg-slate-700"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
