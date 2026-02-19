
'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    const scrollToInstructions = () => {
        const section = document.getElementById('instructions');
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 md:px-8 relative overflow-hidden bg-brand-yellow text-brand-dark pt-20 sticky top-0 z-0">

            {/* Decorative Rotating SVG Blobs */}
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-100px] left-[-100px] text-white/30 w-[400px] h-[400px] pointer-events-none"
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M47.7,-60.9C60.9,-54.6,70.3,-40.8,75.4,-25.8C80.5,-10.8,81.4,5.4,76.5,19.3C71.6,33.2,60.9,44.8,49.2,54.1C37.5,63.4,24.8,70.4,10.6,73.1C-3.6,75.8,-19.3,74.2,-33.5,67.6C-47.7,60.9,-60.4,49.2,-68.8,35.5C-77.2,21.8,-81.3,6.1,-78.9,-8.1C-76.5,-22.3,-67.6,-35,-56.3,-42.6C-45,-50.2,-31.2,-52.7,-18.2,-55.8C-5.2,-58.9,7.1,-62.6,20.6,-66.3C34.1,-70,47.7,-60.9,47.7,-60.9Z" transform="translate(100 100)" />
                </svg>
            </motion.div>
            <motion.div
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[20%] right-[-150px] text-brand-orange/40 w-[500px] h-[500px] pointer-events-none"
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,72.1,35.6C62,48.1,53.1,59.4,42,66.5C30.9,73.6,17.6,76.5,3.6,78.2C-10.4,79.9,-25.1,80.4,-38.3,74.9C-51.5,69.4,-63.2,57.9,-71.4,44.9C-79.6,31.9,-84.3,17.4,-82.9,3.5C-81.5,-10.4,-74,-23.7,-65.4,-35.9C-56.8,-48.1,-47.1,-59.2,-35.6,-67.2C-24.1,-75.2,-10.8,-80.1,2.9,-83.5C16.6,-86.9,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="relative z-10 w-full max-w-5xl"
            >
                <span className="inline-block bg-brand-blue/10 text-brand-blue font-bold tracking-[0.2em] uppercase mb-6 px-4 py-2 rounded-full text-xs md:text-sm border border-brand-blue/20">
                    Anonymous Feedback Space
                </span>
                <h1 className="font-display font-black text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] tracking-tight mb-2 leading-[0.9] text-brand-dark uppercase drop-shadow-sm mix-blend-multiply">
                    <span className="block transform -rotate-2">Excom</span>
                    <span className="block text-white text-stroke-black  transform rotate-1 mt-2 md:mt-4">Unfiltered</span>
                </h1>


                <p className="max-w-2xl mx-auto text-xl md:text-2xl font-medium text-brand-dark/80 leading-relaxed font-sans px-4">
                    A purely anonymous space to share appreciation, memes, and feedback for the <span className="text-yellow-500 bg-brand-blue px-2 py-1 transform -skew-x-6 inline-block">
                        IEDC Excom 2024-26
                    </span>

                </p>
            </motion.div>

            {/* Scroll Indicator Removed */}


        </section>
    );
}
