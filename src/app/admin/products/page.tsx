export default function ProductsPage() {
  const products = [
    { id: 'prd_1', name: 'Hand-poured Soy Candle', stock: 42, price: '$24.00', status: 'Active' },
    { id: 'prd_2', name: 'Ceramic Coffee Mug', stock: 3, price: '$18.50', status: 'Low Stock' },
    { id: 'prd_3', name: 'Linen Throw Blanket', stock: 15, price: '$89.00', status: 'Active' },
    { id: 'prd_4', name: 'Organic Cotton Tee', stock: 0, price: '$35.00', status: 'Out of Stock' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Products</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-indigo-700 transition-colors shadow-sm">
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm">
              <th className="p-4 font-medium">Product Name</th>
              <th className="p-4 font-medium">Inventory</th>
              <th className="p-4 font-medium">Price</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer">
                <td className="p-4 font-medium text-slate-900">{product.name}</td>
                <td className="p-4 text-slate-600">{product.stock} in stock</td>
                <td className="p-4 font-medium text-slate-900">{product.price}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                    product.status === 'Low Stock' ? 'bg-amber-100 text-amber-700' :
                    'bg-rose-100 text-rose-700'
                  }`}>
                    {product.status}
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
