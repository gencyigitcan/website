'use server'

import { db } from '@/lib/db'
import { siteSettings } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

export async function updateSettings(formData: FormData) {
    const heroTitle = formData.get('heroTitle') as string
    const heroDescription = formData.get('heroDescription') as string
    const contactEmail = formData.get('contactEmail') as string

    try {
        // Upsert logic basically, but we know id='default' exists from seed.
        await db.update(siteSettings).set({
            heroTitle,
            heroDescription,
            contactEmail,
            updatedAt: new Date()
        }).where(eq(siteSettings.id, 'default'))
    } catch (e) {
        return { message: 'Failed to update settings' }
    }

    revalidatePath('/')
    revalidatePath('/admin/dashboard/settings')
}
