import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { analytics } from '@/db/schema'

export async function POST(request: NextRequest) {
    try {
        const headersList = request.headers
        const ipAddress = headersList.get('cf-connecting-ip') || 
                           headersList.get('x-real-ip') || 
                           headersList.get('x-forwarded-for')?.split(',')[0].trim() || 
                           'Unknown'
        const country = headersList.get('cf-ipcountry') || 'Unknown'
        const referrer = headersList.get('referer') || 'Direct'
        const userAgent = headersList.get('user-agent') || 'Unknown'

        // Insert analytics record with a null cardId to signify a homepage view
        await db.insert(analytics).values({
            cardId: null,
            ipAddress,
            country,
            referrer,
            userAgent
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Page view tracking failed:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}
