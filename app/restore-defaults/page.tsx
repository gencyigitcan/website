import { db } from '@/lib/db'
import { cards } from '@/db/schema'
import { redirect } from 'next/navigation'

export default function RestoreDefaultsPage() {
    async function restore() {
        'use server'

        const cardsData = [
            {
                title: "Labs",
                description: "Deneysel projeler ve POC’ler",
                subdomainUrl: "https://labs.gencyigitcan.com",
                isActive: true
            },
            {
                title: "Notes",
                description: "Teknik notlar ve yazılar",
                subdomainUrl: "https://notes.gencyigitcan.com",
                isActive: true
            },
            {
                title: "Tools",
                description: "Küçük ama faydalı araçlar",
                subdomainUrl: "https://tools.gencyigitcan.com",
                isActive: true
            },
            {
                title: "Vision Board",
                description: "Kişisel vizyon ve hedeflerin görselleştirilmesi için interaktif pano.",
                subdomainUrl: "https://vision.gencyigitcan.com",
                isActive: true
            },
            {
                title: "Finance Tracker",
                description: "Kişisel gelir ve gider takibi için basit finansal yönetim aracı.",
                subdomainUrl: "https://finance.gencyigitcan.com",
                isActive: true
            },
            {
                title: "Retro UI",
                description: "90'ların işletim sistemlerinden ilham alan React bileşen kütüphanesi.",
                subdomainUrl: "https://retro.gencyigitcan.com",
                isActive: true
            },
            {
                title: "CLI Portfolio",
                description: "Terminal tabanlı portfolyo deneyimi geliştiren açık kaynak proje.",
                subdomainUrl: "https://cli.gencyigitcan.com",
                isActive: true
            },
            {
                title: "Antigravity",
                description: "Yapay zeka asistanları için gelişmiş bağlam yönetim sistemi.",
                subdomainUrl: "https://antigravity.gencyigitcan.com",
                isActive: true
            }
        ];

        try {
            // Check if projects already exist to avoid duplication if user clicks multiple times
            // Though "Wipe and re-seed" is usually cleaner for restoration.

            // Let's wipe to ensure exact state match with seed
            await db.delete(cards);

            for (const c of cardsData) {
                await db.insert(cards).values(c);
            }

            console.log("Projects restored successfully")
        } catch (e) {
            console.error("Restore failed", e)
            return
        }

        redirect('/admin/dashboard')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="p-8 flex flex-col gap-6 max-w-md w-full border border-white/20 rounded-xl text-center">
                <h1 className="text-xl font-bold">Restore Default Projects</h1>
                <p className="text-zinc-400">This will delete all current projects and restore the default 8 items (Labs, Notes, Vision Board, etc.).</p>

                <form action={restore}>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded transition-colors">
                        RESTORE EXAMPLES
                    </button>
                </form>
            </div>
        </div>
    )
}
