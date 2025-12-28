'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { updatePassword } from '@/app/actions/profile'
import { Save } from 'lucide-react'

function PasswordSubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 font-bold text-fg-primary transition-all disabled:opacity-50"
        >
            {pending ? 'Updating...' : 'Change Password'}
        </button>
    )
}

export default function PasswordForm() {
    const [state, action] = useFormState(updatePassword, null)

    return (
        <form action={action} className="glass-panel p-8 rounded-3xl space-y-6 border-l-4 border-l-indigo-500">
            {state?.message && (
                <div className={`text-sm text-center p-2 rounded-lg border ${state.success ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-red-500/10 border-red-500/20 text-red-500'}`}>
                    {state.message}
                </div>
            )}

            <div>
                <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">Current Password</label>
                <input
                    name="currentPassword"
                    type="password"
                    required
                    className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)]"
                    placeholder="••••••••"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">New Password</label>
                    <input
                        name="newPassword"
                        type="password"
                        required
                        className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)]"
                        placeholder="••••••••"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2">Confirm New Password</label>
                    <input
                        name="confirmPassword"
                        type="password"
                        required
                        className="w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)]"
                        placeholder="••••••••"
                    />
                </div>
            </div>

            <div className="pt-2 flex justify-end">
                <PasswordSubmitButton />
            </div>
        </form>
    )
}
