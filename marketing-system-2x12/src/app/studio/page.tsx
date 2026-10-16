import { StudioSidebar } from '@/components/StudioSidebar';
import { VideoCard } from '@/components/VideoCard';
import { Eye, Clock, Users, ArrowUp } from 'lucide-react';

const RECENT_UPLOADS = [
    {
        id: '1',
        title: 'The Last Android: Chapter 1',
        thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
        creator: 'Synthetic Dreams',
        views: '124K',
        duration: '12:45',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop'
    },
    {
        id: '7',
        title: 'Cyberpunk Cityscape Timelapse',
        thumbnail: 'https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=1000&auto=format&fit=crop',
        creator: 'Synthetic Dreams',
        views: '45K',
        duration: '03:30',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop'
    }
];

export default function StudioDashboard() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex">
            <StudioSidebar />

            <main className="flex-1 ml-64 p-8">
                <h1 className="text-2xl font-bold mb-8">Channel Dashboard</h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatCard
                        label="Total Views"
                        value="2.4M"
                        icon={<Eye className="w-5 h-5 text-blue-400" />}
                        trend="+12% this week"
                    />
                    <StatCard
                        label="Watch Time (hrs)"
                        value="14.2K"
                        icon={<Clock className="w-5 h-5 text-violet-400" />}
                        trend="+5% this week"
                    />
                    <StatCard
                        label="Subscribers"
                        value="12K"
                        icon={<Users className="w-5 h-5 text-fuchsia-400" />}
                        trend="+150 this week"
                    />
                </div>

                {/* Recent Videos */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold">Recent Uploads</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {RECENT_UPLOADS.map((video) => (
                            <VideoCard key={video.id} video={video} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

function StatCard({ label, value, icon, trend }: { label: string, value: string, icon: React.ReactNode, trend: string }) {
    return (
        <div className="p-6 rounded-xl bg-secondary/30 border border-white/5">
            <div className="flex items-center justify-between mb-4">
                <span className="text-muted-foreground font-medium">{label}</span>
                <div className="p-2 rounded-lg bg-secondary/50">
                    {icon}
                </div>
            </div>
            <div className="text-3xl font-bold mb-1">{value}</div>
            <div className="text-sm text-green-400 flex items-center gap-1">
                <ArrowUp className="w-3 h-3" /> {trend}
            </div>
        </div>
    )
}
