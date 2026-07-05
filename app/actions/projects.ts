'use server'

import { db } from '@/lib/db'
import { cards } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createProject(formData: FormData) {
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    let subdomainUrl = formData.get('subdomainUrl') as string
    const imageUrlRaw = formData.get('imageUrl') as string | null
    const imageUrl = (imageUrlRaw && imageUrlRaw.trim() !== '') ? imageUrlRaw.trim() : null
    let slug = formData.get('slug') as string
    if (slug) slug = slug.replace(/^\/+/, '')
    const isComingSoon = formData.get('isComingSoon') === 'on'
    const comingSoonText = formData.get('comingSoonText') as string

    if (subdomainUrl && !subdomainUrl.startsWith('/') && !subdomainUrl.match(/^https?:\/\//)) {
        subdomainUrl = `https://${subdomainUrl}`
    }

    const isActive = formData.get('isActive') === 'on'
    const sortOrder = parseInt(formData.get('sortOrder') as string, 10) || 0
    const iconName = (formData.get('iconName') as string) || 'Sparkles'

    if (!title || !description || (!subdomainUrl && !isComingSoon)) {
        // Handle validation error
        return
    }

    try {
        await db.insert(cards).values({
            title,
            description,
            subdomainUrl: subdomainUrl || '#',
            imageUrl,
            isActive,
            isComingSoon,
            comingSoonText,
            slug: slug || undefined,
            sortOrder,
            iconName
        })
    } catch (e) {
        console.error('Failed to create project', e)
        return
    }

    revalidatePath('/')
    revalidatePath('/admin/dashboard')
    redirect('/admin/dashboard')
}

export async function updateProject(id: string, formData: FormData) {
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    let subdomainUrl = formData.get('subdomainUrl') as string
    const imageUrlRaw = formData.get('imageUrl') as string | null
    const imageUrl = (imageUrlRaw && imageUrlRaw.trim() !== '') ? imageUrlRaw.trim() : null
    let slug = formData.get('slug') as string
    if (slug) slug = slug.replace(/^\/+/, '')
    const isComingSoon = formData.get('isComingSoon') === 'on'
    const comingSoonText = formData.get('comingSoonText') as string
    const sortOrder = parseInt(formData.get('sortOrder') as string, 10) || 0
    const iconName = (formData.get('iconName') as string) || 'Sparkles'

    if (subdomainUrl && !subdomainUrl.startsWith('/') && !subdomainUrl.match(/^https?:\/\//)) {
        subdomainUrl = `https://${subdomainUrl}`
    }

    const isActive = formData.get('isActive') === 'on'

    try {
        await db.update(cards).set({
            title,
            description,
            subdomainUrl: subdomainUrl || '#',
            imageUrl,
            isActive,
            isComingSoon,
            comingSoonText,
            slug: slug || null,
            sortOrder,
            iconName,
            updatedAt: new Date()
        }).where(eq(cards.id, id))
    } catch (e) {
        console.error('Failed to update project', e)
        return
    }

    revalidatePath('/')
    revalidatePath('/admin/dashboard')
    redirect('/admin/dashboard')
}

export async function deleteProject(id: string) {
    try {
        await db.delete(cards).where(eq(cards.id, id))
        revalidatePath('/')
        revalidatePath('/admin/dashboard')
    } catch (e) {
        console.error("Delete failed", e)
    }
}

export async function toggleProject(id: string, newState: boolean) {
    try {
        await db.update(cards).set({ isActive: newState }).where(eq(cards.id, id))
        revalidatePath('/')
        revalidatePath('/admin/dashboard')
    } catch (e) {
        console.error("Toggle failed", e)
    }
}

export async function updateProjectsOrder(orders: { id: string, sortOrder: number }[]) {
    try {
        await Promise.all(
            orders.map(order => 
                db.update(cards)
                    .set({ sortOrder: order.sortOrder })
                    .where(eq(cards.id, order.id))
            )
        )
        revalidatePath('/')
        revalidatePath('/admin/dashboard')
    } catch (e) {
        console.error("Failed to update projects order", e)
        throw e
    }
}
