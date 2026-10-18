import { Bell, ChevronDown, Menu, Moon, Search, Sun } from "lucide-react";
import type { AdminPage, ThemeMode } from "../../types";

const pageTitles: Record<AdminPage, { title: string; subtitle: string }> = {
  dashboard: {
    title: "Dashboard",
    subtitle: "Pantau kondisi kafe kamu hari ini.",
  },
  menu: {
    title: "Manajemen Menu",
    subtitle: "Atur daftar menu dan ketersediaan produk.",
  },
  categories: {
    title: "Kategori Menu",
    subtitle: "Kelompokkan menu agar mudah dikelola.",
  },
  orders: {
    title: "Pesanan",
    subtitle: "Pantau dan kelola pesanan pelanggan.",
  },
  reports: {
    title: "Laporan Penjualan",
    subtitle: "Lihat ringkasan performa bisnis kafe.",
  },
};

interface HeaderProps {
  page: AdminPage;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenSidebar: () => void;
}

export function Header({
  page,
  theme,
  onToggleTheme,
  onOpenSidebar,
}: HeaderProps) {
  const heading = pageTitles[page];
  return (
    <header className="sticky top-0 z-20 flex min-h-28 items-center justify-between gap-5 shadow-sm bg-surface/95 px-[37px] py-[22px] backdrop-blur-[14px] max-xl:px-[25px] max-lg:min-h-[100px] max-md:relative max-md:min-h-[100px] max-md:gap-[11px] max-md:px-[17px] max-md:py-[18px] max-xs:gap-[7px] max-xs:px-[11px]">
      <button
        className="relative hidden size-9.5 shrink-0 place-items-center rounded-[9px] shadow-sm bg-surface text-text-soft transition-colors hover:bg-surface-hover hover:text-text max-md:grid max-md:size-[34px]"
        aria-label="Buka navigasi"
        onClick={onOpenSidebar}
      >
        <Menu size={21} />
      </button>
      <div className="min-w-0 max-md:flex-1">
        <div className="mb-2.25 text-[10px] text-text-muted max-md:text-[9px]">
          Workspace <span className="px-[7px] text-border-strong">/</span>{" "}
          <strong className="font-semibold text-text-soft">
            {heading.title}
          </strong>
        </div>
        <h1 className="m-0 text-[22px] font-semibold tracking-[-.7px] max-md:text-[18px] max-xs:text-[16px]">
          {heading.title}
        </h1>
        <p className="mt-[5px] mb-0 text-[11px] text-text-soft max-md:max-w-[235px] max-md:text-[10px] max-md:leading-[1.5] max-xs:max-w-[170px] max-xs:text-[9px]">
          {heading.subtitle}
        </p>
      </div>
      <div className="flex items-center gap-[11px] max-xl:gap-[7px] max-md:gap-[6px] max-xs:gap-1">
        <label className="flex h-[39px] w-[208px] items-center gap-[9px] rounded-[9px] shadow-sm bg-surface-soft px-[10px] text-text-muted max-xl:w-[170px] max-lg:h-[38px] max-lg:w-[38px] max-lg:justify-center max-lg:p-0 max-md:size-[34px] max-xs:size-[34px]">
          <Search size={17} />
          <input
            className="w-full min-w-0 border-0 bg-transparent text-[10px] text-text outline-none placeholder:text-text-muted max-lg:hidden"
            aria-label="Cari"
            placeholder="Cari sesuatu..."
          />
        </label>
        <button
          className="relative grid size-[38px] shrink-0 place-items-center rounded-[9px] shadow-sm bg-surface-soft text-text-soft transition-colors hover:bg-surface-hover hover:text-text max-md:size-[34px]"
          onClick={onToggleTheme}
          aria-label="Ganti tema"
          title="Ganti tema"
        >
          {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
        </button>
        <button
          className="relative grid size-[38px] shrink-0 place-items-center rounded-[9px] shadow-sm bg-surface-soft text-text-soft transition-colors hover:bg-surface-hover hover:text-text max-md:hidden"
          aria-label="Notifikasi"
        >
          <Bell size={19} />
          <i className="absolute top-2 right-2 size-[6px] rounded-full border border-surface bg-[#c77856]" />
        </button>
        <button className="flex items-center gap-[9px] border-0 bg-transparent py-0 pr-0 pl-2 text-left max-md:hidden">
          <div className="grid size-9 shrink-0 place-items-center rounded-full bg-[#ead6c2] text-[10px] font-bold text-[#6c4429]">
            DF
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <strong className="overflow-hidden text-ellipsis whitespace-nowrap text-[11px] font-bold text-text">
              Denis Firdaus
            </strong>
            <small className="text-[10px] text-text-muted">Administrator</small>
          </div>
          <ChevronDown
            size={16}
            className="text-text-muted max-lg:hidden"
          />
        </button>
      </div>
    </header>
  );
}
