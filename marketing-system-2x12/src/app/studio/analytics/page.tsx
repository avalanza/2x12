import { StudioSidebar } from '@/components/StudioSidebar';
import { Eye, Clock, Users, ArrowUp, ArrowDown, Users2, PlayCircle } from 'lucide-react';

export default function AnalyticsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex">
            <StudioSidebar />

            <main className="flex-1 ml-64 p-8">
                <h1 className="text-2xl font-bold mb-8">Channel Analytics</h1>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard
                        label="Total Views"
                        value="2.4M"
                        change="+12%"
                        isPositive={true}
                    />
                    <StatCard
                        label="Watch Time (hrs)"
                        value="14.2K"
                        change="+5%"
                        isPositive={true}
                    />
                    <StatCard
                        label="Subscribers"
                        value="12K"
                        change="+150"
                        isPositive={true}
                    />
                    <StatCard
                        label="Revenue"
                        value="$3,450"
                        change="-2.5%"
                        isPositive={false}
                    />
                </div>

                {/* Main Chart Area (Placeholder) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="lg:col-span-2 p-6 rounded-xl bg-secondary/10 border border-white/10 h-[400px] flex flex-col">
                        <h3 className="font-semibold mb-6">Views over time</h3>
                        <div className="flex-1 flex items-end justify-between gap-2">
                            {/* Fake bars */}
                            {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((h, i) => (
                                <div key={i} className="bg-primary/50 hover:bg-primary/80 transition-colors w-full rounded-t-sm" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        </div>
                    </div>

                    {/* Realtime Stats */}
                    <div className="p-6 rounded-xl bg-secondary/10 border border-white/10">
                        <h3 className="font-semibold mb-2">Realtime</h3>
                        <p className="text-sm text-muted-foreground mb-6">Updating live</p>

                        <div className="text-4xl font-bold mb-2">452</div>
                        <p className="text-sm text-muted-foreground border-b border-white/5 pb-6 mb-6">Views in last 48 hours</p>

                        <div className="space-y-4">
                            <h4 className="text-sm font-medium">Top Content</h4>
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-16 h-9 bg-black rounded overflow-hidden">
                                        <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=100`} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium truncate">Video Title Goes Here</p>
                                        <p className="text-xs text-muted-foreground">1.2K views</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Audience Demographics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-xl bg-secondary/10 border border-white/10">
                        <h3 className="font-semibold mb-6 flex items-center gap-2">
                            <Users2 className="w-4 h-4 text-blue-400" /> Audience Age
                        </h3>
                        <div className="space-y-3">
                            {[{ l: '18-24', p: 15 }, { l: '25-34', p: 45 }, { l: '35-44', p: 25 }, { l: '45+', p: 15 }].map((item) => (
                                <div key={item.l}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>{item.l}</span>
                                        <span>{item.p}%</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-secondary/30 overflow-hidden">
                                        <div className="h-full bg-blue-500/80 rounded-full" style={{ width: `${item.p}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-xl bg-secondary/10 border border-white/10">
                        <h3 className="font-semibold mb-6 flex items-center gap-2">
                            <PlayCircle className="w-4 h-4 text-violet-400" /> Traffic Sources
                        </h3>
                        <div className="space-y-3">
                            {[{ l: 'Browse Features', p: 55 }, { l: 'Channel Pages', p: 20 }, { l: 'External', p: 15 }, { l: 'Search', p: 10 }].map((item) => (
                                <div key={item.l}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>{item.l}</span>
                                        <span>{item.p}%</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-secondary/30 overflow-hidden">
                                        <div className="h-full bg-violet-500/80 rounded-full" style={{ width: `${item.p}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

function StatCard({ label, value, change, isPositive }: { label: string, value: string, change: string, isPositive: boolean }) {
    return (
        <div className="p-6 rounded-xl bg-secondary/10 border border-white/10 hover:bg-secondary/20 transition-colors">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">{label}</h3>
            <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">{value}</div>
                <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    {change}
                </div>
            </div>
        </div>
    );
}
