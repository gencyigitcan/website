'use client'

import { useState } from 'react'
import { iconMap } from './LucideIcon'

interface IconPickerProps {
    defaultIcon?: string
    label: string
}

export default function IconPicker({ defaultIcon = 'Sparkles', label }: IconPickerProps) {
    const [selected, setSelected] = useState(defaultIcon)
    const iconNames = Object.keys(iconMap)

    return (
        <div className="space-y-3">
            <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted">
                {label}
            </label>
            
            {/* Hidden Input for Form Submission */}
            <input type="hidden" name="iconName" value={selected} />

            <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                {iconNames.map(name => {
                    const IconComponent = iconMap[name]
                    const isSelected = selected === name

                    return (
                        <button
                            key={name}
                            type="button"
                            onClick={() => setSelected(name)}
                            title={name}
                            className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                                isSelected 
                                    ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.2)] scale-[1.05]'
                                    : 'border-white/5 hover:border-white/20 hover:bg-white/5 text-fg-secondary hover:text-fg-primary'
                            }`}
                        >
                            <IconComponent size={24} />
                            <span className="text-[10px] mt-1.5 truncate max-w-full leading-tight font-medium opacity-65">
                                {name}
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
