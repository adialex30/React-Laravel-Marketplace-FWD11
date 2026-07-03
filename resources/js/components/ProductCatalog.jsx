import React, { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductCatalog() {
  const initialProducts = [
    { user_id: 1, category_id: 1, name: 'UI Kit Premium', description: 'Paket UI Kit lengkap untuk Figma', price: 150000, stock: 999 },
    { user_id: 1, category_id: 1, name: 'Template Landing Page', description: 'Template modern untuk website bisnis', price: 200000, stock: 100 },
    { user_id: 1, category_id: 2, name: 'E-Book Laravel', description: 'Panduan lengkap belajar Laravel', price: 75000, stock: 50 },
    { user_id: 1, category_id: 2, name: 'E-Book PHP Dasar', description: 'Belajar PHP dari dasar hingga mahir', price: 50000, stock: 75 },
    { user_id: 1, category_id: 3, name: 'Flat Illustration Pack', description: 'Kumpulan ilustrasi flat modern', price: 120000, stock: 40 },
    { user_id: 1, category_id: 3, name: 'Business Illustration Bundle', description: 'Ilustrasi bertema bisnis dan startup', price: 180000, stock: 35 },
    { user_id: 1, category_id: 4, name: 'Minimal Icon Pack', description: '500+ ikon minimalis', price: 80000, stock: 200 },
    { user_id: 1, category_id: 4, name: 'Social Media Icons', description: 'Paket ikon media sosial', price: 60000, stock: 150 },
    { user_id: 1, category_id: 1, name: 'Dashboard UI Kit', description: 'Template dashboard admin modern', price: 250000, stock: 80 },
    { user_id: 1, category_id: 2, name: 'Mobile Banking UI', description: 'Desain aplikasi mobile banking', price: 220000, stock: 70 },
    { user_id: 1, category_id: 2, name: 'Portfolio Website Theme', description: 'Tema portfolio profesional', price: 175000, stock: 120 },
    { user_id: 1, category_id: 2, name: 'Agency Website Theme', description: 'Tema website agency kreatif', price: 195000, stock: 90 },
    { user_id: 1, category_id: 3, name: 'Character Illustration Set', description: 'Set ilustrasi karakter profesional', price: 160000, stock: 60 },
    { user_id: 1, category_id: 3, name: 'Food Illustration Pack', description: 'Ilustrasi makanan berkualitas tinggi', price: 130000, stock: 45 },
    { user_id: 1, category_id: 4, name: 'Outline Icon Collection', description: 'Paket ikon outline modern', price: 70000, stock: 300 },
    { user_id: 1, category_id: 4, name: '3D Icon Pack', description: 'Ikon 3D untuk aplikasi modern', price: 210000, stock: 55 },
    { user_id: 1, category_id: 1, name: 'E-Commerce UI Kit', description: 'UI Kit lengkap untuk toko online', price: 275000, stock: 65 },
    { user_id: 1, category_id: 2, name: 'Restaurant Website Theme', description: 'Tema website restoran modern', price: 165000, stock: 110 },
    { user_id: 1, category_id: 3, name: 'Travel Illustration Bundle', description: 'Kumpulan ilustrasi bertema perjalanan', price: 145000, stock: 55 },
    { user_id: 1, category_id: 4, name: 'Finance Icon Pack', description: 'Ikon bertema keuangan dan investasi', price: 90000, stock: 180 }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    { id: 'all', label: 'Semua Produk' },
    { id: 1, label: 'UI Kit & Template' },
    { id: 2, label: 'E-Book & Tema' },
    { id: 3, label: 'Ilustrasi' },
    { id: 4, label: 'Ikon' }
  ];

  const handleAddToCart = (product) => {
    setCartCount((prevCount) => prevCount + 1);
    alert(`Berhasil menambahkan "${product.name}" ke keranjang!`);
  };

  const filteredProducts = initialProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category_id === Number(selectedCategory);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <header className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900">Digital Asset Store</h1>
            <p className="text-sm text-slate-500">Temukan asset desain terbaik untuk menunjang produktivitas Anda</p>
          </div>

        </header>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Cari nama aset..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">Aset digital tidak ditemukan.</p>
          </div>
        )}

      </div>
    </div>
  );
}
