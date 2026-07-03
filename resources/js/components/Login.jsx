export default function Login({ onLoginSuccess, onNavigateToRegister }) {
    return (
        <div className="flex min-h-[90vh] items-center justify-center p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-slate-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-indigo-600">
                        Selamat Datang
                    </h1>
                    <p className="mt-2 text-sm text-slate-500">
                        Silakan masuk ke akun Anda
                    </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 text-left mb-1">
                            Alamat Email
                        </label>
                        <input
                            type="email"
                            placeholder="nama@email.com"
                            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 text-left mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={onLoginSuccess}
                        className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-indigo-500 active:scale-[0.98]"
                    >
                        Masuk
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-100 text-center text-sm text-slate-600">
                    Belum punya akun?{' '}
                    <button
                        type="button"
                        onClick={onNavigateToRegister}
                        className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors bg-transparent border-none p-0 cursor-pointer"
                    >
                        Daftar Sekarang
                    </button>
                </div>
            </div>
        </div>
    );
}
