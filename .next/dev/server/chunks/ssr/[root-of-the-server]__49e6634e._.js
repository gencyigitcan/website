module.exports = [
"[externals]/better-sqlite3 [external] (better-sqlite3, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("better-sqlite3", () => require("better-sqlite3"));

module.exports = mod;
}),
"[project]/db/schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "admins",
    ()=>admins,
    "cards",
    ()=>cards,
    "siteSettings",
    ()=>siteSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sqlite-core/table.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sqlite-core/columns/text.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sqlite-core/columns/integer.js [app-rsc] (ecmascript)");
;
const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sqliteTable"])('cards', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('id').primaryKey().$defaultFn(()=>crypto.randomUUID()),
    title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('title').notNull(),
    description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('description').notNull(),
    subdomainUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('subdomain_url').notNull(),
    isActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('is_active', {
        mode: 'boolean'
    }).default(true),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('created_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date()),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('updated_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date())
});
const admins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sqliteTable"])('admins', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('id').primaryKey().$defaultFn(()=>crypto.randomUUID()),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('email').notNull().unique(),
    passwordHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('password_hash').notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('created_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date())
});
const siteSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sqliteTable"])('site_settings', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('id').primaryKey().$defaultFn(()=>'default'),
    heroTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('hero_title').default('Yiğitcan Genç'),
    heroDescription: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('hero_description').default('Yazılım geliştirici olarak ürettiğim projeleri ve yayınladığım uygulamaları burada bulabilirsiniz.'),
    contactEmail: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('contact_email').default('yigitcangenc@gmail.com'),
    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('updated_at', {
        mode: 'timestamp'
    }).$defaultFn(()=>new Date())
});
}),
"[project]/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$better$2d$sqlite3$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/better-sqlite3/driver.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/better-sqlite3 [external] (better-sqlite3, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
;
const dbPath = process.env.DATABASE_URL || 'sqlite.db';
const resolvedPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].isAbsolute(dbPath) ? dbPath : __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), dbPath);
const sqlite = new __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$29$__["default"](resolvedPath);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$better$2d$sqlite3$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["drizzle"])(sqlite, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
});
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/app/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00f4fb5eb3be3ed0aca34683c4f23cc8d8cf540698":"logout","6053b55e959f91fc581532ef4ff4459b1ccb77d370":"login"},"",""] */ __turbopack_context__.s([
    "login",
    ()=>login,
    "logout",
    ()=>logout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function login(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    if (!email || !password) {
        return {
            message: 'Email and password required'
        };
    }
    try {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["admins"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["admins"].email, email)).get();
        if (!user) {
            return {
                message: 'Invalid credentials'
            };
        }
        const valid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(password, user.passwordHash);
        if (!valid) {
            return {
                message: 'Invalid credentials'
            };
        }
        // Set session cookie
        (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).set('admin_session', 'true', {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 // 1 day
        });
    } catch (e) {
        console.error(e);
        return {
            message: 'Internal server error'
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/admin/dashboard');
}
async function logout() {
    (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete('admin_session');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/admin');
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    login,
    logout
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "6053b55e959f91fc581532ef4ff4459b1ccb77d370", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "00f4fb5eb3be3ed0aca34683c4f23cc8d8cf540698", null);
}),
"[project]/app/actions/admin-management.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40d0933ff707e2996142e106d5d12537a41d9ab10e":"deleteAdmin","604664a71ab064a585821887e12069530324f7e2a0":"createAdmin"},"",""] */ __turbopack_context__.s([
    "createAdmin",
    ()=>createAdmin,
    "deleteAdmin",
    ()=>deleteAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/db/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function createAdmin(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    if (!email || !password) {
        return {
            message: 'Email and password are required'
        };
    }
    try {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["admins"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["admins"].email, email)).get();
        if (existing) {
            return {
                message: 'Admin with this email already exists'
            };
        }
        const passwordHash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["admins"]).values({
            email,
            passwordHash
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/dashboard/admins');
        return {
            message: 'Admin created successfully',
            success: true
        };
    } catch (e) {
        console.error('Create admin error:', e);
        return {
            message: 'Failed to create admin'
        };
    }
}
async function deleteAdmin(id) {
    try {
        // Prevent deleting the last admin or "super admin" if needed but simplified here
        const allAdmins = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["admins"]).all();
        if (allAdmins.length <= 1) {
            // In server actions, returning simple values is better, but this is a void/redirect usually.
            // But for a button action we might want feedback. For now simple toggle/delete.
            // We can't return to the form state easily from a bind action unless we use useFormState there too.
            // Let's just log and ignore for now or assume risk.
            return {
                message: 'Cannot delete the last admin'
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["admins"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$db$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["admins"].id, id));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/dashboard/admins');
        return {
            success: true
        };
    } catch (e) {
        console.error('Delete admin error:', e);
        return {
            message: 'Failed to delete admin'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createAdmin,
    deleteAdmin
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAdmin, "604664a71ab064a585821887e12069530324f7e2a0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAdmin, "40d0933ff707e2996142e106d5d12537a41d9ab10e", null);
}),
"[project]/.next-internal/server/app/admin/dashboard/admins/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/admin-management.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$admin$2d$management$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/admin-management.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/.next-internal/server/app/admin/dashboard/admins/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/admin-management.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00f4fb5eb3be3ed0aca34683c4f23cc8d8cf540698",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "40d0933ff707e2996142e106d5d12537a41d9ab10e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$admin$2d$management$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAdmin"],
    "604664a71ab064a585821887e12069530324f7e2a0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$admin$2d$management$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAdmin"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$dashboard$2f$admins$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$admin$2d$management$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/dashboard/admins/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions/admin-management.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$admin$2d$management$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/admin-management.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__49e6634e._.js.map