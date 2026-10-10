import type { LucideIcon } from 'lucide-react'

interface StatCardProps {
  label: string
  value: string
  change: string
  positive?: boolean
  icon: LucideIcon
  note?: string
}

export function StatCard({ label, value, change, positive = true, icon: Icon, note = 'dari bulan lalu' }: StatCardProps) {
  return (
    <article className="stat-card">
      <div className="stat-top">
        <span className="stat-label">{label}</span>
        <span className="stat-icon"><Icon size={19} strokeWidth={1.8} /></span>
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-foot">
        <span className={`stat-change ${positive ? 'change-positive' : 'change-negative'}`}>{positive ? '↗' : '↘'} {change}</span>
        <span className="stat-note">{note}</span>
      </div>
    </article>
  )
}