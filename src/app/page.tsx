import Link from 'next/link';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-8">
        <div className="flex justify-center mb-8">
          <div className="bg-indigo-600 p-4 rounded-2xl text-white">
            <ShoppingBag size={48} />
          </div>
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-neutral-900">
          Welcome to Mercatoo
        </h1>

        <p className="text-xl text-neutral-600 leading-relaxed">
          The simpler, cheaper, and merchant-first ecommerce platform for creators, designers, and small businesses.
        </p>

        <div className="pt-8">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Go to Merchant Admin
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
}
