import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronDown, ChevronUp, Layers, Server, Layout } from 'lucide-react'
import SectionHeader from './SectionHeader'

const projects = [
  {
    id: 1,
    title: 'CampusHub Pro',
    subtitle: 'Attendance Management System',
    description:
      'A comprehensive full-stack attendance management platform built for academic institutions. Designed with role-based access for Admins and Faculty, enabling real-time tracking of student attendance, subject management, and analytical dashboards.',
    longDesc:
      'CampusHub Pro addresses the administrative overhead of manual attendance tracking in colleges. The system provides two distinct dashboard views — Admin and Faculty — with role-based authentication enforced at the API layer via Spring Security. Admins can manage students, subjects, users, and view institution-wide reports. Faculty members can mark and view attendance for their assigned subjects. The REST API layer is designed to be consumed by the React.js frontend, maintaining a clear separation between the presentation and business logic layers.',
    tech: ['Java', 'Spring Boot', 'Hibernate ORM', 'MySQL', 'React.js', 'REST API', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Role-Based Authentication (Admin / Faculty)',
      'Student & Subject Management',
      'Attendance Tracking & Reports',
      'Admin & Faculty Dashboards',
      'REST API Architecture',
      'User Management Module',
    ],
    type: 'Full Stack',
    icon: Layers,
    color: 'cyan',
    github: 'https://github.com/Mohit1257',
  },
  {
    id: 2,
    title: 'Modern Employee Tracker',
    subtitle: 'HR Analytics & Management System',
    description:
      'A server-side rendered employee management system built with Spring Boot MVC, JSP, and Chart.js, supporting complete CRUD operations and department-level analytics through dynamic dashboards.',
    longDesc:
      'The Modern Employee Tracker is a production-grade HR management application. Leveraging Spring Boot MVC for the controller layer and JSP with JSTL for view rendering, the app supports full CRUD operations for employee records. The dashboard module integrates Chart.js to visualize headcount by department, attendance trends, and other key HR metrics. Maven is used for dependency management and build automation, and the MySQL backend is wired via Hibernate ORM for type-safe, efficient data access.',
    tech: ['Core Java', 'Spring Boot MVC', 'Hibernate ORM', 'MySQL', 'JSP', 'JSTL', 'HTML', 'CSS', 'JavaScript', 'Chart.js', 'Maven'],
    features: [
      'Employee CRUD Operations',
      'Department Management',
      'Dashboard Analytics',
      'Chart.js Data Visualizations',
      'Server-Side Rendering (JSP/JSTL)',
      'Maven Build Automation',
    ],
    type: 'Backend / MVC',
    icon: Server,
    color: 'violet',
    github: 'https://github.com/Mohit1257',
  },
]

const colorMap = {
  cyan: {
    badge: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    border: 'hover:border-cyan-400/30',
    tag: 'text-cyan-300 bg-cyan-400/8 border-cyan-400/15',
    icon: 'text-cyan-400 bg-cyan-400/10',
    num: 'text-cyan-400',
    dot: 'bg-cyan-400',
  },
  violet: {
    badge: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    border: 'hover:border-violet-400/30',
    tag: 'text-violet-300 bg-violet-400/8 border-violet-400/15',
    icon: 'text-violet-400 bg-violet-400/10',
    num: 'text-violet-400',
    dot: 'bg-violet-400',
  },
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const c = colorMap[project.color]
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`glass rounded-2xl border border-white/5 ${c.border} transition-all duration-300 overflow-hidden group`}
    >
      {/* Card header */}
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${c.icon}`}>
              <Icon size={22} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
              <p className={`text-xs font-mono ${c.num} mt-0.5`}>{project.subtitle}</p>
            </div>
          </div>
          <span className={`text-xs font-mono px-2.5 py-1 rounded-full border flex-shrink-0 ${c.badge}`}>
            {project.type}
          </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className={`text-xs font-mono px-2 py-0.5 rounded border ${c.tag}`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs font-medium transition-all duration-200"
          >
            <Github size={14} />
            View on GitHub
          </a>
          <button
            onClick={() => setExpanded(!expanded)}
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 ${c.num} hover:opacity-80`}
          >
            {expanded ? 'Less' : 'Details'}
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-white/5 pt-5">
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.longDesc}</p>
              <div>
                <p className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">Key Features</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-400 text-xs">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6">
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="// projects"
          title="Featured Work"
          subtitle="End-to-end applications demonstrating full-stack capability — from database schema to production-ready UI."
        />

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Mohit1257"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-cyan-400/30 text-slate-300 hover:text-cyan-400 text-sm font-medium transition-all duration-200"
          >
            <Github size={16} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
