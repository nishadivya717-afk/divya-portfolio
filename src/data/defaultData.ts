import { Project, SkillCategory, EducationItem } from '../types';

import heroWorkspaceImg from '../assets/images/hero_developer_workspace_1791558648068.jpg';
import projectEcommerceImg from '../assets/images/project_ecommerce_portal_1791558661032.jpg';
import projectPathforgeImg from '../assets/images/project_pathforge_ai_1791558672549.jpg';
import projectExpenseImg from '../assets/images/project_expense_tracker_1791558683789.jpg';

export const HERO_ASSETS = {
  heroWorkspaceImg,
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'electronics-shopping-portal',
    title: 'Electronics Shopping Portal',
    tagline: 'Interactive storefront for modern consumer electronics and gadgets',
    description: 'An electronics shopping application featuring product listings, navigation, login and registration interfaces, and product details.',
    technologies: ['React.js', 'React Router', 'Axios', 'JavaScript', 'CSS'],
    category: 'Frontend',
    status: 'In Development',
    imageUrl: projectEcommerceImg,
    githubUrl: 'https://github.com/nishadivya717-afk/electronics-shopping-portal',
    liveDemoUrl: 'https://divya-electronics-store.example.app',
    highlights: [
      'Catalog browsing with category filtering and dynamic search',
      'Single-page routing with React Router for seamless navigation',
      'Client-side cart management and state persistence',
      'Responsive product detail view with interactive image zoom and specification tabs',
      'Modular authentication modal with login and signup form validation'
    ],
    architectureNotes: 'Built with React component architecture, utilizing Axios for API service abstraction and modular CSS for consistent dark and light mode UI themes.'
  },
  {
    id: 'pathforge-ai',
    title: 'PathForge AI',
    tagline: 'Career pathway explorer & freelance skill matching engine',
    description: 'An AI-powered career and freelance matching application designed to help users explore career paths, analyze skills, discover freelance opportunities, and prepare career documents.',
    technologies: ['React', 'TypeScript', 'AI integration'],
    category: 'AI Integration',
    status: 'In Development',
    imageUrl: projectPathforgeImg,
    githubUrl: 'https://github.com/nishadivya717-afk/pathforge-ai',
    liveDemoUrl: 'https://pathforge-ai.example.app',
    highlights: [
      'Interactive skill gap analyzer highlighting recommended competencies',
      'Career trajectory mapper based on target roles in full stack development',
      'AI prompt templates tailored for resume summary refinement and cover letter drafting',
      'Freelance project discovery filters by domain and technical stack',
      'Clean TypeScript interfaces for structured data integrity'
    ],
    architectureNotes: 'Frontend written in TypeScript React with async API handlers connecting to AI inference endpoints, rendering structured career roadmaps with interactive status nodes.'
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    tagline: 'Lightweight personal finance tracking system with SQLite persistence',
    description: 'A personal expense tracking application for recording and managing expenses.',
    technologies: ['Python', 'Flask', 'SQLite'],
    category: 'Python Backend',
    status: 'In Development',
    imageUrl: projectExpenseImg,
    githubUrl: 'https://github.com/nishadivya717-afk/flask-expense-tracker',
    liveDemoUrl: 'https://divya-expense-tracker.example.app',
    highlights: [
      'RESTful Flask endpoints for CRUD operations on transactions',
      'SQLite relational schema indexing date, category, amount, and notes',
      'Monthly spending aggregates and categorized budget summaries',
      'Input validation preventing negative balances or malformed currency figures',
      'Clean tabular view with chronological sorting and filterable date ranges'
    ],
    architectureNotes: 'Backend built with Python Flask microframework and Python sqlite3 driver, providing structured JSON responses and template rendering.'
  },
  {
    id: 'health-management-system',
    title: 'Health Management System',
    tagline: 'Patient record organization and appointment tracking UI',
    description: 'A web application designed to organize health-related information and provide a simple user interface for managing records.',
    technologies: ['React.js', 'JavaScript', 'CSS'],
    category: 'Frontend',
    status: 'In Development',
    imageUrl: '', // Will use elegant styled CSS fallback or user custom screenshot
    githubUrl: 'https://github.com/nishadivya717-afk/health-management-system',
    liveDemoUrl: 'https://health-mgmt-system.example.app',
    highlights: [
      'Structured record management for patient contact and medical history notes',
      'Interactive appointment scheduler with upcoming visit reminders',
      'Vitals recording dashboard (blood pressure, pulse, medication schedule)',
      'Clean, accessible form inputs optimized for rapid data entry',
      'Tabular record view with search filtering by patient name or diagnosis'
    ],
    architectureNotes: 'State-driven React architecture with centralized health log state, responsive CSS layout, and local storage caching for offline record retention.'
  },
  {
    id: 'gemini-ai-chat-application',
    title: 'Gemini AI Chat Application',
    tagline: 'Conversational assistant interface powered by Gemini API',
    description: 'An AI-powered chat application that allows users to interact with an AI assistant.',
    technologies: ['React.js', 'JavaScript', 'Gemini API'],
    category: 'AI Integration',
    status: 'In Development',
    imageUrl: '', // Will use elegant styled CSS fallback or user custom screenshot
    githubUrl: 'https://github.com/nishadivya717-afk/gemini-ai-chat',
    liveDemoUrl: 'https://divya-gemini-chat.example.app',
    highlights: [
      'Streaming conversational UI with natural typing simulation and instant replies',
      'System prompt specialization for developer coding questions and Python syntax guidance',
      'Code block syntax highlighting with one-click code copy button',
      'Session chat history maintenance and clear conversation reset',
      'Robust error handling and rate limit notifications for reliable uptime'
    ],
    architectureNotes: 'React client managing chat state arrays, calling backend proxy routes to interface securely with the Gemini API without exposing credentials.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Crafting responsive, accessible, and high-performance user interfaces',
    icon: 'Layout',
    skills: [
      { name: 'HTML5', level: 'Core', description: 'Semantic markup, accessibility, SEO structure, modern DOM' },
      { name: 'CSS3', level: 'Core', description: 'Flexbox, CSS Grid, media queries, animations, transitions' },
      { name: 'JavaScript', level: 'Proficient', description: 'ES6+ syntax, asynchronous programming, DOM manipulation, Fetch API' },
      { name: 'React.js', level: 'Proficient', description: 'Component lifecycle, hooks (useState, useEffect), state management, React Router' },
      { name: 'Material UI', level: 'Familiar', description: 'Component library theming, layout grids, icon sets, responsive components' }
    ]
  },
  {
    title: 'Backend Development',
    description: 'Architecting robust server-side logic, routing, and RESTful web services',
    icon: 'Server',
    skills: [
      { name: 'Python', level: 'Core', description: 'Object-oriented programming, data structures, modules, scripting, package management' },
      { name: 'Django', level: 'Proficient', description: 'MVT architecture, ORM models, URL routing, admin interface, user auth' },
      { name: 'Flask', level: 'Proficient', description: 'Lightweight microservices, blueprint routing, REST APIs, middleware' },
      { name: 'REST APIs', level: 'Core', description: 'API contract design, JSON payloads, HTTP methods, status codes, query filtering' }
    ]
  },
  {
    title: 'Database & Storage',
    description: 'Relational data modeling, querying, schema design, and data integrity',
    icon: 'Database',
    skills: [
      { name: 'SQL', level: 'Proficient', description: 'SELECT, JOINs, aggregations, GROUP BY, subqueries, primary & foreign keys' },
      { name: 'SQLite', level: 'Proficient', description: 'Embedded relational database management, schema migrations, lightweight storage' }
    ]
  },
  {
    title: 'Developer Tools',
    description: 'Version control workflows, development environments, and team collaboration',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 'Proficient', description: 'Branching, committing, merging, rebasing, resolving conflicts' },
      { name: 'GitHub', level: 'Proficient', description: 'Remote repositories, pull requests, issue tracking, README documentation' },
      { name: 'VS Code', level: 'Core', description: 'Extensions, debugging, integrated terminal, Python virtual environments, linting' }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'fiit-training',
    degree: 'Python Full Stack Developer Training',
    institution: 'FIIT (Forum for Information Technology)',
    year: '2026',
    location: 'Chennai, Tamil Nadu',
    description: 'Comprehensive hands-on training focusing on full-stack web application development with Python, Django, Flask, React.js, and relational database management.',
    keyLearnings: [
      'End-to-end full stack web architecture from database schemas to client-side UI',
      'REST API design and integration between React frontends and Python backends',
      'Object-Oriented Programming (OOP) in Python and relational database querying with SQL',
      'Git collaboration, code organization best practices, and project deployment principles'
    ]
  },
  {
    id: 'bca-degree',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'University Graduate Program',
    year: '2025',
    location: 'Chennai, Tamil Nadu',
    description: 'Undergraduate academic foundation in computer science, software engineering principles, core programming, and database architecture.',
    keyLearnings: [
      'Data Structures, Algorithms, and Object-Oriented Software Design',
      'Relational Database Management Systems (RDBMS) and SQL normalization',
      'Web technologies fundamentals (HTML, CSS, JavaScript) and Computer Networks',
      'Software Engineering lifecycle methodologies and academic project presentations'
    ]
  }
];

export const PROFILE_INFO = {
  name: 'Divya',
  role: 'Python Full Stack Developer',
  tagline: 'Building Modern Web Applications with Python and React.',
  email: 'nishadivya717@gmail.com',
  location: 'Chennai, Tamil Nadu, India',
  availability: 'Open for Fresher & Entry-level Opportunities',
  github: 'https://github.com/nishadivya717-afk',
  linkedin: 'https://linkedin.com/in/divya-fullstack',
  summary: 'Aspiring Python Full Stack Developer and 2025 BCA graduate with hands-on professional training in Python, Django, Flask, and React.js from FIIT (2026). Passionate about writing clean, maintainable code, building responsive interfaces, designing RESTful APIs, and developing database-driven web applications. Actively seeking fresher and junior developer roles in Chennai.',
};
