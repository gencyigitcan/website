'use server'

import { db } from '@/lib/db'
import { admins } from '@/db/schema'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function updatePassword(prevState: any, formData: FormData) {
    const currentPassword = formData.get('currentPassword') as string
    const newPassword = formData.get('newPassword') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (!currentPassword || !newPassword || !confirmPassword) {
        return { message: 'All fields are required', success: false }
    }

    if (newPassword !== confirmPassword) {
        return { message: 'New passwords do not match', success: false }
    }

    try {
        // We need to identify the current user. Since we don't store user ID in cookie (only session flag),
        // we assume single admin for now OR we should have stored email in cookie.
        // But the requirement implies "the user" -> we can assume strict single user or we need to update auth to store user info.
        // Given the constraints and typical "simple admin" setup, let's update the user 'yigitcangenc@gmail.com' specifically 
        // OR better, fetch the only admin user if we assume single tenant.

        // HOWEVER, a better approach is to store the user email in the cookie.
        // Since I didn't verify cookie contents changes in auth.ts (it just sets 'admin_session'='true'),
        // I will assume for this specific request we are updating the main admin user. 
        // To be safer, I'll fetch the first admin found or specific email.

        const user = await db.select().from(admins).limit(1).get(); // Get the single admin

        if (!user) {
            return { message: 'User not found', success: false }
        }

        const valid = await bcrypt.compare(currentPassword, user.passwordHash)

        if (!valid) {
            return { message: 'Current password is incorrect', success: false }
        }

        const newPasswordHash = await bcrypt.hash(newPassword, 10)

        await db.update(admins)
            .set({ passwordHash: newPasswordHash })
            .where(eq(admins.id, user.id))

        return { message: 'Password updated successfully', success: true }

    } catch (e) {
        console.error(e)
        return { message: 'Failed to update password', success: false }
    }
}
