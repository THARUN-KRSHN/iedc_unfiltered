'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Stats() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 60%', 'end 80%']
    });

    const text = "IEDC CCE 2024-2026 was the era that redefined innovation on campus. We sparked ideas, fueled startups and built a legacy.";
    const words = text.split(" ");

    return (
        <section className="bg-brand-cream relative z-10 overflow-visible py-32 md:py-48 flex items-center justify-center min-h-screen">
            {/* Top Wave stuck to the top of this section to cover previous section (brand-blue) */}
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

            <div ref={containerRef} className="max-w-5xl mx-auto px-6 text-center font-display font-black text-5xl md:text-8xl leading-[1.1] uppercase tracking-tighter text-black flex flex-wrap justify-center gap-x-3 md:gap-x-6 gap-y-2 md:gap-y-4">
                {words.map((word, i) => {
                    // Calculate the progress range for this specific word
                    const start = i / words.length;
                    const end = start + (1 / words.length);
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

                    let highlightClass = "";
                    if (word === "redefined" || word === "innovation") {
                        highlightClass = "bg-brand-orange text-white px-3 md:px-5 rounded-full transform -rotate-2 inline-block z-10 border-4 border-black relative -translate-y-2";
                    } else if (word === "fueled" || word === "startups") {
                        highlightClass = "bg-brand-blue text-white px-3 md:px-5 rounded-full transform rotate-1 inline-block z-10 border-4 border-black relative";
                    } else if (word === "built" || word === "legacy.") {
                        highlightClass = "bg-[#E1306C] text-white px-3 md:px-5 rounded-full transform -rotate-1 inline-block z-10 border-4 border-black relative -translate-y-1";
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
        </section>
    );
}
