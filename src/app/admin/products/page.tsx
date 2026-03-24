import { prisma } from '@/lib/prisma';
import { Plus, Tag, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

async function addProduct(formData: FormData) {
  'use server';

  const name = formData.get('name') as string;
  const price = parseFloat(formData.get('price') as string);
  const stock = parseInt(formData.get('stock') as string, 10);

  if (!name || isNaN(price) || isNaN(stock)) return;

  await prisma.product.create({
    data: {
      name,
      price,
      stock,
      status: stock > 5 ? 'Active' : stock > 0 ? 'Low Stock' : 'Out of Stock'
    }
  });

  revalidatePath('/admin/products');
  redirect('/admin/products');
}

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Products</h1>
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
            {products.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">
                  No products found. Add one below.
                </td>
              </tr>
            ) : null}
            {products.map((product) => (
              <tr key={product.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer group">
                <td className="p-4 font-medium text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-500 group-hover:border-indigo-100 transition-colors">
                    <ImageIcon size={18} />
                  </div>
                  {product.name}
                </td>
                <td className="p-4 text-slate-600">{product.stock} in stock</td>
                <td className="p-4 font-medium text-slate-900">${product.price.toFixed(2)}</td>
                <td className="p-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium flex inline-flex items-center gap-1.5 ${
                    product.status === 'Active' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
                    product.status === 'Low Stock' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                    'bg-rose-100 text-rose-700 border border-rose-200'
                  }`}>
                    {product.status === 'Active' && <CheckCircle2 size={12} />}
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-8">
        <h2 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Add New Product</h2>
        <form action={addProduct} className="space-y-5 max-w-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Product Name</label>
            <input
              required
              type="text"
              name="name"
              id="name"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
              placeholder="e.g. Organic Cotton T-Shirt"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-slate-700 mb-1">Price ($)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-slate-400">$</span>
                </div>
                <input
                  required
                  type="number"
                  step="0.01"
                  name="price"
                  id="price"
                  className="w-full border border-slate-300 rounded-lg pl-8 pr-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div>
              <label htmlFor="stock" className="block text-sm font-medium text-slate-700 mb-1">Inventory Stock</label>
              <input
                required
                type="number"
                name="stock"
                id="stock"
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                placeholder="0"
              />
            </div>
          </div>

          <div className="pt-4 mt-6">
            <button
              type="submit"
              className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 shadow-sm transition-colors flex items-center gap-2"
            >
              <Plus size={16} /> Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
