'use client'

import { useState, useTransition } from 'react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import LucideIcon from './LucideIcon'
import { Search } from 'lucide-react'

interface IconPickerProps {
    defaultIcon?: string
    label: string
}

// 28 popular icons to show when search is empty
const popularIcons = [
    'sparkles', 'brain', 'calendar', 'code', 'terminal', 'laptop', 'smartphone', 
    'rocket', 'globe', 'heart', 'star', 'coffee', 'camera', 'music', 'gamepad', 
    'book-open', 'layers', 'palette', 'shield', 'award', 'activity', 'briefcase', 
    'wrench', 'database', 'cloud', 'cpu', 'lock', 'unlocked'
]

export default function IconPicker({ defaultIcon = 'Sparkles', label }: IconPickerProps) {
    // Keep internal key in kebab-case
    const initialSelected = defaultIcon
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase()

    const [selected, setSelected] = useState(initialSelected)
    const [searchQuery, setSearchQuery] = useState('')
    const [isPending, startTransition] = useTransition()

    const allIconNames = Object.keys(dynamicIconImports)

    // Filter icon names based on search query
    const filteredIcons = searchQuery.trim() === ''
        ? popularIcons
        : allIconNames.filter(name => name.includes(searchQuery.toLowerCase()))

    // Limit displayed icons to prevent lag (e.g., maximum 35)
    const displayedIcons = filteredIcons.slice(0, 35)

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        // Use transition to keep input typed values responsive
        startTransition(() => {
            setSearchQuery(val)
        })
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <label className="block text-sm font-bold uppercase tracking-wide text-fg-muted">
                    {label}
                </label>
                {selected && (
                    <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-semibold bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                        <LucideIcon name={selected} size={14} />
                        <span className="capitalize">{selected.replace(/-/g, ' ')}</span>
                    </div>
                )}
            </div>
            
            {/* Hidden Input for Form Submission */}
            <input type="hidden" name="iconName" value={selected} />

            {/* Search Input Box */}
            <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-fg-muted pointer-events-none" />
                <input
                    type="text"
                    onChange={handleSearchChange}
                    placeholder="Search 1,400+ icons (e.g., rocket, key, database)..."
                    className="w-full input-glass rounded-xl pl-11 pr-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-30 bg-[var(--input-bg)] text-sm"
                />
            </div>

            {/* Results Grid */}
            <div className="space-y-2">
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 max-h-[300px] overflow-y-auto">
                    {displayedIcons.map(name => {
                        const isSelected = selected === name

                        return (
                            <button
                                key={name}
                                type="button"
                                onClick={() => setSelected(name)}
                                title={name}
                                className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                                    isSelected 
                                        ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.2)] scale-[1.05] z-10'
                                        : 'border-white/5 hover:border-white/20 hover:bg-white/5 text-fg-secondary hover:text-fg-primary'
                                }`}
                            >
                                <LucideIcon name={name} size={24} />
                                <span className="text-[9px] mt-1.5 truncate max-w-full leading-tight font-medium opacity-60 capitalize">
                                    {name.replace(/-/g, ' ')}
                                </span>
                            </button>
                        )
                    })}

                    {displayedIcons.length === 0 && (
                        <div className="col-span-full py-8 text-center text-sm text-fg-muted">
                            No icons found for &quot;{searchQuery}&quot;
                        </div>
                    )}
                </div>

                {searchQuery.trim() !== '' && filteredIcons.length > 35 && (
                    <p className="text-[11px] text-fg-muted text-right italic">
                        Showing 35 of {filteredIcons.length} matches. Refine your search to see more.
                    </p>
                )}
            </div>
        </div>
    )
}
