import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
import PageViewTracker from '@/components/PageViewTracker'
import { db } from '@/lib/db'
import { cards, siteSettings } from '@/db/schema'
import { desc, eq } from 'drizzle-orm'

// Revalidate data every hour at most
export const revalidate = 3600

async function getData() {
  try {
    const projectsPromise = db.select()
      .from(cards)
      .where(eq(cards.isActive, true))
      .orderBy(desc(cards.sortOrder), desc(cards.createdAt));

    const settingsPromise = db.select().from(siteSettings).where(eq(siteSettings.id, 'default')).get();

    const [projects, settings] = await Promise.all([projectsPromise, settingsPromise]);

    return { projects, settings };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return { projects: [], settings: null };
  }
}

export default async function Home() {
  const { projects, settings } = await getData();

  const heroTitle = settings?.heroTitle || 'Yiğitcan Genç';

  const PALETTES = [
    { name: 'intelligenç', light: '#5A4A9E', dark: '#251E42' },
    { name: 'paramio', light: '#2F7C63', dark: '#12332B' },
    { name: 'data shield', light: '#2C3E63', dark: '#141C30' },
    { name: 'kanban', light: '#8A5A2C', dark: '#2E2013' },
    { name: 'seanso', light: '#8A3457', dark: '#2E1420' },
    { name: 'waitlist', light: '#2C4A8A', dark: '#141D33' },
    { name: 'fitflow', light: '#7C3E7A', dark: '#2A132A' },
    { name: 'year', light: '#4E7C3A', dark: '#1C2E12' },
    { name: 'pulse', light: '#1E7C72', dark: '#0F332E' },
    { name: 'chapter', light: '#5A3E8A', dark: '#201433' },
    { name: 'retro ui', light: '#A17A2E', dark: '#33260F' }
  ];

  const getFixedPalette = (projTitle: string) => {
    const lower = projTitle.toLowerCase();
    if (lower.includes('intelligenç') || lower.includes('intelligenc')) return PALETTES[0];
    if (lower.includes('paramio')) return PALETTES[1];
    if (lower.includes('data shield') || lower.includes('datashield')) return PALETTES[2];
    if (lower.includes('kanban')) return PALETTES[3];
    if (lower.includes('seanso')) return PALETTES[4];
    if (lower.includes('waitlist')) return PALETTES[5];
    if (lower.includes('fitflow')) return PALETTES[6];
    if (lower.includes('year')) return PALETTES[7];
    if (lower.includes('pulse')) return PALETTES[8];
    if (lower.includes('chapter')) return PALETTES[9];
    if (lower.includes('retro ui') || lower.includes('retroui')) return PALETTES[10];
    return null;
  };

  const usedPaletteNames = new Set<string>();
  const projectPaletteMap = new Map<string, { light: string, dark: string }>();

  // 1st Pass: Assign fixed colors
  projects.forEach(project => {
    const fixed = getFixedPalette(project.title);
    if (fixed) {
      projectPaletteMap.set(project.id, { light: fixed.light, dark: fixed.dark });
      usedPaletteNames.add(fixed.name);
    }
  });

  // 2nd Pass: Distribute unused palettes to other projects
  let unusedPalettes = PALETTES.filter(p => !usedPaletteNames.has(p.name));

  projects.forEach(project => {
    if (!projectPaletteMap.has(project.id)) {
      if (unusedPalettes.length === 0) {
        unusedPalettes = [...PALETTES];
      }
      const selectedPalette = unusedPalettes.shift()!;
      projectPaletteMap.set(project.id, { light: selectedPalette.light, dark: selectedPalette.dark });
      usedPaletteNames.add(selectedPalette.name);
    }
  });

  const contactCard = {
    id: 'contact-card',
    title: 'İletişime Geç',
    description: 'Projelerimi beğendiyseniz, iş birliği yapmak veya sadece merhaba demek isterseniz bana mail atabilirsiniz.',
    url: `mailto:${settings?.contactEmail || 'yigitcangenc@gmail.com'}`,
    isContact: true
  };

  return (
    <main className="h-screen flex flex-col relative text-fg-primary overflow-hidden">
      <PageViewTracker />
      <Navbar />

      {/* Content Container - Flex Col to prevent main scroll if possible, internal scroll if needed */}
      <div className="flex-1 overflow-y-auto w-full pt-20 pb-10 px-4 md:px-8">
        <div className="max-w-[1600px] mx-auto flex flex-col h-full">

          <header className="flex-none pt-10 pb-8 text-center max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-medium tracking-wider mb-4 text-[#DFB574] dark:text-[#DFB574] uppercase animate-float">
              Portfolio & Showcase
            </span>
            <h1 className="font-serif text-4xl md:text-6xl mb-4 leading-tight text-fg-primary">
              {heroTitle}
            </h1>
            <p className="text-base md:text-lg text-fg-secondary mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              {settings?.heroDescription || 'Yazılım geliştirici olarak ürettiğim projeleri ve yayınladığım uygulamaları burada bulabilirsiniz.'}
            </p>
          </header>

          {/* Grid Section - Scrollable Area or Just Fits */}
          <div className="flex-1 w-full pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">

              <Card
                title={contactCard.title}
                description={contactCard.description}
                url={contactCard.url}
                isContact={true}
              />

              {projects.map((project) => {
                const clickUrl = `/api/projects/${project.id}/click`;

                return (
                  <Card
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    url={clickUrl}
                    imageUrl={project.imageUrl}
                    isContact={false}
                    isRestricted={project.isComingSoon || false}
                    iconName={project.iconName}
                    customColors={projectPaletteMap.get(project.id)}
                  />
                )
              })}
            </div>
          </div>

          <div className="flex-none mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  )
}
