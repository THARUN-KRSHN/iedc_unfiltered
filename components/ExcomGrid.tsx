
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { excomMembers } from '@/lib/data';
import MemberModal from './MemberModal';
import { User, Sparkles } from 'lucide-react';

export default function ExcomGrid() {
    const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

    const selectedMember = excomMembers.find(m => m.id === selectedMemberId) || null;

    return (
        <section id="members" className="py-24 px-4 bg-brand-cream relative overflow-visible z-10">
            <div className="max-w-7xl mx-auto relative z-20">

                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="font-sans text-brand-dark/50 font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-2 block">
                        The Team
                    </span>
                    <h2 className="font-display text-6xl md:text-9xl font-black text-brand-dark uppercase tracking-tighter leading-none mb-6 relative inline-block">
                        Excom<span className="text-brand-blue">24-26</span>
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
                    {excomMembers.map((member, i) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.05, duration: 0.5, ease: "backOut" }}
                            onClick={() => setSelectedMemberId(member.id)}
                            className="group relative cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] transform transition-transform duration-300 group-hover:scale-105">
                                {/* Shadow Box */}
                                <div className="absolute inset-0 bg-brand-dark translate-x-3 translate-y-3 rounded-xl transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />

                                {/* Main Card */}
                                <div className="absolute inset-0 bg-white border-2 border-brand-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                                    {/* Image */}
                                    <div className="h-[80%] w-full relative border-b-2 border-brand-dark overflow-hidden bg-gray-100">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <User className="w-16 h-16 text-gray-300" />
                                            </div>
                                        )}

                                        {/* Role Badge */}
                                        <div className="absolute top-2 right-2 bg-brand-yellow text-brand-dark text-[10px] md:text-xs font-bold uppercase px-2 py-1 border border-brand-dark rounded-md z-10">
                                            {member.role}
                                        </div>

                                        {/* Hover Overlay Text */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-blue/20 backdrop-blur-[1px]">
                                            <span className="bg-white text-brand-dark font-display uppercase tracking-wider text-xl px-4 py-2 border-2 border-brand-dark transform -rotate-3 shadow-[4px_4px_0_#000]">
                                                View Profile
                                            </span>
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <div className="h-[20%] flex items-center justify-center p-2 bg-white group-hover:bg-brand-cream transition-colors duration-300">
                                        <h3 className="font-display text-xl uppercase leading-none text-center text-brand-dark group-hover:text-brand-blue transition-colors duration-300">{member.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <MemberModal
                isOpen={!!selectedMemberId}
                onClose={() => setSelectedMemberId(null)}
                member={selectedMember}
            />

            {/* Wave Transition (Yellow to match next section) */}
            <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none z-10">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-brand-yellow">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-brand-yellow"></path>
                </svg>
            </div>
        </section>
    );
}
