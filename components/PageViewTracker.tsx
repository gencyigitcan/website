'use client'

import { useEffect } from 'react'

export default function PageViewTracker() {
    useEffect(() => {
        // Track homepage view once on client mount
        fetch('/api/analytics/view', {
            method: 'POST',
        }).catch(err => {
            console.error('Failed to log page view:', err)
        })
    }, [])

    return null
}
