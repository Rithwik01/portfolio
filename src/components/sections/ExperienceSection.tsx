'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Briefcase, Calendar } from 'lucide-react'
import { EXPERIENCE } from '@/lib/data'
import SectionWrapper, { SectionHeading } from '@/components/ui/SectionWrapper'

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-[var(--bg-secondary)]">
      <SectionHeading
        label="02 · Experience"
        title="Where I've made an impact."
        description="Turning data into decisions and code into products."
      />

      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)',
            opacity: 0.3,
          }}
          aria-hidden="true"
        />

        <div className="space-y-8">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative md:pl-24 group"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-6 top-7 w-4 h-4 rounded-full border-2 hidden md:flex items-center justify-center transition-all duration-300 group-hover:scale-125"
                style={{
                  borderColor: job.color,
                  background: 'var(--bg-secondary)',
                  boxShadow: `0 0 12px ${job.color}50`,
                }}
                aria-hidden="true"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: job.color }}
                />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className="glass-card rounded-2xl p-6 md:p-8 animated-border"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div className="flex items-start gap-4">
                    {/* Company avatar */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                      style={{ background: `${job.color}15`, border: `1px solid ${job.color}30` }}
                    >
                      {job.emoji}
                    </div>
                    <div>
                      <h3
                        className="font-clash text-xl font-semibold"
                        style={{ color: 'var(--text)' }}
                      >
                        {job.company}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span
                          className="text-sm font-medium"
                          style={{ color: job.color }}
                        >
                          {job.role}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-mono-custom"
                          style={{
                            background: `${job.color}15`,
                            color: job.color,
                            border: `1px solid ${job.color}30`,
                          }}
                        >
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                    <div className="flex items-center gap-1.5 text-xs font-mono-custom" style={{ color: 'var(--text-muted)' }}>
                      <Calendar size={12} />
                      {job.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono-custom" style={{ color: 'var(--text-muted)' }}>
                      <Briefcase size={12} />
                      {job.location}
                    </div>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2.5 mb-5">
                  {job.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0"
                        style={{ color: job.color }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {job.skills.map((skill) => (
                    <span key={skill} className="tag-pill">{skill}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
