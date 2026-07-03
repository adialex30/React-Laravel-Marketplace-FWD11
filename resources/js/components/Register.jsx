import React, { useState } from 'react';
import InputGroup from './ui/InputGroup';
import SelectGroup from './ui/SelectGroup';

export default function Register({ onNavigateToLogin }) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'buyer'
    });

    const roleOptions = [
        { value: 'buyer', label: 'Pembeli (Buyer)' },
        { value: 'seller', label: 'Penjual (Seller)' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Payload API Register Terbentuk:', formData);
    };

    const cardStyle = {
        backgroundColor: '#ffffff',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        border: '1px solid #f1f5f9'
    };

    return (
        <div className="flex min-h-[90vh] items-center justify-center p-4">
            <div style={cardStyle} className="w-full max-w-md">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-indigo-600">Buat Akun Baru</h1>
                    <p className="mt-2 text-sm text-slate-500">Silakan isi data diri Anda untuk mendaftar</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                    <InputGroup
                        label="Nama Lengkap"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nama Lengkap"
                    />

                    <InputGroup
                        label="Alamat Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="nama@email.com"
                    />

                    <InputGroup
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                    />

                    <SelectGroup
                        label="Daftar Sebagai"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        options={roleOptions}
                    />

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-indigo-500 active:scale-[0.98]"
                    >
                        Daftar
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-100 text-center text-sm text-slate-600">
                    Sudah punya akun?{' '}
                    <button
                        type="button"
                        onClick={onNavigateToLogin}
                        className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors bg-transparent border-none p-0 cursor-pointer"
                    >
                        Masuk di sini
                    </button>
                </div>

            </div>
        </div>
    );
}
