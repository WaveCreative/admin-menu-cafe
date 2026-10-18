import { ArrowRight, Ellipsis } from 'lucide-react'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { mockMenu } from '../../../data/mock-data'
import { formatRupiah } from '../../../lib/format'

const bestSellers = [
  { name: 'Kopi Susu Senja', category: 'Coffee', sold: 128, price: 24000, menuIndex: 0, width: '86%' },
  { name: 'Iced Americano', category: 'Coffee', sold: 96, price: 20000, menuIndex: 1, width: '68%' },
  { name: 'Matcha Latte', category: 'Non Coffee', sold: 74, price: 28000, menuIndex: 2, width: '52%' },
  { name: 'Caramel Macchiato', category: 'Coffee', sold: 58, price: 30000, menuIndex: 4, width: '40%' },
]

export function BestSellersPanel() {
  return (
    <section className="min-w-0 rounded-[13px] shadow-sm bg-surface p-[21px_21px_18px] max-xl:px-[15px] max-md:p-[16px_13px]">
      <SectionTitle
        title="Menu terlaris"
        subtitle="Paling banyak dipesan bulan ini."
        action={<button className="grid size-[31px] shrink-0 place-items-center rounded-[9px] border border-transparent bg-transparent text-text-soft hover:bg-surface-hover hover:text-text" aria-label="Opsi menu terlaris"><Ellipsis size={20} /></button>}
      />
      <div className="mt-[23px] grid gap-[18px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-[15px]">
        {bestSellers.map(item => (
          <div className="flex min-w-0 items-center gap-[10px]" key={item.name}>
            <img className="size-[43px] shrink-0 rounded-[10px] bg-surface-hover object-cover" src={mockMenu[item.menuIndex].image} alt="" />
            <div className="min-w-0 flex-1">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[10px] font-bold">{item.name}</div>
              <small className="mt-1 block text-[9px] text-text-muted">{item.category} · {item.sold} terjual</small>
              <div className="mt-2 h-1 overflow-hidden rounded bg-surface-hover"><span className="block h-full rounded bg-[#b78a65]" style={{ width: item.width }} /></div>
            </div>
            <strong className="shrink-0 text-[9px] font-bold text-text-soft">{formatRupiah(item.price)}</strong>
          </div>
        ))}
      </div>
      <button
        className="mt-[17px] flex w-full items-center justify-center gap-2 border-0 border-t border-border bg-transparent pt-3 text-[10px] font-bold text-accent"
        onClick={() => window.alert('Daftar menu lengkap akan tersedia di halaman Menu.')}
      >
        Lihat semua menu <ArrowRight size={15} />
      </button>
    </section>
  )
}
