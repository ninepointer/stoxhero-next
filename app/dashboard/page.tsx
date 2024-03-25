import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
 
export default async function Page() {
  const revenue = [
      {month:'Jan',revenue:100},
      {month:'Feb',revenue:300},
      {month:'Mar',revenue:90},
      {month:'Apr',revenue:400},
      {month:'May',revenue:200},
      {month:'Jun',revenue:900},
      {month:'Jul',revenue:1200},
      {month:'Aug',revenue:800},
      {month:'Sep',revenue:600},
      {month:'Oct',revenue:700},
      {month:'Nov',revenue:1500},
      {month:'Dec',revenue:1800}
    ]
    const latestInvoices = [
      {id:'1', name:'Prateek', email:'prats24@gmail.com', amount:'Rs 20', image_url:''},
      {id:'3', name:'Amit', email:'prats24@gmail.com', amount:'Rs 20', image_url:''},
      {id:'5', name:'Hitesh', email:'prats24@gmail.com', amount:'Rs 20', image_url:''},
      {id:'6', name:'Mishra', email:'prats24@gmail.com', amount:'Rs 20', image_url:''},
      {id:'7', name:'Utkarsh', email:'prats24@gmail.com', amount:'Rs 20', image_url:''},
    ]
    const totalPaidInvoices = 1000
    const totalPendingInvoices = 500
    const numberOfInvoices = 20
    const numberOfCustomers = 10
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}