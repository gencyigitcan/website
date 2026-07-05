'use client'

import { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import LucideIcon from '@/components/LucideIcon'
import { useTheme } from '@/context/ThemeContext'
import clsx from 'clsx'

interface CardProps {
    title: string
    description: string
    url: string
    imageUrl?: string | null
    isContact?: boolean
    isRestricted?: boolean
    iconName?: string | null
}

export default function Card({ title, description, url, imageUrl, isContact, isRestricted, iconName }: CardProps) {
    const { theme } = useTheme()
    const [lang, setLang] = useState<'tr' | 'en'>('en')
    const [imgError, setImgError] = useState(false)

    useEffect(() => {
        const browserLang = navigator.language.split('-')[0];
        setLang(browserLang === 'tr' ? 'tr' : 'en');
    }, []);

    const translations = {
        tr: {
            contact: 'İletişime Geç',
            private: 'ÖZEL PROJE',
            live: 'YAYINDA'
        },
        en: {
            contact: 'Contact Me',
            private: 'PRIVATE',
            live: 'LIVE PROJECT'
        }
    };

    const t = translations[lang];

    const PALETTES = [
        { light: '#5A4A9E', dark: '#251E42' }, // IntelliGenç (Purple)
        { light: '#2F7C63', dark: '#12332B' }, // Paramio (Emerald)
        { light: '#2C3E63', dark: '#141C30' }, // Data Shield (Navy)
        { light: '#8A5A2C', dark: '#2E2013' }, // Kanban (Earth)
        { light: '#8A3457', dark: '#2E1420' }, // Seanso (Burgundy)
        { light: '#2C4A8A', dark: '#141D33' }, // Waitlist (Cobalt)
        { light: '#7C3E7A', dark: '#2A132A' }, // Fitflow (Magenta)
        { light: '#4E7C3A', dark: '#1C2E12' }, // Year (Olive)
        { light: '#1E7C72', dark: '#0F332E' }, // Pulse (Teal)
        { light: '#5A3E8A', dark: '#201433' }, // Chapter (Amethyst)
        { light: '#A17A2E', dark: '#33260F' }  // Retro UI (Bronze)
    ];

    const getProjectColors = (projTitle: string) => {
        const lower = projTitle.toLowerCase();
        if (lower.includes('intelligenç') || lower.includes('intelligenc')) return { light: '#5A4A9E', dark: '#251E42' };
        if (lower.includes('paramio')) return { light: '#2F7C63', dark: '#12332B' };
        if (lower.includes('data shield') || lower.includes('datashield')) return { light: '#2C3E63', dark: '#141C30' };
        if (lower.includes('kanban')) return { light: '#8A5A2C', dark: '#2E2013' };
        if (lower.includes('seanso')) return { light: '#8A3457', dark: '#2E1420' };
        if (lower.includes('waitlist')) return { light: '#2C4A8A', dark: '#141D33' };
        if (lower.includes('fitflow')) return { light: '#7C3E7A', dark: '#2A132A' };
        if (lower.includes('year')) return { light: '#4E7C3A', dark: '#1C2E12' };
        if (lower.includes('pulse')) return { light: '#1E7C72', dark: '#0F332E' };
        if (lower.includes('chapter')) return { light: '#5A3E8A', dark: '#201433' };
        if (lower.includes('retro ui') || lower.includes('retroui')) return { light: '#A17A2E', dark: '#33260F' };

        // Deterministic fallback based on title hash
        const hashVal = projTitle.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return PALETTES[hashVal % PALETTES.length];
    };

    const colors = getProjectColors(title);
    const backgroundStyle = {
        background: `
            radial-gradient(circle at 20% 20%, ${colors.light} 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, ${colors.light} 0%, transparent 60%),
            radial-gradient(circle at 50% 80%, ${colors.light} 0%, transparent 70%),
            ${colors.dark}
        `
    };

    const initials = title.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    const getProjectIcon = () => {
        const name = iconName || 'Sparkles';
        return (
            <div className="flex items-center justify-center z-10 text-white/95">
                <LucideIcon name={name} size={48} className="drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
            </div>
        );
    };

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
            <div 
                style={(!imageUrl || imgError) ? backgroundStyle : undefined}
                className={`relative overflow-hidden rounded-xl mb-4 h-32 flex items-center justify-center shadow-lg group-hover:scale-[1.03] transition-transform duration-500 ${(!imageUrl || imgError) ? '' : 'bg-gray-100 dark:bg-white/5'}`}
            >
                {(imageUrl && !imgError) ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <>
                        {getProjectIcon()}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    </>
                )}
            </div>

            <div className="flex flex-col gap-3 flex-1">
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg tracking-wide text-fg-primary group-hover:text-[#DFB574] transition-colors">{title}</h3>
                    <ExternalLink size={16} className="text-fg-muted group-hover:text-[#DFB574] transition-colors mt-1" />
                </div>

                <p className="font-sans text-sm leading-relaxed line-clamp-3 text-fg-secondary">
                    {description}
                </p>

                <div className="mt-auto pt-4 flex items-center gap-2 border-t border-dashed" style={{ borderColor: 'var(--card-border)' }}>
                    <div className={clsx(
                        "h-1.5 w-1.5 rounded-full",
                        isContact ? "bg-[#DFB574] shadow-[0_0_8px_rgba(223,181,116,0.6)]" : 
                        isRestricted ? "bg-white/20" : "bg-[#8A9A76] shadow-[0_0_8px_rgba(138,154,118,0.6)]"
                    )}></div>
                    <span className="text-xs text-fg-muted font-medium tracking-wide uppercase">
                        {isContact ? t.contact : isRestricted ? t.private : t.live}
                    </span>
                </div>
            </div>
        </a>
    )
}

