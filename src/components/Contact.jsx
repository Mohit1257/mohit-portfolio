import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react'
import SectionHeader from './SectionHeader'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mohitshinde991@gmail.com',
    href: 'mailto:mohitshinde991@gmail.com',
    color: 'cyan',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7020899644',
    href: 'tel:+917020899644',
    color: 'violet',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Mohit1257',
    href: 'https://github.com/Mohit1257',
    color: 'cyan',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Mohit Shinde',
    href: 'https://www.linkedin.com/in/mohit-shinde-8b5200262',
    color: 'violet',
  },
]

const colorMap = {
  cyan: {
    icon: 'text-cyan-400 bg-cyan-400/10',
    border: 'hover:border-cyan-400/30',
    text: 'hover:text-cyan-400',
  },
  violet: {
    icon: 'text-violet-400 bg-violet-400/10',
    border: 'hover:border-violet-400/30',
    text: 'hover:text-violet-400',
  },
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSending(true)
    // Construct mailto link
    const subject = encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:mohitshinde991@gmail.com?subject=${subject}&body=${body}`
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 800)
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      <div className="absolute right-0 bottom-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="// contact"
          title="Let's Work Together"
          subtitle="Open to new opportunities, collaborations, and interesting projects. Drop me a message."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: info + links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h3 className="text-white font-semibold text-xl mb-3">Get In Touch</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you have a role to discuss, a project to collaborate on, or just want to say 
                hello — I'm always happy to connect. You'll typically hear back within 24 hours.
              </p>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-sm mb-8">
              <MapPin size={14} className="text-cyan-400" />
              Pune, Maharashtra, India
            </div>

            <div className="space-y-3">
              {contactLinks.map((link, i) => {
                const c = colorMap[link.color]
                const Icon = link.icon
                return (
                  <motion.a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={`flex items-center gap-4 glass rounded-xl border border-white/5 ${c.border} ${c.text} p-4 transition-all duration-200 group`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${c.icon}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs font-mono">{link.label}</div>
                      <div className="text-slate-300 text-sm group-hover:text-current transition-colors">{link.value}</div>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass rounded-2xl border border-white/5 p-6 sm:p-8">
              <h3 className="text-white font-semibold text-lg mb-6">Send a Message</h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <CheckCircle size={48} className="text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold text-lg">Message sent!</p>
                    <p className="text-slate-400 text-sm mt-1">Your email client should open. I'll get back to you soon.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs font-mono mb-1.5">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 focus:bg-white/7 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-mono mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 focus:bg-white/7 transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-mono mb-1.5">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 focus:bg-white/7 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-mono mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/40 focus:bg-white/7 transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed glow-cyan"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
