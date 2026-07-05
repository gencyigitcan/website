'use client'

import { useState, useEffect } from 'react'
import { GripVertical, Edit2, Trash2, Power, Lock } from 'lucide-react'
import Link from 'next/link'
import { updateProjectsOrder, deleteProject, toggleProject } from '@/app/actions/projects'

interface Project {
    id: string
    title: string
    description: string
    subdomainUrl: string
    imageUrl: string | null
    isActive: boolean | null
    isComingSoon: boolean | null
    comingSoonText: string | null
    slug: string | null
    sortOrder: number | null
    createdAt: string | null
    updatedAt: string | null
}

interface DragDropProjectListProps {
    initialProjects: Project[]
    t: {
        active: string
        draft: string
        restricted: string
        deactivate: string
        activate: string
        edit: string
        delete: string
        orderLabel: string
    }
}

export default function DragDropProjectList({ initialProjects, t }: DragDropProjectListProps) {
    const [projects, setProjects] = useState<Project[]>(initialProjects)
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
    const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)

    // Sync state when props change (e.g., after server actions revalidate data)
    useEffect(() => {
        setProjects(initialProjects)
    }, [initialProjects])

    const handleDragStart = (e: React.DragEvent, index: number) => {
        setDraggedIndex(index)
        e.dataTransfer.effectAllowed = 'move'
    }

    const handleDragOver = (e: React.DragEvent, index: number) => {
        e.preventDefault()
        if (draggedIndex === null || draggedIndex === index) return
        setDragOverIndex(index)
    }

    const handleDragEnd = () => {
        setDraggedIndex(null)
        setDragOverIndex(null)
    }

    const handleDrop = async (e: React.DragEvent, targetIndex: number) => {
        e.preventDefault()
        if (draggedIndex === null || draggedIndex === targetIndex) return

        const reorderedProjects = [...projects]
        const [removed] = reorderedProjects.splice(draggedIndex, 1)
        reorderedProjects.splice(targetIndex, 0, removed)

        // Optimistically update list state locally
        setProjects(reorderedProjects)
        setDraggedIndex(null)
        setDragOverIndex(null)

        // Generate new sort orders where first is highest and last is lowest
        const updatedOrders = reorderedProjects.map((p, idx) => ({
            id: p.id,
            sortOrder: reorderedProjects.length - idx
        }))

        try {
            await updateProjectsOrder(updatedOrders)
        } catch (error) {
            console.error("Failed to update projects order:", error)
            // Revert state on error
            setProjects(initialProjects)
        }
    }

    return (
        <div className="grid grid-cols-1 gap-4">
            {projects.map((project, index) => {
                const isDragging = index === draggedIndex
                const isDragOver = index === dragOverIndex

                return (
                    <div
                        key={project.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={(e) => handleDragOver(e, index)}
                        onDragEnd={handleDragEnd}
                        onDrop={(e) => handleDrop(e, index)}
                        className={`glass-panel p-6 rounded-2xl flex items-center gap-6 group transition-all duration-200 ${
                            isDragging ? 'opacity-30 border-dashed border-indigo-500/50 scale-95' : ''
                        } ${
                            isDragOver ? 'border-2 border-indigo-500 bg-indigo-500/10 -translate-y-1' : ''
                        }`}
                    >
                        {/* Drag Handle */}
                        <div className="cursor-grab active:cursor-grabbing text-fg-muted hover:text-fg-primary p-1 rounded hover:bg-white/5 transition-all shrink-0">
                            <GripVertical size={20} />
                        </div>

                        {/* Logo / Letter */}
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 flex items-center justify-center border border-white/10 shrink-0">
                            <span className="font-serif text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
                                {project.title.substring(0, 2).toUpperCase()}
                            </span>
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-1">
                                <h3 className="text-lg font-bold text-fg-primary truncate">{project.title}</h3>
                                <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium uppercase tracking-wide">
                                    {t.orderLabel}: {project.sortOrder ?? 0}
                                </span>
                                {project.isActive ? (
                                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium uppercase tracking-wide">
                                        {t.active}
                                    </span>
                                ) : (
                                    <span className="px-2 py-0.5 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-500 text-xs font-medium uppercase tracking-wide">
                                        {t.draft}
                                    </span>
                                )}
                                {project.isComingSoon && (
                                    <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-medium uppercase tracking-wide flex items-center gap-1">
                                        <Lock size={10} />
                                        {t.restricted}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-fg-secondary truncate">{project.subdomainUrl}</p>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                            <form action={toggleProject.bind(null, project.id, !project.isActive)}>
                                <button type="submit" title={project.isActive ? t.deactivate : t.activate} className="p-2 rounded-lg hover:bg-white/10 text-fg-muted hover:text-fg-primary transition-colors">
                                    <Power size={18} className={project.isActive ? "text-emerald-400" : "text-slate-400"} />
                                </button>
                            </form>

                            <Link href={`/admin/dashboard/edit/${project.id}`} title={t.edit} className="p-2 rounded-lg hover:bg-white/10 text-fg-muted hover:text-indigo-400 transition-colors">
                                <Edit2 size={18} />
                            </Link>

                            <form action={deleteProject.bind(null, project.id)}>
                                <button type="submit" title={t.delete} className="p-2 rounded-lg hover:bg-red-500/10 text-fg-muted hover:text-red-400 transition-colors">
                                    <Trash2 size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
