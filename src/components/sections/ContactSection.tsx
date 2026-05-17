'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle } from 'lucide-react'
import { PERSONAL } from '@/lib/data'
import SectionWrapper, { SectionHeading } from '@/components/ui/SectionWrapper'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.')
      return
    }
    setSending(true)
    setError('')
    // Simulate send — in production, wire to a real API like Resend, EmailJS, or Formspree
    await new Promise((res) => setTimeout(res, 1500))
    setSending(false)
    setSent(true)
  }

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
      color: '#00d4ff',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: `@${PERSONAL.githubHandle}`,
      href: PERSONAL.github,
      color: '#a78bfa',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'rithwikkamalesh',
      href: PERSONAL.linkedin,
      color: '#34d399',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: PERSONAL.location,
      href: null,
      color: '#fbbf24',
    },
  ]

  return (
    <SectionWrapper id="contact" className="bg-[var(--bg-secondary)]">
      <SectionHeading
        label="06 · Contact"
        title="Let's work together."
        description="Open to full-time, internship, and freelance opportunities. Don't hesitate to reach out."
        centered
      />

      <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        {/* Contact info */}
        <div className="lg:col-span-2 space-y-4 section-reveal">
          {contacts.map((c, i) => {
            const Icon = c.icon
            const content = (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 p-4 rounded-2xl glass-card transition-all duration-200"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}
                >
                  <Icon size={16} style={{ color: c.color }} />
                </div>
                <div>
                  <p className="text-xs font-mono-custom" style={{ color: 'var(--text-muted)' }}>
                    {c.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                    {c.value}
                  </p>
                </div>
              </motion.div>
            )

            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={c.label}>{content}</div>
            )
          })}

          {/* Availability badge */}
          <div
            className="mt-2 p-4 rounded-2xl"
            style={{
              background: 'rgba(52,211,153,0.05)',
              border: '1px solid rgba(52,211,153,0.2)',
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono-custom" style={{ color: '#34d399' }}>
                Available for work
              </span>
            </div>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {PERSONAL.availability}
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-3 section-reveal">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center gap-4"
            >
              <CheckCircle size={48} style={{ color: '#34d399' }} />
              <h3 className="font-clash text-2xl font-semibold" style={{ color: 'var(--text)' }}>
                Message sent!
              </h3>
              <p style={{ color: 'var(--text-muted)' }} className="text-sm">
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                className="text-sm font-mono-custom mt-2"
                style={{ color: 'var(--accent)' }}
              >
                Send another →
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'name', label: 'Name *', placeholder: 'John Smith', type: 'text' },
                  { name: 'email', label: 'Email *', placeholder: 'john@company.com', type: 'email' },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-xs font-mono-custom mb-1.5"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--accent)'
                        e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'var(--border)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono-custom mb-1.5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Job opportunity / Collaboration / General inquiry"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--accent)'
                    e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono-custom mb-1.5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about the role, project, or just say hi..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--accent)'
                    e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border)'
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              {error && (
                <p className="text-xs text-red-400 font-mono-custom">{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: 'var(--accent)',
                  color: '#000',
                  boxShadow: '0 0 20px var(--accent-glow)',
                }}
              >
                {sending ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-black border-t-transparent rounded-full block"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}
