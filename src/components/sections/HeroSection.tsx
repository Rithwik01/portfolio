'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin, Zap } from 'lucide-react'
import { PERSONAL } from '@/lib/data'
import ParticleBackground from '@/components/ui/ParticleBackground'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function HeroSection() {
  const scrollToAbout = () => {
    const el = document.getElementById('about')
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid px-6"
    >
      {/* Particle background */}
      <ParticleBackground />

      {/* Radial gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono-custom mb-8"
          style={{
            background: 'var(--accent-glow)',
            border: '1px solid rgba(0,212,255,0.2)',
            color: 'var(--accent)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
          <Zap size={10} />
          {PERSONAL.availability}
        </motion.div>

        {/* Main heading */}
        <motion.div {...fadeUp(0.2)}>
          <h1 className="font-clash text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-[0.9] tracking-tight mb-6">
            <span style={{ color: 'var(--text)' }}>
              {PERSONAL.name.split(' ')[0]}
            </span>
            <br />
            <span className="gradient-text">
              {PERSONAL.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>
        </motion.div>

        {/* Role tags */}
        <motion.div {...fadeUp(0.35)} className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {['Data Scientist', 'Data Analyst', 'Business Analyst'].map((role) => (
            <span
              key={role}
              className="tag-pill text-xs"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Subtagline */}
        <motion.p
          {...fadeUp(0.45)}
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ color: 'var(--text-muted)' }}
        >
          {PERSONAL.subTagline}
          <br />
          <span className="font-mono-custom text-sm" style={{ color: 'var(--accent)' }}>
            MS CS @ Georgia Tech · Currently at Roamio.ai
          </span>
        </motion.p>

        {/* Location */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex items-center justify-center gap-1.5 mb-10 text-sm font-mono-custom"
          style={{ color: 'var(--text-muted)' }}
        >
          <MapPin size={13} style={{ color: 'var(--accent)' }} />
          {PERSONAL.location}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(0.55)}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={PERSONAL.resumeUrl}
            download
            className="group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'var(--accent)',
              color: '#000',
              boxShadow: '0 0 20px var(--accent-glow)',
            }}
          >
            <Download size={15} />
            Download Resume
          </a>

          <a
            href={`mailto:${PERSONAL.email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'var(--surface)',
              color: 'var(--text)',
              border: '1px solid var(--border)',
            }}
          >
            <Mail size={15} />
            Get in Touch
          </a>

          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'var(--surface)',
              color: 'var(--text)',
              border: '1px solid var(--border)',
            }}
          >
            <Github size={15} />
            GitHub
          </a>

          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'var(--surface)',
              color: 'var(--text)',
              border: '1px solid var(--border)',
            }}
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.65)}
          className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { value: '', label: '' },
            { value: '1+', label: 'Years Experience' },
            { value: '', label: '' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-clash text-2xl md:text-3xl font-semibold gradient-text">
                {stat.value}
              </p>
              <p className="text-xs font-mono-custom mt-1" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono-custom" style={{ color: 'var(--text-muted)' }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} style={{ color: 'var(--accent)' }} />
        </motion.div>
      </motion.button>
    </section>
  )
}
