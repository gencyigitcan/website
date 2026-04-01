import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { createProject } from '@/app/actions/projects'

import { headers } from 'next/headers'

export default async function CreateProjectPage() {
    const headerList = await headers();
    const acceptLanguage = headerList.get('accept-language') || 'en';
    const isTurkish = acceptLanguage.startsWith('tr');

    const t = isTurkish ? {
        back: 'Projelere Dön',
        title: 'Yeni Proje',
        labelTitle: 'Başlık',
        labelUrl: 'Dahili / Harici URL',
        labelSlug: 'Slug (Özel URL Yolu)',
        labelImg: 'Görsel URL (Opsiyonel)',
        labelDesc: 'Açıklama',
        comingSoon: 'Kısıtlı / Yakında Sayfası',
        comingSoonMsg: 'Kısıtlı Erişim Mesajı',
        defaultMsg: 'Bu projeyi görmek için mail ile iletişime geçebilirsiniz.',
        active: 'Aktif (Sitede görünür)',
        cancel: 'İptal',
        create: 'Proje Oluştur'
    } : {
        back: 'Back to Projects',
        title: 'New Project',
        labelTitle: 'Title',
        labelUrl: 'Internal / External URL',
        labelSlug: 'Slug (Custom URL Path)',
        labelImg: 'Image URL (Optional)',
        labelDesc: 'Description',
        comingSoon: 'Coming Soon / Restricted Page',
        comingSoonMsg: 'Coming Soon Message',
        defaultMsg: 'You can contact me via email to see this project.',
        active: 'Active (Visible on public site)',
        cancel: 'Cancel',
        create: 'Create Project'
    };

    return (
        <div className="max-w-2xl mx-auto">
            <header className="mb-8">
                <Link href="/admin/dashboard" className="inline-flex items-center gap-2 text-sm text-fg-secondary hover:text-fg-primary mb-4 transition-colors">
                    <ArrowLeft size={16} />
                    {t.back}
                </Link>
                <h1 className="text-3xl font-serif font-bold text-fg-primary">{t.title}</h1>
            </header>

            <form action={createProject} className="glass-panel p-8 rounded-3xl space-y-6">
                <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">{t.labelTitle}</label>
                    <input
                        name="title"
                        type="text"
                        required
                        className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)]"
                        placeholder="e.g. Finance Tracker"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">{t.labelUrl}</label>
                        <input
                            name="subdomainUrl"
                            type="text"
                            className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)]"
                            placeholder="https://... or /path"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">{t.labelSlug}</label>
                        <input
                            name="slug"
                            type="text"
                            className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)]"
                            placeholder="e.g. project-x"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">{t.labelImg}</label>
                    <input
                        name="imageUrl"
                        type="text"
                        className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)]"
                        placeholder="https://..."
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">{t.labelDesc}</label>
                    <textarea
                        name="description"
                        required
                        rows={3}
                        className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)] resize-none"
                    />
                </div>

                <div className="space-y-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            name="isComingSoon"
                            id="isComingSoon"
                            className="w-5 h-5 rounded border-white/10 bg-white/5 text-indigo-500 focus:ring-indigo-500/50"
                        />
                        <label htmlFor="isComingSoon" className="text-fg-primary font-medium">{t.comingSoon}</label>
                    </div>

                    <div>
                        <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">{t.comingSoonMsg}</label>
                        <textarea
                            name="comingSoonText"
                            rows={3}
                            className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)] resize-none text-sm"
                            defaultValue={t.defaultMsg}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3 py-2">
                    <input
                        type="checkbox"
                        name="isActive"
                        id="isActive"
                        defaultChecked
                        className="w-5 h-5 rounded border-white/10 bg-white/5 text-indigo-500 focus:ring-indigo-500/50"
                    />
                    <label htmlFor="isActive" className="text-fg-primary">{t.active}</label>
                </div>

                <div className="pt-4 border-t border-white/5 flex justify-end gap-3">
                    <Link href="/admin/dashboard" className="px-6 py-3 rounded-xl hover:bg-white/5 text-fg-secondary font-medium transition-colors">
                        {t.cancel}
                    </Link>
                    <button type="submit" className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 font-bold text-white shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all">
                        {t.create}
                    </button>
                </div>
            </form>
        </div>
    )
}
