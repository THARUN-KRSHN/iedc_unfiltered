
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Real images from public/gallery
const images1 = [
    "/gallery/20250814_140714.jpg",
    "/gallery/20250814_152337.jpg",
    "/gallery/BELFORT.jpeg",
    "/gallery/IMG-20250803-WA0019.jpg",
];
const images2 = [
    "/gallery/IMG-20250811-WA0070.jpg",
    "/gallery/IMG-20250814-WA0144.jpg",
    "/gallery/IMG-20250903-WA0045(1).jpg",
    "/gallery/IMG-20250911-WA0035.jpg",
];
const images3 = [
    "/gallery/IMG-20250921-WA0105.jpg",
    "/gallery/IMG-20251013-WA0001.jpg",
    "/gallery/IMG-20260201-WA0085.jpg",
    "/gallery/IMG-20260201-WA0086.jpg",
];
const images4 = [
    "/gallery/IMG_20251018_213246112.jpg",
    "/gallery/img.png",
    "/gallery/20250814_140714.jpg",
    "/gallery/BELFORT.jpeg",
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
        <section ref={containerRef} className="pt-32 pb-32 bg-brand-yellow overflow-visible relative border-b-0 border-brand-dark z-30">
            {/* Top Wave (Yellow) */}
            <div className="absolute top-[-99px] left-0 w-full overflow-hidden leading-none z-20 transform scale-y-[-1]">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="w-[200%]"
                >
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] fill-brand-yellow">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                        <path d="M1521.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C2023.78,31,2106.67,72,2185.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H1200V27.35A600.21,600.21,0,0,0,1521.39,56.44Z"></path>
                    </svg>
                </motion.div>
            </div>
            <div className="absolute inset-0 bg-brand-yellow z-0" />

            <div className="relative z-30 text-center mb-16 px-4">
                <h2 className="font-display text-6xl md:text-8xl font-black text-black mb-4 uppercase tracking-tighter drop-shadow-white">
                    The <span className="text-white bg-black px-4 transform -rotate-2 inline-block shadow-[4px_4px_0_white]">Best</span> Times
                </h2>
                <p className="font-sans text-black font-bold text-xl uppercase tracking-wider">Cherished moments from 2025-2026</p>
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

                {/* Row 3 - Scroll Left */}
                <div className="flex w-[200%] gap-6">
                    <motion.div style={{ x: x1 }} className="flex gap-6 w-full">
                        {images3.concat(images3).concat(images3).map((src, i) => (
                            <div key={`row3-${i}`} className="h-48 md:h-64 aspect-[4/3] rounded-none border-4 border-black bg-white shrink-0 shadow-[8px_8px_0px_#000] hover:translate-y-[-4px] transition-transform duration-200">
                                <img src={src} alt="Memory" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 4 - Scroll Right */}
                <div className="flex w-[200%] gap-6">
                    <motion.div style={{ x: x2 }} className="flex gap-6 w-full">
                        {images4.concat(images4).concat(images4).map((src, i) => (
                            <div key={`row4-${i}`} className="h-48 md:h-64 aspect-[4/3] rounded-none border-4 border-black bg-white shrink-0 shadow-[8px_8px_0px_#000] hover:translate-y-[-4px] transition-transform duration-200">
                                <img src={src} alt="Memory" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Note: The bottom wave is handled by the Footer component now to match its background */}
        </section>
    );
}
