import {
  CalendarDays,
  ChevronDown,
  CircleDollarSign,
  Coffee,
  ShoppingBag,
  Users,
} from 'lucide-react'
import { StatCard } from '../../../components/ui/StatCard'

export function DashboardOverview() {
  return (
    <>
      <div className="my-[30px] mb-[17px] flex items-center justify-between gap-[15px] max-md:mt-6 max-md:items-start">
        <div>
          <h2 className="m-0 text-[14px] font-bold tracking-[-.2px] max-md:text-[13px]">Ringkasan bisnis</h2>
          <p className="mt-[5px] mb-0 text-[10px] text-text-muted max-md:max-w-[180px] max-md:leading-[1.5]">Performa tokomu dalam satu periode.</p>
        </div>
        <button className="inline-flex min-h-[38px] items-center justify-center gap-[9px] rounded-lg shadow-sm bg-surface px-[13px] text-[10px] font-bold text-text-soft transition-colors hover:bg-surface-hover active:translate-y-px max-md:gap-[5px] max-md:px-2 max-md:text-[9px] max-xs:max-w-[148px]">
          <CalendarDays size={16} /> 1–31 Oktober 2026 <ChevronDown size={15} />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-[15px] max-xl:gap-[10px] max-md:grid-cols-2 max-md:gap-[10px]">
        <StatCard label="Total penjualan" value="Rp 8.450.000" change="12,8%" icon={CircleDollarSign} />
        <StatCard label="Total pesanan" value="248" change="8,2%" icon={ShoppingBag} />
        <StatCard label="Pelanggan baru" value="86" change="4,6%" icon={Users} />
        <StatCard label="Menu terjual" value="512" change="2,4%" positive={false} icon={Coffee} />
      </div>
    </>
  )
}
