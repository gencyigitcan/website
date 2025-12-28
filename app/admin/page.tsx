'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { Lock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { login } from '@/app/actions/auth'

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 font-bold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1 active:translate-y-0 transition-all disabled:opacity-50 disabled:pointer-events-none"
        >
            {pending ? 'Authenticating...' : 'Access Safe'}
        </button>
    )
}

export default function AdminLogin() {
    const [state, action] = useFormState(login, null)

    return (
        <main className="min-h-screen flex flex-col items-center justify-center relative p-6">
            <Navbar />

            <div className="glass-panel w-full max-w-md p-8 rounded-3xl animate-float">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg transform rotate-3">
                        <Lock className="text-white" size={32} />
                    </div>
                    <h1 className="font-serif text-3xl font-bold mb-2 text-fg-primary">Admin Portal</h1>
                    <p className="text-sm opacity-60 text-fg-secondary">Security Clearance Required</p>
                </div>

                <form action={action} className="space-y-5">
                    {state?.message && (
                        <div className="text-red-500 text-sm text-center bg-red-500/10 p-2 rounded-lg border border-red-500/20">
                            {state.message}
                        </div>
                    )}
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2 ml-1 text-fg-muted">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 text-fg-primary"
                            placeholder="user@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase tracking-widest opacity-50 mb-2 ml-1 text-fg-muted">Passkey</label>
                        <input
                            name="password"
                            type="password"
                            className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all placeholder:opacity-20 text-fg-primary"
                            placeholder="••••••••"
                        />
                    </div>

                    <SubmitButton />
                </form>
            </div>
        </main>
    )
}
