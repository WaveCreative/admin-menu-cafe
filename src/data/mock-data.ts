import type { CafeMenuItem, CafeOrder } from '../types'

export const mockMenu: CafeMenuItem[] = [
  { id: 'MNU-001', name: 'Kopi Susu Senja', category: 'Coffee', price: 24000, available: true, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=160&q=80' },
  { id: 'MNU-002', name: 'Iced Americano', category: 'Coffee', price: 20000, available: true, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=160&q=80' },
  { id: 'MNU-003', name: 'Matcha Latte', category: 'Non Coffee', price: 28000, available: true, image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=160&q=80' },
  { id: 'MNU-004', name: 'Croissant Butter', category: 'Pastry', price: 18000, available: false, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=160&q=80' },
  { id: 'MNU-005', name: 'Caramel Macchiato', category: 'Coffee', price: 30000, available: true, image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=160&q=80' },
]

export const mockOrders: CafeOrder[] = [
  { id: '#ORD-1048', customer: 'Nadia Putri', source: 'Aplikasi', items: 3, total: 72000, status: 'Diproses', time: '10:42' },
  { id: '#ORD-1047', customer: 'Raka Pratama', source: 'Kasir', items: 2, total: 44000, status: 'Menunggu', time: '10:38' },
  { id: '#ORD-1046', customer: 'Alya Safitri', source: 'Aplikasi', items: 1, total: 28000, status: 'Siap', time: '10:31' },
  { id: '#ORD-1045', customer: 'Dimas Saputra', source: 'Aplikasi', items: 4, total: 96000, status: 'Selesai', time: '10:20' },
]