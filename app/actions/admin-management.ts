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
        // Prevent deleting the last admin
        const allAdmins = await db.select().from(admins).all()
        if (allAdmins.length <= 1) {
            console.log('Cannot delete the last admin')
            return
        }

        await db.delete(admins).where(eq(admins.id, id))
        revalidatePath('/admin/dashboard/admins')
    } catch (e) {
        console.error('Delete admin error:', e)
    }
}
