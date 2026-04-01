'use client'

import { useActionState, useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { Lock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { login } from '@/app/actions/auth'

function SubmitButton({ lang }: { lang: 'tr' | 'en' }) {
    const { pending } = useFormStatus()
    const t = lang === 'tr' ? {
        pending: 'Doğrulanıyor...',
        idle: 'Giriş Yap'
    } : {
        pending: 'Authenticating...',
        idle: 'Access Safe'
    }

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 font-bold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 active:translate-y-0 transition-all disabled:opacity-50 disabled:pointer-events-none"
        >
            {pending ? t.pending : t.idle}
        </button>
    )
}

export default function AdminLogin() {
    const [state, action] = useActionState(login, null)
    const [lang, setLang] = useState<'tr' | 'en'>('en')

    useEffect(() => {
        const browserLang = navigator.language.split('-')[0];
        setLang(browserLang === 'tr' ? 'tr' : 'en');
    }, []);

    const t = lang === 'tr' ? {
        title: 'Yönetici Paneli',
        badge: 'Güvenlik Doğrulaması Gerekli',
        email: 'E-posta Adresi',
        pass: 'Şifre',
    } : {
        title: 'Admin Portal',
        badge: 'Security Clearance Required',
        email: 'Email Address',
        pass: 'Passkey',
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center relative p-6">
            <Navbar />

            <div className="glass-panel w-full max-w-md p-8 rounded-3xl animate-float">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg transform rotate-3">
                        <Lock className="text-white" size={32} />
                    </div>
                    <h1 className="font-serif text-3xl font-bold mb-2 text-fg-primary">{t.title}</h1>
                    <p className="text-sm opacity-60 text-fg-secondary">{t.badge}</p>
                </div>

                <form action={action} className="space-y-5">
                    {state?.message && (
                        <div className="text-red-500 text-sm text-center bg-red-500/10 p-2 rounded-lg border border-red-500/20">
                            {state.message}
                        </div>
                    )}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2 ml-1 text-fg-muted">{t.email}</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:opacity-20 text-fg-primary"
                            placeholder="user@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2 ml-1 text-fg-muted">{t.pass}</label>
                        <input
                            name="password"
                            type="password"
                            className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:opacity-20 text-fg-primary"
                            placeholder="••••••••"
                        />
                    </div>

                    <SubmitButton lang={lang} />
                </form>
            </div>
        </main>
    )
}
