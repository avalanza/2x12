'use client';

import { Navbar } from '@/components/Navbar';
import { VideoPlayer } from '@/components/VideoPlayer';
import { VideoCard } from '@/components/VideoCard';
import { ThumbsUp, ThumbsDown, Share2, MoreHorizontal, Bell, MessageSquare, Heart } from 'lucide-react';
import { use, useState } from 'react';

// Mock Data
const SUGGESTED_VIDEOS = [
    {
        id: '1',
        title: 'The Last Android: Chapter 1',
        thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
        creator: 'Synthetic Dreams',
        views: '124K',
        duration: '12:45',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop'
    },
    {
        id: '2',
        title: 'Neon Tokyo Walkthrough (AI Generated)',
        thumbnail: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=600&auto=format&fit=crop',
        creator: 'CyberWalker',
        views: '89K',
        duration: '08:20',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop'
    },
    {
        id: '3',
        title: 'Abstract Fluid Dynamics Simulation',
        thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
        creator: 'Motion AI',
        views: '45K',
        duration: '04:15',
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop'
    },
];

const COMMENTS_DATA = [
    {
        id: 1,
        user: 'AI_Enthusiast_99',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100',
        content: 'The lighting in this is absolutely insane. Which model did you use for the reflections?',
        likes: 24,
        time: '2 hours ago'
    },
    {
        id: 2,
        user: 'FutureViewer',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
        content: 'This feels like a dream. The consistency is getting so much better.',
        likes: 12,
        time: '5 hours ago'
    }
];

export default function WatchPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [comments, setComments] = useState(COMMENTS_DATA);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        if (!newComment.trim()) return;

        const comment = {
            id: Date.now(),
            user: 'You',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100', // Mock current user
            content: newComment,
            likes: 0,
            time: 'Just now'
        };

        setComments([comment, ...comments]);
        setNewComment('');
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="pt-24 pb-12 px-4 md:px-8 max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content: Player & Info */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Video Player */}
                        <VideoPlayer
                            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                            poster="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
                        />

                        {/* Title & Actions */}
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold mb-3">The Last Android: Chapter 1</h1>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                {/* Creator Info */}
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" alt="Creator" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold hover:text-primary cursor-pointer transition-colors">Synthetic Dreams</h3>
                                        <p className="text-xs text-muted-foreground">12K subscribers</p>
                                    </div>
                                    <button className="ml-4 px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                                        <Bell className="w-4 h-4" /> Subscribe
                                    </button>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center rounded-full bg-secondary/50 overflow-hidden">
                                        <button className="px-4 py-2 hover:bg-white/10 flex items-center gap-2 border-r border-white/10 transition-colors">
                                            <ThumbsUp className="w-4 h-4" /> 1.2K
                                        </button>
                                        <button className="px-4 py-2 hover:bg-white/10 flex items-center gap-2 transition-colors">
                                            <ThumbsDown className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <button className="px-4 py-2 rounded-full bg-secondary/50 hover:bg-white/10 flex items-center gap-2 transition-colors">
                                        <Share2 className="w-4 h-4" /> Share
                                    </button>
                                    <button className="p-2 rounded-full bg-secondary/50 hover:bg-white/10 transition-colors">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Description Box */}
                        <div className="p-4 rounded-xl bg-secondary/30 hover:bg-secondary/40 transition-colors cursor-pointer">
                            <div className="flex items-center gap-2 text-sm font-medium mb-2">
                                <span>124K views</span>
                                <span>•</span>
                                <span>2 days ago</span>
                            </div>
                            <p className="text-sm text-balance">
                                In a world where humanity has uploaded their consciousness to the cloud, one android unit wakes up with no connection to the network. This is the first chapter of their journey through the silent city.
                                <br /><br />
                                Models used: Runway Gen-2, Midjourney v6 (Keyframes), ElevenLabs (Voice).
                            </p>
                        </div>

                        {/* Comments Section */}
                        <div className="pt-6">
                            <h3 className="text-xl font-bold mb-6">{comments.length} Comments</h3>

                            {/* Add Comment Input */}
                            <div className="flex gap-4 mb-8">
                                <div className="w-10 h-10 rounded-full bg-zinc-800 shrink-0 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="Add a comment..."
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
                                        className="w-full border-b border-white/10 bg-transparent py-2 outline-none focus:border-primary transition-colors"
                                    />
                                    <div className="flex justify-end gap-2 mt-2">
                                        <button
                                            onClick={() => setNewComment('')}
                                            className="px-4 py-2 rounded-full hover:bg-white/10 text-sm font-medium"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleAddComment}
                                            disabled={!newComment.trim()}
                                            className="px-4 py-2 rounded-full bg-primary/20 text-primary hover:bg-primary/30 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Comment
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Comment List */}
                            <div className="space-y-6">
                                {comments.map((comment) => (
                                    <div key={comment.id} className="flex gap-4 animate-fade-in-up">
                                        <div className="w-10 h-10 rounded-full bg-secondary shrink-0 overflow-hidden">
                                            <img src={comment.avatar} alt={comment.user} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-baseline gap-2 mb-1">
                                                <span className="font-semibold text-sm">@{comment.user}</span>
                                                <span className="text-xs text-muted-foreground">{comment.time}</span>
                                            </div>
                                            <p className="text-sm mb-2">{comment.content}</p>
                                            <div className="flex items-center gap-4">
                                                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-white transition-colors">
                                                    <ThumbsUp className="w-3 h-3" /> {comment.likes}
                                                </button>
                                                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-white transition-colors">
                                                    <ThumbsDown className="w-3 h-3" />
                                                </button>
                                                <button className="text-xs text-muted-foreground hover:text-white transition-colors font-medium">
                                                    Reply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar: Recommendations */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold">Up Next</h3>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-muted-foreground">Autoplay</span>
                                <div className="w-8 h-4 bg-primary/20 rounded-full relative cursor-pointer">
                                    <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-primary rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* List of Video Cards (Horizontal style for sidebar usually, but using regular VideoCard in vertical list works too) */}
                        <div className="space-y-4">
                            {SUGGESTED_VIDEOS.map((video) => (
                                <VideoCard key={video.id} video={video} />
                            ))}
                            {/* Duplicates to fill sidebar */}
                            {SUGGESTED_VIDEOS.map((video) => (
                                <VideoCard key={`dup-${video.id}`} video={{ ...video, id: `dup-${video.id}` }} />
                            ))}
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
