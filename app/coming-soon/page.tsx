'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, Rocket } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ComingSoon() {
    const [lang, setLang] = useState<'tr' | 'en'>('en')

    useEffect(() => {
        const browserLang = navigator.language.split('-')[0];
        setLang(browserLang === 'tr' ? 'tr' : 'en');
    }, []);

    const t = lang === 'tr' ? {
        title: 'Yakında Yayında',
        desc: 'Bu proje şu anda geliştirme aşamasında. Çok yakında harika şeyler göreceksiniz!',
        btn: 'Ana Sayfaya Dön'
    } : {
        title: 'Coming Soon',
        desc: 'This project is currently under development. You will see great things very soon!',
        btn: 'Back to Home'
    };

    return (
        <main className="h-screen flex flex-col relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
            <Navbar />

            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center z-10">
                <div className="glass-panel p-12 rounded-3xl max-w-lg w-full flex flex-col items-center animate-float shadow-2xl border border-white/5">

                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/30">
                        <Rocket size={48} className="text-white ml-1" />
                    </div>

                    <h1 className="font-serif text-4xl md:text-5xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 leading-tight">
                        {t.title}
                    </h1>

                    <p className="text-lg opacity-70 mb-10 max-w-md font-sans">
                        {t.desc}
                    </p>

                    <Link
                        href="/"
                        className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 transition-all hover:scale-105 active:scale-95 font-medium tracking-wide"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span>{t.btn}</span>
                    </Link>

                </div>
            </div>
        </main>
    )
}
