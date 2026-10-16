import Link from 'next/link';
import { LayoutDashboard, Video, BarChart2, Settings, Upload, Play, DollarSign } from 'lucide-react';

export function StudioSidebar() {
    return (
        <aside className="w-64 fixed left-0 top-0 bottom-0 bg-secondary/20 border-r border-white/5 flex flex-col z-40">
            {/* Brand */}
            <div className="h-16 flex items-center px-6 border-b border-white/5">
                <Link href="/" className="inline-flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                        <Play className="w-3 h-3 text-white fill-white" />
                    </div>
                    <span className="font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                        Studio
                    </span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                <Link href="/studio" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-secondary/50 text-white">
                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                </Link>
                <Link href="/studio/content" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-secondary/30 hover:text-white transition-colors">
                    <Video className="w-4 h-4" /> Content
                </Link>
                <Link href="/studio/analytics" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-secondary/30 hover:text-white transition-colors">
                    <BarChart2 className="w-4 h-4" /> Analytics
                </Link>
                <Link href="/studio/settings" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-secondary/30 hover:text-white transition-colors">
                    <Settings className="w-4 h-4" /> Settings
                </Link>
                <Link href="/studio/monetization" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:bg-secondary/30 hover:text-white transition-colors">
                    <DollarSign className="w-4 h-4" /> Monetization
                </Link>
            </nav>

            {/* Upload Button */}
            <div className="p-4">
                <Link href="/studio/upload" className="flex items-center justify-center gap-2 w-full h-10 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    <Upload className="w-4 h-4" /> Upload Video
                </Link>
            </div>

            {/* User Info */}
            <div className="p-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="User" />
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium truncate">Synthetic Dreams</p>
                        <p className="text-xs text-muted-foreground truncate">synthetic@example.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
