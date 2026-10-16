'use client';

import { Play, Pause, Volume2, VolumeX, Maximize, Settings } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
    src: string;
    poster?: string;
    autoPlay?: boolean;
}

export function VideoPlayer({ src, poster, autoPlay = false }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(true);

    useEffect(() => {
        if (autoPlay && videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay was prevented
                setIsPlaying(false);
            });
        }
    }, [autoPlay]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const current = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            setProgress((current / duration) * 100);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (videoRef.current) {
            const time = (value / 100) * videoRef.current.duration;
            videoRef.current.currentTime = time;
            setProgress(value);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div
            className="relative group aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => isPlaying && setShowControls(false)}
        >
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className="w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                onEnded={() => setIsPlaying(false)}
            />

            {/* Controls Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-4 ${showControls || !isPlaying ? 'opacity-100' : ''}`}>

                {/* Progress Bar */}
                <div className="mb-4 relative group/progress">
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-primary relative" style={{ width: `${progress}%` }}></div>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleSeek}
                        className="absolute inset-0 w-full opacity-0 cursor-pointer"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={togglePlay} className="text-white hover:text-primary transition-colors">
                            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                        </button>

                        <div className="flex items-center gap-2 group/volume">
                            <button onClick={toggleMute} className="text-white hover:text-primary transition-colors">
                                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>
                            <div className="w-0 overflow-hidden group-hover/volume:w-20 transition-all duration-300">
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    value={isMuted ? 0 : volume}
                                    onChange={(e) => {
                                        const val = parseFloat(e.target.value);
                                        setVolume(val);
                                        if (videoRef.current) videoRef.current.volume = val;
                                        setIsMuted(val === 0);
                                    }}
                                    className="w-20 h-1 accent-primary"
                                />
                            </div>
                        </div>

                        <div className="text-xs font-medium text-white/80">
                            {videoRef.current && !isNaN(videoRef.current.currentTime)
                                ? new Date(videoRef.current.currentTime * 1000).toISOString().substr(14, 5)
                                : "00:00"}
                            <span className="mx-1">/</span>
                            {videoRef.current && !isNaN(videoRef.current.duration)
                                ? new Date(videoRef.current.duration * 1000).toISOString().substr(14, 5)
                                : "00:00"}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-white/80 hover:text-white transition-colors">
                            <Settings className="w-5 h-5" />
                        </button>
                        <button className="text-white/80 hover:text-white transition-colors">
                            <Maximize className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Center Play Button (Initial State) */}
            {!isPlaying && (
                <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center pointer-events-auto cursor-pointer hover:scale-110 transition-transform" onClick={togglePlay}>
                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                    </div>
                </div>
            )}
        </div>
    );
}
