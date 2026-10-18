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
    <article className="min-w-0 rounded-[13px] shadow-sm bg-surface p-[17px_18px_16px] max-xl:p-[15px_13px] 2xl:p-[21px] max-md:p-[13px] max-xs:p-[11px]">
      <div className="flex items-center justify-between gap-[7px]">
        <span className="text-[10px] font-semibold text-text-soft max-md:text-[9px]">{label}</span>
        <span className="grid size-[34px] place-items-center rounded-[10px] bg-accent-soft text-accent max-md:size-[30px]"><Icon size={19} strokeWidth={1.8} /></span>
      </div>
      <div className="my-[14px] text-[clamp(18px,1.7vw,24px)] font-extrabold tracking-[-.8px] whitespace-nowrap max-xl:text-[20px] max-md:my-[11px_0_8px] max-md:text-[clamp(17px,5vw,22px)] max-xs:text-[17px]">{value}</div>
      <div className="flex flex-wrap items-center gap-[6px] max-md:gap-1">
        <span className={`inline-flex items-center gap-0.5 text-[9px] font-bold max-md:text-[8px] ${positive ? 'text-green' : 'text-red'}`}>{positive ? '↗' : '↘'} {change}</span>
        <span className="text-[9px] text-text-muted max-md:text-[8px]">{note}</span>
      </div>
    </article>
  )
}