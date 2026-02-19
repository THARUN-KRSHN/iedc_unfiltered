
export default function Header() {
    return (
        <nav className="main-header fixed top-4 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent text-brand-dark pointer-events-none">
            <div className="pointer-events-auto font-display font-black tracking-wide text-lg md:text-2xl uppercase drop-shadow-[2px_2px_0_rgba(255,255,255,0.8)] whitespace-nowrap">Excom Unfiltered</div>
            <div className="pointer-events-auto flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent hover:border-blue-600 transition-all duration-300 bg-white shadow-md cursor-pointer">
                    <img src="/logo/logo-white-bg.png" alt="IEDC Logo" className="w-full h-full object-contain p-1" />
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent hover:border-blue-600 transition-all duration-300 bg-white shadow-md cursor-pointer">
                    <img src="/logo/CCE Logo (Dark).png" alt="CCE Logo" className="w-full h-full object-cover p-1" />
                </div>
            </div>
        </nav>
    );
}
