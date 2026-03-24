export default function CustomersPage() {
  const customers = [
    { id: 'cus_1', name: 'Sarah Jenkins', email: 'sarah.j@example.com', orders: 4, spent: '$180.00' },
    { id: 'cus_2', name: 'David Chen', email: 'david.c@example.com', orders: 1, spent: '$120.50' },
    { id: 'cus_3', name: 'Emily Wright', email: 'emily.w@example.com', orders: 12, spent: '$850.25' },
    { id: 'cus_4', name: 'Michael Scott', email: 'michael.s@example.com', orders: 2, spent: '$89.00' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Customers</h1>
        <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors shadow-sm">
          Export List
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
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer">
                <td className="p-4 font-medium text-slate-900">{customer.name}</td>
                <td className="p-4 text-slate-500">{customer.email}</td>
                <td className="p-4 text-slate-600">{customer.orders}</td>
                <td className="p-4 font-medium text-slate-900">{customer.spent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
