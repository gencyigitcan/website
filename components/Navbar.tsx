import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'
import { Lock } from 'lucide-react'

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 nav-glass">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm shadow-lg group-hover:scale-110 transition-transform text-white font-bold">
                        YG
                    </div>
                    <span className="font-serif text-xl tracking-wide group-hover:opacity-80 transition-opacity text-fg-primary">
                        Yiğitcan Genç
                    </span>
                </Link>

                <div className="flex items-center gap-4">
                    <ThemeSwitcher />

                    <Link
                        href="/admin"
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-fg-muted hover:text-purple-500 dark:hover:text-purple-400"
                        aria-label="Admin Login"
                    >
                        <Lock size={18} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
