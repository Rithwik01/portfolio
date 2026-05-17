'use client'

import { motion } from 'framer-motion'
import { Brain, Code2, Database, Rocket, ChartColumn, FileChartColumn, Presentation, Palette } from 'lucide-react'
import { PERSONAL } from '@/lib/data'
import SectionWrapper, { SectionHeading } from '@/components/ui/SectionWrapper'

const traits = [
  {
    icon: ChartColumn,
    label: 'Data Analysis',
    desc: 'Exploratory analysis, statistical testing, trend & cohort analysis',
    color: '#08d955',
  },
  {
    icon: FileChartColumn,
    label: 'Business Intelligence',
    desc: 'KPI dashboards, executive reporting, Tableau, Power BI, Looker',
    color: '#0805e9',
  },
  {
    icon: Brain,
    label: 'ML / Predictive Models',
    desc: 'Forecasting, classification, segmentation, churn & LTV models',
    color: '#bb11f3',
  },
  {
    icon: Database,
    label: 'SQL & Data Pipelines',
    desc: 'Complex queries, ETL/ELT, dbt, Snowflake, BigQuery',
    color: '#f9bd09',
  },
  {
    icon: Presentation,
    label: 'Stakeholder Communication',
    desc: 'Translating data insights into business decisions & strategy',
    color: '#e11818',
  },
  {
    icon: Palette,
    label: 'Data Visualization',
    desc: 'Narrative-driven visuals, Matplotlib, Seaborn, D3, Figma charts',
    color: '#c652cc',
  },
]

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        label="01 · About"
        title="Building at the frontier of data & AI."
        description=""
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <div className="section-reveal space-y-5">
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--text)' }}
          >
            {PERSONAL.bio}
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
          </p>

          {/* Quick facts */}
          <div
            className="mt-6 p-5 rounded-2xl glass-card"
          >
            <p
              className="text-xs font-mono-custom tracking-widest uppercase mb-4"
              style={{ color: 'var(--accent)' }}
            >
              Quick Facts
            </p>
            {[
              ['Status', 'MS CS (AI/ML) @ Georgia Tech – Part-time'],
              ['Currently', 'Data Analyst @ Roamio.ai'],
              ['Certs', 'AWS AI Practitioner · Databricks GenAI'],
              ['Location', 'Atlanta, GA · US Citizen'],
              ['Looking for', 'Data Analyst / Data Science roles · 2026'],
            ].map(([key, val]) => (
              <div
                key={key}
                className="flex gap-4 py-2 text-sm"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <span
                  className="font-mono-custom w-24 shrink-0"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {key}
                </span>
                <span style={{ color: 'var(--text)' }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trait cards */}
        <div className="section-reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
          {traits.map((trait, i) => {
            const Icon = trait.icon
            return (
              <motion.div
                key={trait.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="animated-border glass-card rounded-2xl p-6 cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${trait.color}15`, border: `1px solid ${trait.color}30` }}
                >
                  <Icon size={18} style={{ color: trait.color }} />
                </div>
                <h3
                  className="font-clash text-lg font-semibold mb-1"
                  style={{ color: 'var(--text)' }}
                >
                  {trait.label}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {trait.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
