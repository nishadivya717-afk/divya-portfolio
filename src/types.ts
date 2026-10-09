export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  category: 'Full Stack' | 'Frontend' | 'Python Backend' | 'AI Integration';
  status: 'Completed' | 'In Development' | 'Prototype';
  imageUrl: string;
  githubUrl: string;
  liveDemoUrl: string;
  highlights: string[];
  architectureNotes?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: string; // e.g. "Core", "Proficient", "Familiar" without fake percentages
    description: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  location: string;
  description: string;
  keyLearnings: string[];
}

export interface ResumeSettings {
  customResumeFileName?: string;
  customResumeDataUrl?: string;
  customResumeExternalUrl?: string;
}
