'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award, Users } from 'lucide-react'
import { EDUCATION, CERTIFICATIONS } from '@/lib/data'
import SectionWrapper, { SectionHeading } from '@/components/ui/SectionWrapper'

export default function EducationSection() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        label="05 · Education"
        title="Academic foundation."
        description="Where I learned to think in systems, data, and algorithms."
      />

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Education cards */}
        <div className="lg:col-span-3 space-y-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -3 }}
              className="glass-card rounded-2xl p-6 animated-border section-reveal"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
                >
                  {edu.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3
                        className="font-clash text-lg font-semibold"
                        style={{ color: 'var(--text)' }}
                      >
                        {edu.school}
                      </h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: edu.color }}>
                        {edu.degree}
                      </p>
                      <p className="text-xs font-mono-custom mt-1" style={{ color: 'var(--text-muted)' }}>
                        {edu.concentration}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-full font-mono-custom shrink-0"
                      style={{
                        background: `${edu.color}15`,
                        color: edu.color,
                        border: `1px solid ${edu.color}30`,
                      }}
                    >
                      {edu.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs font-mono-custom" style={{ color: 'var(--text-muted)' }}>
                    <span>{edu.period}</span>
                    <span>·</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Note */}
              {'note' in edu && edu.note && (
                <p
                  className="text-xs font-mono-custom mb-4 px-3 py-2 rounded-lg"
                  style={{
                    background: `${edu.color}08`,
                    color: edu.color,
                    border: `1px solid ${edu.color}20`,
                  }}
                >
                  ✦ {edu.note}
                </p>
              )}

              {/* Coursework */}
              {edu.courses && edu.courses.length > 0 && (
                <div className="mb-4">
                  <div
                    className="flex items-center gap-1.5 text-xs font-mono-custom tracking-wider uppercase mb-2"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <BookOpen size={11} />
                    Relevant Coursework
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="text-xs px-2.5 py-1 rounded-lg font-mono-custom"
                        style={{
                          background: 'var(--surface)',
                          color: 'var(--text-muted)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Clubs */}
              {edu.clubs && (
                <div>
                  <div
                    className="flex items-center gap-1.5 text-xs font-mono-custom tracking-wider uppercase mb-2"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <Users size={11} />
                    Clubs & Organizations
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.clubs.map((club) => (
                      <span key={club} className="tag-pill">{club}</span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <div className="lg:col-span-2 section-reveal">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6 h-fit"
          >
            <div className="flex items-center gap-2 mb-6">
              <Award size={18} style={{ color: 'var(--accent)' }} />
              <h3
                className="font-clash text-lg font-semibold"
                style={{ color: 'var(--text)' }}
              >
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-[var(--surface)]"
                >
                  <span className="text-xl shrink-0">{cert.emoji}</span>
                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: 'var(--text)' }}
                    >
                      {cert.name}
                    </p>
                    <p
                      className="text-xs font-mono-custom mt-0.5"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {cert.issuer}
                    </p>
                    <span
                      className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full font-mono-custom"
                      style={{
                        background: cert.status === 'Active' ? 'rgba(52,211,153,0.1)' : 'var(--accent-glow)',
                        color: cert.status === 'Active' ? '#34d399' : 'var(--accent)',
                        border: `1px solid ${cert.status === 'Active' ? 'rgba(52,211,153,0.2)' : 'rgba(0,212,255,0.2)'}`,
                      }}
                    >
                      {cert.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Georgia Tech callout */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 glass-card rounded-2xl p-5"
            style={{ border: '1px solid rgba(251,191,36,0.2)' }}
          >
            <p className="text-xs font-mono-custom" style={{ color: 'var(--text-muted)' }}>
              Currently enrolled in
            </p>
            <p
              className="font-clash text-base font-semibold mt-1"
              style={{ color: 'var(--text)' }}
            >
              Georgia Tech OMSCS
            </p>
            <p className="text-xs mt-1" style={{ color: '#fbbf24' }}>
              🏆 Top 5 CS Graduate Program · AI/ML Specialization
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
