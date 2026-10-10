import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  CircleDollarSign,
  ClipboardList,
  Coffee,
  Download,
  Ellipsis,
  ShoppingBag,
  Users,
} from 'lucide-react'
import { mockMenu, mockOrders } from '../../data/mock-data'
import { formatRupiah } from '../../lib/format'
import { StatCard } from '../../components/ui/StatCard'
import { SectionTitle } from '../../components/ui/SectionTitle'

const sales = [34, 48, 39, 61, 47, 72, 53, 66, 45, 79, 58, 87, 63, 74, 51, 68, 43, 82, 59, 70, 48, 91, 65, 77, 54, 72, 47, 84]
const days = ['01', '04', '07', '10', '13', '16', '19', '22', '25', '28', '31']

function statusClass(status: string) {
  return `status status-${status.toLowerCase()}`
}

export function DashboardPage() {
  return (
    <div className="page-content">
      <div className="welcome-banner">
        <div className="welcome-copy">
          <span className="eyebrow"><span className="live-dot" /> SELAMAT DATANG KEMBALI</span>
          <h2>Halo, Denis! <span>☕</span></h2>
          <p>Siap bikin hari ini jadi lebih produktif? Ini ringkasan kafe kamu.</p>
          <button className="button button-light" onClick={() => window.alert('Halaman laporan akan dibuka pada implementasi berikutnya.')}>Lihat laporan <ArrowRight size={16} /></button>
        </div>
        <div className="banner-art" aria-hidden="true">
          <div className="banner-sun" />
          <div className="banner-bean bean-one" />
          <div className="banner-bean bean-two" />
          <div className="banner-cup"><div className="cup-foam">ruang<br/>kopi.</div><div className="cup-sleeve" /><div className="cup-handle" /></div>
          <div className="banner-leaf leaf-one" /><div className="banner-leaf leaf-two" />
        </div>
        <div className="banner-decoration decoration-one" />
        <div className="banner-decoration decoration-two" />
      </div>

      <div className="section-toolbar">
        <div><h2>Ringkasan bisnis</h2><p>Performa tokomu dalam satu periode.</p></div>
        <button className="button button-outline"><CalendarDays size={16} /> 1–31 Oktober 2026 <ChevronDown size={15} /></button>
      </div>

      <div className="stats-grid">
        <StatCard label="Total penjualan" value="Rp 8.450.000" change="12,8%" icon={CircleDollarSign} />
        <StatCard label="Total pesanan" value="248" change="8,2%" icon={ShoppingBag} />
        <StatCard label="Pelanggan baru" value="86" change="4,6%" icon={Users} />
        <StatCard label="Menu terjual" value="512" change="2,4%" positive={false} icon={Coffee} />
      </div>

      <div className="dashboard-grid">
        <section className="panel sales-panel">
          <SectionTitle title="Statistik penjualan" subtitle="Pantau pertumbuhan penjualan kafe." action={<button className="icon-button subtle-icon" aria-label="Opsi grafik"><Ellipsis size={20} /></button>} />
          <div className="chart-summary"><strong>Rp 8.450.000</strong><span className="chart-growth"><ArrowUpRight size={15} /> 12,8%</span><small>dibanding periode sebelumnya</small></div>
          <div className="chart-legend"><span><i className="legend-dot" /> Penjualan</span><button>Bulanan <ChevronDown size={14} /></button></div>
          <div className="chart-wrap">
            <div className="chart-y-labels"><span>Rp 1,0 jt</span><span>Rp 750 rb</span><span>Rp 500 rb</span><span>Rp 250 rb</span><span>Rp 0</span></div>
            <div className="chart-plot">
              {[0, 1, 2, 3, 4].map((line) => <div className="chart-gridline" key={line} style={{ top: `${line * 25}%` }} />)}
              <svg className="sales-svg" viewBox="0 0 560 180" preserveAspectRatio="none" role="img" aria-label="Grafik penjualan naik turun sepanjang bulan">
                <defs><linearGradient id="salesFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#a86c43" stopOpacity=".22" /><stop offset="100%" stopColor="#a86c43" stopOpacity="0" /></linearGradient></defs>
                <path d={`M ${sales.map((v, i) => `${i * (560 / (sales.length - 1))},${180 - v * 1.75}`).join(' L ')} L 560 180 L 0 180 Z`} fill="url(#salesFill)" />
                <path d={`M ${sales.map((v, i) => `${i * (560 / (sales.length - 1))},${180 - v * 1.75}`).join(' L ')}`} fill="none" stroke="#a86c43" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="450" cy={180 - sales[23] * 1.75} r="4.5" fill="#fffaf3" stroke="#a86c43" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
              </svg>
              <div className="chart-x-labels">{days.map(day => <span key={day}>{day}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="panel best-sellers-panel">
          <SectionTitle title="Menu terlaris" subtitle="Paling banyak dipesan bulan ini." action={<button className="icon-button subtle-icon" aria-label="Opsi menu terlaris"><Ellipsis size={20} /></button>} />
          <div className="best-seller-list">
            {[
              { name: 'Kopi Susu Senja', category: 'Coffee', sold: 128, price: 24000, image: mockMenu[0].image, width: '86%' },
              { name: 'Iced Americano', category: 'Coffee', sold: 96, price: 20000, image: mockMenu[1].image, width: '68%' },
              { name: 'Matcha Latte', category: 'Non Coffee', sold: 74, price: 28000, image: mockMenu[2].image, width: '52%' },
              { name: 'Caramel Macchiato', category: 'Coffee', sold: 58, price: 30000, image: mockMenu[4].image, width: '40%' },
            ].map(item => (
              <div className="best-seller" key={item.name}>
                <img src={item.image} alt="" />
                <div className="best-seller-info"><div className="best-seller-name">{item.name}</div><small>{item.category} · {item.sold} terjual</small><div className="mini-progress"><span style={{ width: item.width }} /></div></div>
                <strong>{formatRupiah(item.price)}</strong>
              </div>
            ))}
          </div>
          <button className="text-link" onClick={() => window.alert('Daftar menu lengkap akan tersedia di halaman Menu.')}>Lihat semua menu <ArrowRight size={15} /></button>
        </section>
      </div>

      <section className="panel orders-panel">
        <SectionTitle title="Pesanan terbaru" subtitle="Pantau pesanan yang baru masuk." action={<button className="button button-outline button-small" onClick={() => window.alert('Halaman pesanan akan tersedia pada tahap berikutnya.')}>Semua pesanan <ArrowRight size={15} /></button>} />
        <div className="table-scroll">
          <table className="data-table">
            <thead><tr><th>ID PESANAN</th><th>PELANGGAN</th><th>SUMBER</th><th>ITEM</th><th>TOTAL</th><th>STATUS</th><th>WAKTU</th><th /></tr></thead>
            <tbody>
              {mockOrders.map(order => (
                <tr key={order.id}>
                  <td className="order-id">{order.id}</td>
                  <td><div className="customer-cell"><span className="avatar avatar-customer">{order.customer.split(' ').map(part => part[0]).slice(0, 2).join('')}</span><strong>{order.customer}</strong></div></td>
                  <td><span className={`source-tag ${order.source === 'Aplikasi' ? 'source-app' : 'source-cashier'}`}>{order.source}</span></td>
                  <td>{order.items} item</td><td className="money-cell">{formatRupiah(order.total)}</td>
                  <td><span className={statusClass(order.status)}><i />{order.status}</span></td>
                  <td className="time-cell">{order.time}</td><td><button className="icon-button row-more" aria-label={`Opsi ${order.id}`}><Ellipsis size={18} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-footer"><span>Menampilkan <strong>4</strong> dari <strong>248</strong> pesanan</span><div><button disabled>←</button><button className="pagination-active">1</button><button>2</button><button>3</button><button>→</button></div></div>
      </section>
      <p className="demo-notice"><ClipboardList size={14} /> Tampilan demo — angka dan transaksi menggunakan data dummy.</p>
    </div>
  )
}