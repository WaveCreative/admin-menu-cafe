import { ArrowRight, Construction } from 'lucide-react'
import type { AdminPage } from '../../types'

const content: Record<Exclude<AdminPage, 'dashboard'>, { eyebrow: string; title: string; description: string; items: string[] }> = {
  menu: {
    eyebrow: 'KATALOG PRODUK',
    title: 'Atur menu favorit pelanggan.',
    description: 'Kelola nama, foto, harga, kategori, dan ketersediaan menu kafe dalam satu tempat.',
    items: ['Daftar menu dan pencarian', 'Filter berdasarkan kategori', 'Tambah dan edit menu', 'Atur status ketersediaan'],
  },
  categories: {
    eyebrow: 'ORGANISASI MENU',
    title: 'Semua kategori lebih rapi.',
    description: 'Kelompokkan kopi, minuman non-kopi, makanan, dan pastry agar katalog mudah dikelola.',
    items: ['Daftar kategori', 'Tambah dan edit kategori', 'Jumlah menu per kategori', 'Validasi kategori yang masih digunakan'],
  },
  orders: {
    eyebrow: 'OPERASIONAL KAFE',
    title: 'Pesanan terkendali, layanan lebih lancar.',
    description: 'Satukan pesanan dari aplikasi pelanggan dan input kasir dalam satu alur.',
    items: ['Filter sumber pesanan', 'Detail item dan pembayaran', 'Perubahan status pesanan', 'Pencarian nomor pesanan'],
  },
  reports: {
    eyebrow: 'ANALISIS BISNIS',
    title: 'Pahami performa kafe kamu.',
    description: 'Lihat ringkasan transaksi berdasarkan periode dan temukan menu yang paling diminati.',
    items: ['Filter periode laporan', 'Ringkasan penjualan', 'Menu terlaris', 'Ekspor rekap transaksi'],
  },
}

interface PlaceholderPageProps {
  page: Exclude<AdminPage, 'dashboard'>
}

export function PlaceholderPage({ page }: PlaceholderPageProps) {
  const data = content[page]
  return (
    <div className="page-content placeholder-page">
      <section className="placeholder-hero">
        <div className="placeholder-copy">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <span className="coming-soon"><Construction size={15} /> Sedang disiapkan</span>
        </div>
        <div className="placeholder-art"><div className="placeholder-circle"><ArrowRight size={58} strokeWidth={1.2} /></div><span className="placeholder-spark spark-a">✳</span><span className="placeholder-spark spark-b">✳</span></div>
      </section>
      <section className="panel placeholder-features">
        <h2>Yang akan tersedia</h2>
        <p>Fitur yang direncanakan untuk halaman ini.</p>
        <div className="feature-grid">
          {data.items.map((item, index) => <div className="feature-item" key={item}><span>0{index + 1}</span><strong>{item}</strong><ArrowRight size={16} /></div>)}
        </div>
      </section>
      <div className="placeholder-note"><Construction size={16} /><span>Halaman ini masih berupa kerangka UI. Data dan interaksi akan dibuat pada tahap implementasi berikutnya.</span></div>
    </div>
  )
}