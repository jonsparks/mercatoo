export default function OrdersPage() {
  const orders = [
    { id: '#1024', customer: 'Sarah Jenkins', date: '2023-10-24', total: '$45.00', status: 'Fulfilled' },
    { id: '#1025', customer: 'David Chen', date: '2023-10-25', total: '$120.50', status: 'Pending' },
    { id: '#1026', customer: 'Emily Wright', date: '2023-10-26', total: '$34.99', status: 'Shipped' },
    { id: '#1027', customer: 'Michael Scott', date: '2023-10-26', total: '$89.00', status: 'Pending' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Orders</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-indigo-700 transition-colors shadow-sm">
          Export Orders
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm">
              <th className="p-4 font-medium">Order ID</th>
              <th className="p-4 font-medium">Customer</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Total</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <td className="p-4 font-medium text-slate-900">{order.id}</td>
                <td className="p-4 text-slate-600">{order.customer}</td>
                <td className="p-4 text-slate-600">{order.date}</td>
                <td className="p-4 font-medium text-slate-900">{order.total}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    order.status === 'Fulfilled' ? 'bg-emerald-100 text-emerald-700' :
                    order.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
