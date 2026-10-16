import { Navbar } from '@/components/Navbar';
import { VideoCard, VideoProps } from '@/components/VideoCard';
import { Search, Filter } from 'lucide-react';

const MOCK_VIDEOS: VideoProps[] = [
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
        id: '2',
        title: 'Neon Tokyo Walkthrough (AI Generated)',
        thumbnail: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop',
        creator: 'CyberWalker',
        views: '89K',
        duration: '08:20',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop'
    },
    {
        id: '3',
        title: 'Abstract Fluid Dynamics Simulation',
        thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
        creator: 'Motion AI',
        views: '45K',
        duration: '04:15',
        avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop'
    },
    {
        id: '4',
        title: 'Future of Architecture: 2050',
        thumbnail: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1000&auto=format&fit=crop',
        creator: 'ArchBot',
        views: '210K',
        duration: '15:00',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop'
    },
    {
        id: '5',
        title: 'Underwater Civilization Discovery',
        thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
        creator: 'DeepBlue AI',
        views: '330K',
        duration: '22:10',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop'
    },
    {
        id: '6',
        title: 'Space Station Alpha: Daily Routine',
        thumbnail: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop',
        creator: 'CosmosGen',
        views: '1.2M',
        duration: '18:45',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop'
    }
];

const CATEGORIES = ['All', 'Animation', 'Realistic', 'Sci-Fi', 'Abstract', 'Nature', 'Documentary', 'Music Videos'];

export default function ExplorePage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
            <Navbar />

            <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
                {/* Header & Search */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Explore</h1>
                        <p className="text-muted-foreground">Discover the latest AI-generated masterpieces.</p>
                    </div>

                    <div className="relative w-full md:w-96 group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2.5 rounded-xl bg-secondary/50 border border-white/5 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                            placeholder="Search videos, creators, tags..."
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-4 no-scrollbar">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary font-medium hover:bg-secondary/80 transition-colors whitespace-nowrap">
                        <Filter className="w-4 h-4" /> Filters
                    </button>
                    <div className="w-[1px] h-6 bg-white/10 mx-2"></div>
                    {CATEGORIES.map((category, i) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${i === 0 ? 'bg-white text-black' : 'bg-secondary/30 hover:bg-secondary/60 text-muted-foreground hover:text-foreground'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {MOCK_VIDEOS.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            </main>
        </div>
    );
}
