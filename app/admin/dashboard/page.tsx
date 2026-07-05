import { db } from '@/lib/db'
import { cards } from '@/db/schema'
import { desc } from 'drizzle-orm'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import DragDropProjectList from './DragDropProjectList'

import { headers } from 'next/headers'

export default async function Dashboard() {
    const projects = await db.select().from(cards).orderBy(desc(cards.sortOrder), desc(cards.createdAt))
    const serializedProjects = projects.map(project => ({
        ...project,
        createdAt: project.createdAt ? project.createdAt.toISOString() : null,
        updatedAt: project.updatedAt ? project.updatedAt.toISOString() : null,
    }))

    const headerList = await headers();
    const acceptLanguage = headerList.get('accept-language') || 'en';
    const isTurkish = acceptLanguage.startsWith('tr');

    const t = isTurkish ? {
        title: 'Projeler',
        subtitle: 'Portfolyo projelerini yönetin.',
        btnNew: 'Yeni Proje',
        active: 'Aktif',
        draft: 'Taslak',
        restricted: 'Kısıtlı',
        deactivate: 'Pasif Yap',
        activate: 'Aktif Yap',
        edit: 'Düzenle',
        delete: 'Sil',
        orderLabel: 'Sıra'
    } : {
        title: 'Projects',
        subtitle: 'Manage your portfolio showcase items.',
        btnNew: 'New Project',
        active: 'Active',
        draft: 'Draft',
        restricted: 'Restricted',
        deactivate: 'Deactivate',
        activate: 'Activate',
        edit: 'Edit',
        delete: 'Delete',
        orderLabel: 'Order'
    }

    return (
        <div>
            <header className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-fg-primary mb-2">{t.title}</h1>
                    <p className="text-fg-secondary">{t.subtitle}</p>
                </div>
                <Link
                    href="/admin/dashboard/create"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all"
                >
                    <Plus size={20} />
                    {t.btnNew}
                </Link>
            </header>

            <DragDropProjectList initialProjects={serializedProjects} t={t} />
        </div>
    )
}
