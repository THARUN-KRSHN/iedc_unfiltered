'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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

const POSTER_POSITIONS = [
    { left: '15%', top: '5%', rotate: -5 },
    { right: '15%', top: '15%', rotate: 8 },
    { left: '22%', top: '25%', rotate: -12 },
    { right: '22%', top: '35%', rotate: 6 },
    { left: '18%', top: '45%', rotate: -8 },
    { right: '18%', top: '55%', rotate: 10 },
    { left: '25%', top: '65%', rotate: -6 },
    { right: '25%', top: '75%', rotate: 12 },
    { left: '12%', top: '85%', rotate: -15 },
    { right: '12%', top: '88%', rotate: 14 },
];

function PosterImage({ src, pos }: { src: string, pos: any }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 95%', 'start 60%']
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                opacity,
                y,
                scale,
                rotate: pos.rotate,
                left: pos.left,
                right: pos.right,
                top: pos.top,
            }}
            className="absolute w-36 md:w-56 lg:w-72 aspect-[3/4] z-0 overflow-hidden rounded-xl md:rounded-3xl shadow-2xl pointer-events-none"
        >
            <Image
                src={src}
                alt="Poster"
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

    const text = "IEDC CCE 2024-2026 was the era that redefined innovation on campus. We sparked ideas, fueled startups and built a legacy.";
    const words = text.split(" ");

    return (
        <section ref={containerRef} className="bg-brand-cream relative z-10 w-full h-[300vh] md:h-[400vh]">
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

            {/* Sticky Container for the Text Content */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] uppercase tracking-tighter text-black flex flex-wrap justify-center gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-2 md:gap-y-4 relative z-20 pointer-events-none">
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
                                className={`${highlightClass} inline-block`}
                            >
                                {word}
                            </motion.span>
                        );
                    })}
                </div>
            </div>

            {/* Posters rendered directly in the section so they scroll naturally with section */}
            <div className="absolute top-0 w-full h-full pointer-events-none z-10">
                {POSTERS.map((src, i) => (
                    <PosterImage
                        key={i}
                        src={src}
                        pos={POSTER_POSITIONS[i % POSTER_POSITIONS.length]}
                    />
                ))}
            </div>
        </section>
    );
}
