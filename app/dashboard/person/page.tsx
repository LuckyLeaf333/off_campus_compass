import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { lusitana } from '@/app/ui/fonts';
import { 
    fetchRevenue, 
    fetchLatestInvoices,
    fetchCardData,
} from '@/app/lib/data'; 
import Table from '@/app/ui/dashboard/table';
import Link from 'next/link';

export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
      } = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Person Information
      </h1>
      <div className="w-full">
        <Table query = "Jane Doe"/>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Seeking" value={"3 housemates"} type="collected" />
        <Card title="Gender Preference" value={"Female"} type="pending" />
        <Card title="Location Preference" value={"Collegetown"} type="invoices" />
        <Card
          title="Budget"
          value={formatCurrency(100000)}
          type="customers"
        />
              <Link
            href={"people"}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <p>Back</p>
          </Link>
      </div>
      {/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div> */}
    </main>
  );
}