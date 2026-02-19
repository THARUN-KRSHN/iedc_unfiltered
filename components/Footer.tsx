
'use client';
import { Instagram, Linkedin, Globe, Heart, Facebook, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';


const SocialBlock = ({ icon: Icon, color, sideColor, topColor, href, delay }: any) => {
    return (
        <motion.a
            href={href || "#"}
            target={href ? "_blank" : undefined}
            className="relative group cursor-pointer block w-20 h-20 md:w-24 md:h-24 mx-auto"
            initial={{ y: 0 }}
            whileHover={{ y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Top Face */}
            <div className={`absolute top-0 left-0 w-full h-[20px] ${topColor} origin-bottom transform -translate-y-full skew-x-[-45deg] transition-all duration-300 border-2 border-black group-hover:brightness-110`} />

            {/* Side Face */}
            <div className={`absolute top-0 right-0 w-[20px] h-full ${sideColor} origin-left transform translate-x-full skew-y-[-45deg] transition-all duration-300 border-r-2 border-b-2 border-t-2 border-black group-hover:brightness-90`} />

            {/* Front Face */}
            <div className={`absolute inset-0 ${color} flex items-center justify-center border-2 border-black z-10 transition-all duration-300 group-hover:brightness-105`}>
                {Icon ? (
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-md" strokeWidth={2.5} />
                ) : (
                    // Decorative pattern for non-link blocks
                    <div className="w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
                )}
            </div>
        </motion.a>
    );
};

export default function Footer() {
    const blocks = [
        { type: 'social', icon: Instagram, color: 'bg-[#E1306C]', sideColor: 'bg-[#C13584]', topColor: 'bg-[#fd5949]', href: 'https://www.instagram.com/iedc_cceijk/' },
        { type: 'deco', icon: null, color: 'bg-brand-yellow', sideColor: 'bg-yellow-600', topColor: 'bg-yellow-300', href: null },
        { type: 'social', icon: Linkedin, color: 'bg-[#0077B5]', sideColor: 'bg-[#005582]', topColor: 'bg-[#0288D1]', href: 'https://www.linkedin.com/company/iedccce/' },
        { type: 'social', icon: Globe, color: 'bg-brand-orange', sideColor: 'bg-orange-700', topColor: 'bg-orange-400', href: 'https://www.iedc.cce.edu.in/' },
        { type: 'deco', icon: null, color: 'bg-brand-blue', sideColor: 'bg-blue-900', topColor: 'bg-blue-600', href: null },
        { type: 'social', icon: Facebook, color: 'bg-[#1877F2]', sideColor: 'bg-[#165dbb]', topColor: 'bg-[#4294ff]', href: 'https://www.facebook.com/iedc.cceijk' },
    ];

    return (
        <footer className="bg-brand-dark text-white pt-48 pb-24 relative overflow-hidden border-t-8 border-brand-yellow sticky top-0 z-40 min-h-screen flex flex-col justify-end">

            {/* Decorative Wave at the top - Looping Animation */}
            <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-none z-10 transform rotate-360 scale-x-[-1]">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-[200%]"
                >
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] md:h-[120px] fill-brand-yellow">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                        <path d="M1521.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C2023.78,31,2106.67,72,2185.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H1200V27.35A600.21,600.21,0,0,0,1521.39,56.44Z"></path>
                    </svg>
                </motion.div>
            </div>

            {/* Decorative Blob */}
            <div className="absolute top-40 right-[-100px] w-[500px] h-[500px] bg-brand-blue rounded-full blur-[120px] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 relative z-10 items-center md:items-start text-center md:text-left">

                {/* Left Section - Branding & Social Blocks */}
                <div className="md:w-[50%] space-y-12">
                    <div className="space-y-4">
                        <h3 className="font-display text-5xl md:text-7xl font-black uppercase text-brand-yellow tracking-tighter leading-none">IEDC CCE</h3>
                        <p className="text-gray-400 font-sans text-lg md:text-xl font-medium tracking-wide max-w-sm mx-auto md:mx-0">
                            Innovation and Entrepreneurship Development Centre
                        </p>
                    </div>

                    {/* 3D Isometric Social Blocks Grid */}
                    <div className="flex flex-wrap gap-x-8 gap-y-12 justify-center md:justify-start px-4 md:px-0 py-8">
                        {blocks.map((block, i) => (
                            <SocialBlock key={i} {...block} delay={i} />
                        ))}
                    </div>
                </div>

                {/* Right Section - Text */}
                <div className="md:w-[50%] flex flex-col justify-end text-center md:text-right mt-12 md:mt-0">
                    <h2 className="font-display text-7xl md:text-[8rem] font-black leading-[0.85] mb-8 text-white uppercase drop-shadow-[4px_4px_0_#000]">
                        The end<br />of an Era.
                    </h2>

                    <div className="text-gray-500 font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center md:justify-end gap-2 py-3 px-6">
                        Made with <Heart className="w-4 h-4 text-brand-red fill-brand-red animate-pulse" /> for Excom 24-26
                    </div>
                    <div className="text-gray-500 font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center md:justify-end gap-2 py-3 px-6">
                        As the IEDC CCE Excom 2024–2026 chapter comes to a close, we want to take a moment to appreciate every idea shared, every event organized, every late-night discussion, and every step taken together to build a stronger community.

                        This space was created so every voice could be heard — the appreciation, the suggestions, the laughter, and the memories that made this journey meaningful.

                        To the Excom members: thank you for your dedication, leadership, and the countless hours you invested to make IEDC what it is today.

                        To everyone who shared a message: thank you for being a part of this story.

                        Here’s to new beginnings, bigger dreams, and the legacy that continues.
                    </div>
                </div>
            </div>
        </footer>
    );
}
