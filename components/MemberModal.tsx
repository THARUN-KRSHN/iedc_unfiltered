
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, SendHorizontal, CheckCircle2, User } from 'lucide-react';
import type { ExcomMember } from '@/lib/data';
import { submitMessage } from '@/lib/api';

interface MemberModalProps {
    isOpen: boolean;
    onClose: () => void;
    member: ExcomMember | null;
}

export default function MemberModal({ isOpen, onClose, member }: MemberModalProps) {
    const [view, setView] = useState<'details' | 'form' | 'success' | 'submitting'>('details');
    const [message, setMessage] = useState('');

    // Reset state when modal opens/closes
    useEffect(() => {
        if (isOpen) {
            setView('details');
            setMessage('');
        }
    }, [isOpen, member]);

    if (!member) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        setView('submitting');
        const success = await submitMessage(member.name, message);

        if (success) {
            setView('success');
            setTimeout(() => {
                onClose();
            }, 3000);
        } else {
            // Handle error (maybe show persistent error or just stay on form)
            alert("Failed to send. Please try again. If the issue persists, contact admin.");
            setView('form');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm cursor-pointer"
                    />

                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 100 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 100 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-brand-cream border-4 border-black w-full max-w-lg md:max-w-2xl max-h-[90vh] overflow-hidden rounded-[2rem] shadow-[20px_20px_0px_#000] relative pointer-events-auto flex flex-col"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-3 rounded-full bg-white border-2 border-black hover:bg-red-500 hover:text-white transition-colors z-20 shadow-[4px_4px_0px_#000]"
                            >
                                <X size={24} strokeWidth={3} />
                            </button>

                            <div className="relative h-64 md:h-80 w-full bg-brand-orange flex items-center justify-center overflow-hidden shrink-0 border-b-4 border-black">
                                {member.image ? (
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-brand-yellow flex items-center justify-center pattern-isometric">
                                        <User className="w-32 h-32 text-black/20" />
                                    </div>
                                )}
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent z-10">
                                    <h2 className="font-display text-5xl md:text-6xl font-black text-white uppercase mb-1 drop-shadow-lg">{member.name}</h2>
                                    <p className="font-sans text-brand-yellow font-bold uppercase tracking-widest text-sm bg-black inline-block px-3 py-1 rounded-full border border-white/20">{member.role}</p>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex-1 overflow-y-auto custom-scrollbar bg-brand-cream">
                                <AnimatePresence mode="wait">
                                    {view === 'details' && (
                                        <motion.div
                                            key="details"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="space-y-8"
                                        >
                                            <div>
                                                <h4 className="font-display text-2xl uppercase font-bold text-black mb-4 border-b-4 border-brand-yellow inline-block">Responsibilities</h4>
                                                <ul className="space-y-4">
                                                    {member.responsibilities.map((r, i) => (
                                                        <li key={i} className="flex gap-4 text-base md:text-lg items-start font-medium text-gray-800">
                                                            <span className="mt-1.5 w-3 h-3 rounded-none bg-black shrink-0 relative top-1 transform rotate-45" />
                                                            <span className="leading-snug">{r}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="pt-4 sticky bottom-0 bg-brand-cream pb-2">
                                                <button
                                                    onClick={() => setView('form')}
                                                    className="w-full py-4 rounded-xl bg-brand-dark text-white font-bold text-xl uppercase tracking-wider hover:bg-brand-blue transition-colors flex items-center justify-center gap-2 group shadow-[6px_6px_0px_#9CA3AF] active:translate-y-1 active:shadow-none border-2 border-black"
                                                >
                                                    <span>Drop a Message</span>
                                                    <SendHorizontal className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {view === 'form' && (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            onSubmit={handleSubmit}
                                            className="flex flex-col h-full"
                                        >
                                            <h3 className="font-display text-3xl font-black mb-2 text-black uppercase">Speak your mind</h3>
                                            <p className="text-gray-600 font-medium mb-6">Don't worry, it's completely anonymous.</p>

                                            <textarea
                                                required
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Write your appreciation, suggestions, feedback, memories or fun confessions here..."
                                                className="w-full h-48 p-4 rounded-xl bg-white border-2 border-black text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 resize-none mb-6 text-lg font-medium shadow-[4px_4px_0px_rgba(0,0,0,0.1)]"
                                            />
                                            <div className="flex gap-4 mt-auto">
                                                <button
                                                    type="button"
                                                    onClick={() => setView('details')}
                                                    className="px-6 py-3 rounded-xl bg-white border-2 border-black text-black hover:bg-gray-100 transition-colors font-bold shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-none"
                                                >
                                                    BACK
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="flex-1 py-3 rounded-xl bg-brand-yellow border-2 border-black text-black font-black uppercase tracking-wider hover:bg-brand-orange transition-colors shadow-[6px_6px_0px_#000] active:translate-y-1 active:shadow-none flex items-center justify-center gap-2"
                                                >
                                                    Send Anonymously
                                                    <SendHorizontal className="w-5 h-5" strokeWidth={3} />
                                                </button>
                                            </div>
                                        </motion.form>
                                    )}

                                    {view === 'submitting' && (
                                        <motion.div
                                            key="submitting"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex flex-col items-center justify-center py-12 space-y-6 h-full min-h-[300px]"
                                        >
                                            <div className="relative">
                                                <div className="w-16 h-16 border-8 border-gray-200 rounded-full" />
                                                <div className="absolute top-0 left-0 w-16 h-16 border-8 border-brand-yellow border-t-transparent rounded-full animate-spin" />
                                            </div>
                                            <p className="text-black font-bold text-xl uppercase tracking-widest animate-pulse">Encrypting...</p>
                                        </motion.div>
                                    )}

                                    {view === 'success' && (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col items-center justify-center py-12 space-y-6 text-center h-full min-h-[300px]"
                                        >
                                            <div className="w-24 h-24 rounded-full bg-green-100 border-4 border-green-500 flex items-center justify-center text-green-600 mb-4 shadow-[8px_8px_0px_#000]">
                                                <CheckCircle2 size={48} strokeWidth={3} />
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="font-display text-4xl font-black text-black uppercase">Sent!</h3>
                                                <p className="text-gray-600 font-medium text-lg max-w-xs mx-auto">Your message is now in the secret vault.</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
