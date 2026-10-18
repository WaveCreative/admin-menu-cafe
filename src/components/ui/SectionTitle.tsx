import type { ReactNode } from 'react'

interface SectionTitleProps {
  title: string
  subtitle?: string
  action?: ReactNode
}

export function SectionTitle({ title, subtitle, action }: SectionTitleProps) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <h2 className="m-0 text-[14px] font-bold tracking-[-.2px] max-md:text-[13px]">{title}</h2>
        {subtitle && <p className="mt-1.25 mb-0 text-[10px] text-text-muted max-md:text-[9px] max-md:leading-normal">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}