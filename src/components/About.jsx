import React from 'react'
import { motion } from 'framer-motion'
import { Server, Layout, Database, GitBranch, Zap, Target } from 'lucide-react'
import SectionHeader from './SectionHeader'

const highlights = [
  {
    icon: Server,
    color: 'cyan',
    title: 'Backend Engineering',
    desc: 'Designing robust REST APIs with Spring Boot and Hibernate ORM for high-performance server-side logic.',
  },
  {
    icon: Layout,
    color: 'violet',
    title: 'Frontend Development',
    desc: 'Crafting responsive, interactive UIs with React.js, Tailwind CSS, and modern JavaScript patterns.',
  },
  {
    icon: Database,
    color: 'cyan',
    title: 'Database Design',
    desc: 'Structuring efficient MySQL schemas, writing optimized queries, and managing persistence layers.',
  },
  {
    icon: GitBranch,
    color: 'violet',
    title: 'Version Control & Tooling',
    desc: 'Proficient with Git, Maven, Postman, and industry-standard IDEs for clean, collaborative workflows.',
  },
  {
    icon: Zap,
    color: 'cyan',
    title: 'Scalable Architecture',
    desc: 'Building applications designed for growth — maintainable, modular, and production-ready.',
  },
  {
    icon: Target,
    color: 'violet',
    title: 'Full Stack Delivery',
    desc: 'End-to-end ownership from API design through UI implementation, testing, and deployment.',
  },
]

const colorMap = {
  cyan: {
    icon: 'text-cyan-400',
    border: 'hover:border-cyan-400/30',
    glow: 'group-hover:bg-cyan-400/5',
    bg: 'bg-cyan-400/10',
  },
  violet: {
    icon: 'text-violet-400',
    border: 'hover:border-violet-400/30',
    glow: 'group-hover:bg-violet-400/5',
    bg: 'bg-violet-400/10',
  },
}

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="// about me"
          title="Who I Am"
          subtitle="A Java Full Stack Developer with a passion for building backend systems that scale and frontends that delight."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start mb-16">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 text-slate-400 leading-relaxed"
          >
            <p className="text-slate-200 text-lg font-medium">
              I'm Mohit Shinde, a Java Full Stack Developer based in Pune, Maharashtra, India.
            </p>
            <p>
              My core expertise spans the entire web development stack — from architecting Spring Boot
              microservices and Hibernate-backed data layers on the backend, to building responsive
              React.js interfaces on the frontend. I've applied these skills in end-to-end academic
              and practical projects that mirror real-world engineering challenges.
            </p>
            <p>
              I'm particularly drawn to backend architecture: designing systems that are clean, 
              testable, and built to handle growth. Whether it's crafting REST APIs, managing 
              database relationships with ORM, or wiring up a full-stack feature end-to-end, 
              I care deeply about the quality and maintainability of what I build.
            </p>
            <p>
              I hold a Bachelor of Technology in Information Technology from G H Raisoni College 
              of Engineering and Management, Jalgaon — a foundation that shaped both my technical 
              thinking and my approach to problem-solving.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'Hibernate'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full font-mono text-xs text-cyan-400 border border-cyan-400/25 bg-cyan-400/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {[
              { number: '2+', label: 'Full Stack Projects' },
              { number: '10+', label: 'Technologies' },
              { number: 'Java', label: 'Primary Language' },
              { number: 'B.Tech', label: 'Information Technology' },
            ].map((stat, i) => (
              <div key={i} className="glass rounded-2xl p-5 border border-white/5 text-center">
                <div className="text-2xl font-extrabold text-gradient-cyan mb-1">{stat.number}</div>
                <div className="text-slate-400 text-xs leading-tight">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, i) => {
            const c = colorMap[item.color]
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group glass rounded-2xl p-6 border border-white/5 ${c.border} transition-all duration-300 cursor-default`}
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
                  <Icon size={20} className={c.icon} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
