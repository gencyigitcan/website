'use server'

import { db } from '@/lib/db'
import { admins } from '@/db/schema'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'
import { revalidatePath } from 'next/cache'

export async function createAdmin(prevState: any, formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
        return { message: 'Email and password are required' }
    }

    try {
        const existing = await db.select().from(admins).where(eq(admins.email, email)).get()
        if (existing) {
            return { message: 'Admin with this email already exists' }
        }

        const passwordHash = await bcrypt.hash(password, 10)

        await db.insert(admins).values({
            email,
            passwordHash,
        })

        revalidatePath('/admin/dashboard/admins')
        return { message: 'Admin created successfully', success: true }
    } catch (e) {
        console.error('Create admin error:', e)
        return { message: 'Failed to create admin' }
    }
}

export async function deleteAdmin(id: string) {
    try {
        // Prevent deleting the last admin or "super admin" if needed but simplified here
        const allAdmins = await db.select().from(admins).all()
        if (allAdmins.length <= 1) {
            // In server actions, returning simple values is better, but this is a void/redirect usually.
            // But for a button action we might want feedback. For now simple toggle/delete.
            // We can't return to the form state easily from a bind action unless we use useFormState there too.
            // Let's just log and ignore for now or assume risk.
            return { message: 'Cannot delete the last admin' }
        }

        await db.delete(admins).where(eq(admins.id, id))
        revalidatePath('/admin/dashboard/admins')
        return { success: true }
    } catch (e) {
        console.error('Delete admin error:', e)
        return { message: 'Failed to delete admin' }
    }
}
