import React, { useState } from 'react';
import ProductCatalog from './ProductCatalog';

export default function Dashboard({ onLogout }) {
  const [user] = useState({
    name: 'Ahmad Rafli',
    role: 'Premium Creator',
    avatar: 'AR'
  });

  const avatarStyle = {
    backgroundColor: '#e0e7ff',
    color: '#4f46e5',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '0.875rem',
    border: '2px solid #c7d2fe'
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between h-16 items-center">

          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-2 rounded-xl font-black text-xl tracking-wider">
              DS
            </div>
            <span className="font-bold text-lg text-slate-900 hidden sm:block">
              Dashboard Studio
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div style={avatarStyle}>
                {user.avatar}
              </div>
              <div className="text-left hidden md:block">
                <div className="text-sm font-bold text-slate-800">{user.name}</div>
                <div className="text-xs text-slate-400">{user.role}</div>
              </div>
            </div>

            <div className="h-6 w-[1px] bg-slate-200"></div>

            <button
              onClick={onLogout}
              className="text-sm font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-4 py-2 rounded-xl transition-colors"
            >
              Keluar
            </button>
          </div>

        </div>
      </nav>

      <main className="flex-1">
        <ProductCatalog />
      </main>

      <footer className="bg-white border-t border-slate-100 py-4 text-center text-xs text-slate-400">
        &copy; 2026 Dashboard Studio. All rights reserved.
      </footer>

    </div>
  );
}
