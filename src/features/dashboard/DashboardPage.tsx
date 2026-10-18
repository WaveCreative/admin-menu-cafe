import { BestSellersPanel } from './components/BestSellersPanel'
import { DashboardOverview } from './components/DashboardOverview'
import { DashboardWelcome } from './components/DashboardWelcome'
import { RecentOrdersPanel } from './components/RecentOrdersPanel'
import { SalesChartPanel } from './components/SalesChartPanel'

export function DashboardPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-[37px] pt-[27px] pb-[22px] max-xl:px-[25px] max-md:px-[15px] max-md:pt-[18px] max-md:pb-5 2xl:pt-8">
      <DashboardWelcome />
      <DashboardOverview />
      <div className="mt-[17px] grid grid-cols-[minmax(0,1.55fr)_minmax(310px,1fr)] gap-4 max-xl:grid-cols-[minmax(0,1.3fr)_minmax(280px,1fr)] max-xl:gap-3 max-lg:grid-cols-1 max-md:mt-3">
        <SalesChartPanel />
        <BestSellersPanel />
      </div>
      <RecentOrdersPanel />
    </div>
  )
}
