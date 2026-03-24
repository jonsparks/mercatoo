import { prisma } from '@/lib/prisma';
import { Download } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    include: {
      orders: true
    },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Customers</h1>
        <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
          <Download size={16} /> Export List
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm">
              <th className="p-4 font-medium">Customer Name</th>
              <th className="p-4 font-medium">Email</th>
              <th className="p-4 font-medium">Orders</th>
              <th className="p-4 font-medium">Total Spent</th>
            </tr>
          </thead>
          <tbody>
            {customers.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">
                  No customers found.
                </td>
              </tr>
            ) : null}
            {customers.map((customer) => {
              const totalSpent = customer.orders.reduce((sum, o) => sum + o.total, 0);
              return (
              <tr key={customer.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer">
                <td className="p-4 font-medium text-slate-900">{customer.name}</td>
                <td className="p-4 text-slate-500">{customer.email}</td>
                <td className="p-4 text-slate-600">{customer.orders.length}</td>
                <td className="p-4 font-medium text-slate-900">${totalSpent.toFixed(2)}</td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}
