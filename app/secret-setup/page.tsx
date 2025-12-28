import { db } from '@/lib/db'
import { admins } from '@/db/schema'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'

export default function SecretSetupPage() {
    async function setup(formData: FormData) {
        'use server'
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        if (!email || !password) return

        try {
            // Delete existing admin with this email to ensure clean state
            await db.delete(admins).where(eq(admins.email, email))

            const passwordHash = await bcrypt.hash(password, 10)

            await db.insert(admins).values({
                email,
                passwordHash
            })

            console.log("Admin created successfully")
        } catch (e) {
            console.error("Setup failed", e)
            return
        }

        redirect('/admin')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <form action={setup} className="p-8 flex flex-col gap-4 max-w-md w-full border border-white/20 rounded-xl">
                <h1 className="text-xl font-bold mb-4">Secret Admin Setup</h1>

                <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input
                        name="email"
                        placeholder="Email"
                        defaultValue="yigitcangenc@gmail.com"
                        className="bg-zinc-900 border border-zinc-700 p-3 rounded text-white"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label>Password</label>
                    <input
                        name="password"
                        type="text"
                        placeholder="Password"
                        defaultValue="Biltim2025"
                        className="bg-zinc-900 border border-zinc-700 p-3 rounded text-white"
                    />
                </div>

                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded mt-4 transition-colors">
                    Force Create Admin
                </button>
            </form>
        </div>
    )
}
