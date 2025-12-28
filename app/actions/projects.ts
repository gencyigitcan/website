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
        // Handle validation error (could throw or just return)
        return
    }

    try {
        await db.insert(cards).values({
            title,
            description,
            subdomainUrl,
            isActive
        })
    } catch (e) {
        console.error('Failed to create project', e)
        // If we fail, we might want to return early or throw, but for simple actions we'll concise it
        return
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
