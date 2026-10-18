import {
  ChartNoAxesCombined,
  Coffee,
  LayoutDashboard,
  ListTree,
  ShoppingBag,
  X,
  MoveUpRight,
} from 'lucide-react'
import type { AdminPage } from '../../types'

interface SidebarProps {
  activePage: AdminPage
  onNavigate: (page: AdminPage) => void
  open: boolean
  onClose: () => void
}

const navItems: { id: AdminPage; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'menu', label: 'Menu', icon: Coffee },
  { id: 'categories', label: 'Kategori', icon: ListTree },
  { id: 'orders', label: 'Pesanan', icon: ShoppingBag },
  { id: 'reports', label: 'Laporan', icon: ChartNoAxesCombined },
]

export function Sidebar({ activePage, onNavigate, open, onClose }: SidebarProps) {
  return (
    <>
      {open && <button aria-label="Tutup navigasi" className="fixed inset-0 z-40 border-0 bg-black/40 md:hidden" onClick={onClose} />}
      <aside className={`fixed inset-y-0 left-0 z-[30] flex w-[252px] flex-col overflow-y-auto scrollbar-thin [scrollbar-color:var(--border)_transparent] shadow-sm bg-surface px-[17px] pt-[26px] pb-[15px] max-xl:w-[225px] max-md:z-50 max-md:w-[270px] max-md:-translate-x-[102%] max-md:transition-transform max-md:duration-200 ${open ? 'max-md:translate-x-0 max-md:shadow-[15px_0_45px_rgb(0_0_0_/_12%)]' : ''}`}>
        <div className="mb-[45px] flex items-center gap-[11px] px-[9px]">
          <div className="grid size-[43px] place-items-center rounded-[14px] bg-[#754c32] text-[#fff6ec]"><Coffee size={22} strokeWidth={2.2} /></div>
          <div className="flex flex-col gap-[3px]">
            <strong className="text-[22px] leading-none tracking-[-.8px]">Ruang<span className="text-accent">kopi.</span></strong>
            <small className="text-[8px] font-bold tracking-[1.45px] text-text-muted">CAFE MANAGEMENT</small>
          </div>
          <button className="relative ml-auto hidden size-[38px] shrink-0 place-items-center rounded-[9px] border border-border bg-surface text-text-soft max-md:grid" aria-label="Tutup menu" onClick={onClose}>
            <X size={19} />
          </button>
        </div>

        <div className="mb-3 px-3 text-[10px] font-bold tracking-[1.35px] text-text-muted">MENU UTAMA</div>
        <nav className="grid gap-[5px]" aria-label="Navigasi utama">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`flex min-h-[46px] w-full items-center gap-[13px] rounded-[10px] border-0 px-[13px] text-left text-[13px] transition-colors ${activePage === id ? 'bg-accent-soft font-bold text-accent-dark' : 'bg-transparent font-medium text-text-soft hover:bg-surface-hover hover:text-text'}`}
              onClick={() => { onNavigate(id); onClose() }}
            >
              <Icon size={19} strokeWidth={1.9} />
              <span>{label}</span>
              {id === 'orders' && <span className="ml-auto grid size-[22px] min-w-[22px] place-items-center rounded-[7px] bg-surface text-[10px] text-accent">4</span>}
            </button>
          ))}
        </nav>

        <div className="mt-5">
          <div className="rounded-[13px] shadow-sm bg-surface-soft p-4">
            <div className="mb-[11px] grid size-7.5 place-items-center rounded-[9px] bg-accent-soft text-accent"><Coffee size={17} /></div>
            <strong className="text-[12px]">Butuh bantuan?</strong>
            <p className="my-[6px] mb-3 text-[10px] leading-[1.6] text-text-soft">Kelola kafe jadi lebih mudah setiap hari.</p>
            <button className="flex w-full items-center justify-between rounded-lg border-0 bg-surface px-[10px] py-[9px] text-[10px] font-semibold text-text" onClick={() => window.alert('Pusat bantuan akan tersedia setelah konfigurasi proyek.')}>Pusat bantuan <span><MoveUpRight size={12} /></span></button>
          </div>
          <div className="mt-[15px] flex items-center gap-[10px] border-t border-border px-[5px] pt-[18px] pb-[2px]">
            <div className="grid size-[34px] shrink-0 place-items-center rounded-full bg-[#ead6c2] text-[10px] font-bold text-[#6c4429]">DF</div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <strong className="text-ellipsis whitespace-nowrap text-[11px] font-bold text-text">Denis Firdaus</strong>
              <small className="text-[10px] text-text-muted">Administrator</small>
            </div>
            <span className="tracking-[1px] text-text-muted">•••</span>
          </div>
        </div>
      </aside>
    </>
  )
}