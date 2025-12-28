import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from '@/db/schema';
import path from 'path';

const dbPath = process.env.DATABASE_URL || 'sqlite.db';
const resolvedPath = path.isAbsolute(dbPath) ? dbPath : path.join(process.cwd(), dbPath);

const sqlite = new Database(resolvedPath);
export const db = drizzle(sqlite, { schema });
