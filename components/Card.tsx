'use client'

import { ExternalLink } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import clsx from 'clsx'

interface CardProps {
    title: string
    description: string
    url: string
    imageUrl?: string | null
    isContact?: boolean
}

export default function Card({ title, description, url, imageUrl, isContact }: CardProps) {
    const { theme } = useTheme()

    const gradients = [
        'from-pink-600 to-rose-600',
        'from-indigo-600 to-blue-600',
        'from-violet-600 to-indigo-600',
        'from-teal-600 to-emerald-600',
        'from-orange-600 to-amber-600'
    ];
    const hash = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const gradient = gradients[hash % gradients.length];

    const initials = title.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    const isInternal = url.startsWith('/');
    let href = url;
    if (!isInternal && !url.match(/^https?:\/\//) && !url.startsWith('mailto:')) {
        href = `https://${url}`;
    }

    const target = isContact || isInternal ? "_self" : "_blank";
    const rel = isContact || isInternal ? "" : "noopener noreferrer";

    return (
        <a
            href={href}
            target={target}
            rel={rel}
            className="glass-panel block rounded-2xl p-4 break-inside-avoid hover:-translate-y-2 transition-transform duration-300 group flex flex-col aspect-square"
        >
            {/* Visual Header */}
            {/* Visual Header */}
            <div className={`relative overflow-hidden rounded-xl mb-4 h-32 flex items-center justify-center shadow-lg group-hover:scale-[1.03] transition-transform duration-500 ${!imageUrl ? `bg-gradient-to-br ${gradient}` : 'bg-gray-100 dark:bg-white/5'}`}>
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <>
                        <span className="font-serif text-4xl text-white/95 font-bold tracking-widest drop-shadow-sm">
                            {initials}
                        </span>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </>
                )}
            </div>

            <div className="flex flex-col gap-3 flex-1">
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg tracking-wide text-fg-primary group-hover:text-pink-500 transition-colors">{title}</h3>
                    <ExternalLink size={16} className="text-fg-muted group-hover:text-fg-primary transition-colors mt-1" />
                </div>

                <p className="font-sans text-sm leading-relaxed line-clamp-3 text-fg-secondary">
                    {description}
                </p>

                <div className="mt-auto pt-4 flex items-center gap-2 border-t border-dashed" style={{ borderColor: 'var(--card-border)' }}>
                    <div className={clsx(
                        "h-1.5 w-1.5 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]",
                        isContact ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" : "bg-emerald-400"
                    )}></div>
                    <span className="text-xs text-fg-muted font-medium tracking-wide uppercase">
                        {isContact ? 'Contact Me' : 'Live Project'}
                    </span>
                </div>
            </div>
        </a>
    )
}
