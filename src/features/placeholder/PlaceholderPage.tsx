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
    <div className="mx-auto min-h-[calc(100vh-190px)] max-w-[1600px] px-[37px] pt-[27px] pb-[22px] max-xl:px-[25px] max-md:min-h-0 max-md:px-[15px] max-md:pt-[18px] max-md:pb-5">
      <section className="relative flex min-h-[260px] items-center overflow-hidden rounded-2xl shadow-sm bg-surface p-[34px] max-md:min-h-[270px] max-md:px-5 max-md:py-6">
        <div className="relative z-[2] max-w-[470px] max-md:max-w-[75%]">
          <span className="inline-flex items-center gap-2 text-[9px] font-extrabold tracking-[1.55px] text-[#b99c81]">{data.eyebrow}</span>
          <h2 className="mt-[15px] mb-[11px] max-w-[430px] font-[Georgia,serif] text-[clamp(27px,3vw,39px)] leading-[1.15] font-medium tracking-[-1px] max-md:text-[29px]">{data.title}</h2>
          <p className="mb-[18px] mt-0 max-w-[390px] text-[12px] leading-[1.8] text-text-soft max-md:text-[11px]">{data.description}</p>
          <span className="inline-flex items-center gap-[7px] rounded-[7px] bg-accent-soft px-[10px] py-2 text-[10px] font-bold text-accent"><Construction size={15} /> Sedang disiapkan</span>
        </div>
        <div className="absolute inset-y-0 right-0 left-[55%] grid place-items-center bg-[radial-gradient(ellipse_at_center,var(--accent-soft),transparent_65%)] max-md:left-1/2 max-md:opacity-50">
          <div className="grid size-[150px] place-items-center rounded-full shadow-sm bg-surface text-accent max-md:size-[110px]"><ArrowRight className="max-md:size-10" size={58} strokeWidth={1.2} /></div>
          <span className="absolute top-[22%] right-[20%] text-[25px] text-accent">✳</span>
          <span className="absolute bottom-[19%] left-[18%] text-[17px] text-accent">✳</span>
        </div>
      </section>
      <section className="mt-[18px] rounded-[13px] shadow-sm bg-surface p-6 max-md:p-[18px]">
        <h2 className="m-0 text-[14px]">Yang akan tersedia</h2>
        <p className="mt-[6px] mb-5 text-[10px] text-text-muted">Fitur yang direncanakan untuk halaman ini.</p>
        <div className="grid grid-cols-2 gap-[10px] max-md:grid-cols-1">
          {data.items.map((item, index) => (
            <div className="flex min-h-[57px] items-center gap-3 rounded-[9px] shadow-sm bg-surface p-3" key={item}>
              <span className="text-[10px] font-bold text-accent">0{index + 1}</span>
              <strong className="flex-1 text-[11px] font-semibold">{item}</strong>
              <ArrowRight className="text-text-muted" size={16} />
            </div>
          ))}
        </div>
      </section>
      <div className="mt-[17px] flex items-center gap-[9px] text-[10px] leading-[1.6] text-text-muted"><Construction size={16} /><span>Halaman ini masih berupa kerangka UI. Data dan interaksi akan dibuat pada tahap implementasi berikutnya.</span></div>
    </div>
  )
}