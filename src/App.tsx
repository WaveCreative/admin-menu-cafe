import { useEffect, useState } from 'react'
import { Header } from './components/layout/Header'
import { Sidebar } from './components/layout/Sidebar'
import { DashboardPage } from './features/dashboard/DashboardPage'
import { PlaceholderPage } from './features/placeholder/PlaceholderPage'
import type { AdminPage, ThemeMode } from './types'

function getInitialTheme(): ThemeMode {
  const saved = localStorage.getItem('cafe-admin-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme)
  const [activePage, setActivePage] = useState<AdminPage>('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('cafe-admin-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(current => current === 'light' ? 'dark' : 'light')

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} onNavigate={setActivePage} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="main-area">
        <Header page={activePage} theme={theme} onToggleTheme={toggleTheme} onOpenSidebar={() => setSidebarOpen(true)} />
        {activePage === 'dashboard'
          ? <DashboardPage />
          : <PlaceholderPage page={activePage} />}
        <footer className="app-footer"><span>© 2026 ruangkopi. Admin Panel</span><span>Dibuat dengan ☕ dan perhatian.</span></footer>
      </main>
    </div>
  )
}