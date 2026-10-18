import { ArrowRight, ClipboardList, Ellipsis } from 'lucide-react'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { mockOrders } from '../../../data/mock-data'
import { formatRupiah } from '../../../lib/format'

function statusClass(status: string) {
  const classes: Record<string, string> = {
    Menunggu: 'bg-[#fbf2dc] text-[#a47a26]',
    Diproses: 'bg-[#eaf0fb] text-[#5878bd]',
    Siap: 'bg-[#f0e8f8] text-[#9367b5]',
    Selesai: 'bg-green-soft text-green',
  }
  return classes[status] ?? 'bg-surface-hover text-text-soft'
}

export function RecentOrdersPanel() {
  return (
    <>
      <section className="mt-[17px] min-w-0 rounded-[13px] shadow-sm bg-surface px-[21px] pt-[21px] max-xl:px-[15px] max-md:mt-3 max-md:p-[16px_13px]">
        <SectionTitle
          title="Pesanan terbaru"
          subtitle="Pantau pesanan yang baru masuk."
          action={(
            <button
              className="inline-flex min-h-[33px] items-center justify-center gap-[9px] rounded-lg shadow-sm bg-surface px-[11px] text-[10px] font-bold text-text-soft hover:bg-surface-hover max-md:gap-[5px] max-md:px-2 max-md:text-[9px]"
              onClick={() => window.alert('Halaman pesanan akan tersedia pada tahap berikutnya.')}
            >
              Semua pesanan <ArrowRight size={15} />
            </button>
          )}
        />
        <div className="w-full overflow-x-auto">
          <table className="mt-5 w-full border-collapse text-left whitespace-nowrap max-md:min-w-[800px]">
            <thead className="bg-surface-soft">
              <tr>
                <th className="rounded-l-[7px] px-[10px] py-3 text-[8px] font-bold tracking-[.65px] text-text-muted">ID PESANAN</th>
                <th className="px-[10px] py-3 text-[8px] font-bold tracking-[.65px] text-text-muted">PELANGGAN</th>
                <th className="px-[10px] py-3 text-[8px] font-bold tracking-[.65px] text-text-muted">SUMBER</th>
                <th className="px-[10px] py-3 text-[8px] font-bold tracking-[.65px] text-text-muted">ITEM</th>
                <th className="px-[10px] py-3 text-[8px] font-bold tracking-[.65px] text-text-muted">TOTAL</th>
                <th className="px-[10px] py-3 text-[8px] font-bold tracking-[.65px] text-text-muted">STATUS</th>
                <th className="px-[10px] py-3 text-[8px] font-bold tracking-[.65px] text-text-muted">WAKTU</th>
                <th className="rounded-r-[7px] px-[10px] py-3 text-[8px] font-bold tracking-[.65px] text-text-muted" />
              </tr>
            </thead>
            <tbody>
              {mockOrders.map(order => (
                <tr key={order.id}>
                  <td className="border-b border-border px-[10px] py-[13px] text-[10px] font-bold text-accent">{order.id}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-surface-hover text-[8px] font-bold text-accent-dark">
                        {order.customer.split(' ').map(part => part[0]).slice(0, 2).join('')}
                      </span>
                      <strong className="text-[10px] font-semibold text-text">{order.customer}</strong>
                    </div>
                  </td>
                  <td>
                    <span className={`inline-block rounded-[5px] px-[7px] py-[5px] text-[9px] font-semibold ${order.source === 'Aplikasi' ? 'bg-[#edf0fb] text-[#6272b5]' : 'bg-[#f6ebdc] text-[#94683d]'}`}>
                      {order.source}
                    </span>
                  </td>
                  <td className="border-b border-border px-[10px] py-[13px] text-[10px] text-text-soft">{order.items} item</td>
                  <td className="border-b border-border px-[10px] py-[13px] text-[10px] font-semibold text-text">{formatRupiah(order.total)}</td>
                  <td className="border-b border-border px-[10px] py-[13px] text-[10px] text-text-soft">
                    <span className={`inline-flex items-center gap-[5px] rounded-[5px] px-[7px] py-[5px] text-[9px] font-semibold ${statusClass(order.status)}`}><i className="size-[5px] rounded-full bg-current" />{order.status}</span>
                  </td>
                  <td className="border-b border-border px-[10px] py-[13px] text-[10px] text-text-muted">{order.time}</td>
                  <td className="border-b border-border px-[10px] py-[13px]">
                    <button className="grid size-[29px] place-items-center rounded-[9px] border border-transparent bg-transparent text-text-soft hover:bg-surface-hover" aria-label={`Opsi ${order.id}`}>
                      <Ellipsis size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex min-h-[53px] items-center justify-between gap-3 text-[9px] text-text-muted max-md:text-[8px]">
          <span>Menampilkan <strong className="text-text-soft">4</strong> dari <strong className="text-text-soft">248</strong> pesanan</span>
          <div className="flex gap-1">
            <button className="grid size-[27px] place-items-center rounded-md shadow-sm bg-surface text-[9px] text-text-soft">←</button>
            <button className="grid size-[27px] place-items-center rounded-md shadow-sm bg-accent text-[9px] text-white">1</button>
            <button className="grid size-[27px] place-items-center rounded-md shadow-sm bg-surface text-[9px] text-text-soft">2</button>
            <button className="grid size-[27px] place-items-center rounded-md shadow-sm bg-surface text-[9px] text-text-soft">3</button>
            <button className="grid size-[27px] place-items-center rounded-md shadow-sm bg-surface text-[9px] text-text-soft">→</button>
          </div>
        </div>
      </section>
      <p className="flex justify-center gap-[7px] pt-[18px] text-[9px] text-text-muted">
        <ClipboardList size={14} /> Tampilan demo — angka dan transaksi menggunakan data dummy.
      </p>
    </>
  )
}
