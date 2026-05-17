'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SKILLS } from '@/lib/data'
import SectionWrapper, { SectionHeading } from '@/components/ui/SectionWrapper'

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>(Object.keys(SKILLS)[0])

  const categories = Object.entries(SKILLS)

  return (
    <SectionWrapper id="skills" className="bg-[var(--bg-secondary)]">
      <SectionHeading
        label="04 · Skills"
        title="What I work with."
        description="Languages, frameworks, tools, and cloud platforms I use to build things."
      />

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Category selector */}
        <div className="section-reveal lg:col-span-1 space-y-2">
          {categories.map(([name, data]) => (
            <motion.button
              key={name}
              onClick={() => setActiveCategory(name)}
              whileHover={{ x: 4 }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200"
              style={{
                background: activeCategory === name ? 'var(--surface-hover)' : 'transparent',
                border: activeCategory === name
                  ? `1px solid ${data.color}30`
                  : '1px solid transparent',
              }}
            >
              <span className="text-xl" aria-hidden="true">{data.icon}</span>
              <div className="flex-1">
                <p
                  className="text-sm font-semibold font-clash"
                  style={{ color: activeCategory === name ? data.color : 'var(--text)' }}
                >
                  {name}
                </p>
                <p className="text-xs mt-0.5 font-mono-custom" style={{ color: 'var(--text-muted)' }}>
                  {data.items.length} technologies
                </p>
              </div>
              {activeCategory === name && (
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: data.color }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Skills display */}
        <div className="section-reveal lg:col-span-2">
          <AnimatePresence mode="wait">
            {categories
              .filter(([name]) => name === activeCategory)
              .map(([name, data]) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div
                    className="glass-card rounded-2xl p-6 mb-6"
                    style={{ borderColor: `${data.color}20` }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl">{data.icon}</span>
                      <div>
                        <h3 className="font-clash text-xl font-semibold" style={{ color: 'var(--text)' }}>
                          {name}
                        </h3>
                        <p className="text-xs font-mono-custom" style={{ color: data.color }}>
                          {data.items.length} skills
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {data.items.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-4 py-2 rounded-xl text-sm font-medium cursor-default transition-all duration-200"
                          style={{
                            background: `${data.color}10`,
                            border: `1px solid ${data.color}25`,
                            color: 'var(--text)',
                          }}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* All skills overview mini-bar */}
                  <div className="glass-card rounded-2xl p-5">
                    <p
                      className="text-xs font-mono-custom tracking-widest uppercase mb-4"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      All Categories Overview
                    </p>
                    <div className="space-y-3">
                      {categories.map(([catName, catData]) => (
                        <div key={catName} className="flex items-center gap-3">
                          <span className="text-sm w-6 text-center">{catData.icon}</span>
                          <span
                            className="text-xs font-mono-custom w-28 shrink-0"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            {catName}
                          </span>
                          <div
                            className="flex-1 h-1.5 rounded-full overflow-hidden"
                            style={{ background: 'var(--surface)' }}
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(catData.items.length / 8) * 100}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.1 }}
                              className="h-full rounded-full"
                              style={{ background: catData.color }}
                            />
                          </div>
                          <span
                            className="text-xs font-mono-custom w-4"
                            style={{ color: 'var(--text-muted)' }}
                          >
                            {catData.items.length}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  )
}
