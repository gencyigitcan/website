'use client'

import { useTheme } from '@/context/ThemeContext'
import { Moon, Sun, Monitor } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    // Default to 'dark' logic if theme is undefined or not light
    const isLight = theme === 'light'

    return (
        <button
            onClick={() => setTheme(isLight ? 'dark' : 'light')}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/40 transition-colors backdrop-blur-sm border border-white/5"
            aria-label="Toggle Theme"
        >
            {isLight ? (
                <Sun size={20} className="text-amber-500" />
            ) : (
                <Moon size={20} className="text-indigo-300" />
            )}
        </button>
    )
}
