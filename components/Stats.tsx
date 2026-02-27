'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const POSTERS = [
    "/posters/BELFORT (1).jpeg",
    "/posters/IMG-20250803-WA0019 (1).jpg",
    "/posters/IMG-20250903-WA0045(1) (1).jpg",
    "/posters/IMG-20250911-WA0035 (1).jpg",
    "/posters/IMG-20251005-WA0043.jpg",
    "/posters/IMG-20260201-WA0085 (1).jpg",
    "/posters/IMG-20260201-WA0086 (1).jpg",
    "/posters/WhatsApp Image 2026-02-21 at 5.34.41 PM.jpeg",
    "/posters/WhatsApp Image 2026-02-21 at 9.16.50 AM.jpeg",
    "/posters/img (1).png"
];

function PosterImage({ src, index, total }: { src: string, index: number, total: number }) {
    const isEven = index % 2 === 0;

    // Calculate start and end offsets for this specific image
    // Leaves some padding at the start and end of the scroll area
    const startRange = 0.1 + (index * (0.8 / total));
    const endRange = startRange + (1.2 / total);

    const { scrollYProgress } = useScroll();

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Opacity: Fade in quickly at startRange, fade out at endRange
    const opacity = useTransform(
        smoothProgress,
        [
            startRange - 0.05,
            startRange,
            endRange - 0.05,
            endRange
        ],
        [0, 1, 1, 0]
    );

    // X Translation: Move from off-screen left/right to off-screen right/left
    const xMovement = isEven
        ? ["-150vw", "0vw", "150vw"] // Left -> Center -> Right
        : ["150vw", "0vw", "-150vw"]; // Right -> Center -> Left

    const x = useTransform(
        smoothProgress,
        [startRange - 0.1, startRange + (endRange - startRange) / 2, endRange + 0.1],
        xMovement
    );

    // Dynamic rotation to make it feel more organic
    const rotate = useTransform(
        smoothProgress,
        [startRange, endRange],
        isEven ? [-20, 20] : [20, -20]
    );

    // Slight scale effect at the center
    const scale = useTransform(
        smoothProgress,
        [startRange, startRange + (endRange - startRange) / 2, endRange],
        [0.6, 1.1, 0.6]
    );

    return (
        <motion.div
            style={{
                opacity,
                x,
                rotate,
                scale,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 lg:w-80 aspect-[3/4] z-10 overflow-hidden rounded-xl md:rounded-3xl shadow-[20px_20px_0px_#000] border-4 border-black pointer-events-none"
        >
            <Image
                src={src}
                alt={`Highlight ${index}`}
                fill
                className="object-cover"
            />
        </motion.div>
    );
}

export default function Stats() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const text = "IEDC CCE 2025-2026 was the era that redefined innovation on campus. We sparked ideas, fueled startups and built a legacy.";
    const words = text.split(" ");

    return (
        <section ref={containerRef} className="bg-brand-cream relative z-10 w-full h-[500vh]">
            {/* Top Wave stuck to the absolute top of the section */}
            <div className="absolute top-[-79px] left-0 w-full overflow-hidden leading-none z-20 transform scale-y-[-1]">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="w-[200%]"
                >
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-brand-cream">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                        <path d="M1521.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C2023.78,31,2106.67,72,2185.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H1200V27.35A600.21,600.21,0,0,0,1521.39,56.44Z"></path>
                    </svg>
                </motion.div>
            </div>

            {/* Sticky Container for the Text Content and Images */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                
                {/* Background Text */}
                <div className="max-w-7xl mx-auto px-6 text-center font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] uppercase tracking-tighter text-black flex flex-wrap justify-center gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-2 md:gap-y-4 relative z-0 pointer-events-none opacity-20">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(scrollYProgress, [start * 0.8, end * 0.8], [0.2, 1]);

                        let highlightClass = "";
                        if (word === "redefined" || word === "innovation") {
                            highlightClass = "bg-brand-orange text-white px-3 md:px-5 rounded-full transform -rotate-2 inline-block z-10 border-[3px] md:border-[6px] border-black relative -translate-y-2";
                        } else if (word === "fueled" || word === "startups") {
                            highlightClass = "bg-brand-blue text-white px-3 md:px-5 rounded-full transform rotate-1 inline-block z-10 border-[3px] md:border-[6px] border-black relative";
                        } else if (word === "built" || word === "legacy.") {
                            highlightClass = "bg-[#E1306C] text-white px-3 md:px-5 rounded-full transform -rotate-1 inline-block z-10 border-[3px] md:border-[6px] border-black relative -translate-y-1";
                        }

                        return (
                            <motion.span
                                key={i}
                                style={{ opacity }}
                                className={`${highlightClass} inline-block filter grayscale`}
                            >
                                {word}
                            </motion.span>
                        );
                    })}
                </div>

                {/* Flowing Images overlaid on top of the sticky container */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {POSTERS.map((src, i) => (
                        <PosterImage
                            key={i}
                            src={src}
                            index={i}
                            total={POSTERS.length}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
