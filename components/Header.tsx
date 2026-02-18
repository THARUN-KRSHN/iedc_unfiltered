
export default function Header() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent text-brand-dark pointer-events-none">
            <div className="pointer-events-auto font-display font-black tracking-wide text-2xl uppercase drop-shadow-[2px_2px_0_rgba(255,255,255,0.8)]">Excom Unfiltered</div>
            <div className="pointer-events-auto font-medium text-sm text-brand-dark bg-white px-3 py-1 rounded-full font-bold shadow-[2px_2px_0_#000] border border-black group cursor-pointer hover:bg-brand-yellow transition-colors">
                <span className="group-hover:hidden">IEDC CCE</span>
                <span className="hidden group-hover:inline">2024-26</span>
            </div>
        </nav>
    );
}
