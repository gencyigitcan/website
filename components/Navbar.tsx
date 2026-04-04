import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'
import { Lock, Linkedin, Github } from 'lucide-react'

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 nav-glass">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-sm shadow-lg group-hover:scale-110 transition-transform text-white font-bold">
                        YG
                    </div>
                    <span className="font-serif text-xl tracking-wide group-hover:opacity-80 transition-opacity text-fg-primary">
                        Yiğitcan Genç
                    </span>
                </Link>

                <div className="flex items-center gap-2 md:gap-4">
                    <a
                        href="https://www.linkedin.com/in/gencyigitcan1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all text-fg-muted hover:text-[#0077b5] dark:hover:text-[#0077b5] hover:scale-110 active:scale-95"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                    </a>

                    <a
                        href="https://github.com/gencyigitcan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all text-fg-muted hover:text-black dark:hover:text-white hover:scale-110 active:scale-95"
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </a>

                    <span className="w-px h-4 bg-black/10 dark:bg-white/10 mx-1 hidden md:block"></span>

                    <ThemeSwitcher />

                    <Link
                        href="/admin"
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all text-fg-muted hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 active:scale-95"
                        aria-label="Admin Login"
                    >
                        <Lock size={18} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
