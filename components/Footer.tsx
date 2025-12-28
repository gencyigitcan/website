export default function Footer() {
    return (
        <footer className="w-full py-8 text-center border-t border-white/5 mt-auto">
            <p className="text-sm text-slate-500 font-medium tracking-wide">
                © {new Date().getFullYear()} Yiğitcan Genç. All rights reserved.
            </p>
        </footer>
    )
}
