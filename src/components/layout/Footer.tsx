'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { PERSONAL } from '@/lib/data'

export default function Footer() {
  return (
    <footer
      className="py-10 border-t text-center"
      style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-mono-custom" style={{ color: 'var(--text-muted)' }}>
            Built with <span style={{ color: 'var(--accent)' }}>Next.js</span> + Framer Motion ·{' '}
            <span style={{ color: 'var(--accent)' }}>2025</span>
          </p>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110 hover:text-[var(--accent)]"
              style={{ color: 'var(--text-muted)' }}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110 hover:text-[var(--accent)]"
              style={{ color: 'var(--text-muted)' }}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="transition-all duration-200 hover:scale-110 hover:text-[var(--accent)]"
              style={{ color: 'var(--text-muted)' }}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-xs font-mono-custom" style={{ color: 'var(--text-muted)' }}>
            {PERSONAL.name} · {PERSONAL.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
