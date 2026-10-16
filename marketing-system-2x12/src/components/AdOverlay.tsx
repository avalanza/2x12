'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Volume2, VolumeX, X } from 'lucide-react';

interface AdOverlayProps {
    onComplete: () => void;
}

export function AdOverlay({ onComplete }: AdOverlayProps) {
    const [timeLeft, setTimeLeft] = useState(5);
    const [canSkip, setCanSkip] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setCanSkip(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-50 bg-black flex flex-col justify-between p-6">
            {/* Top Bar */}
            <div className="flex justify-between items-start">
                <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                    AD
                </div>
                <div className="text-white/80 text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    Sponsored • Cosmic Cola
                </div>
            </div>

            {/* Ad Content (Simulated) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <h2 className="text-6xl font-bold -rotate-12 bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
                    TASTE THE GALAXY
                </h2>
            </div>

            {/* Bottom Controls */}
            <div className="flex justify-between items-end relative z-10">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-105 transition-all backdrop-blur-md border border-white/10 group">
                    <ExternalLink className="w-5 h-5 text-yellow-400" />
                    <div>
                        <div className="text-xs text-white/60 font-medium">Visit Site</div>
                        <div className="text-sm font-bold text-white">cosmic-cola.io</div>
                    </div>
                </button>

                <button
                    onClick={() => canSkip && onComplete()}
                    disabled={!canSkip}
                    className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${canSkip
                        ? 'bg-white text-black hover:bg-gray-200 cursor-pointer shadow-xl'
                        : 'bg-black/50 text-white/50 cursor-default border border-white/10'}`}
                >
                    {canSkip ? (
                        <>Skip Ad <X className="w-4 h-4" /></>
                    ) : (
                        `Skip in ${timeLeft}s`
                    )}
                </button>
            </div>
        </div>
    );
}
