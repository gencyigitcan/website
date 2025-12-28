'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { Plus } from 'lucide-react'
import { createAdmin } from '@/app/actions/admin-management'
import { useEffect, useRef } from 'react'

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 font-bold text-white shadow-lg hover:shadow-pink-500/30 hover:-translate-y-1 transition-all disabled:opacity-50"
        >
            <Plus size={20} />
            {pending ? 'Creating...' : 'Create Admin'}
        </button>
    )
}

export default function CreateAdminForm() {
    const [state, action] = useFormState(createAdmin, null)
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (state?.success) {
            formRef.current?.reset()
        }
    }, [state?.success])

    return (
        <form ref={formRef} action={action} className="glass-panel p-6 rounded-2xl space-y-4 mb-8">
            <h3 className="text-lg font-bold text-fg-primary mb-4">Add New Admin</h3>

            {state?.message && (
                <div className={`text-sm p-3 rounded-xl border ${state.success ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                    {state.message}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-fg-muted mb-2">Email</label>
                    <input
                        name="email"
                        type="email"
                        required
                        className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all placeholder:opacity-20"
                        placeholder="admin@example.com"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-fg-muted mb-2">Password</label>
                    <input
                        name="password"
                        type="password"
                        required
                        className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 transition-all placeholder:opacity-20"
                        placeholder="••••••••"
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <SubmitButton />
            </div>
        </form>
    )
}
