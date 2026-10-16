"use client"

import { useState } from 'react';
import { MessageSquare, Mic, X, Send, Sparkles } from 'lucide-react';

export function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVoiceMode, setIsVoiceMode] = useState(false);

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 shadow-2xl shadow-primary/40 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
            >
                <Sparkles className="w-6 h-6" />
            </button>

            {/* Assistant Window */}
            <div className={`fixed bottom-6 right-6 w-96 h-[500px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 z-50 ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}`}>

                {/* Header */}
                <div className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">Cortex AI</h3>
                            <div className="flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-xs text-muted-foreground">Online</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Content Area */}
                {isVoiceMode ? (
                    <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
                        {/* Ambient Glow */}
                        <div className="absolute inset-0 bg-blue-500/10 blur-3xl animate-pulse"></div>

                        <div className="relative z-10 text-center space-y-8">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30 animate-pulse">
                                <Mic className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Listening...</h3>
                                <p className="text-white/60 text-sm">"Show me adventure videos"</p>
                            </div>

                            {/* Visualizer bars */}
                            <div className="flex items-end justify-center gap-1 h-8">
                                {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((n, i) => (
                                    <div key={i} className="w-1.5 bg-white/50 rounded-full animate-bounce" style={{ height: `${n * 20}%`, animationDelay: `${i * 0.1}s` }}></div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => setIsVoiceMode(false)}
                            className="absolute bottom-6 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
                        >
                            Switch to Text
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Chat Area (Mock) */}
                        <div className="flex-1 p-6 overflow-y-auto space-y-4">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex-shrink-0 flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-white" />
                                </div>
                                <div className="bg-secondary/50 rounded-2xl rounded-tl-none p-3 text-sm leading-relaxed">
                                    Hello! I'm Cortex, your AI video assistant. I can help you find content, answer questions about videos, or provide creative inspiration. How can I help today?
                                </div>
                            </div>

                            <div className="flex gap-3 flex-row-reverse">
                                <div className="w-8 h-8 rounded-full bg-zinc-700 flex-shrink-0 flex items-center justify-center">
                                    <span className="text-xs font-bold">ME</span>
                                </div>
                                <div className="bg-primary/20 rounded-2xl rounded-tr-none p-3 text-sm leading-relaxed">
                                    Show me some cyberpunk city videos.
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex-shrink-0 flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-white" />
                                </div>
                                <div className="bg-secondary/50 rounded-2xl rounded-tl-none p-3 text-sm leading-relaxed">
                                    Here are some top-rated cyberpunk city videos for you:
                                    <div className="mt-2 space-y-2">
                                        <div className="flex items-center gap-2 p-2 rounded bg-black/20 hover:bg-black/40 cursor-pointer transition-colors">
                                            <div className="w-10 h-10 rounded bg-slate-800"></div>
                                            <div className="text-xs font-medium">Neon Tokyo Walkthrough</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/5 bg-white/5">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Ask anything..."
                                    className="w-full h-11 pl-4 pr-12 rounded-full bg-secondary/30 border border-white/5 focus:bg-secondary/50 focus:border-primary/30 outline-none transition-all text-sm"
                                />
                                <button className="absolute right-2 top-1.5 p-2 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors">
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="mt-3 flex justify-center">
                                <button
                                    onClick={() => setIsVoiceMode(true)}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-xs font-medium text-muted-foreground hover:text-foreground group"
                                >
                                    <div className="p-1.5 rounded-full bg-red-500/20 group-hover:bg-red-500 text-red-400 group-hover:text-white transition-colors">
                                        <Mic className="w-3 h-3" />
                                    </div>
                                    Tap to Speak
                                </button>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </>
    );
}
