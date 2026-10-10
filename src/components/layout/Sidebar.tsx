import {
  ChartNoAxesCombined,
  Coffee,
  LayoutDashboard,
  ListTree,
  Package,
  ShoppingBag,
  X,
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
      {open && <button aria-label="Tutup navigasi" className="sidebar-backdrop" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <div className="brand">
          <div className="brand-mark"><Coffee size={22} strokeWidth={2.2} /></div>
          <div className="brand-copy">
            <strong>ruang<span>kopi.</span></strong>
            <small>CAFE MANAGEMENT</small>
          </div>
          <button className="icon-button sidebar-close" aria-label="Tutup menu" onClick={onClose}>
            <X size={19} />
          </button>
        </div>

        <div className="nav-label">MENU UTAMA</div>
        <nav className="nav-list" aria-label="Navigasi utama">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`nav-item ${activePage === id ? 'nav-item-active' : ''}`}
              onClick={() => { onNavigate(id); onClose() }}
            >
              <Icon size={19} strokeWidth={1.9} />
              <span>{label}</span>
              {id === 'orders' && <span className="nav-count">4</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon"><Coffee size={17} /></div>
            <strong>Butuh bantuan?</strong>
            <p>Kelola kafe jadi lebih mudah setiap hari.</p>
            <button onClick={() => window.alert('Pusat bantuan akan tersedia setelah konfigurasi proyek.')}>Pusat bantuan <span>↗</span></button>
          </div>
          <div className="sidebar-profile">
            <div className="avatar avatar-admin">DR</div>
            <div className="profile-copy"><strong>Denis Rahman</strong><small>Administrator</small></div>
            <span className="profile-dots">•••</span>
          </div>
        </div>
      </aside>
    </>
  )
}