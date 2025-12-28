import { db } from '@/lib/db'
import { admins } from '@/db/schema'
import { desc } from 'drizzle-orm'
import { Trash2, Shield } from 'lucide-react'
import { deleteAdmin } from '@/app/actions/admin-management'
import CreateAdminForm from './CreateAdminForm'

export default async function AdminsPage() {
    const allAdmins = await db.select().from(admins).orderBy(desc(admins.createdAt))

    return (
        <div>
            <header className="mb-8">
                <h1 className="text-3xl font-serif font-bold text-fg-primary mb-2">Admin Management</h1>
                <p className="text-fg-secondary">Manage access to the admin portal.</p>
            </header>

            <CreateAdminForm />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allAdmins.map((admin) => (
                    <div key={admin.id} className="glass-panel p-6 rounded-2xl flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center border border-white/10 shrink-0">
                            <Shield size={20} className="text-pink-400" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-base font-bold text-fg-primary truncate">{admin.email}</h3>
                            <p className="text-xs text-fg-muted">
                                Added {admin.createdAt ? new Date(admin.createdAt).toLocaleDateString() : 'Unknown'}
                            </p>
                        </div>

                        <form action={deleteAdmin.bind(null, admin.id)}>
                            <button
                                title="Revoke Access"
                                className="p-2 rounded-lg hover:bg-red-500/10 text-fg-muted hover:text-red-400 transition-colors"
                            >
                                <Trash2 size={18} />
                            </button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    )
}
