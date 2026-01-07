import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Card from '@/components/Card'
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
      .orderBy(desc(cards.createdAt));

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


  const contactCard = {
    id: 'contact-card',
    title: 'İletişime Geç',
    description: 'Projelerimi beğendiyseniz, iş birliği yapmak veya sadece merhaba demek isterseniz bana mail atabilirsiniz.',
    url: `mailto:${settings?.contactEmail || 'yigitcangenc@gmail.com'}`,
    isContact: true
  };

  return (
    <main className="h-screen flex flex-col relative text-fg-primary overflow-hidden">
      <Navbar />

      {/* Content Container - Flex Col to prevent main scroll if possible, internal scroll if needed */}
      <div className="flex-1 overflow-y-auto w-full pt-20 pb-10 px-4 md:px-8">
        <div className="max-w-[1600px] mx-auto flex flex-col h-full">

          {/* Hero Section */}
          <header className="flex-none pt-10 pb-8 text-center max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-medium tracking-wider mb-4 text-violet-500 dark:text-violet-300 uppercase animate-float">
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
                // Temporary: Redirect dummy projects to /coming-soon
                const isDummy = ['Labs', 'Notes', 'Tools'].includes(project.title);
                const cardUrl = isDummy ? '/coming-soon' : project.subdomainUrl;

                return (
                  <Card
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    url={cardUrl}
                    imageUrl={project.imageUrl}
                    isContact={false} // Explicitly set false to ensure _self target logic applies if we want, OR we need to update Card to handle internal links for /coming-soon
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
