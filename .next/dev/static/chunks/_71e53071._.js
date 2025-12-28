(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/actions/data:7c63c2 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"605903fbe4ee6b6cd53fc4efde62fc75728cc7c67a":"updatePassword"},"app/actions/profile.ts",""] */ __turbopack_context__.s([
    "updatePassword",
    ()=>updatePassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updatePassword = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("605903fbe4ee6b6cd53fc4efde62fc75728cc7c67a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updatePassword"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZmlsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgZGIgfSBmcm9tICdAL2xpYi9kYidcbmltcG9ydCB7IGFkbWlucyB9IGZyb20gJ0AvZGIvc2NoZW1hJ1xuaW1wb3J0IHsgZXEgfSBmcm9tICdkcml6emxlLW9ybSdcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFzc3dvcmQocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IGN1cnJlbnRQYXNzd29yZCA9IGZvcm1EYXRhLmdldCgnY3VycmVudFBhc3N3b3JkJykgYXMgc3RyaW5nXG4gICAgY29uc3QgbmV3UGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoJ25ld1Bhc3N3b3JkJykgYXMgc3RyaW5nXG4gICAgY29uc3QgY29uZmlybVBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KCdjb25maXJtUGFzc3dvcmQnKSBhcyBzdHJpbmdcblxuICAgIGlmICghY3VycmVudFBhc3N3b3JkIHx8ICFuZXdQYXNzd29yZCB8fCAhY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdBbGwgZmllbGRzIGFyZSByZXF1aXJlZCcsIHN1Y2Nlc3M6IGZhbHNlIH1cbiAgICB9XG5cbiAgICBpZiAobmV3UGFzc3dvcmQgIT09IGNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAnTmV3IHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gnLCBzdWNjZXNzOiBmYWxzZSB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBpZGVudGlmeSB0aGUgY3VycmVudCB1c2VyLiBTaW5jZSB3ZSBkb24ndCBzdG9yZSB1c2VyIElEIGluIGNvb2tpZSAob25seSBzZXNzaW9uIGZsYWcpLFxuICAgICAgICAvLyB3ZSBhc3N1bWUgc2luZ2xlIGFkbWluIGZvciBub3cgT1Igd2Ugc2hvdWxkIGhhdmUgc3RvcmVkIGVtYWlsIGluIGNvb2tpZS5cbiAgICAgICAgLy8gQnV0IHRoZSByZXF1aXJlbWVudCBpbXBsaWVzIFwidGhlIHVzZXJcIiAtPiB3ZSBjYW4gYXNzdW1lIHN0cmljdCBzaW5nbGUgdXNlciBvciB3ZSBuZWVkIHRvIHVwZGF0ZSBhdXRoIHRvIHN0b3JlIHVzZXIgaW5mby5cbiAgICAgICAgLy8gR2l2ZW4gdGhlIGNvbnN0cmFpbnRzIGFuZCB0eXBpY2FsIFwic2ltcGxlIGFkbWluXCIgc2V0dXAsIGxldCdzIHVwZGF0ZSB0aGUgdXNlciAneWlnaXRjYW5nZW5jQGdtYWlsLmNvbScgc3BlY2lmaWNhbGx5IFxuICAgICAgICAvLyBPUiBiZXR0ZXIsIGZldGNoIHRoZSBvbmx5IGFkbWluIHVzZXIgaWYgd2UgYXNzdW1lIHNpbmdsZSB0ZW5hbnQuXG5cbiAgICAgICAgLy8gSE9XRVZFUiwgYSBiZXR0ZXIgYXBwcm9hY2ggaXMgdG8gc3RvcmUgdGhlIHVzZXIgZW1haWwgaW4gdGhlIGNvb2tpZS5cbiAgICAgICAgLy8gU2luY2UgSSBkaWRuJ3QgdmVyaWZ5IGNvb2tpZSBjb250ZW50cyBjaGFuZ2VzIGluIGF1dGgudHMgKGl0IGp1c3Qgc2V0cyAnYWRtaW5fc2Vzc2lvbic9J3RydWUnKSxcbiAgICAgICAgLy8gSSB3aWxsIGFzc3VtZSBmb3IgdGhpcyBzcGVjaWZpYyByZXF1ZXN0IHdlIGFyZSB1cGRhdGluZyB0aGUgbWFpbiBhZG1pbiB1c2VyLiBcbiAgICAgICAgLy8gVG8gYmUgc2FmZXIsIEknbGwgZmV0Y2ggdGhlIGZpcnN0IGFkbWluIGZvdW5kIG9yIHNwZWNpZmljIGVtYWlsLlxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5zZWxlY3QoKS5mcm9tKGFkbWlucykubGltaXQoMSkuZ2V0KCk7IC8vIEdldCB0aGUgc2luZ2xlIGFkbWluXG5cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAnVXNlciBub3QgZm91bmQnLCBzdWNjZXNzOiBmYWxzZSB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGN1cnJlbnRQYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpXG5cbiAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ0N1cnJlbnQgcGFzc3dvcmQgaXMgaW5jb3JyZWN0Jywgc3VjY2VzczogZmFsc2UgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3UGFzc3dvcmRIYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gobmV3UGFzc3dvcmQsIDEwKVxuXG4gICAgICAgIGF3YWl0IGRiLnVwZGF0ZShhZG1pbnMpXG4gICAgICAgICAgICAuc2V0KHsgcGFzc3dvcmRIYXNoOiBuZXdQYXNzd29yZEhhc2ggfSlcbiAgICAgICAgICAgIC53aGVyZShlcShhZG1pbnMuaWQsIHVzZXIuaWQpKVxuXG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdQYXNzd29yZCB1cGRhdGVkIHN1Y2Nlc3NmdWxseScsIHN1Y2Nlc3M6IHRydWUgfVxuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICdGYWlsZWQgdG8gdXBkYXRlIHBhc3N3b3JkJywgc3VjY2VzczogZmFsc2UgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFJBU3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/dashboard/settings/PasswordForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PasswordForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$7c63c2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:7c63c2 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
function PasswordSubmitButton() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "5b852dc4a9a2d2f86f96952b7828b3aaf67753ab39490da300103b9fc03642e0") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b852dc4a9a2d2f86f96952b7828b3aaf67753ab39490da300103b9fc03642e0";
    }
    const { pending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormStatus"])();
    const t0 = pending ? "Updating..." : "Change Password";
    let t1;
    if ($[1] !== pending || $[2] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: pending,
            className: "flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 font-bold text-fg-primary transition-all disabled:opacity-50",
            children: t0
        }, void 0, false, {
            fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = pending;
        $[2] = t0;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
}
_s(PasswordSubmitButton, "jhoM4l+GnnRJq1+2o1VHFTL5Kos=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormStatus"]
    ];
});
_c = PasswordSubmitButton;
function PasswordForm() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "5b852dc4a9a2d2f86f96952b7828b3aaf67753ab39490da300103b9fc03642e0") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b852dc4a9a2d2f86f96952b7828b3aaf67753ab39490da300103b9fc03642e0";
    }
    const [state, action] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormState"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$7c63c2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updatePassword"], null);
    let t0;
    if ($[1] !== state) {
        t0 = state?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `text-sm text-center p-2 rounded-lg border ${state.success ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" : "bg-red-500/10 border-red-500/20 text-red-500"}`,
            children: state.message
        }, void 0, false, {
            fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
            lineNumber: 41,
            columnNumber: 28
        }, this);
        $[1] = state;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2",
                    children: "Current Password"
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
                    lineNumber: 49,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "currentPassword",
                    type: "password",
                    required: true,
                    className: "w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)]",
                    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                }, void 0, false, {
                    fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
                    lineNumber: 49,
                    columnNumber: 125
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2",
                            children: "New Password"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
                            lineNumber: 56,
                            columnNumber: 70
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "newPassword",
                            type: "password",
                            required: true,
                            className: "w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)]",
                            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
                            lineNumber: 56,
                            columnNumber: 176
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
                    lineNumber: 56,
                    columnNumber: 65
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-bold uppercase tracking-wide text-fg-muted mb-2",
                            children: "Confirm New Password"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
                            lineNumber: 56,
                            columnNumber: 501
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            name: "confirmPassword",
                            type: "password",
                            required: true,
                            className: "w-full input-glass rounded-xl px-4 py-3 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:opacity-20 bg-[var(--input-bg)]",
                            placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
                            lineNumber: 56,
                            columnNumber: 615
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
                    lineNumber: 56,
                    columnNumber: 496
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-2 flex justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PasswordSubmitButton, {}, void 0, false, {
                fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
                lineNumber: 63,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== action || $[7] !== t0) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            action: action,
            className: "glass-panel p-8 rounded-3xl space-y-6 border-l-4 border-l-indigo-500",
            children: [
                t0,
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/dashboard/settings/PasswordForm.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[6] = action;
        $[7] = t0;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    return t4;
}
_s1(PasswordForm, "8OZn8iIokM1duhUXZQ6EOnlT+kw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormState"]
    ];
});
_c1 = PasswordForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "PasswordSubmitButton");
__turbopack_context__.k.register(_c1, "PasswordForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
]);

//# sourceMappingURL=_71e53071._.js.map