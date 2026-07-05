import { NextRequest } from 'next/server'
import { db } from '@/lib/db'
import { cards, analytics } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function GET(
    request: NextRequest,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params
    const id = params.id

    try {
        const project = await db.select().from(cards).where(eq(cards.id, id)).get()
        if (!project) {
            return new Response("Project Not Found", { status: 404 })
        }

        // Extract visitor details from Cloudflare or general network headers
        const headersList = request.headers
        const ipAddress = headersList.get('cf-connecting-ip') || 
                           headersList.get('x-real-ip') || 
                           headersList.get('x-forwarded-for')?.split(',')[0].trim() || 
                           'Unknown'
        const country = headersList.get('cf-ipcountry') || 'Unknown'
        const referrer = headersList.get('referer') || 'Direct'
        const userAgent = headersList.get('user-agent') || 'Unknown'

        // Log the click event in the database
        await db.insert(analytics).values({
            cardId: project.id,
            ipAddress,
            country,
            referrer,
            userAgent
        })

        // Determine where to redirect the user
        let redirectUrl = project.subdomainUrl

        // If it's a coming soon page with a slug, redirect to internal slug page
        if (project.isComingSoon && project.slug) {
            const cleanSlug = project.slug.replace(/^\/+/, '')
            redirectUrl = `${request.nextUrl.origin}/${cleanSlug}`
        }

        // Redirect user with 307 temporary redirect
        return new Response(null, {
            status: 307,
            headers: {
                Location: redirectUrl,
                'X-Robots-Tag': 'noindex'
            }
        })
    } catch (error) {
        console.error("Click analytics tracking failed:", error)
        return new Response("Internal Server Error", { status: 500 })
    }
}
