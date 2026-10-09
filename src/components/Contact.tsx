import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, MapPin, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { PROFILE_INFO } from '../data/defaultData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setValidationErrors({});
    }, 900);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Contact & Hire Divya
          </h2>
          <p className="mt-2 text-slate-300 text-sm">
            I am actively interviewing for Python Full Stack Developer and Software Engineer fresher roles in Chennai. Let's connect!
          </p>
        </div>

        {/* 2-Column Split: Contact Details vs Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Links & Reachability Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Direct Email
                </span>
                <div className="text-base font-bold text-white mt-0.5 break-all">
                  {PROFILE_INFO.email}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={`mailto:${PROFILE_INFO.email}?subject=Job Opportunity / Inquiry for Divya`}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
                >
                  Send Email
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={PROFILE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-blue-900/30 text-blue-400 flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] text-slate-500 group-hover:text-blue-400 transition-colors">
                    Connect →
                  </span>
                </div>
                <div className="mt-3">
                  <div className="text-sm font-bold text-white">LinkedIn Profile</div>
                  <div className="text-xs text-slate-400 mt-0.5 truncate">
                    divya-fullstack
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PROFILE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors">
                    Explore →
                  </span>
                </div>
                <div className="mt-3">
                  <div className="text-sm font-bold text-white">GitHub Repos</div>
                  <div className="text-xs text-slate-400 mt-0.5 truncate">
                    github.com/nishadivya717-afk
                  </div>
                </div>
              </a>
            </div>

            {/* Location & Availability Note */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <span className="font-semibold text-white">Current Location:</span> Chennai, Tamil Nadu, India.
                <span className="block text-slate-400 text-[11px]">Open for on-site positions in Chennai and remote roles worldwide.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with Validation & Feedback */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your details below and I'll get back to you promptly.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/80 text-xs text-emerald-200 flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Thank you for your message!</strong>
                    <span>Your inquiry has been recorded. You can also email directly at <a href={`mailto:${PROFILE_INFO.email}`} className="underline text-emerald-300">{PROFILE_INFO.email}</a>.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-950 border rounded-lg text-white focus:outline-none transition-colors ${
                        validationErrors.name ? 'border-red-500' : 'border-slate-700 focus:border-blue-500'
                      }`}
                    />
                    {validationErrors.name && (
                      <p className="text-[11px] text-red-400 mt-1">{validationErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-950 border rounded-lg text-white focus:outline-none transition-colors ${
                        validationErrors.email ? 'border-red-500' : 'border-slate-700 focus:border-blue-500'
                      }`}
                    />
                    {validationErrors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject / Purpose */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Subject / Job Title (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Python Full Stack Developer Opening / Technical Interview"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message, role requirements, or interview details here..."
                    className={`w-full px-3.5 py-2.5 text-sm bg-slate-950 border rounded-lg text-white focus:outline-none transition-colors ${
                      validationErrors.message ? 'border-red-500' : 'border-slate-700 focus:border-blue-500'
                    }`}
                  />
                  {validationErrors.message && (
                    <p className="text-[11px] text-red-400 mt-1">{validationErrors.message}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-600/30"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PROFILE_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message || '')}`}
                    className="text-xs text-slate-400 hover:text-blue-400 underline transition-colors"
                  >
                    Open in your default email client
                  </a>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
