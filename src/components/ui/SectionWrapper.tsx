'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  noPadding?: boolean
}

export default function SectionWrapper({ id, children, className, noPadding }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full',
        !noPadding && 'py-24 px-6',
        className
      )}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeading({ label, title, description, centered }: SectionHeadingProps) {
  return (
    <div className={cn('mb-16 section-reveal', centered && 'text-center')}>
      <p
        className="text-xs font-mono-custom tracking-widest uppercase mb-3"
        style={{ color: 'var(--accent)' }}
      >
        {label}
      </p>
      <h2
        className="font-clash text-4xl md:text-5xl font-semibold leading-tight"
        style={{ color: 'var(--text)' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-4 text-base leading-relaxed max-w-2xl"
          style={{ color: 'var(--text-muted)', marginLeft: centered ? 'auto' : 0, marginRight: centered ? 'auto' : 0 }}
        >
          {description}
        </p>
      )}
    </div>
  )
}
