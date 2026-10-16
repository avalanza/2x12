import Link from 'next/link';
import { Play, Clock, Eye } from 'lucide-react';

export interface VideoProps {
    id: string;
    title: string;
    thumbnail: string;
    creator: string;
    views: string;
    duration: string;
    avatar: string;
}

export function VideoCard({ video }: { video: VideoProps }) {
    return (
        <Link href={`/watch/${video.id}`} className="group relative block">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary/50 border border-white/5 mb-3">
                {/* Thumbnail Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] font-medium text-white flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                </div>
            </div>

            <div className="flex gap-3">
                <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden">
                        <img src={video.avatar} alt={video.creator} className="w-full h-full object-cover" />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-base leading-tight group-hover:text-blue-400 transition-colors line-clamp-2 mb-1">
                        {video.title}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                        <p className="hover:text-white transition-colors mb-0.5">{video.creator}</p>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {video.views} views</span>
                            <span>•</span>
                            <span>2 days ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
