"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { excomMembers } from '@/lib/data';
import { User, MessageCircle } from 'lucide-react';
import AdminResultModal from './AdminResultModal';

export default function AdminExcomGrid() {
    const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
    const [confessions, setConfessions] = useState<Record<string, any>[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchConfessions() {
            try {
                const res = await fetch('/api/confessions');
                if (res.ok) {
                    const data = await res.json();
                    setConfessions(data);
                } else {
                    console.error("Failed to fetch");
                }
            } catch (err) {
                console.error("Error:", err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchConfessions();
    }, []);

    // Group confessions by member name
    const groupedConfessions = confessions.reduce((acc: Record<string, Record<string, any>[]>, curr) => {
        const name = String(curr.member_name || '').toLowerCase().trim();
        if (!acc[name]) acc[name] = [];
        acc[name].push(curr);
        return acc;
    }, {});

    const selectedMember = excomMembers.find(m => m.id === selectedMemberId) || null;
    const selectedMemberConfessions = selectedMember
        ? groupedConfessions[selectedMember.name.toLowerCase().trim()] || []
        : [];

    return (
        <div className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-16">
                {excomMembers.map((member, i) => {
                    const memberConfessions = groupedConfessions[member.name.toLowerCase().trim()] || [];
                    const count = memberConfessions.length;

                    return (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.5, ease: "backOut" }}
                            onClick={() => setSelectedMemberId(member.id)}
                            className="group relative cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] transform transition-transform duration-300 group-hover:scale-105">
                                <div className="absolute inset-0 bg-brand-dark translate-x-3 translate-y-3 rounded-xl transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />

                                <div className="absolute inset-0 bg-white border-2 border-brand-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                                    <div className="h-[80%] w-full relative border-b-2 border-brand-dark overflow-hidden bg-gray-100">
                                        {member.image ? (
                                            /* eslint-disable-next-line @next/next/no-img-element */
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

                                        {/* Status Badge */}
                                        <div className="absolute top-2 right-2 z-10">
                                            {isLoading ? (
                                                <div className="h-6 w-16 bg-gray-300 animate-pulse rounded-full border border-brand-dark" />
                                            ) : (
                                                <div className="flex items-center gap-1 bg-brand-yellow text-brand-dark text-xs font-bold uppercase px-2 py-1 border border-brand-dark rounded-full shadow-[2px_2px_0_#000]">
                                                    <MessageCircle className="w-3 h-3" />
                                                    <span>{count}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-blue/20 backdrop-blur-[1px]">
                                            <span className="bg-white text-brand-dark font-display uppercase tracking-wider text-sm md:text-xl px-2 md:px-4 py-1 md:py-2 border-2 border-brand-dark transform -rotate-3 shadow-[4px_4px_0_#000]">
                                                View Responses
                                            </span>
                                        </div>
                                    </div>

                                    <div className="h-[20%] flex items-center justify-center p-1 md:p-2 bg-white group-hover:bg-brand-cream transition-colors duration-300">
                                        <h3 className="font-display text-base md:text-xl uppercase leading-none text-center text-brand-dark group-hover:text-brand-blue transition-colors duration-300 line-clamp-2 md:line-clamp-none">{member.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <AdminResultModal
                isOpen={!!selectedMemberId}
                onClose={() => setSelectedMemberId(null)}
                member={selectedMember}
                confessions={selectedMemberConfessions}
                isLoading={isLoading}
            />
        </div>
    );
}
