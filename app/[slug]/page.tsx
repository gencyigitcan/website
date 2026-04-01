import { db } from '@/lib/db'
import { cards, siteSettings } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { ArrowLeft, Mail, Lock, Rocket } from 'lucide-react'
import { headers } from 'next/headers'

export default async function RestrictedProjectPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const headerList = await headers();
    const acceptLanguage = headerList.get('accept-language') || 'en';
    const isTurkish = acceptLanguage.startsWith('tr');

    const project = await db.select()
        .from(cards)
        .where(eq(cards.slug, params.slug))
        .get();

    if (!project || !project.isComingSoon) {
        notFound();
    }

    const settings = await db.select().from(siteSettings).where(eq(siteSettings.id, 'default')).get();
    const contactEmail = settings?.contactEmail || 'yigitcangenc@gmail.com';

    const t = isTurkish ? {
        defaultMsg: "Bu projenin içeriği şu an kısıtlıdır. İlginiz için teşekkürler!",
        btnContact: "İletişime Geç",
        btnBack: "Geri",
        subject: "Erişim Talebi"
    } : {
        defaultMsg: "The content of this project is currently restricted. Thank you for your interest!",
        btnContact: "Contact Me",
        btnBack: "Back",
        subject: "Access Request"
    };

    return (
        <main className="h-screen flex flex-col relative overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
            <Navbar />

            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center z-10 relative">
                {/* Decorative background elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-pink-500/5 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>

                <div className="glass-panel p-12 rounded-3xl max-w-xl w-full flex flex-col items-center animate-float shadow-2xl border border-white/[0.05] relative z-20">

                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mb-8 shadow-2xl shadow-indigo-500/30 ring-4 ring-white/5 relative">
                        <Rocket size={44} className="text-white ml-1" />
                    </div>

                    <h1 className="font-serif text-4xl md:text-5xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 leading-tight">
                        {project.title}
                    </h1>

                    <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

                    <p className="text-lg opacity-70 mb-12 max-w-md font-sans leading-relaxed">
                        {project.comingSoonText || t.defaultMsg}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <a
                            href={`mailto:${contactEmail}?subject=${t.subject}: ${project.title}`}
                            className="flex-[2] group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all font-bold text-fg-primary shadow-xl hover:-translate-y-1 active:scale-[0.98]"
                        >
                            <Mail size={22} className="group-hover:scale-110 transition-transform" />
                            <span>{t.btnContact}</span>
                        </a>

                        <Link
                            href="/"
                            className="flex-1 group flex items-center justify-center gap-2 px-8 py-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all font-medium text-fg-secondary"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            <span>{t.btnBack}</span>
                        </Link>
                    </div>

                    {/* Meta info */}
                    <p className="mt-10 text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">
                        Restricted Access Portal
                    </p>
                </div>
            </div>
        </main>
    )
}
