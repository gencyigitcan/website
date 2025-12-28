'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Globe, LogOut, Settings, Users } from 'lucide-react'
import { logout } from '@/app/actions/auth'

export default function AdminSidebar() {
    const pathname = usePathname()

    const isActive = (path: string) => pathname === path

    return (
        <aside className="w-64 border-r border-white/5 bg-black/5 backdrop-blur-xl flex flex-col fixed h-full z-10 hidden md:flex">
            <div className="p-6 border-b border-white/5">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-sm font-bold text-white shadow-lg">
                        YG
                    </div>
                    <span className="font-serif text-lg tracking-wide text-fg-primary">Admin<span className="text-pink-500">Panel</span></span>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                <Link
                    href="/admin/dashboard"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive('/admin/dashboard')
                            ? 'bg-white/10 text-fg-primary font-medium border border-white/5 shadow-sm'
                            : 'hover:bg-white/5 text-fg-secondary hover:text-fg-primary'
                        }`}
                >
                    <LayoutDashboard size={18} className={isActive('/admin/dashboard') ? "text-indigo-400" : ""} />
                    Projects
                </Link>

                <Link
                    href="/admin/dashboard/admins"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive('/admin/dashboard/admins')
                            ? 'bg-white/10 text-fg-primary font-medium border border-white/5 shadow-sm'
                            : 'hover:bg-white/5 text-fg-secondary hover:text-fg-primary'
                        }`}
                >
                    <Users size={18} className={isActive('/admin/dashboard/admins') ? "text-pink-400" : ""} />
                    Admins
                </Link>

                <Link
                    href="/admin/dashboard/settings"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive('/admin/dashboard/settings')
                            ? 'bg-white/10 text-fg-primary font-medium border border-white/5 shadow-sm'
                            : 'hover:bg-white/5 text-fg-secondary hover:text-fg-primary'
                        }`}
                >
                    <Settings size={18} className={isActive('/admin/dashboard/settings') ? "text-emerald-400" : ""} />
                    Site Settings
                </Link>

                <div className="my-4 border-t border-white/5" />

                <a href="/" target="_blank" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-fg-secondary hover:text-fg-primary transition-all">
                    <Globe size={18} />
                    View Site
                </a>
            </nav>

            <div className="p-4 border-t border-white/5">
                <button
                    onClick={() => logout()}
                    className="w-full flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-red-500/10 text-red-400 hover:text-red-300 transition-all text-sm font-medium"
                >
                    <LogOut size={16} />
                    Sign Out
                </button>
            </div>
        </aside>
    )
}
