import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const cards = sqliteTable('cards', {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    title: text('title').notNull(),
    description: text('description').notNull(),
    subdomainUrl: text('subdomain_url').notNull(),
    isActive: integer('is_active', { mode: 'boolean' }).default(true),
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

export const admins = sqliteTable('admins', {
    id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
    email: text('email').notNull().unique(), // Changed from username to email
    passwordHash: text('password_hash').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()), // Added created_at for sorting
});

export const siteSettings = sqliteTable('site_settings', {
    id: text('id').primaryKey().$defaultFn(() => 'default'),
    heroTitle: text('hero_title').default('Yiğitcan Genç'),
    heroDescription: text('hero_description').default('Yazılım geliştirici olarak ürettiğim projeleri ve yayınladığım uygulamaları burada bulabilirsiniz.'),
    contactEmail: text('contact_email').default('yigitcangenc@gmail.com'),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});
