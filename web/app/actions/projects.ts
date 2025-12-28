'use server'

import { db } from '@/lib/db'
import { cards } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createProject(formData: FormData) {
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const subdomainUrl = formData.get('subdomainUrl') as string
    const isActive = formData.get('isActive') === 'on'

    if (!title || !description || !subdomainUrl) {
        return { message: 'Missing fields' }
    }

    try {
        await db.insert(cards).values({
            title,
            description,
            subdomainUrl,
            isActive
        })
    } catch (e) {
        return { message: 'Failed to create project' }
    }

    revalidatePath('/')
    revalidatePath('/admin/dashboard')
    redirect('/admin/dashboard')
}

export async function updateProject(id: string, formData: FormData) {
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const subdomainUrl = formData.get('subdomainUrl') as string
    const isActive = formData.get('isActive') === 'on'

    try {
        await db.update(cards).set({
            title,
            description,
            subdomainUrl,
            isActive,
            updatedAt: new Date()
        }).where(eq(cards.id, id))
    } catch (e) {
        return { message: 'Failed to update project' }
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
