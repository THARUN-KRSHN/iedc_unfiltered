'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Circle, Square, Box, Hexagon, Triangle } from 'lucide-react';
import { useRef } from 'react';

const MarqueeRow = ({ text, direction, speed, color, icons }: any) => {
    return (
        <div className="flex overflow-hidden whitespace-nowrap py-4 md:py-8 border-y border-white/10 relative">
            <motion.div
                className={`flex items-center gap-12 ${color} font-display font-black text-6xl md:text-8xl uppercase tracking-tighter`}
                animate={{
                    x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"]
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity
                }}
            >
                {/* Repeat content multiple times to ensure smooth loop */}
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex items-center gap-12 shrink-0">
                        <span>{text}</span>
                        {icons[i % icons.length]}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function Instructions() {
    return (
        <section id="instructions" className="py-20 bg-brand-blue relative overflow-visible z-10 sticky top-0 min-h-screen flex flex-col justify-center">
            {/* Top Wave stuck to the top of this section to cover previous section */}
            <div className="absolute top-[-79px] left-0 w-full overflow-hidden leading-none z-20 transform scale-y-[-1]">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="w-[200%]"
                >
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-brand-blue">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                        <path d="M1521.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C2023.78,31,2106.67,72,2185.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H1200V27.35A600.21,600.21,0,0,0,1521.39,56.44Z"></path>
                    </svg>
                </motion.div>
            </div>
            {/* Background Texture/Noise could go here */}

            <div className="flex flex-col gap-0">
                <MarqueeRow
                    text="100% Anonymous"
                    direction="right"
                    speed={30}
                    color="text-white"
                    icons={[
                        <Star key="1" className="w-12 h-12 text-brand-yellow fill-brand-yellow" />,
                        <Circle key="2" className="w-12 h-12 text-brand-orange fill-brand-orange" />
                    ]}
                />

                <MarqueeRow
                    text="Express Freely"
                    direction="left"
                    speed={25}
                    color="text-brand-yellow"
                    icons={[
                        <Square key="1" className="w-12 h-12 text-white fill-white transform rotate-12" />,
                        <Box key="2" className="w-12 h-12 text-brand-red stroke-[3]" />
                    ]}
                />

                <MarqueeRow
                    text="Be Respectful"
                    direction="right"
                    speed={35}
                    color="text-white"
                    icons={[
                        <Hexagon key="1" className="w-12 h-12 text-brand-yellow fill-brand-yellow" />,
                        <Triangle key="2" className="w-12 h-12 text-blue-400 fill-blue-400 transform rotate-180" />
                    ]}
                />

                <MarqueeRow
                    text="Forever Archived"
                    direction="left"
                    speed={28}
                    color="text-brand-orange"
                    icons={[
                        <Star key="1" className="w-12 h-12 text-white fill-white" />,
                        <Circle key="2" className="w-12 h-12 text-brand-yellow fill-brand-yellow" />
                    ]}
                />
            </div>

            {/* Floating Decorative Elements specifically requested */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none mix-blend-overlay opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}
