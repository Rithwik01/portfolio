'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Star, ChevronDown, ChevronUp } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import SectionWrapper, { SectionHeading } from '@/components/ui/SectionWrapper'

const categories = ['All', 'AI / Agentic Systems', 'Computer Vision', 'Robotics & Embedded AI', 'ML / Finance']

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="03 · Projects"
        title="Things I've built."
        description="From agentic AI pipelines to autonomous drones — projects that push the boundaries."
      />

      {/* Category filter */}
      <div className="section-reveal flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-1.5 rounded-full text-sm font-mono-custom transition-all duration-200"
            style={{
              background: activeCategory === cat ? 'var(--accent)' : 'var(--surface)',
              color: activeCategory === cat ? '#000' : 'var(--text-muted)',
              border: `1px solid ${activeCategory === cat ? 'transparent' : 'var(--border)'}`,
              fontWeight: activeCategory === cat ? 600 : 400,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={project.featured && i === 0 ? 'md:col-span-2' : ''}
            >
              <ProjectCard
                project={project}
                featured={project.featured && i === 0}
                expanded={expandedId === project.id}
                onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  )
}

function ProjectCard({
  project,
  featured,
  expanded,
  onToggle,
}: {
  project: (typeof PROJECTS)[number]
  featured: boolean
  expanded: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="glass-card rounded-2xl overflow-hidden animated-border group h-full flex flex-col"
    >
      {/* Top accent line */}
      <div
        className="h-0.5 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className={`p-6 md:p-8 flex flex-col flex-1 ${featured ? 'md:flex-row md:gap-10' : ''}`}>
        {/* Left / Main content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
              >
                {project.emoji}
              </div>
              <div>
                <span
                  className="text-xs font-mono-custom"
                  style={{ color: project.color }}
                >
                  {project.category}
                </span>
                {project.featured && (
                  <div className="flex items-center gap-1">
                    <Star size={10} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
                    <span className="text-xs font-mono-custom" style={{ color: '#fbbf24' }}>
                      Featured
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                onClick={(e) => e.stopPropagation()}
                aria-label="GitHub"
              >
                <Github size={14} style={{ color: 'var(--text-muted)' }} />
              </a>
            </div>
          </div>

          <h3
            className="font-clash text-xl md:text-2xl font-semibold mb-3 leading-tight"
            style={{ color: 'var(--text)' }}
          >
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        </div>

        {/* Right / Highlights (or below for non-featured) */}
        <div className={featured ? 'md:w-64 md:shrink-0' : ''}>
          <AnimatePresence>
            {(featured || expanded) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div
                  className="rounded-xl p-4"
                  style={{ background: `${project.color}08`, border: `1px solid ${project.color}20` }}
                >
                  <p
                    className="text-xs font-mono-custom tracking-wider uppercase mb-3"
                    style={{ color: project.color }}
                  >
                    Highlights
                  </p>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text)' }}>
                        <span style={{ color: project.color }} className="mt-0.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle for non-featured */}
          {!featured && (
            <button
              onClick={onToggle}
              className="mt-3 flex items-center gap-1 text-xs font-mono-custom transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
            >
              {expanded ? (
                <>Hide details <ChevronUp size={12} /></>
              ) : (
                <>Show highlights <ChevronDown size={12} /></>
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
