import React from 'react'
import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
              <Code2 size={15} className="text-white" />
            </div>
            <span className="font-mono text-sm text-slate-400">
              mohit<span className="text-cyan-400">.dev</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-xs text-center">
            © {new Date().getFullYear()} Mohit Shinde · Built with{' '}
            <Heart size={11} className="inline text-red-400" /> React & Framer Motion
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/Mohit1257', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/mohit-shinde-8b5200262', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:mohitshinde991@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="w-9 h-9 glass rounded-lg border border-white/8 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
