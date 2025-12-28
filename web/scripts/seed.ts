import { db } from '../lib/db';
import { cards, admins, siteSettings } from '../db/schema';
import bcrypt from 'bcryptjs';

async function main() {
    console.log('Seeding...');

    try {
        // Create initial admin user
        const passwordHash = await bcrypt.hash('Biltim2025', 10);

        // Clear existing admins to ensure we have the requested state or upsert
        // For now, let's just make sure this user exists. 
        // We probably want to delete the old 'admin' user if it exists from previous schema, 
        // but since we dropped the column 'username', the old data might be invalid or lost during push if we didn't migrate carefully.
        // Drizzle push on sqlite might have recreated the table.
        // Let's just insert.

        // Ensure table is clean for this seed if we want to enforce the single user, or just add logic.
        // Let's delete all and re-add to be safe and clean.
        await db.delete(admins);

        await db.insert(admins).values({
            email: 'yigitcangenc@gmail.com',
            passwordHash,
        });

        // Seed default site settings if not present
        await db.insert(siteSettings).values({
            id: 'default',
            heroTitle: 'Yiğitcan Genç',
            heroDescription: 'Yazılım geliştirici olarak ürettiğim projeleri ve yayınladığım uygulamaları burada bulabilirsiniz.',
            contactEmail: 'yigitcangenc@gmail.com'
        }).onConflictDoNothing();

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

        // Wipe cards and re-seed
        await db.delete(cards);

        for (const c of cardsData) {
            await db.insert(cards).values(c);
        }

        console.log('Seed done! Admin created: yigitcangenc@gmail.com / Biltim2025');
    } catch (e: any) {
        console.error("Seed error:", e);
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
