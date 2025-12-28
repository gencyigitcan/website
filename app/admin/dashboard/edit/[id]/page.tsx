import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { updateProject } from '@/app/actions/projects'
import { db } from '@/lib/db'
import { cards } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'

export default async function EditProjectPage({ params }: { params: { id: string } }) {
    const [project] = await db.select().from(cards).where(eq(cards.id, params.id)).limit(1)

    if (!project) {
        redirect('/admin/dashboard')
    }

    const updateProjectWithId = updateProject.bind(null, project.id)

    return (
        <div className="max-w-2xl mx-auto">
            <header className="mb-8">
                <Link href="/admin/dashboard" className="inline-flex items-center gap-2 text-sm text-fg-secondary hover:text-fg-primary mb-4 transition-colors">
                    <ArrowLeft size={16} />
                    Back to Projects
                </Link>
                <h1 className="text-3xl font-serif font-bold text-fg-primary">Edit Project</h1>
            </header>

            <form action={updateProjectWithId} className="glass-panel p-8 rounded-3xl space-y-6">
                <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">Title</label>
                    <input
                        name="title"
                        type="text"
                        required
                        defaultValue={project.title}
                        className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)]"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">Internal / External URL</label>
                    <input
                        name="subdomainUrl"
                        type="text"
                        required
                        defaultValue={project.subdomainUrl}
                        className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)]"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">Description</label>
                    <textarea
                        name="description"
                        required
                        rows={4}
                        defaultValue={project.description}
                        className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)] resize-none"
                    />
                </div>

                <div className="flex items-center gap-3 py-2">
                    <input
                        type="checkbox"
                        name="isActive"
                        id="isActive"
                        defaultChecked={project.isActive ?? true}
                        className="w-5 h-5 rounded border-white/10 bg-white/5 text-indigo-500 focus:ring-indigo-500/50"
                    />
                    <label htmlFor="isActive" className="text-fg-primary">Active (Visible on public site)</label>
                </div>

                <div className="pt-4 border-t border-white/5 flex justify-end gap-3">
                    <Link href="/admin/dashboard" className="px-6 py-3 rounded-xl hover:bg-white/5 text-fg-secondary font-medium transition-colors">
                        Cancel
                    </Link>
                    <button type="submit" className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 font-bold text-white shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )
}
