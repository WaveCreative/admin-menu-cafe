import { ArrowUpRight, ChevronDown, Ellipsis } from 'lucide-react'
import { SectionTitle } from '../../../components/ui/SectionTitle'

const sales = [34, 48, 39, 61, 47, 72, 53, 66, 45, 79, 58, 87, 63, 74, 51, 68, 43, 82, 59, 70, 48, 91, 65, 77, 54, 72, 47, 84]
const days = ['01', '04', '07', '10', '13', '16', '19', '22', '25', '28', '31']

export function SalesChartPanel() {
  return (
    <section className="min-w-0 rounded-[13px] shadow-sm bg-surface p-[21px_21px_18px] max-xl:px-[15px] max-md:p-[16px_13px]">
      <SectionTitle
        title="Statistik penjualan"
        subtitle="Pantau pertumbuhan penjualan kafe."
        action={<button className="grid size-[31px] shrink-0 place-items-center rounded-[9px] border border-transparent bg-transparent text-text-soft hover:bg-surface-hover hover:text-text" aria-label="Opsi grafik"><Ellipsis size={20} /></button>}
      />
      <div className="my-[22px] mb-4 flex flex-wrap items-center gap-[9px] max-md:mt-[18px]">
        <strong className="text-[23px] tracking-[-.7px] max-md:text-[21px]">Rp 8.450.000</strong>
        <span className="inline-flex items-center gap-0.5 rounded-[5px] bg-green-soft px-1.5 py-1 text-[9px] font-bold text-green"><ArrowUpRight size={15} /> 12,8%</span>
        <small className="w-full text-[9px] text-text-muted">dibanding periode sebelumnya</small>
      </div>
      <div className="mb-[10px] flex items-center justify-between">
        <span className="flex items-center gap-[7px] text-[10px] text-text-soft"><i className="size-[7px] rounded-full bg-[#a86c43]" /> Penjualan</span>
        <button className="flex items-center gap-[5px] rounded-md shadow-sm bg-surface px-2 py-1.5 text-[9px] text-text-soft">Bulanan <ChevronDown size={14} /></button>
      </div>
      <div className="grid h-[185px] grid-cols-[55px_minmax(0,1fr)] max-md:grid-cols-[49px_minmax(0,1fr)]">
        <div className="flex flex-col justify-between py-0 pr-2 pb-5 text-right text-[8px] text-text-muted">
          <span>Rp 1,0 jt</span>
          <span>Rp 750 rb</span>
          <span>Rp 500 rb</span>
          <span>Rp 250 rb</span>
          <span>Rp 0</span>
        </div>
        <div className="relative h-[165px]">
          {[0, 1, 2, 3, 4].map(line => (
            <div className="absolute right-0 left-0 z-0 border-t border-dashed border-border" key={line} style={{ top: `${line * 25}%` }} />
          ))}
          <svg
            className="absolute inset-0 h-[145px] w-full overflow-visible"
            viewBox="0 0 560 180"
            preserveAspectRatio="none"
            role="img"
            aria-label="Grafik penjualan naik turun sepanjang bulan"
          >
            <defs>
              <linearGradient id="salesFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#a86c43" stopOpacity=".22" />
                <stop offset="100%" stopColor="#a86c43" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`M ${sales.map((value, index) => `${index * (560 / (sales.length - 1))},${180 - value * 1.75}`).join(' L ')} L 560 180 L 0 180 Z`}
              fill="url(#salesFill)"
            />
            <path
              d={`M ${sales.map((value, index) => `${index * (560 / (sales.length - 1))},${180 - value * 1.75}`).join(' L ')}`}
              fill="none"
              stroke="#a86c43"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="450"
              cy={180 - sales[23] * 1.75}
              r="4.5"
              fill="#fffaf3"
              stroke="#a86c43"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="absolute right-0 bottom-0 left-0 flex justify-between text-[8px] text-text-muted">
            {days.map(day => <span key={day}>{day}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
