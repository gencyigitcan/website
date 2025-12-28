export default function EnvDebugPage() {
    // Avoid importing db here to prevent crash if that's the cause
    const hasUrl = !!process.env.TURSO_DATABASE_URL
    const hasToken = !!process.env.TURSO_AUTH_TOKEN
    const nodeEnv = process.env.NODE_ENV

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8 font-mono">
            <h1 className="text-xl font-bold mb-8 text-red-500">Environment Debugger</h1>

            <div className="space-y-4 border border-zinc-800 p-6 rounded-xl min-w-[300px]">
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span>NODE_ENV:</span>
                    <span className="text-yellow-400">{nodeEnv}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span>TURSO_URL:</span>
                    <span className={hasUrl ? "text-green-400" : "text-red-500 font-bold"}>
                        {hasUrl ? "FOUND" : "MISSING"}
                    </span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span>TURSO_TOKEN:</span>
                    <span className={hasToken ? "text-green-400" : "text-red-500 font-bold"}>
                        {hasToken ? "FOUND" : "MISSING"}
                    </span>
                </div>
            </div>

            <p className="mt-8 text-zinc-500 text-sm max-w-md text-center">
                If TURSO_URL is MISSING, the app defaults to local file mode, which crashes on Vercel because the filesystem is read-only and the file is missing.
            </p>
        </div>
    )
}
