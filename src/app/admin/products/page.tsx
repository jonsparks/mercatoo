"use client";

import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Plus, Tag, Image as ImageIcon, CheckCircle2 } from 'lucide-react';

export default function ProductsPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [products, setProducts] = useState([
    { id: 'prd_1', name: 'Hand-poured Soy Candle', stock: 42, price: '$24.00', status: 'Active' },
    { id: 'prd_2', name: 'Ceramic Coffee Mug', stock: 3, price: '$18.50', status: 'Low Stock' },
    { id: 'prd_3', name: 'Linen Throw Blanket', stock: 15, price: '$89.00', status: 'Active' },
    { id: 'prd_4', name: 'Organic Cotton Tee', stock: 0, price: '$35.00', status: 'Out of Stock' },
  ]);

  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newProduct = {
      id: `prd_${Date.now()}`,
      name: formData.get('name') as string,
      price: `$${formData.get('price')}`,
      stock: parseInt(formData.get('stock') as string, 10),
      status: 'Active',
    };

    setProducts([newProduct, ...products]);
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Products</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <Plus size={16} />
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
              <tr key={product.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer group">
                <td className="p-4 font-medium text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-500 group-hover:border-indigo-100 transition-colors">
                    <ImageIcon size={18} />
                  </div>
                  {product.name}
                </td>
                <td className="p-4 text-slate-600">{product.stock} in stock</td>
                <td className="p-4 font-medium text-slate-900">{product.price}</td>
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

      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New Product"
      >
        <form id="add-product-form" onSubmit={handleAddProduct} className="space-y-5">
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

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-1">Category</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Tag size={16} className="text-slate-400" />
              </div>
              <select
                name="category"
                id="category"
                className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2.5 appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow bg-white"
              >
                <option value="apparel">Apparel</option>
                <option value="home">Home & Living</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3 border-t border-slate-100 mt-6">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-5 py-2.5 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 shadow-sm transition-colors"
            >
              Save Product
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
