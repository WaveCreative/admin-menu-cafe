export type ThemeMode = 'light' | 'dark'

export type AdminPage = 'dashboard' | 'menu' | 'categories' | 'orders' | 'reports'

export interface CafeMenuItem {
  id: string
  name: string
  category: string
  price: number
  available: boolean
  image: string
}

export interface CafeOrder {
  id: string
  customer: string
  source: 'Aplikasi' | 'Kasir'
  items: number
  total: number
  status: 'Menunggu' | 'Diproses' | 'Siap' | 'Selesai'
  time: string
}