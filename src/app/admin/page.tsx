import { ArrowUpRight, ShoppingBag, DollarSign, Users, Target } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Good morning, merchant.</h1>
          <p className="text-slate-500">Here&apos;s what&apos;s happening in your store today.</p>
        </div>
        <div>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
            Customize Storefront
            <Target size={18} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Revenue" value="$4,521.90" trend="+12.5%" isPositive />
        <MetricCard title="Orders" value="124" trend="+4.2%" isPositive />
        <MetricCard title="New Customers" value="89" trend="+18.1%" isPositive />
        <MetricCard title="Conversion Rate" value="3.2%" trend="-1.4%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-semibold mb-4 text-slate-800 border-b border-slate-100 pb-4">Recent Activity</h2>
          <div className="space-y-6 mt-6">
            <ActivityRow
              title="Order #1024 created"
              time="2 minutes ago"
              desc="Sarah Jenkins bought 'Hand-poured Soy Candle'"
            />
            <ActivityRow
              title="Inventory Low"
              time="1 hour ago"
              desc="Only 3 units left of 'Ceramic Mug'"
            />
            <ActivityRow
              title="New Customer Registered"
              time="3 hours ago"
              desc="David Chen created an account."
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-lg font-semibold mb-4 text-slate-800 border-b border-slate-100 pb-4">Quick Actions</h2>
          <div className="space-y-3 mt-6">
            <QuickAction title="Add Product" icon={<ShoppingBag size={18} />} />
            <QuickAction title="Create Discount" icon={<DollarSign size={18} />} />
            <QuickAction title="View Abandoned Carts" icon={<Users size={18} />} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, trend, isPositive }: { title: string; value: string; trend: string; isPositive?: boolean }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <h3 className="text-sm font-medium text-slate-500 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-slate-800">{value}</div>
      <div className={`mt-2 flex items-center text-sm font-medium ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
        {isPositive && <ArrowUpRight size={16} className="mr-1" />}
        {!isPositive && <ArrowUpRight size={16} className="mr-1 rotate-90" />}
        {trend} from last month
      </div>
    </div>
  );
}

function ActivityRow({ title, time, desc }: { title: string; time: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-2 h-2 mt-2 rounded-full bg-indigo-500 flex-shrink-0"></div>
      <div>
        <div className="font-medium text-slate-800 flex items-center justify-between">
          <span>{title}</span>
          <span className="text-xs text-slate-400 font-normal">{time}</span>
        </div>
        <div className="text-sm text-slate-500 mt-1">{desc}</div>
      </div>
    </div>
  );
}

function QuickAction({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <button className="w-full flex items-center gap-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 p-4 rounded-lg text-slate-700 font-medium transition-colors group">
      <span className="text-slate-400 group-hover:text-indigo-600 transition-colors">{icon}</span>
      {title}
    </button>
  );
}
