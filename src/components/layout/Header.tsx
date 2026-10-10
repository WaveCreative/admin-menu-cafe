import { Bell, ChevronDown, Menu, Moon, Search, Sun } from 'lucide-react'
import type { AdminPage, ThemeMode } from '../../types'

const pageTitles: Record<AdminPage, { title: string; subtitle: string }> = {
  dashboard: { title: 'Dashboard', subtitle: 'Pantau kondisi kafe kamu hari ini.' },
  menu: { title: 'Manajemen Menu', subtitle: 'Atur daftar menu dan ketersediaan produk.' },
  categories: { title: 'Kategori Menu', subtitle: 'Kelompokkan menu agar mudah dikelola.' },
  orders: { title: 'Pesanan', subtitle: 'Pantau dan kelola pesanan pelanggan.' },
  reports: { title: 'Laporan Penjualan', subtitle: 'Lihat ringkasan performa bisnis kafe.' },
}

interface HeaderProps {
  page: AdminPage
  theme: ThemeMode
  onToggleTheme: () => void
  onOpenSidebar: () => void
}

export function Header({ page, theme, onToggleTheme, onOpenSidebar }: HeaderProps) {
  const heading = pageTitles[page]
  return (
    <header className="topbar">
      <button className="icon-button mobile-menu-button" aria-label="Buka navigasi" onClick={onOpenSidebar}>
        <Menu size={21} />
      </button>
      <div className="page-heading">
        <div className="breadcrumbs">Workspace <span>/</span> <strong>{heading.title}</strong></div>
        <h1>{heading.title}</h1>
        <p>{heading.subtitle}</p>
      </div>
      <div className="topbar-actions">
        <label className="search-box">
          <Search size={17} />
          <input aria-label="Cari" placeholder="Cari sesuatu..." />
          <kbd>⌘ K</kbd>
        </label>
        <button className="icon-button theme-toggle" onClick={onToggleTheme} aria-label="Ganti tema" title="Ganti tema">
          {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
        </button>
        <button className="icon-button notification-button" aria-label="Notifikasi">
          <Bell size={19} />
          <i />
        </button>
        <button className="topbar-user">
          <div className="avatar avatar-admin">DR</div>
          <div className="topbar-user-copy"><strong>Denis Rahman</strong><small>Administrator</small></div>
          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  )
}