import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Github, Linkedin, Download, ArrowDown } from 'lucide-react'
import mohitImg from '../assets/mohit.jpg'

const roles = [
  'Java Full Stack Developer',
  'Spring Boot Engineer',
  'React.js Developer',
  'Backend Architect',
]

function useTyping(words, speed = 80, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }

    setText(current.substring(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return text
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
}

export default function Hero() {
  const typedRole = useTyping(roles)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6"
    >
      {/* Radial gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text content */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-400/20 text-cyan-400 text-xs font-mono font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for Opportunities
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3"
            >
              Hi, I'm{' '}
              <span className="text-gradient-cyan">Mohit Shinde</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-xl sm:text-2xl font-mono text-slate-300 mb-6 min-h-[2rem]"
            >
              <span className="text-violet-400">&lt;</span>
              <span className="text-cyan-300">{typedRole}</span>
              <span className="typing-cursor" />
              <span className="text-violet-400"> /&gt;</span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
            >
              Building scalable full-stack web applications with Java, Spring Boot, and React.js.
              Passionate about clean architecture, REST APIs, and performance-driven backend systems.
            </motion.p>

            {/* Location */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="flex items-center gap-2 text-slate-400 text-sm mb-8"
            >
              <MapPin size={14} className="text-cyan-400" />
              <span>Pune, Maharashtra, India</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="flex flex-wrap gap-3 mb-8"
            >
              <button
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 glow-cyan"
              >
                View Projects
              </button>
              <a
                href="mailto:mohitshinde991@gmail.com"
                className="px-6 py-3 rounded-xl glass border border-white/10 text-slate-200 font-semibold text-sm hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-200 flex items-center gap-2"
              >
                <Mail size={15} />
                Get In Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={6}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/Mohit1257"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200 text-sm"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohit-shinde-8b5200262"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 text-slate-300 hover:text-[#0077b5] hover:border-[#0077b5]/40 transition-all duration-200 text-sm"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="tel:+917020899644"
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 text-slate-300 hover:text-green-400 hover:border-green-400/40 transition-all duration-200 text-sm"
              >
                <Phone size={16} />
                Call
              </a>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30"
                style={{ margin: '-24px' }}
              />

              {/* Inner glow ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-violet-400/40"
                style={{ margin: '-12px' }}
              />

              {/* Floating orbit dots */}
              {[0, 90, 180, 270].map((deg, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400"
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-6px',
                    marginLeft: '-6px',
                  }}
                  animate={{ rotate: [deg, deg + 360] }}
                  transition={{ duration: 8 + i, repeat: Infinity, ease: 'linear' }}
                  custom={i}
                >
                  <motion.div
                    animate={{ x: [120, 120], rotate: [0, -360] }}
                    transition={{ duration: 8 + i, repeat: Infinity, ease: 'linear' }}
                    className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400"
                    style={{ position: 'absolute', left: '120px', top: 0 }}
                  />
                </motion.div>
              ))}

              {/* Profile image container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
              >
                {/* Glow background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30 blur-2xl" />

                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 via-violet-400 to-cyan-400">
                  <div className="w-full h-full rounded-full bg-[#040d21]" />
                </div>

                {/* Actual image */}
                <img
                  src={mohitImg}
                  alt="Mohit Shinde – Java Full Stack Developer"
                  className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full object-cover object-top"
                />
              </motion.div>

              {/* Floating badge: experience */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-8 top-1/4 glass border border-cyan-400/20 rounded-xl px-3 py-2 text-xs"
              >
                <div className="text-cyan-400 font-mono font-bold text-sm">Java</div>
                <div className="text-slate-400">Spring Boot</div>
              </motion.div>

              {/* Floating badge: react */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -right-8 bottom-1/4 glass border border-violet-400/20 rounded-xl px-3 py-2 text-xs"
              >
                <div className="text-violet-400 font-mono font-bold text-sm">React</div>
                <div className="text-slate-400">Full Stack</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs"
        >
          <span className="font-mono">scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
