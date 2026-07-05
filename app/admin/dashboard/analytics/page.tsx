import { headers } from 'next/headers'
import { getAnalyticsData } from '@/app/actions/analytics'
import { BarChart3, Users, Globe, ArrowDownRight, Compass, Eye } from 'lucide-react'

export default async function AnalyticsPage() {
    const data = await getAnalyticsData()
    const headerList = await headers()
    const acceptLanguage = headerList.get('accept-language') || 'en'
    const isTurkish = acceptLanguage.startsWith('tr')

    const t = isTurkish ? {
        title: 'Analitik',
        subtitle: 'Uygulamalarınızın tıklanma ve ziyaretçi istatistikleri.',
        totalClicks: 'Proje Tıklamaları',
        totalVisits: 'Siteye Giriş',
        uniqueVisitors: 'Tekil Ziyaretçi',
        topProjects: 'En Çok Tıklananlar',
        topCountries: 'Ülke Dağılımı',
        latestLogs: 'Son 100 Giriş & Tıklama Kaydı',
        project: 'İçerik / Proje',
        ip: 'IP Adresi',
        country: 'Ülke',
        referrer: 'Referans (Referrer)',
        date: 'Zaman',
        noData: 'Henüz veri yok',
        direct: 'Doğrudan Giriş',
        homepageLabel: 'Ana Sayfa Ziyareti'
    } : {
        title: 'Analytics',
        subtitle: 'Click and visitor metrics for your applications.',
        totalClicks: 'Project Clicks',
        totalVisits: 'Site Visits',
        uniqueVisitors: 'Unique Visitors',
        topProjects: 'Top Clicked Projects',
        topCountries: 'Clicks by Country',
        latestLogs: 'Recent 100 Access Logs',
        project: 'Content / Project',
        ip: 'IP Address',
        country: 'Country',
        referrer: 'Referrer',
        date: 'Date & Time',
        noData: 'No data recorded yet',
        direct: 'Direct Visit',
        homepageLabel: 'Homepage Visit'
    }

    // Find the maximum click value to scale the progress bars
    const maxClicks = data.topProjects.length > 0 
        ? Math.max(...data.topProjects.map(p => p.clicks)) 
        : 1

    return (
        <div className="space-y-8">
            {/* Header */}
            <header>
                <h1 className="text-3xl font-serif font-bold text-fg-primary mb-2 flex items-center gap-3">
                    <BarChart3 size={32} className="text-blue-500" />
                    {t.title}
                </h1>
                <p className="text-fg-secondary">{t.subtitle}</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Total Visits */}
                <div className="glass-panel p-6 rounded-3xl flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-fg-muted mb-1">{t.totalVisits}</p>
                        <h3 className="text-4xl font-serif font-bold text-fg-primary">{data.totalVisits}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <Eye size={24} />
                    </div>
                </div>

                {/* Total Clicks */}
                <div className="glass-panel p-6 rounded-3xl flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-fg-muted mb-1">{t.totalClicks}</p>
                        <h3 className="text-4xl font-serif font-bold text-fg-primary">{data.totalClicks}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                        <ArrowDownRight size={24} />
                    </div>
                </div>

                {/* Unique Visitors */}
                <div className="glass-panel p-6 rounded-3xl flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-wider text-fg-muted mb-1">{t.uniqueVisitors}</p>
                        <h3 className="text-4xl font-serif font-bold text-fg-primary">{data.uniqueVisitors}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                        <Users size={24} />
                    </div>
                </div>
            </div>

            {/* Middle Section: Top Projects & Top Countries */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Top Clicked Projects */}
                <div className="glass-panel p-6 rounded-3xl space-y-6">
                    <h3 className="text-lg font-bold text-fg-primary border-b border-white/5 pb-3">{t.topProjects}</h3>
                    {data.topProjects.length === 0 ? (
                        <p className="text-sm text-fg-muted">{t.noData}</p>
                    ) : (
                        <div className="space-y-4">
                            {data.topProjects.map((project) => {
                                const percentage = (project.clicks / maxClicks) * 100
                                return (
                                    <div key={project.id} className="space-y-1">
                                        <div className="flex justify-between text-sm">
                                            <span className="font-bold text-fg-primary">{project.title}</span>
                                            <span className="text-fg-secondary font-medium">{project.clicks}</span>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                                            <div 
                                                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500" 
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>

                {/* Clicks by Country */}
                <div className="glass-panel p-6 rounded-3xl space-y-6">
                    <h3 className="text-lg font-bold text-fg-primary border-b border-white/5 pb-3">{t.topCountries}</h3>
                    {data.topCountries.length === 0 ? (
                        <p className="text-sm text-fg-muted">{t.noData}</p>
                    ) : (
                        <div className="divide-y divide-white/5">
                            {data.topCountries.map((countryItem, idx) => (
                                <div key={idx} className="flex justify-between items-center py-2.5">
                                    <div className="flex items-center gap-3">
                                        <Globe size={16} className="text-fg-muted" />
                                        <span className="font-bold text-fg-primary">{countryItem.country}</span>
                                    </div>
                                    <span className="px-3 py-1 rounded-lg bg-white/5 text-fg-secondary text-sm font-semibold">
                                        {countryItem.clicks}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Section: Click Logs */}
            <div className="glass-panel p-6 rounded-3xl space-y-6">
                <h3 className="text-lg font-bold text-fg-primary border-b border-white/5 pb-3">{t.latestLogs}</h3>
                {data.latestLogs.length === 0 ? (
                    <p className="text-sm text-fg-muted">{t.noData}</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="border-b border-white/5 text-xs font-bold uppercase tracking-wider text-fg-muted">
                                    <th className="pb-3 pr-4">{t.date}</th>
                                    <th className="pb-3 px-4">{t.project}</th>
                                    <th className="pb-3 px-4">{t.ip}</th>
                                    <th className="pb-3 px-4">{t.country}</th>
                                    <th className="pb-3 pl-4">{t.referrer}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-sm">
                                {data.latestLogs.map((log) => {
                                    const dateStr = log.createdAt 
                                        ? new Date(log.createdAt).toLocaleString(isTurkish ? 'tr-TR' : 'en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit'
                                          }) 
                                        : '—'
                                    
                                    const displayReferrer = log.referrer === 'Direct' ? t.direct : log.referrer

                                    return (
                                        <tr key={log.id} className="text-fg-secondary hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3.5 pr-4 whitespace-nowrap text-xs text-fg-muted">{dateStr}</td>
                                            <td className="py-3.5 px-4 font-bold text-fg-primary">
                                                {log.cardId === null ? (
                                                    <span className="text-indigo-400 font-medium flex items-center gap-1.5">
                                                        <Eye size={14} className="shrink-0" />
                                                        {t.homepageLabel}
                                                    </span>
                                                ) : (
                                                    <span>{log.projectTitle || 'Deleted Project'}</span>
                                                )}
                                            </td>
                                            <td className="py-3.5 px-4 font-mono text-xs">{log.ipAddress}</td>
                                            <td className="py-3.5 px-4">
                                                <span className="px-2 py-0.5 rounded bg-white/5 text-xs font-semibold tracking-wide uppercase border border-white/5">
                                                    {log.country}
                                                </span>
                                            </td>
                                            <td className="py-3.5 pl-4 max-w-xs truncate text-xs text-fg-muted" title={log.referrer || ''}>
                                                <div className="flex items-center gap-1.5">
                                                    <Compass size={12} className="shrink-0" />
                                                    <span className="truncate">{displayReferrer}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
