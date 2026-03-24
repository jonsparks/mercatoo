import Link from 'next/link';
import {
  Home,
  ShoppingBag,
  Users,
  BarChart,
  Settings,
  LayoutDashboard,
  Percent,
  Megaphone
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-slate-900 text-slate-100 flex flex-col p-4 shrink-0">
        <div className="flex items-center gap-3 px-4 py-6 border-b border-slate-800 mb-6">
          <div className="bg-indigo-500 p-2 rounded-lg text-white">
            <ShoppingBag size={24} />
          </div>
          <span className="font-bold text-xl tracking-wide">Mercatoo</span>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          <NavItem href="/admin" icon={<Home size={20} />} label="Home" />
          <NavItem href="/admin/orders" icon={<ShoppingBag size={20} />} label="Orders" />
          <NavItem href="/admin/products" icon={<LayoutDashboard size={20} />} label="Products" />
          <NavItem href="/admin/customers" icon={<Users size={20} />} label="Customers" />
          <NavItem href="/admin/marketing" icon={<Megaphone size={20} />} label="Marketing" />
          <NavItem href="/admin/analytics" icon={<BarChart size={20} />} label="Analytics" />
          <NavItem href="/admin/discounts" icon={<Percent size={20} />} label="Discounts" />
        </nav>

        <div className="mt-auto border-t border-slate-800 pt-4">
          <NavItem href="/admin/settings" icon={<Settings size={20} />} label="Settings" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto bg-slate-50">
        <header className="bg-white border-b border-slate-200 h-16 flex items-center px-8 shadow-sm">
          <div className="font-medium text-slate-500">Merchant&apos;s Atelier</div>
          <div className="ml-auto flex gap-4">
            <Link
              href="/"
              className="text-sm px-4 py-2 bg-indigo-50 text-indigo-700 font-medium rounded-md hover:bg-indigo-100 transition-colors"
            >
              View Storefront
            </Link>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-3 rounded-md text-slate-300 hover:bg-slate-800 hover:text-white transition-colors group"
    >
      <span className="opacity-70 group-hover:opacity-100 transition-opacity">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
}
