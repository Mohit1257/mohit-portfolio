import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const skillGroups = [
  {
    category: 'Languages',
    color: 'cyan',
    skills: [
      { name: 'Java', level: 90 },
    ],
  },
  {
    category: 'Backend',
    color: 'violet',
    skills: [
      { name: 'Spring Boot', level: 85 },
      { name: 'Spring MVC', level: 80 },
      { name: 'Hibernate ORM', level: 82 },
      { name: 'JDBC', level: 75 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    category: 'Frontend',
    color: 'cyan',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 78 },
      { name: 'Tailwind CSS', level: 75 },
    ],
  },
  {
    category: 'Database',
    color: 'violet',
    skills: [
      { name: 'MySQL', level: 83 },
    ],
  },
  {
    category: 'Tools & IDEs',
    color: 'cyan',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Maven', level: 78 },
      { name: 'Postman', level: 82 },
      { name: 'VS Code', level: 88 },
      { name: 'Eclipse IDE', level: 80 },
    ],
  },
]

const tagSkills = [
  'Java', 'Spring Boot', 'Spring MVC', 'Hibernate ORM', 'JDBC', 'REST APIs',
  'React.js', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS',
  'MySQL', 'Git', 'GitHub', 'Maven', 'Postman', 'VS Code', 'Eclipse IDE',
]

function SkillBar({ name, level, color, delay }) {
  const barColor = color === 'cyan'
    ? 'from-cyan-500 to-cyan-300'
    : 'from-violet-500 to-violet-300'

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className={`text-xs font-mono ${color === 'cyan' ? 'text-cyan-400' : 'text-violet-400'}`}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6">
      {/* Subtle background accent */}
      <div className="absolute left-0 top-1/2 w-72 h-72 bg-violet-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="// skills"
          title="Technical Arsenal"
          subtitle="Technologies and tools I use to build production-ready applications from backend APIs to polished UIs."
        />

        {/* Skill bars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className={`w-2 h-2 rounded-full ${group.color === 'cyan' ? 'bg-cyan-400' : 'bg-violet-400'}`} />
                <span className={`font-mono text-xs font-semibold tracking-wider uppercase ${group.color === 'cyan' ? 'text-cyan-400' : 'text-violet-400'}`}>
                  {group.category}
                </span>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={si}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  delay={gi * 0.1 + si * 0.06}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-5">Full Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-2">
            {tagSkills.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ scale: 1.08, borderColor: 'rgba(34,211,238,0.5)' }}
                className="px-3 py-1.5 glass rounded-full border border-white/8 text-slate-300 text-xs font-medium cursor-default select-none transition-colors duration-200 hover:text-cyan-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
