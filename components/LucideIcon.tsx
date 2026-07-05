import React from 'react'
import { 
    Sparkles, Brain, Calendar, Code, Terminal, Laptop, 
    Smartphone, Rocket, Globe, Heart, Star, Coffee, 
    Camera, Music, Gamepad, BookOpen, Layers, Palette, 
    Shield, Award, Activity 
} from 'lucide-react'

export const iconMap: Record<string, React.ComponentType<any>> = {
    Sparkles,
    Brain,
    Calendar,
    Code,
    Terminal,
    Laptop,
    Smartphone,
    Rocket,
    Globe,
    Heart,
    Star,
    Coffee,
    Camera,
    Music,
    Gamepad,
    BookOpen,
    Layers,
    Palette,
    Shield,
    Award,
    Activity
}

interface LucideIconProps {
    name: string
    size?: number
    className?: string
}

export default function LucideIcon({ name, size = 24, className }: LucideIconProps) {
    const IconComponent = iconMap[name] || Sparkles
    return <IconComponent size={size} className={className} />
}
