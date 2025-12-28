'use server'

import { db } from '@/lib/db'
import { admins } from '@/db/schema'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(prevState: any, formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email || !password) {
        return { message: 'Email and password required' }
    }

    try {
        const user = await db.select().from(admins).where(eq(admins.email, email)).get()

        if (!user) {
            return { message: 'Invalid credentials' }
        }

        const valid = await bcrypt.compare(password, user.passwordHash)

        if (!valid) {
            return { message: 'Invalid credentials' }
        }

        // Set session cookie
        (await cookies()).set('admin_session', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 // 1 day
        })

    } catch (e) {
        console.error(e)
        return { message: 'Internal server error' }
    }

    redirect('/admin/dashboard')
}

export async function logout() {
    (await cookies()).delete('admin_session')
    redirect('/admin')
}
