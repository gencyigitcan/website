import { db } from '@/lib/db'
import { siteSettings } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { updateSettings } from '@/app/actions/settings'
import { Save } from 'lucide-react'
import PasswordForm from './PasswordForm'

export default async function SettingsPage() {
    const [settings] = await db.select().from(siteSettings).where(eq(siteSettings.id, 'default')).limit(1)

    // Fallback if not seeded (should be seeded though)
    const defaults = {
        heroTitle: 'Yiğitcan Genç',
        heroDescription: 'Yazılım geliştirici olarak ürettiğim projeleri ve yayınladığım uygulamaları burada bulabilirsiniz.',
        contactEmail: 'yigitcangenc@gmail.com'
    }

    const data = settings || defaults

    return (
        <div className="max-w-2xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-fg-primary mb-2">Site Settings</h1>
                <p className="text-fg-secondary">Customize the landing page content.</p>
            </header>

            <form action={updateSettings} className="glass-panel p-8 rounded-3xl space-y-8">

                <section>
                    <h2 className="text-xl font-bold text-fg-primary mb-4 pb-2 border-b border-white/5">Hero Section</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">Main Title</label>
                            <input
                                name="heroTitle"
                                type="text"
                                defaultValue={data.heroTitle || ''}
                                className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">Description</label>
                            <textarea
                                name="heroDescription"
                                rows={3}
                                defaultValue={data.heroDescription || ''}
                                className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)] resize-none"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-fg-primary mb-4 pb-2 border-b border-white/5">Contact Info</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">Email Address</label>
                            <input
                                name="contactEmail"
                                type="email"
                                defaultValue={data.contactEmail || ''}
                                className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)]"
                            />
                        </div>
                    </div>
                </section>

                <div className="pt-4 border-t border-white/5 flex justify-end">
                    <button type="submit" className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 font-bold text-white shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all">
                        <Save size={18} />
                        Update Settings
                    </button>
                </div>
            </form>

            <div className="mt-12 mb-8">
                <h2 className="text-xl font-bold text-fg-primary mb-2">Security</h2>
                <p className="text-fg-secondary text-sm">Update your access credentials.</p>
            </div>

            <PasswordForm />
        </div>
    )
}
