'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

interface LucideIconProps {
    name: string
    size?: number
    className?: string
}

export default function LucideIcon({ name, size = 24, className }: LucideIconProps) {
    // Convert CamelCase or space-separated names to kebab-case (e.g., BookOpen or Book Open -> book-open)
    const formattedName = name
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase() as keyof typeof dynamicIconImports

    // Check if the icon exists in Lucide dynamic imports
    if (!(formattedName in dynamicIconImports)) {
        const SparklesIcon = dynamic(dynamicIconImports['sparkles'], { ssr: false })
        return <SparklesIcon size={size} className={className} />
    }

    const IconComponent = dynamic(dynamicIconImports[formattedName], {
        ssr: false,
        loading: () => (
            <div 
                style={{ width: size, height: size }} 
                className="animate-pulse bg-white/10 rounded-full shrink-0" 
            />
        )
    })

    return <IconComponent size={size} className={className} />
}
