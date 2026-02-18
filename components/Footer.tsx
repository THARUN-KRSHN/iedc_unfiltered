
import { Instagram, Linkedin, Globe, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-dark text-white py-24 relative overflow-hidden border-t-8 border-brand-yellow">

            {/* Decorative Wave at the top - Flipped Horizontally to match user request */}
            <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-none z-10 transform rotate-180 scale-x-[-1]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] fill-brand-yellow">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            {/* Decorative Blob */}
            <div className="absolute top-20 right-[-100px] w-96 h-96 bg-brand-blue rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-24 flex flex-col md:flex-row gap-12 relative z-10 items-center md:items-start text-center md:text-left">
                <div className="md:w-[40%] space-y-8">
                    <div className="space-y-4">
                        <h3 className="font-display text-5xl md:text-6xl font-black uppercase text-brand-yellow tracking-tighter leading-none">IEDC CCE</h3>
                        <p className="text-gray-400 font-sans text-lg md:text-xl font-medium tracking-wide max-w-xs mx-auto md:mx-0">
                            Innovation and Entrepreneurship Development Centre
                        </p>
                    </div>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="#" className="p-4 rounded-full bg-white text-black hover:bg-brand-yellow hover:-translate-y-1 transition-all duration-200 border-2 border-transparent hover:border-black shadow-[4px_4px_0_white] hover:shadow-[4px_4px_0_#000]">
                            <Instagram size={24} strokeWidth={2.5} />
                        </a>
                        <a href="#" className="p-4 rounded-full bg-white text-black hover:bg-brand-blue hover:text-white hover:-translate-y-1 transition-all duration-200 border-2 border-transparent hover:border-white shadow-[4px_4px_0_white] hover:shadow-[4px_4px_0_#000]">
                            <Linkedin size={24} strokeWidth={2.5} />
                        </a>
                        <a href="#" className="p-4 rounded-full bg-white text-black hover:bg-brand-orange hover:-translate-y-1 transition-all duration-200 border-2 border-transparent hover:border-black shadow-[4px_4px_0_white] hover:shadow-[4px_4px_0_#000]">
                            <Globe size={24} strokeWidth={2.5} />
                        </a>
                    </div>
                </div>

                <div className="md:w-[60%] flex flex-col justify-end text-center md:text-right mt-12 md:mt-0">
                    <h2 className="font-display text-7xl md:text-[8rem] font-black leading-[0.85] mb-8 text-white uppercase drop-shadow-[4px_4px_0_#000]">
                        The end<br />of an Era.
                    </h2>
                    <div className="text-gray-500 font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center md:justify-end gap-2 bg-black py-2 px-4 rounded-full inline-flex self-center md:self-end border border-gray-800">
                        Made with <Heart className="w-4 h-4 text-brand-red fill-brand-red animate-pulse" /> for Excom 24-26
                    </div>
                </div>
            </div>
        </footer>
    );
}
