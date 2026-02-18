
'use client';
import { motion } from 'framer-motion';
import { Shield, Send, Heart, Archive } from 'lucide-react';

const steps = [
    {
        icon: Shield,
        title: "100% Anonymous",
        desc: "Your identity is hidden. No login needed, no IP tracking.",
        align: "left",
        color: "bg-blue-100 text-blue-800"
    },
    {
        icon: Send,
        title: "Express Freely",
        desc: "Share appreciation, suggestions, or fun confessions without hesitation.",
        align: "right",
        color: "bg-orange-100 text-orange-800"
    },
    {
        icon: Heart,
        title: "Be Respectful",
        desc: "Keep it constructive and kind. Create good memories.",
        align: "left",
        color: "bg-red-100 text-red-800"
    },
    {
        icon: Archive,
        title: "Forever Archived",
        desc: "Your messages will be preserved in the farewell archive provided to the Excom.",
        align: "right",
        color: "bg-green-100 text-green-800"
    }
];

export default function Instructions() {
    return (
        <section id="instructions" className="py-24 px-4 bg-brand-cream relative z-10 overflow-hidden">

            {/* Decorative Wavy Lines */}
            <div className="absolute top-10 right-[-100px] w-full h-[500px] pointer-events-none opacity-10">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-none stroke-black stroke-[0.5]">
                    <path d="M0 50 Q 25 25 50 50 T 100 50" />
                    <path d="M0 60 Q 25 35 50 60 T 100 60" />
                    <path d="M0 70 Q 25 45 50 70 T 100 70" />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto w-full space-y-16 md:space-y-32">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: step.align === 'left' ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={`flex flex-col md:flex-row items-center gap-8 ${step.align === 'right' ? 'md:flex-row-reverse text-center md:text-right' : 'text-center md:text-left'
                            }`}
                    >
                        <div className={`flex-shrink-0 p-6 md:p-8 rounded-full border-4 border-brand-dark shadow-[8px_8px_0_rgba(0,0,0,1)] bg-white transform hover:rotate-6 transition-transform duration-300 relative z-10`}>
                            <step.icon className={`w-12 h-12 md:w-16 md:h-16 stroke-[1.5] ${step.color.split(' ')[1]}`} />
                        </div>

                        <div className="flex-1 relative z-10 bg-white p-6 md:p-10 rounded-2xl border-2 border-brand-dark shadow-[4px_4px_0_rgba(0,0,0,0.1)]">
                            <h3 className="font-display text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase text-brand-dark">{step.title}</h3>
                            <p className="font-sans text-brand-dark/80 text-lg md:text-xl font-medium leading-relaxed">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Wavy Bottom Divider */}
            <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] fill-brand-cream transform rotate-180">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-brand-dark"></path>
                </svg>
            </div>
        </section>
    );
}
