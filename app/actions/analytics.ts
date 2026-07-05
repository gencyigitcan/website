'use server'

import { db } from '@/lib/db'
import { cards, analytics } from '@/db/schema'
import { eq, desc, sql, isNull, isNotNull } from 'drizzle-orm'

export interface AnalyticsSummary {
    totalClicks: number
    totalVisits: number
    uniqueVisitors: number
    topProjects: {
        id: string
        title: string
        clicks: number
    }[]
    topCountries: {
        country: string
        clicks: number
    }[]
    latestLogs: {
        id: string
        cardId: string | null
        ipAddress: string | null
        country: string | null
        referrer: string | null
        userAgent: string | null
        createdAt: string | null
        projectTitle: string | null
    }[]
}

export async function getAnalyticsData(): Promise<AnalyticsSummary> {
    try {
        // 1. Total click count (where cardId is not null)
        const clicksResult = await db.select({
            count: sql<number>`count(*)`
        }).from(analytics).where(isNotNull(analytics.cardId)).get()
        const totalClicks = clicksResult?.count || 0

        // 1b. Total site visits count (where cardId is null)
        const visitsResult = await db.select({
            count: sql<number>`count(*)`
        }).from(analytics).where(isNull(analytics.cardId)).get()
        const totalVisits = visitsResult?.count || 0

        // 2. Unique visitors by IP (across all page views and clicks)
        const uniqueResult = await db.select({
            count: sql<number>`count(distinct ${analytics.ipAddress})`
        }).from(analytics).get()
        const uniqueVisitors = uniqueResult?.count || 0

        // 3. Clicks by project
        const topProjects = await db.select({
            id: cards.id,
            title: cards.title,
            clicks: sql<number>`count(${analytics.id})`
        })
        .from(analytics)
        .innerJoin(cards, eq(analytics.cardId, cards.id))
        .groupBy(cards.id)
        .orderBy(desc(sql`count(${analytics.id})`))

        // 4. Clicks by country code
        const topCountries = await db.select({
            country: analytics.country,
            clicks: sql<number>`count(${analytics.id})`
        })
        .from(analytics)
        .groupBy(analytics.country)
        .orderBy(desc(sql`count(${analytics.id})`))
        .limit(10)

        // 5. Latest 100 click details (serialize Date object to string)
        const rawLogs = await db.select({
            id: analytics.id,
            cardId: analytics.cardId,
            ipAddress: analytics.ipAddress,
            country: analytics.country,
            referrer: analytics.referrer,
            userAgent: analytics.userAgent,
            createdAt: analytics.createdAt,
            projectTitle: cards.title
        })
        .from(analytics)
        .leftJoin(cards, eq(analytics.cardId, cards.id))
        .orderBy(desc(analytics.createdAt))
        .limit(100)

        const latestLogs = rawLogs.map(log => ({
            ...log,
            createdAt: log.createdAt ? log.createdAt.toISOString() : null
        }))

        return {
            totalClicks,
            totalVisits,
            uniqueVisitors,
            topProjects,
            topCountries: topCountries.map(c => ({
                country: c.country || 'Unknown',
                clicks: c.clicks
            })),
            latestLogs
        }
    } catch (error) {
        console.error("Failed to fetch analytics summary:", error)
        return {
            totalClicks: 0,
            totalVisits: 0,
            uniqueVisitors: 0,
            topProjects: [],
            topCountries: [],
            latestLogs: []
        }
    }
}
