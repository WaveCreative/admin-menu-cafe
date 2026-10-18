import { ArrowRight } from "lucide-react";

export function DashboardWelcome() {
  return (
    <div className="relative flex min-h-[211px] items-center overflow-hidden rounded-2xl bg-[linear-gradient(105deg,#5d3d2b_0%,#7a5035_55%,#996b48_100%)] px-[34px] py-7 text-[#fff8f0] max-md:min-h-[210px] max-md:px-5 max-md:py-[23px] 2xl:min-h-[230px]">
      <div className="relative z-[2] max-w-[490px]">
        <span className="inline-flex items-center gap-2 text-[9px] font-extrabold tracking-[1.55px] text-[#e1c3a5]">
          <span className="size-[6px] rounded-full bg-accent shadow-[0_0_0_4px_rgb(201_212_160/12%)]" />{" "}
          SELAMAT DATANG KEMBALI
        </span>
        <h2 className="my-[14px] mb-2 text-[clamp(25px,2.2vw,34px)] font-medium tracking-[-.8px] max-md:text-[27px] max-xs:text-2xl">
          Halo, Denis! <span className="font-sans text-2xl"></span>
        </h2>
        <p className="mb-[21px] mt-0 text-[11px] leading-[1.7] text-[#e2d0c0] max-md:text-[10px]">
          Siap bikin hari ini jadi lebih produktif? Ini ringkasan kafe kamu.
        </p>
        <button
          className="inline-flex min-h-[38px] items-center justify-center gap-[9px] rounded-lg border border-transparent bg-[#fff8f0] px-[13px] text-[10px] font-bold text-[#68452f] transition-colors hover:bg-[#f3e4d5] active:translate-y-px"
          onClick={() =>
            window.alert(
              "Halaman laporan akan dibuka pada implementasi berikutnya.",
            )
          }
        >
          Lihat laporan <ArrowRight size={16} />
        </button>
      </div>
      <div
        className="absolute inset-y-0 right-0 left-[54%] max-md:left-[53%] max-md:opacity-[.65] max-xs:left-[58%] max-xs:opacity-[.45]"
        aria-hidden="true"
      >
        <div className="absolute top-[-63px] right-[13%] size-[235px] rounded-full border border-white/10 bg-white/[.04]" />
        <div className="absolute top-[45px] right-[16%] h-[30px] w-[19px] rotate-[35deg] rounded-[50%] border border-[#ffecd7]/40" />
        <div className="absolute right-[44%] bottom-[29px] h-[30px] w-[19px] rotate-[-30deg] scale-[.7] rounded-[50%] border border-[#ffecd7]/40" />
        <div className="absolute right-[27%] bottom-[19px] h-[136px] w-[120px] rotate-[-7deg] rounded-[12px_12px_24px_24px] border-2 border-[#e5c6a5] bg-[linear-gradient(90deg,#f0d7b8,#fff1dd_52%,#d7b18a)] shadow-[12px_15px_25px_rgb(31_17_10_/_18%)] max-md:right-[12%] max-md:h-[104px] max-md:w-[77px]">
          <div className="absolute inset-x-0 top-0 grid h-[38px] place-items-center rounded-t-[9px] bg-[#fff3e2] text-[11px] leading-[1.05] text-[#714a31] max-md:h-[35px]">
            Ruang
            <br />
            kopi.
          </div>
          <div className="absolute top-[45px] left-0 h-[49px] w-full bg-[#956443] max-md:top-[42px] max-md:h-[37px]" />
          <div className="absolute top-[43px] right-[-30px] h-[46px] w-[31px] rounded-r-[20px] border-[8px] border-[#e0bc98] border-l-0 max-md:right-[-22px] max-md:h-[38px] max-md:w-[23px]" />
        </div>
        <div className="absolute right-[12%] bottom-[18px] h-[73px] w-10 rotate-[33deg] rounded-[100%_0_100%_0] border border-[#decfa6]/40 bg-[#b1bc84]/20" />
        <div className="absolute right-[7%] bottom-[50px] h-[73px] w-10 rotate-[63deg] scale-[.72] rounded-[100%_0_100%_0] border border-[#decfa6]/40 bg-[#b1bc84]/20" />
      </div>
      <div className="absolute top-[-95px] right-[2%] size-[330px] rounded-full border border-white/[.09]" />
      <div className="absolute right-[38%] bottom-[-100px] size-[220px] rounded-full border border-white/[.09]" />
    </div>
  );
}
