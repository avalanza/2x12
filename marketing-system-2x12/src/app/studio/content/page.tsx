import { StudioSidebar } from '@/components/StudioSidebar';
import { Search, Filter, MoreVertical, Pencil, Trash2, Eye, MessageSquare, ThumbsUp } from 'lucide-react';

const VIDEOS = [
    {
        id: '1',
        title: 'The Last Android: Chapter 1',
        thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=200&auto=format&fit=crop',
        date: 'Oct 24, 2023',
        views: '124K',
        comments: '1.2K',
        likes: '8.5K',
        visibility: 'Public'
    },
    {
        id: '2',
        title: 'Cyberpunk Cityscape Timelapse',
        thumbnail: 'https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=200&auto=format&fit=crop',
        date: 'Oct 20, 2023',
        views: '45K',
        comments: '856',
        likes: '3.2K',
        visibility: 'Public'
    },
    {
        id: '3',
        title: 'Neon Nights - AI Generated Short',
        thumbnail: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
        date: 'Oct 15, 2023',
        views: '12K',
        comments: '230',
        likes: '1.1K',
        visibility: 'Private'
    }
];

export default function ContentPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex">
            <StudioSidebar />

            <main className="flex-1 ml-64 p-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold">Channel Content</h1>
                    <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                        New Video
                    </button>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-4 mb-6 sticky top-0 bg-background/95 backdrop-blur z-10 py-2">
                    <div className="relative flex-1 max-w-md">
                        <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Filter"
                            className="w-full h-10 pl-9 pr-4 rounded-lg bg-secondary/30 border border-white/10 focus:border-primary/50 outline-none text-sm transition-all"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors text-sm font-medium text-muted-foreground hover:text-white">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                </div>

                {/* Video Table */}
                <div className="border border-white/10 rounded-xl overflow-hidden bg-secondary/10">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 bg-secondary/30 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                <th className="px-6 py-4 w-[40%]">Video</th>
                                <th className="px-6 py-4">Visibility</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4 text-right">Views</th>
                                <th className="px-6 py-4 text-right">Comments</th>
                                <th className="px-6 py-4 text-right">Likes</th>
                                <th className="px-6 py-4 w-10"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {VIDEOS.map((video) => (
                                <tr key={video.id} className="group hover:bg-secondary/20 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex gap-4">
                                            <div className="w-32 aspect-video rounded-lg overflow-hidden bg-black relative shrink-0">
                                                <img src={video.thumbnail} alt="" className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                                    <button className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" title="Edit">
                                                        <Pencil className="w-4 h-4" />
                                                    </button>
                                                    <button className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors" title="View on YouTube">
                                                        <Eye className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="py-1">
                                                <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">{video.title}</h3>
                                                <p className="text-sm text-muted-foreground line-clamp-1 mt-1">Description would go here...</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-2 h-2 rounded-full ${video.visibility === 'Public' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                            <span className="text-sm">{video.visibility}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">
                                        {video.date}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right">
                                        {video.views}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right text-muted-foreground">
                                        {video.comments}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-right text-muted-foreground">
                                        {video.likes}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-white transition-colors">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
