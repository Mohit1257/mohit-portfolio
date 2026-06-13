import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, BookOpen } from 'lucide-react'
import SectionHeader from './SectionHeader'

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6">
      <div className="absolute left-1/3 bottom-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="// education"
          title="Academic Background"
          subtitle="A strong engineering foundation in Information Technology underpins every technical decision I make."
        />

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl border border-white/5 hover:border-cyan-400/20 transition-colors duration-300 overflow-hidden"
        >
          <div className="p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={32} className="text-cyan-400" />
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-white font-bold text-xl">Bachelor of Technology</h3>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 w-fit">
                    Information Technology
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-300 font-medium text-base mb-1">
                  <BookOpen size={15} className="text-violet-400 flex-shrink-0" />
                  G H Raisoni College of Engineering and Management
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
                  <MapPin size={13} className="text-slate-500 flex-shrink-0" />
                  Jalgaon, Maharashtra, India
                </div>

                {/* Coursework tags */}
                <div>
                  <p className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-3">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Data Structures & Algorithms',
                      'Object-Oriented Programming',
                      'Database Management Systems',
                      'Web Technologies',
                      'Software Engineering',
                      'Computer Networks',
                      'Operating Systems',
                      'Java Programming',
                    ].map((course, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full border border-white/8 bg-white/3 text-slate-400"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500" />
        </motion.div>

        {/* Skills developed callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 grid sm:grid-cols-3 gap-4"
        >
          {[
            { label: 'Core Focus', value: 'Full Stack Development' },
            { label: 'Specialization', value: 'Java & Spring Ecosystem' },
            { label: 'Practical Output', value: '2 Full-Stack Projects' },
          ].map((item, i) => (
            <div key={i} className="glass rounded-xl border border-white/5 p-5 text-center">
              <div className="text-slate-500 text-xs uppercase tracking-wider font-mono mb-1">{item.label}</div>
              <div className="text-white font-semibold text-sm">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
