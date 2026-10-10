import type { ReactNode } from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  action?: ReactNode
}

export function SectionTitle({ title, subtitle, action }: SectionTitleProps) {
  return (
    <div className="section-title-row">
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}