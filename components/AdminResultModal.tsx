"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Clock } from 'lucide-react';
import { ExcomMember } from '@/lib/data';

interface AdminResultModalProps {
    isOpen: boolean;
    onClose: () => void;
    member: ExcomMember | null;
    confessions: Record<string, any>[];
    isLoading: boolean;
}

export default function AdminResultModal({ isOpen, onClose, member, confessions, isLoading }: AdminResultModalProps) {
    if (!isOpen || !member) return null;

    // For realistic whatsapp timestamp
    const formatTime = (dateString?: string) => {
        if (!dateString) return "12:00 PM";
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm cursor-pointer"
                    onClick={onClose}
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-6xl h-[85vh] bg-[#ECE5DD] border-4 border-brand-dark rounded-2xl shadow-[16px_16px_0_#000] overflow-hidden flex flex-col md:flex-row"
                >
                    {/* Close Button Mobile */}
                    <button
                        onClick={onClose}
                        className="md:hidden absolute top-4 right-4 z-[60] bg-white text-brand-dark p-2 rounded-full border-2 border-brand-dark shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Left Panel: Profile */}
                    <div className="w-full md:w-1/3 h-[30vh] md:h-full bg-brand-cream border-b-4 md:border-b-0 md:border-r-4 border-brand-dark flex flex-col relative z-20">
                        <div className="flex-1 overflow-y-auto no-scrollbar p-6 flex flex-col items-center justify-center relative">
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-brand-dark overflow-hidden bg-gray-100 shadow-[8px_8px_0_#000] mb-6 transform -rotate-3">
                                {member.image ? (
                                    /* eslint-disable-next-line @next/next/no-img-element */
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                        <User className="w-20 h-20 text-gray-400" />
                                    </div>
                                )}
                            </div>

                            <h2 className="font-display text-2xl md:text-3xl font-black text-brand-dark uppercase text-center leading-none mb-2">
                                {member.name}
                            </h2>
                            <span className="bg-brand-yellow font-sans font-bold text-brand-dark text-xs uppercase px-3 py-1 rounded-full border-2 border-brand-dark whitespace-nowrap">
                                {member.role}
                            </span>
                        </div>
                    </div>

                    {/* Right Panel: Chat Interface */}
                    <div className="w-full md:w-2/3 h-[55vh] md:h-full flex flex-col bg-[#efeae2] relative z-10 pattern-dots pattern-brand-dark pattern-bg-transparent pattern-size-4 pattern-opacity-5">
                        {/* Chat Header */}
                        <div className="bg-[#f0f2f5] px-4 py-3 border-b border-gray-300 flex items-center justify-between z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 border border-gray-400 flex items-center justify-center">
                                    {member.image ? (
                                        /* eslint-disable-next-line @next/next/no-img-element */
                                        <img src={member.image} alt="avatar" className="w-full h-full object-cover" />
                                    ) : (
                                        <User className="w-6 h-6 text-gray-500" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-sans font-bold text-gray-900 leading-tight">Anonymous</h3>
                                    <p className="text-xs text-gray-500">online</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="hidden md:flex bg-white text-brand-dark p-2 rounded-full border-2 border-brand-dark shadow-[2px_2px_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
                            {isLoading ? (
                                // Skeleton Loaders for Messages
                                <div className="space-y-4 w-full flex flex-col">
                                    <div className="bg-white p-3 rounded-tr-xl rounded-b-xl rounded-tl-sm w-2/3 shadow-sm border border-gray-200 self-start animate-pulse h-16" />
                                    <div className="bg-[#d9fdd3] p-3 rounded-tl-xl rounded-b-xl rounded-tr-sm w-3/4 shadow-sm border border-[#c3eca2] self-end animate-pulse h-24" />
                                    <div className="bg-white p-3 rounded-tr-xl rounded-b-xl rounded-tl-sm w-1/2 shadow-sm border border-gray-200 self-start animate-pulse h-12" />
                                </div>
                            ) : confessions.length === 0 ? (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="bg-[#ffeebb]/80 text-[#54656f] text-sm px-4 py-2 rounded-lg text-center shadow-sm">
                                        No messages securely encrypted yet.
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="flex justify-center mb-6 mt-2">
                                        <span className="bg-[#e1f3fb] text-[#54656f] text-xs px-3 py-1 rounded-lg uppercase tracking-wider shadow-sm">
                                            TODAY
                                        </span>
                                    </div>
                                    <div className="flex justify-center mb-6">
                                        <span className="bg-[#ffeebb]/80 text-[#54656f] text-xs px-4 py-2 rounded-lg text-center shadow-sm max-w-[80%] flex items-center gap-2">
                                            <Clock className="w-3 h-3" />
                                            Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.
                                        </span>
                                    </div>

                                    {confessions.map((confession, idx) => {
                                        // Alternate sides playfully, but generally confessions come from "Anonymous" (left side)
                                        // Let's assume all confessions are from anonymous users sending to Excom.
                                        // So they all appear on the Left Side.

                                        return (
                                            <div key={idx} className="flex flex-col w-full">
                                                <div className="relative group self-start max-w-[85%] md:max-w-[70%]">
                                                    <div className="bg-white px-3 pb-2 pt-2 rounded-lg rounded-tl-none shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] border border-gray-200 flex flex-col relative z-10 overflow-hidden">
                                                        {/* Optional tiny top corner triangle to mimic whatsapp tail */}
                                                        <div className="absolute top-0 -left-2 w-0 h-0 border-t-8 border-t-white border-l-8 border-l-transparent" />

                                                        <p className="font-sans text-[#111b21] text-sm md:text-base leading-relaxed whitespace-pre-wrap font-medium pb-[10px] break-words">
                                                            {confession.message}
                                                        </p>

                                                        <div className="self-end flex items-center gap-1 -mt-2 float-right ml-4">
                                                            <span className="text-[#667781] text-[10px]">
                                                                {formatTime(confession.created_at)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </>
                            )}
                        </div>

                        {/* Chat Footer Mock */}
                        <div className="bg-[#f0f2f5] px-4 py-3 flex items-center gap-3">
                            <div className="flex-1 bg-white rounded-lg px-4 py-2 text-gray-400 text-sm font-sans flex items-center">
                                Reply is disabled for confessions...
                            </div>
                            <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center shadow-sm opacity-50 cursor-not-allowed">
                                <svg viewBox="0 0 24 24" width="20" height="20" className="text-white fill-current ml-1">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
