import { db } from '@/lib/db'
import { cards } from '@/db/schema'
import { desc } from 'drizzle-orm'
import Link from 'next/link'
import { Plus, Edit2, Trash2, ExternalLink, Power } from 'lucide-react'
import { deleteProject, toggleProject } from '@/app/actions/projects'

export default async function Dashboard() {
    const projects = await db.select().from(cards).orderBy(desc(cards.createdAt))

    return (
        <div>
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-fg-primary mb-2">Projects</h1>
                    <p className="text-fg-secondary">Manage your portfolio showcase items.</p>
                </div>
                <Link
                    href="/admin/dashboard/create"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all"
                >
                    <Plus size={20} />
                    New Project
                </Link>
            </header>

            <div className="grid grid-cols-1 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="glass-panel p-6 rounded-2xl flex items-center gap-6 group">

                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 flex items-center justify-center border border-white/10 shrink-0">
                            <span className="font-serif text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
                                {project.title.substring(0, 2).toUpperCase()}
                            </span>
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-1">
                                <h3 className="text-lg font-bold text-fg-primary truncate">{project.title}</h3>
                                {project.isActive ? (
                                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium uppercase tracking-wide">Active</span>
                                ) : (
                                    <span className="px-2 py-0.5 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-500 text-xs font-medium uppercase tracking-wide">Draft</span>
                                )}
                            </div>
                            <p className="text-sm text-fg-secondary truncate">{project.subdomainUrl}</p>
                        </div>

                        <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                            <form action={toggleProject.bind(null, project.id, !project.isActive)}>
                                <button title={project.isActive ? "Deactivate" : "Activate"} className="p-2 rounded-lg hover:bg-white/10 text-fg-muted hover:text-fg-primary transition-colors">
                                    <Power size={18} className={project.isActive ? "text-emerald-400" : "text-slate-400"} />
                                </button>
                            </form>

                            <Link href={`/admin/dashboard/edit/${project.id}`} className="p-2 rounded-lg hover:bg-white/10 text-fg-muted hover:text-indigo-400 transition-colors">
                                <Edit2 size={18} />
                            </Link>

                            <form action={deleteProject.bind(null, project.id)}>
                                <button title="Delete" className="p-2 rounded-lg hover:bg-red-500/10 text-fg-muted hover:text-red-400 transition-colors">
                                    <Trash2 size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
