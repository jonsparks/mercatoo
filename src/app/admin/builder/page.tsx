"use client";

import { useState } from 'react';
import { LayoutTemplate, MoveRight, Layers, Settings2, Palette, Type, Smartphone, Monitor } from 'lucide-react';

export default function StorefrontBuilder() {
  const [activeTab, setActiveTab] = useState<'blocks' | 'theme'>('blocks');
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="h-[calc(100vh-64px-4rem)] bg-slate-100 rounded-xl overflow-hidden shadow-inner border border-slate-200 flex flex-col animate-in fade-in zoom-in-95 duration-500">
      {/* Top Toolbar */}
      <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 z-10 shadow-sm shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-indigo-600 font-semibold bg-indigo-50 px-3 py-1.5 rounded-md">
            <LayoutTemplate size={18} />
            <span>Storefront Builder</span>
          </div>
          <div className="h-6 w-px bg-slate-200 mx-2"></div>
          <div className="flex bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => setActiveDevice('desktop')}
              className={`p-1.5 rounded-md transition-all ${activeDevice === 'desktop' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Monitor size={18} />
            </button>
            <button
              onClick={() => setActiveDevice('mobile')}
              className={`p-1.5 rounded-md transition-all ${activeDevice === 'mobile' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Smartphone size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-slate-500 font-medium text-sm hover:text-slate-900 transition-colors">Discard</button>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-medium text-sm transition-all shadow-sm flex items-center gap-2">
            Publish Changes
            <MoveRight size={16} />
          </button>
        </div>
      </div>

      {/* Main Builder Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Components */}
        <aside className="w-72 bg-white border-r border-slate-200 flex flex-col shrink-0 z-10 shadow-sm">
          <div className="flex border-b border-slate-100">
            <button
              onClick={() => setActiveTab('blocks')}
              className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'blocks' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            >
              <div className="flex items-center justify-center gap-2">
                <Layers size={16} /> Blocks
              </div>
            </button>
            <button
              onClick={() => setActiveTab('theme')}
              className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'theme' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
            >
              <div className="flex items-center justify-center gap-2">
                <Palette size={16} /> Theme Settings
              </div>
            </button>
          </div>

          <div className="p-4 overflow-y-auto flex-1">
            {activeTab === 'blocks' ? (
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Structure</h3>
                <BuilderBlock title="Hero Header" desc="Large image with headline and CTA" icon={<LayoutTemplate size={18} />} />
                <BuilderBlock title="Featured Collection" desc="Grid of specific products" icon={<LayoutTemplate size={18} />} />
                <BuilderBlock title="Text & Image" desc="Split layout for storytelling" icon={<LayoutTemplate size={18} />} />
                <BuilderBlock title="Newsletter Signup" desc="Capture emails for marketing" icon={<LayoutTemplate size={18} />} />
                <BuilderBlock title="Footer" desc="Links, social, and copyright" icon={<LayoutTemplate size={18} />} />
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Palette size={14} /> Colors
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <ColorPicker label="Primary" color="bg-indigo-600" hex="#4f46e5" />
                    <ColorPicker label="Secondary" color="bg-slate-900" hex="#0f172a" />
                    <ColorPicker label="Background" color="bg-slate-50" hex="#f8fafc" />
                    <ColorPicker label="Text" color="bg-slate-800" hex="#1e293b" />
                  </div>
                </div>
                <hr className="border-slate-100" />
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Type size={14} /> Typography
                  </h3>
                  <div className="space-y-3">
                    <select className="w-full text-sm border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 outline-none">
                      <option>Inter (Sans-serif)</option>
                      <option>Playfair Display (Serif)</option>
                      <option>Roboto Mono (Monospace)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Central Canvas - Live Preview */}
        <div className="flex-1 overflow-auto bg-slate-100 p-8 flex justify-center custom-scrollbar relative">
          <div className={`transition-all duration-300 ease-in-out shadow-2xl rounded-sm overflow-hidden border border-slate-300 bg-white ${activeDevice === 'mobile' ? 'w-[375px]' : 'w-full max-w-5xl'}`}>

            {/* MOCK PREVIEW CANVAS */}
            <div className="h-full flex flex-col">
              {/* Mock Header Block */}
              <div className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 group relative cursor-pointer hover:border-indigo-400 hover:border-2 transition-all">
                <div className="absolute inset-0 bg-indigo-50/0 group-hover:bg-indigo-50/50 transition-colors pointer-events-none"></div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-indigo-600 text-white text-xs px-2 py-1 rounded shadow-sm transition-opacity">Header Block</div>

                <div className="font-bold text-xl tracking-tight">Your Store</div>
                <div className="flex gap-6 text-sm font-medium text-slate-600 hidden md:flex">
                  <span>Shop</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>

              {/* Mock Hero Block */}
              <div className="bg-slate-900 text-white py-32 px-8 text-center group relative cursor-pointer border-y-2 border-transparent hover:border-indigo-400 transition-all flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors pointer-events-none"></div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-indigo-600 text-white text-xs px-2 py-1 rounded shadow-sm transition-opacity">Hero Block</div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">Handcrafted goods for the modern home.</h1>
                <p className="text-lg text-slate-300 mb-8 max-w-xl">Discover our curated collection of ceramics, textiles, and art pieces designed to elevate your everyday space.</p>
                <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-slate-100 transition-colors">Shop Collection</button>
              </div>

            </div>
            {/* END MOCK PREVIEW */}
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <aside className="w-80 bg-white border-l border-slate-200 flex flex-col shrink-0 z-10 shadow-sm">
          <div className="py-4 px-5 border-b border-slate-100 flex items-center gap-2 text-slate-800 font-semibold">
            <Settings2 size={18} className="text-slate-400" />
            Block Settings
          </div>
          <div className="p-5 overflow-y-auto space-y-6">
            <div className="text-sm text-slate-500 bg-slate-50 p-4 rounded-lg border border-slate-100 border-dashed text-center">
              Select a block on the canvas to edit its properties.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function BuilderBlock({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="p-3 border border-slate-200 rounded-lg hover:border-indigo-400 hover:shadow-md hover:bg-indigo-50/30 transition-all cursor-grab active:cursor-grabbing group bg-white">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-slate-100 text-slate-500 rounded-md group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
          {icon}
        </div>
        <div>
          <div className="font-medium text-slate-800 text-sm mb-0.5">{title}</div>
          <div className="text-xs text-slate-500">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function ColorPicker({ label, color, hex }: { label: string, color: string, hex: string }) {
  return (
    <div className="flex flex-col gap-1.5 p-2 border border-slate-100 rounded-lg hover:border-slate-300 transition-colors cursor-pointer">
      <div className="text-xs font-medium text-slate-600">{label}</div>
      <div className="flex items-center gap-2">
        <div className={`w-6 h-6 rounded-full shadow-inner border border-slate-200 ${color}`}></div>
        <div className="text-xs text-slate-400 font-mono">{hex}</div>
      </div>
    </div>
  );
}
