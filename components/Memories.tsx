
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Placeholders because we don't have real images yet. Using high-quality random Unsplash images with a vintage/solid filter feel.
const images1 = [
    "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZXZlbnR8ZW58MHx8fHwxNzM5ODcxMTY5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1544531586-fde5298cdd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwyfHxjb2xsZWdlJTIwZXZlbnR8ZW58MHx8fHwxNzM5ODcxMTY5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwzfHxjb2xsZWdlJTIwZXZlbnR8ZW58MHx8fHwxNzM5ODcxMTY5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHw0fHxjb2xsZWdlJTIwZXZlbnR8ZW58MHx8fHwxNzM5ODcxMTY5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHw1fHxjb2xsZWdlJTIwZXZlbnR8ZW58MHx8fHwxNzM5ODcxMTY5fDA&ixlib=rb-4.0.3&q=80&w=400",
];
const images2 = [
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHw2fHxjb2xsZWdlJTIwZXZlbnR8ZW58MHx8fHwxNzM5ODcxMTY5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHw3fHxjb2xsZWdlJTIwZXZlbnR8ZW58MHx8fHwxNzM5ODcxMTY5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHw4fHxjb2xsZWdlJTIwZXZlbnR8ZW58MHx8fHwxNzM5ODcxMTY5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHw5fHxjb2xsZWdlJTIwZXZlbnR8ZW58MHx8fHwxNzM5ODcxMTY5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwxMHx8Y29sbGVnZSUyMGV2ZW50fGVufDB8fHx8MTczOTg3MTE2OXww&ixlib=rb-4.0.3&q=80&w=400",
];

export default function Memories() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

    return (
        <section ref={containerRef} className="py-32 bg-brand-yellow overflow-hidden relative">
            <div className="absolute inset-0 bg-brand-yellow z-0" />

            {/* Skewed background strip */}
            <div className="absolute inset-0 transform -skew-y-3 bg-brand-cream/20 z-0 origin-bottom-right scale-y-150" />

            <div className="relative z-30 text-center mb-16 px-4">
                <h2 className="font-display text-7xl font-black text-black mb-4 uppercase tracking-tighter drop-shadow-white">
                    The <span className="text-white bg-black px-2 transform -rotate-2 inline-block">Best</span> Times
                </h2>
                <p className="font-sans text-black font-bold text-xl uppercase tracking-wider">Cherished moments from 2024-2026</p>
            </div>

            <div className="flex flex-col gap-8 transform rotate-2">
                {/* Row 1 - Scroll Left */}
                <div className="flex w-[200%] gap-6">
                    <motion.div style={{ x: x1 }} className="flex gap-6 w-full">
                        {images1.concat(images1).concat(images1).map((src, i) => (
                            <div key={`row1-${i}`} className="h-48 md:h-64 aspect-[4/3] rounded-none border-4 border-black bg-white shrink-0 shadow-[8px_8px_0px_#000] hover:translate-y-[-4px] transition-transform duration-200">
                                <img src={src} alt="Memory" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - Scroll Right */}
                <div className="flex w-[200%] gap-6">
                    <motion.div style={{ x: x2 }} className="flex gap-6 w-full">
                        {images2.concat(images2).concat(images2).map((src, i) => (
                            <div key={`row2-${i}`} className="h-48 md:h-64 aspect-[4/3] rounded-none border-4 border-black bg-white shrink-0 shadow-[8px_8px_0px_#000] hover:translate-y-[-4px] transition-transform duration-200">
                                <img src={src} alt="Memory" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Wavy Top Divider for next section (Footer) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 transform translate-y-1">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-16 md:h-32 transform">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-brand-dark"></path>
                </svg>
            </div>

        </section>
    );
}
